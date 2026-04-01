import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '../store/appStore';
import { useProgressStore } from '../store/progressStore';
import { generatePaper } from '../lib/paperGenerator';
import { getAllQuestions } from '../data';
import { getUnseenQuestionIds, getWeakQuestionIds, buildTopicStats } from '../lib/questionStats';
import { subjectMeta } from '../data/topics';
import { Subject } from '../types';

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

const greetingTemplates = [
  (name: string) => `Hey ${name}!`,
  (name: string) => `Welcome back, ${name}!`,
  (name: string) => `Let's go, ${name}!`,
  (name: string) => `You've got this, ${name}!`,
  (name: string) => `Ready to smash it, ${name}?`,
];

export function HomeView() {
  const { selectSubject, startQuiz, userName } = useAppStore();
  const { totalPapersCompleted, attempts, streakDays } = useProgressStore();
  const displayName = capitalize(userName ?? 'you');

  const greeting = useMemo(() => greetingTemplates[Math.floor(Math.random() * greetingTemplates.length)](displayName), [displayName]);
  const allQuestions = useMemo(() => getAllQuestions(), []);

  const avgScore = useMemo(() => {
    if (attempts.length === 0) return 0;
    return Math.round(attempts.reduce((sum, a) => sum + a.percentage, 0) / attempts.length);
  }, [attempts]);

  const latestBySubject = useMemo(() => {
    const latest: Record<string, { percentage: number; title: string }> = {};
    for (const a of attempts) {
      const subjectMatch = a.paperTitle.toLowerCase();
      for (const s of ['biology', 'chemistry', 'physics'] as const) {
        if (subjectMatch.includes(s)) {
          latest[s] = { percentage: a.percentage, title: a.paperTitle };
        }
      }
      if (subjectMatch.includes('mixed')) {
        latest['mixed'] = { percentage: a.percentage, title: a.paperTitle };
      }
    }
    return latest;
  }, [attempts]);

  const unseenCount = useMemo(
    () => getUnseenQuestionIds(allQuestions, attempts).size,
    [allQuestions, attempts],
  );

  const weakCount = useMemo(
    () => getWeakQuestionIds(attempts).size,
    [attempts],
  );

  const weakTopicsBySubject = useMemo(() => {
    const stats = buildTopicStats(allQuestions, attempts);
    const result: Record<string, string[]> = {};
    for (const ss of stats) {
      const weak = ss.topics
        .filter(t => t.totalAttempts > 0 && t.accuracy < 50)
        .map(t => t.topicLabel);
      if (weak.length > 0) result[ss.subject] = weak;
    }
    return result;
  }, [allQuestions, attempts]);

  const handleQuickMix = () => {
    const paper = generatePaper(allQuestions, { mode: 'mixed' });
    startQuiz(paper);
  };

  const handleUnseen = () => {
    const paper = generatePaper(allQuestions, { mode: 'unseen' }, 20, attempts);
    startQuiz(paper);
  };

  const handleWeak = () => {
    const paper = generatePaper(allQuestions, { mode: 'weak' }, 20, attempts);
    startQuiz(paper);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
          <span className="shimmer-text">{greeting}</span>
        </h1>
        <p className="text-navy-400 text-lg">Ready to smash some science?</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {(Object.keys(subjectMeta) as Subject[]).map((subject, i) => {
          const meta = subjectMeta[subject];
          return (
            <motion.button
              key={subject}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => selectSubject(subject)}
              className="glass-card rounded-2xl p-6 text-center cursor-pointer group"
              style={{ borderColor: meta.color + '33' }}
            >
              <div className="text-4xl mb-3 group-hover:animate-float">{meta.icon}</div>
              <h3 className="text-lg font-bold mb-1" style={{ color: meta.color }}>
                {meta.label}
              </h3>
              {latestBySubject[subject] ? (
                <p className="text-sm mt-1" style={{ color: meta.color }}>
                  Last: {latestBySubject[subject].percentage}%
                </p>
              ) : (
                <p className="text-sm text-navy-500">Not tried yet</p>
              )}
            </motion.button>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap justify-center gap-3 mb-10"
      >
        <button
          onClick={handleQuickMix}
          className="
            px-6 py-3 rounded-2xl text-base font-bold
            bg-gradient-to-r from-accent to-blue-500
            hover:from-accent-light hover:to-blue-400
            transition-all hover:scale-105 active:scale-95
            shadow-lg shadow-accent/25
          "
        >
          {'🎲'} Quick Mix
        </button>
        {unseenCount > 0 && (
          <button
            onClick={handleUnseen}
            className="
              px-6 py-3 rounded-2xl text-base font-bold
              bg-gradient-to-r from-emerald-600 to-teal-500
              hover:from-emerald-500 hover:to-teal-400
              transition-all hover:scale-105 active:scale-95
              shadow-lg shadow-emerald-500/25
            "
          >
            {'🆕'} Unseen
          </button>
        )}
        {weakCount > 0 && (
          <button
            onClick={handleWeak}
            className="
              px-6 py-3 rounded-2xl text-base font-bold
              bg-gradient-to-r from-amber-600 to-orange-500
              hover:from-amber-500 hover:to-orange-400
              transition-all hover:scale-105 active:scale-95
              shadow-lg shadow-amber-500/25
            "
          >
            {'🔁'} Need Practice
          </button>
        )}
      </motion.div>

      {totalPapersCompleted > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="glass-card rounded-2xl p-6 text-center"
        >
          <h3 className="text-sm font-semibold text-navy-400 uppercase tracking-wider mb-4">
            Your Stats
          </h3>
          <div className="flex flex-wrap justify-around gap-4 mb-4">
            <div>
              <div className="text-3xl font-bold text-white">{totalPapersCompleted}</div>
              <div className="text-sm text-navy-400">Papers Done</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">{avgScore}%</div>
              <div className="text-sm text-navy-400">Avg Score</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">
                {streakDays} {streakDays > 0 ? '🔥' : ''}
              </div>
              <div className="text-sm text-navy-400">Day Streak</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400">
                {allQuestions.length > 0 ? Math.round(((allQuestions.length - unseenCount) / allQuestions.length) * 100) : 0}%
              </div>
              <div className="text-sm text-navy-400">Questions Seen</div>
            </div>
          </div>
          {Object.keys(weakTopicsBySubject).length > 0 ? (
            <div className="text-left mt-4 pt-4 border-t border-navy-700 space-y-2">
              <p className="text-xs font-semibold text-navy-400 uppercase tracking-wider">Areas that need practice</p>
              {Object.entries(weakTopicsBySubject).map(([subject, topics]) => (
                <p key={subject} className="text-sm text-navy-300">
                  <span className="font-medium" style={{ color: subjectMeta[subject as Subject]?.color }}>
                    {capitalize(subject)}:
                  </span>{' '}
                  {topics.join(', ')}
                </p>
              ))}
            </div>
          ) : unseenCount === 0 ? (
            <div className="mt-4 pt-4 border-t border-navy-700">
              <p className="text-sm text-emerald-400">{'✨'} All questions seen, no areas need practice — smashing it!</p>
            </div>
          ) : null}
          <div className="flex gap-3 justify-center mt-4">
            <button
              onClick={() => useAppStore.getState().setView('stats')}
              className="px-5 py-2 rounded-lg text-sm font-medium bg-navy-700 hover:bg-navy-600 text-navy-300 hover:text-white transition-colors"
            >
              Question Stats
            </button>
            <button
              onClick={() => useAppStore.getState().setView('history')}
              className="px-5 py-2 rounded-lg text-sm font-medium bg-navy-700 hover:bg-navy-600 text-navy-300 hover:text-white transition-colors"
            >
              Paper History
            </button>
          </div>
        </motion.div>
      )}

      <div className="text-center mt-8">
        <button
          onClick={() => useAppStore.getState().setView('admin')}
          className="text-xs text-navy-600 hover:text-navy-400 transition-colors"
        >
          Admin
        </button>
      </div>
    </div>
  );
}
