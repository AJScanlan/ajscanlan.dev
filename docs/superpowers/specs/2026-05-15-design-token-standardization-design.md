# Design Token Standardization — Design Spec

**Date**: 2026-05-15
**Status**: Approved for planning
**Topic**: Standardize typography, spacing, and color across the site against the Figma design intent.

## Problem

The site (`ajscanlan.dev`, Astro 5 + Tailwind 3) has drifted into two parallel,
inconsistent styling systems:

1. **Tailwind config + `global.css`** — a roughly coherent type/spacing/color
   scale (`fontSize`, `ink`/`paper`/`fox` colors, `rhythm-*` spacing).
2. **Component `<style>` blocks** — hardcoded px values scattered across
   `ProjectCard`, `PostRow`, `Callout`, `Nav`, etc., barely referencing the
   Tailwind tokens.

The component layer contains exactly the near-duplicate problem the Figma file
has: font sizes of 9.5 / 10 / 10.5 / 11 / 11.5 / 12 / 12.5 / 13 / 13.5 / 15 / 16 px,
letter-spacings of 0.08 / 0.1 / 0.12 / 0.14 / 0.15 em, and so on. The Figma file
was imported from HTML and has no styles or variables, so it carries the same
noise (e.g. "13.7 vs 13.4" for one semantic use case).

There is also structural duplication: heading sizes are defined in **three**
places (`global.css` element selectors, the `@tailwindcss/typography` plugin
block in `tailwind.config.js`, and the `fontSize` scale), and colors in **two**
(`tailwind.config.js` `colors` and `global.css` `:root` CSS variables). The
existing `TYPOGRAPHY_AUDIT.md` even documents a "Files to Keep Synchronized"
list — a maintenance smell, already proven stale (it lists H1 as 50px; the
config says 49px).

## Goal

A single, idiomatic token system as the source of truth, with every component
and page snapped onto it. This is a **one-time standardization**. After it
lands, the user owns the tokens and will change designs by editing them
directly — no recurring pipeline, no CI guard.

## Non-goals

- No CI/lint enforcement of token usage.
- No repeatable Figma→code sync pipeline.
- No font-family changes (the typeface choices stay as-is).
- No fluid/`clamp()` typography — that is a feature, not standardization.
- No redesign — the site is already close to the Figma; this aligns it
  precisely to the design intent.

## Decisions (locked during brainstorming)

1. **One-time codemod**, expressed as a reviewed mapping table — not a script.
2. **Canonical values are pulled from Figma** via the Figma MCP, then reconciled
   against the values already in the code.
3. **Tokens are applied as Tailwind utility classes.** Component `<style>`
   blocks are converted to utilities driven by `tailwind.config.js`.
4. **Approach A — audit-driven manual codemod.** The codebase is small (~7
   components, ~5 pages); a regex script cannot reliably turn a `<style>`
   block's `font-size` into a utility class on a different element. The
   systematic part is the extraction + clustering + mapping table; application
   is a guided per-component rewrite with visual verification.

## Token Architecture

Principle: **lean on Tailwind's built-in scales where they already work; define
custom tokens only where they do not.** Keeps the token surface small and
standard so the markup is readable by anyone who knows Tailwind.

### Font size — custom scale, idiomatic names

Override the *values* of Tailwind's standard `fontSize` keys but keep the
standard names: `xs`, `sm`, `base`, `lg`, `xl`, `2xl`, `3xl`, `4xl` (extend with
more steps only if extraction proves they are needed). Today's
`heading-sm/md/lg/xl/2xl` naming is removed — it is non-idiomatic and contains a
bug (`heading-sm` and `heading-lg` are both 20px).

- Each step bundles its own `lineHeight` in the tuple form
  `['<size>', { lineHeight: '<lh>' }]` — matching Tailwind's own default config.
- `letter-spacing` is **not** bundled into the size token. It stays as separate
  `tracking-*` utilities, because tracking is contextual (headings want
  negative tracking, eyebrows want positive).

### Letter-spacing

