import express from 'express';
import cors from 'cors';
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { rateLimit } from 'express-rate-limit';
import { loadUsers, verifyPassword } from './auth.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.resolve(__dirname, 'data');
const DIST_DIR = path.resolve(__dirname, '..', 'dist');
const PORT = process.env.PORT || 3000;
const IS_DEV = process.env.NODE_ENV !== 'production';
const MAX_BODY_SIZE = '2mb';
const MAX_NAME_LENGTH = 30;
const NAME_REGEX = /^[a-z0-9_]+$/;

fs.mkdirSync(DATA_DIR, { recursive: true });

const app = express();
// Trust exactly one proxy hop (Caddy) — makes req.ip the real client IP
app.set('trust proxy', 1);
app.use(express.json({ limit: MAX_BODY_SIZE }));

if (IS_DEV) {
  app.use(cors());
}

// Security headers
app.use((_req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

// ─── Session management ──────────────────────────────────────────────
const sessions = new Map(); // token → { name, createdAt }
const SESSION_TTL = 7 * 24 * 60 * 60 * 1000; // 7 days

// Clean expired sessions every hour
setInterval(() => {
  const now = Date.now();
  for (const [token, session] of sessions) {
    if (now - session.createdAt > SESSION_TTL) sessions.delete(token);
  }
}, 3600000);

function createSession(name) {
  const token = crypto.randomBytes(32).toString('hex');
  sessions.set(token, { name, createdAt: Date.now() });
  return token;
}

// Auth middleware — validates session token on all /api/ routes except /api/login
function requireAuth(req, res, next) {
  if (req.path === '/api/login' || req.path === '/login') return next();

  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Not authenticated' });
  }
  const token = auth.slice(7);
  const session = sessions.get(token);
  if (!session || Date.now() - session.createdAt > SESSION_TTL) {
    sessions.delete(token);
    return res.status(401).json({ error: 'Session expired' });
  }
  req.sessionUser = session.name;
  next();
}

// ─── Helpers ─────────────────────────────────────────────────────────
function sanitiseName(raw) {
  if (!raw || typeof raw !== 'string') return null;
  const safe = raw.toLowerCase().trim().replace(/[^a-z0-9]/g, '_').replace(/_+/g, '_').replace(/^_|_$/g, '');
  if (!safe || safe.length > MAX_NAME_LENGTH || !NAME_REGEX.test(safe)) return null;
  return safe;
}

function userFile(safeName) {
  const file = path.join(DATA_DIR, `${safeName}.json`);
  if (!file.startsWith(DATA_DIR)) return null;
  return file;
}

// Validate :name param AND check user is accessing their own data
function validateName(req, res, next) {
  const name = sanitiseName(req.params.name);
  if (!name) {
    return res.status(400).json({ error: 'Invalid name' });
  }
  if (req.sessionUser !== name) {
    return res.status(403).json({ error: 'Forbidden' });
  }
  req.safeName = name;
  req.userFile = userFile(name);
  if (!req.userFile) {
    return res.status(400).json({ error: 'Invalid name' });
  }
  next();
}

app.use('/api', requireAuth);

// ─── Login ───────────────────────────────────────────────────────────
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: { error: 'Too many login attempts, please try again later' },
});

app.post('/api/login', loginLimiter, async (req, res) => {
  const { name, password } = req.body;
  if (!name || !password || typeof name !== 'string' || typeof password !== 'string') {
    return res.status(400).json({ error: 'Name and password required' });
  }

  const safeName = sanitiseName(name);
  if (!safeName) {
    return res.status(400).json({ error: 'Invalid name' });
  }

  const users = loadUsers();
  const user = users[safeName];
  if (!user) {
    return res.status(401).json({ error: 'Invalid name or password' });
  }

  const valid = await verifyPassword(password, user.hash);
  if (!valid) {
    return res.status(401).json({ error: 'Invalid name or password' });
  }

  const token = createSession(safeName);
  res.json({ ok: true, token, name: safeName });
});

// ─── Progress API ────────────────────────────────────────────────────
app.get('/api/progress/:name', validateName, (req, res) => {
  if (!fs.existsSync(req.userFile)) {
    return res.json(null);
  }
  try {
    const data = JSON.parse(fs.readFileSync(req.userFile, 'utf-8'));
    res.json(data);
  } catch {
    res.status(500).json({ error: 'Failed to read data' });
  }
});

app.post('/api/progress/:name', validateName, (req, res) => {
  try {
    const json = JSON.stringify(req.body);
    if (json.length > 2 * 1024 * 1024) {
      return res.status(413).json({ error: 'Payload too large' });
    }
    fs.writeFileSync(req.userFile, JSON.stringify(req.body, null, 2));
    res.json({ ok: true });
  } catch {
    res.status(500).json({ error: 'Failed to save data' });
  }
});

app.get('/api/export/:name', validateName, (req, res) => {
  if (!fs.existsSync(req.userFile)) {
    return res.json({});
  }
  try {
    const data = JSON.parse(fs.readFileSync(req.userFile, 'utf-8'));
    res.json(data);
  } catch {
    res.status(500).json({ error: 'Failed to read data' });
  }
});

app.delete('/api/progress/:name', validateName, (req, res) => {
  try {
    if (fs.existsSync(req.userFile)) {
      fs.unlinkSync(req.userFile);
    }
    res.json({ ok: true });
  } catch {
    res.status(500).json({ error: 'Failed to delete data' });
  }
});

// ─── Serve frontend ──────────────────────────────────────────────────
if (fs.existsSync(DIST_DIR)) {
  app.use(express.static(DIST_DIR));
  app.get('/{*path}', (_req, res) => {
    res.sendFile(path.join(DIST_DIR, 'index.html'));
  });
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
