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
  await page.screenshot({ path: '/tmp/driving-visual-mobile.png', fullPage: true });
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
