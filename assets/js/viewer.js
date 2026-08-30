(function () {
  "use strict";

  const params = new URLSearchParams(location.search);
  const source = params.get("source") || params.get("image");
  const original = params.get("original") || source;
  const title = params.get("title") || "Visor cartográfico";
  const titleEl = document.querySelector("[data-viewer-title]");
  const download = document.querySelector("[data-viewer-download]");
  const originalLink = document.querySelector("[data-viewer-original]");
  const missing = document.getElementById("viewer-missing");
  const osdEl = document.getElementById("osd-viewer");

  document.title = title + " · Visor";
  if (titleEl) titleEl.textContent = title;

  function showError(message) {
    osdEl.hidden = true;
    missing.hidden = false;
    missing.innerHTML = "<div><strong>No fue posible abrir el mapa.</strong>" + message + "</div>";
  }

  if (!source) {
    showError("No se recibió una fuente cartográfica.");
    return;
  }

  if (originalLink && original) {
    originalLink.href = original;
    originalLink.target = "_blank";
    originalLink.rel = "noopener noreferrer";
  }

  if (download && original) {
    download.href = original;
    if (!/^https?:\/\//i.test(original)) download.download = "";
    else {
      download.target = "_blank";
      download.rel = "noopener noreferrer";
    }
  }

  if (!window.OpenSeadragon) {
    showError("El componente interactivo no se cargó. Usa “Abrir original”.");
    return;
  }

  const isDzi = /\.dzi(?:$|[?#])/i.test(source);
  const tileSources = isDzi ? source : { type: "image", url: source, buildPyramid: true };

  const viewer = OpenSeadragon({
    id: "osd-viewer",
    prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@5.0.1/build/openseadragon/images/",
    tileSources: tileSources,
    showNavigator: true,
    navigatorPosition: "BOTTOM_RIGHT",
    showHomeControl: false,
    showZoomControl: false,
    showFullPageControl: false,
    showRotationControl: false,
    gestureSettingsMouse: { clickToZoom: true, dblClickToZoom: true, scrollToZoom: true },
    gestureSettingsTouch: { pinchToZoom: true, flickEnabled: true },
    maxZoomPixelRatio: isDzi ? 1.35 : 2.2,
    visibilityRatio: 0.25,
    constrainDuringPan: true,
    animationTime: 0.7,
    blendTime: 0.08,
    timeout: 30000
  });

  viewer.addHandler("open", function () {
    osdEl.hidden = false;
    missing.hidden = true;
  });

  viewer.addHandler("open-failed", function () {
    showError(isDzi
      ? "La pirámide de teselas todavía no está disponible. Revisa el último despliegue o usa “Abrir original”."
      : "El archivo no se encontró o el navegador no pudo decodificarlo. Usa “Abrir original”.");
  });

  document.querySelector("[data-zoom-in]")?.addEventListener("click", function () { viewer.viewport.zoomBy(1.45); });
  document.querySelector("[data-zoom-out]")?.addEventListener("click", function () { viewer.viewport.zoomBy(0.69); });
  document.querySelector("[data-home]")?.addEventListener("click", function () { viewer.viewport.goHome(); });
  document.querySelector("[data-fullscreen]")?.addEventListener("click", function () { viewer.setFullScreen(!viewer.isFullPage()); });
})();
