# Blog Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign ajscanlan.dev from a literary blog to a job-hunt instrument with an "Engineer's Notebook" aesthetic — updated design tokens, new content collections, new components, and fully rewritten pages.

**Architecture:** Single-pass full implementation. Foundation (tokens/CSS) first, then content schema, then components, then pages, then docs. Each task ends with `npm run build` to catch regressions early.

**Tech Stack:** Astro 5, Tailwind CSS 3, TypeScript, MDX, `@tailwindcss/typography`

---

## File Map

**Create:**
- `src/components/Nav.astro`
- `src/components/PostRow.astro`
- `src/components/ProjectCard.astro`
- `src/components/Eyebrow.astro`
- `src/content/technical/placeholder-technical-post.mdx`
- `src/content/projects/ajscanlan-dev.json`
- `src/content/projects/placeholder-project.json`
- `src/pages/archive.astro`
- `docs/superpowers/specs/2026-05-12-blog-redesign-design.md`

**Modify:**
- `tailwind.config.js` — update color tokens and type scale
- `src/styles/global.css` — remove H2/H3 borders, add custom props, add layout utilities
- `src/layouts/BaseLayout.astro` — add Google Fonts, swap to Nav component, remove main width constraint
- `src/content/config.ts` — add `kind`, rename `thoughts`→`essays`, add `technical`/`projects` schemas
- `src/utils/get-reading-time.ts` — update collection union type
- `src/content/thoughts/on-rivers-and-change.mdx` → move to `src/content/essays/` + add `kind`
- `src/content/notes/field-note-on-attention.mdx` — add `kind`
- `src/content/cheat-sheets/thinking-fast-and-slow.mdx` — add `kind`
- `src/content/logs/ajscanlan-dev-phase-0.mdx` — add `kind`
- `src/components/Callout.astro` — restyle
- `src/components/SectionBreak.astro` — update `dots` variant
- `src/components/ReadingProgress.astro` — 2px, fox-ink at .6 opacity
- `src/pages/index.astro` — full rewrite
- `src/pages/about.astro` — full rewrite (scaffold)
- `src/pages/posts/[slug].astro` — new meta row, serif dek, updated collections
- `astro.config.mjs` — add `/posts/` → `/archive/` redirect
- `README.md`, `COMPONENTS.md`, `TYPOGRAPHY_AUDIT.md`, `.github/copilot-instructions.md`, `CHANGELOG.md`

---

### Task 1: Design Tokens — Tailwind config, global CSS, Google Fonts, gitignore

**Files:**
- Modify: `tailwind.config.js`
- Modify: `src/styles/global.css`
- Modify: `src/layouts/BaseLayout.astro`
- Modify: `.gitignore`

- [ ] **Step 1: Update color tokens in `tailwind.config.js`**

In the `colors` section, make these three changes:

```js
// paper scale — warmer backgrounds
paper: {
    50: '#fcfcfc',
    100: '#faf9f6',   // was '#f7f7f8'
    200: '#f3f1ec',   // was '#f0f0f1'
},

// fox scale — add 'ink' entry after existing scale entries
fox: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#d0342c',
    600: '#b82a23',
    700: '#9f221b',
    800: '#7f1d16',
    900: '#651710',
    ink: '#8a221c',   // ADD: text-grade burgundy
},
```

- [ ] **Step 2: Update type scale in `tailwind.config.js`**

In the `fontSize` section, replace the three entries below:

```js
fontSize: {
    base: ['1.0625rem', { lineHeight: '1.6' }],   // 17px  (was 1.125rem = 18px)
    lg:   ['1.25rem',   { lineHeight: '1.65' }],   // 20px  (unchanged)

    'heading-sm':  ['1.25rem',   { lineHeight: '1.6'  }],  // 20px (unchanged)
    'heading-md':  ['1.5625rem', { lineHeight: '1.5'  }],  // 25px (unchanged)
    'heading-lg':  ['1.25rem',   { lineHeight: '1.3'  }],  // 20px (was 1.9375rem = 31px)
    'heading-xl':  ['1.75rem',   { lineHeight: '1.22' }],  // 28px (was 2.4375rem = 39px)
    'heading-2xl': ['3.0625rem', { lineHeight: '1.2'  }],  // 49px (unchanged)
},
```

- [ ] **Step 3: Update typography plugin h2/h3 in `tailwind.config.js`**

In the `typography.DEFAULT.css` block, replace h2 and h3:

```js
h2: {
    fontSize: '1.75rem',       // 28px
    lineHeight: '1.22',
    letterSpacing: '-0.015em',
    fontWeight: '700',
    marginTop: '3.5rem',
    marginBottom: '0.75rem',
    paddingLeft: '0',
    borderLeftWidth: '0',
},
h3: {
    fontSize: '1.25rem',       // 20px
    lineHeight: '1.3',
    letterSpacing: '-0.005em',
    fontWeight: '600',
    marginTop: '2rem',
    marginBottom: '0.5rem',
    paddingLeft: '0',
    borderLeftWidth: '0',
},
```

Also update the `base.css.fontSize` entry in typography DEFAULT:
```js
fontSize: '1.0625rem',   // 17px (was 1.125rem)
```

- [ ] **Step 4: Update `src/styles/global.css`**

**4a.** At the top of the file, before `@tailwind base;`, add:

```css
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');
```

**4b.** Replace the `:root { color-scheme: light dark; }` block with:

```css
:root {
    color-scheme: light dark;
    /* Design tokens for use in component styles */
    --ink-900: #0b0b0e;
    --ink-800: #0f1011;
    --ink-700: #1a1b1d;
    --ink-600: #2d2e31;
    --ink-500: #44464a;
    --ink-400: #6d6f73;
    --ink-300: #a0a2a6;
    --ink-200: #c8c9cb;
    --ink-100: #e8e8e9;
    --ink-50:  #f7f7f8;
    --paper:   #faf9f6;
    --paper-2: #f3f1ec;
    --fox:     #d0342c;
    --fox-ink: #8a221c;
}

::selection {
    background: rgba(208, 52, 44, 0.18);
    color: var(--ink-900);
}
```

**4c.** Update the `body` font-size from `1.125rem` to `1.0625rem`:

```css
body {
    @apply bg-paper-100 text-ink-700 dark:bg-ink-900 dark:text-ink-100 antialiased;
    font-size: 1.0625rem;  /* 17px */
    line-height: 1.6;

    @media (max-width: 640px) {
        line-height: 1.65;
    }
}
```

**4d.** Replace the h1 through h3 blocks (lines 115–149 in current file):

```css
h1 {
    @apply text-ink-800 dark:text-ink-50;
    font-size: 3.0625rem;
    line-height: 1.2;
    font-weight: 800;
    letter-spacing: -0.02em;
    margin-top: 0;
    margin-bottom: 1.5rem;
}

/* h2: clean — no border */
h2 {
    @apply text-ink-800 dark:text-ink-50;
    font-size: 1.75rem;    /* 28px */
    line-height: 1.22;
    font-weight: 700;
    letter-spacing: -0.015em;
    margin-top: 3.5rem;
    margin-bottom: 0.75rem;
    padding-left: 0;
    border: 0;
}

/* h3: clean — no border */
h3 {
    @apply text-ink-800 dark:text-ink-100;
    font-size: 1.25rem;    /* 20px */
    line-height: 1.3;
    font-weight: 600;
    letter-spacing: -0.005em;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
    padding-left: 0;
    border: 0;
}
```

**4e.** Remove the dark-mode border rule (was lines ~182–185):

```css
/* DELETE this block entirely: */
/* .dark h2, .dark h3 { border-left-color: #f87171; } */
```

**4f.** Add layout utility classes at the end of the `/* ===== LAYOUT UTILITIES ===== */` section:

```css
/* Page-level layout containers (new design) */
.layout-home {
    max-width: 920px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 32px;
    padding-right: 32px;
}

.layout-post {
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 32px;
    padding-right: 32px;
}

@media (max-width: 640px) {
    .layout-home,
    .layout-post {
        padding-left: 20px;
        padding-right: 20px;
    }
}
```

- [ ] **Step 5: Add `.superpowers/` to `.gitignore`**

Append to `.gitignore`:
```
# brainstorming / visual companion sessions
.superpowers/
```

- [ ] **Step 6: Verify build passes**

```bash
cd /Users/aj/ajscanlan.dev && npm run build
```

Expected: Build completes without TypeScript errors or Astro compilation failures.

- [ ] **Step 7: Commit**

```bash
git add tailwind.config.js src/styles/global.css src/layouts/BaseLayout.astro .gitignore
git commit -m "feat: update design tokens, remove H2/H3 borders, add CSS custom properties"
```

---

### Task 2: Content Schema

**Files:**
- Modify: `src/content/config.ts`

- [ ] **Step 1: Rewrite `src/content/config.ts`**

Replace the entire file with:

