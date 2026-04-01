import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '../store/appStore';
import { useProgressStore } from '../store/progressStore';
import { ProgressBar } from '../components/ui/ProgressBar';

export function ReviewView() {
  const { reviewingAttemptId, setView } = useAppStore();
  const { attempts } = useProgressStore();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [showAll, setShowAll] = useState(false);

  const attempt = attempts.find(a => a.id === reviewingAttemptId);
  if (!attempt || !attempt.questions) {
    return (
      <div className="max-w-md mx-auto px-4 py-16 text-center">
        <div className="glass-card rounded-2xl p-8">
          <p className="text-navy-300 mb-4">This paper was completed before history was saved.</p>
          <button
            onClick={() => setView('history')}
            className="px-6 py-3 rounded-xl bg-navy-700 hover:bg-navy-600 font-medium transition-colors"
          >
            {'←'} Back to History
          </button>
        </div>
      </div>
    );
  }

  const questions = attempt.questions;
  const total = questions.length;
  const q = questions[currentIndex];
  const userAnswer = attempt.answers[currentIndex];
  const isCorrect = userAnswer === q.correctIndex;
  const wasSkipped = userAnswer === null;
  const labels = ['A', 'B', 'C', 'D'];

  const navigate = useCallback((newIndex: number) => {
    setDirection(newIndex > currentIndex ? 1 : -1);
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (showAll) return;
      if (e.key === 'ArrowRight' && currentIndex < total - 1) navigate(currentIndex + 1);
      if (e.key === 'ArrowLeft' && currentIndex > 0) navigate(currentIndex - 1);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [currentIndex, total, navigate, showAll]);

  if (showAll) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-navy-100">
            {attempt.paperTitle} — {attempt.score}/{attempt.total} ({attempt.percentage}%)
          </h2>
          <button
            onClick={() => setShowAll(false)}
            className="text-navy-400 hover:text-white transition-colors"
          >
            Step through
          </button>
        </div>

        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setView('history')}
            className="px-3 py-1.5 rounded-lg text-sm bg-navy-700 text-navy-300 hover:bg-navy-600 transition-colors"
          >
            {'←'} History
          </button>
        </div>

        <div className="space-y-4">
          {questions.map((question, i) => {
            const ua = attempt.answers[i];
            const correct = ua === question.correctIndex;
            const skipped = ua === null;

            return (
              <motion.div
                key={question.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                className={`glass-card rounded-xl p-5 ${correct ? 'border-l-4 border-emerald-500/50' : ''}`}
              >
                <div className="flex items-start gap-2 mb-2">
                  <span className="text-sm mt-0.5">{correct ? '✅' : skipped ? '⏭️' : '❌'}</span>
                  <p className="text-sm font-medium text-navy-100">
                    <span className="text-navy-400 mr-1">Q{i + 1}.</span>
                    {question.question}
                  </p>
                </div>
                <div className="ml-6 space-y-1 text-sm">
                  {!skipped && (
                    <p className={correct ? 'text-emerald-400' : 'text-red-400'}>
                      Your answer: {labels[ua]}) {question.options[ua]}
                    </p>
                  )}
                  {skipped && <p className="text-navy-400">Not answered</p>}
                  {!correct && (
                    <p className="text-emerald-400">
                      Correct: {labels[question.correctIndex]}) {question.options[question.correctIndex]}
                    </p>
                  )}
                  {!correct && (
                    <p className="text-navy-300 text-xs mt-1">{'💡'} {question.explanation}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setView('history')}
            className="text-navy-400 hover:text-white transition-colors"
          >
            {'←'}
          </button>
          <h2 className="text-sm font-medium text-navy-400 truncate">
            {attempt.paperTitle} — {attempt.score}/{attempt.total} ({attempt.percentage}%)
          </h2>
        </div>
        <button
          onClick={() => setShowAll(true)}
          className="text-xs text-navy-400 hover:text-white bg-navy-800 px-3 py-1.5 rounded-lg transition-colors"
        >
          View all
        </button>
      </div>

      <div className="mb-6">
        <ProgressBar current={currentIndex + 1} total={total} color={isCorrect ? '#10b981' : wasSkipped ? '#64748b' : '#ef4444'} />
        <div className="flex justify-between text-xs text-navy-500 mt-1">
          <span>Q {currentIndex + 1} of {total}</span>
          <span>{isCorrect ? '✓ Correct' : wasSkipped ? 'Skipped' : '✗ Wrong'}</span>
        </div>
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          initial={{ opacity: 0, x: direction * 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -direction * 50 }}
          transition={{ duration: 0.2 }}
        >
          <div className="glass-card rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
            <div className="flex items-center gap-2 mb-1 text-sm text-navy-400">
              <span className="px-2 py-0.5 rounded-full text-xs font-medium"
                style={{ backgroundColor: 'rgba(124, 58, 237, 0.2)', color: '#a78bfa' }}>
                {q.topicLabel}
              </span>
              <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                isCorrect ? 'bg-emerald-500/20 text-emerald-400' :
                wasSkipped ? 'bg-navy-600 text-navy-300' :
                'bg-red-500/20 text-red-400'
              }`}>
                {isCorrect ? 'Correct' : wasSkipped ? 'Skipped' : 'Wrong'}
              </span>
            </div>

            <p className="text-lg md:text-xl font-medium text-navy-100 mb-6 leading-relaxed">
              <span className="text-navy-400 mr-2">Q{currentIndex + 1}/{total}</span>
              {q.question}
            </p>

            <div className="space-y-3">
              {q.options.map((option, i) => {
                const isUserPick = userAnswer === i;
                const isCorrectOption = i === q.correctIndex;
                const isWrongPick = isUserPick && !isCorrectOption;

                let borderClass = 'border-navy-700/50 opacity-50';
                let badgeClass = 'bg-navy-700 text-navy-300';

                if (isCorrectOption) {
                  borderClass = 'border-emerald-500 bg-emerald-500/15';
                  badgeClass = 'bg-emerald-500 text-white';
                } else if (isWrongPick) {
                  borderClass = 'border-red-500 bg-red-500/15';
                  badgeClass = 'bg-red-500 text-white';
                }

                return (
                  <div
                    key={i}
                    className={`w-full text-left p-4 rounded-xl border-2 flex items-center gap-3 ${borderClass}`}
                  >
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 ${badgeClass}`}>
                      {labels[i]}
                    </span>
                    <span className="text-base md:text-lg flex-1">{option}</span>
                    {isCorrectOption && <span className="ml-auto text-emerald-400 text-sm font-semibold shrink-0">{'✓'}</span>}
                    {isWrongPick && <span className="ml-auto text-red-400 text-sm font-semibold shrink-0">{'✗'}</span>}
                  </div>
                );
              })}
            </div>

            {!isCorrect && (
              <div className="mt-5 bg-navy-800/50 rounded-lg p-4 border-l-4 border-accent">
                <p className="text-sm text-navy-200 leading-relaxed">
                  <span className="text-accent-light font-semibold">{'💡'} </span>
                  {q.explanation}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-between items-center mt-6 gap-3">
        <button
          onClick={() => currentIndex > 0 && navigate(currentIndex - 1)}
          disabled={currentIndex === 0}
          className="px-6 py-3 rounded-xl font-medium bg-navy-700 hover:bg-navy-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          {'←'} Prev
        </button>
        <button
          onClick={() => currentIndex < total - 1 && navigate(currentIndex + 1)}
          disabled={currentIndex === total - 1}
          className="px-6 py-3 rounded-xl font-medium bg-navy-700 hover:bg-navy-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          Next {'→'}
        </button>
      </div>

      {/* Dot nav */}
      <div className="flex flex-wrap justify-center gap-2 py-4">
        {questions.map((question, i) => {
          const correct = attempt.answers[i] === question.correctIndex;
          const skipped = attempt.answers[i] === null;
          const isCurrent = i === currentIndex;

          return (
            <button
              key={i}
              onClick={() => navigate(i)}
              className={`
                dot-nav-dot w-3 h-3 rounded-full transition-all
                ${isCurrent ? 'ring-2 ring-white ring-offset-2 ring-offset-navy-900' : ''}
                ${correct ? 'bg-emerald-500' : skipped ? 'bg-navy-500' : 'bg-red-500'}
              `}
              title={`Q${i + 1} — ${correct ? 'Correct' : skipped ? 'Skipped' : 'Wrong'}`}
            />
          );
        })}
      </div>
    </div>
  );
}
