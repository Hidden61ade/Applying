# ResponsiveProjectMedia specification

## Overview

- Targets: project content frontmatter, `src/lib/responsive-image.ts`, `src/components/ProjectGrid.tsx`, project detail cover markup, and non-home logo markup.
- Interaction model: native responsive image selection and lazy loading.

## Asset contract

- Project cover default: `cover-1280.webp`.
- Project cover compact source: sibling `cover-640.webp`.
- Site mark default: `/logo-480.webp` with `/logo-1024.webp` as the large source.
- Original PNG/JPG files remain as recoverable source material but are not used for initial rendering.

## Project grid behavior

- All card images use `srcset` with 640w and 1280w sources.
- Card `sizes`: one column on mobile, two around tablet, three at wide desktop.
- Images use `loading="lazy"` and `decoding="async"`.
- Existing `coverFit` behavior and hover animation remain intact.
- Quick-view dialog uses the same `srcset`; it does not introduce a new eager source.

## Project detail behavior

- Hero cover uses the same responsive sources and `decoding="async"`.
- It may load eagerly because it is above the fold.

## Logo behavior

- Navigation/sidebar marks use responsive WebP sources.
- Preserve existing alt semantics, class names, and dimensions.

## Compatibility

- A helper must return the original image unchanged when a path does not follow the `cover-1280.webp` naming contract.
- No schema change is required.

