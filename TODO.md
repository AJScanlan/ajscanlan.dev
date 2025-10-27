# TODO

- [ ] Restructure `src/content` into collections for `on`, `notes`, `cheats`, `logs`, and `drafts`, reflecting the instruction IA.
- [ ] Expand the content schema to capture `dek`, `series`, `readingTime`, `status`, and `openness`, keeping compatibility with existing posts.
- [ ] Update Tailwind palette to use the specified fox-red accent and ensure neutrals match the brand palette.
- [ ] Add accessibility affordances: skip-to-content link, explicit focus styles, and audit callout contrast.
- [ ] Create the missing `/about/` page referenced in navigation with BaseLayout and onion-layer summary sections.
- [ ] Introduce reading-time calculation (e.g., Astro content hook or build step) and surface it in post templates.
- [ ] Scaffold helper scripts (`npm run new:*`) for generating each content type with the provided frontmatter templates.
- [ ] Add assets for the fox head mark and favicon variants under `public/`.
- [ ] Configure drafts (`src/content/drafts/`) so they are excluded from production builds but easy to preview locally.
