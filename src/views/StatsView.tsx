import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '../store/appStore';
import { useProgressStore } from '../store/progressStore';
import { getAllQuestions } from '../data';
import { buildTopicStats } from '../lib/questionStats';
import { learningAreaMeta, subjectLearningArea, subjectMeta } from '../data/topics';
import { Subject } from '../types';

export function StatsView() {
  const { setView } = useAppStore();
  const { activeLearningArea, attempts } = useProgressStore();
  const allQuestions = useMemo(() => getAllQuestions(), []);
  const activeQuestions = useMemo(
    () => allQuestions.filter(q => subjectLearningArea[q.subject] === activeLearningArea),
    [allQuestions, activeLearningArea],
  );
  const activeAttempts = useMemo(
    () => attempts.filter(a => a.questions.some(q => subjectLearningArea[q.subject] === activeLearningArea)),
    [attempts, activeLearningArea],
  );

  const subjectStats = useMemo(
    () => buildTopicStats(activeQuestions, activeAttempts),
    [activeQuestions, activeAttempts],
  );

  const accuracyColor = (acc: number) => {
    if (acc < 0) return 'text-navy-500';
    if (acc >= 70) return 'text-emerald-400';
    if (acc >= 50) return 'text-amber-400';
    return 'text-red-400';
  };

  const accuracyBg = (acc: number) => {
    if (acc < 0) return 'bg-navy-700';
    if (acc >= 70) return 'bg-emerald-500/20';
    if (acc >= 50) return 'bg-amber-500/20';
    return 'bg-red-500/20';
  };

  const barWidth = (attempted: number, total: number) =>
    total > 0 ? Math.round((attempted / total) * 100) : 0;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => setView('home')}
            className="text-navy-400 hover:text-white transition-colors text-lg"
          >
            {'←'} Back
          </button>
          <h2 className="text-2xl font-bold text-navy-100">
            {learningAreaMeta[activeLearningArea].shortLabel} Stats
          </h2>
        </div>

        {activeAttempts.length === 0 ? (
          <div className="glass-card rounded-xl p-8 text-center text-navy-400">
            <p className="text-lg">No papers completed yet.</p>
            <p className="text-sm mt-2">Complete some quizzes to see your stats here.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {subjectStats.map((ss, si) => {
              const meta = subjectMeta[ss.subject as Subject];
              return (
                <motion.div
                  key={ss.subject}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: si * 0.1 }}
                >
                  <div className="glass-card rounded-xl p-5">
                    {/* Subject header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{meta.icon}</span>
                        <h3 className="text-lg font-bold" style={{ color: meta.color }}>
                          {meta.label}
                        </h3>
                      </div>
                      <div className="text-right">
                        <div className={`text-lg font-bold ${accuracyColor(ss.accuracy)}`}>
                          {ss.accuracy >= 0 ? `${ss.accuracy}%` : '--'}
                        </div>
                        <div className="text-xs text-navy-400">
                          {ss.uniqueAttempted}/{ss.totalQuestions} seen
                        </div>
                      </div>
                    </div>

                    {/* Coverage bar */}
                    <div className="w-full h-2 bg-navy-800 rounded-full mb-4">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${barWidth(ss.uniqueAttempted, ss.totalQuestions)}%`,
                          backgroundColor: meta.color,
                        }}
                      />
                    </div>

                    {/* Topics */}
                    <div className="space-y-2">
                      {ss.topics.map(ts => (
                        <div
                          key={ts.topic}
                          className="flex items-center gap-3 py-2 px-3 rounded-lg bg-navy-800/30"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-navy-200 truncate">
                              {ts.topicLabel}
                            </div>
                            <div className="text-xs text-navy-500 mt-0.5">
                              {ts.uniqueAttempted}/{ts.totalQuestions} questions seen
                              {ts.totalAttempts > 0 && ` · ${ts.totalAttempts} attempts`}
                            </div>
                          </div>

                          {/* Mini coverage bar */}
                          <div className="w-20 h-1.5 bg-navy-700 rounded-full shrink-0">
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: `${barWidth(ts.uniqueAttempted, ts.totalQuestions)}%`,
                                backgroundColor: meta.color,
                                opacity: 0.7,
                              }}
                            />
                          </div>

                          {/* Accuracy badge */}
                          <div className={`
                            px-2 py-0.5 rounded text-xs font-bold shrink-0
                            ${accuracyBg(ts.accuracy)} ${accuracyColor(ts.accuracy)}
                          `}>
                            {ts.accuracy >= 0 ? `${ts.accuracy}%` : '--'}
                          </div>

                          {/* Attempt count */}
                          {ts.totalWrong > 0 && (
                            <div className="text-xs text-red-400 shrink-0">
                              {ts.totalWrong} wrong
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </motion.div>
    </div>
  );
}
