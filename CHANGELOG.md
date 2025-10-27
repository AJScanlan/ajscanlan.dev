# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Template

```
Added: for new features.
Changed: for changes in existing functionality.
Deprecated: for soon-to-be removed features.
Removed: for now removed features.
Fixed: for any bug fixes.
Security: in case of vulnerabilities.
```


## [0.0.7]

### Added
- ReadingProgress component — Thin Fox Red progress bar at page top showing scroll percentage; respects prefers-reduced-motion and uses requestAnimationFrame for performance
- SectionBreak component — Magazine-style ornamental separators (diamond, dots, asterism variants) with configurable spacing for visual breathing room
- Reading time calculation utilities — Automatic word count and reading time estimation (calculateReadingTime and formatReadingTime in reading-time.ts); strips code blocks, markdown syntax, and HTML before counting
- Comprehensive documentation suite:
  - ACCESSIBILITY_AUDIT.md — WCAG AA compliance checklist, contrast ratios, keyboard navigation patterns, and testing tools
  - COMPONENTS.md — Component catalog with usage examples for Callout, ReadingProgress, and SectionBreak
  - TYPOGRAPHY_AUDIT.md — Modular scale rationale, measure ranges (60-75ch), line-height optimization (1.55-1.7)
  - READING_TIME.md — Reading time calculation methodology and integration guide

### Changed
- Dynamic routing — /posts/[slug]/ now handles all content types (thoughts, notes, cheat-sheets, logs) instead of thoughts-only; fetches collections in parallel
- RSS feed — feed.xml.ts aggregates and sorts all published content types by date; handles both date and updated fields
- Typography system — Refined 1.25 modular scale (18→20→25→31→39→49px); optimized base line-height to 1.65 (1.7 on mobile)
- Heading hierarchy — h2/h3 now feature Fox Red left borders (4px/3px) for stronger visual structure; h1 uses 800 weight for maximum impact
- Content rendering — Posts now display reading time alongside date/updated metadata; made SectionBreak available in MDX alongside Callout
- Copilot instructions — Streamlined project overview with emphasis on content collection architecture, URL conventions, and accessibility requirements
- README — Expanded with detailed design system documentation, content type specifications, and development workflow
- TODO list — Added post publishing requirements and enhanced scannability features

### Fixed
- Line-height consistency — Unified body line-height across viewport sizes (1.65 desktop, 1.7 mobile) per typography audit
Heading margins — Adjusted vertical rhythm for improved readability (h2: 2.5rem top, h3: 2rem top)
- Post metadata display — Properly handles collection-specific date fields (cheat-sheets use updated only)


## [0.0.6]

### Added
- Design: new fox head mark SVG icon (`/public/icons/RED_FOX.svg`) and updated favicon
- Pages: comprehensive `/about` page with structured content sections and accessibility features
- Accessibility: skip-to-content link and enhanced keyboard focus styles throughout the site
- Components: expanded `Callout` component with multiple variants (info, warn, quote) and improved styling
- Design: comprehensive color palette in Tailwind config with semantic naming (Fox Red, Ink, Mist, Graphite, Sage)
- Typography: custom font stacks and refined typographic scale with improved line heights and spacing

### Changed
- Layout: enhanced header with fox icon integration and improved navigation link styling
- Design: updated global styles with magazine-grade composition principles and generous white space
- Typography: refined body text sizing (18–20px), line width constraints (60–75ch), and vertical rhythm
- Layout: improved `BaseLayout` with better semantic HTML structure and favicon linking
- URL structure: adjusted post routing in `[slug].astro` for consistency

### Removed
- Content: deleted unused `hello.mdx` placeholder post


## [0.0.5] - 2025-10-27

### Added
- Tooling: added @astrojs/check and typescript as dev dependencies to enable astro check.

### Changed
- Content: replaced posts collection with thoughts, notes, cheat-sheets, logs, and drafts collections in config.ts, standardising frontmatter on dek, status, openness, and related metadata.
- Pages: updated index.astro, src/pages/posts/*.astro, and feed.xml.ts to read from the new thoughts collection and surface dek summaries.
- Content: migrated the “On Rivers and Change” essay to on-rivers-and-change.mdx with the new schema and removed the legacy posts entry.


## [0.0.4] - 2025-10-27

### Added
- Copilot instruction files
- TODO.md
- CHANGELOG.md

### Changed
- Updated favicon from Astro default to red fox

## [0.0.3] - 2025-10-27

### Added
- Feed.xml.ts for RSS feed generation


## [0.0.2] - 2025-10-27

### Added
- Tailwind CSS setup and global styles
- Content management with Astro
- Enhanced layout and components

### Changed
- Updated TypeScript configuration


## [0.0.1] - 2025-10-14

### Added
- Initial Astro project skeleton
- GitHub Actions workflow for deploying to GitHub Pages
- CNAME file for custom domain

### Changed
- Configure site URL in Astro config
