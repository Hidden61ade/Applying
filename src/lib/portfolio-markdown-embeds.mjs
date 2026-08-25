const VIDEO_MIME_TYPES = new Map([
  ["mp4", "video/mp4"],
  ["webm", "video/webm"],
  ["ogv", "video/ogg"],
  ["mov", "video/quicktime"],
]);

export function normalizePublicAssetUrl(value) {
  if (typeof value !== "string") return value;
  return value.replace(/^\/?public\//i, "/");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function getExtension(url) {
  const clean = url.split(/[?#]/, 1)[0];
  const index = clean.lastIndexOf(".");
  return index === -1 ? "" : clean.slice(index + 1).toLowerCase();
}

function getPlainText(node) {
  if (!node || typeof node !== "object") return "";
  if (typeof node.value === "string") return node.value;
  if (!Array.isArray(node.children)) return "";
  return node.children.map(getPlainText).join("");
}

function getPoster(title) {
  if (typeof title !== "string") return "";
  const match = title.match(/(?:^|\s)poster=([^\s]+)(?:\s|$)/i);
  return match ? normalizePublicAssetUrl(match[1]) : "";
}

function createVideoHtml(node, url, extension) {
  const caption = node.alt?.trim() || "Gameplay video";
  const poster = getPoster(node.title);
  const posterAttribute = poster ? ` poster="${escapeHtml(poster)}"` : "";
  const captionHtml = node.alt?.trim()
    ? `<figcaption>${escapeHtml(node.alt.trim())}</figcaption>`
    : "";

  return [
    '<figure class="portfolio-video">',
    `  <video controls playsinline preload="metadata"${posterAttribute}>`,
    `    <source src="${escapeHtml(url)}" type="${VIDEO_MIME_TYPES.get(extension)}">`,
    `    <a href="${escapeHtml(url)}">Download ${escapeHtml(caption)}</a>`,
    "  </video>",
    captionHtml,
    "</figure>",
  ]
    .filter(Boolean)
    .join("\n");
}

function createPlayableHtml(node, url) {
  const label = getPlainText(node).trim() || "Play the browser build";
  const safeUrl = escapeHtml(url);
  const safeLabel = escapeHtml(label);

  return [
    '<figure class="portfolio-playable" data-playable-embed>',
    '  <div class="portfolio-playable__stage">',
    `    <button class="portfolio-playable__launch" type="button" data-playable-launch data-src="${safeUrl}">`,
    '      <span class="portfolio-playable__eyebrow">Interactive build</span>',
    `      <strong>${safeLabel}</strong>`,
    '      <small>Click to load the playable version</small>',
    "    </button>",
    `    <iframe title="${safeLabel}" data-playable-frame loading="lazy" allow="autoplay; fullscreen; gamepad; clipboard-read; clipboard-write" allowfullscreen hidden></iframe>`,
    "  </div>",
    '  <figcaption>',
    `    <span>${safeLabel}</span>`,
    `    <a href="${safeUrl}" target="_blank" rel="noreferrer">Open in a new tab ↗</a>`,
    "  </figcaption>",
    "</figure>",
  ].join("\n");
}

function normalizeHtmlPublicPaths(value) {
  return value.replace(
    /\b(src|href|poster)=(['"])\/?public\//gi,
    (_match, attribute, quote) => `${attribute}=${quote}/`,
  );
}

function transformNode(node, parent, index) {
  if (!node || typeof node !== "object") return;

  if (node.type === "html" && typeof node.value === "string") {
    node.value = normalizeHtmlPublicPaths(node.value);
  }

  if (["image", "link", "definition"].includes(node.type) && typeof node.url === "string") {
    node.url = normalizePublicAssetUrl(node.url);
  }

  if (parent && typeof index === "number" && node.type === "image") {
    const extension = getExtension(node.url);
    if (VIDEO_MIME_TYPES.has(extension)) {
      parent.children[index] = {
        type: "html",
        value: createVideoHtml(node, node.url, extension),
      };
      return;
    }
  }

  if (
    parent &&
    typeof index === "number" &&
    node.type === "link" &&
    node.title?.trim().toLowerCase() === "playable"
  ) {
    parent.children[index] = {
      type: "html",
      value: createPlayableHtml(node, node.url),
    };
    return;
  }

  if (Array.isArray(node.children)) {
    node.children.forEach((child, childIndex) => transformNode(child, node, childIndex));
  }
}

export function portfolioMarkdownEmbeds() {
  return (tree) => transformNode(tree, null, null);
}
