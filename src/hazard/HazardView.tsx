import { useState } from 'react';
import { useProgressStore } from '../store/progressStore';
import { HazardGuide } from './HazardGuide';
import { fullTests, localDate, readiness, validSession, type HazardSession } from './model';

const input = 'block w-full mt-1 rounded-lg bg-navy-900 border border-navy-600 p-3 text-white';
export function HazardView() {
  const { hazardSessions = [], saveHazardSessions } = useProgressStore();
  const [date, setDate] = useState(localDate);
  const [source, setSource] = useState('DVSA Safe Driving for Life');
  const [maximum, setMaximum] = useState<5 | 10 | 75>(5);
  const [score, setScore] = useState('');
  const [notes, setNotes] = useState('');
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  const tests = fullTests(hazardSessions);
  const recent = tests.slice(-10);
  async function persist(sessions: HazardSession[]) {
    setBusy(true); setMessage('Saving…');
    try { await saveHazardSessions(sessions); setMessage('Saved to your account.'); return true; }
    catch { setMessage('Could not save. Check your connection or sign in again, then retry.'); return false; }
    finally { setBusy(false); }
  }
  return <main className="max-w-3xl mx-auto px-4 pb-12 space-y-8">
    <header><h1 className="text-3xl font-bold mb-3">Hazard perception</h1><p className="text-navy-300">Learn the cues, practise on official clips, then track your progress.</p><a href="#hp-tracker" className="inline-block underline mt-3">Jump to practice tracker</a></header>
    <HazardGuide />
    <section id="hp-tracker" className="space-y-5 scroll-mt-4">
      <h2 className="text-2xl font-bold">Practice tracker</h2>
      <div className="glass-card rounded-2xl p-6 space-y-3">
        <h3 className="font-bold">Ready? {readiness(hazardSessions)}</h3>
        <p className="text-sm text-navy-300">Our practice indicator uses your three most recent full 75-point tests, ordered by session date. All three must reach 44. It is not a DVSA assessment or a guarantee; use recent, unfamiliar clips. Individual clips never count towards readiness.</p>
        {tests.length > 0 && <p>Latest: <strong>{tests[tests.length - 1].score}/75</strong>{tests.length > 1 && <> · Change from previous: {tests[tests.length - 1].score - tests[tests.length - 2].score > 0 ? '+' : ''}{tests[tests.length - 1].score - tests[tests.length - 2].score} points</>}</p>}
        {recent.length > 0 ? <div className="space-y-2" role="img" aria-label={`Full-test score trend; pass mark 44 out of 75. ${recent.map(s => `${s.date}: ${s.score}`).join('; ')}`}>
          <p className="text-sm">Last {recent.length} full tests · line marks 44/75 · oldest first</p>
          {recent.map(s => <div key={s.id} className="flex gap-3 items-center text-sm"><span className="shrink-0">{s.date}</span><div className="relative h-5 flex-1 bg-navy-800 rounded"><div className={`h-5 rounded ${s.score >= 44 ? 'bg-emerald-500' : 'bg-amber-500'}`} style={{ width: `${s.score / 75 * 100}%` }} /><span className="absolute top-0 h-5 border-l-2 border-white" style={{ left: `${44 / 75 * 100}%` }} /></div><span className="w-12 text-right">{s.score}/75</span></div>)}
        </div> : <p>No full tests logged yet. Start with the free clips above.</p>}
      </div>
      <form className="glass-card rounded-2xl p-6 space-y-4" onSubmit={async e => {
        e.preventDefault();
        const session: HazardSession = { id: crypto.randomUUID(), date, source: source.trim(), maximum, score: Number(score), notes: notes.trim() };
        if (score.trim() === '' || !validSession(session)) { setMessage('Enter a valid date, source and whole-number score within the selected maximum.'); return; }
        if (await persist([...hazardSessions, session])) { setScore(''); setNotes(''); }
      }}>
        <h3 className="font-bold text-lg">Log a session or clip</h3>
        <fieldset disabled={busy} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <label>Date<input required type="date" value={date} max={localDate()} onChange={e => setDate(e.target.value)} className={input} /></label>
            <label>Result type<select className={input} value={maximum} onChange={e => { setMaximum(Number(e.target.value) as 5 | 10 | 75); setScore(''); }}><option value={5}>One-hazard clip / 5</option><option value={10}>Two-hazard clip / 10</option><option value={75}>Full test / 75</option></select></label>
          </div>
          <label className="block">Practice source preset<select className={input} defaultValue="" onChange={e => { if (e.target.value) setSource(e.target.value); }}>
            <option value="">Choose a source (optional)</option>
            {['DVSA Safe Driving for Life', 'Official DVSA / TSO app', 'RAC Driving Theory Test Kit', 'iTheory', 'Hazard Perception Test Kit UK', 'Revision Clips', 'toptests.co.uk'].map(name => <option key={name}>{name}</option>)}
          </select></label>
          <label className="block">Source name or details<input required maxLength={200} value={source} onChange={e => setSource(e.target.value)} className={input} /></label>
          <p className="text-sm text-navy-300">Choose a preset or enter any source. Listing a source does not verify its price, licensing or official status.</p>
          <label className="block">Score out of {maximum}<input required type="number" min={0} max={maximum} step={1} value={score} onChange={e => setScore(e.target.value)} className={input} /></label>
          <label className="block">Missed hazard types and notes<textarea maxLength={2000} value={notes} onChange={e => setNotes(e.target.value)} placeholder="For example: junctions — noticed the emerging car too late" className={input} rows={3} /></label>
          <button type="submit" className="bg-accent rounded-xl px-5 py-3 font-bold disabled:opacity-50">{busy ? 'Saving…' : 'Save practice'}</button>
        </fieldset>
        <p role="status" aria-live="polite">{message}</p>
      </form>
      <h3 className="font-bold text-lg">Session history</h3>
      {hazardSessions.length === 0 && <p className="text-navy-300">Your saved sessions will appear here.</p>}
      {[...hazardSessions].sort((a, b) => b.date.localeCompare(a.date)).map(s => <article key={s.id} className="glass-card rounded-xl p-4 space-y-2">
        <div className="flex justify-between gap-3"><h4 className="font-bold">{s.date} · {s.score}/{s.maximum}</h4><button disabled={busy} className="underline text-sm disabled:opacity-50" aria-label={`Delete session ${s.date}, ${s.score} out of ${s.maximum}`} onClick={() => { if (window.confirm('Delete this practice session?')) void persist(hazardSessions.filter(item => item.id !== s.id)); }}>Delete</button></div>
        <p className="break-words">{s.source} · {s.maximum === 75 ? 'Full test' : 'Single clip'}</p><p className="whitespace-pre-wrap break-words text-navy-300">{s.notes || 'No notes recorded.'}</p>
      </article>)}
    </section>
  </main>;
}
