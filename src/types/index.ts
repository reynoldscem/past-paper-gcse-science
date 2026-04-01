export type Subject = 'biology' | 'chemistry' | 'physics';

export interface Question {
  id: string;
  subject: Subject;
  topic: string;
  topicLabel: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  learnMoreUrl: string;
}

export interface Paper {
  id: string;
  title: string;
  subject: Subject | 'mixed';
  topic?: string;
  questions: Question[];
  createdAt: number;
}

export interface PaperAttempt {
  id: string;
  paperId: string;
  paperTitle: string;
  answers: (number | null)[];
  score: number;
  total: number;
  percentage: number;
  completedAt: number;
  timeSpentSeconds: number;
  wrongQuestionIds: string[];
  questions: Question[];
}

export interface AppProgress {
  attempts: PaperAttempt[];
  totalPapersCompleted: number;
  bestScores: Record<string, number>;
  streakDays: number;
  lastActiveDate: string;
}

export type ViewName = 'home' | 'select' | 'quiz' | 'results' | 'admin' | 'history' | 'review' | 'stats';
