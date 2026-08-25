import assert from "node:assert/strict";
import { createMarkdownProcessor } from "@astrojs/markdown-remark";
import {
  normalizePublicAssetUrl,
  portfolioMarkdownEmbeds,
} from "../src/lib/portfolio-markdown-embeds.mjs";

assert.equal(
  normalizePublicAssetUrl("public/media/projects/heart-keys/images/diagram.png"),
  "/media/projects/heart-keys/images/diagram.png",
);
assert.equal(
  normalizePublicAssetUrl("/public/playables/heart-keys/index.html"),
  "/playables/heart-keys/index.html",
);
assert.equal(normalizePublicAssetUrl("https://example.com/game"), "https://example.com/game");

const tree = {
  type: "root",
  children: [
    {
      type: "image",
      alt: "Gameplay trailer",
      url: "public/media/projects/heart-keys/videos/trailer.mp4",
      title: "poster=public/media/projects/heart-keys/images/poster.jpg",
    },
    {
      type: "image",
      alt: "Diagram",
      url: "/public/media/projects/heart-keys/images/diagram.png",
      title: null,
    },
    {
      type: "link",
      url: "public/playables/heart-keys/index.html",
      title: "playable",
      children: [{ type: "text", value: "Play Heart Keys" }],
    },
    {
      type: "html",
      value: '<video poster="public/media/poster.jpg"><source src="/public/media/trailer.mp4"></video>',
    },
  ],
};

portfolioMarkdownEmbeds()(tree);

assert.equal(tree.children[0].type, "html");
assert.match(tree.children[0].value, /class="portfolio-video"/);
assert.match(tree.children[0].value, /src="\/media\/projects\/heart-keys\/videos\/trailer\.mp4"/);
assert.match(tree.children[0].value, /poster="\/media\/projects\/heart-keys\/images\/poster\.jpg"/);
assert.equal(tree.children[1].url, "/media/projects/heart-keys/images/diagram.png");
assert.equal(tree.children[2].type, "html");
assert.match(tree.children[2].value, /class="portfolio-playable"/);
assert.match(tree.children[2].value, /data-src="\/playables\/heart-keys\/index\.html"/);
assert.match(tree.children[3].value, /poster="\/media\/poster\.jpg"/);
assert.match(tree.children[3].value, /src="\/media\/trailer\.mp4"/);

const processor = await createMarkdownProcessor({
  remarkPlugins: [portfolioMarkdownEmbeds],
});
const rendered = await processor.render(`
![Gameplay trailer](public/media/projects/heart-keys/videos/trailer.mp4 "poster=public/media/projects/heart-keys/images/poster.jpg")

[Play Heart Keys](public/playables/heart-keys/index.html "playable")
`);

assert.match(rendered.code, /class="portfolio-video"/);
assert.match(rendered.code, /src="\/media\/projects\/heart-keys\/videos\/trailer\.mp4"/);
assert.match(rendered.code, /class="portfolio-playable"/);
assert.match(rendered.code, /data-src="\/playables\/heart-keys\/index\.html"/);

console.log("PORTFOLIO_MARKDOWN_EMBEDS_OK");
