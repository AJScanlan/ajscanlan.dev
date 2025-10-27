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
