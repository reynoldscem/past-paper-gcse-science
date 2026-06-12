import { Question, Paper, Subject, PaperAttempt } from '../types';
import { PAPER_SIZE } from './constants';
import { getUnseenQuestionIds, getWeakQuestionIds } from './questionStats';
import { learningAreaMeta, subjectLearningArea, subjectMeta } from '../data/topics';

function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function shuffleOptions(question: Question): Question {
  const indices = [0, 1, 2, 3];
  const shuffledIndices = shuffle(indices);
  const newOptions = shuffledIndices.map(i => question.options[i]);
  const newCorrectIndex = shuffledIndices.indexOf(question.correctIndex);
  return { ...question, options: newOptions, correctIndex: newCorrectIndex };
}

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

export type PaperMode =
  | { subject: Subject; topic?: string }
  | { mode: 'mixed' }
  | { mode: 'unseen'; subject?: Subject }
  | { mode: 'weak'; subject?: Subject };

export function generatePaper(
  allQuestions: Question[],
  mode: PaperMode,
  size: number = PAPER_SIZE,
  attempts: PaperAttempt[] = [],
): Paper {
  let filtered: Question[];
  let title: string;
  let subject: Subject | 'mixed';
  let topic: string | undefined;

  if ('mode' in mode && mode.mode === 'unseen') {
    const unseenIds = getUnseenQuestionIds(allQuestions, attempts);
    filtered = allQuestions.filter(q => unseenIds.has(q.id));
    if (mode.subject) {
      filtered = filtered.filter(q => q.subject === mode.subject);
      title = `${getSubjectLabel(mode.subject)} - Unseen Questions`;
      subject = mode.subject;
    } else {
      title = 'Unseen Questions';
      subject = 'mixed';
    }
    // If not enough unseen, pad with least-attempted
    if (filtered.length < size) {
      const used = new Set(filtered.map(q => q.id));
      const rest = allQuestions
        .filter(q => !used.has(q.id))
        .filter(q => !mode.subject || q.subject === mode.subject);
      filtered = [...filtered, ...shuffle(rest).slice(0, size - filtered.length)];
    }
  } else if ('mode' in mode && mode.mode === 'weak') {
    const weakIds = getWeakQuestionIds(attempts);
    filtered = allQuestions.filter(q => weakIds.has(q.id));
    if (mode.subject) {
      filtered = filtered.filter(q => q.subject === mode.subject);
      title = `${getSubjectLabel(mode.subject)} - Need Practice`;
      subject = mode.subject;
    } else {
      title = 'Need Practice';
      subject = 'mixed';
    }
    // If not enough weak questions, pad with random
    if (filtered.length < size) {
      const used = new Set(filtered.map(q => q.id));
      const rest = allQuestions
        .filter(q => !used.has(q.id))
        .filter(q => !mode.subject || q.subject === mode.subject);
      filtered = [...filtered, ...shuffle(rest).slice(0, size - filtered.length)];
    }
  } else if ('mode' in mode && mode.mode === 'mixed') {
    filtered = allQuestions;
    title = `Mixed ${getQuestionSetLabel(filtered)}`;
    subject = 'mixed';
  } else {
    const m = mode as { subject: Subject; topic?: string };
    filtered = allQuestions.filter(q => q.subject === m.subject);
    subject = m.subject;
    if (m.topic) {
      filtered = filtered.filter(q => q.topic === m.topic);
      topic = m.topic;
      const topicLabel = filtered[0]?.topicLabel ?? m.topic;
      title = `${getSubjectLabel(m.subject)} - ${topicLabel}`;
    } else {
      title = `${getSubjectLabel(m.subject)} - Random`;
    }
  }

  const selected = shuffle(filtered).slice(0, size);
  const questions = selected.map(shuffleOptions);

  return {
    id: generateId(),
    title,
    subject,
    topic,
    questions,
    createdAt: Date.now(),
  };
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function getSubjectLabel(subject: Subject): string {
  return subjectMeta[subject]?.label ?? capitalize(subject);
}

function getQuestionSetLabel(questions: Question[]): string {
  const areas = new Set(questions.map(q => subjectLearningArea[q.subject]));
  if (areas.size === 1) {
    const [area] = [...areas];
    return learningAreaMeta[area].shortLabel;
  }
  return 'Topics';
}
