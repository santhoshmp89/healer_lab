// Catchpoint Playwright script — Scenario 05: quick checkout quantity controls
const baseUrl = 'https://santhoshmp89.github.io/healer_lab';

await page.goto(`${baseUrl}/scenarios/interaction-pattern.html`);

await expect(page.getByRole('heading', { name: 'Quick checkout' })).toBeVisible();
await expect(page.locator('#quantity-value')).toHaveText('1');
await expect(page.locator('#item-count')).toHaveText('1');
await expect(page.locator('#order-total')).toHaveText('$24.00');

await page.getByRole('button', { name: 'Increase quantity' }).click();
await expect(page.locator('#quantity-value')).toHaveText('2');
await expect(page.locator('#item-count')).toHaveText('2');
await expect(page.locator('#order-total')).toHaveText('$48.00');

await page.getByRole('button', { name: 'Increase quantity' }).click();
await expect(page.locator('#quantity-value')).toHaveText('3');
await expect(page.locator('#item-count')).toHaveText('3');
await expect(page.locator('#order-total')).toHaveText('$72.00');

await page.getByRole('button', { name: 'Decrease quantity' }).click();
await expect(page.locator('#quantity-value')).toHaveText('2');
await expect(page.locator('#item-count')).toHaveText('2');
await expect(page.locator('#order-total')).toHaveText('$48.00');

await page.getByRole('button', { name: 'Decrease quantity' }).click();
await page.getByRole('button', { name: 'Decrease quantity' }).click();
await expect(page.locator('#quantity-value')).toHaveText('1');
await expect(page.locator('#item-count')).toHaveText('1');
await expect(page.locator('#order-total')).toHaveText('$24.00');

await page.getByRole('button', { name: 'Checkout' }).click();
await expect(page.getByRole('status')).toHaveText('Checkout started for 1 item.');
