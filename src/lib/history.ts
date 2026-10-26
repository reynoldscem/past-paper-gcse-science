import { useAppStore } from '../store/appStore';
import { ViewName } from '../types';
import { useProgressStore } from '../store/progressStore';

let isPopState = false;

export function pushView(view: ViewName) {
  if (!isPopState) {
    window.history.pushState({ view }, '', `#${view}`);
  }
}

export function initHistory() {
  // Set initial state
  const view = useAppStore.getState().view;
  window.history.replaceState({ view }, '', `#${view}`);

  // Listen for back/forward
  window.addEventListener('popstate', (e) => {
    let targetView = e.state?.view as ViewName | undefined;
    if (!targetView) return;

    isPopState = true;
    const state = useAppStore.getState();
    const attempts = useProgressStore.getState().attempts;
    const hasQuiz = !!state.activePaper?.questions.length && state.quizStartTime !== null &&
      state.activeAnswers.length === state.activePaper.questions.length;
    const hasResult = hasQuiz && attempts.some(a => a.id === `${state.activePaper!.id}:${state.quizStartTime}`);
    // History entries contain only view names; state may have been cleared on Home.
    // Replace invalid entries as well as routing away so Forward is safe too.
    if (targetView === 'quiz' && !hasQuiz) targetView = 'home';
    if (targetView === 'results' && !hasResult) targetView = 'history';
    if (targetView === 'review' && !attempts.some(a => a.id === state.reviewingAttemptId)) targetView = 'history';
    if (targetView !== e.state?.view) {
      window.history.replaceState({ view: targetView }, '', `#${targetView}`);
    }

    if (targetView === 'home') {
      const state = useAppStore.getState();
      if (state.activePaper && state.view === 'quiz') {
        // Mid-quiz — push the current state back so we don't lose it silently
        window.history.pushState({ view: 'quiz' }, '', '#quiz');
        isPopState = false;
        return;
      }
      useAppStore.getState().resetQuiz();
    } else if (targetView === 'quiz' && useAppStore.getState().view === 'results' && hasResult) {
      window.history.replaceState({ view: 'results' }, '', '#results');
    } else {
      useAppStore.setState({ view: targetView });
    }

    isPopState = false;
  });

  // Push to history whenever the view changes
  useAppStore.subscribe((state, prev) => {
    if (state.view !== prev.view) {
      pushView(state.view);
    }
  });
}
