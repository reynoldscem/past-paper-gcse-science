import { drivingVisualQuestions } from './drivingVisual';
import additions from './drivingSigns.json';
import type { Question } from '../types';

/** Three plausible wrong meanings, taken from the same sign family where it has enough members. */
export function drillDistractors(index: number): string[] {
  const sign = additions[index];
  const family = additions.filter(s => s.family === sign.family && s.id !== sign.id);
  const picks: string[] = [];
  if (family.length >= 3) {
    const start = index % family.length;
    for (const step of [0, Math.floor(family.length / 3), Math.floor((2 * family.length) / 3)]) {
      picks.push(family[(start + step) % family.length].meaning);
    }
  }
  for (let offset = 7; picks.length < 3; offset += 6) {
    const meaning = additions[(index + offset) % additions.length].meaning;
    if (meaning !== sign.meaning && !picks.includes(meaning)) picks.push(meaning);
  }
  return picks;
}

export const signBank: Question[] = [
  ...drivingVisualQuestions,
  ...additions.map((sign, index) => ({
    id: sign.id, subject: 'roadSigns' as const, topic: 'sign-shapes', topicLabel: 'Sign recognition',
    question: 'What does this sign, marking or signal mean?',
    options: [sign.meaning, ...drillDistractors(index)],
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
