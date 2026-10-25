import { drivingVisualQuestions } from './drivingVisual';
import additions from './drivingSigns.json';
import type { Question } from '../types';

export const signBank: Question[] = [
  ...drivingVisualQuestions,
  ...additions.map((sign, index) => ({
    id: sign.id, subject: 'roadSigns' as const, topic: 'sign-shapes', topicLabel: 'Sign recognition',
    question: 'What does this sign, marking or signal mean?',
    options: [sign.meaning, ...[7, 13, 19].map(offset => additions[(index + offset) % additions.length].meaning)],
    correctIndex: 0, explanation: sign.meaning + '.', image: sign.image,
    highwayCodeRule: sign.highwayCodeRule, learnMoreUrl: sign.learnMoreUrl,
  })),
];

function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function createSignRound(): Question[] {
  return shuffle(signBank).slice(0, 20).map(q => {
    const correct = q.options[q.correctIndex];
    const options = shuffle(q.options);
    return { ...q, options, correctIndex: options.indexOf(correct) };
  });
}
