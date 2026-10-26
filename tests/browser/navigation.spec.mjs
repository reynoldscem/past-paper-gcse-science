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
