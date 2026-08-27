# AsymmetricHero specification

## Overview

- Target: existing hero markup and scoped styles in `src/pages/index.astro`
- Interaction model: scroll-triggered plus static two-column layout

## DOM structure

- Hero metadata row.
- Two-column stage with watermark in the left field and primary statement in the right field.
- Duplicate watermark layers: a pale filled layer and a thin outlined layer.
- Bottom metadata/actions distributed asymmetrically across columns.

## States and behavior

- Trigger: `window.scrollY > 100` while the hero is still relevant.
- State A: filled watermark visible; outline hidden.
- State B: filled watermark hidden; outline visible at low opacity.
- Transition: `opacity 400ms cubic-bezier(.22,.61,.36,1)`.
- Reduced motion: no transform animation; display a stable outline watermark.

## Visual tokens

- Background: existing paper cream.
- Display face: local DM Serif Display.
- Information face: local DM Sans.
- Watermark: neutral ink at 5-9% fill or 12-16% outline.
- Primary accent: existing crimson, used only for the key statement.

## Responsive behavior

- Desktop: approximately 38/62 split with a vertical rule and large empty fields.
- Tablet: approximately 42/58 split, reduced watermark scale.
- Mobile: one column; watermark becomes an absolute background and content stays readable.

