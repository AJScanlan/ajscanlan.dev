# Component Reference

Guide to using custom components in MDX content and page templates.

## Available Components

### Nav

Sticky site navigation with fox mark, brand name, and page links. Included automatically in `BaseLayout.astro`.

No props. Not used directly in MDX.

**Interactive behavior:** Link hover transitions smoothly to `text-fox-ink` (`fox.ink`) color over 120ms.

---

### PostRow

Post list row used on the homepage and archive page. Two layout variants controlled by context.

**Variants:**
- `home` — 3-column layout (used on homepage post sections) with grid columns `100px 1fr 140px`
- `archive` — 4-column layout (used on the `/archive` page) with grid columns `110px 110px 1fr 80px`

**Props:**
- `date` — Date (required)
- `title` — string (required)
- `dek` — string (optional)
- `kind` — `'project-log' | 'technical' | 'cheat-sheet' | 'note' | 'essay'` (required)
- `slug` — string (required)
- `readingTime` — number in minutes (optional)
- `variant`: `"home"` | `"archive"` (default: `"home"`)

Not used directly in MDX.

---

### ProjectCard

Project card with status pill, stack chips, and links. Used in the homepage project grid.

**Props:**
- `project` — Project data entry (required)

Displays `name`, `blurb`, `status` (live/in-progress/archived), `stack[]`, and `links[]` from the `projects` data collection.

**Interactive behavior:** On hover, card lifts with `translateY(-1px)`, border lightens to `border-ink-200`, and a soft shadow appears.

Not used directly in MDX.

---

### Eyebrow

Mono uppercase section label for marking content sections.

```mdx
<Eyebrow>Project Logs</Eyebrow>
```

**Style:** `text-2xs` (11px) monospace / `tracking-eyebrow` (0.13em) / uppercase / `text-ink-400`.

No props beyond children.

---

### Callout

Flat-style info boxes with three semantic variants. Use for asides, tips, or warnings.

```mdx
<Callout type="note" title="Optional title">
Your content here. Supports **markdown**.
</Callout>

<Callout type="tip" title="Pro tip">
Useful information that enhances understanding.
</Callout>

<Callout type="warn" title="Heads up">
Important warnings or caveats.
</Callout>
```

**Props:**
- `type`: `"note"` | `"tip"` | `"warn"` (required)
- `title`: Optional heading text

**Visual style:** Flat style, `bg-paper-200` background, `border-ink-200` border, `rounded` (0.25rem) border-radius.

**Accessibility:** Uses semantic ARIA roles (`role="note"`, `role="complementary"`, `role="alert"`)

---

### SectionBreak

Subtle centered ornaments marking transitions between major sections.

```mdx
<!-- Default: diamond ornament (◆) -->
<SectionBreak />

<!-- Three dot ornament (• • •) -->
<SectionBreak variant="dots" />

<!-- Asterism ornament (⁂) -->
<SectionBreak variant="asterism" />

<!-- Control vertical spacing -->
<SectionBreak spacing="tight" />    <!-- 32px vertical -->
<SectionBreak spacing="normal" />   <!-- 48px vertical (default) -->
<SectionBreak spacing="loose" />    <!-- 64px vertical -->

<!-- Combine props -->
<SectionBreak variant="dots" spacing="loose" />
```

**Props:**
- `variant`: `"diamond"` | `"dots"` | `"asterism"` (default: `"diamond"`)
- `spacing`: `"tight"` | `"normal"` | `"loose"` (default: `"normal"`)

**Visual style:**
- `dots` variant: 3 × 4px circles, `text-ink-200` color
- `diamond` and `asterism` variants: `text-ink-300` color
- Respects `prefers-reduced-motion`

---

### ReadingProgress

Automatically included on all post pages. No manual usage required.

Shows a thin progress bar at the top of the page that fills as you scroll.

**Features:**
- Sticky position at top: 56px
- 2px height, `fox.ink` color (`#8a221c`) at 60% opacity
- Smooth animation with `requestAnimationFrame`
- ARIA progressbar role for accessibility
- Respects `prefers-reduced-motion`

---

## Usage in MDX

`Callout`, `SectionBreak`, and `Eyebrow` are automatically available in MDX files. No import required:

```mdx
---
title: "Your Post Title"
dek: "Short description"
date: 2025-10-27
kind: "technical"
tags: ["tag1", "tag2"]
status: "published"
---

Your introduction paragraph.

<Callout type="tip">
Helpful context for readers.
</Callout>

## First Section

Content here...

<SectionBreak />

## Second Section

More content...

<SectionBreak variant="asterism" spacing="loose" />

## Final Section

Conclusion...
```

---

## Component Design Principles

All components follow these conventions:

1. **Typography-first** — Respect the reading flow
2. **Accessible by default** — Semantic HTML + ARIA when needed
3. **Respects motion preferences** — Honor `prefers-reduced-motion`
4. **Minimal aesthetic** — Visual calm, no decoration for decoration's sake