```ts
import { defineCollection, z } from 'astro:content';

const kindEnum = z.enum(['project-log', 'technical', 'cheat-sheet', 'note', 'essay']);

const sharedFields = z.object({
    title: z.string(),
    dek: z.string().min(1).optional(),
    tags: z.array(z.string()).default([]),
    series: z.string().optional(),
    readingTime: z.number().int().positive().optional(),
    status: z.enum(['draft', 'published']).default('draft'),
    openness: z.enum(['provisional', 'confident']).default('provisional'),
    updated: z.coerce.date().optional(),
});

const essays = defineCollection({
    type: 'content',
    schema: sharedFields.extend({
        dek: z.string().min(1),
        date: z.coerce.date(),
        kind: kindEnum,
    }),
});

const notes = defineCollection({
    type: 'content',
    schema: sharedFields.extend({
        date: z.coerce.date(),
        kind: kindEnum,
    }),
});

const cheatSheets = defineCollection({
    type: 'content',
    schema: sharedFields.extend({
        updated: z.coerce.date(),
        kind: kindEnum,
    }),
});

const logs = defineCollection({
    type: 'content',
    schema: sharedFields.extend({
        date: z.coerce.date(),
        kind: kindEnum,
    }),
});

const technical = defineCollection({
    type: 'content',
    schema: sharedFields.extend({
        dek: z.string().min(1),
        date: z.coerce.date(),
        kind: kindEnum,
    }),
});

const drafts = defineCollection({
    type: 'content',
    schema: sharedFields.extend({
        date: z.coerce.date().optional(),
    }),
});

const projects = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        blurb: z.string(),
        status: z.enum(['live', 'in-progress', 'archived']),
        stack: z.array(z.string()),
        links: z.array(z.object({
            label: z.string(),
            url: z.string(),
        })),
        featured: z.boolean().default(false),
        order: z.number().optional(),
    }),
});

export const collections = {
    essays,
    notes,
    'cheat-sheets': cheatSheets,
    logs,
    technical,
    drafts,
    projects,
};
```

- [ ] **Step 2: Update `src/utils/get-reading-time.ts`**

Replace the union type to include the new collections:

```ts
import type { CollectionEntry } from 'astro:content';
import { calculateReadingTime } from './reading-time';

export async function getReadingTime(
    entry: CollectionEntry<'essays'> | CollectionEntry<'notes'> | CollectionEntry<'cheat-sheets'> | CollectionEntry<'logs'> | CollectionEntry<'technical'>
): Promise<number> {
    if (entry.data.readingTime) {
        return entry.data.readingTime;
    }
    const { body } = entry;
    return calculateReadingTime(body);
}
```

- [ ] **Step 3: Run type-check**

```bash
cd /Users/aj/ajscanlan.dev && npx tsc --noEmit
```

Expected: Type errors about missing `kind` field in existing posts (these get fixed in Task 3). Any other errors must be fixed before proceeding.

- [ ] **Step 4: Commit**

```bash
git add src/content/config.ts src/utils/get-reading-time.ts
git commit -m "feat: add kind field, rename thoughts→essays, add technical and projects schemas"
```

---

### Task 3: Content Migration

**Files:**
- Rename: `src/content/thoughts/` → `src/content/essays/`
- Modify: all 4 existing post frontmatter files
- Create: `src/content/technical/placeholder-technical-post.mdx`
- Create: `src/content/projects/ajscanlan-dev.json`
- Create: `src/content/projects/placeholder-project.json`

- [ ] **Step 1: Rename `thoughts/` directory to `essays/`**

```bash
mv /Users/aj/ajscanlan.dev/src/content/thoughts /Users/aj/ajscanlan.dev/src/content/essays
```

- [ ] **Step 2: Add `kind: essay` to `src/content/essays/on-rivers-and-change.mdx`**

Add `kind: essay` to frontmatter:

```yaml
---
title: "On Rivers and Change"
dek: "Flux, entropy, and gentle stubbornness."
date: 2025-10-27
updated: 2025-10-27
tags: ["philosophy", "emergence"]
series: "Thoughts"
status: "published"
openness: "provisional"
kind: essay
---
```

- [ ] **Step 3: Add `kind: note` to `src/content/notes/field-note-on-attention.mdx`**

```yaml
---
title: "Field Note: On Attention"
date: 2025-11-12
tags: ["attention", "cognition", "practice"]
status: "published"
openness: "provisional"
kind: note
---
```

- [ ] **Step 4: Add `kind: cheat-sheet` to `src/content/cheat-sheets/thinking-fast-and-slow.mdx`**

```yaml
---
title: "Thinking, Fast and Slow — Kahneman"
updated: 2025-11-15
tags: ["psychology", "decision-making", "cognition", "books"]
status: "published"
openness: "confident"
kind: cheat-sheet
---
```

- [ ] **Step 5: Add `kind: project-log` to `src/content/logs/ajscanlan-dev-phase-0.mdx`**

```yaml
---
title: "ajscanlan.dev — Phase 0"
date: 2025-10-27
tags: ["astro", "tailwind", "personal-site", "web"]
status: "published"
openness: "provisional"
kind: project-log
---
```

- [ ] **Step 6: Create `src/content/technical/placeholder-technical-post.mdx`**

```mdx
---
title: "Placeholder Technical Post"
dek: "Replace this with a real architecture note or bug write-up."
date: 2026-01-15
tags: ["architecture"]
status: "published"
openness: "provisional"
kind: technical
---

This is a placeholder technical post. Replace the title, dek, and content with a real bug write-up, architecture note, or deep-dive.

## 01 — Context

Describe the problem or system you're writing about.

## 02 — What happened

Explain the core technical finding or decision.

## 03 — What I'd do differently

Lessons learned.
```

- [ ] **Step 7: Create `src/content/projects/ajscanlan-dev.json`**

```json
{
  "name": "ajscanlan.dev",
  "blurb": "Personal site and working notebook. Built with Astro 5, MDX, and Tailwind.",
  "status": "in-progress",
  "stack": ["Astro", "TypeScript", "Tailwind", "MDX"],
  "links": [
    { "label": "GitHub", "url": "https://github.com/AJScanlan/ajscanlan.dev" },
    { "label": "Live", "url": "https://ajscanlan.dev" }
  ],
  "featured": true,
  "order": 1
}
```

- [ ] **Step 8: Create `src/content/projects/placeholder-project.json`**

```json
{
  "name": "Project Two",
  "blurb": "Replace this with a real project blurb — what it does and why it matters.",
  "status": "live",
  "stack": ["React", "Node", "PostgreSQL"],
  "links": [
    { "label": "GitHub", "url": "https://github.com/AJScanlan" }
  ],
  "featured": true,
  "order": 2
}
```

- [ ] **Step 9: Verify build passes**

```bash
cd /Users/aj/ajscanlan.dev && npm run build
```

Expected: Clean build. No missing-kind errors (all posts now have kind field).

- [ ] **Step 10: Commit**

```bash
git add src/content/
git commit -m "feat: migrate content — rename thoughts→essays, add kind field, add placeholder technical post and project cards"
```

---

### Task 4: Nav Component

**Files:**
- Create: `src/components/Nav.astro`

- [ ] **Step 1: Create `src/components/Nav.astro`**

```astro
---
const currentPath = Astro.url.pathname;

function isActive(path: string): boolean {
    return currentPath === path || currentPath.startsWith(path + '/');
}
---

<header class="sticky top-0 z-50 border-b border-ink-100 bg-paper-100">
    <div class="layout-home flex items-center justify-between" style="height: 56px;">
        <a
            href="/"
            class="flex items-center gap-2 text-sm font-semibold text-ink-900 no-underline"
            aria-label="ajscanlan.dev home"
        >
            <img src="/icons/RED_FOX.svg" alt="" aria-hidden="true" class="w-[22px] h-[22px]" />
            ajscanlan.dev
        </a>
        <nav aria-label="Main navigation" class="flex gap-5 font-mono text-xs text-ink-500">
            <a
                href="/archive/"
                class:list={['nav-link', { 'text-fox-ink': isActive('/archive') }]}
            >
                Archive
            </a>
            <a
                href="/about/"
                class:list={['nav-link', { 'text-fox-ink': isActive('/about') }]}
            >
                About
            </a>
            <a
                href="https://github.com/AJScanlan"
                class="nav-link"
                target="_blank"
                rel="noopener noreferrer"
            >
                GitHub
            </a>
            <a href="/feed.xml" class="nav-link">RSS</a>
        </nav>
    </div>
</header>

<style>
    .nav-link {
        color: var(--ink-500);
        text-decoration: none;
        transition: color 120ms ease;
    }
    .nav-link:hover {
        color: var(--fox-ink);
    }
</style>
```

- [ ] **Step 2: Verify no build errors**

```bash
cd /Users/aj/ajscanlan.dev && npx tsc --noEmit
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Nav.astro
git commit -m "feat: add Nav component with sticky header and active state"
```

---

### Task 5: Eyebrow Component

**Files:**
- Create: `src/components/Eyebrow.astro`

- [ ] **Step 1: Create `src/components/Eyebrow.astro`**

