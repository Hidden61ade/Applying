# Reference behavior findings

## Desktop, 1440 x 900

- `.logo` is fixed at the top-left and measures approximately 994 x 1216px.
- Two copies of the same SVG are stacked: `.fill` and `.stroke`.
- Initial state: fill opacity `1`, stroke opacity `0`.
- Scrolled state: fill opacity `0`, stroke opacity `0.3`.
- Trigger: the `.logo` receives class `show` between scrollY 100 and 120px.
- Transition: both layers use `0.4s`.
- The fixed mark remains behind the content rather than becoming a separate section.

## Tablet, 768 x 900

- The fixed mark remains oversized, approximately 714 x 776px.
- The page retains substantial asymmetric whitespace around the mark.

## Mobile, 390 x 844

- The fixed mark scales to approximately 398 x 420px.
- The solid-to-outline behavior remains.
- Content becomes single-column while the pale mark stays behind it.

## Typography

- Information typography uses `aktiv-grotesk` with weights from 100 to 500.
- Small labels use approximately 2.1px tracking.
- The mixed serif/sans character of the main ADvantage identity is drawn as SVG paths, not produced by a single webfont.
- Adaptation: use locally hosted DM Sans for neutral information layers and DM Serif Display for literary display layers; preserve the existing Hidden61ade visual identity.

## Deliberate exclusions

- No remote Typekit or Google Fonts.
- No smooth-scroll library.
- No fixed social icon cluster.
- No copied ADvantage logo, rays, Japanese copy, or album assets.

