import { motion } from 'framer-motion';
import { Question } from '../../types';

interface WrongAnswerProps {
  question: Question;
  userAnswerIndex: number | null;
  index: number;
}

export function WrongAnswer({ question, userAnswerIndex, index }: WrongAnswerProps) {
  const labels = ['A', 'B', 'C', 'D'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="glass-card rounded-xl p-5 md:p-6"
    >
      <p className="text-base md:text-lg font-medium text-navy-100 mb-4">
        {question.question}
      </p>

      <div className="space-y-2 mb-4">
        {userAnswerIndex !== null && (
          <div className="flex items-center gap-2 text-red-400">
            <span className="text-lg">{'❌'}</span>
            <span className="text-sm">Your answer: {labels[userAnswerIndex]}) {question.options[userAnswerIndex]}</span>
          </div>
        )}
        {userAnswerIndex === null && (
          <div className="flex items-center gap-2 text-navy-400">
            <span className="text-lg">{'—'}</span>
            <span className="text-sm">Not answered</span>
          </div>
        )}
        <div className="flex items-center gap-2 text-emerald-400">
          <span className="text-lg">{'✅'}</span>
          <span className="text-sm">Correct: {labels[question.correctIndex]}) {question.options[question.correctIndex]}</span>
        </div>
      </div>

      <div className="bg-navy-800/50 rounded-lg p-4 mb-3 border-l-4 border-accent">
        <p className="text-sm text-navy-200 leading-relaxed">
          <span className="text-accent-light font-semibold">{'💡'} </span>
          {question.explanation}
        </p>
      </div>

    </motion.div>
  );
}
