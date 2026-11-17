"""Kiem tra toan bo link markdown va anh trong repo ba-living-docs."""

import os
import re
import sys


def check_links(repo_root: str, target_subdir: str | None = None) -> int:
    md_files: list[str] = []
    root_summary = os.path.join(repo_root, "SUMMARY.md")
    if os.path.exists(root_summary):
        md_files.append(root_summary)

    scan_dir = os.path.join(repo_root, target_subdir) if target_subdir else repo_root
    for root, dirs, files in os.walk(scan_dir):
        dirs[:] = [d for d in dirs if d not in {".git", ".agents", "node_modules"}]
        for f in files:
            if f.endswith(".md"):
                full = os.path.join(root, f)
                if full not in md_files:
                    md_files.append(full)

    link_re = re.compile(r"!?\[[^\]]*\]\(([^)]+)\)")
    broken: list[tuple[str, str, str]] = []
    checked = 0

    for md in md_files:
        with open(md, "r", encoding="utf-8") as fh:
            text = fh.read()
        base = os.path.dirname(md)
        for m in link_re.finditer(text):
            raw_target = m.group(1).strip()
            if not raw_target or raw_target.startswith(("http://", "https://", "mailto:", "#")):
                continue
            target = raw_target.split("#", 1)[0].strip()
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
