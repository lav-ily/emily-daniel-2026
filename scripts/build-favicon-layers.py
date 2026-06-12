from PIL import Image
from collections import deque
import os

src = "/Users/pallavi/.cursor/projects/Users-pallavi-Documents-Emily-Dan/assets/embundanbun-7e7acdf4-cb95-4428-b32d-6567266176b1.png"
out_dir = os.path.join(os.path.dirname(__file__), "favicon-layers")
os.makedirs(out_dir, exist_ok=True)

im = Image.open(src).convert("RGBA")
w, h = im.size
px = im.load()


def is_bg(r, g, b):
    return max(r, g, b) <= 35


fg = [[False] * w for _ in range(h)]
for y in range(h):
    for x in range(w):
        if not is_bg(*px[x, y][:3]):
            fg[y][x] = True

for _ in range(12):
    nfg = [row[:] for row in fg]
    for y in range(h):
        for x in range(w):
            if fg[y][x]:
                continue
            for nx, ny in (
                (x + 1, y),
                (x - 1, y),
                (x, y + 1),
                (x, y - 1),
                (x + 1, y + 1),
                (x - 1, y + 1),
                (x + 1, y - 1),
                (x - 1, y - 1),
            ):
                if 0 <= nx < w and 0 <= ny < h and fg[ny][nx]:
                    nfg[y][x] = True
    fg = nfg


def classify(r, g, b):
    if max(r, g, b) <= 55:
        return "black"
    if r > 130 and r > g + 35 and r > b + 35:
        return "red"
    if r > 170 and g > 120 and b > 130 and r > b:
        return "pink"
    return "cream"


layer_names = ["black", "red", "pink", "cream"]
for name in layer_names:
    layer = Image.new("L", (w, h), 255)
    lp = layer.load()
    for y in range(h):
        for x in range(w):
            if fg[y][x]:
                r, g, b = px[x, y][:3]
                if classify(r, g, b) == name:
                    lp[x, y] = 0
    layer.save(os.path.join(out_dir, f"{name}.png"))

out = Image.new("RGBA", (w, h))
for y in range(h):
    for x in range(w):
        if fg[y][x]:
            out.putpixel((x, y), px[x, y])
        else:
            out.putpixel((x, y), (0, 0, 0, 0))

out.save(os.path.join(out_dir, "masked.png"))
print("layers written")
