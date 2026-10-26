import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { getAllQuestions, getPracticeQuestions } from '../src/data/index.ts';
import { topics } from '../src/data/topics.ts';
import { generatePaper } from '../src/lib/paperGenerator.ts';
import { buildQuestionStats, buildTopicStats, getUnseenQuestionIds, getWeakQuestionIds } from '../src/lib/questionStats.ts';
import { scorePaper } from '../src/lib/scoring.ts';
import manifest from './fixtures/science-content.json';

const science = getAllQuestions().filter(q => ['biology', 'chemistry', 'physics'].includes(q.subject));
const byId = new Map(science.map(q => [q.id, q]));
const additions = manifest.newIds.map(id => byId.get(id));
const eligible = science.filter(q => !q.scope);
const denied = /\/guides\/(z2hp3k7|z3hb97h|z2gjtv4|z2982hv|z8yk87h)\/|\/topics\/z79mnk7(?:\/|$)/;

test('each text question bank stays below the 40% longest-correct ceiling, including ties', () => {
  for (const pool of [getAllQuestions(), getPracticeQuestions()]) {
    for (const subject of ['driving', 'biology', 'chemistry', 'physics']) {
      const questions = pool.filter(q => !q.image && (subject === 'driving'
        ? !['biology', 'chemistry', 'physics'].includes(q.subject)
        : q.subject === subject));
      assert.ok(questions.length > 0, subject);
      const longest = questions.filter(q => {
        const lengths = q.options.map(option => [...option].length);
        return lengths[q.correctIndex] === Math.max(...lengths);
      }).length;
      assert.ok(longest / questions.length <= 0.4,
        `${subject}: ${longest}/${questions.length} correct answers are longest (ties included)`);
    }
  }
});

test('all science records have unique IDs, valid options, explanations and matching topic labels', () => {
  assert.equal(new Set(getAllQuestions().map(q => q.id)).size, getAllQuestions().length);
  for (const q of science) {
    assert.equal(q.options.length, 4, q.id);
    assert.equal(new Set(q.options.map(o => o.trim().toLowerCase())).size, 4, q.id);
    assert.ok(q.options.every(o => o.trim()), q.id);
    assert.ok(Number.isInteger(q.correctIndex) && q.correctIndex >= 0 && q.correctIndex < 4, q.id);
    assert.ok(q.explanation.trim().length > 0, q.id);
    assert.equal(q.topicLabel, topics[q.subject].find(t => t.id === q.topic)?.label, q.id);
  }
  for (const id of manifest.correctedIds) assert.ok(byId.has(id), id);
});

test('science links are present, avoid known bad pages, and match the verified topic mapping offline', () => {
  const verified = new Set(manifest.verifiedLinks.filter(r => r.status === 200 && r.title).map(r => r.url));
  const resources = new Set(['chem-atmosphere-006', 'chem-atmosphere-007', 'chem-atmosphere-012', 'chem-atmosphere-013', 'chem-atmosphere-016']);
  for (const q of science) {
    assert.ok(q.learnMoreUrl && !denied.test(q.learnMoreUrl), q.id);
    assert.ok(verified.has(q.learnMoreUrl), q.id);
    assert.equal(q.learnMoreUrl, resources.has(q.id) ? 'https://www.bbc.co.uk/bitesize/topics/zptnng8' : manifest.topicUrls[q.topic], q.id);
  }
});

test('new Foundation coverage includes all practicals and equations without excessive longest-answer clues', () => {
  assert.equal(additions.length, 88);
  assert.ok(additions.every(q => q && !q.scope));
  for (let n = 1; n <= 21; n++) assert.ok(manifest.newIds.includes(manifest.coverage[`RP${n}`]));
  const equations = Object.keys(manifest.coverage).filter(key => key.startsWith('EQ-'));
  assert.equal(equations.length, 13);
  for (const key of equations) assert.ok(manifest.newIds.includes(manifest.coverage[key]));
  const longest = additions.filter(q => [...q.options[q.correctIndex]].length === Math.max(...q.options.map(o => [...o].length)));
  assert.ok(longest.length / additions.length <= 0.35, `${longest.length}/${additions.length}`);
  assert.ok(additions.every(q => q.options.every(o => !/\b(always|never)\b/i.test(o))));
});

