# Component Reference

Guide to using custom components in MDX content.

## Available Components

### Callout

Info boxes with three semantic variants. Use for asides, tips, or warnings.

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

**Accessibility:** Uses semantic ARIA roles (`role="note"`, `role="complementary"`, `role="alert"`)

---

### SectionBreak

Subtle centered ornaments marking transitions between major sections. Magazine-style typographic element.

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
- Fox Red color (#D0342C)
- 60% opacity (50% in dark mode)
- Subtle hover effect (increased opacity)
- Respects `prefers-reduced-motion`

**Usage tips:**
- Use between major conceptual shifts in long essays
- Prefer `variant="diamond"` for formal tone
- Use `variant="dots"` for casual, conversational breaks
- Use `variant="asterism"` for poetic or reflective transitions
- Don't overuse — reserve for truly significant section breaks

---

### ReadingProgress

Automatically included on all post pages. No manual usage required.

Shows a thin Fox Red progress bar at the top of the page that fills as you scroll.

**Features:**
- Fixed position at top of viewport
- 3px height, Fox Red (#D0342C)
- Smooth animation with `requestAnimationFrame`
- ARIA progressbar role for accessibility
- Respects `prefers-reduced-motion`

---

## Usage in MDX

All components are automatically available in MDX files. No import required:

```mdx
---
title: "Your Post Title"
dek: "Short description"
date: 2025-10-27
tags: ["tag1", "tag2"]
status: "published"
openness: "provisional"
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
4. **Dark mode aware** — Proper contrast in light and dark themes
5. **Minimal aesthetic** — Visual calm, no decoration for decoration's sake
6. **Magazine-grade composition** — Professional editorial quality

---

## Requesting New Components

See `TODO.md` for planned components:
- Table of Contents (auto-generated from headings)
- Pull Quotes (magazine-style callouts)
- Figure with Caption (semantic image captions)
- Footnote/Sidenote patterns (margin notes for wide screens)
