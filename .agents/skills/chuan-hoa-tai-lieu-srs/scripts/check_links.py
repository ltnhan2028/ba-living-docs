"""Kiem tra toan bo link markdown va the img HTML trong repo ba-living-docs."""

import os
import re
import sys
from urllib.parse import unquote


def check_links(repo_root: str, target_subdir: str | None = None) -> int:
    md_files: list[str] = []
    root_summary = os.path.join(repo_root, "SUMMARY.md")
    if os.path.exists(root_summary):
        md_files.append(root_summary)

    scan_dir = os.path.join(repo_root, target_subdir) if target_subdir else repo_root
    for root, dirs, files in os.walk(scan_dir):
        dirs[:] = [
            d
            for d in dirs
            if d not in {".git", ".agents", "node_modules", "_discovery"}
        ]
        for f in files:
            if f.endswith(".md"):
                full = os.path.join(root, f)
                if full not in md_files:
                    md_files.append(full)

    md_link_re = re.compile(r"!?\[[^\]]*\]\(([^)]+)\)")
    html_src_re = re.compile(r"<img\b[^>]*\bsrc=[\"']([^\"']+)[\"']", re.IGNORECASE)
    broken: list[tuple[str, str, str]] = []
    checked = 0

    for md in md_files:
        with open(md, "r", encoding="utf-8") as fh:
            text = fh.read()
        base = os.path.dirname(md)

        targets: list[str] = []
        for m in md_link_re.finditer(text):
            raw = m.group(1).strip()
            # Loai bo optional title trong markdown: (path/file.png "title")
            if " " in raw and not raw.startswith("<"):
                raw = raw.split(" ", 1)[0].strip()
            targets.append(raw.strip("<>"))
        for m in html_src_re.finditer(text):
            targets.append(m.group(1).strip())

        for raw_target in targets:
            if not raw_target or raw_target.startswith(
                ("http://", "https://", "mailto:", "#", "data:")
            ):
                continue
            target = unquote(raw_target.split("#", 1)[0].strip())
            if not target:
                continue
            checked += 1
            resolved = os.path.normpath(os.path.join(base, target))
            if not os.path.exists(resolved):
                broken.append((os.path.relpath(md, repo_root), raw_target, resolved))

    print(f"Checked {checked} links across {len(md_files)} markdown files.")
    if broken:
        print("BROKEN LINKS FOUND:")
        for src, tgt, res in broken:
            print(f"  - {src}: ({tgt}) -> {res}")
        return 1

    print("All links OK!")
    return 0


if __name__ == "__main__":
    repo = os.getcwd()
    subdir = sys.argv[1] if len(sys.argv) > 1 else None
    sys.exit(check_links(repo, subdir))
