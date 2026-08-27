# EditorialTransition specification

## Overview

- Target: `src/components/EditorialTransition.astro`
- Interaction model: scroll-driven sticky statement

## DOM structure

- Tall outer scroll runway.
- Sticky viewport-height frame.
- Small chapter metadata at opposite corners.
- Two oversized display lines: `MEDIA OF` and `POSSIBILITIES`.
- Thin central vertical rule reinforcing the split layout.

## States and behavior

- Progress is measured only while the section crosses the viewport.
- First line translates horizontally in one direction; second line translates in the other.
- Filled letters gradually become lighter while a thin outline remains.
- Progress is written to one CSS custom property through a passive, requestAnimationFrame-throttled listener.
- Reduced motion: static statement, shorter section, no progress listener.

## Responsive behavior

- Desktop: cropped 12-17vw display type with deliberate edge overflow.
- Tablet: 15-20vw type.
- Mobile: 19-24vw type, shorter runway, no horizontal page overflow.

