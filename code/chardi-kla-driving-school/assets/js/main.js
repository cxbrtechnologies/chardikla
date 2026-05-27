async function includePartials() {
  const fallbacks = {
    "components/navbar.html": `
<nav class="nav" id="siteNav" aria-label="Primary navigation">
  <div class="nav-inner container">
    <a class="brand" href="#home" aria-label="CHARDI KLA DRIVING SCHOOL home">
      <img src="assets/images/logo.png" width="44" height="44" alt="CHARDI KLA DRIVING SCHOOL logo" decoding="async" />
      <span class="brand-text">
        <span class="brand-name">CHARDI KLA</span>
        <span class="brand-sub">Driving School</span>
      </span>
    </a>
    <div class="nav-links" role="navigation" aria-label="Site links">
      <a class="nav-link" href="#home">Home</a>
      <a class="nav-link" href="#courses">Driving Courses</a>
      <a class="nav-link" href="#road-test">Road Test Prep</a>
      <a class="nav-link" href="#pricing">Pricing</a>
      <a class="nav-link" href="#reviews">Reviews</a>
      <a class="nav-link" href="#contact">Contact</a>
    </div>
    <div class="nav-right">
      <a class="btn btn-primary btn-sm nav-cta" href="#contact">Book Lesson</a>
      <button class="burger" id="navBurger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobileMenu">
        <span class="burger-line" aria-hidden="true"></span>
        <span class="burger-line" aria-hidden="true"></span>
      </button>
    </div>
  </div>
  <div class="mobile-menu" id="mobileMenu" aria-hidden="true">
    <div class="mobile-top">
      <a class="brand" href="#home" data-nav-close>
        <img src="assets/images/logo.png" width="44" height="44" alt="" decoding="async" />
        <span class="brand-text">
          <span class="brand-name">CHARDI KLA</span>
          <span class="brand-sub">Driving School</span>
        </span>
      </a>
      <button class="close" id="navClose" type="button" aria-label="Close menu"><span aria-hidden="true">×</span></button>
    </div>
    <div class="mobile-links" role="navigation" aria-label="Mobile links">
      <a class="mobile-link" href="#home" data-nav-close>Home</a>
      <a class="mobile-link" href="#courses" data-nav-close>Driving Courses</a>
      <a class="mobile-link" href="#road-test" data-nav-close>Road Test Prep</a>
      <a class="mobile-link" href="#pricing" data-nav-close>Pricing</a>
      <a class="mobile-link" href="#reviews" data-nav-close>Reviews</a>
      <a class="mobile-link" href="#contact" data-nav-close>Contact</a>
    </div>
    <div class="mobile-cta">
      <a class="btn btn-primary btn-block" href="#contact" data-nav-close>Book Lesson</a>
      <a class="btn btn-secondary btn-block" href="tel:4034002628" data-nav-close>Call 403‑400‑2628</a>
      <p class="muted mobile-note">Serving Calgary • Pickup/drop‑off available only in N.E.</p>
    </div>
  </div>
</nav>`,
    "components/footer.html": `
<footer class="footer" aria-label="Footer">
  <div class="container footer-inner">
    <div class="footer-brand">
      <a class="brand" href="#home" aria-label="CHARDI KLA DRIVING SCHOOL home">
        <img src="assets/images/logo.png" width="44" height="44" alt="" loading="lazy" decoding="async" />
        <span class="brand-text">
          <span class="brand-name">CHARDI KLA</span>
          <span class="brand-sub">Driving School</span>
        </span>
      </a>
      <p class="muted">Premium, calm driving instruction in Calgary. Safety-focused, confidence-building lessons with multilingual support.</p>
      <div class="social">
        <a class="social-icon" href="tel:4034002628" aria-label="Call CHARDI KLA DRIVING SCHOOL">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M8.5 3.5l2 4.4-1.4 1.4c1.4 2.8 3.6 5 6.4 6.4l1.4-1.4 4.4 2v2.1c0 .8-.6 1.4-1.4 1.5-9 .7-16.2-6.5-15.5-15.5 0-.8.7-1.4 1.5-1.4h2.1z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
        <a class="social-icon" href="https://wa.me/14034002628?text=Hi%20CHARDI%20KLA%20DRIVING%20SCHOOL%2C%20I%E2%80%99d%20like%20to%20book%20a%20lesson.%20My%20availability%20is%3A%20" target="_blank" rel="noopener" aria-label="WhatsApp CHARDI KLA DRIVING SCHOOL">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.6z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.2 8.7c.2-.5.4-.5.7-.5h.6c.2 0 .4 0 .5.4l.7 1.7c.1.3.1.6-.1.8l-.4.5c.6 1.1 1.6 2.1 2.7 2.7l.5-.4c.2-.2.5-.2.8-.1l1.7.7c.4.1.4.3.4.5v.6c0 .3 0 .5-.5.7-.6.2-2 .4-4.2-.8-2.3-1.2-3.8-3.6-4.1-4.2-.3-.6-1-2.9-.8-4.2z" fill="currentColor" opacity=".9" />
          </svg>
        </a>
      </div>
    </div>
    <div class="footer-cols">
      <div class="footer-col">
        <div class="footer-title">Quick links</div>
        <a class="footer-link" href="#courses">Driving Courses</a>
        <a class="footer-link" href="#road-test">Road Test Prep</a>
        <a class="footer-link" href="#pricing">Pricing</a>
        <a class="footer-link" href="#reviews">Reviews</a>
      </div>
      <div class="footer-col">
        <div class="footer-title">Contact</div>
        <a class="footer-link" href="tel:4034002628">403‑400‑2628</a>
        <a class="footer-link" href="#contact">Book lesson</a>
        <span class="footer-text muted">Calgary, Alberta</span>
        <span class="footer-text muted">Pickup/drop‑off: N.E. only</span>
      </div>
      <div class="footer-col">
        <div class="footer-title">Languages</div>
        <span class="footer-text muted">English</span>
        <span class="footer-text muted">Punjabi</span>
        <span class="footer-text muted">Hindi</span>
        <span class="footer-text muted">Urdu</span>
      </div>
    </div>
  </div>
  <div class="container footer-bottom">
    <span class="muted">© <span id="year"></span> CHARDI KLA DRIVING SCHOOL. Serving Calgary.</span>
  </div>
</footer>`
  };

  const includeNodes = document.querySelectorAll("[data-include]");
  await Promise.all(
    Array.from(includeNodes).map(async (node) => {
      const path = node.getAttribute("data-include");
      if (!path) return;
      try {
        const res = await fetch(path, { cache: "no-cache" });
        if (!res.ok) throw new Error(`Failed to load ${path}`);
        node.innerHTML = await res.text();
      } catch (e) {
        node.innerHTML = fallbacks[path] || "";
      }
    })
  );
}

function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = String(new Date().getFullYear());
}

function enableSmoothAnchorFocus() {
  document.addEventListener("click", (e) => {
    const a = e.target instanceof Element ? e.target.closest("a[href^=\"#\"]") : null;
    if (!a) return;
    const href = a.getAttribute("href");
    if (!href || href.length < 2) return;
    const target = document.querySelector(href);
    if (!(target instanceof HTMLElement)) return;
    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
    window.setTimeout(() => target.removeAttribute("tabindex"), 400);
  });
}

async function boot() {
  await includePartials();
  setYear();
  enableSmoothAnchorFocus();

  // Let navbar/animations initialize after partials are injected.
  window.dispatchEvent(new Event("partials:loaded"));
}

boot();

