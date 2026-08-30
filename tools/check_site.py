from __future__ import annotations

import csv
import re
import sys
from html import unescape
from pathlib import Path
from urllib.parse import unquote, urlsplit


ROOT = Path(sys.argv[1] if len(sys.argv) > 1 else ".").resolve()
HTML_FILES = sorted(ROOT.rglob("*.html"))
ATTR_RE = re.compile(r"(?:href|src)=[\"']([^\"']+)", re.IGNORECASE)


def local_target(page: Path, raw_url: str) -> Path | None:
    url = unescape(raw_url)
    if url.startswith(("#", "http://", "https://", "mailto:", "data:", "javascript:")):
        return None
    path = unquote(urlsplit(url).path)
    if not path:
        return None
    target = (page.parent / path).resolve()
    if path.endswith("/"):
        target /= "index.html"
    return target


problems: list[str] = []
checked = 0
for page in HTML_FILES:
    text = page.read_text(encoding="utf-8", errors="replace")
    for raw_url in ATTR_RE.findall(text):
        target = local_target(page, raw_url)
        if target is None:
            continue
        checked += 1
        if not target.exists():
            problems.append(f"Enlace local inexistente: {page.relative_to(ROOT)} -> {raw_url}")

general = ROOT / "data/tables/GENERAL/tabla_00_comparacion_institucional_B.csv"
if general.exists():
    with general.open(encoding="utf-8-sig", newline="") as handle:
        rows = {row["agency"]: row for row in csv.DictReader(handle)}
    expected = {"ANM": "127", "ANLA": "143", "ANH": "187"}
    for agency, observed in expected.items():
        if rows.get(agency, {}).get("n_observed") != observed:
            problems.append(f"Resultado inesperado para {agency}: se esperaba {observed}")
else:
    problems.append("Falta la tabla general de comparación institucional")

for agency in ("anm", "anla", "anh"):
    dzi = ROOT / f"assets/maps/dzi/{agency}_a0.dzi"
    tiles = ROOT / f"assets/maps/dzi/{agency}_a0_files"
    if not dzi.exists() or not tiles.is_dir():
        problems.append(f"Pirámide DZI incompleta: {agency.upper()}")

if problems:
    print("\n".join(f"[ERROR] {problem}" for problem in problems))
    raise SystemExit(1)

print(f"[OK] {len(HTML_FILES)} HTML y {checked} rutas locales verificadas")
print("[OK] Cifras principales y pirámides DZI verificadas")
