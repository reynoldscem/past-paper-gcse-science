import { motion } from 'framer-motion';
import { useAppStore } from '../store/appStore';
import { useProgressStore } from '../store/progressStore';

export function HistoryView() {
  const { setView, reviewAttempt } = useAppStore();
  const { attempts } = useProgressStore();

  const sorted = [...attempts].reverse();

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => setView('home')}
            className="text-navy-400 hover:text-white transition-colors text-lg"
          >
            {'←'} Back
          </button>
          <h2 className="text-2xl font-bold text-navy-100">Paper History</h2>
        </div>

        {sorted.length === 0 ? (
          <div className="glass-card rounded-xl p-8 text-center text-navy-400">
            <p className="text-lg">No papers completed yet.</p>
            <p className="text-sm mt-2">Go smash a quiz and it'll show up here!</p>
          </div>
        ) : (
          <div className="space-y-3">
            {sorted.map((attempt, i) => {
              const date = new Date(attempt.completedAt);
              const dateStr = date.toLocaleDateString('en-GB', {
                day: 'numeric', month: 'short', year: 'numeric',
              });
              const timeStr = date.toLocaleTimeString('en-GB', {
                hour: '2-digit', minute: '2-digit',
              });
              const mins = Math.floor(attempt.timeSpentSeconds / 60);
              const secs = attempt.timeSpentSeconds % 60;

              return (
                <motion.button
                  key={attempt.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  whileHover={{ x: 4 }}
                  onClick={() => reviewAttempt(attempt.id)}
                  className="glass-card w-full rounded-xl p-4 flex items-center gap-4 hover:border-accent/30 cursor-pointer text-left"
                >
                  <div className={`
                    w-14 h-14 rounded-xl flex items-center justify-center text-xl font-bold shrink-0
                    ${attempt.percentage >= 70 ? 'bg-emerald-500/20 text-emerald-400' :
                      attempt.percentage >= 50 ? 'bg-amber-500/20 text-amber-400' :
                      'bg-red-500/20 text-red-400'}
                  `}>
                    {attempt.percentage}%
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-navy-100 truncate">{attempt.paperTitle}</p>
                    <p className="text-xs text-navy-400 mt-0.5">
                      {dateStr} at {timeStr} &middot; {attempt.score}/{attempt.total} &middot; {mins}:{String(secs).padStart(2, '0')}
                    </p>
                  </div>

                  <span className="text-navy-500 shrink-0">{'→'}</span>
                </motion.button>
              );
            })}
          </div>
        )}
      </motion.div>
    </div>
  );
}
