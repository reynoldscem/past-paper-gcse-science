import { test, expect } from '@playwright/test';

const empty = { activeLearningArea: 'drivingTheory', attempts: [], totalPapersCompleted: 0, bestScores: {}, streakDays: 0, lastActiveDate: '' };
test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem('amy-science-user', 'fictional-navigator');
    sessionStorage.setItem('amy-science-token', 'fictional-token');
  });
  await page.route('**/api/**', route => route.fulfill({ json: route.request().method() === 'POST'
    ? { ok: true, revision: (route.request().postDataJSON().revision ?? 0) + 1 } : empty }));
  await page.goto('/');
  await expect(page.getByRole('button', { name: /Start mock/ })).toBeVisible();
});

const draft = page => page.evaluate(() => JSON.parse(localStorage.getItem('driving-mock-draft:fictional-navigator')));

test('starting a second mock requires an explicit resume or discard choice', async ({ page }) => {
  await page.getByRole('button', { name: /Start mock/ }).click();
  await page.locator('.option-btn').nth(2).click();
  await page.getByRole('button', { name: 'Flag for review' }).click();
  await page.getByRole('button', { name: 'Next →', exact: true }).click();
  const parked = await draft(page);
  await page.reload();
  await page.getByRole('button', { name: /Start mock/ }).click();
  await expect(page.getByRole('dialog')).toBeVisible();
  expect(await draft(page)).toEqual(parked);
  await page.getByRole('button', { name: 'Cancel', exact: true }).click();
  expect(await draft(page)).toEqual(parked);
  await page.getByRole('button', { name: /Start mock/ }).click();
  await page.getByRole('button', { name: 'Resume saved mock', exact: true }).click();
  await expect(page.getByText('Q 2 of 50', { exact: true })).toBeVisible();
  expect(await draft(page)).toEqual(parked);
  await page.reload();
  await page.getByRole('button', { name: /Start mock/ }).click();
  await page.getByRole('button', { name: 'Discard saved mock and start new', exact: true }).click();
  await expect(page.getByText('Q 1 of 50', { exact: true })).toBeVisible();
  const replacement = await draft(page);
  expect(replacement.paper.id).not.toBe(parked.paper.id);
  expect(replacement.answers.every(a => a === null)).toBe(true);
  expect(replacement.flags).toEqual([]);
  expect(replacement.endTime).toBeGreaterThan(parked.endTime);
});

async function waitForQuizReset(page) {
  await expect.poll(() => page.evaluate(async () =>
    (await import('/src/store/appStore.ts')).useAppStore.getState().activePaper)).toBeNull();
}

test('Back and Forward replace a quiz entry whose state has been cleared with Home', async ({ page }) => {
  await page.getByRole('button', { name: /Visual practice/ }).click();
  await expect(page.locator('.option-btn').first()).toBeVisible();
  page.once('dialog', dialog => dialog.accept());
  await page.getByRole('button', { name: /Home$/ }).click();
  await waitForQuizReset(page);
  await page.goBack();
  await expect(page.getByRole('button', { name: /Start mock/ })).toBeVisible();
  await expect(page).toHaveURL(/#home$/);
  await page.goBack();
  await page.goForward();
  await expect(page.getByRole('button', { name: /Start mock/ })).toBeVisible();
  await expect(page).toHaveURL(/#home$/);
});

test('Back and Forward replace results without quiz state with History', async ({ page }) => {
  await page.getByRole('button', { name: /Visual practice/ }).click();
  await page.getByRole('button', { name: 'Skip to end' }).click();
  await page.getByRole('button', { name: /^Submit/ }).click();
  await page.getByRole('button', { name: 'Back to Home', exact: true }).click();
  await waitForQuizReset(page);
  await page.goBack();
  await expect(page).toHaveURL(/#history$/);
  await expect(page.getByRole('button', { name: /Mixed Driving Theory/ })).toBeVisible();
  await page.goBack();
  await expect(page).toHaveURL(/#home$/);
  await page.goForward();
  await expect(page).toHaveURL(/#history$/);
  await expect(page.getByRole('button', { name: /Mixed Driving Theory/ })).toBeVisible();
});
