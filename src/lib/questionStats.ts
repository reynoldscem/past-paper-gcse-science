import { PaperAttempt, Question, Subject } from '../types';
import { subjectOrder } from '../data/topics';

export interface QuestionStat {
  id: string;
  subject: Subject;
  topic: string;
  topicLabel: string;
  timesAttempted: number;
  timesCorrect: number;
  timesWrong: number;
  accuracy: number; // 0-100
}

export interface TopicStat {
  topic: string;
  topicLabel: string;
  subject: Subject;
  totalQuestions: number; // in the bank
  uniqueAttempted: number;
  totalAttempts: number;
  totalCorrect: number;
  totalWrong: number;
  accuracy: number; // 0-100
}

export interface SubjectStat {
  subject: Subject;
  totalQuestions: number;
  uniqueAttempted: number;
  totalAttempts: number;
  accuracy: number;
  topics: TopicStat[];
}

export function buildQuestionStats(attempts: PaperAttempt[]): Map<string, QuestionStat> {
  const stats = new Map<string, QuestionStat>();

  for (const attempt of attempts) {
    for (let i = 0; i < attempt.questions.length; i++) {
      const q = attempt.questions[i];
      const answer = attempt.answers[i];
      const isCorrect = answer === q.correctIndex;

      let stat = stats.get(q.id);
      if (!stat) {
        stat = {
          id: q.id,
          subject: q.subject,
          topic: q.topic,
          topicLabel: q.topicLabel,
          timesAttempted: 0,
          timesCorrect: 0,
          timesWrong: 0,
          accuracy: 0,
        };
        stats.set(q.id, stat);
      }

      if (answer !== null) {
        stat.timesAttempted++;
        if (isCorrect) stat.timesCorrect++;
        else stat.timesWrong++;
        stat.accuracy = stat.timesAttempted > 0
          ? Math.round((stat.timesCorrect / stat.timesAttempted) * 100)
          : 0;
      }
    }
  }

  return stats;
}

export function buildTopicStats(
  allQuestions: Question[],
  attempts: PaperAttempt[],
): SubjectStat[] {
  const qStats = buildQuestionStats(attempts);

  // Group questions by subject + topic
  const topicMap = new Map<string, { questions: Question[]; subject: Subject; topicLabel: string }>();
  for (const q of allQuestions) {
    const key = `${q.subject}:${q.topic}`;
    if (!topicMap.has(key)) {
      topicMap.set(key, { questions: [], subject: q.subject, topicLabel: q.topicLabel });
    }
    topicMap.get(key)!.questions.push(q);
  }

  // Build topic stats
  const subjectMap = new Map<Subject, TopicStat[]>();
  for (const [key, { questions, subject, topicLabel }] of topicMap) {
    const topic = key.split(':')[1];

    let uniqueAttempted = 0;
    let totalAttempts = 0;
    let totalCorrect = 0;
    let totalWrong = 0;

    for (const q of questions) {
      const qs = qStats.get(q.id);
      if (qs && qs.timesAttempted > 0) {
        uniqueAttempted++;
        totalAttempts += qs.timesAttempted;
        totalCorrect += qs.timesCorrect;
        totalWrong += qs.timesWrong;
      }
    }

    const topicStat: TopicStat = {
      topic,
      topicLabel,
      subject,
      totalQuestions: questions.length,
      uniqueAttempted,
      totalAttempts,
      totalCorrect,
      totalWrong,
      accuracy: totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : -1,
    };

    if (!subjectMap.has(subject)) subjectMap.set(subject, []);
    subjectMap.get(subject)!.push(topicStat);
  }

  // Build subject stats
  const results: SubjectStat[] = [];
  for (const subject of subjectOrder) {
    const topics = subjectMap.get(subject) ?? [];
    const totalQuestions = topics.reduce((s, t) => s + t.totalQuestions, 0);
    const uniqueAttempted = topics.reduce((s, t) => s + t.uniqueAttempted, 0);
    const totalAttempts = topics.reduce((s, t) => s + t.totalAttempts, 0);
    const totalCorrect = topics.reduce((s, t) => s + t.totalCorrect, 0);

    results.push({
      subject,
      totalQuestions,
      uniqueAttempted,
      totalAttempts,
      accuracy: totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : -1,
      topics,
    });
  }

  return results;
}

/** Get question IDs the user has never seen */
export function getUnseenQuestionIds(
  allQuestions: Question[],
  attempts: PaperAttempt[],
): Set<string> {
  const seen = new Set<string>();
  for (const a of attempts) {
    for (const q of a.questions) {
      seen.add(q.id);
    }
  }
  return new Set(allQuestions.filter(q => !seen.has(q.id)).map(q => q.id));
}

/** Get question IDs the user has got wrong more than right */
export function getWeakQuestionIds(
  attempts: PaperAttempt[],
): Set<string> {
  const stats = buildQuestionStats(attempts);
  const weak = new Set<string>();
  for (const [id, stat] of stats) {
    if (stat.timesAttempted > 0 && stat.accuracy < 50) {
      weak.add(id);
    }
  }
  return weak;
}
