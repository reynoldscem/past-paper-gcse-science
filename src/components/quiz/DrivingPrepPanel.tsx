import { getAllQuestions } from '../../data';
import { drivingSyllabus } from '../../data/drivingSyllabus';
import { subjectLearningArea } from '../../data/topics';
import { generatePaper } from '../../lib/paperGenerator';
import { buildTopicStats } from '../../lib/questionStats';
import { useAppStore } from '../../store/appStore';
import { useProgressStore } from '../../store/progressStore';

export function DrivingPrepPanel() {
  const startQuiz = useAppStore(s => s.startQuiz);
  const attempts = useProgressStore(s => s.attempts);
  const questions = getAllQuestions().filter(q => subjectLearningArea[q.subject] === 'drivingTheory');
  const stats = buildTopicStats(questions, attempts).flatMap(s => s.topics);
  const weak = stats.filter(t => t.totalAttempts > 0 && t.accuracy < 86).sort((a, b) => a.accuracy - b.accuracy);
  return <section className="glass-card rounded-2xl p-6 mb-8 space-y-4">
    <h2 className="text-xl font-bold">Car theory test preparation</h2>
    <p className="text-navy-300 text-sm">{questions.length} original questions, including {questions.filter(q => q.image).length} official sign, marking and signal images. Great Britain rules (England, Scotland and Wales).</p>
    <div className="flex flex-wrap gap-3">
      <button className="rounded-xl bg-accent px-5 py-3 font-bold hover:bg-accent-light" onClick={() => startQuiz(generatePaper(questions, { mode: 'driving-mock' }))}>Start mock · 50 Qs · 57 min</button>
      <button className="rounded-xl bg-blue-700 px-5 py-3 font-bold hover:bg-blue-600" onClick={() => startQuiz(generatePaper(questions.filter(q => q.image), { mode: 'mixed' }))}>Visual practice · 20 Qs</button>
      <button disabled={!weak.length} className="rounded-xl bg-amber-700 px-5 py-3 font-bold disabled:opacity-40" onClick={() => startQuiz(generatePaper(questions, { mode: 'weak-topics' }, 20, attempts))}>Practise weakest topics</button>
    </div>
    <p className="text-sm text-navy-300">Mock pass mark: 43/50. Answers stay hidden until submission; the paper submits automatically at 57 minutes. You can flag, revisit and change answers.</p>
    <p className="text-sm text-navy-400">This mock matches question count, time and pass mark. The real test includes three questions about a silent video; this version uses still images and text instead. Visuals are deliberately weighted more heavily for practice. No official question bank is reproduced.</p>
    <p className="text-sm text-navy-300">{weak.length ? `Focus next: ${weak.slice(0, 3).map(t => `${t.topicLabel} (${t.accuracy}%)`).join(', ')}. Practice includes new questions from those topics.` : 'Complete practice papers to identify topics below 86% accuracy.'}</p>
    <details>
      <summary className="cursor-pointer font-medium">Study all 14 syllabus areas</summary>
      <ul className="grid sm:grid-cols-2 gap-2 mt-3 text-sm">
        {drivingSyllabus.map(area => <li key={area.label}>
          <button className="text-left text-accent-light underline" onClick={() => startQuiz(generatePaper(questions.filter(q => area.topics.includes(q.topic)), { mode: 'mixed' }))}>{area.label}</button>
          {' '}({questions.filter(q => area.topics.includes(q.topic)).length} Qs)
        </li>)}
      </ul>
    </details>
    <div className="flex flex-wrap gap-4 text-sm text-accent-light underline">
      <a href="https://www.gov.uk/theory-test/revision-and-practice" target="_blank" rel="noreferrer">Official revision and free practice</a>
      <a href="https://www.gov.uk/guidance/the-highway-code/updates" target="_blank" rel="noreferrer">Highway Code updates</a>
      <a href="https://www.gov.uk/government/publications/know-your-traffic-signs" target="_blank" rel="noreferrer">Know your traffic signs</a>
    </div>
  </section>;
}
