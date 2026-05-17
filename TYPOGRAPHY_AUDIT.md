# Typography Audit Report
**Date**: 2026-05-17
**Status**: Final — single source of truth is `tailwind.config.js`

## Current Scale

### Body Text
- Body: `text-base` — 17px / line-height 1.6 (token: `fontSize.base`)
- Mobile body: line-height 1.65 at `max-width: 640px`

### Heading Scale

All heading sizes are defined as Tailwind `fontSize` tokens in `tailwind.config.js` and applied via `@apply` in `global.css` and the Tailwind Typography plugin.

| Level | Token   | Size (px) | Line Height | Weight | Notes                         |
|-------|---------|-----------|-------------|--------|-------------------------------|
| H1    | `text-5xl` | 44px   | 1.1         | 800    | Page/post title; tracking -0.02em |
| H2    | `text-3xl` | 28px   | 1.22        | 700    | No border; tracking -0.015em  |
| H3    | `text-2xl` | 25px   | 1.5         | 600    | No border; tracking -0.005em  |
| H4    | `text-xl`  | 20px   | 1.3         | 600    |                               |
| H5    | `text-lg`  | 19px   | 1.5         | 500    |                               |
| H6    | `text-lg`  | 19px   | 1.5         | 500    | Same size as H5; differentiated by margin |

### Full `fontSize` Token Scale

| Token    | Value (rem) | px  | Line Height | Usage                              |
|----------|-------------|-----|-------------|------------------------------------|
| `2xs`    | 0.6875rem   | 11px | 1.4        | Uppercase mono micro-labels only   |
| `xs`     | 0.75rem     | 12px | 1.45       | Fine print                         |
| `sm`     | 0.8125rem   | 13px | 1.55       | Small UI text, captions            |
| `base`   | 1.0625rem   | 17px | 1.6        | Body text (default)                |
| `lg`     | 1.1875rem   | 19px | 1.5        | H5, H6                             |
| `xl`     | 1.25rem     | 20px | 1.3        | H4                                 |
| `2xl`    | 1.5625rem   | 25px | 1.5        | H3                                 |
| `3xl`    | 1.75rem     | 28px | 1.22       | H2                                 |
| `4xl`    | 2.25rem     | 36px | 1.15       |                                    |
| `5xl`    | 2.75rem     | 44px | 1.1        | H1                                 |
| `6xl`    | 3.0625rem   | 49px | 1.05       |                                    |

### Eyebrow
- Token: `text-2xs` (11px) — uppercase monospace, `tracking-eyebrow` (0.13em), `text-ink-400`

---

## Layout Containers

- `.layout-home`: 920px max-width, 32px padding (20px on mobile)
- `.layout-post`: 720px max-width, 32px padding (20px on mobile)

---

## Design Tokens

All color tokens live in `tailwind.config.js` under `theme.extend.colors`:

- `paper.100` — `#faf9f6` (primary background)
- `paper.200` — `#f3f1ec` (code blocks, subtle wells)
- `fox.500` — `#d0342c` (primary Fox Red)
- `fox.ink` — `#8a221c` (text-grade burgundy)
- Ink scale: `ink.50` → `ink.900` (see `tailwind.config.js`)

**Note:** The `:root` CSS custom properties (`--ink-*`, `--paper`, `--fox`, etc.) have been removed from `global.css`. All tokens are consumed via Tailwind utilities and `theme()` references.

---

## Accessibility Notes

### WCAG AA Compliance
- All heading sizes large enough to meet 3:1 contrast ratio
- Body text meets 4.5:1 contrast ratio
- Line height provides adequate space for readability

### Motion Preferences
- Animations disabled with `prefers-reduced-motion`
- Skip link transition respects motion preferences

### Focus Indicators
- Fox Red outline on all interactive elements

---

## Testing Checklist

- [x] Verify measure on post pages (`/posts/[slug]`)
- [x] Check line height at 17px body size
- [x] Test heading scale progression (H1–H6)
- [x] Verify no red left borders on H2/H3
- [x] Verify dark mode heading visibility
- [x] Test typography plugin in prose content
- [x] Validate all files use consistent values
- [x] Confirm `:root` CSS vars removed; no raw hex consumers remain

---

## Recommendations for Future

### Enhancements
- Consider fluid typography (clamp) for smoother scaling across viewports
- Add responsive heading sizes for very small screens (<375px)
- Test with longer article content (2000+ words)

### Monitoring
- Run periodic audits when changing base font size
- Check heading hierarchy when adding new components
- Verify line height after webfont changes

---

## References
- [Butterick's Practical Typography](https://practicaltypography.com/)
- [The Elements of Typographic Style (Web)](https://webtypography.net/)

---

**Last Updated**: 2026-05-17 — Token standardization finalized; single source in `tailwind.config.js`
