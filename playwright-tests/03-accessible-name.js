// Catchpoint Playwright script — Scenario 03: accessible name or label changed
const baseUrl = 'https://santhoshmp89.github.io/healer_lab';

await page.goto(`${baseUrl}/scenarios/accessible-name.html`);

await page.getByLabel('Display name').fill('Jordan Lee');
await page.getByLabel('Email address').fill('jordan@example.test');
await page.getByLabel('Email digest frequency').selectOption('Never');
await page.getByLabel('Send me product updates').uncheck();

await expect(page.getByLabel('Display name')).toHaveValue('Jordan Lee');
await expect(page.getByLabel('Email address')).toHaveValue('jordan@example.test');
await expect(page.getByLabel('Email digest frequency')).toHaveValue('Never');
await expect(page.getByLabel('Send me product updates')).not.toBeChecked();

await page.getByRole('button', { name: 'Save preferences' }).click();
await expect(page.getByRole('status')).toHaveText('Preferences saved successfully.');