test('all thirteen new equation answers agree with independent numerical calculations', () => {
  const expected = {
    'EQ-W=Fs': `${30 * 4} J`, 'EQ-F=ke': `${10 / 200} m`, 'EQ-s=vt': `${6 * 15} m`,
    'EQ-a=dv/t': `${(8 - 2) / 3} m/s²`, 'EQ-P=W/t': `${600 / 15} W`,
    'EQ-efficiency-power': `${20 / 80 * 100}%`, 'EQ-Q=It': `${0.5 * 40} C`,
    'EQ-E=QV': `${180 / 30} V`, 'EQ-P=I2R': `${2 ** 2 * 5} W`,
    'EQ-v2-u2=2as': `${Math.sqrt(2 * 2 * 9)} m/s`, 'EQ-Ee=halfke2': '2 J',
    'EQ-T=1/f': `${1 / 5} s`, 'EQ-E=mL': '30,000 J',
  };
  assert.ok(Math.abs(0.5 * 100 * 0.2 ** 2 - 2) < 1e-12);
  assert.equal(0.5 * 60000, 30000);
  for (const [key, answer] of Object.entries(expected)) {
    const q = byId.get(manifest.coverage[key]);
    assert.equal(q.options[q.correctIndex], answer, q.id);
  }
});

function oldAttempt() {
  // Old snapshots predate the scope field. Eligibility must come from the current bank.
  const questions = science.map(({ scope, ...q }) => q);
  return scorePaper({ id: 'synthetic-paper', title: 'Synthetic science', subject: 'mixed', createdAt: 0, questions }, questions.map(q => (q.correctIndex + 1) % 4), 120);
}

test('all listed scope tags exist and retained records still survive history serialization', () => {
  for (const [scope, ids] of Object.entries(manifest.scopes)) {
    for (const id of ids) assert.equal(byId.get(id)?.scope, scope, id);
  }
  assert.equal(science.filter(q => q.scope).length, 28);
  assert.deepEqual(getPracticeQuestions().filter(q => ['biology', 'chemistry', 'physics'].includes(q.subject)), eligible);
  const old = oldAttempt();
  assert.deepEqual(JSON.parse(JSON.stringify(old)).questions, old.questions);
  for (const id of ['phys-electromagnetism-005', 'phys-energy-phys-025', 'chem-organic-006', 'phys-atomic-structure-phys-009']) {
    assert.ok(eligible.some(q => q.id === id), id);
  }
});

test('random, topic, mixed, unseen, weak and weak-topic pools exclude tags even with legacy attempts and padding', () => {
  const attempts = [oldAttempt()];
  const modes = [{ mode: 'mixed' }, { mode: 'unseen' }, { mode: 'weak' }, { mode: 'weak-topics' }];
  for (const subject of ['biology', 'chemistry', 'physics']) {
    modes.push({ subject }, { mode: 'unseen', subject }, { mode: 'weak', subject });
    for (const topic of topics[subject]) modes.push({ subject, topic: topic.id });
  }
  for (const mode of modes) {
    const paper = generatePaper(science, mode, 1000, attempts);
    assert.ok(paper.questions.length > 0, JSON.stringify(mode));
    assert.equal(new Set(paper.questions.map(q => q.id)).size, paper.questions.length);
    for (const q of paper.questions) {
      assert.ok(!q.scope, q.id);
      const original = byId.get(q.id);
      assert.equal(q.options[q.correctIndex], original.options[original.correctIndex], q.id);
    }
  }
  assert.equal(generatePaper(science, { mode: 'mixed' }, 1000).questions.length, eligible.length);
  const onlyTagged = science.filter(q => q.scope);
  assert.equal(generatePaper(onlyTagged, { mode: 'unseen' }).questions.length, 0);
  assert.equal(generatePaper(onlyTagged, { mode: 'weak' }, 20, attempts).questions.length, 0);
});

test('stats and unseen denominators exclude tagged questions and their historical answers', () => {
  const stats = buildTopicStats(science, [oldAttempt()]).filter(s => ['biology', 'chemistry', 'physics'].includes(s.subject));
  assert.equal(stats.reduce((sum, s) => sum + s.totalQuestions, 0), eligible.length);
  assert.equal(stats.reduce((sum, s) => sum + s.totalAttempts, 0), eligible.length);
  assert.equal(stats.reduce((sum, s) => sum + s.uniqueAttempted, 0), eligible.length);
  for (const s of stats) assert.equal(s.accuracy, 0);
  assert.deepEqual(getUnseenQuestionIds(science, []), new Set(eligible.map(q => q.id)));
  assert.equal(getUnseenQuestionIds(science, [oldAttempt()]).size, 0);
});

