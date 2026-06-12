import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import potrace from "potrace";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const layerDir = path.join(__dirname, "favicon-layers");
const outSvg = path.join(__dirname, "..", "app", "icon.svg");
const outApple = path.join(__dirname, "..", "app", "apple-icon.png");

const layers = [
  { name: "cream", fill: "#f3ebe0" },
  { name: "pink", fill: "#e8b4b8" },
  { name: "red", fill: "#c41e3a" },
  { name: "black", fill: "#1a1a1a" },
];

function traceLayer(filePath) {
  return new Promise((resolve, reject) => {
    potrace.trace(
      filePath,
      { turdSize: 2, optTolerance: 0.35, turnPolicy: potrace.Potrace.TURNPOLICY_MINORITY },
      (err, svg) => {
        if (err) reject(err);
        else resolve(svg);
      },
    );
  });
}

function extractPaths(svg) {
  const matches = [...svg.matchAll(/<path[^>]*d="([^"]+)"[^>]*\/?>/g)];
  return matches.map((m) => m[1]);
}

const allPaths = [];
for (const layer of layers) {
  const filePath = path.join(layerDir, `${layer.name}.png`);
  const svg = await traceLayer(filePath);
  const paths = extractPaths(svg);
  for (const d of paths) {
    allPaths.push({ d, fill: layer.fill });
  }
}

const iconSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" role="img" aria-label="Emily and Daniel">
${allPaths.map(({ d, fill }) => `  <path fill="${fill}" d="${d}"/>`).join("\n")}
</svg>
`;

fs.writeFileSync(outSvg, iconSvg);
fs.copyFileSync(path.join(layerDir, "masked.png"), outApple);

console.log(`Wrote ${outSvg} with ${allPaths.length} paths`);
