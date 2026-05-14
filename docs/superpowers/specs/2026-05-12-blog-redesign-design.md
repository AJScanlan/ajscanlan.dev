# Engineer's Notebook — Design Spec

**Version:** 2.0.0  
**Date:** 2026-05-12  
**Site:** ajscanlan.dev (Astro 5)

---

## 1. Overview

### What This Redesign Is

A full visual and structural overhaul of ajscanlan.dev, moving from a generic blog to an "Engineer's Notebook" — a typography-first, content-driven personal site that functions as a job-hunt instrument and public record of work.

### Problem It Solves

- Presents the site as a working notebook rather than a portfolio, emphasizing ongoing technical writing and project logs
- Positions the owner as a senior software engineer who writes clearly about systems, not just a developer with a blog
- Unifies five content types (essays, notes, cheat-sheets, logs, technical) under a single coherent taxonomy with filtered navigation
- Replaces visual decoration with a calm, readable design built around typography and generous whitespace

### Voice

Direct and clear. Writing is the primary artifact. Brand is "working notebook" — not polished marketing, not rough draft, but carefully maintained reference material.

### Principles

- Clarity over flair
- Visual calm
- Accessibility by default
- Typography-first (reading flow governs all layout decisions)
- Never center long text — always left-align with rag control

---

## 2. Design Tokens

### Color Palette

#### Paper (backgrounds)

| Token       | Hex       | Usage                              |
|-------------|-----------|-------------------------------------|
| `--paper`   | `#faf9f6` | Page background, nav background     |
| `--paper-2` | `#f3f1ec` | Callout backgrounds, hover fills    |

#### Ink (text / borders)

| Token        | Hex       | Usage                                       |
|--------------|-----------|----------------------------------------------|
| `--ink-900`  | `#0b0b0e` | Primary text, active nav, headings           |
| `--ink-800`  | `#0f1011` | Heading text (h1–h3)                         |
| `--ink-700`  | `#1a1b1d` | Post body text, grid values                  |
| `--ink-600`  | `#2d2e31` | Lede text, blurbs, secondary body            |
| `--ink-500`  | `#44464a` | Nav links (default), hero links, meta text   |
| `--ink-400`  | `#6d6f73` | Eyebrows, dates, muted labels, tab labels    |
| `--ink-300`  | `#a0a2a6` | Separators, ornament color, arrow hints      |
| `--ink-200`  | `#c8c9cb` | Borders, callout borders, row dividers       |
| `--ink-100`  | `#e8e8e9` | Row dividers, grid lines, light borders      |
| `--ink-50`   | `#f7f7f8` | Subtle backgrounds                           |

#### Brand / Accent

| Token        | Hex       | Usage                                              |
|--------------|-----------|----------------------------------------------------|
| `--fox`      | `#d0342c` | Fox mark fill, live status pill, focus outline     |
| `--fox-ink`  | `#8a221c` | Hover state for links/titles, kind pill accent     |

#### Status (non-token values)

| Status        | Hex       | Usage                   |
|---------------|-----------|--------------------------|
| Live pill      | `#1f7a5c` | ProjectCard live badge   |
| In-progress    | `--fox` (`#d0342c`) | ProjectCard in-progress badge |
| Archived       | `--ink-300` (`#a0a2a6`) | ProjectCard archived badge |

### Typography Scale

#### Body

| Context      | Size     | Line Height | Font                         |
|--------------|----------|-------------|-------------------------------|
| Default body | 17px     | 1.6         | System sans (inherited)       |
| Post body    | 17.5px (1.09375rem) | 1.65 | System sans               |
| Mobile body  | —        | 1.65        | (line-height increase only)   |

#### Headings