test('corrected calculations and diagrams retain usable keys and local assets', () => {
  for (const [id, answer] of Object.entries({
    'chem-quantitative-006': '5 g/dm³', 'phys-energy-phys-021': 'Copper',
    'phys-atomic-structure-phys-004': '6 hours', 'phys-forces-013': '5,000 Pa',
    'bio-inheritance-003': '25%', 'bio-inheritance-009': '25%', 'bio-inheritance-010': '75%',
  })) {
    const q = byId.get(id);
    assert.equal(q.options[q.correctIndex], answer, id);
  }
  const melting = byId.get('phys-particle-model-012');
  assert.match(melting.options[melting.correctIndex], /potential energy increases/);
  assert.match(melting.explanation, /kinetic energy stay constant/);
  for (const q of science.filter(q => q.image)) {
    assert.match(q.image.src, /^\/science\//);
    assert.ok(q.image.alt.length > 20);
    assert.match(readFileSync(`public${q.image.src}`, 'utf8'), /<svg/);
  }
});


test('submitted science skips count as wrong, seen and weak consistently with scoring', () => {
  const questions = eligible.filter(q => q.subject === 'biology').slice(0, 20);
  const paper = { id: 'skipped-science', title: 'Synthetic science', subject: 'biology', createdAt: 0, questions };
  const answers = questions.map((q, index) => index === 0 ? q.correctIndex : null);
  const attempt = scorePaper(paper, answers, 60);
  assert.equal(attempt.score, 1);
  assert.equal(attempt.percentage, 5);
  const questionStats = buildQuestionStats([attempt]);
  for (const q of questions.slice(1)) {
    assert.equal(questionStats.get(q.id).timesAttempted, 1);
    assert.equal(questionStats.get(q.id).timesWrong, 1);
    assert.equal(questionStats.get(q.id).accuracy, 0);
  }
  assert.deepEqual(getWeakQuestionIds([attempt]), new Set(questions.slice(1).map(q => q.id)));
  assert.equal(getUnseenQuestionIds(questions, [attempt]).size, 0);
  const stats = buildTopicStats(questions, [attempt]).find(s => s.subject === 'biology');
  assert.equal(stats.totalAttempts, 20);
  assert.equal(stats.uniqueAttempted, 20);
  assert.equal(stats.accuracy, attempt.percentage);
  assert.equal(stats.topics.reduce((total, t) => total + t.totalWrong, 0), 19);
  const weakTopics = stats.topics.filter(t => t.accuracy < 86);
  const practice = generatePaper(questions, { mode: 'weak-topics' }, 20, [attempt]);
  assert.ok(practice.questions.length > 0);
  assert.ok(practice.questions.every(q => weakTopics.some(t => t.topic === q.topic)));
});


test('padded unseen papers label the actual unseen and review mix in their visible title', () => {
  const questions = eligible.filter(q => q.subject === 'biology').slice(0, 20);
  const seen = questions.slice(1);
  const attempt = scorePaper({ id: 'seen-science', title: 'Synthetic science', subject: 'biology', createdAt: 0, questions: seen }, seen.map(() => null), 60);
  for (const mode of [{ mode: 'unseen' }, { mode: 'unseen', subject: 'biology' }]) {
    const paper = generatePaper(questions, mode, 20, [attempt]);
    assert.equal(paper.questions.length, 20);
    assert.ok(paper.questions.some(q => q.id === questions[0].id));
    assert.match(paper.title, /1 unseen \+ 19 review/);
    const short = generatePaper(questions.slice(0, 5), mode, 20, [attempt]);
    assert.equal(short.questions.length, 5);
    assert.match(short.title, /1 unseen \+ 4 review/);
    const allNew = generatePaper(questions, mode, 20);
    assert.doesNotMatch(allNew.title, /review/);
    const allSeen = generatePaper(seen, mode, 20, [attempt]);
    assert.match(allSeen.title, /0 unseen \+ 19 review/);
  }
});
