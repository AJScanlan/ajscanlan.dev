# Design Token Standardization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Standardize typography, spacing, and color across the site onto one idiomatic Tailwind token system, with canonical values extracted from the Figma design.

**Architecture:** Extract raw values from Figma + code, cluster near-duplicates into canonical tokens, capture them in a reviewed mapping table, then apply the table — rewriting `tailwind.config.js` as the single source of truth and converting component `<style>` blocks to Tailwind utility classes. One-time codemod; no script, no CI guard.

**Tech Stack:** Astro 5, Tailwind CSS 3, `@tailwindcss/typography`, MDX. Figma MCP for extraction (`fileKey: jHlUOfuUuDgUw4leAvCtjD`).

**Verification model:** This is a CSS/token migration — there are no meaningful unit tests. Each task is verified by `npm run build` passing and by visual screenshot comparison against the Figma frame. Tasks below use that model instead of TDD red/green.

**Figma page frame node IDs:**
- Home: `124:820`
- About: `124:1160`
- Archive: `124:1322`
- Post: `124:1470`

**Spec:** `docs/superpowers/specs/2026-05-15-design-token-standardization-design.md`

---

## Task 1: Extract raw values from Figma

**Files:**
- Create: `docs/superpowers/specs/token-extraction.md` (working artifact)

- [ ] **Step 1: Pull design context for each page frame**

Call the Figma MCP `get_design_context` tool four times, once per frame, with
`fileKey: jHlUOfuUuDgUw4leAvCtjD` and `nodeId` of `124:820`, `124:1160`,
`124:1322`, `124:1470`. Each returns reference CSS.

- [ ] **Step 2: Confirm the file has no variables**

Call `get_variable_defs` with `fileKey: jHlUOfuUuDgUw4leAvCtjD`, `nodeId: 124:820`.
Expected: empty or no meaningful variables (the file was imported from HTML).

- [ ] **Step 3: Record every raw value into the extraction artifact**

In `docs/superpowers/specs/token-extraction.md`, create a section
`## Figma raw values` with five tables: Font size, Line height, Letter-spacing,
Spacing (padding/gap), Border radius, Color. Each row: the raw value and which
frame(s)/element(s) it appears on. Record every distinct value — do not dedupe yet.

- [ ] **Step 4: Commit**

```bash
git add docs/superpowers/specs/token-extraction.md
git commit -m "docs: extract raw design values from Figma"
```

---

## Task 2: Inventory raw values already in the codebase

**Files:**
- Modify: `docs/superpowers/specs/token-extraction.md`

- [ ] **Step 1: Grep type values from components, pages, layouts**

Run:
```bash
grep -rn "font-size\|line-height\|letter-spacing\|font-weight" \
  src/components src/pages src/layouts --include="*.astro"
```

- [ ] **Step 2: Grep spacing, radius, and color values**

Run:
```bash
grep -rn "padding\|margin\|gap\|border-radius\|#[0-9a-fA-F]\{3,8\}\|rgba\?(" \
  src/components src/pages src/layouts --include="*.astro"
grep -n "font-size\|line-height\|--ink\|--paper\|--fox\|#[0-9a-fA-F]" \
  src/styles/global.css
```

- [ ] **Step 3: Record code values into the extraction artifact**

Add a section `## Code raw values` to `token-extraction.md` mirroring the
five-table structure from Task 1. Each row: raw value + file:line where it appears.
Include the `fontSize` keys and `colors` already in `tailwind.config.js`.

- [ ] **Step 4: Commit**

```bash
git add docs/superpowers/specs/token-extraction.md
git commit -m "docs: inventory raw design values in codebase"
```

---

## Task 3: Cluster values and build the mapping table — REVIEW GATE

**Files:**
- Modify: `docs/superpowers/specs/token-extraction.md`

- [ ] **Step 1: Cluster each category within tolerance**

