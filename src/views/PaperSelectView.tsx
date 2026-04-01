import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '../store/appStore';
import { useProgressStore } from '../store/progressStore';
import { generatePaper } from '../lib/paperGenerator';
import { getAllQuestions } from '../data';
import { getUnseenQuestionIds, getWeakQuestionIds } from '../lib/questionStats';
import { topics, subjectMeta } from '../data/topics';
import { Subject } from '../types';

export function PaperSelectView() {
  const { selectedSubject, startQuiz, setView } = useAppStore();
  const { attempts } = useProgressStore();
  const allQuestions = useMemo(() => getAllQuestions(), []);

  if (!selectedSubject) return null;

  const meta = subjectMeta[selectedSubject];
  const subjectTopics = topics[selectedSubject];

  const topicCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const q of allQuestions) {
      if (q.subject === selectedSubject) {
        counts[q.topic] = (counts[q.topic] || 0) + 1;
      }
    }
    return counts;
  }, [allQuestions, selectedSubject]);

  const subjectQuestions = useMemo(
    () => allQuestions.filter(q => q.subject === selectedSubject),
    [allQuestions, selectedSubject],
  );

  const unseenCount = useMemo(() => {
    const unseenIds = getUnseenQuestionIds(allQuestions, attempts);
    return subjectQuestions.filter(q => unseenIds.has(q.id)).length;
  }, [allQuestions, subjectQuestions, attempts]);

  const weakCount = useMemo(() => {
    const weakIds = getWeakQuestionIds(attempts);
    return subjectQuestions.filter(q => weakIds.has(q.id)).length;
  }, [subjectQuestions, attempts]);

  const handleTopicSelect = (topicId: string) => {
    const paper = generatePaper(allQuestions, {
      subject: selectedSubject as Subject,
      topic: topicId,
    });
    startQuiz(paper);
  };

  const handleRandomSubject = () => {
    const paper = generatePaper(allQuestions, {
      subject: selectedSubject as Subject,
    });
    startQuiz(paper);
  };

  const handleUnseen = () => {
    const paper = generatePaper(allQuestions, { mode: 'unseen', subject: selectedSubject as Subject }, 20, attempts);
    startQuiz(paper);
  };

  const handleWeak = () => {
    const paper = generatePaper(allQuestions, { mode: 'weak', subject: selectedSubject as Subject }, 20, attempts);
    startQuiz(paper);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-4 mb-8"
      >
        <button
          onClick={() => setView('home')}
          className="text-navy-400 hover:text-white transition-colors text-lg"
        >
          {'←'} Back
        </button>
        <h2 className="text-2xl font-bold flex items-center gap-2" style={{ color: meta.color }}>
          {meta.icon} {meta.label}
        </h2>
      </motion.div>

      <p className="text-navy-400 mb-6">Pick a topic or go random:</p>

      <div className="space-y-3 mb-8">
        {subjectTopics.map((topic, i) => (
          <motion.button
            key={topic.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ x: 4 }}
            onClick={() => handleTopicSelect(topic.id)}
            className="
              glass-card w-full rounded-xl p-4 flex items-center gap-3
              hover:border-accent/30 cursor-pointer text-left
            "
          >
            <span className="text-2xl">{topic.icon}</span>
            <span className="flex-1 font-medium text-navy-100">{topic.label}</span>
            <span className="text-sm text-navy-400 px-2 py-1 rounded-lg bg-navy-800">
              {topicCounts[topic.id] || 0} Qs
            </span>
            <span className="text-navy-500">{'→'}</span>
          </motion.button>
        ))}
      </div>

      <div className="space-y-3">
        <button
          onClick={handleRandomSubject}
          className="
            w-full py-4 rounded-xl text-lg font-bold
            bg-gradient-to-r from-accent/80 to-accent
            hover:from-accent hover:to-accent-light
            transition-all hover:scale-[1.02] active:scale-[0.98]
          "
        >
          {'🎲'} Random {meta.label} Paper (20 Qs)
        </button>

        <div className="flex gap-3">
          {unseenCount > 0 && (
            <button
              onClick={handleUnseen}
              className="
                flex-1 py-3 rounded-xl text-sm font-bold
                bg-gradient-to-r from-emerald-600/80 to-teal-500/80
                hover:from-emerald-500 hover:to-teal-400
                transition-all hover:scale-[1.02] active:scale-[0.98]
              "
            >
              {'🆕'} Unseen
            </button>
          )}
          {weakCount > 0 && (
            <button
              onClick={handleWeak}
              className="
                flex-1 py-3 rounded-xl text-sm font-bold
                bg-gradient-to-r from-amber-600/80 to-orange-500/80
                hover:from-amber-500 hover:to-orange-400
                transition-all hover:scale-[1.02] active:scale-[0.98]
              "
            >
              {'🔁'} Need Practice
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
