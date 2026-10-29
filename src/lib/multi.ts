import type { Question } from '../types';

/*
 * "Mark two answers" questions: `multi: true`, and both `correctIndex` and the stored
 * answer are bitmasks of the selected option positions (bit i = option i). Single-answer
 * questions keep a plain index, so scoring (`answer === correctIndex`) is unchanged.
 */
export const OPTION_LABELS = ['A', 'B', 'C', 'D', 'E'];

export function selectedIndexes(q: Question, answer: number | null): number[] {
  if (answer === null) return [];
  if (!q.multi) return [answer];
  return q.options.map((_, i) => i).filter(i => (answer >> i) & 1);
}

export function correctIndexes(q: Question): number[] {
  return selectedIndexes(q, q.correctIndex);
}

export function describeAnswer(q: Question, answer: number | null): string {
  return selectedIndexes(q, answer).map(i => `${OPTION_LABELS[i]}) ${q.options[i]}`).join('; ');
}

/** Next stored answer after the learner taps option `i`. */
export function toggleAnswer(q: Question, current: number | null, i: number): number | null {
  if (!q.multi) return i;
  const next = (current ?? 0) ^ (1 << i);
  return next === 0 ? null : next;
}

/** Re-express a correct answer after the options were reordered (`order[newPos] = oldPos`). */
export function remapCorrect(q: Question, order: number[]): number {
  if (!q.multi) return order.indexOf(q.correctIndex);
  return order.reduce((mask, oldPos, newPos) => mask | (((q.correctIndex >> oldPos) & 1) << newPos), 0);
}
