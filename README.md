# ajscanlan.dev

Personal working notebook — engineering projects, technical writing, and reference material.

**Mission:** A job-hunt instrument and public record of work. Clear, direct writing across project logs, technical deep-dives, cheat-sheets, notes, and essays.

**Principles:** Clarity over flair · Visual calm · Accessibility by default.

## Brand

Abstract **red fox head** (profile) as site mark. Single accent red (#D0342C / fox-ink #8A221C) with neutral ink/paper palette.

## Project Structure

```text
/
├── public/
│   ├── icons/           # Fox mark variants + favicon
│   ├── images/          # Post images & assets
│   └── CNAME            # Custom domain config
├── src/
│   ├── components/
│   │   ├── Nav.astro             # Sticky nav with fox mark, brand, links
│   │   ├── PostRow.astro         # Post list row (home 3-col / archive 4-col)
│   │   ├── ProjectCard.astro     # Project card with status pill, stack chips, links
│   │   ├── Eyebrow.astro         # Mono uppercase section label
│   │   ├── Callout.astro         # Flat-style info/warn/quote callouts
│   │   ├── SectionBreak.astro    # Section dividers
│   │   └── ReadingProgress.astro # Scroll progress indicator
│   ├── utils/
│   │   ├── reading-time.ts     # Word count + reading time logic
│   │   └── get-reading-time.ts # Reading time calculation wrapper
│   ├── content/
│   │   ├── config.ts           # Content collections schema
│   │   ├── essays/             # Longer essays (formerly thoughts/)
│   │   ├── notes/              # Short notes (≤400 words)
│   │   ├── cheat-sheets/       # Reference sheets
│   │   ├── logs/               # Project logs
│   │   ├── technical/          # Technical posts
│   │   └── projects/           # Project data (JSON, data collection)
│   ├── layouts/
│   │   └── BaseLayout.astro    # Shared layout + typography
│   ├── pages/
│   │   ├── index.astro         # Homepage (hero + project cards + post sections)
│   │   ├── about.astro         # Two-column about grid
│   │   ├── archive.astro       # Filtered post list
│   │   ├── feed.xml.ts         # RSS feed
│   │   └── posts/
│   │       └── [slug].astro    # Dynamic post pages
│   └── styles/
│       └── global.css          # Typography-first base styles
├── astro.config.mjs             # Astro + plugins config
├── tailwind.config.js           # Custom palette + utilities
└── tsconfig.json
```

## Content Types

Each post has a `kind` frontmatter field that identifies its content type:

- **`project-log`** — Project logs (`logs/` collection)
- **`technical`** — Technical posts (`technical/` collection)
- **`cheat-sheet`** — Reference sheets (`cheat-sheets/` collection)
- **`note`** — Short notes (`notes/` collection)
- **`essay`** — Longer essays (`essays/` collection)

The `projects` collection is a data collection (JSON) with schema: `name`, `blurb`, `status` (live/in-progress/archived), `stack[]`, `links[]`, `featured`, `order?`.

### Routes

- `/` — Homepage: hero, project cards, post sections
- `/about` — Two-column about grid
- `/archive` — Filtered post list (was `/posts/`)
- `/posts/[slug]` — Individual post page
- `/posts` — Redirects to `/archive`
- `/feed.xml` — RSS feed

## Commands

All commands run from the project root:

| Command           | Action                                          |
| :---------------- | :---------------------------------------------- |
| `npm ci`          | Install dependencies (clean install)             |
| `npm run dev`     | Start dev server at `localhost:4321`             |
| `npm run build`   | Build production site to `./dist/`               |
| `npm run preview` | Preview build locally before deploying           |

## Tech Stack

- **Framework:** Astro 5 (static site generation)
- **Styling:** Tailwind CSS 3 + custom typography utilities
- **Content:** Markdown/MDX with content collections
- **Markdown plugins:**
  - `remark-gfm` — GitHub Flavored Markdown
  - `remark-smartypants` — Smart quotes & dashes
  - `remark-footnotes` — Inline and reference footnotes
  - `rehype-slug` — Auto-generate heading IDs
  - `rehype-autolink-headings` — Linkable headings
- **Integrations:**
  - `@astrojs/sitemap` — Auto-generate sitemap.xml
  - `@astrojs/rss` — RSS feed generation
  - `@astrojs/mdx` — Enhanced Markdown with components

## Deployment

Deploying to GitHub Pages with custom domain `ajscanlan.dev`. Automated via GitHub Actions (`.github/workflows/deploy.yml`) — pushes to `main` trigger a build and deploy.

## Design System

### Design Tokens
- `--paper: #faf9f6`, `--paper-2: #f3f1ec`
- `--fox: #d0342c`, `--fox-ink: #8a221c`
- Ink scale: 900→50 (see `global.css`)

### Typography
- Body: 17px / 1.6
- Post body: 17.5px / 1.65
- Home H1: 50px / 1.05 / weight 700
- Post/About H1: 44px / 1.08 / weight 700
- H2: 28px / 1.22 / weight 700
- H3: 20px / 1.3 / weight 600
- Eyebrow: 11.5–12px mono / .14–.16em tracking / uppercase / ink-400

### Layout Containers
- `.layout-home`: 920px max-width, 32px padding
- `.layout-post`: 720px max-width, 32px padding

### Accessibility
- AA contrast minimum
- Visible keyboard focus
- Skip-to-content link
- Semantic HTML with proper landmarks

## References

- Full design brief: `.github/copilot-instructions.md`
- Task tracking: `TODO.md`
- Change history: `CHANGELOG.md`
- Accessibility notes: `ACCESSIBILITY_AUDIT.md`

## Related Sites

- **uplex.network** — Technical docs for UPLEX (planned)
- **uplex.foundation** — Governance & policy docs (planned)
