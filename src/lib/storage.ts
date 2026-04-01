import { AppProgress } from '../types';

const API_BASE = import.meta.env.DEV
  ? `${window.location.protocol}//${window.location.hostname}:3001`
  : '';

const defaultProgress: AppProgress = {
  attempts: [],
  totalPapersCompleted: 0,
  bestScores: {},
  streakDays: 0,
  lastActiveDate: '',
};

function authHeaders(): Record<string, string> {
  const token = sessionStorage.getItem('amy-science-token');
  if (!token) return {};
  return { 'Authorization': `Bearer ${token}` };
}

export async function login(name: string, password: string): Promise<{ ok: boolean; token?: string; name?: string; error?: string }> {
  try {
    const res = await fetch(`${API_BASE}/api/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, password }),
    });
    const data = await res.json();
    if (res.ok && data.token) {
      sessionStorage.setItem('amy-science-token', data.token);
      return { ok: true, token: data.token, name: data.name };
    }
    return { ok: false, error: data.error || 'Login failed' };
  } catch {
    return { ok: false, error: 'Cannot connect to server' };
  }
}

export async function loadProgress(userName: string): Promise<AppProgress> {
  try {
    const res = await fetch(`${API_BASE}/api/progress/${encodeURIComponent(userName)}`, {
      headers: authHeaders(),
    });
    if (res.status === 401) {
      sessionStorage.removeItem('amy-science-token');
      localStorage.removeItem('amy-science-user');
      // Don't reload — just let the app render the login view on next tick
      return { ...defaultProgress };
    }
    if (!res.ok) throw new Error(res.statusText);
    const data = await res.json();
    return data ?? { ...defaultProgress };
  } catch {
    return { ...defaultProgress };
  }
}

export async function saveProgress(userName: string, progress: AppProgress): Promise<void> {
  try {
    await fetch(`${API_BASE}/api/progress/${encodeURIComponent(userName)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...authHeaders() },
      body: JSON.stringify(progress),
    });
  } catch {
    console.error('Failed to save progress');
  }
}

export async function exportAll(userName: string): Promise<string> {
  try {
    const res = await fetch(`${API_BASE}/api/export/${encodeURIComponent(userName)}`, {
      headers: authHeaders(),
    });
    if (!res.ok) throw new Error(res.statusText);
    const data = await res.json();
    return JSON.stringify(data, null, 2);
  } catch {
    return '{}';
  }
}

export async function clearAll(userName: string): Promise<void> {
  try {
    await fetch(`${API_BASE}/api/progress/${encodeURIComponent(userName)}`, {
      method: 'DELETE',
      headers: authHeaders(),
    });
  } catch {
    console.error('Failed to clear progress');
  }
}
