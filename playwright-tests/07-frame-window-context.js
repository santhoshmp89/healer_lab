// Catchpoint Playwright script — Scenario 07: iframe and new-tab context
const baseUrl = 'https://santhoshmp89.github.io/healer_lab';

await page.goto(`${baseUrl}/scenarios/frame-context.html`);

// Fill and submit the form inside the named iframe.
const supportFrame = page.frameLocator('iframe[name="support-widget"]');
await supportFrame.getByLabel('Support topic').fill('I need help with my workspace');
await supportFrame.getByRole('button', { name: 'Send request' }).click();
await expect(supportFrame.getByRole('status')).toHaveText('Support request sent.');

// Open the external documentation link in a separate tab and verify its destination.
const documentationLink = page.locator('a[href="https://example.com"]');
const popupPromise = page.waitForEvent('popup');
await documentationLink.click();
const popup = await popupPromise;
await popup.waitForLoadState('domcontentloaded');
await expect(popup).toHaveURL(/^https:\/\/example\.com\/?(?:[?#]|$)/);