Mostly covered by Tailwind's default `tracking-*`. Add custom `tracking` values
only where the design exceeds the defaults — specifically a wide value for
uppercase mono eyebrows (~0.12–0.15em, beyond Tailwind's `widest` of 0.1em).

### Font weight

Standard Tailwind weight utilities. The job is only to standardize *which*
weights are used (currently 500 / 600 / 700 / 800) — collapse any near-duplicate
weight intentions onto this set.

### Spacing

Remove the custom `rhythm-1..16` scale. Use **Tailwind's built-in spacing
scale** (already a 4px grid: `p-1`=4px, `p-2`=8px, `p-1.5`=6px, …). Snap every
raw px value (2, 6, 7, 11, 14, 22, …) to the nearest standard step.

### Border radius

Snap component radius values (2, 3, 8, 10, 999px) onto Tailwind's default
`rounded-*` scale.

### Color

The `ink` / `paper` / `fox` ramps are already coherent. This is reconciliation,
not redesign: extract the actual hex values used in Figma, confirm they map to
existing tokens, dedupe near-identical hexes, and drop unused ramp steps. The
Tailwind config becomes the **single** color source — the `:root` CSS color
variables in `global.css` are removed once components no longer consume them.

### Accessibility constraint (firm)

Sub-12px body-adjacent text is not acceptable. The 9.5 / 10 / 10.5px cluster in
`PostRow` and `ProjectCard` collapses **upward** to a single token — 11px is
permitted *only* for uppercase, tracked-out mono micro-labels; everything else
floors at 12px. Three barely-distinct tiny sizes are not preserved.

## Process

### Phase 1 — Extract

- Call `get_design_context` on each page frame in the Figma file
  (`fileKey: jHlUOfuUuDgUw4leAvCtjD`): Home, About, Archive, Post. This returns
  reference CSS with font-size, line-height, letter-spacing, color, padding,
  gap, and border-radius per node.
- Call `get_variable_defs` to confirm the file has no variables (expected
  empty).
- Merge the Figma-extracted values with the raw values already present in the
  codebase (`src/components/**/*.astro`, `src/pages`, `src/layouts`,
  `global.css`).

### Phase 2 — Cluster

Group near-duplicate values into canonical tokens within tolerance:

- **Type size**: ±0.75px tolerance; canonical value rounded to a clean px/rem.
- **Letter-spacing**: ±0.02em tolerance.
- **Spacing**: snapped to the nearest 4px-grid Tailwind step.
- **Color**: deduped within a small hex delta.

Apply the accessibility constraint during clustering (tiny-text cluster
collapses upward).

### Phase 3 — Mapping table (review gate)

Produce a mapping table in the implementation plan: **every raw value → its
canonical token**, per category. This table is the codemod in reviewable form.
The user approves it before any code is changed.

### Phase 4 — Apply

In order (foundation first, then leaf-first so children are stable before
parents):

1. **`tailwind.config.js`** — new `fontSize` scale, `tracking` extension,
   cleaned `colors`, remove `spacing` `rhythm-*`, drive the
   `@tailwindcss/typography` plugin from the `fontSize` tokens (single source
   for heading sizes).
2. **`src/styles/global.css`** — h1–h6 element rules reference the new scale;
   remove the duplicated `:root` color variables.
3. **Components**, leaf-first: `Eyebrow`, `SectionBreak`, `Callout`,
   `ProjectCard`, `PostRow`, `Nav`, `ReadingProgress` — convert `<style>` blocks
   to Tailwind utility classes.
4. **Pages**: `index.astro`, `about.astro`, `archive.astro`,
   `posts/[slug].astro`.

### Phase 5 — Verify

- `npm run build` (`astro build`) passes after each phase.
- Per page: run the dev server, screenshot it, compare side-by-side against the
  corresponding Figma frame.
- Grep for raw px font-size/letter-spacing/radius/spacing in component
  `<style>` blocks — should return effectively nothing.
- Update `TYPOGRAPHY_AUDIT.md` and `COMPONENTS.md` to reflect the final token
  set (both are currently stale).

## Risks & mitigations

- **Figma is an HTML import with noisy values** → clustering tolerance plus a
  human-reviewed mapping table absorbs the noise; canonical values are clean.
- **`<style>`-block → utility conversion is structural, not mechanical** →
  handled per-component by hand with a visual diff against Figma, not by script.
- **Heading-size triple-definition could re-drift** → eliminated by making the
  `fontSize` tokens the single source; `global.css` and the typography plugin
  reference them.
- **Visual regression during conversion** → per-page screenshot comparison and
  `astro build` after each phase catch breakage early.

## Success criteria

- One `fontSize` scale with idiomatic Tailwind names; no `heading-*` keys.
- No component `<style>` block contains a raw px type/spacing/radius value.
- Heading sizes defined exactly once; colors defined exactly once.
- No sub-12px text except permitted mono micro-labels at 11px.
- Each page visually matches its Figma frame.
- `TYPOGRAPHY_AUDIT.md` and `COMPONENTS.md` reflect reality.
