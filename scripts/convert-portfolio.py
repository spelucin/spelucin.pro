#!/usr/bin/env python3
"""Convert selected portfolio PDF pages to JPEG slides.

On-demand helper (run manually, not part of the build):

    /tmp/opencode/ocrvenv/bin/python scripts/convert-portfolio.py

Source PDFs live in `scripts/portfolio-pdfs/` (kept out of the deployed
build). Drop any PDF there and it gets converted. For each PDF, renders
the pages (the configured ones, or all pages for new PDFs), blurs only
the numeric (KPI/figure) regions, and composites each capture onto a
subtle blue->black gradient backdrop in the site's brand colors. Output
goes to `public/assets/portfolio/` as `{agency}-{page}.jpg`.
"""
import io
import os
import sys

import pymupdf
from PIL import Image, ImageDraw, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PDF_DIR = os.path.join(ROOT, "scripts", "portfolio-pdfs")
OUT_DIR = os.path.join(ROOT, "public", "assets", "portfolio")

# Dark-theme monochrome blue palette (brand).
BLUE_TOP = (16, 26, 52)      # visible deep blue at the top
BLUE_MID = (10, 16, 34)      # middle stop
BLACK_BOTTOM = (5, 7, 12)    # near-black bottom
BRAND_HINT = (96, 165, 250)  # --color-primary #60a5fa, very faint

TARGETS = {
    "dashboard_torices": [2, 3, 7, 9, 12],
    "ecommerce_owlbox": [1, 4, 6, 9],
    "notebook_seo": [1, 2, 7, 8, 14, 18],
}

RENDER_DPI = 150          # pixel density for crisp captures
BLUR_RADIUS = 10          # figure blur: numeric values stay unreadable
PAD_RATIO = 0.02          # gutter between capture and gradient edge
OUTPUT_WIDTH = 1600       # final slide width (px)
JPEG_QUALITY = 86


def make_gradient(w, h):
    """Vertical blue->black gradient, clearly visible, faint brand tint on top."""
    img = Image.new("RGB", (w, h))
    draw = ImageDraw.Draw(img)
    for y in range(h):
        t = y / max(h - 1, 1)
        if t < 0.5:
            s = t * 2
            r = int(BLUE_TOP[0] + (BLUE_MID[0] - BLUE_TOP[0]) * s)
            g = int(BLUE_TOP[1] + (BLUE_MID[1] - BLUE_TOP[1]) * s)
            b = int(BLUE_TOP[2] + (BLUE_MID[2] - BLUE_TOP[2]) * s)
        else:
            s = (t - 0.5) * 2
            r = int(BLUE_MID[0] + (BLACK_BOTTOM[0] - BLUE_MID[0]) * s)
            g = int(BLUE_MID[1] + (BLACK_BOTTOM[1] - BLUE_MID[1]) * s)
            b = int(BLUE_MID[2] + (BLACK_BOTTOM[2] - BLUE_MID[2]) * s)
        draw.line((0, y, w, y), fill=(r, g, b))
    # faint brand blue radial glow at top-left
    glow = Image.new("L", (w, h), 0)
    gd = ImageDraw.Draw(glow)
    gd.ellipse((int(-w * 0.2), int(-h * 0.3), int(w * 0.8), int(h * 0.7)),
               fill=90)
    glow = glow.filter(ImageFilter.GaussianBlur(w // 10))
    tint = Image.new("RGB", (w, h), BRAND_HINT)
    img = Image.composite(tint, img, glow.point(lambda p: p // 6))
    return img


def is_numeric_word(text):
    """True when a word is a number: has digits and no letters.

    Labels such as "GA4", "3kg" or URLs keep their letters and stay
    readable; only figures like "58.410", "334.4%" get blurred.
    """
    return any(ch.isdigit() for ch in text) and not any(ch.isalpha() for ch in text)


def blurred_text_regions(page, pix):
    """Blur only the numeric (KPI/figure) regions on the rasterized capture."""
    img = pix.tobytes("jpeg")
    capture = Image.open(io.BytesIO(img)).convert("RGB")
    scale = pix.width / page.rect.width
    mask = Image.new("L", capture.size, 0)
    md = ImageDraw.Draw(mask)
    for x0, y0, x1, y1, word, *_ in page.get_text("words"):
        if not is_numeric_word(word):
            continue
        # inflate generously so glyph edges and nearby figures blur together
        md.rectangle(
            (x0 * scale - 12, y0 * scale - 12, x1 * scale + 12, y1 * scale + 12),
            fill=255,
        )
    blurred = capture.filter(ImageFilter.GaussianBlur(BLUR_RADIUS))
    capture = Image.composite(blurred, capture, mask)
    return capture


def render_page(pdf_path, page_num):
    doc = pymupdf.open(pdf_path)
    page = doc[page_num - 1]
    pix = page.get_pixmap(dpi=RENDER_DPI, alpha=False)
    capture = blurred_text_regions(page, pix)
    doc.close()
    return capture


def compose(capture):
    """Fit the (blurred) capture onto a gradient backdrop."""
    aspect = capture.width / capture.height
    pad = PAD_RATIO * 2
    canvas_w = OUTPUT_WIDTH
    canvas_h = int(round(canvas_w / aspect / (1 + pad)))
    canvas = make_gradient(canvas_w, canvas_h)
    # scale capture to fill the canvas minus the gutter, keep aspect
    inner_w = int(canvas_w * (1 - pad))
    inner_h = int(inner_w / aspect)
    capture = capture.resize((inner_w, inner_h), Image.LANCZOS)
    x = (canvas_w - inner_w) // 2
    y = (canvas_h - inner_h) // 2
    canvas.paste(capture, (x, y))
    return canvas


def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    pdfs = sorted(
        f for f in os.listdir(PDF_DIR)
        if f.lower().endswith(".pdf") and not f.endswith(":Zone.Identifier")
    )
    if not pdfs:
        print(f"!! no PDFs found in {PDF_DIR}")
        return 1
    total = 0
    for filename in pdfs:
        agency = filename[: -len(".pdf")]
        pdf = os.path.join(PDF_DIR, filename)
        pages = TARGETS.get(agency)
        if pages is None:
            doc = pymupdf.open(pdf)
            pages = list(range(1, doc.page_count + 1))
            doc.close()
            print(f"* {agency}: no page config, converting all {len(pages)} pages")
        for page_num in pages:
            capture = render_page(pdf, page_num)
            slide = compose(capture)
            out = os.path.join(OUT_DIR, f"{agency}-{page_num}.jpg")
            slide.save(out, "JPEG", quality=JPEG_QUALITY, progressive=True)
            print(f"ok {os.path.basename(out)} "
                  f"{slide.width}x{slide.height}")
            total += 1
    print(f"done: {total} slides")


if __name__ == "__main__":
    sys.exit(main())
