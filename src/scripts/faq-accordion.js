/**
 * FAQ Accordion functionality
 * Shared between servicios.astro and servicio/[slug].astro
 */

export function initFaqAccordion() {
  document.querySelectorAll('.faq-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const answer = item?.querySelector('.faq-answer');
      const icon = btn.querySelector('.faq-icon');
      if (!answer || !icon) return;

      const isOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';

      // Close all other answers
      document.querySelectorAll('.faq-answer').forEach((a) => {
        a.style.maxHeight = '0';
        a.style.opacity = '0';
      });
      document.querySelectorAll('.faq-icon').forEach((ic) => {
        ic.style.transform = 'rotate(0deg)';
        ic.textContent = '+';
      });

      // Open clicked answer if it wasn't open
      if (!isOpen) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.style.opacity = '1';
        icon.style.transform = 'rotate(45deg)';
        icon.textContent = '+';
      }
    });
  });
}

// Auto-initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFaqAccordion);
} else {
  initFaqAccordion();
}