```astro
---
interface Props {
    text: string;
    sub?: string;
}
const { text, sub } = Astro.props;
---

<div class="eyebrow-wrap">
    <p class="eyebrow">{text}</p>
    {sub && <p class="eyebrow-sub">{sub}</p>}
</div>

<style>
    .eyebrow-wrap {
        margin-bottom: 18px;
    }
    .eyebrow {
        font-family: 'JetBrains Mono', ui-monospace, monospace;
        font-size: 11.5px;
        font-weight: 500;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        color: var(--ink-400);
        margin: 0;
    }
    .eyebrow-sub {
        font-family: 'JetBrains Mono', ui-monospace, monospace;
        font-size: 11px;
        color: var(--ink-400);
        margin: 4px 0 0;
    }
</style>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Eyebrow.astro
git commit -m "feat: add Eyebrow component"
```

---

### Task 6: PostRow Component

**Files:**
- Create: `src/components/PostRow.astro`

- [ ] **Step 1: Create `src/components/PostRow.astro`**

```astro
---
interface Props {
    date: Date | undefined;
    title: string;
    dek?: string;
    kind: string;
    slug: string;
    readingTime?: number;
    variant?: 'home' | 'archive';
}

const { date, title, dek, kind, slug, readingTime, variant = 'home' } = Astro.props;

const kindLabels: Record<string, string> = {
    'project-log': 'project-log',
    'technical': 'technical',
    'cheat-sheet': 'cheat-sheet',
    'note': 'note',
    'essay': 'essay',
};

function formatDate(d: Date): string {
    return d.toISOString().slice(0, 10); // YYYY-MM-DD
}

const isProjectLog = kind === 'project-log';
---

{variant === 'home' ? (
    <a href={`/posts/${slug}/`} class="post-row post-row--home" data-kind={kind}>
        <span class="row-date">{date ? formatDate(date) : '—'}</span>
        <span class="row-title">
            {title}
            {dek && <span class="row-dek"> · {dek}</span>}
        </span>
        <span class:list={['kind-pill', isProjectLog ? 'kind-pill--project' : 'kind-pill--default']}>
            {kindLabels[kind] ?? kind}
        </span>
    </a>
) : (
    <a href={`/posts/${slug}/`} class="post-row post-row--archive" data-kind={kind}>
        <span class="row-date">{date ? formatDate(date) : '—'}</span>
        <span class:list={['row-kind', isProjectLog ? 'row-kind--project' : '']}>{kindLabels[kind] ?? kind}</span>
        <span class="row-title">{title}</span>
        <span class="row-time">{readingTime ? `${readingTime} min` : '—'}</span>
    </a>
)}

<style>
    .post-row {
        display: grid;
        padding: 14px 0;
        border-bottom: 1px solid var(--ink-100);
        align-items: baseline;
        text-decoration: none;
        color: inherit;
    }
    .post-row:first-child {
        border-top: 1px solid var(--ink-100);
    }

    .post-row--home {
        grid-template-columns: 100px 1fr 130px;
        gap: 20px;
    }

    .post-row--archive {
        grid-template-columns: 110px 110px 1fr 80px;
        gap: 16px;
    }

    .post-row:hover .row-title {
        color: var(--fox-ink);
    }
    .post-row:hover .row-title::after {
        content: ' →';
        color: var(--ink-300);
    }

    .row-date {
        font-family: 'JetBrains Mono', ui-monospace, monospace;
        font-size: 12px;
        color: var(--ink-400);
        white-space: nowrap;
    }

    .row-title {
        font-size: 15px;
        font-weight: 500;
        letter-spacing: -0.008em;
        color: var(--ink-900);
        transition: color 120ms ease;
    }

    .row-dek {
        color: var(--ink-400);
        font-weight: 400;
    }

    .kind-pill {
        font-family: 'JetBrains Mono', ui-monospace, monospace;
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        padding: 2px 7px;
        border-radius: 3px;
        border: 1px solid;
        text-align: right;
        white-space: nowrap;
        align-self: center;
    }

    .kind-pill--project {
        color: var(--fox-ink);
        background: rgba(208, 52, 44, 0.04);
        border-color: rgba(138, 34, 28, 0.25);
    }

    .kind-pill--default {
        color: var(--ink-500);
        background: transparent;
        border-color: var(--ink-100);
    }

    .row-kind {
        font-family: 'JetBrains Mono', ui-monospace, monospace;
        font-size: 10.5px;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--ink-400);
        white-space: nowrap;
    }
    .row-kind--project {
        color: var(--fox-ink);
    }

    .row-time {
        font-family: 'JetBrains Mono', ui-monospace, monospace;
        font-size: 10.5px;
        color: var(--ink-400);
        text-align: right;
    }

    @media (max-width: 640px) {
        .post-row--home {
            grid-template-columns: 1fr;
            gap: 4px;
        }
        .post-row--archive {
            grid-template-columns: 1fr;
            gap: 4px;
        }
    }
</style>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/PostRow.astro
git commit -m "feat: add PostRow component with home and archive variants"
```

---

### Task 7: ProjectCard Component

**Files:**
- Create: `src/components/ProjectCard.astro`

- [ ] **Step 1: Create `src/components/ProjectCard.astro`**

```astro
---
interface Link {
    label: string;
    url: string;
}

interface Props {
    name: string;
    blurb: string;
    status: 'live' | 'in-progress' | 'archived';
    stack: string[];
    links: Link[];
}

const { name, blurb, status, stack, links } = Astro.props;

const statusConfig = {
    'live':        { label: 'Live',        dot: '#1f7a5c', border: '#1f7a5c' },
    'in-progress': { label: 'In progress', dot: '#d0342c', border: '#d0342c' },
    'archived':    { label: 'Archived',    dot: '#a0a2a6', border: '#a0a2a6' },
};

const { label: statusLabel, dot: dotColor, border: borderColor } = statusConfig[status];
---

<div class="pcard">
    <div class="pcard-header">
        <span class="pcard-title">{name}</span>
        <span class="status-pill" style={`color: ${dotColor}; border-color: ${borderColor};`}>
            <span class="status-dot" style={`background: ${dotColor};`}></span>
            {statusLabel}
        </span>
    </div>
    <p class="pcard-blurb">{blurb}</p>
    {stack.length > 0 && (
        <div class="chips">
            {stack.map(chip => <span class="chip">{chip}</span>)}
        </div>
    )}
    {links.length > 0 && (
        <div class="pcard-links">
            {links.map(link => (
                <a
                    href={link.url}
                    class="pcard-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {link.label} →
                </a>
            ))}
        </div>
    )}
</div>

<style>
    .pcard {
        border: 1px solid var(--ink-100);
        border-radius: 10px;
        padding: 22px;
        background: var(--paper);
        transition: border-color 120ms ease, box-shadow 120ms ease, transform 120ms ease;
    }

    .pcard:hover {
        border-color: var(--ink-200);
        box-shadow: 0 12px 28px -18px rgba(11, 11, 14, 0.18);
        transform: translateY(-1px);
    }

    .pcard-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 8px;
        gap: 12px;
    }

    .pcard-title {
        font-size: 15px;
        font-weight: 600;
        letter-spacing: -0.012em;
        color: var(--ink-900);
        line-height: 1.3;
    }

    .status-pill {
        font-family: 'JetBrains Mono', ui-monospace, monospace;
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        padding: 2px 8px;
        border-radius: 3px;
        border: 1px solid;
        display: inline-flex;
        align-items: center;
        gap: 5px;
        flex-shrink: 0;
        white-space: nowrap;
    }

    .status-dot {
        width: 5px;
        height: 5px;
        border-radius: 50%;
    }

    .pcard-blurb {
        font-size: 13.5px;
        line-height: 1.5;
        color: var(--ink-500);
        margin: 0 0 14px;
    }

    .chips {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        margin-bottom: 14px;
    }

    .chip {
        font-family: 'JetBrains Mono', ui-monospace, monospace;
        font-size: 10.5px;
        padding: 2px 8px;
        border-radius: 3px;
        background: var(--paper-2);
        color: var(--ink-600);
    }

    .pcard-links {
        display: flex;
        gap: 14px;
    }

    .pcard-link {
        font-family: 'JetBrains Mono', ui-monospace, monospace;
        font-size: 11px;
        color: var(--ink-600);
        text-decoration: none;
        border-bottom: 1px solid transparent;
        transition: border-color 120ms ease, color 120ms ease;
    }

    .pcard-link:hover {
        color: var(--fox-ink);
        border-bottom-color: var(--ink-200);
    }
</style>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ProjectCard.astro
git commit -m "feat: add ProjectCard component with status pill, stack chips, hover lift"
```

---

### Task 8: Update Callout, SectionBreak, ReadingProgress

**Files:**
- Modify: `src/components/Callout.astro`
- Modify: `src/components/SectionBreak.astro`
- Modify: `src/components/ReadingProgress.astro`

- [ ] **Step 1: Rewrite `src/components/Callout.astro`**

