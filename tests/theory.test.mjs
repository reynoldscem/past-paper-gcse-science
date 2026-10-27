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

test('overlapping signs are never offered as wrong answers for each other', async () => {
  const { signBank } = await import('../src/data/signDrill.ts');
  const additions = JSON.parse(readFileSync('src/data/drivingSigns.json', 'utf8'));
  const byId = new Map(additions.map(s => [s.id, s]));
  for (const s of additions) {
    for (const other of s.overlaps ?? []) {
      assert.ok(byId.has(other), `${s.id} overlaps unknown ${other}`);
      const q = signBank.find(b => b.id === s.id);
      assert.ok(!q.options.slice(1).includes(byId.get(other).meaning), `${s.id} offers ${other}`);
    }
  }
});

test('Highway Code links use the current motorway and breakdown chapter slugs', async () => {
  const { highwayCodeReferenceUrl } = await import('../src/data/drivingReferences.ts');
  const base = 'https://www.gov.uk/guidance/the-highway-code/';
  assert.equal(highwayCodeReferenceUrl('263', ''), `${base}motorways-253-to-273#rule263`);
  assert.equal(highwayCodeReferenceUrl('274', ''), `${base}motorways-253-to-273#rule274`);
  assert.equal(highwayCodeReferenceUrl('277', ''), `${base}breakdowns-and-incidents-274-to-287#rule277`);
  const urls = driving.flatMap(q => [q.learnMoreUrl, highwayCodeReferenceUrl(q.highwayCodeRule, q.learnMoreUrl)]);
  assert.ok(urls.every(u => !/motorways-253-to-274|breakdowns-and-incidents-275-to-287/.test(u)));
});

test('weak-area additions have distinct stems, valid keys, rule citations and balanced options', async () => {
  const { drivingWeakTopicsQuestions: additions } = await import('../src/data/drivingWeakTopics.ts');
  assert.equal(additions.length, 80);
  assert.equal(additions.filter(q => q.image).length, 34);
  const normalise = text => text.toLowerCase().replace(/[^a-z0-9]/g, '');
  const oldStems = new Set(bank.filter(q => !q.id.startsWith('dt-weak-')).map(q => normalise(q.question)));
  assert.equal(new Set(additions.map(q => normalise(q.question))).size, additions.length);
  for (const [index, q] of additions.entries()) {
    assert.equal(q.id, `dt-weak-${String(index + 1).padStart(3, '0')}`);
    assert.ok(!oldStems.has(normalise(q.question)), q.id);
    assert.equal(q.options.length, 4, q.id);
    assert.equal(new Set(q.options.map(normalise)).size, 4, q.id);
    assert.ok(Number.isInteger(q.correctIndex) && q.correctIndex >= 0 && q.correctIndex < 4, q.id);
    assert.match(q.highwayCodeRule, /^\d+$/, q.id);
    assert.ok(q.explanation.startsWith(`Rule ${q.highwayCodeRule}:`), q.id);
    assert.ok(q.learnMoreUrl.startsWith('https://www.gov.uk/guidance/the-highway-code/'), q.id);
    assert.ok(q.learnMoreUrl.endsWith(`#rule${q.highwayCodeRule}`), q.id);
    assert.ok(bank.some(original => original.id === q.id), q.id);
  }
  const longest = additions.filter(q => [...q.options[q.correctIndex]].length === Math.max(...q.options.map(o => [...o].length)));
  assert.ok(longest.length / additions.length <= 0.3, `${longest.length}/${additions.length}`);
  // Prevent replacing a longest-answer clue with a consistent shortest-answer clue.
  const shortest = additions.filter(q => [...q.options[q.correctIndex]].length === Math.min(...q.options.map(o => [...o].length)));
  assert.ok(shortest.length / additions.length <= 0.4, `${shortest.length}/${additions.length}`);
});