| Level            | Size (rem)    | Size (px) | Line Height | Weight | Letter Spacing | Notes                   |
|------------------|---------------|-----------|-------------|--------|----------------|--------------------------|
| H1 — hero        | 3.125rem      | 50px      | 1.05        | 700    | −0.028em       | Homepage hero only       |
| H1 — post/about  | 2.75rem       | 44px      | 1.08        | 700    | −0.025em       | Posts, about, archive    |
| H2               | 1.75rem       | 28px      | 1.22        | 700    | −0.015em       | No left border           |
| H3               | 1.25rem       | 20px      | 1.3         | 600    | −0.005em       | No left border           |
| H4               | 1.5625rem     | 25px      | 1.5         | 600    | —              |                          |
| H5               | 1.25rem       | 20px      | 1.6         | 500    | —              |                          |
| H6               | 1.125rem      | 18px      | 1.65        | 500    | —              | Run-in style             |

H2 and H3 have no decorative left borders.

#### Eyebrow

- Font: `JetBrains Mono`, monospace
- Size: 11.5–12px
- Weight: default (400–500)
- Transform: uppercase
- Letter spacing: 0.14–0.16em
- Color: `--ink-400`

#### Monospace UI (dates, kind labels, nav links, pills, tabs)

- Font: `JetBrains Mono`, monospace
- Sizes: 9.5px, 10px, 10.5px, 11px, 11.5px, 12px, 13px depending on context

#### Dek (post subtitle)

- Font: `ui-serif`, `Iowan Old Style`, `Charter`, `Georgia`, serif
- Style: italic
- Size: 1.25rem (20px)
- Line height: 1.5
- Color: `--ink-500`

### Spacing

| Token / Class          | Value     | Description                       |
|------------------------|-----------|-----------------------------------|
| Section gap (home)     | 64px      | Between homepage sections         |
| Hero padding-top       | 64px      | Top of homepage hero              |
| Post padding-top       | 40px      | Meta row top padding on post page |
| About padding-top      | 64px      |                                   |
| About padding-bottom   | 80px      |                                   |
| Archive padding-top    | 52px      |                                   |
| Archive padding-bottom | 80px      |                                   |
| Prose element gap      | 1.25rem   | `.prose-spacing > * + *`          |
| Prose h2 margin-top    | 2.5rem    |                                   |
| Prose h3 margin-top    | 2rem      |                                   |
| Nav height             | 56px      | Container height                  |
| Nav padding            | 12px 0    | Vertical padding inside nav       |
| Layout padding (desktop) | 32px   | Left/right padding on layout containers |
| Layout padding (mobile) | 20px    | Below 640px breakpoint            |

### Radii

| Usage                   | Value   |
|-------------------------|---------|
| ProjectCard             | 10px    |
| Status pill / kind pill | 3px     |
| Stack chips             | 3px     |
| Skip-to-content link    | 0 0 0.5rem 0 (bottom-right only) |
| Focus outline           | 2px     |

---

## 3. Content Taxonomy

### Kind Values

| Kind           | Collection     | Description                                  |
|----------------|----------------|----------------------------------------------|
| `project-log`  | `logs/`        | Project logs documenting ongoing or completed engineering work |
| `technical`    | `technical/`   | Technical posts: deep-dives, how-tos, system explanations |
| `cheat-sheet`  | `cheat-sheets/` | Reference sheets for quick lookup            |
| `note`         | `notes/`       | Short notes, ≤400 words                      |
| `essay`        | `essays/`      | Longer essays (formerly `thoughts/`)         |

### Frontmatter Schema

All post collections share `sharedFields`:

```yaml
title: string           # required
dek: string             # optional (required for essays and technical)
tags: string[]          # default: []
series: string          # optional
readingTime: number     # optional (auto-calculated if absent)
status: draft | published   # default: draft
openness: provisional | confident  # default: provisional
updated: date           # optional
```

Per-collection additions:

| Collection     | Additional required fields                        |
|----------------|---------------------------------------------------|
| `essays`       | `dek` (required), `date`, `kind: "essay"`         |
| `technical`    | `dek` (required), `date`, `kind: "technical"`     |
| `notes`        | `date`, `kind: "note"`                            |
| `logs`         | `date`, `kind: "project-log"`                     |
| `cheat-sheets` | `updated` (date, replaces `date`), `kind: "cheat-sheet"` |

