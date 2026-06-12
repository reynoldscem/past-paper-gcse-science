import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '../store/appStore';
import { useProgressStore } from '../store/progressStore';
import { exportAll, clearAll } from '../lib/storage';
import { getAllQuestions } from '../data';
import { learningAreaMeta, subjectLearningArea } from '../data/topics';

export function AdminView() {
  const { setView, userName, logout } = useAppStore();
  const { totalPapersCompleted, attempts, clearProgress } = useProgressStore();
  const [confirmReset, setConfirmReset] = useState(false);
  const [resetText, setResetText] = useState('');

  const allQuestions = getAllQuestions();
  const questionCounts = allQuestions.reduce<Record<string, number>>((counts, q) => {
    const area = subjectLearningArea[q.subject];
    counts[area] = (counts[area] || 0) + 1;
    return counts;
  }, {});
  const totalAnswered = attempts.reduce((sum, a) => sum + a.total, 0);

  const handleExport = async () => {
    if (!userName) return;
    const json = await exportAll(userName);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `science-backup-${userName}-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleReset = async () => {
    if (!userName) return;
    await clearAll(userName);
    clearProgress();
    setConfirmReset(false);
    setResetText('');
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => setView('home')}
            className="text-navy-400 hover:text-white transition-colors text-lg"
          >
            {'←'} Back
          </button>
          <h2 className="text-2xl font-bold text-navy-100">{'⚙️'} Admin</h2>
        </div>

        <div className="space-y-6">
          <div className="glass-card rounded-xl p-6">
            <h3 className="text-sm font-semibold text-navy-400 uppercase tracking-wider mb-4">
              Account
            </h3>
            <div className="flex items-center justify-between">
              <p className="text-navy-200">
                Logged in as <span className="text-white font-semibold">{userName}</span>
              </p>
              <button
                onClick={logout}
                className="px-4 py-2 rounded-lg text-sm bg-navy-700 hover:bg-navy-600 text-navy-300 hover:text-white transition-colors"
              >
                Switch user
              </button>
            </div>
          </div>

          <div className="glass-card rounded-xl p-6">
            <h3 className="text-sm font-semibold text-navy-400 uppercase tracking-wider mb-4">
              Data Management
            </h3>

            <button
              onClick={handleExport}
              className="
                w-full py-3 rounded-xl bg-navy-700 hover:bg-navy-600
                font-medium transition-colors mb-3 text-left px-4
              "
            >
              {'📦'} Export All Data (JSON)
            </button>
            <p className="text-xs text-navy-500 mb-6 px-1">
              Downloads a backup of all your progress and scores.
            </p>

            {!confirmReset ? (
              <>
                <button
                  onClick={() => setConfirmReset(true)}
                  className="
                    w-full py-3 rounded-xl bg-red-900/30 hover:bg-red-900/50
                    border border-red-800/50 font-medium transition-colors text-left px-4 text-red-300
                  "
                >
                  {'🗑️'} Reset All Progress
                </button>
                <p className="text-xs text-navy-500 mt-2 px-1">
                  Clears all scores and history. This cannot be undone.
                </p>
              </>
            ) : (
              <div className="bg-red-900/20 border border-red-800/50 rounded-xl p-4">
                <p className="text-red-300 text-sm mb-3">
                  Type <strong>RESET</strong> to confirm:
                </p>
                <input
                  type="text"
                  value={resetText}
                  onChange={(e) => setResetText(e.target.value)}
                  className="
                    w-full px-3 py-2 rounded-lg bg-navy-800 border border-navy-600
                    text-white text-sm mb-3 focus:outline-none focus:border-red-500
                  "
                  placeholder="Type RESET"
                  autoFocus
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => { setConfirmReset(false); setResetText(''); }}
                    className="flex-1 py-2 rounded-lg bg-navy-700 hover:bg-navy-600 text-sm transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleReset}
                    disabled={resetText !== 'RESET'}
                    className="
                      flex-1 py-2 rounded-lg bg-red-600 hover:bg-red-500
                      disabled:opacity-30 disabled:cursor-not-allowed
                      text-sm font-bold transition-colors
                    "
                  >
                    Confirm Reset
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="glass-card rounded-xl p-6">
            <h3 className="text-sm font-semibold text-navy-400 uppercase tracking-wider mb-4">
              Stats
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-navy-400">Papers completed</span>
                <span className="text-white font-medium">{totalPapersCompleted}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-navy-400">Total questions answered</span>
                <span className="text-white font-medium">{totalAnswered}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-navy-400">Question bank</span>
                <span className="text-white font-medium">
                  {(Object.keys(learningAreaMeta) as Array<keyof typeof learningAreaMeta>)
                    .map(area => `${learningAreaMeta[area].shortLabel} ${questionCounts[area] || 0}`)
                    .join(' / ')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
