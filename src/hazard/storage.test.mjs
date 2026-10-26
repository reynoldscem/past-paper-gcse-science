import { test } from 'node:test';
import assert from 'node:assert/strict';
import { build } from 'esbuild';

// Bundle the real store with a browser/fetch harness; never access account data.
const result = await build({ entryPoints: ['src/store/progressStore.ts'], bundle: true, write: false, platform: 'node', format: 'esm', define: { 'import.meta.env.DEV': 'false' } });
const memory = new Map([['amy-science-user', 'fictional_learner'], ['amy-science-token', 'fictional-test-token']]);
globalThis.localStorage = globalThis.sessionStorage = { setItem: (key, value) => memory.set(key, value), getItem: key => memory.get(key) ?? null, removeItem: key => memory.delete(key) };
let saved;
let status = 200;
let data = null;
globalThis.fetch = async (_url, options = {}) => {
  assert.equal(options.headers.Authorization, 'Bearer fictional-test-token');
  if (options.body) saved = JSON.parse(options.body);
  return { ok: status === 200, status, json: async () => options.body ? { ok: true, revision: (saved.revision ?? 0) + 1 } : data };
};
const { useProgressStore: store } = await import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`);
const sessions = [{ id: 'fictional-session', date: '2026-01-01', source: 'Practice', score: 44, maximum: 75, notes: '' }];
test('legacy hydration, save, existing actions, failure, account change and clear', async () => {
  await store.getState().hydrate();
  assert.deepEqual(store.getState().hazardSessions, []);
  await store.getState().saveHazardSessions(sessions);
  assert.deepEqual(saved.hazardSessions, sessions);
  assert.deepEqual(store.getState().hazardSessions, sessions);
  await store.getState().setActiveLearningArea('drivingTheory');
  assert.deepEqual(saved.hazardSessions, sessions);
  await store.getState().addAttempt({ id: 'fictional-attempt', paperTitle: 'Example', percentage: 80 });
  assert.deepEqual(saved.hazardSessions, sessions);
  assert.equal(saved.attempts.length, 1);
  status = 500;
  await assert.rejects(store.getState().saveHazardSessions([]));
  assert.deepEqual(store.getState().hazardSessions, sessions);
  status = 200;
  data = { hazardSessions: sessions };
  await store.getState().hydrate();
  assert.deepEqual(store.getState().hazardSessions, sessions);
  data = { attempts: [] }; // Another/legacy account must not inherit HP records.
  await store.getState().hydrate();
  assert.deepEqual(store.getState().hazardSessions, []);
  await store.getState().saveHazardSessions(sessions);
  await store.getState().clearProgress();
  assert.deepEqual(saved.hazardSessions, []);
});
