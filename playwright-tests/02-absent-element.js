// Catchpoint Playwright script — Scenario 02: expected element or text is absent
const baseUrl = 'https://santhoshmp89.github.io/healer_lab';

await page.goto(`${baseUrl}/scenarios/absent-element.html`);

const search = page.getByRole('searchbox', { name: 'Search the catalog' });
await expect(search).toHaveValue('blue ceramic lamp');

// The page has changed: the previously absent result is now present.
await expect(page.getByText('Blue Ceramic Lamp', { exact: true })).toBeVisible();
await expect(page.getByTestId('search-result')).toContainText('Glazed stoneware');
await expect(page.getByTestId('empty-state')).toHaveCount(0);

await page.getByRole('button', { name: 'Clear search' }).click();
await expect(page.getByRole('status')).toContainText('Search cleared.');
