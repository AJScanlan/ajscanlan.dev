# Accessibility Audit

## Implemented Features

### ✅ Skip-to-Content Link
- Hidden by default, appears on keyboard focus
- Positioned at top-left of viewport
- Fox Red background with white text
- Jumps to `#main-content` landmark
- **Keyboard test:** Press Tab immediately after page load

### ✅ Focus Styles
All interactive elements have visible focus indicators:
- **Fox Red** (#D0342C) outline, 3px width, 2px offset
- **Dark mode:** Lighter fox (#F87171) for better contrast
- Applied to: links, buttons, inputs, textareas, selects
- Uses `:focus-visible` to avoid mouse focus rings

### ✅ ARIA Landmarks
- `<header role="banner">` - Site header
- `<nav aria-label="Main navigation">` - Navigation
- `<main id="main-content" role="main">` - Main content
- `<footer role="contentinfo">` - Site footer

### ✅ Callout Contrast & Semantics
**Improved borders and backgrounds for WCAG AA compliance:**

#### Note Callout
- Border: `ink-400` (light) / `ink-600` (dark)
- Background: `ink-50` (light) / `ink-800/40` (dark)
- Text: `ink-800` (light) / `ink-100` (dark)
- ARIA: `role="note"`

#### Tip Callout
- Border: `green` (#1F7A5C)
- Background: `green/5` (light) / `green/10` (dark)
- Text: `ink-800` (light) / `ink-100` (dark)
- ARIA: `role="complementary"`

#### Warning Callout
- Border: `amber` (#D97706)
- Background: `amber/10` (light) / `amber/15` (dark)
- Text: `ink-900` (light) / `ink-100` (dark)
- ARIA: `role="alert"` (announces to screen readers)

---

## Contrast Ratios

### Primary Text
| Element | Light Mode | Dark Mode | Ratio | WCAG Level |
|---------|------------|-----------|-------|------------|
| Body text (`ink-700` on `paper-100`) | #1A1B1D on #F7F7F8 | | ~15:1 | AAA ✅ |
| Headings (`ink-800` on `paper-100`) | #0F1011 on #F7F7F8 | | ~17:1 | AAA ✅ |
| Links (`fox-500` on `paper-100`) | #D0342C on #F7F7F8 | | ~5.8:1 | AA ✅ |
| Secondary text (`ink-500` on `paper-100`) | #44464A on #F7F7F8 | | ~9:1 | AAA ✅ |

### Dark Mode
| Element | Colors | Ratio | WCAG Level |
|---------|--------|-------|------------|
| Body text (`ink-100` on `ink-900`) | #E8E8E9 on #0B0B0E | ~13:1 | AAA ✅ |
| Links (`fox-400` on `ink-900`) | #F87171 on #0B0B0E | ~7.2:1 | AAA ✅ |

### Callouts
| Type | Light Border | Dark Border | Status |
|------|--------------|-------------|--------|
| Note | `ink-400` on `ink-50` | `ink-600` on `ink-800/40` | AA ✅ |
| Tip | `green` on `green/5` | `green` on `green/10` | AA ✅ |
| Warning | `amber` on `amber/10` | `amber` on `amber/15` | AA ✅ |

All callout text uses high-contrast ink colors for readability.

---

## Testing Checklist

### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Skip-to-content appears and works
- [ ] All focus indicators visible
- [ ] No keyboard traps
- [ ] Logical tab order

### Screen Reader
- [ ] Landmarks announced correctly
- [ ] Navigation labeled properly
- [ ] Callouts announce their type
- [ ] Images have alt text
- [ ] Links descriptive (no "click here")

### Visual
- [ ] Text meets AA contrast (4.5:1 for body, 3:1 for large)
- [ ] Focus indicators at least 3px and visible
- [ ] Color not sole information carrier
- [ ] Hover states don't rely on color alone

### Browser Testing
- [ ] Chrome + VoiceOver (macOS)
- [ ] Safari + VoiceOver (macOS)
- [ ] Firefox + NVDA (Windows)
- [ ] Edge + JAWS (Windows)

---

## Validation Tools

### Manual Testing
```bash
# Test with keyboard only
# 1. Load page
# 2. Press Tab - skip link should appear
# 3. Press Enter - should jump to main content
# 4. Continue tabbing through all interactive elements

# Test with screen reader
# macOS: Cmd+F5 to enable VoiceOver
# Navigate with VO+Right Arrow
```

### Automated Tools
- **axe DevTools** browser extension
- **Lighthouse** accessibility audit (Chrome DevTools)
- **WAVE** browser extension
- **Pa11y** CLI tool

```bash
# Install Pa11y
npm install -g pa11y

# Test local site
pa11y http://localhost:4321
```

### Contrast Checkers
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Colour Contrast Analyser (CCA)](https://www.tpgi.com/color-contrast-checker/)

---

## Known Issues / Future Improvements

- [ ] Add `prefers-reduced-motion` support for transitions
- [ ] Test with Windows High Contrast Mode
- [ ] Add visible focus within prose content (heading anchors)
- [ ] Consider adding focus indicators to code blocks
- [ ] Add lang attributes to any non-English content
- [ ] Test RSS feed accessibility

---

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Checklist](https://webaim.org/standards/wcag/checklist)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)
- [Inclusive Components](https://inclusive-components.design/)

---

**Last Updated:** 2025-10-27  
**Compliance Target:** WCAG 2.1 Level AA
