import { test, expect } from '@playwright/test';

test('science diagrams render on mobile with accessible labels and correct attribution', async ({ page }) => {
  await page.route('**/api/**', route => route.fulfill({ json: {
    activeLearningArea: 'science', attempts: [], totalPapersCompleted: 0,
    bestScores: {}, streakDays: 0, lastActiveDate: '',
  } }));
  await page.goto('/');
  for (const id of ['bio-inheritance-003', 'bio-inheritance-009', 'bio-inheritance-010', 'chem-energy-changes-008', 'phys-atomic-structure-phys-004']) {
    await page.evaluate(async id => {
      const { useAppStore } = await import('/src/store/appStore.ts');
      const { getAllQuestions } = await import('/src/data/index.ts');
      useAppStore.setState({ userName: 'fictional-learner', sessionToken: 'fictional-test-token' });
      const question = getAllQuestions().find(q => q.id === id);
      useAppStore.getState().startQuiz({ id: 'synthetic-science', title: 'Synthetic science', subject: question.subject, createdAt: 0, questions: [question] });
    }, id);
    const image = page.locator('figure img');
    await expect(image).toBeVisible();
    await expect.poll(() => image.evaluate(img => img.naturalWidth)).toBeGreaterThan(0);
    await expect(image).toHaveAttribute('alt', /.+/);
    await expect(page.getByText('Original science revision diagram', { exact: true })).toBeVisible();
    await expect(page.getByText('© Crown copyright', { exact: false })).toHaveCount(0);
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.locator('.option-btn').first().click();
    await page.getByRole('button', { name: 'Quick Check', exact: true }).click();
    await expect(page.getByRole('link', { name: /Read more/ })).toHaveAttribute('href', /bbc.co.uk\/bitesize\/topics\//);
  }
});
