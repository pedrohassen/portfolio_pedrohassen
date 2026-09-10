"""
Gera a imagem de Open Graph (1200x630) em public/og.png.

Uso: python scripts/gerar-og.py
Requisitos: Pillow. Usa fontes do Windows (Georgia / Segoe UI) — ajuste os
caminhos em FONTS se rodar em outro SO.

Rode de novo só se mudar o nome/título/URL abaixo.
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

NOME_L1 = "Pedro Hasse"
NOME_L2 = "Niemczewski"
TITULO = "Desenvolvedor de Software"
URL = "portfoliopedrohassen.vercel.app"

W, H = 1200, 630
PAPER = (250, 249, 246)
INK = (27, 26, 23)
MUTED = (111, 107, 99)
LINE = (228, 225, 217)
ACCENT = (124, 47, 47)

FONTS = "C:/Windows/Fonts/"
serif_bold = ImageFont.truetype(FONTS + "georgiab.ttf", 94)
sans = ImageFont.truetype(FONTS + "segoeui.ttf", 34)
sans_small = ImageFont.truetype(FONTS + "segoeui.ttf", 25)
mark_font = ImageFont.truetype(FONTS + "georgiab.ttf", 26)

img = Image.new("RGB", (W, H), PAPER)
d = ImageDraw.Draw(img)

d.rectangle([24, 24, W - 25, H - 25], outline=LINE, width=2)

x = 90

bw, bh = 84, 62
box = [W - 90 - bw, 74, W - 90, 74 + bh]
d.rounded_rectangle(box, radius=12, fill=INK)
d.text(
    ((box[0] + box[2]) / 2, (box[1] + box[3]) / 2 - 1),
    "PHN",
    font=mark_font,
    fill=PAPER,
    anchor="mm",
)

d.text((x, 178), NOME_L1, font=serif_bold, fill=INK)
d.text((x, 286), NOME_L2, font=serif_bold, fill=INK)
d.rectangle([x + 3, 418, x + 91, 422], fill=ACCENT)
d.text((x, 452), TITULO, font=sans, fill=MUTED)
d.text((x, H - 88), URL, font=sans_small, fill=MUTED)

out = Path(__file__).resolve().parent.parent / "public" / "og.png"
img.save(out, "PNG", optimize=True)
print("salvo:", out, img.size)
