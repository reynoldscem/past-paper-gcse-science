import type { HazardSession } from '../hazard/model';
import { create } from 'zustand';
import { AppProgress, LearningArea, PaperAttempt } from '../types';
import { defaultProgress, loadProgress, saveProgress, ProgressError } from '../lib/storage';
import { clearMockDraft } from '../lib/mockDraft';
import { useAppStore } from './appStore';

const pendingKey = (user: string) => `pending-attempts:${user}`;
function readPending(user: string): PaperAttempt[] {
  return JSON.parse(localStorage.getItem(pendingKey(user)) ?? '[]');
}
let queue: Promise<unknown> = Promise.resolve();
let loadGeneration = 0;

interface ProgressState extends AppProgress {
  loaded: boolean;
  loadError: string;
  saveError: string;
  pendingAttempts: PaperAttempt[];
  savingPending: boolean;
  hydrate: () => Promise<void>;
  recordSign: (path: string, correct: boolean) => Promise<void>;
  saveHazardSessions: (sessions: HazardSession[]) => Promise<void>;
  setActiveLearningArea: (area: LearningArea) => Promise<void>;
  addAttempt: (attempt: PaperAttempt) => Promise<void>;
  retryPending: () => Promise<void>;
  clearProgress: () => Promise<void>;
}

// Capture identity at enqueue time, but build the snapshot only when its turn starts.
function mutate(build: (state: ProgressState) => AppProgress): Promise<void> {
  const { userName, sessionToken } = useAppStore.getState();
  const current = () => userName && sessionToken && useAppStore.getState().userName === userName && useAppStore.getState().sessionToken === sessionToken;
  const task = queue.then(async () => {
    if (!current() || !useProgressStore.getState().loaded) throw new Error('Load progress before saving.');
    const snapshot = build(useProgressStore.getState());
    try {
      const revision = await saveProgress(userName!, snapshot);
      if (current()) useProgressStore.setState({ ...snapshot, revision, saveError: '' });
    } catch (error) {
      if (current() && error instanceof ProgressError && error.status === 409) {
        useProgressStore.setState({ loaded: false, loadError: error.message });
      }
      throw error;
    }
  });
  queue = task.catch(() => {});
  return task;
}

// Explicit fields prevent UI state (and pending copies) entering the saved document.
function snapshot(s: AppProgress): AppProgress {
  const { revision, signAccuracy, hazardSessions, activeLearningArea, attempts,
    totalPapersCompleted, bestScores, streakDays, lastActiveDate } = s;
  return { revision, signAccuracy, hazardSessions, activeLearningArea, attempts,
    totalPapersCompleted, bestScores, streakDays, lastActiveDate };
}

