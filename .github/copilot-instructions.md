
# AJSCANLAN.DEV

## 0) One‑screen Summary (TL;DR)

**Mission:** Publish clear, humble, intellectually playful writing (especially short “On…” essays) and practical notes; use minimal, legible design with magazine‑grade composition.

**Principles:** Clarity over flair · Visual calm · Empathy & trust · Layered pedagogy (“onion”) · Structured provisionalism (state uncertainty & scope) · High reuse (templates/partials) · Accessibility by default.

**Stack:** Astro + Markdown/MDX · GitHub Pages · GitHub Actions CI · DNS already on Namecheap. Typography first; light CSS utilities; optional Tailwind (if needed).

**Brand cue:** Abstract **red fox head** (profile), modernist mark; clean wordmark. Favor geometric construction, negative space, and a single accent red.

**Sites:**  
- **ajscanlan.dev** — personal essays, notes, cheat‑sheets.  
- **uplex.network** — technical docs for UPLEX.  
- **uplex.foundation** — governance & policy docs for UPLEX.

**Voice:** Humble, curious, sincere. “Write your way to understanding.” Respect the reader’s time; avoid performative gravitas while borrowing the classical “On…” titling as playful homage.

---

## 1) Goals & Scope

### 1.1 Objectives
- Ship a durable personal blog with legible typography, minimal UI, and print‑worthy layout habits.
- Establish canonical content types: **On… essays**, **Field Notes**, **Cheat‑sheets**, and **Project Logs**.
- Keep deploy friction near‑zero (commit → preview → main → publish).

### 1.2 Non‑goals (for now)
- Heavy design systems or animation.  
- CMS with databases; keep to Markdown/MDX + Git.  
- Dark‑pattern growth hacks; SEO kept lightweight and honest.

---

## 2) Brand System (Quick Spec)

### 2.1 Icon concept — Abstract Red Fox (profile)
**Attributes:** smart · alert · kind · minimalist  
**Geometry:** construct from 2–3 primary shapes (triangle ear, curved snout, neck wedge).  
**Line:** 1–2 stroke weights max; prefer solid fill + negative space over outlines.  
**Color:** single accent **Fox Red** + neutral ink.  
**Contrast:** AA/AAA compliant on light background.

**Starter palette (editable):**
- Fox Red hexD0342C
- Ink hex0B0B0E
- Mist (bg) hexF7F7F8
- Graphite (muted text) hex44464A
- Accent Green (success) hex1F7A5C

**Usage:** 24–32 px favicon; 128–256 px site mark; avoid gradients; allow 1‑color print.

### 2.2 Wordmark
- Typeface: same as body or a restrained grotesk (e.g., Inter/IBM Plex Sans).  
- Letter‑spacing slightly tight for small sizes; no faux‑bold.

---

## 3) Design System (Lean)

### 3.1 Typography
- **Body:** system stack or Inter/Source Sans/IBM Plex Sans.  
- **Size/measure:** 18–20 px body; 60–75 ch line width.  
- **Line height:** 1.55–1.7; increase on narrow screens.  
- **Headings:** scale 1.25–1.333; keep H1 rare.  
- **Code:** JetBrains Mono/Cascadia Code; 90–95% of body size.  
- **Emphasis:** prefer *italic* for nuance, **bold** for true anchors only.

### 3.2 Layout rules
- Generous white space.  
- Use a **content column** with rhythm units (4/8/12 px).  
- Images bleed to grid edge only on larger breakpoints.  
- Never center long text; left‑align with rag control.

### 3.3 Components (low‑friction)
- **Callout** (info/warn/quote).  
- **Footnote**/reference.  
- **Figure** with caption.  
- **Inline definition** (tooltip or sidenote on wide screens).

---

## 4) Information Architecture

### 4.1 Content types
- **On… Essay:** 800–1,600 words. Reflective; one idea.  
- **Field Notes:** ≤400 words, link‑heavy, timestamped.  
- **Cheat‑sheet:** opinionated summaries with copy‑paste blocks.  
- **Project Log:** dated entries for builds (UPLEX, tooling).

### 4.2 URL scheme
- `/thoughts/rivers-and-change/`  
- `/notes/2025-10-27-edge-ai-sparks/`  
- `/cheats/verbal-judo/`  
- `/logs/uplex/2025-10-27-phase-0/`

### 4.3 Metadata
- `title`, `dek` (1–2 sentence summary), `tags`, `series`, `readingTime`, `updated`, `status: draft|published`, `openness: provisional|confident`.

---

## 5) Editorial Guidelines

### 5.1 Voice
Humble, earnest, technically fluent. Prefer concrete nouns, short sentences, and honest caveats. Say “I think,” “I’m not sure,” and state what would change your mind.

### 5.2 Structured Provisionalism (S.P.)
Each long post ends with:
- **What I’m confident about**  
- **Live questions / unknowns**  
- **What would falsify this**  
- **Next experiment**

