# Catchpoint Playwright scenario scripts

Each JavaScript file is a separate Catchpoint Playwright script for one scenario page. Copy one script into a Catchpoint Playwright test. All scripts are configured to use `https://santhoshmp89.github.io/healer_lab/`.

The snippets use Catchpoint's `page` and `expect` objects; they do not include `@playwright/test` imports or a local test runner. Scenarios 01–06 run against this site's own pages. Scenario 07 also opens `https://example.com` in a new tab.

## Files

- `01-locator-structure.js` — nested product card locators and add-to-cart confirmation
- `02-absent-element.js` — expected product absent, empty state, and clear-search recovery
- `03-accessible-name.js` — accessible labels, dropdown, checkbox, and save confirmation
- `04-element-state.js` — delayed sync state and completion result
- `05-interaction-pattern.js` — quantity button and two-step checkout
- `06-overlay-blocks-interaction.js` — load-time modal, close action, then dashboard interaction
- `07-frame-window-context.js` — iframe form plus separate popup tab