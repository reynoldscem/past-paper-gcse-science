import { useAppStore } from '../store/appStore';
import { ViewName } from '../types';

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
    const targetView = e.state?.view as ViewName | undefined;
    if (!targetView) return;

    isPopState = true;

    if (targetView === 'home') {
      const state = useAppStore.getState();
      if (state.activePaper && state.view === 'quiz') {
        // Mid-quiz — push the current state back so we don't lose it silently
        window.history.pushState({ view: 'quiz' }, '', '#quiz');
        isPopState = false;
        return;
      }
      useAppStore.getState().resetQuiz();
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
