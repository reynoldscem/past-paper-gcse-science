import { useAppStore } from '../../store/appStore';

export function TopBar() {
  const { view, resetQuiz, setView } = useAppStore();

  if (view === 'home') return null;

  return (
    <div className="flex items-center justify-between px-4 py-3 text-sm">
      <button
        onClick={() => {
          if (view === 'quiz') {
            if (window.confirm(useAppStore.getState().activePaper?.mode === 'driving-mock' ? 'Leave this mock? You can resume on this browser before its original deadline.' : 'Leave this quiz? Your answers so far won\'t be saved.')) {
              resetQuiz();
            }
          } else {
            resetQuiz();
          }
        }}
        className="text-navy-400 hover:text-white transition-colors flex items-center gap-1"
      >
        <span>{'🏠'}</span>
        <span>Home</span>
      </button>

      {view === 'review' && (
        <button
          onClick={() => setView('history')}
          className="text-navy-400 hover:text-white transition-colors"
        >
          History
        </button>
      )}
    </div>
  );
}