export const useProgressStore = create<ProgressState>((set, get) => ({
  ...defaultProgress,
  loaded: false, loadError: '', saveError: '', pendingAttempts: [], savingPending: false,
  hydrate: async () => {
    const generation = ++loadGeneration;
    const { userName, sessionToken } = useAppStore.getState();
    set({ loaded: false, loadError: '', pendingAttempts: [] });
    try {
      // Do not allow an older in-flight write to land after hydration.
      await queue;
      const progress = await loadProgress(userName!);
      if (generation !== loadGeneration || useAppStore.getState().sessionToken !== sessionToken) return;
      set({ ...progress, loaded: true, pendingAttempts: readPending(userName!), saveError: '' });
    } catch {
      if (generation === loadGeneration) set({ loaded: false, loadError: 'Could not load progress. Your saved work has not been replaced.' });
    }
  },
  recordSign: (path, correct) => mutate(state => {
    const old = state.signAccuracy?.[path] ?? { correct: 0, attempts: 0 };
    return { ...snapshot(state), signAccuracy: { ...state.signAccuracy,
      [path]: { correct: old.correct + Number(correct), attempts: old.attempts + 1 } } };
  }),
  saveHazardSessions: sessions => {
    // Apply this caller's changes to the latest snapshot, preserving queued additions.
    const before = get().hazardSessions ?? [];
    const removed = new Set(before.filter(old => !sessions.some(s => s.id === old.id)).map(s => s.id));
    const changed = sessions.filter(s => !before.some(old => old.id === s.id && JSON.stringify(old) === JSON.stringify(s)));
    return mutate(state => ({ ...snapshot(state), hazardSessions: [
      ...(state.hazardSessions ?? []).filter(s => !removed.has(s.id) && !changed.some(c => c.id === s.id)), ...changed,
    ] }));
  },
  setActiveLearningArea: async area => {
    try { await mutate(state => ({ ...snapshot(state), activeLearningArea: area })); }
    catch { set({ saveError: 'Learning area could not be saved. Please select it again to retry.' }); }
  },
  addAttempt: async attempt => {
    const user = useAppStore.getState().userName;
    if (!user) throw new Error('Please log in.');
    // Persist before sending, including when the network acknowledgement is lost.
    const pending = readPending(user);
    const existing = pending.find(a => a.id === attempt.id);
    if (existing) attempt = existing; else pending.push(attempt);
    localStorage.setItem(pendingKey(user), JSON.stringify(pending));
    set({ pendingAttempts: pending });
    await mutate(state => {
      if (state.attempts.some(a => a.id === attempt.id)) return snapshot(state);
      const today = new Date().toISOString().split('T')[0];

      let streakDays = state.streakDays;
      if (state.lastActiveDate) {
        const lastDate = new Date(state.lastActiveDate);
        const todayDate = new Date(today);
        const diffDays = Math.floor((todayDate.getTime() - lastDate.getTime()) / 86400000);
        if (diffDays === 1) {
          streakDays += 1;
        } else if (diffDays > 1) {
          streakDays = 1;
        }
      } else {
        streakDays = 1;
      }

      const bestScores = { ...state.bestScores };
      const existing = bestScores[attempt.paperTitle];
      if (!existing || attempt.percentage > existing) {
        bestScores[attempt.paperTitle] = attempt.percentage;
      }

      const newState = {
        signAccuracy: state.signAccuracy,
        hazardSessions: state.hazardSessions,
        activeLearningArea: state.activeLearningArea,
        attempts: [...state.attempts, attempt],
        totalPapersCompleted: state.totalPapersCompleted + 1,
        bestScores,
        streakDays,
        lastActiveDate: today,
      };

      return { ...newState, revision: state.revision };
    });
    const remaining = readPending(user).filter(a => a.id !== attempt.id);
    localStorage.setItem(pendingKey(user), JSON.stringify(remaining));
    // Only remove the draft belonging to this acknowledged attempt.
    try {
      const draft = JSON.parse(localStorage.getItem(`driving-mock-draft:${user}`) ?? 'null');
      if (draft?.paper?.id === attempt.paperId) clearMockDraft(user);
    } catch { /* An unreadable draft must not undo an acknowledged save. */ }
    if (useAppStore.getState().userName === user) set({ pendingAttempts: remaining });
  },
  retryPending: async () => {
    if (get().savingPending) return;
    set({ savingPending: true });
    try {
      for (const attempt of get().pendingAttempts) {
        await get().addAttempt(attempt);
        const app = useAppStore.getState();
        if (app.view === 'quiz' && app.activePaper?.id === attempt.paperId) app.setView('results');
      }
    }
    catch { /* The durable pending banner stays visible until acknowledgement. */ }
    finally { set({ savingPending: false }); }
  },
  clearProgress: async () => {
    try { await mutate(state => ({ ...defaultProgress, revision: state.revision, activeLearningArea: state.activeLearningArea })); }
    catch { set({ saveError: 'Progress could not be cleared. Please retry.' }); }
  },
}));

useAppStore.subscribe((state, previous) => {
  if (state.sessionToken !== previous.sessionToken || state.userName !== previous.userName) {
    ++loadGeneration;
    useProgressStore.setState({ loaded: false, pendingAttempts: [], loadError: '', saveError: '' });
  }
});
