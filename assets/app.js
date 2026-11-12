document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-dismiss]').forEach(button => {
    button.addEventListener('click', () => {
      const target = document.getElementById(button.dataset.dismiss);
      if (target) {
        target.hidden = true;
        target.classList.add('is-hidden');
      }
    });
  });
  document.querySelectorAll('[data-quantity]').forEach(button => {
    button.addEventListener('click', () => {
      const output = document.getElementById('quantity-value');
      const total = document.getElementById('order-total');
      const count = document.getElementById('cart-count');
      const next = Number(output.textContent) + 1;
      output.textContent = String(next);
      if (total) total.textContent = `$${(24 * next).toFixed(2)}`;
      if (count) count.textContent = String(next);
      const status = document.getElementById('quantity-status');
      if (status) status.textContent = `Quantity updated to ${next}.`;
    });
  });
  const delayedButton = document.getElementById('start-sync');
  if (delayedButton) delayedButton.addEventListener('click', () => {
    const status = document.getElementById('sync-status');
    const result = document.getElementById('sync-result');
    delayedButton.disabled = true;
    status.textContent = 'PROCESSING';
    status.style.color = '#e4c17f';
    result.textContent = 'Sync started. Waiting for confirmation…';
    window.setTimeout(() => {
      status.textContent = 'COMPLETE';
      status.style.color = '';
      result.textContent = 'Workspace is up to date.';
      const done = document.getElementById('sync-done');
      if (done) done.hidden = false;
      delayedButton.disabled = false;
    }, 1800);
  });
  document.querySelectorAll('[data-reveal]').forEach(button => button.addEventListener('click', () => {
    const target = document.getElementById(button.dataset.reveal);
    if (target) { target.hidden = false; button.disabled = true; }
  }));
});
