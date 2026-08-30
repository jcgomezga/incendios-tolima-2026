#!/usr/bin/env python3
from __future__ import annotations

import os
import sys
from pathlib import Path

MEASUREMENT_ID = "G-C0CV0VMJ22"
MARKER = "<!-- Google Analytics · Térmico & territorio -->"


def snippet(relative_analytics: str) -> str:
    return f'''{MARKER}
<script async src="https://www.googletagmanager.com/gtag/js?id={MEASUREMENT_ID}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){{dataLayer.push(arguments);}}
  gtag('js', new Date());
  gtag('config', '{MEASUREMENT_ID}');
</script>
<script defer src="{relative_analytics}"></script>
'''


def main() -> int:
    if len(sys.argv) != 2:
        print("Uso: inject_analytics.py <directorio_site>", file=sys.stderr)
        return 2

    site = Path(sys.argv[1]).resolve()
    analytics = site / "assets" / "js" / "analytics.js"

    if not analytics.is_file():
        print(f"No se encontró {analytics}", file=sys.stderr)
        return 1

    changed = 0
    for html in sorted(site.rglob("*.html")):
        text = html.read_text(encoding="utf-8")
        if MARKER in text:
            continue

        if "<head>" not in text:
            print(f"Advertencia: {html} no contiene <head>; se omite", file=sys.stderr)
            continue

        rel = os.path.relpath(analytics, html.parent).replace(os.sep, "/")
        text = text.replace("<head>", "<head>\n" + snippet(rel), 1)
        html.write_text(text, encoding="utf-8")
        changed += 1

    print(f"Google Analytics inyectado en {changed} páginas HTML ({MEASUREMENT_ID}).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
