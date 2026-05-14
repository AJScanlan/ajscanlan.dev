# Handoff: ajscanlan.dev redesign (Option A — Engineer's Notebook)

## Overview

A redesign of `ajscanlan.dev` (Astro 5 + Tailwind + MDX). The brief is **repositioning the site as a job-hunt instrument**: project logs and technical writing get top billing; book reviews and essays move below the fold. The visual system stays calm and type-led; the heavy-handed red leading bars on H2/H3 are removed.

The site has four routes: **Home, About, Archive, and Post**. The existing Astro structure (`src/content/{thoughts,notes,cheat-sheets,logs}/`, `src/pages/`, `src/layouts/`) is reused as-is — only `src/styles/global.css`, `tailwind.config.js`, the page templates, and a handful of components need to change.

## About the design files

The files in this bundle (`Option A — Site.html`, `Redesign Directions.html`, `artboards.jsx`, `design-canvas.jsx`) are **design references built in vanilla React + HTML**. They are not production code to copy verbatim. The task is to **recreate the look, behaviour, and information architecture in the existing Astro codebase** (`AJScanlan/ajscanlan.dev` on GitHub), using its existing patterns (Astro pages/layouts, Tailwind utilities, MDX content collections).

`Redesign Directions.html` is a design canvas showing the diagnosis and three considered directions (A, B, C). Only **Option A** was selected; the others are context and can be ignored when implementing.

`Option A — Site.html` is the canonical reference — open it and click through Home → About → Archive → Post to see the full intended behaviour.

## Fidelity

**High-fidelity.** Colors, typography, spacing, and interactions are intentional. Reproduce as specified — don't substitute generic Tailwind defaults. The existing `tailwind.config.js` palette (ink/paper/fox) is the right base; only minor changes are needed (see Design Tokens below).

## Information architecture changes

Beyond the visual changes, the site's IA shifts:

- **Promote project logs to the top.** They are the load-bearing content for a hiring audience. Add a new content collection `projects/` (or reuse `logs/`) for selected-project metadata that powers the new homepage grid.
- **Add a `technical/` content collection** for long-form bug write-ups and architecture notes. Currently the site only has `thoughts/notes/cheat-sheets/logs/`; "technical" is a separate type with longer reading times and harder-edged voice.
- **Rename or repurpose `thoughts/` → `essays/`.** "Thoughts" undersells the form and oversells the frequency. Keep schema identical.
- **Add a route `/archive`** that lists every post with type filters and year groupings.
- **Rewrite `/about`** entirely (new structure: a label/content two-column grid with Currently / Background / How I work / Stack / Reach me / This site). New copy is in the prototype as a stand-in — the author will replace it.
- **Add a `/projects` JSON or content collection** keyed by name, status, blurb, stack, and links. Used by the homepage projects grid.

