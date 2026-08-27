# Page topology

## Reference behavior

1. A fixed oversized ADvantage SVG wordmark occupies the left side of the viewport.
2. At the top it uses a solid fill.
3. After the page crosses roughly 100px of vertical scroll, the solid layer fades out and a pale outline layer fades in.
4. Content scrolls over the persistent outline, creating depth without adding cards or decoration.
5. The behavior remains on tablet and mobile, with the wordmark scaled to the viewport.

## Adapted homepage order

1. Existing global navigation.
2. Asymmetric split hero with a Hidden61ade typographic watermark.
3. Scroll-driven oversized statement transition: `MEDIA / OF POSSIBILITIES`.
4. Sticky work chapter header: `WORK / 2023—2026`.
5. Existing interactive project explorer and project data.
6. Existing footer.

## Interaction models

- Hero watermark: scroll-triggered class change, solid to outline.
- Statement transition: native scroll plus a passive, requestAnimationFrame-throttled progress variable; no smooth-scroll library.
- Work chapter: CSS `position: sticky`.
- Project explorer: existing click-driven behavior is preserved.

