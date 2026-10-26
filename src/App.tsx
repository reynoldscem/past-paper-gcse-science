import { SignDrillView } from './views/SignDrillView';
import { HazardView } from './hazard/HazardView';
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useAppStore } from './store/appStore';
import { useProgressStore } from './store/progressStore';
import { StarsBg } from './components/ui/StarsBg';
import { TopBar } from './components/ui/TopBar';
import { LoginView } from './views/LoginView';
import { HomeView } from './views/HomeView';
import { PaperSelectView } from './views/PaperSelectView';
import { QuizView } from './views/QuizView';
import { ResultsView } from './views/ResultsView';
import { AdminView } from './views/AdminView';
import { HistoryView } from './views/HistoryView';
import { ReviewView } from './views/ReviewView';
import { StatsView } from './views/StatsView';
import { initHistory } from './lib/history';

let historyInitialised = false;

function App() {
  const view = useAppStore(s => s.view);
  const pendingMockPaper = useAppStore(s => s.pendingMockPaper);
  const userName = useAppStore(s => s.userName);
  const sessionToken = useAppStore(s => s.sessionToken);
  const hydrate = useProgressStore(s => s.hydrate);
  const loaded = useProgressStore(s => s.loaded);
  const { loadError, saveError, pendingAttempts, retryPending, savingPending } = useProgressStore();

  useEffect(() => {
    if (!historyInitialised) {
      initHistory();
      historyInitialised = true;
    }
  }, []);

  useEffect(() => {
    if (userName && sessionToken) {
      useProgressStore.setState({ loaded: false });
      hydrate();
    }
  }, [userName, sessionToken, hydrate]);

  if (!userName || !sessionToken) {
    return (
      <div className="relative min-h-screen">
        <StarsBg />
        <div className="relative z-10">
          <LoginView />
        </div>
      </div>
    );
  }

  if (!loaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        {loadError ? <div role="alert"><p>{loadError}</p><button onClick={() => void hydrate()}>Retry loading progress</button></div>
          : <div className="text-2xl shimmer-text font-bold">Loading...</div>}
      </div>
    );
  }

  const views: Record<string, React.ReactNode> = {
    home: <HomeView />,
    'sign-drill': <SignDrillView />,
    hazard: <HazardView />,
    select: <PaperSelectView />,
    quiz: <QuizView />,
    results: <ResultsView />,
    admin: <AdminView />,
    history: <HistoryView />,
    review: <ReviewView />,
    stats: <StatsView />,
  };

  return (
    <div className="relative min-h-screen">
      <StarsBg />
      <div className="relative z-10">
        <TopBar />
        {pendingMockPaper && <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div role="dialog" aria-modal="true" aria-labelledby="parked-mock-title" className="bg-navy-900 rounded-xl p-6 max-w-md space-y-4">
            <h2 id="parked-mock-title" className="text-xl font-bold">You have a saved mock</h2>
            <p>Resume it with its original deadline, or discard it to start a new mock.</p>
            <button className="btn-primary w-full" autoFocus onClick={() => useAppStore.getState().resumeMock()}>Resume saved mock</button>
            <button className="btn-secondary w-full" onClick={() => useAppStore.getState().replaceMock()}>Discard saved mock and start new</button>
            <button className="w-full" onClick={() => useAppStore.setState({ pendingMockPaper: null })}>Cancel</button>
          </div>
        </div>}

        {saveError && <p role="alert">{saveError}</p>}
        {pendingAttempts.length > 0 && <div role="alert" className="p-4 text-center">
          <p>Completed attempt not saved yet. Retry to save it to your account.</p>
          <button disabled={savingPending} onClick={() => void retryPending()}>Retry pending saves</button>
        </div>}
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {views[view]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
