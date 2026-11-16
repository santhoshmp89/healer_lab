// Catchpoint Playwright script — Scenario 04: element state or timing
const baseUrl = 'https://santhoshmp89.github.io/healer_lab';

await page.goto(`${baseUrl}/scenarios/element-state.html`);

const status = page.getByTestId('sync-status');
const startSync = page.getByRole('button', { name: 'Start sync' });
await expect(status).toHaveText('READY');
await expect(startSync).toBeEnabled();

await startSync.click();
await page.waitForSelector('#sync-done', { visible: true, timeout: 7000 });
await expect(status).toHaveText('COMPLETE');
await expect(page.getByRole('status')).toContainText('Workspace is up to date.');
await expect(startSync).toBeEnabled();
