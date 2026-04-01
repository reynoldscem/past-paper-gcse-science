import { useMemo, useEffect, useRef, useState } from 'react';

const EMOJIS = [
  // Science
  '🧪', '🔬', '⚗️', '🧬', '🦠', '🌡️', '💊', '🔭',
  '🚀', '⚛️', '🧲', '🔋', '💡', '🌋', '🌍', '🪐',
  '☄️', '🧫', '🦴', '🫁', '🐸', '🌿', '🍄', '🧊',
  // Silly faces & fun
  '🤓', '🥸', '🤪', '😵‍💫', '🫠', '🤯', '👻', '💀',
  '👽', '🤖', '🦄', '🐙', '🦕', '🐝', '🧠', '👀',
  '✨', '💫', '🌈', '🎉', '🫧', '🪄',
];

interface FloatingEmoji {
  id: number;
  emoji: string;
  startX: number;
  startY: number;
  duration: number;
  size: number;
  endX: number;
  endY: number;
  spinDeg: number;
  pulseSpeed: number;
  scaleMax: number;
}

export function StarsBg() {
  const stars = useMemo(() => {
    return Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2.5 + 0.5,
      duration: Math.random() * 4 + 2,
      delay: Math.random() * 4,
      opacity: Math.random() * 0.5 + 0.2,
    }));
  }, []);

  const [floaters, setFloaters] = useState<FloatingEmoji[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;

    const spawn = () => {
      const id = idRef.current++;
      const duration = Math.random() * 20 + 20;
      // Random direction - start from any edge or middle
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      // Drift somewhere else
      const endX = startX + (Math.random() - 0.5) * 80;
      const endY = startY + (Math.random() - 0.5) * 80;

      const emoji: FloatingEmoji = {
        id,
        emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
        startX,
        startY,
        endX,
        endY,
        duration,
        size: Math.random() * 24 + 28,
        spinDeg: (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 540 + 180),
        pulseSpeed: Math.random() * 4 + 5,
        scaleMax: Math.random() * 0.6 + 1.0,
      };
      setFloaters(f => [...f, emoji]);

      setTimeout(() => {
        setFloaters(f => f.filter(e => e.id !== id));
      }, duration * 1000 + 500);
    };

    const schedule = () => {
      const wait = (Math.random() * 10 + 5) * 1000;
      timerId = setTimeout(() => {
        spawn();
        schedule();
      }, wait);
    };

    timerId = setTimeout(() => {
      spawn();
      schedule();
    }, 2000);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <div className="stars-bg">
      {stars.map(star => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            '--duration': `${star.duration}s`,
            '--delay': `${star.delay}s`,
          } as React.CSSProperties}
        />
      ))}
      {floaters.map(f => (
        <div
          key={f.id}
          className="floating-emoji"
          style={{
            left: `${f.startX}%`,
            top: `${f.startY}%`,
            fontSize: `${f.size}px`,
            '--drift-x': `${f.endX - f.startX}vw`,
            '--drift-y': `${f.endY - f.startY}vh`,
            '--spin': `${f.spinDeg}deg`,
            '--duration': `${f.duration}s`,
            '--pulse-speed': `${f.pulseSpeed}s`,
            '--scale-max': `${f.scaleMax}`,
          } as React.CSSProperties}
          aria-hidden="true"
        >
          {f.emoji}
        </div>
      ))}
    </div>
  );
}
