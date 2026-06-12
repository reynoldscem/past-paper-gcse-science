import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '../store/appStore';
import { useProgressStore } from '../store/progressStore';
import { ScoreCard } from '../components/results/ScoreCard';
import { AnswerReview } from '../components/results/AnswerReview';

type ReviewMode = 'score' | 'wrong' | 'all';

export function ResultsView() {
  const { activePaper, activeAnswers } = useAppStore();
  const { attempts } = useProgressStore();
  const [reviewMode, setReviewMode] = useState<ReviewMode>('score');

  const latestAttempt = attempts[attempts.length - 1];
  const paper = activePaper;

  const wrongQuestions = useMemo(() => {
    if (!paper || !latestAttempt) return [];
    return paper.questions.filter(q => latestAttempt.wrongQuestionIds.includes(q.id));
  }, [paper, latestAttempt]);

  if (!paper || !latestAttempt) return <div />;

  const wrongCount = wrongQuestions.length;

  const goHome = () => {
    useAppStore.getState().resetQuiz();
  };

  if (reviewMode !== 'score') {
    const isAll = reviewMode === 'all';
    const reviewQuestions = isAll ? paper.questions : wrongQuestions;
    const title = isAll
      ? `All Answers (${latestAttempt.score}/${latestAttempt.total})`
      : `Review: ${wrongCount} question${wrongCount !== 1 ? 's' : ''} to learn from`;

    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-navy-100">{title}</h2>
            <button
              onClick={() => setReviewMode('score')}
              className="text-navy-400 hover:text-white transition-colors"
            >
              {'←'} Back to Score
            </button>
          </div>

          {isAll && wrongCount > 0 && (
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setReviewMode('wrong')}
                className="px-3 py-1.5 rounded-lg text-sm bg-red-500/20 text-red-300 hover:bg-red-500/30 transition-colors"
              >
                Wrong only ({wrongCount})
              </button>
            </div>
          )}
          {!isAll && (
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setReviewMode('all')}
                className="px-3 py-1.5 rounded-lg text-sm bg-navy-700 text-navy-300 hover:bg-navy-600 transition-colors"
              >
                Show all answers
              </button>
            </div>
          )}

          <div className="space-y-4">
            {reviewQuestions.map((q, i) => {
              const qIndex = paper.questions.findIndex(pq => pq.id === q.id);
              return (
                <AnswerReview
                  key={q.id}
                  question={q}
                  userAnswerIndex={activeAnswers[qIndex]}
                  index={i}
                />
              );
            })}
          </div>

          <div className="flex gap-3 mt-8 justify-center">
            <button
              onClick={() => setReviewMode('score')}
              className="px-6 py-3 rounded-xl bg-navy-700 hover:bg-navy-600 font-medium transition-colors"
            >
              Back to Score
            </button>
            <button
              onClick={goHome}
              className="px-6 py-3 rounded-xl bg-accent hover:bg-accent-light font-bold transition-colors"
            >
              Back to Home
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 md:py-16">
      <ScoreCard
        score={latestAttempt.score}
        total={latestAttempt.total}
        percentage={latestAttempt.percentage}
        timeSpentSeconds={latestAttempt.timeSpentSeconds}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex flex-col gap-3 mt-8 items-center"
      >
        <button
          onClick={() => setReviewMode('all')}
          className="
            px-8 py-4 rounded-2xl text-lg font-bold
            bg-gradient-to-r from-accent/80 to-blue-500/80
            hover:from-accent hover:to-blue-500
            transition-all hover:scale-105 active:scale-95
          "
        >
          View All Answers
        </button>
        {wrongCount > 0 && (
          <button
            onClick={() => setReviewMode('wrong')}
            className="
              px-8 py-4 rounded-2xl text-lg font-bold
              bg-gradient-to-r from-amber-500/80 to-orange-500/80
              hover:from-amber-500 hover:to-orange-500
              transition-all hover:scale-105 active:scale-95
            "
          >
            Review Wrong Answers ({wrongCount})
          </button>
        )}
        <button
          onClick={goHome}
          className="px-6 py-3 rounded-xl bg-navy-700 hover:bg-navy-600 font-medium transition-colors"
        >
          Back to Home
        </button>
      </motion.div>
    </div>
  );
}
