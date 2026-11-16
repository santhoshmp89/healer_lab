// Catchpoint Playwright script — Scenario 02: expected element or text is absent
const baseUrl = 'https://santhoshmp89.github.io/healer_lab';

await page.goto(`${baseUrl}/scenarios/absent-element.html`);

const search = page.getByRole('searchbox', { name: 'Search the catalog' });
await expect(search).toHaveValue('blue ceramic lamp');

// This result is intentionally absent; verify the empty state and recovery path.
await expect(page.getByText('Blue Ceramic Lamp', { exact: true })).toHaveCount(0);
await expect(page.getByTestId('empty-state')).toContainText('No matching products');
await expect(page.getByTestId('empty-state')).toContainText('Try a different search');

await page.getByRole('button', { name: 'Clear search' }).click();
await expect(page.getByRole('status').filter({ hasText: 'Search cleared.' })).toBeVisible();