```astro
---
type CalloutType = 'note' | 'tip' | 'warn';

interface Props {
    type?: CalloutType;
    title?: string;
}

const { type = 'note', title } = Astro.props;

const defaultTitles: Record<CalloutType, string> = {
    note: 'Note',
    tip: 'Tip',
    warn: 'Warning',
};

const roleMap: Record<CalloutType, string> = {
    note: 'note',
    tip: 'complementary',
    warn: 'alert',
};

const headingText = title ?? defaultTitles[type];
---

<div class={`callout callout--${type}`} role={roleMap[type]} aria-label={headingText}>
    <p class="callout-head">{headingText}</p>
    <div class="callout-body">
        <slot />
    </div>
</div>

<style>
    .callout {
        border: 1px solid var(--ink-200);
        border-radius: 8px;
        padding: 16px 22px;
        background: var(--paper-2);
        margin: 24px 0;
    }

    .callout-head {
        font-family: 'JetBrains Mono', ui-monospace, monospace;
        font-size: 11px;
        font-weight: 500;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: var(--ink-500);
        margin: 0 0 8px;
    }

    .callout-body {
        font-size: 14.5px;
        line-height: 1.55;
        color: var(--ink-700);
    }

    .callout-body :global(p) {
        margin: 0;
    }
    .callout-body :global(p + p) {
        margin-top: 8px;
    }
</style>
```

- [ ] **Step 2: Update the `dots` variant in `src/components/SectionBreak.astro`**

Replace only the `<style>` block and the rendered HTML for the `dots` variant. The ornaments object and interface stay the same. Replace the entire `<style>` block:

```astro
---
interface Props {
    variant?: 'diamond' | 'dots' | 'asterism';
    spacing?: 'normal' | 'tight' | 'loose';
}

const { variant = 'diamond', spacing = 'normal' } = Astro.props;

const spacingClasses = {
    tight: 'my-rhythm-8',
    normal: 'my-rhythm-12',
    loose: 'my-rhythm-16',
};
---

<div
    class={`section-break ${spacingClasses[spacing]}`}
    role="separator"
    aria-hidden="true"
>
    {variant === 'dots' ? (
        <span class="dots-wrap">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </span>
    ) : (
        <span class="ornament">
            {variant === 'diamond' ? '◆' : '⁂'}
        </span>
    )}
</div>

<style>
    .section-break {
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .ornament {
        color: var(--fox-500, #D0342C);
        font-size: 1rem;
        letter-spacing: 0.5em;
        opacity: 0.6;
    }

    .dots-wrap {
        display: flex;
        justify-content: center;
        gap: 10px;
        align-items: center;
    }

    .dot {
        width: 4px;
        height: 4px;
        border-radius: 999px;
        background: var(--ink-200);
        display: block;
    }

    :global(.dark) .ornament {
        opacity: 0.5;
    }
</style>
```

- [ ] **Step 3: Update `src/components/ReadingProgress.astro`**

Replace the `<style>` block only (keep the HTML and script identical):

```astro
<style>
    .reading-progress {
        position: sticky;
        top: 56px; /* height of Nav */
        left: 0;
        width: 0%;
        height: 2px;  /* was 3px */
        background: rgba(138, 34, 28, 0.6); /* --fox-ink at .6 opacity */
        z-index: 40;
        transition: width 0.1s ease-out;
    }

    @media (prefers-reduced-motion: reduce) {
        .reading-progress {
            transition: none;
        }
    }
</style>
```

- [ ] **Step 4: Verify build**

```bash
cd /Users/aj/ajscanlan.dev && npm run build
```

- [ ] **Step 5: Commit**

```bash
git add src/components/Callout.astro src/components/SectionBreak.astro src/components/ReadingProgress.astro
git commit -m "feat: update Callout, SectionBreak (dots variant), ReadingProgress styles"
```

---

### Task 9: Update BaseLayout

**Files:**
- Modify: `src/layouts/BaseLayout.astro`

- [ ] **Step 1: Rewrite `src/layouts/BaseLayout.astro`**

```astro
---
import Nav from '@/components/Nav.astro';

const {
    title = 'ajscanlan.dev',
    description = 'A working notebook — project logs, technical write-ups, and the occasional cheat sheet.',
    ogImage,
} = Astro.props;
---

<html lang="en" class="scroll-smooth">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/favicon.svg" />
        <title>{title}</title>
        <meta name="description" content={description} />
        {ogImage && <meta property="og:image" content={ogImage} />}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,600&display=swap" rel="stylesheet" />
        <style is:global>
            @import "/src/styles/global.css";
        </style>
    </head>
    <body>
        <a href="#main-content" class="skip-to-content">Skip to main content</a>
        <Nav />
        <main id="main-content" role="main">
            <slot />
        </main>
        <footer role="contentinfo" class="border-t border-ink-100 mt-24">
            <div class="layout-home py-8 text-xs font-mono text-ink-400 flex justify-between">
                <span>© {new Date().getFullYear()} Alexander Scanlan</span>
                <span>Built with <a href="https://astro.build" class="hover:text-fox-ink transition-colors">Astro</a> · <a href="/feed.xml" class="hover:text-fox-ink transition-colors">RSS</a></span>
            </div>
        </footer>
    </body>
</html>
```

- [ ] **Step 2: Verify build passes**

```bash
cd /Users/aj/ajscanlan.dev && npm run build
```

