import { test, expect } from '@playwright/test';

const empty = () => ({ revision: 0, activeLearningArea: 'drivingTheory', attempts: [], totalPapersCompleted: 0, bestScores: {}, streakDays: 0, lastActiveDate: '', hazardSessions: [], signAccuracy: {} });
const decoded = (page, saved) => page.evaluate(async data => (await import('/src/lib/progressCodec.ts')).decodeProgress(data).attempts, saved);
const pending = page => page.evaluate(() => JSON.parse(localStorage.getItem('pending-attempts:fictional') ?? '[]'));
async function setup(page) {
  await page.addInitScript(() => {
    if (!sessionStorage.getItem('initialised')) {
      localStorage.setItem('amy-science-user', 'fictional');
      sessionStorage.setItem('amy-science-token', 'fictional-token');
      sessionStorage.setItem('initialised', 'yes');
    }
  });
}
async function submit(page, mock = true) {
  await page.getByRole('button', { name: mock ? /Start mock/ : /Visual practice/ }).click();
  await page.locator('.option-btn').first().click();
  await page.getByRole('button', { name: 'Skip to end' }).click();
  await page.getByRole('button', { name: /^Submit/ }).click();
}
function api(page, state) {
  return page.route('**/api/progress/**', async route => {
    if (route.request().method() === 'GET') return route.fulfill({ json: state.saved });
    state.posts++;
    const body = route.request().postDataJSON();
    if (state.failure) return route.fulfill({ status: state.failure, json: {} });
    if (body.revision !== state.saved.revision) return route.fulfill({ status: 409, json: {} });
    const { historyBaseCount, snapshotBaseCount, ...document } = body;
    state.saved = { ...document, revision: body.revision + 1,
      attempts: [...(historyBaseCount === undefined ? [] : state.saved.attempts), ...body.attempts],
      questionSnapshots: [...(snapshotBaseCount === undefined ? [] : state.saved.questionSnapshots), ...body.questionSnapshots],
    };
    if (state.loseAck) { state.loseAck = false; return route.abort(); }
    return route.fulfill({ json: { ok: true, revision: state.saved.revision } });
  });
}

for (const failure of ['500', 'network', 'invalid-json']) test(`C1: ${failure} load blocks all mutations; retry accepts an empty account`, async ({ page }) => {
  await setup(page);
  let fail = true, posts = 0;
  await page.route('**/api/progress/**', route => {
    if (route.request().method() === 'POST') { posts++; return route.fulfill({ json: { ok: true, revision: 1 } }); }
    if (!fail) return route.fulfill({ json: null });
    if (failure === 'network') return route.abort();
    return route.fulfill(failure === '500' ? { status: 500, json: {} } : { body: '{broken' });
  });
  await page.goto('/');
  await expect(page.getByRole('alert')).toContainText('Could not load progress');
  await page.evaluate(async () => {
    const s = (await import('/src/store/progressStore.ts')).useProgressStore.getState();
    await Promise.allSettled([s.recordSign('fictional-sign', true), s.saveHazardSessions([]), s.setActiveLearningArea('science'), s.clearProgress(), s.addAttempt({ id: 'fictional-pending', paperTitle: 'Example', percentage: 0 })]);
  });
  expect(posts).toBe(0);
  fail = false;
  await page.getByRole('button', { name: 'Retry loading progress' }).click();
  await expect.poll(() => page.evaluate(async () => (await import('/src/store/progressStore.ts')).useProgressStore.getState().loaded)).toBe(true);
  await page.evaluate(async () => (await import('/src/store/progressStore.ts')).useProgressStore.getState().setActiveLearningArea('drivingTheory'));
  expect(posts).toBe(1);
});

for (const mock of [true, false]) for (const failure of [503, 413]) test(`C2: ${mock ? 'mock' : 'quiz'} survives ${failure}, reload and retry`, async ({ page }) => {
  await setup(page);
  const state = { saved: empty(), posts: 0, failure };
  await api(page, state);
  await page.goto('/');
  await submit(page, mock);
  await expect(page.getByText(/Not saved yet. Retry saving/)).toBeVisible();
  if (failure === 413) await expect(page.getByText(/too large to save \(413\)/)).toBeVisible();
  const original = await pending(page);
  expect(original).toHaveLength(1);
  await page.reload();
  await expect(page.getByRole('button', { name: 'Retry pending saves' })).toBeVisible();
  expect(await pending(page)).toEqual(original);
  state.failure = 0;
  await page.getByRole('button', { name: 'Retry pending saves' }).click();
  await expect.poll(() => pending(page)).toEqual([]);
  expect(await decoded(page, state.saved)).toEqual(original);
  expect(state.saved.totalPapersCompleted).toBe(1);
});

