import { biologyQuestions } from './biology';
import { chemistryQuestions } from './chemistry';
import { drivingTheoryQuestions } from './drivingTheory';
import { drivingTheoryExpandedQuestions } from './drivingTheoryExpanded';
import { physicsQuestions } from './physics';
import { Question } from '../types';

const allQuestions: Question[] = [
  ...biologyQuestions,
  ...chemistryQuestions,
  ...physicsQuestions,
  ...drivingTheoryQuestions,
  ...drivingTheoryExpandedQuestions,
];

export function getAllQuestions(): Question[] {
  return allQuestions;
}
