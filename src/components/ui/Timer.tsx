import { useState, useEffect } from 'react';
import { TIMER_SECONDS } from '../../lib/constants';

interface TimerProps {
  startTime: number;
}

export function Timer({ startTime }: TimerProps) {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [startTime]);

  const minutes = Math.floor(elapsed / 60);
  const seconds = elapsed % 60;
  const overTime = elapsed > TIMER_SECONDS;
  const warning = elapsed > TIMER_SECONDS - 300 && !overTime;

  return (
    <div className={`
      font-mono text-lg font-semibold tabular-nums
      ${overTime ? 'text-red-400' : warning ? 'text-amber-400' : 'text-navy-300'}
    `}>
      {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
    </div>
  );
}