### 5.3 Onion Pedagogy (layered)
- **Layer 1:** 30‑sec gist.  
- **Layer 2:** 3‑min skim (subheads, callouts).  
- **Layer 3:** Full text + references.  
- **Layer 4:** Appendices (notes, links, datasets).

### 5.4 “On…” Titles
Use with playful reverence; avoid borrowing gravitas. Keep deks plain: explain the metaphor in one crisp sentence.

---

## 6) Tech Stack & Workflow

### 6.1 Astro workflow (GitHub Pages)
1. `npm create astro@latest` → content collection + Markdown.  
2. Local dev: `npm run dev`.  
3. Add **GitHub Actions** with Astro static build → pushes to `gh-pages`.  
4. Custom domain set; HTTPS; 404 route configured.  
5. Drafts live under `src/content/drafts` and are excluded from build.

### 6.2 Optional utilities
- Tailwind for utility classes (only if helpful).  
- Remark/Rehype plugins: autolink headers, footnotes, reading‑time, external‑links.  
- RSS feed + sitemap.  
- Plausible or no analytics.

### 6.3 Project tree
```
src
  /components
  /layouts
  /styles
  /content
    /thoughts
    /notes
    /cheat-sheets
    /logs
    /drafts
public
  /images
  /icons
scripts/
.vscode/
```

---

## 7) Reusable Templates (Front‑matter + MD)

### 7.1 Thoughts essay
```md
---
title: "On Rivers and Change"
dek: "A short reflection on flux, constraints, and how systems carve their channels."
tags: ["philosophy", "systems", "change"]
series: "Thoughts"
readingTime: 6
status: "draft"
openness: "provisional"
updated: 2025-10-27
---

> Layer 1 — the 30‑sec gist.

## Why this
A paragraph setting the question and stakes.

## The thread
Key sections, each 3–5 short paragraphs.

## Where I’m unsure
Bulleted uncertainties.

## S.P. Appendix
- Confident about:
- Unknowns:
- Falsify by:
- Next experiment:
```

### 7.2 Notes
```md
---
title: "Edge AI & Federation: first thoughts"
tags: ["notes", "edge-ai", "federation"]
status: "published"
updated: 2025-10-27
---

- 12:41 — thought/link
- 14:05 — test result
```

### 7.3 Cheat‑sheets
```md
---
title: "Verbal Judo — quick handles"
tags: ["cheat-sheet", "communication"]
status: "draft"
updated: 2025-10-27
---

## Moves
- Move → script
## Caveats
## References
```

---

## 8) Accessibility & Performance

- Color contrast AA minimum; test links and callouts.  
- Keyboard focus visible; skip‑to‑content link.  
- Prefer `<figure>` with `<figcaption>`.  
- Lazy‑load large images; use modern formats when convenient.  
- No blocking webfonts: system stack acceptable to avoid FOUT.

---

## 9) SEO & Social (lightweight)

- `<title>` + meta description from `dek`.  
- Open Graph + Twitter cards (fallback to site mark).  
- RSS + `/sitemap.xml`.  
- Canonicals; no intrusive popups.

---

## 10) Repo Conventions

- Conventional Commits (`feat:`, `fix:`).  
- Keep‑a‑Changelog in `CHANGELOG.md`.  
- `src/content/drafts/` ignored by build.  
- `/public/images/` flat with slugs as prefixes.  
- Small, legible PRs; squash‑merge.

---

## 11) Adjacent Sites (UPLEX)

Keep **uplex.network** technical and **uplex.foundation** governance‑oriented. Cross‑link sparingly; each site should stand alone. Reuse typography and spacing rules; distinct accent colors allowed.

---

## 12) Open Questions / Next Decisions

- Pick final body typeface (system vs Inter/IBM Plex).  
- Decide on Tailwind usage (Y/N).  
- Finalize fox icon geometry + exact red.  
- Choose analytics (Plausible or none).  
- Lock URL taxonomy (see §4.2).

---

## 13) Definition of Done (MVP)

- Home, Posts index, About, RSS, Sitemap.  
- At least 3 published posts (1 “On…”, 1 Field Note, 1 Cheat‑sheet).  
- Passing accessibility sweep; core web vitals decent.  
- CI deploy green from `main`; custom domain live.

---

## 14) Quick Start

```bash
# clone, install, run
npm ci
npm run dev

# create a “Thoughts” essay
npm run new:thought -- "On Rivers and Change"

# build & preview
npm run build && npm run preview
```
(You can wire `npm run new:*` scripts later to scaffold files.)

---

## 15) Icon Draft Brief (for design tool or AI image gen)

**Prompt skeleton:**  
“Abstract red fox head in profile, minimalist geometric logo, flat solid color, strong negative space, single accent red on clean light background, no gradients, print‑friendly, modernist.”

**Constraints:** 1‑color flattening must retain recognizability. Nose/ear geometry readable at 16 px.

---

## 16) Maintenance Rhythm

- Weekly: publish one Field Note or Log.  
- Bi‑weekly: one “On…” draft → publish or park.  
- Quarterly: design/IA tidy‑up and link‑rot pass.

---
