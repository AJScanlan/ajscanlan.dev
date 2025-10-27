# TODO

- [x] Restructure `src/content/` directories for `thoughts`, `notes`, `cheat-sheets`, `logs`, and `drafts` to mirror the updated IA.
- [x] Define Astro content collections for each type in `src/content/config.ts`, including new frontmatter fields (`dek`, `series`, `readingTime`, `status`, `openness`).
- [x] Backfill the new frontmatter on existing Markdown/MDX entries and migrate legacy files out of `content/`.
- [x] Update Tailwind palette to use the specified fox-red accent and ensure neutrals match the brand palette.
- [x] Add accessibility affordances: skip-to-content link, explicit focus styles, and audit callout contrast.
- [ ] Create the missing `/about/` page referenced in navigation with BaseLayout and onion-layer summary sections.
- [ ] Introduce reading-time calculation (e.g., Astro content hook or build step) and surface it in post templates.
- [ ] Scaffold helper scripts (`npm run new:*`) for generating each content type with the provided frontmatter templates.
- [x] Add assets for the fox head mark and favicon variants under `public/`.
- [ ] Configure drafts (`src/content/drafts/`) so they are excluded from production builds but easy to preview locally.
