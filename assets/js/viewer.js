
(function () {
  const params = new URLSearchParams(location.search);
  const image = params.get("image");
  const title = params.get("title") || "Visor cartográfico";
  const titleEl = document.querySelector("[data-viewer-title]");
  const download = document.querySelector("[data-viewer-download]");
  const native = document.querySelector("[data-viewer-native]");
  const missing = document.getElementById("viewer-missing");
  const osdEl = document.getElementById("osd-viewer");

  document.title = title + " · Visor";
  if (titleEl) titleEl.textContent = title;

  if (!image) {
    osdEl.hidden = true;
    missing.hidden = false;
    return;
  }

  if (download) {
    download.href = image;
    if (!/^https?:\/\//i.test(image)) download.download = "";
  }
  if (native) {
    native.href = image;
    native.target = "_blank";
    native.rel = "noopener noreferrer";
  }

  const init = () => {
    if (!window.OpenSeadragon) {
      osdEl.hidden = true;
      missing.hidden = false;
      missing.innerHTML = "<div><strong>No se pudo cargar el visor interactivo.</strong>Usa “Abrir JPG” para visualizar el archivo directamente en el navegador.</div>";
      return;
    }

    const viewer = OpenSeadragon({
      id: "osd-viewer",
      prefixUrl: "https://cdn.jsdelivr.net/npm/openseadragon@5.0.1/build/openseadragon/images/",
      tileSources: {
        type: "image",
        url: image,
        buildPyramid: true
      },
      showNavigator: true,
      navigatorPosition: "BOTTOM_RIGHT",
      showHomeControl: true,
      showZoomControl: true,
      showFullPageControl: true,
      showRotationControl: false,
      gestureSettingsMouse: { clickToZoom: true, dblClickToZoom: true, scrollToZoom: true },
      gestureSettingsTouch: { pinchToZoom: true, flickEnabled: true },
      maxZoomPixelRatio: 2.5,
      visibilityRatio: 0.2,
      constrainDuringPan: true,
      animationTime: 0.9,
      blendTime: 0.1
    });

    viewer.addHandler("open-failed", function () {
      osdEl.hidden = true;
      missing.hidden = false;
      missing.innerHTML = "<div><strong>No se encontró el mapa o no pudo abrirse.</strong>Verifica la ruta en <code>assets/js/site-config.js</code> o usa “Abrir JPG”.</div>";
    });

    document.querySelector("[data-zoom-in]")?.addEventListener("click", () => viewer.viewport.zoomBy(1.45));
    document.querySelector("[data-zoom-out]")?.addEventListener("click", () => viewer.viewport.zoomBy(0.69));
    document.querySelector("[data-home]")?.addEventListener("click", () => viewer.viewport.goHome());
    document.querySelector("[data-fullscreen]")?.addEventListener("click", () => viewer.setFullScreen(!viewer.isFullPage()));
  };

  init();
})();
