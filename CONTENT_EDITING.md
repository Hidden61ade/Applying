# Portfolio content editing

The repository root is both the Astro project and the Obsidian vault. All authored project content remains Markdown.

## Open and edit

1. In Obsidian, choose **Open folder as vault** and select this repository.
2. Edit project notes in `src/content/projects/` using Live Preview and Properties.
3. In VS Code, use the Front Matter panel for the project dashboard, metadata forms, snippets, and site preview.
4. Start the live website with `npm.cmd run dev`.

## Media folders

```text
public/
├── media/
│   ├── _inbox/                       # new Obsidian / Front Matter pastes
│   └── projects/<project-slug>/
│       ├── images/
│       └── videos/
└── playables/<project-slug>/         # complete H5/WebGL export, including index.html
```

Drag or paste a file into a note. Obsidian and Front Matter initially store it in `public/media/_inbox/`. Move it inside Obsidian's file explorer to the matching project folder; Obsidian updates Markdown links automatically.

Paths beginning with `public/` are intentionally accepted in Markdown so that Obsidian can resolve local files. Astro removes that prefix when rendering the website.

## Images

Use ordinary Markdown:

```md
![System diagram](public/media/projects/heart-keys/images/system-diagram.png)
```

## Videos

Use the **Portfolio video** Front Matter snippet, or write:

```md
![Gameplay trailer](public/media/projects/heart-keys/videos/trailer.mp4 "poster=public/media/projects/heart-keys/images/trailer-poster.jpg")
```

The poster portion is optional. Supported video formats are `.mp4`, `.webm`, `.ogv`, and `.mov`.

## H5 / WebGL games

Copy the complete exported build into its project folder so that `index.html` remains beside all generated scripts and assets. Then use the **Playable H5 build** snippet:

```md
[Play the browser build](public/playables/heart-keys/index.html "playable")
```

The website shows a click-to-load frame and keeps a new-window fallback link. External HTTPS URLs such as itch.io embeds are also accepted.

## Before publishing

Run:

```powershell
npm.cmd run build
```

Publishing remains a separate explicit step.
