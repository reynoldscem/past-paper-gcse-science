interface DotNavProps {
  total: number;
  current: number;
  answers: (number | null)[];
  checkedQuestions: Set<number>;
  onNavigate: (index: number) => void;
}

export function DotNav({ total, current, answers, checkedQuestions, onNavigate }: DotNavProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 py-4">
      {Array.from({ length: total }, (_, i) => {
        const isAnswered = answers[i] !== null;
        const isChecked = checkedQuestions.has(i);
        const isCurrent = i === current;

        let dotColor = 'bg-navy-600';
        if (isChecked) dotColor = 'bg-amber-400';
        else if (isAnswered) dotColor = 'bg-accent';

        return (
          <button
            key={i}
            onClick={() => onNavigate(i)}
            className={`
              dot-nav-dot w-3 h-3 rounded-full transition-all
              ${isCurrent ? 'ring-2 ring-accent ring-offset-2 ring-offset-navy-900' : ''}
              ${dotColor}
            `}
            title={`Question ${i + 1}${isChecked ? ' (checked)' : isAnswered ? ' (answered)' : ''}`}
          />
        );
      })}
    </div>
  );
}
