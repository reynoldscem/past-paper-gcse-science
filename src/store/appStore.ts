import { readMockDraft, writeMockDraft, clearMockDraft } from '../lib/mockDraft';
import { create } from 'zustand';
import { ViewName, Paper, Subject } from '../types';

interface AppState {
  view: ViewName;
  userName: string | null;
  sessionToken: string | null;
  activePaper: Paper | null;
  flaggedQuestions: Set<number>;
  draftError: string;
  pendingMockPaper: Paper | null;
  replaceMock: () => void;
  toggleFlag: (index: number) => void;
  resumeMock: () => void;
  discardMock: () => void;
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

export const useAppStore = create<AppState>((set, get) => ({
  view: 'home',
  userName: localStorage.getItem('amy-science-user'),
  sessionToken: sessionStorage.getItem('amy-science-token'),
  flaggedQuestions: new Set(),
  draftError: '',
  pendingMockPaper: null,
  replaceMock: () => {
    const paper = get().pendingMockPaper;
    if (!paper) return;
    get().discardMock();
    set({ pendingMockPaper: null });
    get().startQuiz(paper);
  },
  toggleFlag: (index) => set(state => {
    const flaggedQuestions = new Set(state.flaggedQuestions);
    if (flaggedQuestions.has(index)) flaggedQuestions.delete(index); else flaggedQuestions.add(index);
    return { flaggedQuestions };
  }),
  discardMock: () => { if (get().userName) clearMockDraft(get().userName!); },
  resumeMock: () => {
    const draft = get().userName ? readMockDraft(get().userName!) : null;
    if (!draft) { set({ pendingMockPaper: null }); return; }
    set({ activePaper: draft.paper, activeAnswers: draft.answers, flaggedQuestions: new Set(draft.flags),
      currentQuestionIndex: draft.index, quizStartTime: draft.endTime - draft.paper.durationSeconds! * 1000,
      checkedQuestions: new Set(), pendingMockPaper: null, view: 'quiz' });
  },
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
    set({ userName: null, sessionToken: null, pendingMockPaper: null, view: 'home', activePaper: null, activeAnswers: [], flaggedQuestions: new Set(), quizStartTime: null });
  },

  setView: (view) => set({ view }),

  startQuiz: (paper) => {
    const user = get().userName;
    if (paper.mode === 'driving-mock' && user && readMockDraft(user)) {
      set({ pendingMockPaper: paper });
      return;
    }
    set({
    view: 'quiz',
    flaggedQuestions: new Set(),
    activePaper: paper,
    activeAnswers: new Array(paper.questions.length).fill(null),
    checkedQuestions: new Set(),
    currentQuestionIndex: 0,
    quizStartTime: Date.now(),
    pendingMockPaper: null,
    });
  },

  setAnswer: (questionIndex, answerIndex) => set((state) => {
    if (state.checkedQuestions.has(questionIndex)) return state;
    if (state.activePaper?.durationSeconds && state.quizStartTime &&
        Date.now() >= state.quizStartTime + state.activePaper.durationSeconds * 1000) return state;
    const newAnswers = [...state.activeAnswers];
    newAnswers[questionIndex] = answerIndex;
    return { activeAnswers: newAnswers };
  }),

  quickCheck: (questionIndex) => set((state) => {
    if (state.activePaper?.mode === 'driving-mock' || state.activeAnswers[questionIndex] === null) return state;
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
      if (get().view !== 'home') return;
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

// Save synchronously after each answer/navigation/flag change, including before refresh.
useAppStore.subscribe((state) => {
  if (!state.userName) return;
  try {
    if (state.activePaper?.mode !== 'driving-mock' || !state.quizStartTime) return;
    if (state.view !== 'quiz') return;
    const endTime = state.quizStartTime + state.activePaper.durationSeconds! * 1000;
    if (endTime <= Date.now()) return;
    writeMockDraft(state.userName, { paper: state.activePaper, answers: state.activeAnswers,
      flags: [...state.flaggedQuestions], index: state.currentQuestionIndex, endTime });
    if (state.draftError) useAppStore.setState({ draftError: '' });
  } catch {
    if (!state.draftError) useAppStore.setState({ draftError: 'This browser could not save the mock. Keep this page open to finish it.' });
  }
});
