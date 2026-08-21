#!/usr/bin/env python3
"""Generate browser and mobile icons from the Energetic logo."""

import json
from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public/img/energetic.png"
OUTPUT = ROOT / "public/img/favicon"
GREEN = "#1f9d55"


def square_logo(size: int) -> Image.Image:
    image = Image.open(SOURCE).convert("RGBA")
    side = min(image.size)
    left = (image.width - side) // 2
    top = (image.height - side) // 2
    return image.crop((left, top, left + side, top + side)).resize(
        (size, size), Image.Resampling.LANCZOS
    )


def main() -> None:
    OUTPUT.mkdir(parents=True, exist_ok=True)

    square_logo(16).save(OUTPUT / "favicon-16x16.png")
    square_logo(32).save(OUTPUT / "favicon-32x32.png")
    square_logo(180).save(OUTPUT / "apple-touch-icon.png")
    square_logo(192).save(OUTPUT / "android-chrome-192x192.png")
    square_logo(512).save(OUTPUT / "android-chrome-512x512.png")
    square_logo(512).save(OUTPUT / "favicon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])

    manifest = {
        "name": "Energetic",
        "short_name": "Energetic",
        "icons": [
            {
                "src": "/img/favicon/android-chrome-192x192.png",
                "sizes": "192x192",
                "type": "image/png",
            },
            {
                "src": "/img/favicon/android-chrome-512x512.png",
                "sizes": "512x512",
                "type": "image/png",
            },
        ],
        "theme_color": GREEN,
        "background_color": "#f6faf7",
        "display": "standalone",
    }
    (OUTPUT / "site.webmanifest").write_text(json.dumps(manifest, indent=2) + "\n")
    print(f"Generated icons in {OUTPUT}")


if __name__ == "__main__":
    main()
