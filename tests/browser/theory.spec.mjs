import { test, expect } from '@playwright/test';

const empty = { activeLearningArea: 'drivingTheory', attempts: [], totalPapersCompleted: 0, bestScores: {}, streakDays: 0, lastActiveDate: '' };
test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem('amy-science-user', 'fictional-learner');
    sessionStorage.setItem('amy-science-token', 'fictional-test-token');
  });
  await page.route('**/api/**', route => route.fulfill({ json: empty }));
  await page.clock.install();
  await page.goto('/');
  await expect(page.getByRole('button', { name: /Start mock/ })).toBeVisible();
});

test('visual practice, explanations and saved review render official images on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole('button', { name: /Visual practice/ }).click();
  const image = page.locator('figure img');
  await expect(image).toBeVisible();
  await expect.poll(() => image.evaluate(img => img.naturalWidth)).toBeGreaterThan(0);
  await page.locator('.option-btn').first().click();
  await page.getByRole('button', { name: 'Quick Check', exact: true }).click();
  await expect(page.getByRole('link', { name: /Highway Code/ })).toBeVisible();
  await expect(page.locator('.option-btn').first()).toBeDisabled();
  await page.screenshot({ path: '.codex-task/visual-mobile.png', fullPage: true });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await page.getByRole('button', { name: 'Skip to end' }).click();
  await page.getByRole('button', { name: /^Submit/ }).click();
  await page.getByRole('button', { name: 'View All Answers' }).click();
  await expect(page.locator('figure img')).toHaveCount(20);
  await page.getByRole('button', { name: 'Back to Home', exact: true }).click();
  await page.getByRole('button', { name: 'Paper History' }).click();
  await page.getByRole('button', { name: /Mixed Driving Theory/ }).click();
  await expect(page.locator('figure img')).toBeVisible();
  await expect(page.getByRole('link', { name: /Highway Code/ })).toBeVisible();
});

test('mock hides feedback, flags questions, allows changes and submits once at deadline even in confirmation', async ({ page }) => {
  await page.getByRole('button', { name: /Start mock/ }).click();
  await expect(page.getByText('57:00', { exact: true })).toBeVisible();
  await page.locator('.option-btn').first().click();
  await expect(page.getByRole('button', { name: 'Quick Check', exact: true })).toHaveCount(0);
  await page.getByRole('button', { name: 'Flag for review' }).click();
  await page.getByRole('button', { name: 'Next →', exact: true }).click();
  await page.getByRole('button', { name: 'Flagged Q1', exact: true }).click();
  await page.locator('.option-btn').nth(1).click();
  await expect(page.locator('.option-btn').nth(1)).toHaveClass(/selected/);
  await page.getByRole('button', { name: 'Skip to end' }).click();
  await expect(page.getByText(/Flagged for review: 1/)).toBeVisible();
  // Jump wall time as after sleep, without jumping animation timelines.
  const deadline = await page.evaluate(() => Date.now() + 57 * 60 * 1000);
  await page.clock.setSystemTime(deadline);
  await expect(page.getByText('Not passed yet — keep practising')).toBeVisible();
  await expect(page.getByText('Time: 57:00')).toBeVisible();
  await page.goBack();
  await expect(page.getByText('Not passed yet — keep practising')).toBeVisible();
  const attempts = await page.evaluate(async () => (await import('/src/store/progressStore.ts')).useProgressStore.getState().attempts);
  expect(attempts).toHaveLength(1);
  expect(attempts[0].total).toBe(50);
  expect(attempts[0].passMark).toBe(43);
});

