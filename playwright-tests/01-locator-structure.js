// Catchpoint Playwright script — Scenario 01: locator structure
// Replace this base URL with your GitHub Pages site URL.
const baseUrl = 'https://santhoshmp89.github.io/healer_lab';

await page.goto(`${baseUrl}/scenarios/locator-structure.html`);

const product = page.getByTestId('product-card');
await expect(product).toBeVisible();
await expect(product.getByRole('heading', { name: 'Field Notes Journal' })).toBeVisible();
await expect(product.getByText('Recycled paper · Set of 3')).toBeVisible();

// Locate the action inside the product card so another page button cannot match it.
await product.getByRole('button', { name: 'Add Field Notes Journal to cart' }).click();
await expect(product.getByRole('status')).toContainText('Field Notes Journal added to your cart.');