Merge the Figma and code values. Group near-duplicates:
- Font size: ±0.75px tolerance per cluster.
- Letter-spacing: ±0.02em tolerance.
- Spacing: snap each value to the nearest Tailwind default step (4px grid).
- Border radius: snap to the nearest Tailwind default `rounded-*` step.
- Color: group hexes within a small delta (~ΔE small / within ~3 hex points).

Apply the accessibility rule while clustering: the sub-12px font-size cluster
(9.5/10/10.5px and similar) collapses **upward** — 11px only for uppercase
tracked-out mono micro-labels, otherwise 12px. Never produce a token below 11px.

- [ ] **Step 2: Decide canonical values and idiomatic names**

For font size, define a single scale using Tailwind's standard key names
(`xs, sm, base, lg, xl, 2xl, 3xl, 4xl`; add `5xl` only if a cluster needs it).
Body text is `base` (~17px). Each step gets one canonical size + one lineHeight.
For letter-spacing, map clusters onto Tailwind `tracking-*` defaults; reserve one
custom wide value (`tracking-eyebrow` or similar) for uppercase mono eyebrows.
For spacing/radius, the canonical value IS the Tailwind default step.
For color, the canonical value is an existing `ink`/`paper`/`fox` token; note any
unused ramp steps for removal.

- [ ] **Step 3: Write the mapping table**

Add a section `## Mapping table` to `token-extraction.md`. One sub-table per
category. Every row: `raw value(s) → canonical token → Tailwind utility`.
Example row format: `13.5px, 13px → text-sm → text-sm`. This table must cover
**every** raw value recorded in Tasks 1 and 2 — no value left unmapped.

- [ ] **Step 4: Commit**

```bash
git add docs/superpowers/specs/token-extraction.md
git commit -m "docs: cluster design values into canonical token mapping table"
```

- [ ] **Step 5: STOP — user reviews the mapping table**

Present the mapping table to the user. Do not proceed to Task 4 until the user
approves the canonical values. If they request changes, update the table and
re-commit before continuing.

---

## Task 4: Rewrite `tailwind.config.js`

**Files:**
- Modify: `tailwind.config.js`

- [ ] **Step 1: Replace the `fontSize` scale**

Remove the entire current `fontSize` block (`base`, `lg`, and all `heading-*`
keys). Replace it with the scale from the Task 3 mapping table, using Tailwind's
standard key names and the tuple form that bundles line-height:

```js
fontSize: {
    xs:   ['<size>', { lineHeight: '<lh>' }],
    sm:   ['<size>', { lineHeight: '<lh>' }],
    base: ['<size>', { lineHeight: '<lh>' }],
    lg:   ['<size>', { lineHeight: '<lh>' }],
    xl:   ['<size>', { lineHeight: '<lh>' }],
    '2xl':['<size>', { lineHeight: '<lh>' }],
    '3xl':['<size>', { lineHeight: '<lh>' }],
    '4xl':['<size>', { lineHeight: '<lh>' }],
},
```

Fill `<size>`/`<lh>` from the mapping table. Do not bundle `letterSpacing`.

- [ ] **Step 2: Add the custom `letterSpacing` value**

In `theme.extend`, add a `letterSpacing` key with the one custom eyebrow value
from the mapping table (e.g. `{ eyebrow: '0.14em' }`). Leave Tailwind's default
`tracking-*` scale otherwise intact.

- [ ] **Step 3: Remove the custom `spacing` scale**

Delete the entire `spacing: { 'rhythm-1': ... }` block from `theme.extend`. The
site will use Tailwind's built-in spacing scale.

- [ ] **Step 4: Reconcile `colors`**

Keep the `ink`/`paper`/`fox` structure. Remove any ramp steps the Task 3 mapping
table marked as unused. Adjust any hex the mapping table changed. Keep
`green`/`amber`/`red` functional accents.

- [ ] **Step 5: Drive the typography plugin from the `fontSize` tokens**

