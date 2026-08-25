import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.dirname(fileURLToPath(import.meta.url));
const source = path.join(root, "source");
const bannerMaster = path.join(source, "poster-reference-banner-master.png");
const backgroundMaster = path.join(source, "poster-reference-background-master.png");
const paperGrainMaster = path.join(source, "paper-grain-master.png");
const serifFont = path.join(source, "fonts", "DMSerifDisplay-Regular.ttf");
const sansFont = path.join(source, "fonts", "DMSans-Variable.ttf");

const BLACK = "#111111";
const GRAY = "#c6c6c1";
const SIDE_BLACK = "#8a8a85";
const SIDE_GRAY = "#deddd8";

function escapeMarkup(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

async function renderText(text, options = {}) {
  const family = options.family === "serif" ? "DM Serif Display" : "DM Sans";
  const fontfile = options.family === "serif" ? serifFont : sansFont;
  const weightOpen = options.bold ? "<b>" : "";
  const weightClose = options.bold ? "</b>" : "";
  const italicOpen = options.italic ? "<i>" : "";
  const italicClose = options.italic ? "</i>" : "";
  const content = `${weightOpen}${italicOpen}${escapeMarkup(text)}${italicClose}${weightClose}`;

  return sharp({
    text: {
      text: `<span foreground="${options.color ?? BLACK}">${content}</span>`,
      font: `${family} ${options.size ?? 16}`,
      fontfile,
      rgba: true,
      dpi: 72,
      width: options.width,
      wrap: "none",
    },
  })
    .png()
    .toBuffer();
}

async function clipWidth(input, width) {
  const metadata = await sharp(input).metadata();
  const sourceWidth = metadata.width ?? 1;
  const sourceHeight = metadata.height ?? 1;
  if (sourceWidth <= width) return input;
  return sharp(input)
    .extract({ left: 0, top: 0, width, height: sourceHeight })
    .png()
    .toBuffer();
}

function ruleLayer(width, height, x, color = BLACK) {
  return Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <line x1="${x}" y1="0" x2="${x}" y2="${height}" stroke="${color}" stroke-width="1" />
    </svg>
  `);
}

async function createGridRows(canvasWidth, startX, rows, palette = {}) {
  const available = canvasWidth - startX;
  const grayColor = palette.gray ?? GRAY;
  const blackColor = palette.black ?? BLACK;
  const overlays = [];
  for (let index = 0; index < rows.length; index += 1) {
    const row = rows[index];
    const repeated = `${row.phrase} ${row.phrase} ${row.phrase}`;
    const gray = await clipWidth(
      await renderText(repeated, {
        family: "sans",
        size: row.size,
        color: grayColor,
        bold: true,
        italic: row.italic,
      }),
      available,
    );
    overlays.push({ input: gray, left: startX, top: row.top });

    const black = await clipWidth(
      await renderText(row.phrase, {
        family: "sans",
        size: row.size,
        color: blackColor,
        bold: true,
        italic: row.italic,
      }),
      canvasWidth - row.blackLeft,
    );
    overlays.push({ input: black, left: row.blackLeft, top: row.top });
  }
  return overlays;
}

async function createSidePanel(blackOffsets) {
  const width = 480;
  const height = 1080;
  const phrases = ["From Prose To Play", "Media of possibilities", "The blade is hidden."];
  const rows = Array.from({ length: 16 }, (_, index) => ({
    phrase: phrases[index % phrases.length],
    size: index % 3 === 0 ? 48 : index % 3 === 1 ? 44 : 46,
    top: -4 + index * 68,
    blackLeft: blackOffsets[index % blackOffsets.length],
    italic: index >= 8 && index <= 11,
  }));
  const rowOverlays = await createGridRows(width, 0, rows, {
    gray: SIDE_GRAY,
    black: SIDE_BLACK,
  });

  return sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite(rowOverlays)
    .png()
    .toBuffer();
}

async function exportBanner() {
  const base = await sharp(bannerMaster)
    .resize(960, 260, { fit: "cover", position: "centre" })
    .png()
    .toBuffer();

  const overlays = [{ input: ruleLayer(960, 260, 206, "#9c9c98"), left: 0, top: 0 }];
  const rail = await Promise.all([
    renderText("From Prose To Play", { family: "serif", size: 17 }),
    renderText("Media of possibilities", { family: "serif", size: 11 }),
    renderText("The blade is hidden.", { family: "serif", size: 11 }),
    renderText("From Prose To Play\nMedia of possibilities\nThe blade is hidden.", {
      family: "sans",
      size: 8,
      width: 175,
    }),
  ]);
  overlays.push(
    { input: rail[0], left: 16, top: 15 },
    { input: rail[1], left: 16, top: 53 },
    { input: rail[2], left: 16, top: 78 },
    { input: rail[3], left: 16, top: 118 },
  );

  overlays.push(
    ...(await createGridRows(960, 220, [
      { phrase: "From Prose To Play", size: 43, top: -4, blackLeft: 470 },
      { phrase: "Media of possibilities", size: 41, top: 37, blackLeft: 330 },
      { phrase: "The blade is hidden.", size: 43, top: 78, blackLeft: 590 },
      { phrase: "From Prose To Play", size: 42, top: 120, blackLeft: 400, italic: true },
      { phrase: "Media of possibilities", size: 40, top: 162, blackLeft: 650, italic: true },
      { phrase: "The blade is hidden.", size: 41, top: 203, blackLeft: 285 },
    ])),
  );

  await sharp(base)
    .composite(overlays)
    .png({ compressionLevel: 9 })
    .toFile(path.join(root, "itch-profile-banner-960x260.png"));
}

async function exportBackground() {
  const cleanBase = await sharp(backgroundMaster)
    .resize(1920, 1080, { fit: "fill" })
    .png()
    .toBuffer();

  const paperGrain = await sharp(paperGrainMaster)
    .resize(1920, 1080, { fit: "fill" })
    .modulate({ saturation: 0.35, brightness: 1.02 })
    .removeAlpha()
    .ensureAlpha(0.28)
    .png()
    .toBuffer();

  const base = await sharp(cleanBase)
    .composite([{ input: paperGrain, left: 0, top: 0, blend: "over" }])
    .png()
    .toBuffer();

  const [leftPanel, rightPanel] = await Promise.all([
    createSidePanel([115, 250, 40, 190, 310, 75]),
    createSidePanel([285, 80, 210, 25, 160, 330]),
  ]);
  const overlays = [
    { input: leftPanel, left: 0, top: 0 },
    { input: rightPanel, left: 1440, top: 0 },
    { input: ruleLayer(1920, 1080, 479, "#d1d0cb"), left: 0, top: 0 },
    { input: ruleLayer(1920, 1080, 1440, "#d1d0cb"), left: 0, top: 0 },
  ];

  await sharp(base)
    .composite(overlays)
    .png({ compressionLevel: 9 })
    .toFile(path.join(root, "itch-profile-background-1920x1080.png"));
}

await Promise.all([exportBanner(), exportBackground()]);
console.log("ITCH_PROFILE_ASSETS_EXPORTED");
