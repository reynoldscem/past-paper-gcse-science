export interface HazardSession {
  id: string;
  date: string;
  source: string;
  maximum: 5 | 10 | 75;
  score: number;
  notes: string;
}
export function localDate() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}
export function validSession(session: HazardSession, today = localDate()) {
  return typeof session.id === 'string' && session.id.length > 0 &&
    /^\d{4}-\d{2}-\d{2}$/.test(session.date) &&
    !Number.isNaN(Date.parse(session.date)) && new Date(session.date).toISOString().slice(0, 10) === session.date &&
    session.date <= today && [5, 10, 75].includes(session.maximum) &&
    Number.isInteger(session.score) && session.score >= 0 && session.score <= session.maximum &&
    typeof session.source === 'string' && session.source.trim().length > 0 && session.source.length <= 200 &&
    typeof session.notes === 'string' && session.notes.length <= 2000;
}
export function fullTests(sessions: HazardSession[]) {
  return sessions.filter(s => s.maximum === 75).sort((a, b) => a.date.localeCompare(b.date));
}
export function readiness(sessions: HazardSession[]) {
  const recent = fullTests(sessions).slice(-3);
  if (recent.length < 3) return 'Building evidence — log three full tests';
  return recent.every(s => s.score >= 44) ? 'Meeting the pass mark — last three full tests' : 'Keep practising — a recent full test is below 44';
}
