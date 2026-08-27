# StickyWorkHeader specification

## Overview

- Target: `src/components/StickyWorkHeader.astro`
- Interaction model: CSS sticky

## DOM structure

- Full-width ruled header.
- Left: oversized `WORK`.
- Right: year range and project count.
- Small lower metadata line.

## Behavior

- Sticks immediately below the site navigation while the work section passes underneath.
- Uses an opaque paper background so project content cannot reduce legibility.
- No JavaScript and no scroll hijacking.

## Responsive behavior

- Desktop: two-column 50/50 layout with strong asymmetry inside each column.
- Mobile: title and metadata remain on one row; type scales down and the secondary line is hidden.