test('43 passes, 42 fails; weak-topic practice is enabled from saved mock results', async ({ page }) => {
  for (const target of [42, 43]) {
    await page.getByRole('button', { name: /Start mock/ }).click();
    await page.evaluate(async target => {
      const { useAppStore } = await import('/src/store/appStore.ts');
      const state = useAppStore.getState();
      state.activePaper.questions.forEach((q, i) => state.setAnswer(i, i < target ? q.correctIndex : (q.correctIndex + 1) % 4));
    }, target);
    await page.getByRole('button', { name: 'Skip to end' }).click();
    await page.getByRole('button', { name: /^Submit/ }).click();
    await expect(page.getByText(target === 43 ? 'Mock passed!' : 'Not passed yet — keep practising', { exact: true })).toBeVisible();
    await page.getByRole('button', { name: 'Back to Home', exact: true }).click();
  }
  await expect(page.getByRole('button', { name: 'Practise weakest topics' })).toBeEnabled();
  await page.getByRole('button', { name: 'Practise weakest topics' }).click();
  await expect(page.getByText('Weak-topic Practice', { exact: true })).toBeVisible();
});

test('mock restores questions, answers, flags, position and the original deadline after refresh', async ({ page }) => {
  await page.getByRole('button', { name: /Start mock/ }).click();
  await page.locator('.option-btn').nth(2).click();
  await page.getByRole('button', { name: 'Flag for review' }).click();
  await page.getByRole('button', { name: 'Next →', exact: true }).click();
  const draft = await page.evaluate(() => JSON.parse(localStorage.getItem('driving-mock-draft:fictional-learner')));
  await page.clock.setSystemTime(draft.endTime - 600000);
  await page.reload();
  await page.getByRole('button', { name: 'Resume mock', exact: true }).click();
  await expect(page.getByText('Q 2 of 50', { exact: true })).toBeVisible();
  await expect(page.getByText(/^(10:00|09:5[0-9])$/)).toBeVisible();
  const endTime = await page.evaluate(async () => { const s = (await import('/src/store/appStore.ts')).useAppStore.getState(); return s.quizStartTime + s.activePaper.durationSeconds * 1000; });
  expect(endTime).toBe(draft.endTime);
  await page.getByRole('button', { name: 'Flagged Q1', exact: true }).click();
  await expect(page.locator('.option-btn').nth(2)).toHaveClass(/selected/);
  const restored = await page.evaluate(async () => (await import('/src/store/appStore.ts')).useAppStore.getState().activePaper);
  expect(restored).toEqual(draft.paper);
  await page.getByRole('button', { name: 'Skip to end' }).click();
  await page.getByRole('button', { name: /^Submit/ }).click();
  expect(await page.evaluate(() => localStorage.getItem('driving-mock-draft:fictional-learner'))).toBeNull();
  await page.reload();
  await expect(page.getByRole('button', { name: 'Resume mock', exact: true })).toHaveCount(0);
});

