
(function () {
  const cfg = window.SITE_CONFIG || { maps: {} };

  // Theme
  const root = document.documentElement;
  const saved = localStorage.getItem("theme");
  if (saved) root.dataset.theme = saved;

  const themeBtn = document.querySelector("[data-theme-toggle]");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const next = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      localStorage.setItem("theme", next);
      themeBtn.setAttribute("aria-label", next === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro");
      themeBtn.textContent = next === "dark" ? "☀" : "◐";
    });
  }

  // Reading progress
  const progress = document.getElementById("reading-progress");
  const updateProgress = () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    progress.style.width = (max > 0 ? (doc.scrollTop / max) * 100 : 0) + "%";
  };
  document.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  // Scroll spy
  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...document.querySelectorAll(".nav-links a[href^='#']")];
  if ("IntersectionObserver" in window) {
    const obs = new IntersectionObserver(entries => {
      const visible = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + visible.target.id));
    }, { rootMargin: "-25% 0px -65% 0px", threshold: [0.05, 0.2, 0.5] });
    sections.forEach(s => obs.observe(s));
  }

  // Map cards driven by site-config.js
  document.querySelectorAll("[data-map-card]").forEach(card => {
    const key = card.dataset.mapCard;
    const m = cfg.maps[key];
    if (!m) return;

    const img = card.querySelector("[data-map-preview]");
    const missing = card.querySelector("[data-map-missing]");
    const status = card.querySelector("[data-map-status]");
    const a3Viewer = card.querySelector("[data-a3-viewer]");
    const a3Download = card.querySelector("[data-a3-download]");
    const a0Viewer = card.querySelector("[data-a0-viewer]");
    const a0Download = card.querySelector("[data-a0-download]");

    const viewerURL = (path, title) =>
      "viewer.html?image=" + encodeURIComponent(path) + "&title=" + encodeURIComponent(title);

    if (img) {
      img.src = m.a3;
      img.alt = m.titleA3;
      img.onload = () => {
        img.hidden = false;
        if (missing) missing.hidden = true;
        if (status) { status.textContent = "Mapa A3 disponible"; status.classList.add("ready"); }
      };
      img.onerror = () => {
        img.hidden = true;
        if (missing) missing.hidden = false;
        if (status) { status.textContent = "Pendiente de incorporar"; status.classList.remove("ready"); }
      };
      img.addEventListener("click", () => window.open(viewerURL(m.a3, m.titleA3), "_blank", "noopener"));
    }
    if (a3Viewer) a3Viewer.href = viewerURL(m.a3, m.titleA3);
    if (a3Download) { a3Download.href = m.a3; a3Download.download = ""; }
    if (a0Viewer) a0Viewer.href = viewerURL(m.a0, m.titleA0);
    if (a0Download) { a0Download.href = m.a0; a0Download.download = ""; }
  });

  // Mobile nav
  const mobileBtn = document.querySelector("[data-mobile-nav]");
  if (mobileBtn) {
    mobileBtn.addEventListener("click", () => {
      const links = document.querySelector(".nav-links");
      if (!links) return;
      const open = links.style.display === "flex";
      links.style.display = open ? "" : "flex";
      if (!open) {
        links.style.position = "absolute";
        links.style.top = "54px";
        links.style.left = "12px";
        links.style.right = "12px";
        links.style.padding = "10px";
        links.style.background = "var(--surface)";
        links.style.border = "1px solid var(--line)";
        links.style.borderRadius = "12px";
        links.style.boxShadow = "var(--shadow)";
      }
    });
  }
})();
