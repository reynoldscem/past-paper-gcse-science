import type { Question } from '../types';

export function isPracticeQuestion(question: Question): boolean {
  return !['biology', 'chemistry', 'physics'].includes(question.subject) || !question.scope;
}
