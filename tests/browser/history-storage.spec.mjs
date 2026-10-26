import { test, expect } from '@playwright/test';

test('legacy history renders, migrates on save and renders after reload; later saves append only new history', async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem('amy-science-user', 'fictional');
    sessionStorage.setItem('amy-science-token', 'fictional-token');
  });
  let saved = null;
  const posts = [];
  await page.route('**/api/progress/**', route => {
    if (route.request().method() === 'GET') return route.fulfill({ json: saved });
    const { historyBaseCount, snapshotBaseCount, ...body } = route.request().postDataJSON();
    posts.push({ historyBaseCount, ...body });
    saved = { ...body, revision: body.revision + 1,
      attempts: [...(historyBaseCount === undefined ? [] : saved.attempts), ...body.attempts],
      questionSnapshots: [...(snapshotBaseCount === undefined ? [] : saved.questionSnapshots), ...body.questionSnapshots] };
    return route.fulfill({ json: { ok: true, revision: saved.revision } });
  });
  await page.goto('/');
  await expect.poll(() => page.evaluate(async () => (await import('/src/store/progressStore.ts')).useProgressStore.getState().loaded)).toBe(true);
  saved = await page.evaluate(async () => {
    const { getAllQuestions } = await import('/src/data/index.ts');
    const { scorePaper } = await import('/src/lib/scoring.ts');
    const { defaultProgress } = await import('/src/lib/storage.ts');
    const q = { ...getAllQuestions()[0], id: 'fictional-retired', question: 'Fictional legacy question retained for review' };
    return { ...defaultProgress, attempts: [scorePaper({ id: 'fictional-paper', title: 'Fictional legacy paper', questions: [q] }, [1], 30)] };
  });
  await page.reload();
  const review = async (text = 'Fictional legacy question retained for review') => {
    await expect.poll(() => page.evaluate(async () => (await import('/src/store/progressStore.ts')).useProgressStore.getState().loaded)).toBe(true);
    await page.evaluate(async () => {
      const p = (await import('/src/store/progressStore.ts')).useProgressStore.getState();
      (await import('/src/store/appStore.ts')).useAppStore.setState({ reviewingAttemptId: p.attempts[0].id, view: 'review' });
    });
    await expect(page.getByText(text, { exact: false })).toBeVisible();
  };
  await review();
  await page.evaluate(async () => (await import('/src/store/progressStore.ts')).useProgressStore.getState().setActiveLearningArea('science'));
  expect(saved.historyVersion).toBe(1);
  expect(saved.questionSnapshots).toHaveLength(1);
  expect(Array.isArray(saved.attempts[0].questions[0])).toBe(true);
  await page.reload();
  await review();
  await page.evaluate(async () => (await import('/src/store/progressStore.ts')).useProgressStore.getState().recordSign('fictional-sign', true));
  expect(posts.at(-1).historyBaseCount).toBe(1);
  expect(posts.at(-1).attempts).toEqual([]);
  expect(posts.at(-1).questionSnapshots).toEqual([]);
  expect(saved.attempts).toHaveLength(1);
  saved.attempts[0].questions[0][0] = 'fictional-missing';
  saved.attempts[0].questions[0][3] = null;
  saved.questionSnapshots = [];
  await page.reload();
  await review('Question no longer in the bank');
});
