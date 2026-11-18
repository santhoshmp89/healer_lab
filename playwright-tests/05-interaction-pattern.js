// Catchpoint Playwright script — Scenario 05: quick checkout quantity controls
const baseUrl = 'https://santhoshmp89.github.io/healer_lab';

await page.goto(`${baseUrl}/scenarios/interaction-pattern.html`);

const quantity = page.getByRole('spinbutton', { name: 'Item quantity' });
const itemCount = page.locator('#item-count');
const orderTotal = page.locator('#order-total');

await expect(page.getByRole('heading', { name: 'Quick checkout' })).toBeVisible();
await expect(quantity).toHaveValue('1');
await expect(itemCount).toHaveText('1');
await expect(orderTotal).toHaveText('$24.00');

// Typing a quantity updates the item count and total.
await quantity.fill('4');
await expect(itemCount).toHaveText('4');
await expect(orderTotal).toHaveText('$96.00');

// The buttons stay synchronized with the editable quantity field.
await page.getByRole('button', { name: 'Increase quantity' }).click();
await expect(quantity).toHaveValue('5');
await expect(itemCount).toHaveText('5');
await expect(orderTotal).toHaveText('$120.00');

await page.getByRole('button', { name: 'Decrease quantity' }).click();
await expect(quantity).toHaveValue('4');
await expect(itemCount).toHaveText('4');
await expect(orderTotal).toHaveText('$96.00');

// Quantity cannot be reduced below one.
await quantity.fill('1');
await page.getByRole('button', { name: 'Decrease quantity' }).click();
await expect(quantity).toHaveValue('1');
await expect(itemCount).toHaveText('1');
await expect(orderTotal).toHaveText('$24.00');

await page.getByRole('button', { name: 'Checkout' }).click();
await expect(page.getByRole('status')).toHaveText('Checkout started for 1 item.');