Expected: Build passes. (Pages may look unstyled without `layout-home`/`layout-post` wrappers — that's OK, pages get updated in subsequent tasks.)

- [ ] **Step 3: Commit**

```bash
git add src/layouts/BaseLayout.astro
git commit -m "feat: update BaseLayout — Nav component, Google Fonts, remove main width constraint"
```

---

### Task 10: Homepage Rewrite

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Rewrite `src/pages/index.astro`**

```astro
---
import BaseLayout from '@/layouts/BaseLayout.astro';
import { getCollection } from 'astro:content';
import ProjectCard from '@/components/ProjectCard.astro';
import PostRow from '@/components/PostRow.astro';
import Eyebrow from '@/components/Eyebrow.astro';
import { getReadingTime } from '@/utils/get-reading-time';
import { formatReadingTime } from '@/utils/reading-time';

// Project cards (featured only, ordered)
const projects = (await getCollection('projects'))
    .filter(p => p.data.featured)
    .sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99));

// Project logs + technical (merged, newest first, capped at 4)
const logs = await getCollection('logs', ({ data }) => data.status === 'published');
const technical = await getCollection('technical', ({ data }) => data.status === 'published');

const projectAndTech = await Promise.all(
    [...logs, ...technical]
        .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
        .slice(0, 4)
        .map(async entry => ({
            entry,
            readingTime: await getReadingTime(entry),
        }))
);

// Cheat sheets + notes (merged, newest first, capped at 4)
const cheatSheets = await getCollection('cheat-sheets', ({ data }) => data.status === 'published');
const notes = await getCollection('notes', ({ data }) => data.status === 'published');

const refs = await Promise.all(
    [
        ...cheatSheets.map(e => ({ entry: e, sortDate: e.data.updated })),
        ...notes.map(e => ({ entry: e, sortDate: e.data.date })),
    ]
        .sort((a, b) => b.sortDate.valueOf() - a.sortDate.valueOf())
        .slice(0, 4)
        .map(async ({ entry, sortDate }) => ({
            entry,
            sortDate,
            readingTime: await getReadingTime(entry),
        }))
);

// Essays (newest first, capped at 3)
const essays = await Promise.all(
    (await getCollection('essays', ({ data }) => data.status === 'published'))
        .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
        .slice(0, 3)
        .map(async entry => ({
            entry,
            readingTime: await getReadingTime(entry),
        }))
);
---

<BaseLayout
    title="ajscanlan.dev"
    description="A working notebook — project logs, technical write-ups, and the occasional cheat sheet."
>
    <div class="layout-home py-16">

        <!-- HERO -->
        <section class="mb-14">
            <p class="availability-pill">
                <span class="avail-dot"></span>
                Available for new roles · Jun 2026
                <span class="avail-sep">·</span>
                New York, NY
            </p>
            <h1 class="hero-h1">
                I <span class="accent">build</span> things,<br />
                then write down<br />
                what I learned.
            </h1>
            <p class="hero-lede">
                A working notebook — project logs, technical write-ups, and the
                occasional cheat sheet for things I keep looking up.
            </p>
            <p class="hero-links">
                <a href="mailto:hi@ajscanlan.dev">hi@ajscanlan.dev</a>
                <span class="link-sep">·</span>
                <a href="https://github.com/AJScanlan" target="_blank" rel="noopener noreferrer">GitHub</a>
                <span class="link-sep">·</span>
                <a href="/about/">more about me</a>
            </p>
        </section>

        <!-- SELECTED PROJECTS -->
        {projects.length > 0 && (
            <section class="mb-14">
                <Eyebrow text="Selected projects" />
                <div class="projects-grid">
                    {projects.map(p => (
                        <ProjectCard
                            name={p.data.name}
                            blurb={p.data.blurb}
                            status={p.data.status}
                            stack={p.data.stack}
                            links={p.data.links}
                        />
                    ))}
                </div>
            </section>
        )}

        <!-- PROJECTS & TECHNICAL WRITING -->
        {projectAndTech.length > 0 && (
            <section class="mb-12">
                <div class="section-header">
                    <Eyebrow text="Projects &amp; technical writing" />
                    <a href="/archive/?type=project-log" class="see-all">see all project logs &amp; technical posts →</a>
                </div>
                <div class="post-list">
                    {projectAndTech.map(({ entry, readingTime }) => (
                        <PostRow
                            date={entry.data.date}
                            title={entry.data.title}
                            dek={entry.data.dek}
                            kind={entry.data.kind}
                            slug={entry.slug}
                            readingTime={readingTime}
                        />
                    ))}
                </div>
            </section>
        )}

        <!-- REFERENCES & CHEAT SHEETS -->
        {refs.length > 0 && (
            <section class="mb-12">
                <div class="section-header">
                    <Eyebrow text="References &amp; cheat sheets" />
                    <a href="/archive/?type=cheat-sheet" class="see-all">see all →</a>
                </div>
                <div class="post-list">
                    {refs.map(({ entry, sortDate, readingTime }) => (
                        <PostRow
                            date={sortDate}
                            title={entry.data.title}
                            dek={entry.data.dek}
                            kind={entry.data.kind}
                            slug={entry.slug}
                            readingTime={readingTime}
                        />
                    ))}
                </div>
            </section>
        )}

        <!-- ESSAYS -->
        {essays.length > 0 && (
            <section class="mb-12">
                <div class="section-header">
                    <Eyebrow text="Essays" />
                    <a href="/archive/?type=essay" class="see-all">see all essays →</a>
                </div>
                <div class="post-list">
                    {essays.map(({ entry, readingTime }) => (
                        <PostRow
                            date={entry.data.date}
                            title={entry.data.title}
                            dek={entry.data.dek}
                            kind={entry.data.kind}
                            slug={entry.slug}
                            readingTime={readingTime}
                        />
                    ))}
                </div>
            </section>
        )}

    </div>
</BaseLayout>

<style>
    /* HERO */
    .availability-pill {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-family: 'JetBrains Mono', ui-monospace, monospace;
        font-size: 11.5px;
        color: var(--ink-400);
        letter-spacing: 0.12em;
        text-transform: uppercase;
        margin-bottom: 16px;
    }
    .avail-dot {
        width: 6px; height: 6px;
        border-radius: 50%;
        background: #1f7a5c;
        flex-shrink: 0;
    }
    .avail-sep { color: var(--ink-200); }

    .hero-h1 {
        font-size: clamp(2rem, 5vw, 3.125rem); /* 50px at large viewport */
        font-weight: 700;
        letter-spacing: -0.028em;
        line-height: 1.05;
        color: var(--ink-900);
        margin: 0 0 14px;
        max-width: 17ch;
    }
    .accent { color: var(--fox-ink); }

    .hero-lede {
        font-size: 1.15625rem; /* 18.5px */
        color: var(--ink-500);
        max-width: 56ch;
        line-height: 1.6;
        margin: 0 0 18px;
    }

    .hero-links {
        font-family: 'JetBrains Mono', ui-monospace, monospace;
        font-size: 13px;
        color: var(--ink-400);
    }
    .hero-links a {
        color: var(--ink-700);
        border-bottom: 1px solid var(--ink-200);
        text-decoration: none;
        transition: color 120ms ease;
    }
    .hero-links a:hover { color: var(--fox-ink); }
    .link-sep { margin: 0 6px; color: var(--ink-200); }

    /* PROJECTS GRID */
    .projects-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
    }
    @media (max-width: 700px) {
        .projects-grid { grid-template-columns: 1fr; }
    }

    /* SECTION HEADER */
    .section-header {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        margin-bottom: 0;
    }

    .see-all {
        font-family: 'JetBrains Mono', ui-monospace, monospace;
        font-size: 12px;
        color: var(--ink-500);
        text-decoration: none;
        border-bottom: 1px dashed var(--ink-200);
        white-space: nowrap;
        transition: color 120ms ease;
    }
    .see-all:hover { color: var(--fox-ink); }
</style>
```

- [ ] **Step 2: Verify build**

```bash
cd /Users/aj/ajscanlan.dev && npm run build
```

Expected: Clean build, no type errors.

- [ ] **Step 3: Start dev server and verify visually**

```bash
npm run dev
```

Open http://localhost:4321/ and verify:
- Availability pill renders with green dot
- Hero H1 shows with fox-ink accent on the word "build"
- Project cards grid renders (2 columns)
- Post sections render with PostRow components

- [ ] **Step 4: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: rewrite homepage — hero, project cards, post sections"
```

---

### Task 11: About Page Scaffold

**Files:**
- Modify: `src/pages/about.astro`

- [ ] **Step 1: Rewrite `src/pages/about.astro`**

```astro
---
import BaseLayout from '@/layouts/BaseLayout.astro';
---

<BaseLayout
    title="About - ajscanlan.dev"
    description="Alexander Scanlan — software engineer, builder, working notebook author."
>
    <div class="layout-post py-14">

        <!-- HEADER -->
        <p class="availability-pill">
            <span class="avail-dot"></span>
            Available for new roles · Jun 2026
        </p>
        <h1 class="about-h1">
            Placeholder headline<br />goes here.
        </h1>
        <p class="about-lede">
            Replace this with your 2–3 sentence pitch. What you build, what you care about, who you're looking to work with.
        </p>

        <!-- LABEL / VALUE GRID -->
        <div class="about-grid">

            <span class="grid-label">Currently</span>
            <span class="grid-value">
                Replace with what you're working on or looking for. E.g. "Open to full-time engineering roles — infrastructure, backend, or full-stack."
            </span>

            <span class="grid-label">Background</span>
            <span class="grid-value">
                Replace with your background narrative. E.g. "Mobile background (iOS/Android), now focused on distributed systems and infrastructure."
            </span>

            <span class="grid-label">How I work</span>
            <span class="grid-value">
                Replace with your working style. E.g. "I start with the problem, not the solution. I write things down. I ship early and iterate."
            </span>

            <span class="grid-label">Stack</span>
            <span class="grid-value">
                <div class="chips">
                    <span class="chip chip--filled">TypeScript</span>
                    <span class="chip chip--filled">React</span>
                    <span class="chip chip--filled">Astro</span>
                    <span class="chip chip--muted">Python</span>
                    <span class="chip chip--muted">PostgreSQL</span>
                    <span class="chip chip--muted">Swift</span>
                </div>
            </span>

            <span class="grid-label">Reach me</span>
            <span class="grid-value reach-me">
                <a href="mailto:hi@ajscanlan.dev">hi@ajscanlan.dev</a>
                <span class="reach-sep">·</span>
                <a href="https://github.com/AJScanlan" target="_blank" rel="noopener noreferrer">GitHub</a>
                <span class="reach-sep">·</span>
                <a href="/feed.xml">RSS</a>
            </span>

            <span class="grid-label">This site</span>
            <span class="grid-value">
                Astro 5 · Tailwind CSS · MDX · Hosted on GitHub Pages.
                <a href="https://github.com/AJScanlan/ajscanlan.dev" target="_blank" rel="noopener noreferrer">Source on GitHub</a>.
            </span>

        </div>
    </div>
</BaseLayout>

<style>
    .availability-pill {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-family: 'JetBrains Mono', ui-monospace, monospace;
        font-size: 11.5px;
        color: var(--ink-400);
        letter-spacing: 0.12em;
        text-transform: uppercase;
        margin-bottom: 14px;
    }
    .avail-dot {
        width: 6px; height: 6px; border-radius: 50%;
        background: #1f7a5c; flex-shrink: 0;
    }

    .about-h1 {
        font-size: clamp(1.75rem, 4vw, 2.75rem); /* 44px at wide */
        font-weight: 700;
        letter-spacing: -0.025em;
        line-height: 1.08;
        color: var(--ink-900);
        max-width: 22ch;
        margin: 0 0 12px;
    }

    .about-lede {
        font-size: 1.1875rem; /* 19px */
        color: var(--ink-600);
        max-width: 60ch;
        line-height: 1.6;
        margin: 0 0 32px;
    }

    /* GRID */
    .about-grid {
        display: grid;
        grid-template-columns: 140px 1fr;
        gap: 0 40px;
        border-top: 1px solid var(--ink-100);
    }

    .grid-label {
        font-family: 'JetBrains Mono', ui-monospace, monospace;
        font-size: 11px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.12em;
        color: var(--ink-400);
        padding: 18px 0;
        border-bottom: 1px solid var(--ink-100);
        align-self: start;
        padding-top: 20px;
    }

    .grid-value {
        font-size: 15px;
        color: var(--ink-700);
        padding: 18px 0;
        border-bottom: 1px solid var(--ink-100);
        line-height: 1.6;
    }

    .grid-value a {
        color: var(--ink-900);
        border-bottom: 1px solid var(--ink-200);
        text-decoration: none;
        transition: color 120ms ease;
    }
    .grid-value a:hover { color: var(--fox-ink); }

    /* CHIPS */
    .chips {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
    }

    .chip {
        font-family: 'JetBrains Mono', ui-monospace, monospace;
        font-size: 11px;
        padding: 3px 9px;
        border-radius: 3px;
    }
    .chip--filled {
        background: var(--ink-900);
        color: var(--paper);
    }
    .chip--muted {
        background: var(--paper-2);
        color: var(--ink-600);
    }

    /* REACH ME */
    .reach-me {
        font-family: 'JetBrains Mono', ui-monospace, monospace;
        font-size: 12.5px;
    }
    .reach-sep { margin: 0 8px; color: var(--ink-300); }

    /* RESPONSIVE: collapse to 1 column */
    @media (max-width: 700px) {
        .about-grid {
            grid-template-columns: 1fr;
        }
        .grid-label {
            border-bottom: none;
            padding-bottom: 4px;
            padding-top: 16px;
        }
        .grid-value {
            padding-top: 0;
        }
    }
</style>
```

- [ ] **Step 2: Verify build and visual**

```bash
npm run build && npm run dev
```

Open http://localhost:4321/about/ — verify two-column grid renders, collapses on narrow viewport.

- [ ] **Step 3: Commit**

```bash
git add src/pages/about.astro
git commit -m "feat: rewrite about page as two-column label/value grid scaffold"
```

---

### Task 12: Archive Page + Redirect

**Files:**
- Create: `src/pages/archive.astro`
- Modify: `astro.config.mjs`

- [ ] **Step 1: Create `src/pages/archive.astro`**

```astro
---
import BaseLayout from '@/layouts/BaseLayout.astro';
import { getCollection } from 'astro:content';
import { getReadingTime } from '@/utils/get-reading-time';

// Gather all posts across all content collections
const logs = (await getCollection('logs', ({ data }) => data.status === 'published'))
    .map(e => ({ entry: e, sortDate: e.data.date }));
const technical = (await getCollection('technical', ({ data }) => data.status === 'published'))
    .map(e => ({ entry: e, sortDate: e.data.date }));
const notes = (await getCollection('notes', ({ data }) => data.status === 'published'))
    .map(e => ({ entry: e, sortDate: e.data.date }));
const cheatSheets = (await getCollection('cheat-sheets', ({ data }) => data.status === 'published'))
    .map(e => ({ entry: e, sortDate: e.data.updated }));
const essays = (await getCollection('essays', ({ data }) => data.status === 'published'))
    .map(e => ({ entry: e, sortDate: e.data.date }));

const allPosts = await Promise.all(
    [...logs, ...technical, ...notes, ...cheatSheets, ...essays]
        .sort((a, b) => b.sortDate.valueOf() - a.sortDate.valueOf())
        .map(async ({ entry, sortDate }) => ({
            entry,
            sortDate,
            readingTime: await getReadingTime(entry),
        }))
);

// Count per kind
const kindCounts: Record<string, number> = {};
for (const { entry } of allPosts) {
    const k = entry.data.kind ?? 'unknown';
    kindCounts[k] = (kindCounts[k] ?? 0) + 1;
}

// Group by year for rendering
type PostItem = typeof allPosts[number];
const byYear: Map<number, PostItem[]> = new Map();
for (const item of allPosts) {
    const year = item.sortDate.getFullYear();
    if (!byYear.has(year)) byYear.set(year, []);
    byYear.get(year)!.push(item);
}
const years = [...byYear.keys()].sort((a, b) => b - a);

const tabs = [
    { key: 'all',          label: 'All',           count: allPosts.length },
    { key: 'project-log',  label: 'Project logs',  count: kindCounts['project-log'] ?? 0 },
    { key: 'technical',    label: 'Technical',      count: kindCounts['technical'] ?? 0 },
    { key: 'cheat-sheet',  label: 'Cheat sheets',  count: kindCounts['cheat-sheet'] ?? 0 },
    { key: 'note',         label: 'Notes',          count: kindCounts['note'] ?? 0 },
    { key: 'essay',        label: 'Essays',         count: kindCounts['essay'] ?? 0 },
].filter(t => t.key === 'all' || t.count > 0);
---

<BaseLayout title="Archive - ajscanlan.dev" description="Every post, filterable by type.">
    <div class="layout-home py-12">

        <h1 class="archive-h1">Archive</h1>

        <!-- FILTER TABS -->
        <div class="filter-tabs" role="tablist" aria-label="Filter posts by type">
            {tabs.map(tab => (
                <button
                    class="tab"
                    role="tab"
                    data-kind={tab.key}
                    aria-selected="false"
                >
                    {tab.label} ({tab.count})
                </button>
            ))}
        </div>

        <!-- POSTS BY YEAR -->
        <div id="archive-list">
            {years.map(year => (
                <div class="year-group">
                    <div class="year-label">
                        <span>{year}</span>
                        <span class="year-rule"></span>
                    </div>
                    <div class="post-rows">
                        {byYear.get(year)!.map(({ entry, sortDate, readingTime }) => (
                            <a
                                href={`/posts/${entry.slug}/`}
                                class="archive-row"
                                data-kind={entry.data.kind ?? ''}
                            >
                                <span class="arc-date">
                                    {sortDate.toISOString().slice(0, 10)}
                                </span>
                                <span class:list={[
                                    'arc-kind',
                                    entry.data.kind === 'project-log' ? 'arc-kind--project' : ''
                                ]}>
                                    {entry.data.kind ?? '—'}
                                </span>
                                <span class="arc-title">{entry.data.title}</span>
                                <span class="arc-time">{readingTime} min</span>
                            </a>
                        ))}
                    </div>
                </div>
            ))}
        </div>

    </div>
</BaseLayout>

<script>
    // Filter tabs: read ?type= param on load, update on tab click
    const tabs = document.querySelectorAll<HTMLButtonElement>('.tab');
    const rows = document.querySelectorAll<HTMLElement>('.archive-row');
    const yearGroups = document.querySelectorAll<HTMLElement>('.year-group');

    function getActiveKind(): string {
        return new URLSearchParams(window.location.search).get('type') ?? 'all';
    }

    function applyFilter(kind: string) {
        tabs.forEach(tab => {
            const isActive = tab.dataset.kind === kind;
            tab.setAttribute('aria-selected', String(isActive));
            tab.classList.toggle('tab--active', isActive);
        });

        rows.forEach(row => {
            const show = kind === 'all' || row.dataset.kind === kind;
            row.style.display = show ? '' : 'none';
        });

        // Hide year groups that have no visible rows
        yearGroups.forEach(group => {
            const visible = [...group.querySelectorAll<HTMLElement>('.archive-row')]
                .some(r => r.style.display !== 'none');
            (group as HTMLElement).style.display = visible ? '' : 'none';
        });
    }

    // Initialize from URL
    applyFilter(getActiveKind());

    // Tab click handler
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const kind = tab.dataset.kind ?? 'all';
            const url = new URL(window.location.href);
            if (kind === 'all') {
                url.searchParams.delete('type');
            } else {
                url.searchParams.set('type', kind);
            }
            window.history.pushState({}, '', url.toString());
            applyFilter(kind);
        });
    });
