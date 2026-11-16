// Catchpoint Playwright script — Scenario 06: overlay blocks interaction
const baseUrl = 'https://santhoshmp89.github.io/healer_lab';

await page.goto(`${baseUrl}/scenarios/overlay.html`);

const dialog = page.getByRole('dialog', { name: 'Before you get started' });
await expect(dialog).toBeVisible();
await expect(dialog).toHaveAttribute('aria-modal', 'true');
await expect(page.getByRole('button', { name: 'Open reports' })).toBeVisible();

// The close action should remove the blocking layer, then allow dashboard actions.
await dialog.getByRole('button', { name: 'Close dialog' }).click();
await expect(dialog).not.toBeVisible();
await page.getByRole('button', { name: 'Open reports' }).click();
await expect(page.getByRole('status')).toContainText('Dashboard action selected.');
