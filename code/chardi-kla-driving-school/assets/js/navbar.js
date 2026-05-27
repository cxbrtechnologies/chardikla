function initNavbar() {
  const nav = document.getElementById("siteNav");
  if (!nav) return;

  const burger = document.getElementById("navBurger");
  const menu = document.getElementById("mobileMenu");
  const closeBtn = document.getElementById("navClose");

  const openMenu = () => {
    if (!menu || !burger) return;
    menu.classList.add("is-open");
    menu.setAttribute("aria-hidden", "false");
    burger.setAttribute("aria-expanded", "true");
    document.body.classList.add("no-scroll");
  };
  const closeMenu = () => {
    if (!menu || !burger) return;
    menu.classList.remove("is-open");
    menu.setAttribute("aria-hidden", "true");
    burger.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll");
  };

  const onScroll = () => {
    const scrolled = window.scrollY > 8;
    nav.classList.toggle("is-scrolled", scrolled);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  burger?.addEventListener("click", () => {
    const isOpen = menu?.classList.contains("is-open");
    if (isOpen) closeMenu();
    else openMenu();
  });
  closeBtn?.addEventListener("click", closeMenu);
  menu?.addEventListener("click", (e) => {
    const t = e.target instanceof Element ? e.target.closest("[data-nav-close]") : null;
    if (t) closeMenu();
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => initNavbar());
} else {
  initNavbar();
}

window.addEventListener("partials:loaded", () => initNavbar(), { once: true });

