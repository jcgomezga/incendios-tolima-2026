
(function () {
  const cfg = window.SITE_CONFIG || { maps: {} };

  const root = document.documentElement;
  const saved = localStorage.getItem("theme");
  if (saved) root.dataset.theme = saved;

  const themeBtn = document.querySelector("[data-theme-toggle]");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const next = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      localStorage.setItem("theme", next);
      themeBtn.textContent = next === "dark" ? "☀" : "◐";
    });
  }

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
      "viewer.html?image=" + encodeURIComponent(path) +
      "&title=" + encodeURIComponent(title);

    if (img) {
      img.src = m.a3;
      img.alt = m.titleA3;
      img.onload = () => {
        img.hidden = false;
        if (missing) missing.hidden = true;
        if (status) {
          status.textContent = "Mapa A3 disponible";
          status.classList.add("ready");
        }
      };
      img.onerror = () => {
        img.hidden = true;
        if (missing) missing.hidden = false;
      };
      img.addEventListener("click", () =>
        window.open(viewerURL(m.a3, m.titleA3), "_blank", "noopener")
      );
    }

    if (a3Viewer) a3Viewer.href = viewerURL(m.a3, m.titleA3);

    if (a3Download) {
      a3Download.href = m.a3;
      a3Download.download = "";
      a3Download.textContent = "Descargar A3";
    }

    if (a0Viewer) {
      a0Viewer.href = viewerURL(m.a0, m.titleA0);
      a0Viewer.textContent = "Explorar A0 ↗";
    }

    if (a0Download) {
      a0Download.href = m.a0Original || m.a0;
      a0Download.target = "_blank";
      a0Download.rel = "noopener noreferrer";
      a0Download.removeAttribute("download");
      a0Download.textContent = "Descargar A0 original ↗";
      a0Download.title = "Archivo original de máxima resolución alojado en GitHub Releases";
    }
  });
})();
