# ajscanlan.dev

Personal blog and digital garden — writing my way to understanding.

**Mission:** Publish clear, humble, intellectually playful writing with minimal design and magazine-grade composition. Favoring short "On…" essays, field notes, cheat-sheets, and project logs.

**Principles:** Clarity over flair · Visual calm · Empathy & trust · Layered pedagogy ("onion") · Structured provisionalism · Accessibility by default.

## 🦊 Brand

Abstract **red fox head** (profile) as site mark — smart, alert, kind, minimalist. Single accent red (#D0342C) with neutral ink/mist palette.

## 🏗️ Project Structure

```text
/
├── public/
│   ├── icons/           # Fox mark variants + favicon
│   ├── images/          # Post images & assets
│   └── CNAME            # Custom domain config
├── src/
│   ├── components/
│   │   ├── Callout.astro       # Info/warn/quote callouts
│   │   ├── SectionBreak.astro  # Magazine-style section dividers
│   │   └── ReadingProgress.astro # Scroll progress indicator
│   ├── utils/
│   │   ├── reading-time.ts     # Word count + reading time logic
│   │   └── get-reading-time.ts # Reading time calculation wrapper
│   ├── content/
│   │   ├── config.ts           # Content collections schema
│   │   ├── thoughts/           # "On…" essays (800-1600 words)
│   │   ├── notes/              # Field notes (≤400 words)
│   │   ├── cheat-sheets/       # Opinionated summaries
│   │   ├── logs/               # Project logs (UPLEX, etc)
│   │   └── drafts/             # WIP content (excluded from builds)
│   ├── layouts/
│   │   └── BaseLayout.astro    # Shared layout + typography
│   ├── pages/
│   │   ├── index.astro         # Home + latest posts
│   │   ├── about.astro         # About with onion-layer summary
│   │   ├── feed.xml.ts         # RSS feed
│   │   └── posts/
│   │       ├── [slug].astro    # Dynamic post pages
│   │       └── index.astro     # All posts index
│   └── styles/
│       └── global.css          # Typography-first base styles
├── astro.config.mjs             # Astro + plugins config
├── tailwind.config.js           # Custom palette + utilities
└── tsconfig.json
```

## 📝 Content Types

Each content type has structured frontmatter defined in `src/content/config.ts`:

- **Thoughts** — Reflective essays with `dek`, `tags`, `series`, `readingTime`, `status`, `openness`
- **Notes** — Timestamped links and observations
- **Cheat-sheets** — Copy-paste reference guides
- **Logs** — Dated project entries

### URL Scheme
- `/posts/on-rivers-and-change/` (thoughts)
- `/posts/edge-ai-sparks/` (notes)
- `/posts/verbal-judo/` (cheat-sheets)
- `/posts/uplex-phase-0/` (logs)

## 🧞 Commands

All commands run from the project root:

| Command           | Action                                          |
| :---------------- | :---------------------------------------------- |
| `npm ci`          | Install dependencies (clean install)             |
| `npm run dev`     | Start dev server at `localhost:4321`             |
| `npm run build`   | Build production site to `./dist/`               |
| `npm run preview` | Preview build locally before deploying           |

## 🎨 Tech Stack

- **Framework:** Astro 5 (static site generation)
- **Styling:** Tailwind CSS 3 + custom typography utilities
- **Content:** Markdown/MDX with content collections
- **Markdown plugins:**
  - `remark-gfm` — GitHub Flavored Markdown
  - `remark-smartypants` — Smart quotes & dashes
  - `remark-footnotes` — Inline and reference footnotes
  - `rehype-slug` — Auto-generate heading IDs
  - `rehype-autolink-headings` — Linkable headings
- **Integrations:**
  - `@astrojs/sitemap` — Auto-generate sitemap.xml
  - `@astrojs/rss` — RSS feed generation
  - `@astrojs/mdx` — Enhanced Markdown with components

## 🚀 Deployment

Deploying to GitHub Pages with custom domain `ajscanlan.dev`. Automated via GitHub Actions (`.github/workflows/deploy.yml`) — pushes to `main` trigger a build and deploy.

## 📐 Design Principles

### Typography
- Body: 18-20px with 60-75ch measure
- Line height: 1.55-1.7
- Heading scale: 1.25-1.333
- Code: JetBrains Mono at 90-95% body size

### Layout
- Generous white space with 4/8/12px rhythm
- Content column with proper rag
- Images bleed to grid edge on larger breakpoints

### Accessibility
- AA contrast minimum
- Visible keyboard focus
- Skip-to-content link
- Semantic HTML with proper landmarks

## 🎯 Editorial Approach

### Structured Provisionalism (S.P.)
Long posts end with:
- What I'm confident about
- Live questions / unknowns
- What would falsify this
- Next experiment

### Onion Pedagogy (layered reading)
1. **Layer 1:** 30-sec gist
2. **Layer 2:** 3-min skim (subheads, callouts)
3. **Layer 3:** Full text + references
4. **Layer 4:** Appendices (notes, links, datasets)

## 📚 References

- Full design brief: `.github/copilot-instructions.md`
- Task tracking: `TODO.md`
- Change history: `CHANGELOG.md`
- Accessibility notes: `ACCESSIBILITY_AUDIT.md`

## 🔗 Related Sites

- **uplex.network** — Technical docs for UPLEX (planned)
- **uplex.foundation** — Governance & policy docs (planned)

---

**Voice:** Humble, curious, sincere. "Write your way to understanding." Respect the reader's time; avoid performative gravitas.