</script>

<style>
    .archive-h1 {
        font-size: 2.25rem;
        font-weight: 700;
        letter-spacing: -0.02em;
        color: var(--ink-900);
        margin: 0 0 24px;
    }

    /* FILTER TABS */
    .filter-tabs {
        display: flex;
        gap: 0;
        border-bottom: 1px solid var(--ink-100);
        margin-bottom: 28px;
        overflow-x: auto;
        scrollbar-width: none;
    }
    .filter-tabs::-webkit-scrollbar { display: none; }

    .tab {
        font-family: 'JetBrains Mono', ui-monospace, monospace;
        font-size: 12.5px;
        padding: 9px 14px;
        color: var(--ink-400);
        background: none;
        border: none;
        border-bottom: 2px solid transparent;
        margin-bottom: -1px;
        cursor: pointer;
        white-space: nowrap;
        transition: color 120ms ease;
    }
    .tab:hover { color: var(--ink-700); }
    .tab--active,
    .tab[aria-selected="true"] {
        color: var(--ink-900);
        border-bottom-color: var(--ink-900);
    }

    /* YEAR GROUPS */
    .year-group { margin-bottom: 28px; }

    .year-label {
        display: flex;
        align-items: center;
        gap: 10px;
        font-family: 'JetBrains Mono', ui-monospace, monospace;
        font-size: 11px;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--ink-400);
        margin-bottom: 2px;
    }
    .year-rule {
        flex: 1;
        height: 1px;
        background: var(--ink-100);
    }

    /* ARCHIVE ROWS */
    .archive-row {
        display: grid;
        grid-template-columns: 110px 110px 1fr 70px;
        gap: 16px;
        padding: 12px 0;
        border-bottom: 1px solid var(--ink-100);
        text-decoration: none;
        color: inherit;
        align-items: baseline;
        transition: background 80ms ease;
    }
    .archive-row:first-child { border-top: 1px solid var(--ink-100); }
    .archive-row:hover { background: var(--paper-2); }

    .arc-date {
        font-family: 'JetBrains Mono', ui-monospace, monospace;
        font-size: 11px;
        color: var(--ink-400);
        white-space: nowrap;
    }

    .arc-kind {
        font-family: 'JetBrains Mono', ui-monospace, monospace;
        font-size: 10.5px;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--ink-400);
        white-space: nowrap;
    }
    .arc-kind--project { color: var(--fox-ink); }

    .arc-title {
        font-size: 15px;
        font-weight: 500;
        color: var(--ink-900);
        letter-spacing: -0.005em;
    }

    .arc-time {
        font-family: 'JetBrains Mono', ui-monospace, monospace;
        font-size: 11px;
        color: var(--ink-400);
        text-align: right;
        white-space: nowrap;
    }

    @media (max-width: 640px) {
        .archive-row {
            grid-template-columns: 100px 1fr;
            gap: 8px;
        }
        .arc-kind, .arc-time { display: none; }
    }
