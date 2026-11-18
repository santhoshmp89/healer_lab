// Catchpoint Playwright script — Scenario 07: iframe loaded from a local HTML file
const localPageUrl = 'file:///C:/catchpoint/New%20Website/scenarios/frame-context.html';

await page.goto(localPageUrl);

// Interact with the support form inside the named iframe.
const supportFrame = page.frameLocator('iframe[name="support-widget"]');
const topicInput = supportFrame.getByLabel('Support topic');
await topicInput.fill('I need help with my workspace');
await expect(topicInput).toHaveValue('I need help with my workspace');
await supportFrame.getByRole('button', { name: 'Send request' }).click();
