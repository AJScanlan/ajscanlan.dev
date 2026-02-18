# TODO

## 🚀 High Impact (MVP blockers)

- [x] **Publish 3 diverse posts** — MVP needs 1 Thought, 1 Field Note, 1 Cheat-sheet
  - [x] Write & publish first Thought (`thoughts/on-rivers-and-change.mdx`)
  - [x] Write & publish first Field Note (`notes/field-note-on-attention.mdx`)
  - [x] Write & publish first Cheat-sheet (`cheat-sheets/thinking-fast-and-slow.mdx`)
  - [x] Write & publish first Project Log (`logs/ajscanlan-dev-phase-0.mdx`)
- [x] **Reading time calculation** — Surface in post templates & index (improve scannability)
- [x] **RSS feed expansion** — Extend `/feed.xml` to include notes, cheat-sheets, and logs (not just thoughts)
- [x] **Dynamic route expansion** — Extend `/posts/[slug].astro` to handle all collection types (notes, cheat-sheets, logs)
- [x] **Homepage + archive unified** — Both surfaces now show all 4 content types with category labels
- [x] **Sitemap generation** — Add to build process for basic SEO
- [ ] **404 page** — Create with consistent brand voice & helpful navigation
- [x] **GitHub Actions CI** — Automate build → deploy to GitHub Pages with custom domain
- [x] **Typography audit** — Verify 60-75ch measure, 1.55-1.7 line height, proper heading scale
- [ ] **Performance check** — Lighthouse audit; lazy-load images; check webfont strategy

## 📝 Content & Editorial

- [ ] **S.P. (Structured Provisionalism) component** — Build reusable appendix layout for essays
- [ ] **Scaffold helper scripts** (`npm run new:thought`, `new:note`, `new:cheat`, `new:log`)
- [ ] **Content templates** — Add frontmatter templates to repo docs for easy copy-paste
- [ ] **Link rot detection** — Set up quarterly check or tool for external link validation
- [ ] **Cross-references system** — Enable linking between related posts (manual or semi-auto)

## 🎨 Design & UX

### Scannability Improvements (Magazine-Grade Editorial)
- [ ] **Table of Contents component** — Auto-generate TOC from headings for longer articles (800+ words); fits "layered pedagogy" philosophy
- [x] **Strengthen heading visual hierarchy** — Add subtle left border on h2/h3 in Fox Red; increase weight contrast between levels
- [ ] **Pull Quote component** — Magazine-style callouts for key ideas (larger, offset text); breaks up long reads naturally
- [x] **Section break ornaments** — Subtle centered markers (◆ or • • •) between major sections
- [x] **Reading progress indicator** — Thin Fox Red line at top showing scroll progress for long reads

### Components & Patterns
- [ ] **Figure component with caption** — Semantic `<figure>` + `<figcaption>`, proper spacing
- [ ] **Footnote/sidenote pattern** — Implement tooltip or margin notes for wide screens
- [ ] **Print stylesheet** — Ensure essays print beautifully (hide nav, adjust margins)
- [ ] **Focus indicators** — Audit & ensure all interactive elements have visible focus states
- [ ] **Responsive image strategy** — Modern formats (WebP/AVIF), proper srcset, lazy-loading
- [ ] **Code block enhancements** — Syntax highlighting, copy button, language labels

## 🏗️ Technical Infrastructure

- [ ] **Draft workflow** — Implement `import.meta.env.PROD` filtering to exclude drafts in production while keeping visible in dev
- [ ] **Remark/Rehype plugins** — External link icons, reading time calculation
- [ ] **Open Graph & Twitter Cards** — Social sharing meta tags with fallback to site mark
- [ ] **Canonical URLs** — Set proper canonicals for SEO
- [ ] **Search functionality** — Consider lightweight client-side search (Pagefind/Fuse.js)
- [ ] **Dark mode polish** — Verify contrast ratios, test all components, smooth transition

## 🔗 UPLEX Integration (Future)

- [ ] **Cross-site navigation strategy** — Decide on linking between ajscanlan.dev, uplex.network, uplex.foundation
- [ ] **Shared component library** — Extract common layouts/typography for reuse across sites
- [ ] **Content series taxonomy** — Tag posts related to UPLEX project for filtering

## 📊 Analytics & Monitoring

- [x] **Plausible Analytics (or none)** — Make final decision & implement if desired
- [ ] **Core Web Vitals tracking** — Set baseline; monitor over time
- [ ] **Broken link monitoring** — Tool or script to catch 404s

## ✅ Already Complete

- [x] Restructure `src/content/` directories for `thoughts`, `notes`, `cheat-sheets`, `logs`, and `drafts` to mirror the updated IA.
- [x] Define Astro content collections for each type in `src/content/config.ts`, including new frontmatter fields (`dek`, `series`, `readingTime`, `status`, `openness`).
- [x] Backfill the new frontmatter on existing Markdown/MDX entries and migrate legacy files out of `content/`.
- [x] Update Tailwind palette to use the specified fox-red accent and ensure neutrals match the brand palette.
- [x] Add accessibility affordances: skip-to-content link, explicit focus styles, and audit callout contrast.
- [x] Create the missing `/about/` page referenced in navigation with BaseLayout and onion-layer summary sections.
- [x] Add assets for the fox head mark and favicon variants under `public/`.

---

## 🎯 Next Up

1. Implement draft workflow with `import.meta.env.PROD` filtering (dev can see drafts; production cannot)
2. Performance check — Lighthouse audit; lazy-load images; webfont strategy
3. 404 page — brand voice + helpful navigation
4. Open Graph & Twitter Cards — social sharing meta tags
