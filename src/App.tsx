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
  const userName = useAppStore(s => s.userName);
  const hydrate = useProgressStore(s => s.hydrate);
  const loaded = useProgressStore(s => s.loaded);

  useEffect(() => {
    if (!historyInitialised) {
      initHistory();
      historyInitialised = true;
    }
  }, []);

  useEffect(() => {
    if (userName) {
      useProgressStore.setState({ loaded: false });
      hydrate();
    }
  }, [userName, hydrate]);

  const hasToken = !!sessionStorage.getItem('amy-science-token');

  if (!userName || !hasToken) {
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
        <div className="text-2xl shimmer-text font-bold">Loading...</div>
      </div>
    );
  }

  const views: Record<string, React.ReactNode> = {
    home: <HomeView />,
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
