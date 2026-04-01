import { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '../store/appStore';
import { QuestionCard } from '../components/quiz/QuestionCard';
import { DotNav } from '../components/quiz/DotNav';
import { Timer } from '../components/ui/Timer';
import { ProgressBar } from '../components/ui/ProgressBar';
import { scorePaper } from '../lib/scoring';
import { useProgressStore } from '../store/progressStore';

export function QuizView() {
  const {
    activePaper, activeAnswers, checkedQuestions, currentQuestionIndex,
    setAnswer, quickCheck, setQuestionIndex, quizStartTime,
  } = useAppStore();
  const { addAttempt } = useProgressStore();
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
  const [direction, setDirection] = useState(1);

  const paper = activePaper;
  if (!paper || !quizStartTime) return <div />;

  const question = paper.questions[currentQuestionIndex];
  const totalQuestions = paper.questions.length;
  const answeredCount = activeAnswers.filter(a => a !== null).length;
  const skippedCount = totalQuestions - answeredCount;
  const isLast = currentQuestionIndex === totalQuestions - 1;

  const navigate = useCallback((newIndex: number) => {
    setDirection(newIndex > currentQuestionIndex ? 1 : -1);
    setQuestionIndex(newIndex);
  }, [currentQuestionIndex, setQuestionIndex]);

  const handleNext = () => {
    if (isLast) {
      setShowSubmitConfirm(true);
    } else {
      navigate(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      navigate(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    const timeSpent = Math.floor((Date.now() - quizStartTime) / 1000);
    const attempt = scorePaper(paper, activeAnswers, timeSpent);
    addAttempt(attempt);

    useAppStore.setState({
      view: 'results',
    });
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (showSubmitConfirm) return;
      if (e.key === 'ArrowRight' && !isLast) navigate(currentQuestionIndex + 1);
      if (e.key === 'ArrowLeft' && currentQuestionIndex > 0) navigate(currentQuestionIndex - 1);
      if (e.key >= '1' && e.key <= '4') setAnswer(currentQuestionIndex, parseInt(e.key) - 1);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [currentQuestionIndex, isLast, navigate, setAnswer, showSubmitConfirm]);

  if (showSubmitConfirm) {
    return (
      <div className="max-w-md mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-6">Ready to submit?</h2>
          <div className="space-y-2 mb-6 text-navy-300">
            <p>Answered: <span className="text-white font-bold">{answeredCount}/{totalQuestions}</span></p>
            {skippedCount > 0 && (
              <p className="text-amber-400">Skipped: {skippedCount} questions</p>
            )}
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setShowSubmitConfirm(false)}
              className="flex-1 py-3 rounded-xl bg-navy-700 hover:bg-navy-600 font-medium transition-colors"
            >
              Go Back
            </button>
            <button
              onClick={handleSubmit}
              className="
                flex-1 py-3 rounded-xl font-bold
                bg-gradient-to-r from-accent to-blue-500
                hover:from-accent-light hover:to-blue-400
                transition-all hover:scale-105 active:scale-95
              "
            >
              Submit {'✨'}
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-sm font-medium text-navy-400 truncate mr-4">{paper.title}</h2>
        <Timer startTime={quizStartTime} />
      </div>

      <div className="mb-6">
        <ProgressBar current={answeredCount} total={totalQuestions} />
        <div className="flex justify-between text-xs text-navy-500 mt-1">
          <span>Q {currentQuestionIndex + 1} of {totalQuestions}</span>
          <span>{answeredCount} answered</span>
        </div>
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentQuestionIndex}
          custom={direction}
          initial={{ opacity: 0, x: direction * 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -direction * 50 }}
          transition={{ duration: 0.2 }}
        >
          <QuestionCard
            question={question}
            selectedAnswer={activeAnswers[currentQuestionIndex]}
            isChecked={checkedQuestions.has(currentQuestionIndex)}
            onSelectAnswer={(i) => setAnswer(currentQuestionIndex, i)}
            onQuickCheck={() => quickCheck(currentQuestionIndex)}
            questionNumber={currentQuestionIndex + 1}
            total={totalQuestions}
          />
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-between items-center mt-6 gap-3">
        <button
          onClick={handlePrev}
          disabled={currentQuestionIndex === 0}
          className="
            px-6 py-3 rounded-xl font-medium
            bg-navy-700 hover:bg-navy-600 disabled:opacity-30 disabled:cursor-not-allowed
            transition-all
          "
        >
          {'←'} Prev
        </button>
        {!isLast && (
          <button
            onClick={() => setShowSubmitConfirm(true)}
            className="px-4 py-3 rounded-xl text-sm text-navy-400 hover:text-white bg-navy-800 hover:bg-navy-700 transition-all"
          >
            Skip to end
          </button>
        )}
        <button
          onClick={handleNext}
          className={`
            px-6 py-3 rounded-xl font-bold transition-all
            ${isLast
              ? 'bg-gradient-to-r from-accent to-blue-500 hover:from-accent-light hover:to-blue-400 hover:scale-105'
              : 'bg-navy-700 hover:bg-navy-600'
            }
          `}
        >
          {isLast ? 'Review & Submit' : 'Next →'}
        </button>
      </div>

      <DotNav
        total={totalQuestions}
        current={currentQuestionIndex}
        answers={activeAnswers}
        checkedQuestions={checkedQuestions}
        onNavigate={navigate}
      />
    </div>
  );
}
