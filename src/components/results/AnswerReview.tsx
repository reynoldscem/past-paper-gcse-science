import { motion } from 'framer-motion';
import { QuestionImage, QuestionExplanation } from '../quiz/QuestionMedia';
import { Question } from '../../types';

interface AnswerReviewProps {
  question: Question;
  userAnswerIndex: number | null;
  index: number;
}

export function AnswerReview({ question, userAnswerIndex, index }: AnswerReviewProps) {
  const labels = ['A', 'B', 'C', 'D'];
  const isCorrect = userAnswerIndex === question.correctIndex;
  const wasSkipped = userAnswerIndex === null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className={`glass-card rounded-xl p-5 md:p-6 ${isCorrect ? 'border-l-4 border-emerald-500/50' : ''}`}
    >
      <div className="flex items-start gap-2 mb-3">
        <span className="text-lg mt-0.5">{isCorrect ? '✅' : wasSkipped ? '⏭️' : '❌'}</span>
        <p className="text-base md:text-lg font-medium text-navy-100">
          {question.question}
        </p>
      </div>

      <QuestionImage question={question} />
      <div className="space-y-2 mb-4">
        {!wasSkipped && (
          <div className={`flex items-center gap-2 ${isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
            <span className="text-sm">
              Your answer: {labels[userAnswerIndex]}) {question.options[userAnswerIndex]}
              {isCorrect ? ' — Correct!' : ''}
            </span>
          </div>
        )}
        {wasSkipped && (
          <div className="flex items-center gap-2 text-navy-400">
            <span className="text-sm">Not answered</span>
          </div>
        )}
        {!isCorrect && (
          <div className="flex items-center gap-2 text-emerald-400">
            <span className="text-sm">Correct: {labels[question.correctIndex]}) {question.options[question.correctIndex]}</span>
          </div>
        )}
      </div>

      <QuestionExplanation question={question} />
    </motion.div>
  );
}
