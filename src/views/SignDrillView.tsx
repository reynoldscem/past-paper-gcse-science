import { useRef, useState } from 'react';
import { createSignRound, signBank } from '../data/signDrill';
import { QuestionImage, QuestionExplanation } from '../components/quiz/QuestionMedia';
import { useProgressStore } from '../store/progressStore';
import { useAppStore } from '../store/appStore';
import type { Question } from '../types';

export function SignDrillView() {
  const [round] = useState(createSignRound);
  const [missed, setMissed] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState<number | null>(null);
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const stats = useProgressStore(s => s.signAccuracy ?? {});
  const queue = [...round, ...missed];
  const question = queue[index];
  const weak = signBank.filter(q => stats[q.image!.src]?.attempts).sort((a, b) => {
    const x = stats[a.image!.src], y = stats[b.image!.src];
    return x.correct / x.attempts - y.correct / y.attempts;
  }).slice(0, 10);

  async function choose(option: number) {
    if (answer !== null || saving) return;
    setSaving(true); setError('');
    try {
      await useProgressStore.getState().recordSign(question.image!.src, option === question.correctIndex);
      setAnswer(option);
      if (index < 20 && option !== question.correctIndex) setMissed(previous => [...previous, question]);
    } catch { setError('Progress could not be saved. Please try your answer again.'); }
    finally { setSaving(false); }
  }

  return <main className="max-w-2xl mx-auto px-4 py-6 space-y-5">
    <h1 ref={heading} tabIndex={-1} className="text-2xl font-bold">Sign drill</h1>
    {question ? <>
      <p>{index < 20 ? `Sign ${index + 1} of 20` : `Repeat missed signs: ${index - 19} of ${missed.length}`}</p>
      <p>Pick the meaning. Missed signs return once at the end. Use Tab and Enter to answer.</p>
      <QuestionImage question={question} />
      <div className="space-y-3" aria-label="Sign meanings">{question.options.map((option, i) =>
        <button key={option} disabled={answer !== null || saving} onClick={() => void choose(i)} className="option-btn block w-full text-left p-4 rounded-xl bg-navy-700 disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">{option}</button>)}</div>
      {error && <p role="alert">{error}</p>}
      {answer !== null && <div role="status">
        <p className="font-bold">{answer === question.correctIndex ? 'Correct' : 'Not quite'} — {question.options[question.correctIndex]}</p>
        <QuestionExplanation question={question} />
        <button autoFocus className="mt-4 rounded-xl bg-accent px-5 py-3" onClick={() => { setIndex(index + 1); setAnswer(null); heading.current?.focus(); }}>Next sign</button>
      </div>}
    </> : <p role="status">Round complete. You practised 20 signs and repeated {missed.length} missed signs.</p>}
    {!question && <section className="space-y-3"><h2 className="text-xl font-bold">Weakest signs</h2>
      <p className="text-sm">Accuracy includes first answers and repeats, across saved rounds.</p>
      {weak.length ? <ul className="space-y-3">{weak.map(q => { const s = stats[q.image!.src]; return <li key={q.id} className="flex gap-3 items-center">
        <img src={q.image!.src} alt={q.image!.alt} className="w-16 h-16 object-contain bg-white rounded p-1" />
        <span>{q.options[q.correctIndex]}: {Math.round(100 * s.correct / s.attempts)}% ({s.correct}/{s.attempts})</span>
      </li>; })}</ul> : <p>Answer a sign to start tracking your accuracy.</p>}
    </section>}
    <button className="bg-navy-700 rounded-xl px-5 py-3" onClick={() => useAppStore.getState().setView('home')}>Back to Home</button>
  </main>;
}
