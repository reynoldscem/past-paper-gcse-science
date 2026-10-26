import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { getAllQuestions } from '../src/data/index.ts';
import { drivingSyllabus } from '../src/data/drivingSyllabus.ts';
import { subjectLearningArea, topics } from '../src/data/topics.ts';
import { generatePaper } from '../src/lib/paperGenerator.ts';
import { scorePaper } from '../src/lib/scoring.ts';
import { buildTopicStats } from '../src/lib/questionStats.ts';

const bank = getAllQuestions();
const driving = bank.filter(q => subjectLearningArea[q.subject] === 'drivingTheory');

test('question bank is valid, references are present and every topic is selectable', () => {
  assert.equal(new Set(bank.map(q => q.id)).size, bank.length);
  for (const q of driving) {
    assert.equal(q.options.length, 4, q.id);
    assert.equal(new Set(q.options).size, 4, q.id);
    assert.ok(q.correctIndex >= 0 && q.correctIndex < 4, q.id);
    assert.ok(q.explanation && q.highwayCodeRule, q.id);
    assert.ok(q.learnMoreUrl.startsWith('https://www.gov.uk/'), q.id);
    assert.ok(topics[q.subject].some(t => t.id === q.topic), q.id);
  }
  for (const area of drivingSyllabus) assert.ok(driving.filter(q => area.topics.includes(q.topic)).length >= 3, area.label);
});

test('every visual has a local, unchanged official image and licence manifest entry', () => {
  const manifest = JSON.parse(readFileSync('public/driving/manifest.json', 'utf8'));
  const visual = driving.filter(q => q.image);
  assert.ok(visual.length >= 50);
  for (const q of visual) {
    const entry = manifest.find(m => m.path === q.image.src);
    assert.ok(entry, q.id);
    assert.equal(entry.licence, 'Open Government Licence v3.0');
    assert.ok(entry.sourcePage.startsWith('https://www.gov.uk/'));
    const bytes = readFileSync(`public${q.image.src}`);
    assert.ok(bytes.length > 100);
    assert.equal(createHash('sha256').update(bytes).digest('hex'), entry.sha256);
    assert.ok(q.image.alt.length > 10);
  }
});

test('mocks contain 50 unique driving questions, visual practice and every syllabus area', () => {
  for (let i = 0; i < 100; i++) {
    const paper = generatePaper(bank, { mode: 'driving-mock' });
    assert.equal(paper.questions.length, 50);
    assert.equal(new Set(paper.questions.map(q => q.id)).size, 50);
    assert.equal(paper.durationSeconds, 3420);
    assert.equal(paper.passMark, 43);
    assert.ok(paper.questions.every(q => subjectLearningArea[q.subject] === 'drivingTheory'));
    assert.ok(paper.questions.filter(q => q.image).length >= 12);
    for (const area of drivingSyllabus) assert.ok(paper.questions.some(q => area.topics.includes(q.topic)), area.label);
    for (const q of paper.questions) {
      const original = bank.find(o => o.id === q.id);
      assert.equal(q.options[q.correctIndex], original.options[original.correctIndex], q.id);
    }
  }
});

test('mock scoring preserves pass mark, images, references and unanswered questions', () => {
  const paper = generatePaper(bank, { mode: 'driving-mock' });
  for (const correct of [0, 42, 43, 50]) {
    const answers = paper.questions.map((q, i) => i < correct ? q.correctIndex : null);
    const result = scorePaper(paper, answers, 3420);
    assert.equal(result.score, correct);
    assert.equal(result.passMark, 43);
    assert.equal(result.wrongQuestionIds.length, 50 - correct);
    assert.deepEqual(JSON.parse(JSON.stringify(result)).questions, paper.questions);
  }
});

test('weak-topic practice uses new questions from weak topics, without unrelated padding', () => {
  const question = driving.find(q => q.topic === 'alertness');
  const attempt = scorePaper({ id: 'test', title: 'Test', subject: question.subject, questions: [question], createdAt: 0 }, [(question.correctIndex + 1) % 4], 1);
  const paper = generatePaper(driving, { mode: 'weak-topics' }, 20, [attempt]);
  assert.ok(paper.questions.length > 1);
  assert.ok(paper.questions.every(q => q.topic === 'alertness'));
  assert.ok(paper.questions.some(q => q.id !== question.id));
  const stats = buildTopicStats(driving, [attempt]).flatMap(s => s.topics);
  assert.equal(stats.find(t => t.topic === 'alertness').accuracy, 0);
  assert.throws(() => generatePaper(driving, { mode: 'weak-topics' }, 20, []));
});

test('science practice retains its existing size and has no mock restrictions', () => {
  const paper = generatePaper(bank, { subject: 'biology' });
  assert.equal(paper.questions.length, 20);
  assert.ok(paper.questions.every(q => q.subject === 'biology'));
  assert.equal(paper.durationSeconds, undefined);
  assert.equal(paper.passMark, undefined);
});

test('unanswered mock questions contribute to weak-topic statistics', () => {
  const paper = generatePaper(bank, { mode: 'driving-mock' });
  const attempt = scorePaper(paper, paper.questions.map(() => null), 3420);
  const stats = buildTopicStats(driving, [attempt]).flatMap(s => s.topics).filter(t => t.totalAttempts > 0);
  assert.ok(stats.length > 0);
  assert.ok(stats.every(t => t.accuracy === 0));
  assert.ok(generatePaper(driving, { mode: 'weak-topics' }, 20, [attempt]).questions.length > 0);
});

test('sign rounds contain 20 distinct images with shuffled, unambiguous choices and complete provenance', async () => {
  const { signBank, createSignRound } = await import('../src/data/signDrill.ts');
  const manifest = JSON.parse(readFileSync('public/driving/manifest.json', 'utf8'));
  assert.ok(signBank.length >= 120);
  assert.equal(new Set(signBank.map(q => q.image.src)).size, signBank.length);
  assert.equal(new Set(manifest.map(m => m.sha256)).size, manifest.length);
  for (const q of signBank) {
    assert.equal(new Set(q.options).size, 4);
    const m = manifest.find(m => m.path === q.image.src);
    assert.ok(m.alt && m.highwayCodeRule && m.licenceUrl && m.sourceUrl);
    assert.equal(createHash('sha256').update(readFileSync(`public${m.path}`)).digest('hex'), m.sha256);
  }
  const positions = new Set();
  for (let i = 0; i < 20; i++) {
    const round = createSignRound();
    assert.equal(round.length, 20);
    assert.equal(new Set(round.map(q => q.image.src)).size, 20);
    for (const q of round) {
      const original = signBank.find(s => s.id === q.id);
      assert.equal(q.options[q.correctIndex], original.options[original.correctIndex]);
      positions.add(q.correctIndex);
    }
  }
  assert.equal(positions.size, 4);
});

test('drill meanings are unique and distractors come from the same sign family', async () => {
  const { signBank } = await import('../src/data/signDrill.ts');
  const additions = JSON.parse(readFileSync('src/data/drivingSigns.json', 'utf8'));
  assert.ok(signBank.length >= 250);
  assert.equal(new Set(additions.map(s => s.meaning)).size, additions.length);
  const families = new Map();
  for (const s of additions) families.set(s.family, [...(families.get(s.family) ?? []), s.meaning]);
  for (const s of additions) {
    assert.ok(s.family, s.id);
    assert.ok(s.image.alt.length > 10, s.id);
    const q = signBank.find(b => b.id === s.id);
    const peers = families.get(s.family);
    if (peers.length >= 4) assert.ok(q.options.every(o => peers.includes(o)), s.id);
  }
});
