(function () {
  "use strict";

  const root = document.documentElement;
  const themeButton = document.querySelector("[data-theme-toggle]");
  const navButton = document.querySelector("[data-mobile-nav]");
  const navigation = document.getElementById("site-navigation");
  const progress = document.getElementById("reading-progress");
  const cfg = window.SITE_CONFIG || { maps: {} };

  function applyTheme(theme) {
    root.dataset.theme = theme;
    if (themeButton) {
      const dark = theme === "dark";
      themeButton.textContent = dark ? "Claro" : "Oscuro";
      themeButton.setAttribute("aria-pressed", String(dark));
    }
  }

  const savedTheme = localStorage.getItem("theme");
  const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  applyTheme(savedTheme || preferredTheme);

  themeButton?.addEventListener("click", function () {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem("theme", next);
  });

  function closeNavigation() {
    navigation?.classList.remove("open");
    navButton?.setAttribute("aria-expanded", "false");
  }

  navButton?.addEventListener("click", function () {
    const open = navigation?.classList.toggle("open") || false;
    navButton.setAttribute("aria-expanded", String(open));
  });

  navigation?.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeNavigation);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeNavigation();
  });

  function updateProgress() {
    if (!progress) return;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const value = height > 0 ? Math.min(100, Math.max(0, (window.scrollY / height) * 100)) : 0;
    progress.style.width = value + "%";
  }

  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);

  const navLinks = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
  const sections = navLinks.map(function (link) {
    return document.querySelector(link.getAttribute("href"));
  }).filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (link) {
          const active = link.getAttribute("href") === "#" + entry.target.id;
          link.classList.toggle("active", active);
          if (active) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-25% 0px -65% 0px", threshold: 0 });
    sections.forEach(function (section) { observer.observe(section); });
  }

  function viewerURL(source, title, original) {
    const params = new URLSearchParams({ source: source, title: title });
    if (original) params.set("original", original);
    return "viewer.html?" + params.toString();
  }

  document.querySelectorAll("[data-map-card]").forEach(function (card) {
    const map = cfg.maps[card.dataset.mapCard];
    if (!map) return;

    card.querySelectorAll("[data-a3-viewer]").forEach(function (link) {
      link.href = viewerURL(map.a3, map.titleA3, map.a3);
    });
    card.querySelectorAll("[data-a3-download]").forEach(function (link) {
      link.href = map.a3;
      link.download = "";
    });
    card.querySelectorAll("[data-a0-viewer]").forEach(function (link) {
      link.href = viewerURL(map.a0Dzi, map.titleA0, map.a0Original);
    });
    card.querySelectorAll("[data-a0-download]").forEach(function (link) {
      link.href = map.a0Original;
    });
  });

  const copyButton = document.querySelector("[data-copy-citation]");
  const copyStatus = document.querySelector("[data-copy-status]");
  copyButton?.addEventListener("click", async function () {
    const text = document.getElementById("citation-text")?.textContent.trim();
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      if (copyStatus) copyStatus.textContent = "Cita copiada.";
    } catch (error) {
      if (copyStatus) copyStatus.textContent = "No fue posible copiarla; selecciónala manualmente.";
    }
  });
})();