Drop the existing tagline "Writing my way to understanding". Replace with the new positioning copy in the prototype (or the author's own).

## Pages

### 1. Home (`/`)

Layout: single column, `max-width: 920px`, `padding: 0 32px`.

**Sections, in order:**

1. **Hero**
   - Eyebrow (mono): availability pill (green dot + "Available for new roles · Jun 2026") + location.
   - H1: 50px / 700 / -0.028em tracking / max 17ch. One word coloured `--fox-ink` (#8a221c).
   - Lede paragraph: 18.5px / `--ink-500`, max 56ch.
   - Inline link row (mono 13.5px): email, GitHub, CV, "more about me" — separated by `·` in `--ink-200`. Underline on the links themselves (`border-bottom: 1px solid var(--ink-200)`, swap to `--fox-ink` on hover).

2. **Selected projects** — section heading is a tiny mono eyebrow (12px, .16em tracking, uppercase, `--ink-400`), sub-text below at 14px `--ink-400`. Body is a 2-column grid (`grid-template-columns: repeat(2, 1fr); gap: 16px`) of project cards. Cards collapse to 1 column under 700px.

3. **Projects & technical writing** — same eyebrow heading style. Body is a list of post rows.

4. **References & cheat sheets** — same.

5. **Essays** — same.

After section 3 (Projects & technical), a "see all project logs & technical posts →" link in mono 13px with a dashed bottom-border, taking the user to `/archive` pre-filtered to that type.

### 2. About (`/about`)

Layout: narrower column, `max-width: 720px`, `padding: 0 32px`.

- Eyebrow (mono): availability pill.
- H1: 44px / 700 / -0.025em, max 22ch.
- Lede paragraph: 19px `--ink-600`, max 60ch.
- Below: a two-column grid `grid-template-columns: 140px 1fr; gap: 36px 40px`, with a top border. Left column is mono 12px uppercase labels (Currently, Background, How I work, Stack, Reach me, This site); right column is body prose. Collapses to one column under 700px (label stacks above content).
- Inside "Reach me", `ul li` rows use `grid-template-columns: 110px 1fr` with mono label and mono link.
- Inside "Stack", chips wrap. Current daily-drivers are filled (`background: var(--ink-900); color: var(--paper)`); secondary tools are muted (`background: var(--paper-2); color: var(--ink-600)`).

### 3. Archive (`/archive`)

- H1: 36px / 700.
- Filter tabs (mono 13px): `All / Project logs / Technical / Cheat sheets / Notes / Essays` with a count after each. Active tab gets a 2px black bottom border.
- Year groupings: each year shown as a mono 12px label with a 1px rule beside it.
- Rows: `grid-template-columns: 110px 110px 1fr 80px` — full ISO date (mono 12.5px), kind (mono, `--fox-ink` for project-log), title (sans 16px), reading time (mono right-aligned).
- Hover rows: subtle `--paper-2` background.

### 4. Post (`/posts/[slug]`)

- Sticky reading-progress bar at top: 2px, fills with `--fox-ink` at opacity .6 (driven by scroll).
- Layout: `max-width: 720px`, narrow column.
- Meta row: back link, kind pill (uppercase mono 11px, `--fox-ink` text on a faint red background), date, reading time. All mono 12.5px.
- H1 (post title): 44px / 700 / -0.025em.
- Dek: serif italic, 20px / 1.5 / `--ink-500`.
- Reader's note callout: bordered rounded box, paper-2 background, mono eyebrow heading.

**The critical change — H2 / H3 styling.** Remove the existing red `border-left: 4px solid #d0342c` from H2 and the 3px version from H3. Replace with:

```css
h2 { font-size: 28px; line-height: 1.22; letter-spacing: -0.015em; font-weight: 700; margin: 56px 0 12px; padding: 0; border: 0; }
h2 .num {
  display: block; font-family: var(--mono);
  font-size: 11px; letter-spacing: .18em; text-transform: uppercase;
  color: var(--ink-400); font-weight: 500; margin-bottom: 10px;
}
h3 { font-size: 20px; line-height: 1.3; letter-spacing: -0.005em; font-weight: 600; margin: 32px 0 8px; padding: 0; border: 0; }
```

The eyebrow numbering (`01 — Section title`) is **optional content**, hand-authored in MDX where wanted. Not auto-generated. Posts that don't have it just look clean.

Inline links in post body: `color: var(--fox-ink); border-bottom: 1px solid rgba(138,34,28,.25)`. No bare `text-decoration`.

Code blocks: `background: var(--ink-900); color: var(--ink-50)`; rounded 8px; padding 18px 20px; mono 13.5px. Inline code: `--paper-2` background, 14px, 3px radius.

A small horizontal break of three dots (`<div class="breaker">`) is used between major sections.

## Design tokens

### Colors (hex)
```
--ink-900: #0b0b0e   /* darkest text, code-block bg */
--ink-800: #0f1011
--ink-700: #1a1b1d   /* body text */
--ink-600: #2d2e31
--ink-500: #44464a   /* secondary text */
--ink-400: #6d6f73   /* tertiary / meta */
--ink-300: #a0a2a6
--ink-200: #c8c9cb   /* divider underlines */
--ink-100: #e8e8e9   /* rules, borders */
--ink-50:  #f7f7f8

--paper:   #faf9f6   /* main background — warmer than the existing #f7f7f8 */
--paper-2: #f3f1ec   /* code inline, callouts, secondary chips */

--fox:     #d0342c   /* mark, "in progress" dot, focus ring */
--fox-ink: #8a221c   /* darker burgundy for text-grade red — links, headings accent */
```

Tailwind: replace the existing `paper.100` (#f7f7f8) with the warmer `#faf9f6` and add `paper.200` → `#f3f1ec`. Add a `fox.ink` token at `#8a221c` and migrate body link colors from `fox.500` to `fox.ink`.

### Typography
- **Sans (body, UI):** existing system stack — `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Inter", "Helvetica Neue", Arial, sans-serif`. No Google Font for body.
- **Serif (post dek only):** `ui-serif, "Iowan Old Style", "Charter", Georgia, "Times New Roman", serif`.
- **Mono (eyebrows, meta, code, chips):** JetBrains Mono via Google Fonts at weights 400/500/600.

### Type scale (revised — lower than existing)
- Body: 17px / 1.6
- Post body: 17.5px / 1.65
- Post H1: 44px / 1.08 / -0.025em / 700
- Home H1: 50px / 1.05 / -0.028em / 700
- H2 (post): 28px / 1.22 / -0.015em / 700
- H3 (post): 20px / 1.3 / 600
- Eyebrow (mono): 11.5–12px / .14–.16em tracking / uppercase / 500 / `--ink-400`

This is **smaller than the existing 49/39/31 scale** by design — the existing scale is magazine-large; the new one is engineering-notebook-calm.

### Radii / borders
- Cards / callouts: 10px radius, 1px solid `--ink-100`.
- Chips: 3px radius.
- Pills (kind labels): 3px radius, 1px border.

### Spacing
- Section vertical gap: 28–32px between sections.
- Row padding: 18px top/bottom, 1px top-border (last row gets bottom border too).
- Card padding: 22px.

## Components to add to Astro

Suggested new components under `src/components/`:

- `Nav.astro` — sticky top nav with the fox mark, brand, and routes (Archive / About / GitHub / RSS). Replace the existing one.
- `PostRow.astro` — three-column row (date / title+dek / kind-pill). Used on home and archive.
- `ProjectCard.astro` — bordered card with status pill, name, blurb, stack, inline links.
- `Eyebrow.astro` — mono uppercase section heading + optional sub-text. One-line abstraction so the style stays consistent.
- `Callout.astro` — already exists; restyle to match prototype (rounded 8px, paper-2 bg, mono eyebrow heading).
- `SectionBreak.astro` — already exists; restyle to three small dots.
- `ReadingProgress.astro` — already exists; restyle to 2px sticky bar, `--fox-ink` at opacity .6.

## Interactions & behaviour

- **Nav links** hover from `--ink-500` to `--fox-ink` over 120ms.
- **Post rows** on hover: title color → `--fox-ink`; append `" →"` glyph in `--ink-300`.
- **Project cards** on hover: lift `translateY(-1px)`; border `--ink-100` → `--ink-200`; soft shadow `0 12px 28px -18px rgba(11,11,14,.18)`.
- **Selection color:** `background: rgba(208,52,44,.18); color: var(--ink-900)`.
- **Focus rings:** existing 3px fox outline is fine — keep.
- **Archive filter tabs:** state-only (no URL param required initially; nice-to-have: persist via `?type=` query string).
- **Reading progress bar:** scroll listener on the post page; width = (scrollY / (scrollHeight - viewportHeight)) × 100%.

## Fox mark

The existing fox SVG in `public/icons/` is fine — keep it. In the prototype it's reproduced as a geometric pentagon-with-cutout placeholder; **use the real SVG** in the implementation.

Mark size in nav: 22px. Color: `--fox` (#d0342c) — full red is fine here, only this one usage.

## Content rewrites

All post titles, deks, and project blurbs in the prototype are **stand-ins**. The site owner will rewrite them. Two things, though, are intentional and should be preserved as part of the design:

1. **Post `kind` taxonomy**: `project-log`, `technical`, `cheat-sheet`, `note`, `essay`. The schema should support these five values exactly.
2. **The About page structure** (Currently / Background / How I work / Stack / Reach me / This site) is the intended IA — the copy will be the author's.

## README rewrite

The repo's current `README.md` reads like a literary garden. A revised positioning (cuts struck through, additions highlighted) is included in `Redesign Directions.html` under the "README" section. The implementing developer doesn't need to write the new README — the site owner will — but the file should be flagged for rewrite.

## Screenshots

Reference viewport screenshots are in `screenshots/`:

| File | Route |
|---|---|
| `01-home.png` | `/` — hero + availability pill |
| `01b-home-projects.png` | `/` — project cards grid |
| `02-about.png` | `/about` — label/content two-column layout |
| `03-archive.png` | `/archive` — filter tabs + year groupings |
| `04-post.png` | `/posts/[slug]` — post body with new H2/H3 style |

Open `Option A — Site.html` directly to interact with the full prototype.

## Files in this bundle

- `Option A — Site.html` — **the canonical prototype**. Open in a browser, click Home → About → Archive → Post. This is the source of truth.
- `Redesign Directions.html` — design canvas with diagnosis + three considered directions + post-page mock + README rewrite. Background context.
- `artboards.jsx` — JSX components used by `Redesign Directions.html`.
- `design-canvas.jsx` — canvas chrome (Figma-like pan/zoom). Implementation detail, not part of the deliverable.
- This `README.md`.

## Out of scope / explicit non-goals

- **No dark mode work this pass.** The existing dark mode CSS in `global.css` and `tailwind.config.js` can stay; visual tuning of dark mode against the new tokens is a follow-up.
- **No new content.** The author will write real posts to replace the stand-ins.
- **No CMS or admin UI.** Content stays in MDX files.
- **No analytics, trackers, or fonts other than JetBrains Mono.**
