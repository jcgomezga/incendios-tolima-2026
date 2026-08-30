from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MAPS = ROOT / "assets" / "maps"

FILES = [
    "anm_a3.jpg", "anm_a0_web.jpg",
    "anla_a3.jpg", "anla_a0_web.jpg",
    "anh_a3.jpg", "anh_a0_web.jpg",
]

PREVIEWS = [
    "previews/anm_a3_preview.jpg",
    "previews/anla_a3_preview.jpg",
    "previews/anh_a3_preview.jpg",
]

WARN = 50 * 1024 * 1024
BLOCK = 100 * 1024 * 1024

print("Verificación de mapas JPEG\n")
ok = True
for name in FILES:
    p = MAPS / name
    if not p.exists():
        print(f"[FALTA] {name}")
        ok = False
        continue
    size = p.stat().st_size
    mib = size / 1024 / 1024
    if size > BLOCK:
        print(f"[>100 MiB] {name}: {mib:.1f} MiB — GitHub bloqueará el archivo.")
        ok = False
    elif size > WARN:
        print(f"[ADVERTENCIA] {name}: {mib:.1f} MiB — GitHub permite push, pero advierte >50 MiB.")
    else:
        print(f"[OK] {name}: {mib:.1f} MiB")

for name in PREVIEWS:
    p = MAPS / name
    if not p.exists():
        print(f"[FALTA] {name}")
        ok = False
        continue
    mib = p.stat().st_size / 1024 / 1024
    print(f"[OK] {name}: {mib:.1f} MiB")

print("\nResultado:", "LISTO" if ok else "REVISAR")
