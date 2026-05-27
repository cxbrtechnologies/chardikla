function initReveals() {
  const nodes = Array.from(document.querySelectorAll(".reveal"));
  if (nodes.length === 0) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) {
    nodes.forEach((n) => n.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  nodes.forEach((n) => io.observe(n));
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => initReveals());
} else {
  initReveals();
}
window.addEventListener("partials:loaded", () => initReveals(), { once: true });

function initReveals() {
  const nodes = Array.from(document.querySelectorAll(".reveal"));
  if (nodes.length === 0) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) {
    nodes.forEach((n) => n.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  nodes.forEach((n) => io.observe(n));
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => initReveals());
} else {
  initReveals();
}
window.addEventListener("partials:loaded", () => initReveals(), { once: true });