</style>
```

- [ ] **Step 2: Delete `src/pages/posts/index.astro`**

The existing file takes precedence over config-level redirects, so it must be removed:

```bash
rm /Users/aj/ajscanlan.dev/src/pages/posts/index.astro
```

- [ ] **Step 3: Add redirect in `astro.config.mjs`**

Add a `redirects` field to the config object:

```js
export default defineConfig({
  site: 'https://ajscanlan.dev',
  redirects: {
    '/posts/': '/archive/',
  },
  integrations: [
    // ... existing integrations unchanged
  ],
  markdown: {
    // ... existing markdown config unchanged
  },
});
```

- [ ] **Step 4: Verify build and test filtering**

```bash
npm run build && npm run dev
```

Open http://localhost:4321/archive/ — verify:
- All posts appear grouped by year
- Clicking "Project logs" tab hides non-project-log posts
- URL updates to `?type=project-log`
- Refreshing with `?type=project-log` in URL applies filter on load
- http://localhost:4321/posts/ redirects to `/archive/`

- [ ] **Step 5: Commit**

```bash
git add src/pages/archive.astro astro.config.mjs
git rm src/pages/posts/index.astro
git commit -m "feat: add archive page with filter tabs, year groupings; redirect /posts/ to /archive/"
```

---

### Task 13: Update Post Page

**Files:**
- Modify: `src/pages/posts/[slug].astro`

- [ ] **Step 1: Rewrite `src/pages/posts/[slug].astro`**

```astro
---
import BaseLayout from '@/layouts/BaseLayout.astro';
import { getEntry } from 'astro:content';
import Callout from '@/components/Callout.astro';
import ReadingProgress from '@/components/ReadingProgress.astro';
import SectionBreak from '@/components/SectionBreak.astro';
import { formatReadingTime } from '@/utils/reading-time';
import { getReadingTime } from '@/utils/get-reading-time';

export async function getStaticPaths() {
    const { getCollection } = await import('astro:content');

    const collections = ['essays', 'notes', 'cheat-sheets', 'logs', 'technical'] as const;

    const allPosts = await Promise.all(
        collections.map(async (collection) => {
            const posts = await getCollection(
                collection,
                ({ data }) => data.status === 'published',
            );
            return posts.map((post) => ({
                params: { slug: post.slug },
                props: { collection, entry: post },
            }));
        })
    );

    return allPosts.flat();
}

const { collection, entry: propsEntry } = Astro.props;
const { slug } = Astro.params;

const entry = propsEntry ?? await getEntry(collection, slug);
if (!entry) throw new Error(`Post not found: ${slug}`);

const { Content } = await entry.render();
const { data } = entry;

const readingTime = await getReadingTime(entry);

// Resolve date: logs/notes/essays/technical use `date`, cheat-sheets use `updated`
const postDate: Date | undefined =
    ('date' in data && data.date) ? data.date as Date :
    ('updated' in data && data.updated) ? data.updated as Date :
    undefined;

