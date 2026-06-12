import { create } from 'zustand';
import { ViewName, Paper, Subject } from '../types';

interface AppState {
  view: ViewName;
  userName: string | null;
  sessionToken: string | null;
  activePaper: Paper | null;
  activeAnswers: (number | null)[];
  checkedQuestions: Set<number>;
  currentQuestionIndex: number;
  quizStartTime: number | null;
  selectedSubject: Subject | null;
  reviewingAttemptId: string | null;

  login: (name: string) => void;
  logout: () => void;
  setView: (view: ViewName) => void;
  startQuiz: (paper: Paper) => void;
  setAnswer: (questionIndex: number, answerIndex: number) => void;
  quickCheck: (questionIndex: number) => void;
  setQuestionIndex: (index: number) => void;
  selectSubject: (subject: Subject) => void;
  reviewAttempt: (attemptId: string) => void;
  resetQuiz: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  view: 'home',
  userName: localStorage.getItem('amy-science-user'),
  sessionToken: sessionStorage.getItem('amy-science-token'),
  activePaper: null,
  activeAnswers: [],
  checkedQuestions: new Set(),
  currentQuestionIndex: 0,
  quizStartTime: null,
  selectedSubject: null,
  reviewingAttemptId: null,

  login: (name) => {
    const normalised = name.trim().toLowerCase();
    localStorage.setItem('amy-science-user', normalised);
    set({
      userName: normalised,
      sessionToken: sessionStorage.getItem('amy-science-token'),
      view: 'home',
    });
  },

  logout: () => {
    localStorage.removeItem('amy-science-user');
    sessionStorage.removeItem('amy-science-token');
    set({ userName: null, sessionToken: null, view: 'home' });
  },

  setView: (view) => set({ view }),

  startQuiz: (paper) => set({
    view: 'quiz',
    activePaper: paper,
    activeAnswers: new Array(paper.questions.length).fill(null),
    checkedQuestions: new Set(),
    currentQuestionIndex: 0,
    quizStartTime: Date.now(),
  }),

  setAnswer: (questionIndex, answerIndex) => set((state) => {
    if (state.checkedQuestions.has(questionIndex)) return state;
    const newAnswers = [...state.activeAnswers];
    newAnswers[questionIndex] = answerIndex;
    return { activeAnswers: newAnswers };
  }),

  quickCheck: (questionIndex) => set((state) => {
    if (state.activeAnswers[questionIndex] === null) return state;
    const newChecked = new Set(state.checkedQuestions);
    newChecked.add(questionIndex);
    return { checkedQuestions: newChecked };
  }),

  setQuestionIndex: (index) => set({ currentQuestionIndex: index }),

  selectSubject: (subject) => set({ selectedSubject: subject, view: 'select' }),

  reviewAttempt: (attemptId) => set({ reviewingAttemptId: attemptId, view: 'review' }),

  resetQuiz: () => {
    set({ view: 'home' });
    // Delay clearing quiz state so exit animations can render
    setTimeout(() => {
      set({
        activePaper: null,
        activeAnswers: [],
        checkedQuestions: new Set(),
        currentQuestionIndex: 0,
        quizStartTime: null,
        reviewingAttemptId: null,
      });
    }, 300);
  },
}));