test('weak-area additions are available in mocks and each existing weak topic', async () => {
  const { drivingWeakTopicsQuestions: additions } = await import('../src/data/drivingWeakTopics.ts');
  // Supplying the new pool alone proves mock selection does not exclude its IDs.
  const mock = generatePaper(additions, { mode: 'driving-mock' });
  assert.equal(mock.questions.length, 50);
  assert.ok(mock.questions.every(q => q.id.startsWith('dt-weak-')));
  for (const topic of new Set(additions.map(q => q.topic))) {
    const old = driving.find(q => q.topic === topic && !q.id.startsWith('dt-weak-'));
    assert.ok(old, topic);
    const attempt = scorePaper({ id: 'weak-topic-fixture', title: 'Practice', subject: old.subject, questions: [old], createdAt: 0 }, [(old.correctIndex + 1) % 4], 1);
    const practice = generatePaper(driving, { mode: 'weak-topics' }, driving.length, [attempt]);
    assert.ok(practice.questions.every(q => q.topic === topic), topic);
    for (const q of additions.filter(q => q.topic === topic)) {
      assert.ok(practice.questions.some(selected => selected.id === q.id), q.id);
    }
  }
});

test('current Highway Code additions are registered with complete references and original official images', async () => {
  const { drivingHighwayCodeQuestions: additions } = await import('../src/data/drivingHighwayCode.ts');
  const chapters = [
    'traffic-signs', 'road-markings', 'light-signals-controlling-traffic',
    'signals-to-other-road-users', 'signals-by-authorised-persons', 'vehicle-markings',
    'rules-for-pedestrians-1-to-35',
    'rules-for-users-of-powered-wheelchairs-and-mobility-scooters-36-to-46',
    'rules-about-animals-47-to-58', 'rules-for-cyclists-59-to-82',
    'rules-for-motorcyclists-83-to-88', 'road-users-requiring-extra-care-204-to-225',
  ];
  const manifest = JSON.parse(readFileSync('public/driving/manifest.json', 'utf8'));
  const markers = new Map(chapters.map(chapter => [chapter,
    [...readFileSync(`papers/highway-code/current/${chapter}.txt`, 'utf8').matchAll(/\[IMG ([^\]]+)\]/g)].map(m => m[1]),
  ]));
  assert.ok(additions.length > 0);
  assert.equal(new Set(additions.map(q => q.id)).size, additions.length);
  for (const chapter of chapters) assert.ok(additions.some(q => q.hcChapter === chapter), chapter);
  for (const q of additions) {
    assert.match(q.id, /^hc-[a-z]+-\d{3}$/, q.id);
    assert.ok(chapters.includes(q.hcChapter), q.id);
    assert.equal(q.supersededCheck, 'current', q.id);
    assert.match(q.highwayCodeRule, /^\d+(?:-\d+)?$/, q.id);
    const firstRule = q.highwayCodeRule.split('-')[0];
    assert.ok(q.explanation.startsWith(`Rule ${firstRule}:`), q.id);
    assert.ok(q.learnMoreUrl.endsWith(`#rule${firstRule}`), q.id);
    assert.ok(Number.isInteger(q.correctIndex) && q.correctIndex >= 0 && q.correctIndex < 4, q.id);
    assert.equal(q.options.length, 4, q.id);
    assert.equal(new Set(q.options.map(o => o.toLowerCase().replace(/[^a-z0-9]/g, ''))).size, 4, q.id);
    assert.ok(topics[q.subject].some(t => t.id === q.topic && t.label === q.topicLabel), q.id);
    assert.equal(bank.filter(original => original.id === q.id).length, 1, q.id);
    if (q.image) {
      const entry = manifest.find(m => m.path === q.image.src);
      assert.ok(entry, q.id);
      assert.ok(markers.get(q.hcChapter).includes(entry.sourceUrl), q.id);
      assert.equal(entry.licence, 'Open Government Licence v3.0', q.id);
      assert.ok(q.image.alt.length > 10, q.id);
      assert.equal(createHash('sha256').update(readFileSync(`public${q.image.src}`)).digest('hex'), entry.sha256, q.id);
    }
  }
  for (let position = 0; position < 4; position++) {
    assert.ok(additions.filter(q => q.correctIndex === position).length / additions.length <= 0.35);
  }
});
