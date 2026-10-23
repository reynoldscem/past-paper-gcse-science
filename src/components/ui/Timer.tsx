import { useState, useEffect } from 'react';
import { TIMER_SECONDS } from '../../lib/constants';

interface TimerProps {
  startTime: number;
  durationSeconds?: number;
}

export function Timer({ startTime, durationSeconds }: TimerProps) {
  const [elapsed, setElapsed] = useState(() => Math.max(0, Math.floor((Date.now() - startTime) / 1000)));

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [startTime]);

  const display = durationSeconds ? Math.max(0, durationSeconds - elapsed) : elapsed;
  const minutes = Math.floor(display / 60);
  const seconds = display % 60;
  const overTime = elapsed >= (durationSeconds ?? TIMER_SECONDS);
  const warning = elapsed > (durationSeconds ?? TIMER_SECONDS) - 300 && !overTime;

  return (
    <div className={`
      font-mono text-lg font-semibold tabular-nums
      ${overTime ? 'text-red-400' : warning ? 'text-amber-400' : 'text-navy-300'}
    `}>
      {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
    </div>
  );
}