test('expired, corrupt and other-account mock drafts cannot resume; discard removes the draft', async ({ page }) => {
  await page.getByRole('button', { name: /Start mock/ }).click();
  await page.reload();
  await page.getByRole('button', { name: 'Discard mock', exact: true }).click();
  expect(await page.evaluate(() => localStorage.getItem('driving-mock-draft:fictional-learner'))).toBeNull();
  await page.getByRole('button', { name: /Start mock/ }).click();
  await page.evaluate(() => {
    const key = 'driving-mock-draft:fictional-learner';
    const d = JSON.parse(localStorage.getItem(key));
    localStorage.setItem('driving-mock-draft:other-fictional-learner', JSON.stringify(d));
    d.endTime = Date.now() - 1;
    localStorage.setItem(key, JSON.stringify(d));
  });
  await page.reload();
  await expect(page.getByRole('button', { name: /Start mock/ })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Resume mock', exact: true })).toHaveCount(0);
  expect(await page.evaluate(() => localStorage.getItem('driving-mock-draft:fictional-learner'))).toBeNull();
  await page.evaluate(() => localStorage.setItem('driving-mock-draft:fictional-learner', '{broken'));
  await page.reload();
  await expect(page.getByRole('button', { name: /Start mock/ })).toBeVisible();
  expect(await page.evaluate(() => localStorage.getItem('driving-mock-draft:fictional-learner'))).toBeNull();
});

test('keyboard sign round repeats misses, saves accuracy and retains it after reload', async ({ page }) => {
  let saved = structuredClone(empty);
  await page.route('**/api/progress/**', async route => {
    if (route.request().method() === 'POST') saved = route.request().postDataJSON();
    await route.fulfill({ json: saved });
  });
  await page.getByRole('button', { name: /Sign drill/ }).click();
  let missedPath;
  for (let i = 0; i < 21; i++) {
    await expect(page.getByText(i < 20 ? `Sign ${i + 1} of 20` : 'Repeat missed signs: 1 of 1', { exact: true })).toBeVisible();
    const image = page.locator('figure img');
    await expect.poll(() => image.evaluate(img => img.naturalWidth)).toBeGreaterThan(0);
    if (i === 0) await page.screenshot({ path: '.codex-task/sign-drill-mobile.png', fullPage: true });
    const path = await image.getAttribute('src');
    if (i === 0) missedPath = path;
    if (i === 20) expect(path).toBe(missedPath);
    const correct = await page.evaluate(async path => {
      const { signBank } = await import('/src/data/signDrill.ts');
      const q = signBank.find(q => q.image.src === path);
      return q.options[q.correctIndex];
    }, path);
    const options = page.locator('[aria-label="Sign meanings"] button');
    const texts = await options.allTextContents();
    const option = options.nth(i === 0 ? texts.findIndex(t => t !== correct) : texts.indexOf(correct));
    await option.focus();
    await page.keyboard.press('Enter');
    await expect(page.getByRole('button', { name: 'Next sign', exact: true })).toBeVisible();
    await expect(options.first()).toBeDisabled();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.getByRole('button', { name: 'Next sign', exact: true }).focus();
    await page.keyboard.press('Enter');
  }
  await expect(page.getByText(/Round complete/)).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Weakest signs' })).toBeVisible();
  expect(Object.values(saved.signAccuracy).reduce((sum, s) => sum + s.attempts, 0)).toBe(21);
  expect(saved.signAccuracy[missedPath]).toEqual({ attempts: 2, correct: 1 });
  await page.reload();
  await expect(page.getByRole('button', { name: /Start mock/ })).toBeVisible();
  const stats = await page.evaluate(async () => {
    const { useProgressStore } = await import('/src/store/progressStore.ts');
    return useProgressStore.getState().signAccuracy;
  });
  expect(stats).toEqual(saved.signAccuracy);
});

test('every official image decodes at mobile width', async ({ page }) => {
  const failures = await page.evaluate(async () => {
    const manifest = await (await fetch('/driving/manifest.json')).json();
    return (await Promise.all(manifest.map(async entry => {
      const img = new Image(); img.src = entry.path;
      try { await img.decode(); return img.naturalWidth > 0 ? null : entry.path; }
      catch { return entry.path; }
    }))).filter(Boolean);
  });
  expect(failures).toEqual([]);
});

test('failed sign saves can be retried without counting an extra answer', async ({ page }) => {
  let fail = true;
  let saved = structuredClone(empty);
  await page.route('**/api/progress/**', async route => {
    if (route.request().method() === 'POST') {
      if (fail) { await route.fulfill({ status: 500, json: {} }); return; }
      saved = route.request().postDataJSON();
    }
    await route.fulfill({ json: saved });
  });
  await page.getByRole('button', { name: /Sign drill/ }).click();
  await page.locator('[aria-label="Sign meanings"] button').first().click();
  await expect(page.getByRole('alert')).toContainText('could not be saved');
  expect(saved.signAccuracy).toBeUndefined();
  fail = false;
  await page.locator('[aria-label="Sign meanings"] button').first().click();
  await expect(page.getByRole('button', { name: 'Next sign', exact: true })).toBeVisible();
  expect(Object.values(saved.signAccuracy).reduce((sum, s) => sum + s.attempts, 0)).toBe(1);
});

test('submitting ordinary practice leaves a parked mock available', async ({ page }) => {
  await page.getByRole('button', { name: /Start mock/ }).click();
  await page.reload();
  await page.getByRole('button', { name: /Visual practice/ }).click();
  await page.getByRole('button', { name: 'Skip to end' }).click();
  await page.getByRole('button', { name: /^Submit/ }).click();
  await page.reload();
  await expect(page.getByRole('button', { name: 'Resume mock', exact: true })).toBeVisible();
});
