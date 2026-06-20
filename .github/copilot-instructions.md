# Copilot Instructions for ajscanlan.dev

## Project Overview
Personal working notebook and job-hunt instrument built with **Astro 5** — static site generator with typography-first design. Mission: clear, direct writing across engineering projects, technical posts, reference sheets, notes, and essays.

## Architecture

### Content Collections (src/content/)
Six collections defined in `src/content/config.ts`:
- **essays/** — Longer essays (formerly `thoughts/`)
- **notes/** — Short notes (≤400 words)
- **cheat-sheets/** — Reference sheets
- **logs/** — Project logs
- **technical/** — Technical posts
- **projects/** — Project data (data collection, JSON)

All post collections share a `kind` frontmatter field:
- `project-log` — entries in `logs/`
- `technical` — entries in `technical/`
- `cheat-sheet` — entries in `cheat-sheets/`
- `note` — entries in `notes/`
- `essay` — entries in `essays/`

The `projects` collection is a data type (not content). Schema: `name`, `blurb`, `status` (live/in-progress/archived), `stack[]`, `links[]`, `featured`, `order?`.

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
- `src/components/PostRow.astro` — Post list row; variants: `home` (3-col) and `archive` (4-col)
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

### MDX Components
`Callout`, `SectionBreak`, and `Eyebrow` are auto-available in MDX. No import required.

### Path Aliases
`tsconfig.json` defines `@/*` → `src/*` — use in imports: `import BaseLayout from "@/layouts/BaseLayout.astro"`

### Content Queries
Always filter published content:
```typescript
const posts = await getCollection('essays', ({ data }) => data.status === 'published');
```

### Markdown Plugins
Configured in `astro.config.mjs`:
- **Remark**: `remarkGfm`, `remarkSmartypants`, `remarkFootnotes` (inline notes enabled)
- **Rehype**: `rehypeSlug`, `rehypeAutolinkHeadings` (wrap behavior, `.heading-anchor` class)

### Reading Time Calculation
Reading time is **automatically calculated** using the `getReadingTime()` utility at build time:
- Default: 200 words per minute
- Ignores code blocks, markdown syntax, and HTML tags
- Rounds up to nearest minute (minimum 1 minute)
- Use `formatReadingTime()` utility from `@/utils/reading-time` to display

### Content Frontmatter Template
All fields are defined in `src/content/config.ts` (the source of truth). Required fields and the `date` vs `updated` split vary by collection — see the inline notes.
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

### Must-Have Patterns
- Skip-to-content link (`.skip-to-content`, jumps to `#main-content`)
- ARIA landmarks on header/nav/main/footer
- Visible `:focus-visible` styles (Fox Red outline)
- Callouts use semantic ARIA roles: `role="note"`, `role="complementary"`, `role="alert"`
- Respect `prefers-reduced-motion`

### Contrast Standards
All text meets WCAG AA (4.5:1 for body, 3:1 for large text).

## Development Workflow

### Commands
```bash
npm ci              # Clean install (prefer over npm install)
npm run dev         # Dev server at localhost:4321
npm run build       # Production build to ./dist/
npm run preview     # Preview build locally
```

### Testing Changes
- After edits to `tailwind.config.js`, verify in browser with dev server running
- Check responsive behavior at narrow widths
- Test keyboard navigation: Tab through skip link → nav → main content

## Brand & Voice
Red fox head mark. Design favors visual calm and directness. Typography is clean with generous whitespace. Never center long text — always left-align with proper rag.
