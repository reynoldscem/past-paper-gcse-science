import type { Paper } from '../types';
export interface MockDraft {
  paper: Paper;
  answers: (number | null)[];
  flags: number[];
  index: number;
  endTime: number;
}
const key = (user: string) => `driving-mock-draft:${user}`;
export function clearMockDraft(user: string) {
  try { localStorage.removeItem(key(user)); } catch { /* Storage may be disabled. */ }
}
export function writeMockDraft(user: string, draft: MockDraft) {
  localStorage.setItem(key(user), JSON.stringify(draft));
}
export function readMockDraft(user: string): MockDraft | null {
  try {
    const d = JSON.parse(localStorage.getItem(key(user)) ?? 'null') as MockDraft | null;
    if (!d) return null;
    const count = d.paper?.questions?.length;
    if (d.paper?.mode !== 'driving-mock' || count !== 50 || d.paper.durationSeconds !== 3420 ||
        !Number.isFinite(d.endTime) || d.endTime <= Date.now() || d.endTime > Date.now() + 3420000 ||
        !Array.isArray(d.answers) || d.answers.length !== count ||
        !d.answers.every(a => a === null || Number.isInteger(a) && a >= 0 && a < 32) ||
        !Array.isArray(d.flags) || !d.flags.every(i => Number.isInteger(i) && i >= 0 && i < count) ||
        !Number.isInteger(d.index) || d.index < 0 || d.index >= count ||
        !d.paper.questions.every(q => q && Array.isArray(q.options) && q.options.length === (q.multi ? 5 : 4) && typeof q.question === 'string')) {
      clearMockDraft(user); return null;
    }
    return d;
  } catch { clearMockDraft(user); return null; }
}
