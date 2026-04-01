import { Question } from '../../types';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  isChecked: boolean;
  onSelectAnswer: (index: number) => void;
  onQuickCheck: () => void;
  questionNumber: number;
  total: number;
}

export function QuestionCard({
  question, selectedAnswer, isChecked, onSelectAnswer, onQuickCheck, questionNumber, total,
}: QuestionCardProps) {
  const labels = ['A', 'B', 'C', 'D'];

  return (
    <div className="glass-card rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
      <div className="flex items-center gap-2 mb-1 text-sm text-navy-400">
        <span className="px-2 py-0.5 rounded-full text-xs font-medium"
          style={{ backgroundColor: 'rgba(124, 58, 237, 0.2)', color: '#a78bfa' }}>
          {question.topicLabel}
        </span>
      </div>

      <p className="text-lg md:text-xl font-medium text-navy-100 mb-6 leading-relaxed">
        <span className="text-navy-400 mr-2">Q{questionNumber}/{total}</span>
        {question.question}
      </p>

      <div className="space-y-3">
        {question.options.map((option, i) => {
          const isSelected = selectedAnswer === i;
          const isCorrect = i === question.correctIndex;
          const isWrongPick = isChecked && isSelected && !isCorrect;
          const showAsCorrect = isChecked && isCorrect;

          let borderClass = 'border-navy-700 hover:border-accent/40';
          let badgeClass = 'bg-navy-700 text-navy-300';

          if (isChecked) {
            if (showAsCorrect) {
              borderClass = 'border-emerald-500 bg-emerald-500/15';
              badgeClass = 'bg-emerald-500 text-white';
            } else if (isWrongPick) {
              borderClass = 'border-red-500 bg-red-500/15';
              badgeClass = 'bg-red-500 text-white';
            } else {
              borderClass = 'border-navy-700/50 opacity-50';
            }
          } else if (isSelected) {
            borderClass = 'selected border-accent bg-accent/20';
            badgeClass = 'bg-accent text-white';
          }

          return (
            <button
              key={i}
              onClick={() => onSelectAnswer(i)}
              disabled={isChecked}
              className={`
                option-btn w-full text-left p-4 rounded-xl border-2 flex items-center gap-3
                ${isChecked ? 'cursor-default' : ''}
                ${borderClass}
              `}
            >
              <span className={`
                w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shrink-0
                ${badgeClass}
              `}>
                {labels[i]}
              </span>
              <span className="text-base md:text-lg flex-1">{option}</span>
              {!isChecked && isSelected && (
                <span className="ml-auto w-3 h-3 rounded-full bg-accent shrink-0" />
              )}
              {isChecked && showAsCorrect && (
                <span className="ml-auto text-emerald-400 text-sm font-semibold shrink-0">{'✓'}</span>
              )}
              {isChecked && isWrongPick && (
                <span className="ml-auto text-red-400 text-sm font-semibold shrink-0">{'✗'}</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Quick Check button */}
      {!isChecked && selectedAnswer !== null && (
        <div className="mt-4 text-center">
          <button
            onClick={onQuickCheck}
            className="
              px-5 py-2 rounded-lg text-sm font-medium
              bg-amber-500/20 text-amber-300 border border-amber-500/30
              hover:bg-amber-500/30 hover:text-amber-200
              transition-all
            "
          >
            Quick Check
          </button>
        </div>
      )}

      {/* Explanation shown after quick check */}
      {isChecked && (
        <div className="mt-5 bg-navy-800/50 rounded-lg p-4 border-l-4 border-accent">
          <p className="text-sm text-navy-200 leading-relaxed">
            <span className="text-accent-light font-semibold">{'💡'} </span>
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
