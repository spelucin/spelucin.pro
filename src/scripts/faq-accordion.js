/**
 * FAQ Accordion functionality
 * All items start open. Click toggles closed/open.
 */

export function initFaqAccordion() {
  document.querySelectorAll(".faq-item").forEach((item) => {
    const answer = item.querySelector(".faq-answer")
    const icon = item.querySelector(".faq-icon")
    if (!answer || !icon) return

    // Mark all as open by default
    answer.classList.add("is-open")
    icon.classList.add("is-open")

    item.querySelector(".faq-toggle")?.addEventListener("click", () => {
      const wasOpen = answer.classList.contains("is-open")

      // Close all others
      document.querySelectorAll(".faq-answer").forEach((a) => a.classList.remove("is-open"))
      document.querySelectorAll(".faq-icon").forEach((ic) => ic.classList.remove("is-open"))

      // Toggle clicked
      if (!wasOpen) {
        answer.classList.add("is-open")
        icon.classList.add("is-open")
      }
    })
  })
}

// Auto-initialize on DOM ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initFaqAccordion)
} else {
  initFaqAccordion()
}
