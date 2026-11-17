"""Boc tach text, bang va map hinh anh theo chu thich tu file .docx."""

import os
import shutil
import sys
import xml.etree.ElementTree as ET
import zipfile

W_NS = "http://schemas.openxmlformats.org/wordprocessingml/2006/main"
R_NS = "http://schemas.openxmlformats.org/officeDocument/2006/relationships"
A_NS = "http://schemas.openxmlformats.org/drawingml/2006/main"
V_NS = "urn:schemas-microsoft-com:vml"
NS = {"w": W_NS}


def get_text(elem: ET.Element) -> str:
    return "".join(t.text or "" for t in elem.findall(".//w:t", NS)).strip()


def extract_docx(docx_path: str, out_dir: str) -> None:
    os.makedirs(out_dir, exist_ok=True)
    media_out = os.path.join(out_dir, "media")
    os.makedirs(media_out, exist_ok=True)

    with zipfile.ZipFile(docx_path) as z:
        rels_xml = ET.fromstring(z.read("word/_rels/document.xml.rels"))
        rels = {r.attrib["Id"]: r.attrib["Target"] for r in rels_xml}
        doc_xml = ET.fromstring(z.read("word/document.xml"))
        for name in z.namelist():
            if name.startswith("word/media/") and not name.endswith("/"):
                dst = os.path.join(media_out, os.path.basename(name))
                with z.open(name) as src_f, open(dst, "wb") as dst_f:
                    shutil.copyfileobj(src_f, dst_f)

    body = doc_xml.find("w:body", NS)
    children = list(body)
    text_lines: list[str] = []
    map_lines: list[str] = []
    last_heading = ""
    img_idx = 0

    for i, child in enumerate(children):
        tag = child.tag.split("}")[-1]
        if tag == "p":
            p_style = child.find(".//w:pStyle", NS)
            style = p_style.attrib.get(f"{{{W_NS}}}val", "") if p_style is not None else ""
            txt = get_text(child)
            if style.startswith("Heading"):
                last_heading = f"{style}: {txt}"

            blips = child.findall(f".//{{{A_NS}}}blip")
            imagedatas = child.findall(f".//{{{V_NS}}}imagedata")
            rids = [b.attrib.get(f"{{{R_NS}}}embed") for b in blips] + [
                im.attrib.get(f"{{{R_NS}}}id") for im in imagedatas
            ]
            img_tags: list[str] = []
            for rid in rids:
                img_idx += 1
                target = rels.get(rid, "?")
                prev_txt = get_text(children[i - 1]) if i > 0 else ""
                next_txt = get_text(children[i + 1]) if i + 1 < len(children) else ""
                img_tags.append(f"[IMAGE #{img_idx:02d} -> {target}]")
                map_lines.append(
                    f"{img_idx:02d} | {last_heading} | {target}\n"
                    f"     prev=\"{prev_txt[:80]}\" | cur=\"{txt[:80]}\" | next=\"{next_txt[:80]}\""
                )

            if txt or img_tags:
                prefix = f"[{style}] " if style else ""
                suffix = (" " + " ".join(img_tags)) if img_tags else ""
                text_lines.append(f"{prefix}{txt}{suffix}".strip())
        elif tag == "tbl":
            text_lines.append("--- TABLE START ---")
            for row in child.findall("w:tr", NS):
                cells = [get_text(c).replace("\n", " ") for c in row.findall("w:tc", NS)]
                text_lines.append("| " + " | ".join(cells) + " |")
            text_lines.append("--- TABLE END ---")

    with open(os.path.join(out_dir, "extracted_text.txt"), "w", encoding="utf-8") as f:
        f.write("\n".join(text_lines))
    with open(os.path.join(out_dir, "images_map.txt"), "w", encoding="utf-8") as f:
        f.write("\n".join(map_lines))

    print(f"Extracted {len(text_lines)} lines and {img_idx} image references to {out_dir}")


if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python extract_docx.py <path/to/file.docx> <output_dir>")
        sys.exit(1)
    extract_docx(sys.argv[1], sys.argv[2])
