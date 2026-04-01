import { create } from 'zustand';
import { AppProgress, PaperAttempt } from '../types';
import { loadProgress, saveProgress } from '../lib/storage';
import { useAppStore } from './appStore';

function getUserName(): string {
  return useAppStore.getState().userName ?? 'anonymous';
}

interface ProgressState extends AppProgress {
  loaded: boolean;
  hydrate: () => Promise<void>;
  addAttempt: (attempt: PaperAttempt) => void;
  clearProgress: () => void;
}

export const useProgressStore = create<ProgressState>((set, get) => ({
  attempts: [],
  totalPapersCompleted: 0,
  bestScores: {},
  streakDays: 0,
  lastActiveDate: '',
  loaded: false,

  hydrate: async () => {
    const progress = await loadProgress(getUserName());
    set({ ...progress, loaded: true });
  },

  addAttempt: (attempt) => {
    const state = get();
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
      attempts: [...state.attempts, attempt],
      totalPapersCompleted: state.totalPapersCompleted + 1,
      bestScores,
      streakDays,
      lastActiveDate: today,
    };

    set(newState);
    saveProgress(getUserName(), {
      attempts: newState.attempts,
      totalPapersCompleted: newState.totalPapersCompleted,
      bestScores: newState.bestScores,
      streakDays: newState.streakDays,
      lastActiveDate: newState.lastActiveDate,
    });
  },

  clearProgress: () => {
    const empty = {
      attempts: [],
      totalPapersCompleted: 0,
      bestScores: {},
      streakDays: 0,
      lastActiveDate: '',
    };
    set(empty);
    saveProgress(getUserName(), empty);
  },
}));