test('C2/C3: deadline submission with lost acknowledgement retries by stable ID', async ({ page }) => {
  await setup(page);
  const state = { saved: empty(), posts: 0, loseAck: true };
  await api(page, state);
  await page.clock.install();
  await page.goto('/');
  await page.getByRole('button', { name: /Start mock/ }).click();
  await page.getByRole('button', { name: 'Skip to end' }).click();
  await page.clock.setSystemTime(await page.evaluate(() => Date.now() + 3420000));
  await expect(page.getByText(/Not saved yet. Retry saving/)).toBeVisible();
  await page.clock.runFor(1000);
  expect(state.posts).toBe(1);
  const original = await pending(page);
  await page.getByRole('button', { name: 'Retry pending saves' }).click();
  await expect(page.getByRole('button', { name: 'Retry loading progress' })).toBeVisible();
  await page.getByRole('button', { name: 'Retry loading progress' }).click();
  // Remounting the expired quiz auto-submits the same durable ID.
  await expect.poll(() => pending(page)).toEqual([]);
  expect(await decoded(page, state.saved)).toEqual(original);
  expect(state.saved.totalPapersCompleted).toBe(1);
});

test('C3: delayed sign save precedes area and hazard snapshots', async ({ page }) => {
  await setup(page);
  let release;
  const gate = new Promise(resolve => { release = resolve; });
  const bodies = [];
  await page.route('**/api/progress/**', async route => {
    if (route.request().method() === 'GET') return route.fulfill({ json: empty() });
    bodies.push(route.request().postDataJSON());
    if (bodies.length === 1) await gate;
    await route.fulfill({ json: { ok: true, revision: bodies.length } });
  });
  await page.goto('/');
  await expect(page.getByRole('button', { name: /Start mock/ })).toBeVisible();
  const work = page.evaluate(async () => {
    const s = (await import('/src/store/progressStore.ts')).useProgressStore.getState();
    await Promise.all([s.recordSign('fictional-sign', true), s.setActiveLearningArea('science'), s.saveHazardSessions([{ id: 'fictional-session' }])]);
  });
  await expect.poll(() => bodies.length).toBe(1);
  release();
  await work;
  expect(bodies).toHaveLength(3);
  expect(bodies.map(b => b.revision)).toEqual([0, 1, 2]);
  expect(bodies[2].signAccuracy['fictional-sign']).toEqual({ correct: 1, attempts: 1 });
  expect(bodies[2].activeLearningArea).toBe('science');
});

for (const method of ['GET', 'POST']) test(`C4: ${method} 401 clears store auth and pending work survives login`, async ({ page }) => {
  await setup(page);
  const state = { saved: empty(), posts: 0, failure: method === 'POST' ? 401 : 0 };
  await api(page, state);
  if (method === 'GET') await page.route('**/api/progress/**', route => route.fulfill({ status: 401, json: {} }));
  await page.route('**/api/login', route => route.fulfill({ json: { ok: true, name: 'fictional', token: 'fictional-new-token' } }));
  await page.goto('/');
  if (method === 'POST') await submit(page);
  await expect(page.getByRole('button', { name: "Let's go!" })).toBeVisible();
  const auth = await page.evaluate(async () => {
    const s = (await import('/src/store/appStore.ts')).useAppStore.getState();
    return [s.userName, s.sessionToken, localStorage.getItem('amy-science-user'), sessionStorage.getItem('amy-science-token')];
  });
  expect(auth).toEqual([null, null, null, null]);
  const original = await pending(page);
  if (method === 'POST') expect(original).toHaveLength(1);
  await page.unroute('**/api/progress/**');
  state.failure = 0;
  await api(page, state);
  await page.locator('input[type=text]').fill('fictional');
  await page.locator('input[type=password]').fill('fictional-password');
  await page.getByRole('button', { name: "Let's go!" }).click();
  await expect(page.getByRole('button', { name: /Start mock/ })).toBeVisible();
  if (method === 'POST') {
    expect(await pending(page)).toEqual(original);
    await page.getByRole('button', { name: 'Retry pending saves' }).click();
    await expect.poll(() => pending(page)).toEqual([]);
    expect(await decoded(page, state.saved)).toEqual(original);
  }
});

test('C3: two tabs cannot overwrite history; reload and retry preserves both attempts', async ({ page, context }) => {
  const state = { saved: empty(), posts: 0 };
  await setup(page);
  await api(page, state);
  await page.goto('/');
  const second = await context.newPage();
  await setup(second);
  await api(second, state);
  await second.goto('/');
  await expect(second.getByRole('button', { name: /Start mock/ })).toBeVisible();
  await submit(page, false);
  await expect(page.getByRole('button', { name: 'View All Answers' })).toBeVisible();
  const first = state.saved.attempts[0];
  await submit(second, false);
  await expect(second.getByRole('button', { name: 'Retry loading progress' })).toBeVisible();
  expect(state.saved.attempts).toEqual([first]);
  await second.getByRole('button', { name: 'Retry loading progress' }).click();
  await second.getByRole('button', { name: 'Retry pending saves' }).click();
  await expect.poll(() => state.saved.attempts.length).toBe(2);
  expect(state.saved.attempts[0]).toEqual(first);
  expect(new Set(state.saved.attempts.map(a => a.id)).size).toBe(2);
  await expect.poll(() => pending(second)).toEqual([]);
});

test('C2: a 200 without an acknowledgement retains the pending attempt', async ({ page }) => {
  await setup(page);
  await page.route('**/api/progress/**', route => route.fulfill({ json: empty() }));
  await page.goto('/');
  await submit(page, false);
  await expect(page.getByText(/Not saved yet. Retry saving/)).toBeVisible();
  expect(await pending(page)).toHaveLength(1);
});
