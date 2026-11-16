// Catchpoint Playwright script — Scenario 05: interaction pattern changed
const baseUrl = 'https://santhoshmp89.github.io/healer_lab';

await page.goto(`${baseUrl}/scenarios/interaction-pattern.html`);

await expect(page.getByRole('heading', { name: 'Quick checkout' })).toBeVisible();
await expect(page.locator('#quantity-value')).toHaveText('1');
await page.getByRole('button', { name: 'Increase quantity' }).click();
await page.getByRole('button', { name: 'Increase quantity' }).click();
await expect(page.locator('#quantity-value')).toHaveText('3');
await expect(page.locator('#order-total')).toHaveText('$72.00');

await page.getByRole('button', { name: 'Continue to checkout' }).click();
await expect(page.getByText('STEP 1 OF 2 · SHIPPING')).toBeVisible();
await page.getByLabel('Shipping address').fill('42 Market Street');
await page.getByRole('button', { name: 'Continue to payment' }).click();

await expect(page.getByText('STEP 2 OF 2 · PAYMENT')).toBeVisible();
await expect(page.locator('#review-quantity')).toHaveText('3');
await expect(page.locator('#review-total')).toHaveText('$72.00');
await page.getByLabel('Card number').fill('4242 4242 4242 4242');
await page.getByRole('button', { name: 'Place order' }).click();
await expect(page.getByRole('status')).toContainText('Order placed. Thanks for your purchase!');
