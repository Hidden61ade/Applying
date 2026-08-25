# itch.io profile artwork

Final upload files:

- `itch-profile-banner-960x260.png`
- `itch-profile-background-1920x1080.png`

The final direction is a bright ivory typographic grid inspired by modern exhibition catalogues. The 1920px background reserves a clean 960px vertical content column in the center, while two 480px side gutters carry dense DM Sans phrase rows; light-gray repetitions remain readable while selected black phrases shift across the grid for emphasis. The current final artwork does not use the logo:

- `From Prose To Play`
- `Media of possibilities`
- `The blade is hidden.`

The generated editorial paper masters, original logo archive, DM Serif Display / DM Sans fonts, and licenses are kept under `source/`.

The background also blends a photorealistic scanned paper-fiber texture beneath the typography at low opacity, keeping the central content column bright and the type edges crisp.

Side typography is intentionally subdued: emphasized rows use a mid-gray equivalent to roughly 45% black, repeated rows roughly 15% black, so the artwork reads as environmental texture behind the itch.io page rather than competing with project cards.

Regenerate the exact upload sizes from the repository root:

```powershell
node assets/itch-profile/export-assets.mjs
```
