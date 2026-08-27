import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const covers = [
  "public/media/projects/the-birthday-party/images/cover.png",
  "public/media/projects/space-bar-porter/images/cover.jpg",
  "public/media/projects/right-click-to-activate-translator/images/cover.png",
  "public/media/projects/heart-keys/images/cover.png",
  "public/media/projects/hashmon/images/logo.jpg",
  "public/media/projects/gugugaga-penguin/images/cover.jpg",
  "public/media/projects/devil-cops-androids/images/cover.jpg",
];

async function renderWebp(input, output, width, quality) {
  await sharp(path.join(root, input))
    .rotate()
    .resize({ width, fit: "inside", withoutEnlargement: false })
    .webp({ quality, alphaQuality: 100, effort: 6, smartSubsample: true })
    .toFile(path.join(root, output));
}

for (const input of covers) {
  const directory = path.dirname(input);
  await Promise.all([
    renderWebp(input, path.join(directory, "cover-640.webp"), 640, 82),
    renderWebp(input, path.join(directory, "cover-1280.webp"), 1280, 82),
  ]);
}

await Promise.all([
  renderWebp("public/logo.png", "public/logo-480.webp", 480, 86),
  renderWebp("public/logo.png", "public/logo-1024.webp", 1024, 86),
]);

console.log(`Optimized ${covers.length} project covers and the site mark.`);

