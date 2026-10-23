import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validSession, fullTests, readiness } from './model.ts';
const session = (score, date = '2026-01-01', maximum = 75) => ({ id: 'fictional-session', date, source: 'Official practice', maximum, score, notes: '' });
test('accepts zero, pass boundary and maximum for each result type', () => {
  for (const maximum of [5, 10, 75]) for (const score of [0, maximum]) assert.equal(validSession(session(score, undefined, maximum), '2026-01-10'), true);
  assert.equal(validSession(session(44), '2026-01-10'), true);
});
test('rejects invalid scores, dates and missing sources', () => {
  for (const score of [-1, 76, 4.5, NaN, Infinity]) assert.equal(validSession(session(score)), false);
  for (const date of ['2026-02-30', 'invalid', '2027-01-01']) assert.equal(validSession(session(44, date), '2026-01-10'), false);
  assert.equal(validSession({ ...session(44), source: ' ' }), false);
  assert.equal(validSession(session(6, undefined, 5)), false);
});
test('clips do not establish readiness or get extrapolated to 75', () => {
  const clips = [session(5, undefined, 5), session(10, undefined, 10), session(5, undefined, 5)];
  assert.equal(fullTests(clips).length, 0);
  assert.match(readiness(clips), /Building evidence/);
});
test('readiness uses three latest dates, exact 44 passes, one failure fails', () => {
  const records = [session(44, '2026-01-04'), session(0, '2026-01-01'), session(44, '2026-01-03'), session(44, '2026-01-02')];
  assert.match(readiness(records), /Meeting the pass mark/);
  assert.equal(records[0].date, '2026-01-04');
  assert.match(readiness([...records, session(43, '2026-01-05')]), /Keep practising/);
  assert.match(readiness(records.slice(0, 2)), /Building evidence/);
});
