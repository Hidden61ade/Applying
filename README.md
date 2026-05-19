# hiddenblade.net

Personal portfolio for Baohua (Arno) Fang.

**Stack**: Astro 5 · Tailwind v4 · React 19 + Framer Motion · Markdown content collections.

## Run

```powershell
npm.cmd install
npm.cmd run dev      # http://localhost:4321
npm.cmd run build    # static site -> ./dist
```

> Use `.cmd` suffix in PowerShell, or run from `cmd.exe` directly.

## Project structure

```
src/
├── content/projects/*.md   # one markdown per project
├── content.config.ts       # Zod schema for the collection
├── layouts/BaseLayout.astro
├── components/             # Nav, Footer, ProjectGrid (React island)
├── pages/                  # index, about, intern, legacy, projects/
└── styles/global.css       # Tailwind v4 + design tokens
devlog/                     # dated build notes
```

## Add a project

Create `src/content/projects/<slug>.md`:

```yaml
---
title: "Project Title"
year: "2026"
role: "Designer / Programmer"
summary: "One-paragraph elevator summary."
depth: "deep"          # "deep" -> own page; "light" -> modal
tags: ["Designer", "Programmer"]
order: 30              # lower = earlier in grid
hidden: false
---

Long-form case study below the frontmatter (only used when depth: deep).
```

Role-filter tags: `Designer`, `Programmer`, `Writer`, `Director`, `Interaction`.

## Deploy

- New site → Cloudflare Pages on `hiddenblade.net` (build: `npm run build`, output: `dist`).
- Old WordPress blog → frozen at `archive.hiddenblade.net`.

See [devlog/](devlog/) for build history.
