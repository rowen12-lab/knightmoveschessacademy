// Knight Moves Chess Academy - Part 3 JavaScript
// Runs after the page has loaded. Each feature checks that its elements
// exist first, so the same file can be linked on all five pages.

document.addEventListener("DOMContentLoaded", function () {

  // ---------- Accordion (index.html) ----------
  const accordionButtons = document.querySelectorAll(".accordion-button");

  accordionButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const panel = document.getElementById(button.getAttribute("aria-controls"));
      const isOpen = button.getAttribute("aria-expanded") === "true";

      button.setAttribute("aria-expanded", String(!isOpen));
      panel.style.maxHeight = isOpen ? null : panel.scrollHeight + "px";
    });
  });

});
