import { build } from 'esbuild';

// Use the same bank entry point and bundler as scripts/test.mjs/theory.test.mjs.
const result = await build({
  stdin: {
    contents: "export { getAllQuestions } from './src/data/index.ts';",
    resolveDir: process.cwd(),
  },
  bundle: true,
  platform: 'node',
  format: 'esm',
  write: false,
});
const { getAllQuestions } = await import(
  `data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`
);
const subjects = new Set(['roadRules', 'roadSigns', 'hazardAwareness', 'vehicleSafety']);
const questions = getAllQuestions().filter(q => subjects.has(q.subject));
const normalise = text => text.toLowerCase().replace(/[^a-z0-9]/g, '');
const tokens = text => new Set(text.toLowerCase().match(/[a-z0-9]+/g) ?? []);
const prepared = questions.map(q => ({ q, stem: normalise(q.question), words: tokens(q.question) }));
const failures = [];
for (let i = 0; i < prepared.length; i++) {
  for (let j = i + 1; j < prepared.length; j++) {
    const a = prepared[i];
    const b = prepared[j];
    if (a.q.id === b.q.id) {
      failures.push({ kind: 'duplicate-id', ids: [a.q.id, b.q.id] });
    }
    const intersection = [...a.words].filter(word => b.words.has(word)).length;
    const union = a.words.size + b.words.size - intersection;
    const similarity = union ? intersection / union : 1;
    if (a.stem === b.stem || similarity > 0.7) {
      failures.push({
        kind: a.stem === b.stem ? 'duplicate-stem' : 'similar-stem',
        ids: [a.q.id, b.q.id],
        similarity,
        stems: [a.q.question, b.q.question],
      });
    }
  }
}
const counts = Object.fromEntries(['duplicate-id', 'duplicate-stem', 'similar-stem'].map(
  kind => [kind, failures.filter(f => f.kind === kind).length],
));
console.log(JSON.stringify({
  questions: questions.length,
  newQuestions: questions.filter(q => q.id.startsWith('hc-')).length,
  threshold: 0.7,
  counts,
  failures: process.argv.includes('--json') ? failures : failures.slice(0, 5),
  ...(failures.length > 5 && !process.argv.includes('--json')
    ? { note: 'First five failures shown; pass --json for all pairs.' } : {}),
}, null, 2));
process.exitCode = failures.length ? 1 : 0;
