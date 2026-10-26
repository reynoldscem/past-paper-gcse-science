import { drivingCoverageQuestions } from './drivingCoverage';
import { isPracticeQuestion } from '../lib/questionScope';
import { drivingRound2Questions } from './drivingRound2';
import { drivingVisualQuestions } from './drivingVisual';
import { drivingPrepQuestions } from './drivingPrep';
import { withDrivingReference } from './drivingReferences';
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
  ...drivingTheoryQuestions.map(withDrivingReference),
  ...drivingTheoryExpandedQuestions.map(withDrivingReference),
  ...drivingVisualQuestions,
  ...drivingPrepQuestions,
  ...drivingRound2Questions,
  ...drivingCoverageQuestions,
];

export function getAllQuestions(): Question[] {
  return allQuestions;
}

/** Default pools omit Higher and separate-science records; the full bank remains available for history. */
export function getPracticeQuestions(): Question[] {
  return allQuestions.filter(isPracticeQuestion);
}
