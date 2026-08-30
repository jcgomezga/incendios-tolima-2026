(function () {
  "use strict";

  function sendEvent(name, params) {
    if (typeof window.gtag !== "function") return;
    window.gtag("event", name, Object.assign({
      page_path: window.location.pathname + window.location.search
    }, params || {}));
  }

  function textOf(link) {
    return [
      link?.textContent || "",
      link?.getAttribute("aria-label") || "",
      document.title || "",
      window.location.href || "",
      link?.href || ""
    ].join(" ").toLowerCase();
  }

  function mapName(link) {
    const card = link?.closest?.("[data-map-card]");
    if (card?.dataset?.mapCard) return card.dataset.mapCard.toUpperCase();

    const text = textOf(link);
    if (text.includes("vsm4")) return "VSM4";
    if (text.includes("anla")) return "ANLA";
    if (text.includes("anm")) return "ANM";
    if (text.includes("anh")) return "ANH";
    return "sin_identificar";
  }

  function mapResolution(link) {
    const text = textOf(link);
    if (/\ba0\b|alta resoluci[oó]n|mapa completo/.test(text)) return "alta_resolucion";
    return "mediano";
  }

  function fileName(url) {
    try {
      return decodeURIComponent(url.pathname.split("/").pop() || "");
    } catch (error) {
      return url.pathname.split("/").pop() || "";
    }
  }

  // Una visualización se cuenta cuando el visor realmente se abre, no solo al hacer clic.
  if (/\/viewer\.html$/i.test(window.location.pathname)) {
    const params = new URLSearchParams(window.location.search);
    const virtualLink = document.createElement("a");
    virtualLink.href = params.get("original") || params.get("source") || params.get("image") || window.location.href;
    virtualLink.textContent = params.get("title") || document.title;

    sendEvent("map_view", {
      map_name: mapName(virtualLink),
      map_resolution: mapResolution(virtualLink),
      map_source: params.get("source") || params.get("image") || ""
    });
  }

  document.addEventListener("click", function (event) {
    const link = event.target.closest("a[href]");
    if (!link) return;

    let url;
    try {
      url = new URL(link.href, window.location.href);
    } catch (error) {
      return;
    }

    const label = (link.textContent || "").trim();
    const href = link.getAttribute("href") || "";
    const lower = (label + " " + href).toLowerCase();
    const filename = fileName(url);

    const mapFile = /\.(?:jpe?g|png|tiff?|webp)(?:$|[?#])/i.test(url.pathname + url.search);
    if (mapFile && /descargar/.test(lower)) {
      sendEvent("map_download", {
        map_name: mapName(link),
        map_resolution: mapResolution(link),
        file_name: filename,
        link_url: url.href
      });
      return;
    }

    if (/\/documento\.html$/i.test(url.pathname) && (url.searchParams.get("file") || "").startsWith("docs/")) {
      sendEvent("chapter_open", {
        chapter_file: url.searchParams.get("file") || "",
        chapter_title: url.searchParams.get("title") || label,
        link_url: url.href
      });
      return;
    }

    const isDataFile = /\.(?:csv|xlsx?|zip|geojson|gpkg|json)(?:$|[?#])/i.test(url.pathname + url.search);
    if (isDataFile || /\/data\/tables\//i.test(url.pathname)) {
      sendEvent("data_download", {
        file_name: filename,
        link_url: url.href
      });
      return;
    }

    if (/\.md(?:$|[?#])/i.test(url.pathname + url.search) && link.hasAttribute("download")) {
      sendEvent("document_download", {
        file_name: filename,
        link_url: url.href
      });
    }
  });
})();
