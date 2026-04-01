import { Paper, PaperAttempt } from '../types';

export function scorePaper(
  paper: Paper,
  answers: (number | null)[],
  timeSpentSeconds: number,
): PaperAttempt {
  let score = 0;
  const wrongQuestionIds: string[] = [];

  paper.questions.forEach((q, i) => {
    if (answers[i] === q.correctIndex) {
      score++;
    } else {
      wrongQuestionIds.push(q.id);
    }
  });

  const total = paper.questions.length;
  const percentage = Math.round((score / total) * 100);

  return {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
    paperId: paper.id,
    paperTitle: paper.title,
    answers,
    score,
    total,
    percentage,
    completedAt: Date.now(),
    timeSpentSeconds,
    wrongQuestionIds,
    questions: paper.questions,
  };
}

export function getScoreReaction(percentage: number, name: string): { message: string; emoji: string } {
  const n = name.charAt(0).toUpperCase() + name.slice(1);
  if (percentage >= 90) return { message: `${n}, you absolute LEGEND!`, emoji: "\u{1F3C6}" };
  if (percentage >= 70) return { message: `Nice one, ${n}!`, emoji: "\u{1F31F}" };
  if (percentage >= 50) return { message: `Getting there, ${n}! Keep going!`, emoji: "\u2728" };
  return { message: `Every paper makes you stronger, ${n}!`, emoji: "\u{1F4AA}" };
}

export function getStarCount(percentage: number): number {
  if (percentage >= 90) return 5;
  if (percentage >= 70) return 4;
  if (percentage >= 50) return 3;
  if (percentage >= 30) return 2;
  return 1;
}
