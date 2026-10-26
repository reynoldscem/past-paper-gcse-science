import { AppProgress } from '../types';
import { useAppStore } from '../store/appStore';

const API_BASE = import.meta.env.DEV
  ? `${window.location.protocol}//${window.location.hostname}:3001`
  : '';

export const defaultProgress: AppProgress = {
  revision: 0,
  signAccuracy: {},
  hazardSessions: [],
  activeLearningArea: 'science',
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

export class ProgressError extends Error {
  constructor(public status: number) {
    super(status === 409 ? 'Progress changed elsewhere. Reload progress before retrying.' : 'Progress could not be saved. Please retry.');
  }
}

function checkResponse(response: Response, token: string | null) {
  if (response.status === 401 && useAppStore.getState().sessionToken === token) {
    useAppStore.getState().logout();
  }
  if (!response.ok) throw new ProgressError(response.status);
}

export async function loadProgress(userName: string): Promise<AppProgress> {
  const token = useAppStore.getState().sessionToken;
  const response = await fetch(`${API_BASE}/api/progress/${encodeURIComponent(userName)}`, { headers: authHeaders() });
  checkResponse(response, token);
  const data = await response.json();
  if (data !== null && (typeof data !== 'object' || Array.isArray(data))) throw new Error('Invalid progress');
  return { ...defaultProgress, ...(data ?? {}) };
}

export async function saveProgress(userName: string, progress: AppProgress): Promise<number> {
  const token = useAppStore.getState().sessionToken;
  const response = await fetch(`${API_BASE}/api/progress/${encodeURIComponent(userName)}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...authHeaders() },
    body: JSON.stringify(progress),
  });
  checkResponse(response, token);
  const acknowledgement = await response.json();
  if (acknowledgement?.ok !== true || !Number.isInteger(acknowledgement.revision)) {
    throw new Error('Save was not acknowledged. Please retry.');
  }
  return acknowledgement.revision;
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
