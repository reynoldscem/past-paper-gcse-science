import { biologyQuestions } from './biology';
import { chemistryQuestions } from './chemistry';
import { physicsQuestions } from './physics';
import { Question } from '../types';

const allQuestions: Question[] = [
  ...biologyQuestions,
  ...chemistryQuestions,
  ...physicsQuestions,
];

export function getAllQuestions(): Question[] {
  return allQuestions;
}
