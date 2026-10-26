import { decodeProgress, encodeProgress, type StoredProgress } from './progressCodec';
import { AppProgress } from '../types';
import { useAppStore } from '../store/appStore';

const savedHistories = new Map<string, StoredProgress>();
const API_BASE = ''; // Vite proxies /api in development; production stays same-origin.

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
    super(status === 413 ? 'Progress is too large to save (413). Your pending attempt is still on this device.' : status === 409 ? 'Progress changed elsewhere. Reload progress before retrying.' : 'Progress could not be saved. Please retry.');
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
  const progress = { ...defaultProgress, ...(data ?? {}) };
  // Legacy documents migrate on the next acknowledged save.
  if (progress.historyVersion === 1) savedHistories.set(userName, progress);
  else savedHistories.delete(userName);
  return decodeProgress(progress);
}

export async function saveProgress(userName: string, progress: AppProgress): Promise<number> {
  const token = useAppStore.getState().sessionToken;
  const encoded = encodeProgress(progress);
  const previous = savedHistories.get(userName);
  // Only append new history after migration; normal requests stay independent
  // of the number of completed papers. Reset remains a full revisioned write.
  const append = previous && previous.revision === progress.revision &&
    previous.attempts.length <= encoded.attempts.length &&
    previous.attempts.every((a, i) => a.id === encoded.attempts[i].id) &&
    previous.questionSnapshots.every((q, i) => JSON.stringify(q) === JSON.stringify(encoded.questionSnapshots[i]));
  const body = append ? { ...encoded,
    historyBaseCount: previous.attempts.length, snapshotBaseCount: previous.questionSnapshots.length,
    attempts: encoded.attempts.slice(previous.attempts.length),
    questionSnapshots: encoded.questionSnapshots.slice(previous.questionSnapshots.length),
  } : encoded;
  const response = await fetch(`${API_BASE}/api/progress/${encodeURIComponent(userName)}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...authHeaders() },
    body: JSON.stringify(body),
  });
  checkResponse(response, token);
  const acknowledgement = await response.json();
  if (acknowledgement?.ok !== true || !Number.isInteger(acknowledgement.revision)) {
    throw new Error('Save was not acknowledged. Please retry.');
  }
  savedHistories.set(userName, { ...encoded, revision: acknowledgement.revision });
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