function formatDate(d: Date): string {
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

const isProjectLog = data.kind === 'project-log';
---

<BaseLayout
    title={`${data.title} - ajscanlan.dev`}
    description={'dek' in data ? data.dek : undefined}
>
    <ReadingProgress />

    <div class="layout-post py-12">

        <!-- META ROW -->
        <div class="meta-row">
            <a href="/archive/" class="meta-back">← all posts</a>
            {data.kind && (
                <>
                    <span class="meta-sep">·</span>
                    <span class:list={['meta-kind', isProjectLog ? 'meta-kind--project' : '']}>
                        {data.kind}
                    </span>
                </>
            )}
            {postDate && (
                <>
                    <span class="meta-sep">·</span>
                    <time>{formatDate(postDate)}</time>
                </>
            )}
            <span class="meta-sep">·</span>
            <span>{formatReadingTime(readingTime)}</span>
        </div>

        <!-- POST HEADER -->
        <h1 class="post-h1">{data.title}</h1>
        {'dek' in data && data.dek && (
            <p class="post-dek">{data.dek}</p>
        )}

        <!-- CONTENT -->
        <article class="prose dark:prose-invert prose-text max-w-prose">
            <Content components={{ Callout, SectionBreak }} />
        </article>

    </div>
</BaseLayout>

<style>
    /* META ROW */
    .meta-row {
        display: flex;
        align-items: center;
        gap: 10px;
        font-family: 'JetBrains Mono', ui-monospace, monospace;
        font-size: 12px;
        color: var(--ink-400);
        margin-bottom: 28px;
        flex-wrap: wrap;
    }

    .meta-back {
        color: var(--ink-500);
        text-decoration: none;
        border-bottom: 1px solid var(--ink-200);
        transition: color 120ms ease;
    }
    .meta-back:hover { color: var(--fox-ink); }

    .meta-sep { color: var(--ink-200); }

    .meta-kind {
        font-size: 10.5px;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        padding: 1px 7px;
        border-radius: 3px;
        border: 1px solid var(--ink-100);
        color: var(--ink-500);
        background: transparent;
    }
    .meta-kind--project {
        color: var(--fox-ink);
        background: rgba(208, 52, 44, 0.04);
        border-color: rgba(138, 34, 28, 0.25);
    }

    /* POST HEADER */
    .post-h1 {
        font-size: clamp(1.75rem, 4vw, 2.75rem); /* 44px at wide */
        font-weight: 700;
        letter-spacing: -0.025em;
        line-height: 1.08;
        color: var(--ink-900);
        margin: 0 0 14px;
    }

    .post-dek {
        font-family: ui-serif, 'Iowan Old Style', Charter, Georgia, serif;
        font-style: italic;
        font-size: 1.25rem; /* 20px */
        line-height: 1.5;
        color: var(--ink-500);
        margin: 0 0 36px;
        max-width: 60ch;
    }
</style>
```

- [ ] **Step 2: Verify build and test a post**

```bash
npm run build && npm run dev
```

Open http://localhost:4321/posts/ajscanlan-dev-phase-0/ — verify:
- Meta row shows `← all posts · project-log · Oct 27, 2025 · N min read`
- H1 renders at correct size, no red border
- No red border on H2/H3 headings in post body
- Reading progress bar is visible at top (fox-ink color, 2px)

- [ ] **Step 3: Commit**

```bash
git add src/pages/posts/[slug].astro
git commit -m "feat: update post page — meta row, serif dek, new collections, updated progress bar"
```

---

### Task 14: Docs Updates

**Files:**
- Modify: `README.md`
- Modify: `COMPONENTS.md`
- Modify: `TYPOGRAPHY_AUDIT.md`
- Modify: `.github/copilot-instructions.md`
- Modify: `CHANGELOG.md`

- [ ] **Step 1: Rewrite `README.md`**

Replace the entire file with:

```markdown
# ajscanlan.dev

A working notebook — project logs, technical write-ups, and the occasional cheat sheet for things I keep looking up.

Built with [Astro 5](https://astro.build), Tailwind CSS, and MDX.

## Content

Five post kinds, each living in its own collection:

| Kind | Directory | Notes |
|---|---|---|
| `project-log` | `src/content/logs/` | Build logs and project retrospectives |
| `technical` | `src/content/technical/` | Architecture notes, bug write-ups |
| `cheat-sheet` | `src/content/cheat-sheets/` | Reference guides, book summaries |
| `note` | `src/content/notes/` | Short field observations |
| `essay` | `src/content/essays/` | Long-form reflective writing |

All posts are MDX. Add `status: published` to frontmatter to make a post live.

## Routes

| Route | Description |
|---|---|
| `/` | Homepage — hero, project cards, posts by section |
| `/about/` | About page — two-column label/value grid |
| `/archive/` | All posts with filter tabs and year groupings |
| `/posts/[slug]/` | Individual post |
| `/feed.xml` | RSS feed |

## Development

```bash
npm install
npm run dev       # dev server at localhost:4321
npm run build     # production build to dist/
npm run preview   # preview production build
```

## Components

See [`COMPONENTS.md`](COMPONENTS.md) for component documentation.

## Design

- **Typography:** JetBrains Mono (mono), system sans, system serif (dek only)
- **Colors:** Warm neutrals (`--paper: #faf9f6`) with fox-ink (`--fox-ink: #8a221c`) accent
- **Max-widths:** 920px (home/archive), 720px (post/about)
```

- [ ] **Step 2: Rewrite `COMPONENTS.md`**

Replace the entire file with:

```markdown
# Components

## Nav

`src/components/Nav.astro`

Sticky top navigation bar. Used in `BaseLayout.astro`.

**Props:** none

**Features:**
- Active state detection via `Astro.url.pathname`
- Links: Archive, About, GitHub, RSS
- Hover: `--ink-500` → `--fox-ink` over 120ms

---

## Eyebrow

`src/components/Eyebrow.astro`

Mono uppercase section label.

**Props:**
- `text: string` — required
- `sub?: string` — optional sub-text below

---

## PostRow

`src/components/PostRow.astro`

A single post listed as a row. Used on homepage and archive.

**Props:**
- `date: Date | undefined`
- `title: string`
- `dek?: string`
- `kind: string`
- `slug: string`
- `readingTime?: number`
- `variant?: 'home' | 'archive'` — default `'home'`

**Variants:**
- `home`: 3-col grid (date / title+dek / kind-pill)
- `archive`: 4-col grid (date / kind / title / reading-time)

---

## ProjectCard

`src/components/ProjectCard.astro`

Featured project card with status pill, stack chips, and links.

**Props:**
- `name: string`
- `blurb: string`
- `status: 'live' | 'in-progress' | 'archived'`
- `stack: string[]`
- `links: { label: string; url: string }[]`

---

## Callout

`src/components/Callout.astro`

Inline callout box for reader notes, tips, and warnings.

**Props:**
- `type?: 'note' | 'tip' | 'warn'` — default `'note'`
- `title?: string` — defaults to type label

**Usage in MDX:**
```mdx
<Callout type="note" title="Reader's note">
  Content here.
</Callout>
```

---

## SectionBreak

`src/components/SectionBreak.astro`

Visual separator between sections.

**Props:**
- `variant?: 'diamond' | 'dots' | 'asterism'` — default `'diamond'`
- `spacing?: 'tight' | 'normal' | 'loose'` — default `'normal'`

**Usage in MDX:**
```mdx
<SectionBreak variant="dots" />
```

---

## ReadingProgress

`src/components/ReadingProgress.astro`

Sticky 2px reading progress bar at top of post pages. Uses `--fox-ink` at 0.6 opacity. Respects `prefers-reduced-motion`.

**Props:** none

**Usage:** Add to post page layout, inside `<BaseLayout>`.
```

- [ ] **Step 3: Update `TYPOGRAPHY_AUDIT.md`**

Find and replace the scale values section. Replace any existing scale table or description with:

```markdown
## Type Scale (current)

| Element | Size | Line height | Weight | Tracking |
|---|---|---|---|---|
| Body | 17px | 1.6 | 400 | — |
| Post body | 17.5px | 1.65 | 400 | — |
| Home H1 | 50px (clamp to 32px min) | 1.05 | 700 | -0.028em |
| Post H1 | 44px (clamp to 28px min) | 1.08 | 700 | -0.025em |
| H2 | 28px | 1.22 | 700 | -0.015em |
| H3 | 20px | 1.3 | 600 | -0.005em |
| Eyebrow | 11.5px | — | 500 | 0.15em |
| Mono meta | 11–12.5px | — | 400 | — |

No border-left on H2 or H3 (removed in redesign).
```

- [ ] **Step 4: Update `.github/copilot-instructions.md`**

Add/replace the architecture section with:

```markdown
## Content Collections

Five published content types, each in its own directory under `src/content/`:

- `logs/` — kind: `project-log`
- `technical/` — kind: `technical`
- `cheat-sheets/` — kind: `cheat-sheet`
- `notes/` — kind: `note`
- `essays/` — kind: `essay`

Project card data (not blog posts): `src/content/projects/` (type: `data`, JSON files).

All posts require `status: published` + `kind: <value>` in frontmatter to appear on the site.

## Routes

- `/` — homepage (`src/pages/index.astro`)
- `/about/` — about page (`src/pages/about.astro`)
- `/archive/` — all posts with filter tabs (`src/pages/archive.astro`)
- `/posts/[slug]/` — individual post (`src/pages/posts/[slug].astro`)
- `/posts/` → redirects to `/archive/` (configured in `astro.config.mjs`)

## Key Components

`Nav`, `PostRow`, `ProjectCard`, `Eyebrow`, `Callout`, `SectionBreak`, `ReadingProgress`
All in `src/components/`. See `COMPONENTS.md`.

## Design Tokens

CSS custom properties defined in `:root` in `src/styles/global.css`.
Tailwind color scale: `ink-*`, `paper-*`, `fox-*` (including `fox-ink`).
Layout containers: `.layout-home` (920px), `.layout-post` (720px).
```

- [ ] **Step 5: Add entry to `CHANGELOG.md`**

Prepend to the top of `CHANGELOG.md`:

```markdown
## [Unreleased] — 2026-05-12

### Changed
- Redesigned site as "Engineer's Notebook" job-hunt instrument
- Removed red `border-left` from H2/H3; new clean heading styles
- Lowered type scale: body 17px, H2 28px, H3 20px
- Warmer paper background (#faf9f6) and new `--paper-2` token (#f3f1ec)
- Renamed `thoughts/` collection → `essays/`
- Added `kind` frontmatter field to all posts (5 values: project-log, technical, cheat-sheet, note, essay)

### Added
- `technical/` content collection
- `projects/` data collection (JSON project cards)
- New components: Nav, PostRow, ProjectCard, Eyebrow
- `/archive/` page with filter tabs and year groupings
- Project cards grid on homepage with status pills and stack chips
- CSS custom properties in `:root` for all design tokens
- JetBrains Mono via Google Fonts
- `.superpowers/` to .gitignore

### Removed
- `/posts/` archive page (redirects to `/archive/`)
```

- [ ] **Step 6: Build check and commit**

```bash
cd /Users/aj/ajscanlan.dev && npm run build
git add README.md COMPONENTS.md TYPOGRAPHY_AUDIT.md .github/copilot-instructions.md CHANGELOG.md
git commit -m "docs: update README, COMPONENTS, TYPOGRAPHY_AUDIT, copilot instructions, CHANGELOG for redesign"
```

---

### Task 15: Design Doc

**Files:**
- Create: `docs/superpowers/specs/2026-05-12-blog-redesign-design.md`

- [ ] **Step 1: Create design spec doc**

```bash
mkdir -p /Users/aj/ajscanlan.dev/docs/superpowers/specs
```

Then create `docs/superpowers/specs/2026-05-12-blog-redesign-design.md` with the full design spec from the plan file at `/Users/aj/.claude/plans/we-will-be-redesigning-eager-badger.md` (the "Design Spec" section through the end of "Interactions").

- [ ] **Step 2: Final build verification**

```bash
cd /Users/aj/ajscanlan.dev && npm run build
```

Expected: Clean build, zero errors.

Manually verify each route:
- [ ] `/` — availability pill, project cards (2-col), post sections, fox-ink accent
- [ ] `/about/` — two-column grid, collapses on mobile
- [ ] `/archive/` — filter tabs work, year groupings, row hover
- [ ] `/posts/ajscanlan-dev-phase-0/` — meta row, no H2/H3 borders, progress bar
- [ ] `/posts/on-rivers-and-change/` — (moved from thoughts) still resolves
- [ ] `/posts/` — redirects to `/archive/`
- [ ] Hover interactions: post rows (title → fox-ink), project cards (lift), nav links

- [ ] **Step 3: Commit**

```bash
git add docs/
git commit -m "docs: add design spec for blog redesign"
```

---

## Spec Coverage Checklist

- [x] Design tokens (Tailwind + CSS custom props) → Task 1
- [x] H2/H3 border removal → Task 1
- [x] JetBrains Mono → Task 1 + Task 9
- [x] Content taxonomy (5 kinds) → Task 2
- [x] `essays/` rename → Task 2 + Task 3
- [x] `technical/` collection → Task 2 + Task 3
- [x] `projects/` collection → Task 2 + Task 3
- [x] Existing post frontmatter migration → Task 3
- [x] Nav component → Task 4
- [x] Eyebrow component → Task 5
- [x] PostRow (home + archive variants) → Task 6
- [x] ProjectCard (status pill, stack chips, hover) → Task 7
- [x] Callout restyle → Task 8
- [x] SectionBreak dots update → Task 8
- [x] ReadingProgress (2px, fox-ink .6) → Task 8
- [x] BaseLayout (Nav, Google Fonts, no main constraint) → Task 9
- [x] Homepage (hero, project cards, 3 post sections) → Task 10
- [x] About page scaffold → Task 11
- [x] Archive page (filter tabs, year groups) → Task 12
- [x] `/posts/` redirect → Task 12
- [x] Post page (meta row, kind pill, serif dek) → Task 13
- [x] Docs updates → Task 14
- [x] `::selection` color → Task 1
- [x] Hover interactions (all) → Tasks 4, 6, 7, 10, 11
- [x] `.gitignore` update → Task 1
