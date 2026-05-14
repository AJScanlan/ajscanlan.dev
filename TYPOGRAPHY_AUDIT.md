# Typography Audit Report
**Date**: May 14, 2026
**Status**: Updated for Engineer's Notebook redesign (v2.0.0)

## Current Scale

### Body Text
- Body: 17px / line-height 1.6
- Post body: 17.5px / line-height 1.65

### Heading Scale
| Level | Size  | Line Height | Weight | Notes                    |
|-------|-------|-------------|--------|--------------------------|
| H1 (home)  | 50px | 1.05 | 700 | Hero heading             |
| H1 (post/about) | 44px | 1.08 | 700 | Page/post title     |
| H2    | 28px  | 1.22        | 700    | No border                |
| H3    | 20px  | 1.3         | 600    | No border                |

### Eyebrow
- 11.5–12px monospace / .14–.16em letter-spacing / uppercase / ink-400

---

## Layout Containers

- `.layout-home`: 920px max-width, 32px padding
- `.layout-post`: 720px max-width, 32px padding

---

## Design Tokens

- `--paper: #faf9f6`
- `--paper-2: #f3f1ec`
- `--fox: #d0342c`
- `--fox-ink: #8a221c`
- Ink scale: 900→50 (see `src/styles/global.css`)

---

## Consistency Check

### Files to Keep Synchronized
- `src/styles/global.css` — Direct element styles and CSS custom properties
- `tailwind.config.js` — Design tokens
- Tailwind typography plugin — Prose styles

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
- [x] Test heading scale progression (H1–H3)
- [x] Verify no red left borders on H2/H3
- [x] Verify dark mode heading visibility
- [x] Test typography plugin in prose content
- [x] Validate all files use consistent values

---

## Recommendations for Future

### Enhancements
- [ ] Consider fluid typography (clamp) for smoother scaling across viewports
- [ ] Add responsive heading sizes for very small screens (<375px)
- [ ] Test with longer article content (2000+ words)

### Monitoring
- [ ] Run periodic audits when changing base font size
- [ ] Check heading hierarchy when adding new components
- [ ] Verify line height after webfont changes

---

## References
- [Butterick's Practical Typography](https://practicaltypography.com/)
- [The Elements of Typographic Style (Web)](https://webtypography.net/)

---

**Last Updated**: May 14, 2026 — Engineer's Notebook redesign (v2.0.0)
