#!/usr/bin/env python3
"""Rename supplier and partner images to stable short names."""

from pathlib import Path
import os
import uuid


ROOT = Path(__file__).resolve().parents[1] / "public/img"


def rename_folder(folder_name: str, prefix: str) -> None:
    folder = ROOT / folder_name
    files = sorted(
        (path for path in folder.iterdir() if path.is_file()),
        key=lambda path: path.name.casefold(),
    )
    if not files:
        return

    temporary = []
    for path in files:
        temp = folder / f".__rename_{uuid.uuid4().hex}{path.suffix.lower()}"
        os.rename(path, temp)
        temporary.append((temp, path.suffix.lower()))

    for index, (temp, extension) in enumerate(temporary, start=1):
        os.rename(temp, folder / f"{prefix}{index}{extension}")

    print(f"{folder_name}: renamed {len(files)} images")


def main() -> None:
    rename_folder("Suppliers", "s")
    rename_folder("Partners", "p")


if __name__ == "__main__":
    main()
