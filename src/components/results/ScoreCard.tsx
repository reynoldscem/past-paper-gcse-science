import { motion } from 'framer-motion';
import { getScoreReaction, getStarCount } from '../../lib/scoring';
import { useAppStore } from '../../store/appStore';

interface ScoreCardProps {
  score: number;
  total: number;
  percentage: number;
  timeSpentSeconds: number;
}

export function ScoreCard({ score, total, percentage, timeSpentSeconds }: ScoreCardProps) {
  const userName = useAppStore(s => s.userName) ?? 'you';
  const { message, emoji } = getScoreReaction(percentage, userName);
  const stars = getStarCount(percentage);
  const minutes = Math.floor(timeSpentSeconds / 60);
  const seconds = timeSpentSeconds % 60;

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="glass-card rounded-2xl p-8 max-w-md mx-auto text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 300 }}
        className="text-6xl mb-4"
      >
        {emoji}
      </motion.div>

      <h2 className="shimmer-text text-2xl md:text-3xl font-bold mb-4">
        {message}
      </h2>

      <div className="text-6xl font-extrabold text-white mb-2">
        {score}/{total}
      </div>

      <div className={`text-3xl font-bold mb-4 ${
        percentage >= 70 ? 'text-emerald-400' :
        percentage >= 50 ? 'text-amber-400' : 'text-red-400'
      }`}>
        {percentage}%
      </div>

      <div className="flex justify-center gap-1 mb-4">
        {Array.from({ length: 5 }, (_, i) => (
          <motion.span
            key={i}
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ delay: 0.5 + i * 0.15, type: 'spring', stiffness: 300 }}
            className="text-3xl"
          >
            {i < stars ? '\u2B50' : '\u2606'}
          </motion.span>
        ))}
      </div>

      <p className="text-navy-400 text-sm">
        Time: {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </p>
    </motion.div>
  );
}