### Projects Data Collection

Type: data (JSON), not content. Schema:

```
name: string
blurb: string
status: "live" | "in-progress" | "archived"
stack: string[]
links: Array<{ label: string; url: string }>
featured: boolean    # default: false
order?: number       # sort order for featured list
```

---

## 4. Page Designs

### `/` — Homepage

**Container:** `.layout-home` (920px max-width, 32px horizontal padding)

**Sections** (separated by 64px gap):

1. **Hero** (`padding-top: 64px`, `padding-bottom: 8px`)
   - Availability pill: monospace 11px / uppercase / 0.12em tracking / ink-400 / green dot (#1f7a5c, 6×6px circle)
   - H1: 50px / 1.05 / weight 700 / −0.028em tracking / ink-900. Keyword "engineer" colored `--fox-ink`
   - Lede: ~18.5px (1.15625rem) / 1.55 line-height / ink-600 / max-width 56ch
   - Links row: monospace 12px / ink-500; links are ink-700, hover to fox-ink
   - Separator: ink-300 middle dot (·)

2. **Selected Projects**
   - Eyebrow label
   - Grid: 2 columns, 16px gap. Collapses to 1 column below 700px
   - Each cell: ProjectCard component

3. **Projects & Technical Writing**
   - Eyebrow label
   - Latest 4 from `logs` + `technical` collections, sorted by date desc
   - PostRow components (home variant)
   - "See all →" link: monospace 11.5px / ink-500 / hover fox-ink

4. **References & Cheat Sheets**
   - Eyebrow label
   - Latest 3 from `cheat-sheets` + `notes`, sorted by date desc
   - PostRow components (home variant)
   - "See all →" link

5. **Essays**
   - Eyebrow label
   - Latest 3 from `essays`, sorted by date desc
   - PostRow components (home variant)
   - "See all →" link

**Responsive:** hero H1 drops to 2.25rem below 700px.

---

### `/about` — About Page

**Container:** `.layout-post` (720px max-width, 32px padding) with `padding-top: 64px`, `padding-bottom: 80px`

**Structure:**

- Availability pill (same as homepage)
- H1: 44px / weight 700 / −0.025em tracking / 1.08 line-height
- Lede: 1.1875rem (~19px) / 1.6 / ink-600 / max-width 60ch / margin-bottom 36px
- Two-column definition grid: `grid-template-columns: 140px 1fr`, `gap: 0 40px`
  - `border-top: 1px solid --ink-100`
  - Labels: monospace 12px / uppercase / 0.12em tracking / ink-400 / `padding: 16px 0`
  - Values: 13.5px / ink-700 / 1.6 line-height / `padding: 16px 0`
  - Each row separated by `border-bottom: 1px solid --ink-100`

**Grid rows:** Currently, About (stack value), How I work, Background, Stack, Reach me, This site.

**Stack chips (About page):**
- Font: JetBrains Mono 10px / border-radius 3px / padding 2px 7px
- `chip-filled`: bg `--ink-900`, color `--paper`
- `chip-muted`: bg `--paper-2`, color `--ink-600`

**Responsive:** Grid collapses to single column below 640px. Label border-bottom removed on mobile.

---

### `/archive` — Archive Page

**Container:** `.layout-home` (920px max-width) with `padding-top: 52px`, `padding-bottom: 80px`

**Structure:**

- H1: 2.25rem / weight 700 / ink-900 / −0.02em tracking / margin-bottom 28px
- **Filter tabs bar:** flex row, `border-bottom: 1px solid --ink-100`, margin-bottom 32px
  - Tab: monospace 11.5px / `padding: 9px 13px` / ink-400 / no bg / `border-bottom: 2px solid transparent`
  - Active tab: ink-900 / weight 600 / border-bottom ink-900
  - Hover: color ink-700 / transition 120ms
  - Tab values: All, Project logs, Technical, Cheat sheets, Notes, Essays (with counts)
- **Year groups:** sorted descending
  - Year label: monospace 10.5px / uppercase / 0.14em tracking / ink-400 with full-width `--ink-100` rule line
  - Rows within year group

**Archive row layout:** `grid-template-columns: 110px 110px 1fr 80px`, gap 16px, padding 11px 0, `border-bottom: 1px solid --ink-100`

| Column    | Font                | Size    | Color        | Notes                          |
|-----------|---------------------|---------|--------------|-------------------------------|
| Date      | JetBrains Mono      | 10.5px  | ink-400      | ISO format (YYYY-MM-DD)       |
| Kind      | JetBrains Mono      | 10px    | fox-ink (project-log) / ink-400 (others) | Uppercase |
| Title     | —                   | 13px    | ink-900      | weight 500                    |
| Read time | JetBrains Mono      | 10.5px  | ink-400      | Right-aligned, "X min"        |

**Hover:** `background: --paper-2`; title color → fox-ink

**Filter behavior:** JavaScript toggles `data-hidden` on rows and year groups. URL param `?type=<kind>` persists state.

**Responsive (≤640px):** Grid collapses to `90px 1fr` / 2 rows; kind column hidden; date font 10px; read-time left-aligned ink-300.

---

### `/posts/[slug]` — Post Page

**Container:** `.layout-post` (720px max-width, 32px padding)

**Structure:**

- **ReadingProgress bar** (sticky, 2px, fox-ink 60% opacity)
- **Meta row** (`padding-top: 40px`, `margin-bottom: 28px`): flex row, monospace 12px, ink-400, gap 10px
  - Back link: ink-500 / `border-bottom: 1px solid --ink-200` / hover fox-ink + fox-ink border
  - Separator: ink-200
  - Kind badge: monospace 10.5px / uppercase / 0.08em tracking / border-radius 3px / padding 1px 7px / fox-ink text / bg `rgba(208, 52, 44, 0.04)` / border `1px solid rgba(138, 34, 28, 0.25)`
  - Date: ink-400
  - Reading time: ink-400
- **Post H1:** 44px (2.75rem) / weight 700 / −0.025em tracking / 1.08 line-height / ink-900 / margin-bottom 14px
- **Dek (optional):** serif italic / 1.25rem / 1.5 line-height / ink-500 / margin-bottom 36px
- **Article body:** 17.5px (1.09375rem) / 1.65 line-height / ink-700 / paragraphs margin-bottom 20px

---

## 5. Component Designs

### Nav

**File:** `src/components/Nav.astro`

**Layout:**
- `position: sticky; top: 0; z-index: 50`
- Background: `--paper`
- `border-bottom: 1px solid --ink-100`
- Inner container: `.layout-home`, height 56px, flex row, space-between

**Brand (left):**
- Fox mark: 22×22px, `background: --fox`, `clip-path: polygon(50% 0%, 100% 30%, 85% 100%, 15% 100%, 0% 30%)`
- Brand text: JetBrains Mono 13px / weight 600 / ink-900
- Brand hover: color → fox-ink / transition 120ms ease-in-out

**Nav links (right):**
- Font: JetBrains Mono 12px
- Gap: 20px
- Default color: ink-500
- Hover: → fox-ink / transition 120ms ease-in-out
- Active: ink-900 / weight 600; still hover → fox-ink

**Links:** Archive, About, GitHub (external), RSS

**Props:** None (auto-included via BaseLayout)

---

### PostRow

**File:** `src/components/PostRow.astro`

**Props:**

| Prop          | Type                                              | Default  |
|---------------|---------------------------------------------------|----------|
| `date`        | `Date`                                            | required |
| `title`       | `string`                                          | required |
| `dek`         | `string`                                          | optional |
| `kind`        | `'project-log' \| 'technical' \| 'cheat-sheet' \| 'note' \| 'essay'` | required |
| `slug`        | `string`                                          | required |
| `readingTime` | `number`                                          | optional |
| `variant`     | `'home' \| 'archive'`                             | `'home'` |

**Home variant** (`grid-template-columns: 100px 1fr 140px`, gap 24px, padding 11px 0):

| Column    | Style                                              |
|-----------|-----------------------------------------------------|
| Date      | JetBrains Mono 12px / ink-400 / Short date (Mon DD) |
| Title+Dek | Title: 15px / weight 500 / ink-900. Dek: 12.5px / ink-500 / truncated at 48ch |
| Kind pill | JetBrains Mono 10px / border-radius 3px / padding 1px 7px |

Kind pill colors:
- `project-log`: color `--fox-ink`, bg `rgba(138, 34, 28, 0.06)`, border `1px solid rgba(138, 34, 28, 0.2)`
- all others: color `--ink-400`, bg transparent, border `1px solid --ink-200`

**Archive variant** (`grid-template-columns: 110px 110px 1fr 80px`, gap 16px):

| Column    | Style                                                 |
|-----------|--------------------------------------------------------|
| Date      | JetBrains Mono 10.5px / ink-400 / ISO format           |
| Kind      | JetBrains Mono 10px / uppercase / fox-ink (project-log) or ink-400 |
| Title     | 12.5px / weight 500 / ink-900                          |
| Read time | JetBrains Mono 10.5px / ink-400 / right-aligned        |

**Interactions:**
- Home hover: title → fox-ink (120ms); `→` arrow appends after title, fades in (opacity 0 → 1, 120ms)
- Archive hover: background → `--paper-2`; title → fox-ink (120ms)
- Row separator: `border-bottom: 1px solid --ink-100`
- Transition property: `background 120ms ease-out, color 120ms ease-out`

---

### ProjectCard

**File:** `src/components/ProjectCard.astro`

**Props:**

| Prop     | Type                                      |
|----------|-------------------------------------------|
| `name`   | `string`                                  |
| `blurb`  | `string`                                  |
| `status` | `'live' \| 'in-progress' \| 'archived'`   |
| `stack`  | `string[]`                                |
| `links`  | `Array<{ label: string; url: string }>`   |

**Card structure (flex column, gap 16px):**
- Border: `1px solid --ink-100` / border-radius 10px / padding 22px / bg `--paper`
- Status pill → name (H3) → blurb → stack chips → links

**Status pill:**
- Font: JetBrains Mono 10px / weight 600 / uppercase / 0.1em tracking / border-radius 3px / padding 2px 8px / color white
- `live` → bg `#1f7a5c`
- `in-progress` → bg `--fox` (`#d0342c`)
- `archived` → bg `--ink-300` (`#a0a2a6`)

**Name (H3):** 16px / weight 600 / ink-900 / −0.01em tracking / no margin

**Blurb:** 13px / 1.55 / ink-600

**Stack chips:** JetBrains Mono 9.5px / border-radius 3px / padding 2px 7px / bg `--paper-2` / color `--ink-600` / border `1px solid --ink-100`

**Links:** JetBrains Mono 11px / ink-500 / no underline / hover → fox-ink (120ms)

**Card hover:**
- `transform: translateY(-1px)`
- `border-color: --ink-200`
- `box-shadow: 0 12px 28px -18px rgba(11, 11, 14, 0.18)`
- Transition: `transform 200ms ease, border-color 200ms ease, box-shadow 200ms ease`

---

### Eyebrow

**File:** `src/components/Eyebrow.astro`

**Props:** children (text content only)

**Style:**
- Font: JetBrains Mono, monospace
- Size: 11.5–12px
- Transform: uppercase
- Letter spacing: 0.14–0.16em
- Color: `--ink-400`

**Usage:** Section labels on homepage and in MDX content. Auto-available in MDX without import.

---

### Callout

**File:** `src/components/Callout.astro`

**Props:**

| Prop    | Type                           | Required |
|---------|--------------------------------|----------|
| `type`  | `'note' \| 'tip' \| 'warn'`    | required |
| `title` | `string`                       | optional |

**Visual style:**
- Background: `--paper-2` (`#f3f1ec`)
- Border: `1px solid --ink-200` (`#c8c9cb`)
- Border radius: 8px

**ARIA roles:**
- `note` → `role="note"`
- `tip` → `role="complementary"`
- `warn` → `role="alert"`

**Content:** Supports markdown/MDX within the slot.

**Usage:** Auto-available in MDX without import.

---

### SectionBreak

**File:** `src/components/SectionBreak.astro`

**Props:**

| Prop      | Type                                      | Default    |
|-----------|-------------------------------------------|------------|
| `variant` | `'diamond' \| 'dots' \| 'asterism'`       | `'diamond'` |
| `spacing` | `'tight' \| 'normal' \| 'loose'`          | `'normal'`  |

**Spacing values:**
- `tight` → 32px vertical
- `normal` → 48px vertical
- `loose` → 64px vertical

**Visual style:**
- `dots`: 3 × 4px circles, centered, color `--ink-200`
- `diamond` (◆): centered, color `--ink-300`
- `asterism` (⁂): centered, color `--ink-300`

**Motion:** Respects `prefers-reduced-motion`.

**Usage:** Auto-available in MDX without import.

---

### ReadingProgress

**File:** `src/components/ReadingProgress.astro`

**Props:** None. Auto-included on all post pages via `[slug].astro`.

**Visual:**
- Height: 2px
- Color: `--fox-ink` (`#8a221c`) at 60% opacity
- Position: `sticky; top: 56px` (just below the nav)
- Width: fills proportionally as user scrolls

**Implementation:** JavaScript `requestAnimationFrame` for smooth scroll tracking.

**Accessibility:** `role="progressbar"` with appropriate ARIA attributes.

**Motion:** Respects `prefers-reduced-motion`.

---

## 6. Interactions

### Universal Transitions

All interactive elements use `color 120ms ease-out` or `120ms ease-in-out` unless noted.

### Link Hover States

| Element                  | Default           | Hover              | Transition |
|--------------------------|-------------------|--------------------|------------|
| Nav brand                | ink-900           | fox-ink            | 120ms ease-in-out |
| Nav links                | ink-500           | fox-ink            | 120ms ease-in-out |
| PostRow title (home)     | ink-900           | fox-ink            | 120ms ease-out |
| PostRow arrow (home)     | hidden (opacity 0)| visible (opacity 1)| 120ms ease-out |
| PostRow row (archive)    | paper bg          | paper-2 bg         | 120ms ease-out |
| PostRow title (archive)  | ink-900           | fox-ink            | 120ms ease-out |
| ProjectCard              | ink-100 border    | ink-200 border + lift + shadow | 200ms ease |
| ProjectCard links        | ink-500           | fox-ink            | 120ms ease |
| Archive tab              | ink-400           | ink-700            | 120ms      |
| Archive row              | paper bg          | paper-2 bg         | 120ms      |
| Archive row title        | ink-900           | fox-ink            | (via row hover) |
| Meta back link           | ink-500 + ink-200 underline | fox-ink + fox-ink underline | — |
| About reach links        | ink-900 + ink-200 underline | fox-ink + fox-ink underline | — |
| Hero links               | ink-700           | fox-ink            | — |
| "See all →" link         | ink-500           | fox-ink            | — |

### Focus

- Outline: `3px solid #d0342c` (fox red), `outline-offset: 2px`, `border-radius: 2px`
- Dark mode override: `outline-color: #f87171` (lighter fox for dark backgrounds)
- Skip-to-content: `3px solid #0b0b0e`, appears on focus with `top: 0` transition (0.2s)

### Motion

`prefers-reduced-motion: reduce` disables:
- H2/H3 transitions
- ReadingProgress animation
- SectionBreak animation
- Skip-to-content transition
