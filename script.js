// =========================================================
// Eng. Haitham Abdullah Hussein — Bio Link Page Script
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
  // Set current year automatically in footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Re-trigger fade-in animations smoothly on load
  const fadeEls = document.querySelectorAll('.fade-in');
  fadeEls.forEach((el) => {
    el.style.animationPlayState = 'running';
  });
});
