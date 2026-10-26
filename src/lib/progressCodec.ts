import { getAllQuestions } from '../data';
import type { AppProgress, PaperAttempt, Question, Subject } from '../types';

// Option indices refer to the bank's original order; the final index is the
// historical answer key, so a later key correction cannot change an old score.
const subjects: Subject[] = ['biology', 'chemistry', 'physics', 'roadRules', 'roadSigns', 'hazardAwareness', 'vehicleSafety'];
type QuestionRef = [id: string, order: number[], correctIndex: number, snapshot: number | null, subject: number];
type StoredAttempt = Omit<PaperAttempt, 'questions'> & { questions: QuestionRef[] };
export type StoredProgress = Omit<AppProgress, 'attempts'> & {
  historyVersion: 1;
  questionSnapshots: Question[];
  attempts: StoredAttempt[];
};
const bank = new Map(getAllQuestions().map(q => [q.id, q]));
const missingRefs = new WeakMap<Question, QuestionRef>();

export function encodeProgress(progress: AppProgress): StoredProgress {
  const questionSnapshots: Question[] = [];
  const snapshotIds = new Map<string, number>();
  const attempts = progress.attempts.map(attempt => ({ ...attempt, questions: (attempt.questions ?? []).map(q => {
    const missing = missingRefs.get(q);
    if (missing) return missing;
    const current = bank.get(q.id);
    const order = current ? q.options.map(option => current.options.indexOf(option)) : [];
    // Preserve obsolete or edited legacy content once per document, not once
    // per attempt. Ordinary current questions store only their references.
    const comparable = current && order.every(i => i >= 0) && new Set(order).size === current.options.length
      && JSON.stringify({ ...q, options: current.options, correctIndex: current.correctIndex }) === JSON.stringify(current);
    if (comparable) return [q.id, order, q.correctIndex, null, subjects.indexOf(q.subject)] as QuestionRef;
    const options = [...q.options].sort();
    const historical = { ...q, options, correctIndex: options.indexOf(q.options[q.correctIndex]) };
    const key = JSON.stringify(historical);
    let index = snapshotIds.get(key);
    if (index === undefined) {
      index = questionSnapshots.length;
      snapshotIds.set(key, index);
      questionSnapshots.push(historical);
    }
    return [q.id, q.options.map(option => options.indexOf(option)), q.correctIndex, index, subjects.indexOf(q.subject)] as QuestionRef;
  }) }));
  return { ...progress, historyVersion: 1, questionSnapshots, attempts };
}

export function decodeProgress(progress: AppProgress | StoredProgress): AppProgress {
  if (!('historyVersion' in progress) || progress.historyVersion !== 1) return progress as AppProgress;
  const { historyVersion: _version, questionSnapshots, attempts, ...rest } = progress;
  return { ...rest, attempts: attempts.map(attempt => ({ ...attempt, questions: attempt.questions.map(ref => {
    const [id, order, correctIndex, snapshot, subject] = ref;
    const source = snapshot == null ? bank.get(id) : questionSnapshots[snapshot];
    if (source) return { ...source, options: order.map(i => source.options[i]), correctIndex };
    const placeholder: Question = {
      id, subject: subjects[subject] ?? 'biology', topic: 'unavailable', topicLabel: 'Unavailable question',
      question: 'Question no longer in the bank',
      options: order.map((_, i) => `Original option ${String.fromCharCode(65 + i)} (unavailable)`),
      correctIndex, explanation: 'The original question content is unavailable. Your saved answer and score are unchanged.', learnMoreUrl: '',
    };
    missingRefs.set(placeholder, ref);
    return placeholder;
  }) })) };
}
