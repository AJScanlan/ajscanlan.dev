# Copilot Instructions for ajscanlan.dev

## Project Overview
Personal blog and digital garden built with **Astro 5** — static site generator focused on typography-first design with minimal aesthetic. Mission: clear, humble, intellectually playful writing with magazine-grade composition.

## Architecture

### Content Collections (src/content/)
Four distinct content types defined in `src/content/config.ts`:
- **thoughts/** — "On…" essays (800-1600 words, requires `dek` field)
- **notes/** — Field notes (≤400 words, timestamped)
- **cheat-sheets/** — Opinionated summaries (uses `updated` instead of `date`)
- **logs/** — Project logs (UPLEX, etc.)
- **drafts/** — WIP content (excluded from builds)

All collections share `sharedFields` schema: `title`, `dek?`, `tags[]`, `series?`, `readingTime?`, `status`, `openness`, `updated?`

### URL Convention
All content types route through `/posts/[slug]/` — the dynamic route in `src/pages/posts/[slug].astro` currently only handles `thoughts` collection but should be expanded to handle all published content from notes, cheat-sheets, and logs collections.

### Key Files
- `src/layouts/BaseLayout.astro` — Shared layout with skip-to-content, header with Fox logo, footer
- `src/components/Callout.astro` — Three variants (note, tip, warn) with ARIA roles
- `src/pages/feed.xml.ts` — RSS generation (currently thoughts-only)
- `src/styles/global.css` — Typography-first base styles with accessibility patterns
- `tailwind.config.js` — Custom color system (ink/paper/fox scales) + typography scale

## Design System

### Colors
- **Ink** (50-900): Warm blacks for text, `ink-700` default body, `ink-800` headings
- **Paper** (50-200): Background scale, `paper-100` primary background  
- **Fox** (#D0342C): Primary brand accent, used sparingly for links/focus states
- **Functional**: green (#1F7A5C), amber (#D97706), red (#DC2626)

### Typography Scale
- Body: 18px (1.125rem), line-height 1.7 (1.75 on mobile)
- Heading scale: 1.25 ratio (20/25/31/39/49px)
- Max-width: 70ch default (`max-w-prose`), 60ch narrow, 75ch wide
- Container classes: `.container-narrow` (max-w-3xl), `.container-wide` (max-w-5xl)

### Spacing System
Rhythm units based on 4px increments: `rhythm-1` (4px), `rhythm-2` (8px), `rhythm-3` (12px), `rhythm-4` (16px), `rhythm-6` (24px), `rhythm-8` (32px), `rhythm-12` (48px), `rhythm-16` (64px)

## Conventions

### MDX Components
Import components at top of MDX files:
```mdx
import Callout from "@/components/Callout.astro";

<Callout type="tip" title="Custom title">
Content here
</Callout>
```

### Path Aliases
`tsconfig.json` defines `@/*` → `src/*` — use in imports: `import BaseLayout from "@/layouts/BaseLayout.astro"`

### Content Queries
Always filter published content:
```typescript
const posts = await getCollection('thoughts', ({ data }) => data.status === 'published');
```

**Draft workflow**: Drafts should be visible in development (`npm run dev`) but excluded from production builds. Use `import.meta.env.PROD` to conditionally filter drafts in `getStaticPaths()` and collection queries.

### Markdown Plugins
Configured in `astro.config.mjs`:
- **Remark**: `remarkGfm`, `remarkSmartypants`, `remarkFootnotes` (inline notes enabled)
- **Rehype**: `rehypeSlug`, `rehypeAutolinkHeadings` (wrap behavior, `.heading-anchor` class)

### Reading Time Calculation
Reading time is **automatically calculated** using the `getReadingTime()` utility at build time:
- Default: 200 words per minute
- Ignores code blocks, markdown syntax, and HTML tags
- Rounds up to nearest minute (minimum 1 minute)
- Can be manually overridden in frontmatter if needed
- Calculated from the raw markdown body of each post
- Use `formatReadingTime()` utility from `@/utils/reading-time` to display

## Accessibility Requirements

### Must-Have Patterns
- Skip-to-content link (`.skip-to-content`, jumps to `#main-content`)
- ARIA landmarks on header/nav/main/footer with roles
- Visible `:focus-visible` styles (3px Fox Red outline, 2px offset)
- Callouts use semantic ARIA roles: `role="note"`, `role="complementary"`, `role="alert"`
- Respect `prefers-reduced-motion` (global styles in `global.css`)

### Contrast Standards
All text meets WCAG AA (4.5:1 for body, 3:1 for large text). Callout borders strengthened in dark mode for visibility. See `ACCESSIBILITY_AUDIT.md` for tested ratios.

## Development Workflow

### Commands
```bash
npm ci              # Clean install (prefer over npm install)
npm run dev         # Dev server at localhost:4321
npm run build       # Production build to ./dist/
npm run preview     # Preview build locally
```

### Content Frontmatter Template
```yaml
---
title: "Your Title"
dek: "Short description (required for thoughts)"
date: 2025-10-27
updated: 2025-10-27  # Optional
tags: ["tag1", "tag2"]
series: "Series Name"  # Optional
readingTime: 6  # Minutes, optional - auto-calculated if omitted
status: "published"  # or "draft"
openness: "provisional"  # or "confident"
---
```

### Testing Changes
- After edits to `tailwind.config.js`, verify in browser with dev server running
- Check responsive behavior at narrow widths (line-height increases < 640px)
- Test keyboard navigation: Tab through skip link → nav → main content
- Verify dark mode: system preference toggle should work automatically

## Current Limitations & TODOs

- **Dynamic routes**: ~~Only `thoughts` collection renders at `/posts/[slug]/`~~ Now handles all content types (notes, cheat-sheets, and logs)
- **RSS feed**: ~~Only includes thoughts~~ Now includes all content types (notes, cheat-sheets, and logs)
- **Draft exclusion**: Drafts visible in dev but need conditional filtering in production using `import.meta.env.PROD`
- **No search**: Static site with no search functionality yet

See `TODO.md` for full task list prioritized by impact.

## Brand & Voice

Red fox head mark represents smart, alert, kind minimalism. Design favors visual calm, empathy & trust, layered pedagogy ("onion"), structured provisionalism. Typography is magazine-grade with generous whitespace. Never center long text — always left-align with proper rag.