In the `typography` block, replace every hardcoded heading `fontSize` /
`lineHeight` (h1–h6) with `theme('fontSize.4xl')` etc. (matching the mapping
table's heading→token assignment). The typography plugin must contain no raw
px/rem font sizes after this step — only `theme(...)` references.

- [ ] **Step 6: Verify the build**

Run: `npm run build`
Expected: build succeeds with no Tailwind config errors.

- [ ] **Step 7: Commit**

```bash
git add tailwind.config.js
git commit -m "refactor: replace font/spacing tokens with standardized scale"
```

---

## Task 5: Reconcile `src/styles/global.css`

**Files:**
- Modify: `src/styles/global.css`

- [ ] **Step 1: Point h1–h6 element rules at the new scale**

In the `HEADING HIERARCHY` section, replace each hardcoded `font-size` /
`line-height` on `h1`–`h6` with the value from the mapping table. Where a
heading maps cleanly to a scale step, prefer `@apply text-<step>` over a raw
declaration so the value is sourced from the token. Keep weight, letter-spacing,
and margins as explicit declarations (use `tracking-*` utilities where they map).

- [ ] **Step 2: Remove the duplicated `:root` color variables**

Delete the `--ink-*`, `--paper`, `--paper-2`, `--fox`, `--fox-ink` custom
properties from the `:root` block. Keep `color-scheme: light dark;`.
NOTE: this will break any component still using `var(--ink-*)` — those are fixed
in Tasks 6–12. If running tasks out of order, do this step after the components.

- [ ] **Step 3: Replace hardcoded hex in `global.css`**

Replace literal hexes in `::selection`, `.skip-to-content`, and the
`:focus-visible` rules with the corresponding token values from the mapping
table (or `theme()` via `@apply` where possible). No raw `#d0342c` / `#0b0b0e`
left outside the Tailwind config.

- [ ] **Step 4: Verify the build**

Run: `npm run build`
Expected: build succeeds.

- [ ] **Step 5: Commit**

```bash
git add src/styles/global.css
git commit -m "refactor: source global heading and color styles from tokens"
```

---

## Component conversion (Tasks 6–12)

Each component task follows the same procedure: open the component, replace
every raw value in its `<style>` block with the mapped Tailwind utility class
(moving the declaration into the element's `class` attribute in the template),
delete the now-empty or shrunken `<style>` rules, build, and visually verify.
A value stays in `<style>` only if no utility expresses it (rare — keep it but
reference a token).

---

## Task 6: Convert `Eyebrow.astro`

**Files:**
- Modify: `src/components/Eyebrow.astro`

- [ ] **Step 1: Convert the `<style>` block to utilities**

Replace `font-size: 0.71875rem` with the mapped utility (`text-xs` or
`text-sm`), `letter-spacing: 0.15em` with `tracking-eyebrow`, and any color with
the mapped `text-ink-*` utility. Move them to the `class` attribute. Remove the
converted declarations from `<style>`.

- [ ] **Step 2: Verify the build**

Run: `npm run build`
Expected: build succeeds.

- [ ] **Step 3: Visually verify**

Run `npm run dev`, open a page using `Eyebrow` (the home or about page),
screenshot it, and compare the eyebrow text against the Figma frame
(`get_screenshot` on `124:820`). They should match.

- [ ] **Step 4: Commit**

```bash
git add src/components/Eyebrow.astro
git commit -m "refactor: convert Eyebrow to token utilities"
```

---

## Task 7: Convert `SectionBreak.astro`

**Files:**
- Modify: `src/components/SectionBreak.astro`

- [ ] **Step 1: Convert the `<style>` block to utilities**

Replace `font-size: 1rem`, `letter-spacing: 0.5em`, `gap: 10px`, the `4px` dot
dimensions, and `border-radius: 999px` with mapped utilities (`rounded-full` for
999px; nearest spacing step for `gap`/dot size). Move to `class` attributes.

- [ ] **Step 2: Verify the build**

Run: `npm run build`
Expected: build succeeds.

- [ ] **Step 3: Visually verify**

Compare the section-break glyph against the Post Figma frame (`124:1470`).

- [ ] **Step 4: Commit**

```bash
git add src/components/SectionBreak.astro
git commit -m "refactor: convert SectionBreak to token utilities"
```

---

## Task 8: Convert `Callout.astro`

**Files:**
- Modify: `src/components/Callout.astro`

- [ ] **Step 1: Convert the `<style>` block to utilities**

Map: `border: 1px solid var(--ink-200)` → `border border-ink-200`;
`border-radius: 8px` → mapped `rounded-*`; `padding: 14px 20px` → nearest
spacing steps; `margin: 24px 0` → nearest spacing steps; `font-size: 11px` →
`text-xs`; `letter-spacing: 0.14em` → `tracking-eyebrow`; `margin: 0 0 6px` →
nearest step; `font-size: 13px` / `line-height: 1.55` → mapped `text-sm`.
Move to `class` attributes; remove converted `<style>` rules.

- [ ] **Step 2: Verify the build**

Run: `npm run build`
Expected: build succeeds.

- [ ] **Step 3: Visually verify**

Compare the callout against the "OPINIONATED SUMMARY" box in the Post Figma
frame (`124:1470`).

- [ ] **Step 4: Commit**

```bash
git add src/components/Callout.astro
git commit -m "refactor: convert Callout to token utilities"
```

---

## Task 9: Convert `ProjectCard.astro`

**Files:**
- Modify: `src/components/ProjectCard.astro`

- [ ] **Step 1: Convert the `<style>` block to utilities**

Map every raw value: `border 1px solid var(--ink-100)` → `border border-ink-100`;
`border-radius: 10px` → mapped `rounded-*`; `padding: 22px` → nearest step;
`gap: 16px`/`12px`/`4px` → nearest steps; `box-shadow` → keep (no utility) but
unchanged; `font-size: 10px`/`9.5px` → the 11px micro-label token
(`text-xs` or the dedicated micro token from the mapping table — these are
uppercase tracked labels); `font-size: 16px` → mapped step; `font-size: 13px`
/`line-height: 1.55` → `text-sm`; `letter-spacing: 0.1em` → mapped `tracking-*`;
`border-radius: 3px` → mapped `rounded-*`; padding `2px 8px`/`2px 7px` → nearest
steps. Move to `class` attributes.

- [ ] **Step 2: Verify the build**

Run: `npm run build`
Expected: build succeeds.

- [ ] **Step 3: Visually verify**

Compare both project cards against the "SELECTED PROJECTS" section of the Home
Figma frame (`124:820`). Confirm no text renders below 11px.

- [ ] **Step 4: Commit**

```bash
git add src/components/ProjectCard.astro
git commit -m "refactor: convert ProjectCard to token utilities"
```

---

## Task 10: Convert `PostRow.astro`

**Files:**
- Modify: `src/components/PostRow.astro`

- [ ] **Step 1: Convert the `<style>` block and inline style objects to utilities**

Map every raw value: `border-bottom 1px solid var(--ink-100)` →
`border-b border-ink-100`; `padding: 11px 0` → nearest step;
grid `gap: 24px`/`16px` → nearest steps; `font-size: 12px`/`12.5px`/`15px`/`10px`
/`10.5px` → mapped tokens (collapse all sub-12px upward per the mapping table);
`border-radius: 3px` → mapped `rounded-*`; padding `1px 7px` → nearest steps.
Also convert the JS style-object literals near line 34/40 (`border:
'1px solid ...'`) to class strings. Keep the `grid-template-columns` track
definitions in `<style>` (no utility equivalent) but unchanged.

- [ ] **Step 2: Verify the build**

Run: `npm run build`
Expected: build succeeds.

- [ ] **Step 3: Visually verify**

Compare the post rows against the Archive Figma frame (`124:1322`) and the
"PROJECTS & TECHNICAL WRITING" list on the Home frame (`124:820`). Confirm no
text below 11px.

- [ ] **Step 4: Commit**

```bash
git add src/components/PostRow.astro
git commit -m "refactor: convert PostRow to token utilities"
```

---

## Task 11: Convert `Nav.astro`

**Files:**
- Modify: `src/components/Nav.astro`

- [ ] **Step 1: Convert the `<style>` block to utilities**

Map: `border-bottom 1px solid var(--ink-100)` → `border-b border-ink-100`;
`height: 56px` → nearest step (`h-14`); `padding: 12px 0` → nearest step;
`gap: 8px` → nearest step; and any font-size/letter-spacing in the nav links and
logo wordmark → mapped tokens. Move to `class` attributes.

- [ ] **Step 2: Verify the build**

Run: `npm run build`
Expected: build succeeds.

- [ ] **Step 3: Visually verify**

Compare the nav bar against the header of any Figma frame (`124:820`).

- [ ] **Step 4: Commit**

```bash
git add src/components/Nav.astro
git commit -m "refactor: convert Nav to token utilities"
```

---

## Task 12: Convert `ReadingProgress.astro`

**Files:**
- Modify: `src/components/ReadingProgress.astro`

- [ ] **Step 1: Convert any raw values in the `<style>` block**

Replace any raw color, size, or spacing values with mapped tokens / utilities.
The progress bar's height and color must come from tokens. Keep dynamic
JS-driven width logic unchanged.

- [ ] **Step 2: Verify the build**

Run: `npm run build`
Expected: build succeeds.

- [ ] **Step 3: Visually verify**

Run `npm run dev`, open a post, scroll, and confirm the progress bar renders
with the token color.

- [ ] **Step 4: Commit**

```bash
git add src/components/ReadingProgress.astro
git commit -m "refactor: convert ReadingProgress to token utilities"
```

---

## Task 13: Convert `src/pages/index.astro`

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Convert raw values to utilities**

Replace every raw `font-size`/`line-height`/`letter-spacing`/spacing/color/radius
value in the page's `<style>` block and inline styles with the mapped utility.
The hero heading (`A.J. Scanlan — engineer, writer, builder.`) must use the
`fontSize` scale step assigned to it in the mapping table. Move declarations to
`class` attributes; remove converted `<style>` rules.

- [ ] **Step 2: Verify the build**

Run: `npm run build`
Expected: build succeeds.

- [ ] **Step 3: Visually verify**

Run `npm run dev`, screenshot the home page, and compare against the Home Figma
frame (`124:820`) — hero, eyebrow, project cards, post list, footer.

- [ ] **Step 4: Commit**

```bash
git add src/pages/index.astro
git commit -m "refactor: convert home page to token utilities"
```

---

## Task 14: Convert `src/pages/about.astro`

**Files:**
- Modify: `src/pages/about.astro`

- [ ] **Step 1: Convert raw values to utilities**

Replace every raw value in the page's `<style>` block and inline styles with the
mapped utility. The `A.J. Scanlan` title, the lede paragraph, the
`CURRENTLY`/`BACKGROUND`/... row labels, and the stack chips must all use mapped
tokens. Move declarations to `class` attributes.

- [ ] **Step 2: Verify the build**

Run: `npm run build`
Expected: build succeeds.

- [ ] **Step 3: Visually verify**

Screenshot the about page, compare against the About Figma frame (`124:1160`).

- [ ] **Step 4: Commit**

```bash
git add src/pages/about.astro
git commit -m "refactor: convert about page to token utilities"
```

---

## Task 15: Convert `src/pages/archive.astro`

**Files:**
- Modify: `src/pages/archive.astro`

- [ ] **Step 1: Convert raw values to utilities**

Replace every raw value in the page's `<style>` block and inline styles
(including the inline script's typed styles) with the mapped utility. The
`Archive` title, the filter tabs, and the year-group labels must use mapped
tokens. Move declarations to `class` attributes.

- [ ] **Step 2: Verify the build**

Run: `npm run build`
Expected: build succeeds.

- [ ] **Step 3: Visually verify**

Screenshot the archive page, compare against the Archive Figma frame
(`124:1322`). Exercise the filter tabs.

- [ ] **Step 4: Commit**

```bash
git add src/pages/archive.astro
git commit -m "refactor: convert archive page to token utilities"
```

---

## Task 16: Convert `src/pages/posts/[slug].astro` and `BaseLayout.astro`

**Files:**
- Modify: `src/pages/posts/[slug].astro`
- Modify: `src/layouts/BaseLayout.astro`

- [ ] **Step 1: Convert raw values to utilities in the post page**

Replace every raw value in `[slug].astro`'s `<style>` block and inline styles
with the mapped utility — the post title, the `← all posts` / tag / date /
read-time meta row, and the post body wrapper. Prose body content is styled by
the typography plugin (already tokenized in Task 4) — do not re-style it inline.

- [ ] **Step 2: Convert raw values in `BaseLayout.astro`**

Replace any raw `font-size`/spacing/color values in `BaseLayout.astro` with
mapped utilities (footer text, layout wrappers).

- [ ] **Step 3: Verify the build**

Run: `npm run build`
Expected: build succeeds.

- [ ] **Step 4: Visually verify**

Screenshot a post page (`/posts/thinking-fast-and-slow`), compare against the
Post Figma frame (`124:1470`) — title, meta row, callout, body, section break.

- [ ] **Step 5: Commit**

```bash
git add src/pages/posts/[slug].astro src/layouts/BaseLayout.astro
git commit -m "refactor: convert post page and layout to token utilities"
```

---

## Task 17: Final sweep, docs update, and full verification

**Files:**
- Modify: `TYPOGRAPHY_AUDIT.md`
- Modify: `COMPONENTS.md`

- [ ] **Step 1: Grep for leftover raw values**

Run:
```bash
grep -rn "font-size\|letter-spacing\|border-radius" \
  src/components src/pages src/layouts --include="*.astro"
```
Expected: effectively nothing — only declarations with no utility equivalent
(documented in Task 3) may remain. Investigate and convert anything unexpected.

- [ ] **Step 2: Grep for leftover hardcoded hex / CSS color vars**

Run:
```bash
grep -rn "#[0-9a-fA-F]\{3,8\}\|var(--ink\|var(--paper\|var(--fox" \
  src/components src/pages src/layouts src/styles --include="*.astro" \
  --include="*.css"
```
Expected: nothing — all color comes from Tailwind tokens.

- [ ] **Step 3: Update `TYPOGRAPHY_AUDIT.md`**

Replace the stale scale tables with the final `fontSize` scale from
`tailwind.config.js`. Remove the "Files to Keep Synchronized" section — heading
sizes now have one source. Update the "Last Updated" line.

- [ ] **Step 4: Update `COMPONENTS.md`**

Update any component spec details that referenced old raw values to reference
the token names instead.

- [ ] **Step 5: Full build and visual pass**

Run: `npm run build`
Expected: build succeeds.
Then run `npm run dev` and compare all four pages side-by-side against their
Figma frames (`124:820`, `124:1160`, `124:1322`, `124:1470`). Confirm: no text
below 11px, headings consistent, spacing on the 4px grid.

- [ ] **Step 6: Commit**

```bash
git add TYPOGRAPHY_AUDIT.md COMPONENTS.md docs/superpowers/specs/token-extraction.md
git commit -m "docs: update typography and component docs to standardized tokens"
```

---

## Spec coverage

- Token architecture (Tailwind names, bundled line-height, separate tracking) → Task 4.
- Single source for heading sizes → Tasks 4 (typography plugin) + 5 (global.css).
- Single source for color → Tasks 4 + 5 (remove `:root` vars) + 17 (verify).
- Pull canonical values from Figma → Tasks 1, 3.
- Cluster near-duplicates → Tasks 2, 3.
- Accessibility floor (no sub-12px, 11px only for mono micro-labels) → Tasks 3, 9, 10, 17.
- Apply as utilities, component `<style>` blocks converted → Tasks 6–16.
- Remove `rhythm-*` spacing scale → Task 4.
- Verification (build + visual) → every application task + Task 17.
- Update stale docs → Task 17.
