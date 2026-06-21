# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project Overview

Personal working notebook and job-hunt instrument built with **Astro 5** — a static site generator with typography-first design. Mission: clear, direct writing across engineering projects, technical posts, reference sheets, notes, and essays.

## Commands

```bash
npm ci          # Clean install (prefer over npm install)
npm run dev     # Dev server at localhost:4321
npm run build   # Production build to ./dist/
npm run preview # Preview the build locally
```

## Architecture

### Content Collections (`src/content/`)

Six collections defined in `src/content/config.ts` (the schema source of truth):

- **essays/** — Longer essays (formerly `thoughts/`)
- **notes/** — Short notes (≤400 words)
- **cheat-sheets/** — Reference sheets
- **logs/** — Project logs
- **technical/** — Technical posts
- **projects/** — Project data (data collection, JSON — not content)

All post collections share a `kind` frontmatter field: `project-log` (logs/), `technical` (technical/), `cheat-sheet` (cheat-sheets/), `note` (notes/), `essay` (essays/).

The `projects` data collection schema: `name`, `blurb`, `status` (live/in-progress/archived), `stack[]`, `links[]`, `featured`, `order?`.

### Routes

- `/` — Homepage: hero, project cards, post sections
- `/about` — Two-column about grid
- `/archive` — Filtered post list
- `/posts/[slug]` — Individual post page
- `/posts` — Redirects to `/archive`
- `/feed.xml` — RSS feed

### Key Files

- `src/layouts/BaseLayout.astro` — Shared layout with skip-to-content, Nav, footer
- `src/components/Nav.astro` — Sticky nav with fox mark, brand, links
- `src/components/PostRow.astro` — Post list row; variants: `home` (3-col), `archive` (4-col)
- `src/components/ProjectCard.astro` — Project card with status pill, stack chips, links
- `src/components/Eyebrow.astro` — Mono uppercase section label
- `src/components/Callout.astro` — Flat-style callouts (paper-2 bg, ink-200 border)
- `src/components/SectionBreak.astro` — Section dividers
- `src/components/ReadingProgress.astro` — 2px progress bar, fox-ink 60% opacity, sticky top 56px
- `src/pages/feed.xml.ts` — RSS generation
- `src/styles/global.css` — Typography-first base styles, CSS custom properties
- `tailwind.config.js` — Custom color system (ink/paper/fox scales) + typography scale

## Design System

### Colors

- `--paper: #faf9f6`, `--paper-2: #f3f1ec`
- `--fox: #d0342c`, `--fox-ink: #8a221c`
- Ink scale: 900→50 (see `global.css`)

### Typography Scale

- Body: 17px / line-height 1.6
- Post body: 17.5px / line-height 1.65
- Home H1: 50px / 1.05 / weight 700
- Post/About H1: 44px / 1.08 / weight 700
- H2: 28px / 1.22 / weight 700 — no left border
- H3: 20px / 1.3 / weight 600 — no left border
- Eyebrow: 11.5–12px mono / .14–.16em tracking / uppercase / ink-400

### Layout Containers

- `.layout-home`: 920px max-width, 32px padding
- `.layout-post`: 720px max-width, 32px padding

## Conventions

- **MDX components**: `Callout`, `SectionBreak`, and `Eyebrow` are auto-available in MDX — no import required.
- **Path aliases**: `tsconfig.json` defines `@/*` → `src/*`. Use in imports: `import BaseLayout from "@/layouts/BaseLayout.astro"`.
- **Content queries**: Always filter to published content:
  ```typescript
  const posts = await getCollection('essays', ({ data }) => data.status === 'published');
  ```
- **Markdown plugins** (in `astro.config.mjs`):
  - Remark: `remarkGfm`, `remarkSmartypants`, `remarkFootnotes` (inline notes enabled)
  - Rehype: `rehypeSlug`, `rehypeAutolinkHeadings` (wrap behavior, `.heading-anchor` class)
- **Reading time**: Auto-calculated at build time via `getReadingTime()` from `@/utils/get-reading-time` (200 wpm; ignores code blocks, markdown, HTML; rounds up, min 1 min). Display with `formatReadingTime()` from `@/utils/reading-time`. Frontmatter `readingTime` overrides the auto value.

### Content Frontmatter Template

All fields are defined in `src/content/config.ts` (source of truth). Required fields and the `date` vs `updated` split vary by collection — see the inline notes there.

```yaml
---
title: "Your Title"             # required
dek: "Short description"        # required for essay & technical; optional otherwise
date: 2026-05-14                # required (cheat-sheets use `updated` instead of `date`)
kind: "technical"               # project-log | technical | cheat-sheet | note | essay
tags: ["tag1", "tag2"]          # optional — default: []
status: "published"             # draft (default) | published
openness: "confident"           # provisional (default) | confident — epistemic status
series: "optional-series-slug"  # optional — groups related posts
updated: 2026-05-20             # optional (required for cheat-sheets)
readingTime: 6                  # optional — overrides build-time auto-calculation
---
```

## Accessibility Requirements

Must-have patterns:

- Skip-to-content link (`.skip-to-content`, jumps to `#main-content`)
- ARIA landmarks on header/nav/main/footer
- Visible `:focus-visible` styles (Fox Red outline)
- Callouts use semantic ARIA roles: `role="note"`, `role="complementary"`, `role="alert"`
- Respect `prefers-reduced-motion`

All text meets WCAG AA contrast (4.5:1 body, 3:1 large text).

## Testing Changes

- After edits to `tailwind.config.js`, verify in the browser with the dev server running.
- Check responsive behavior at narrow widths.
- Test keyboard navigation: Tab through skip link → nav → main content.

## Brand & Voice

Red fox head mark. Design favors visual calm and directness. Typography is clean with generous whitespace. Never center long text — always left-align with proper rag.
