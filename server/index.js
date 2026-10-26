import express from 'express';
import cors from 'cors';
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { rateLimit } from 'express-rate-limit';
import { loadUsers, verifyPassword } from './auth.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const DIST_DIR = path.resolve(__dirname, '..', 'dist');
const PORT = process.env.PORT || 3000;
const IS_DEV = process.env.NODE_ENV !== 'production';
const MAX_BODY_SIZE = '2mb';
const MAX_NAME_LENGTH = 30;
const NAME_REGEX = /^[a-z0-9_]+$/;

export function createApp({ dataDir = path.resolve(__dirname, 'data'), getUsers = loadUsers } = {}) {
const DATA_DIR = dataDir;
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
}, 3600000).unref();

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

  const users = getUsers();
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
    if (!Number.isSafeInteger(req.body?.revision) || req.body.revision < 0) {
      return res.status(428).json({ error: 'A progress revision is required. Reload the app.' });
    }
    const previous = fs.existsSync(req.userFile) ? JSON.parse(fs.readFileSync(req.userFile, 'utf-8')) : null;
    const revision = previous?.revision ?? 0;
    if (req.body.revision !== revision) {
      return res.status(409).json({ error: 'Progress changed. Reload before retrying.' });
    }
    const { historyBaseCount, snapshotBaseCount, ...document } = req.body;
    const next = { ...document, revision: revision + 1 };
    if (historyBaseCount !== undefined) {
      if (previous?.historyVersion !== 1 || document.historyVersion !== 1 ||
          historyBaseCount !== previous.attempts.length ||
          snapshotBaseCount !== previous.questionSnapshots.length ||
          !Array.isArray(document.attempts) || !Array.isArray(document.questionSnapshots)) {
        return res.status(409).json({ error: 'History changed. Reload before retrying.' });
      }
      const ids = new Set(previous.attempts.map(a => a.id));
      if (document.attempts.some(a => ids.has(a.id) || !ids.add(a.id))) {
        return res.status(400).json({ error: 'Duplicate attempt ID' });
      }
      next.attempts = [...previous.attempts, ...document.attempts];
      next.questionSnapshots = [...previous.questionSnapshots, ...document.questionSnapshots];
    }
    // The 2 MiB limit applies to requests, not the accumulated history on disk.
    // Append requests retain the same revision check and atomic write.
    // Synchronous compare/write is atomic within this single Express process.
    const temporary = `${req.userFile}.tmp`;
    fs.writeFileSync(temporary, JSON.stringify(next, null, 2));
    fs.renameSync(temporary, req.userFile);
    res.json({ ok: true, revision: next.revision });
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

// Legacy clients must not bypass revision checks or reset the revision counter.
app.delete('/api/progress/:name', validateName, (_req, res) => {
  res.status(428).json({ error: 'Reset requires a revision-checked progress POST. Reload the app.' });
});

// ─── Serve frontend ──────────────────────────────────────────────────
if (fs.existsSync(DIST_DIR)) {
  app.use(express.static(DIST_DIR));
  app.get('/{*path}', (_req, res) => {
    res.sendFile(path.join(DIST_DIR, 'index.html'));
  });
}

return app;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
const app = createApp();
// '::' listens on IPv6 and IPv4 (dual-stack), so both localhost (::1) and 127.0.0.1 work
const HOST = process.env.HOST || '::';
app.listen(PORT, HOST, () => {
  console.log(`Server running on http://[${HOST}]:${PORT}`);
});

}
