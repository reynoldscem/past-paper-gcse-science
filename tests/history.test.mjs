import test from 'node:test';
import assert from 'node:assert/strict';
import { getAllQuestions } from '../src/data/index.ts';
import { generatePaper } from '../src/lib/paperGenerator.ts';
import { scorePaper } from '../src/lib/scoring.ts';
import { encodeProgress, decodeProgress } from '../src/lib/progressCodec.ts';

const bank = getAllQuestions();
const progress = attempts => ({ revision: 12, attempts, activeLearningArea: 'science', totalPapersCompleted: attempts.length, bestScores: {}, streakDays: 1, lastActiveDate: '2026-10-26' });

test('300 shuffled 50-question attempts encode below 1 MiB and round-trip exactly', () => {
  const attempts = Array.from({ length: 300 }, (_, i) => {
    const paper = generatePaper(bank, { mode: 'mixed' }, 50);
    return { ...scorePaper(paper, paper.questions.map((q, n) => n % 2 ? null : q.correctIndex), 100), id: `fictional-${i}` };
  });
  const original = progress(attempts);
  const encoded = encodeProgress(original);
  const bytes = Buffer.byteLength(JSON.stringify(encoded));
  assert.ok(bytes < 1024 * 1024, `${bytes} bytes`);
  assert.equal(encoded.questionSnapshots.length, 0);
  assert.deepEqual(decodeProgress(JSON.parse(JSON.stringify(encoded))), JSON.parse(JSON.stringify(original)));
  assert.deepEqual(encodeProgress(decodeProgress(encoded)), encoded);
  console.log(`300-attempt compact document: ${bytes} bytes`);
});

test('legacy edited and removed questions retain snapshots, shuffled choices and historical keys', () => {
  const original = bank[0];
  const questions = [{ ...original, question: 'Fictional historical wording' }, { ...original, id: 'fictional-removed', question: 'Fictional removed question' }];
  const attempt = scorePaper({ id: 'fictional', title: 'Legacy example', questions }, [0, null], 20);
  const legacy = progress([attempt, { ...attempt, id: 'fictional-second' }]);
  assert.deepEqual(decodeProgress(legacy), legacy);
  const encoded = encodeProgress(decodeProgress(legacy));
  assert.equal(encoded.questionSnapshots.length, 2);
  assert.deepEqual(decodeProgress(JSON.parse(JSON.stringify(encoded))), JSON.parse(JSON.stringify(legacy)));
  assert.deepEqual(encodeProgress(decodeProgress(encoded)), encoded);
});

test('removed references without snapshots render a stable placeholder and preserve answer positions', () => {
  const encoded = encodeProgress(progress([scorePaper({ id: 'fictional', title: 'Example', questions: [bank.find(q => q.subject === 'roadSigns')] }, [1], 20)]));
  encoded.attempts[0].questions[0][0] = 'fictional-missing';
  const loaded = decodeProgress(encoded);
  assert.match(loaded.attempts[0].questions[0].question, /Question no longer in the bank/);
  assert.deepEqual(loaded.attempts[0].answers, [1]);
  assert.equal(loaded.attempts[0].questions[0].subject, 'roadSigns');
  assert.deepEqual(encodeProgress(loaded), encoded);
});
