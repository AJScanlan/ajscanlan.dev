# Token Extraction — Raw Figma Values

Extracted from file `jHlUOfuUuDgUw4leAvCtjD` via `get_design_context` (four frames) and `get_variable_defs`.  
Date: 2026-05-15.  
Frames covered: Home `124:820`, About `124:1160`, Archive `124:1322`, Post `124:1470`.

---

## Figma variables note

`get_variable_defs` returned a non-empty object — the file **does** contain Figma variable definitions (local CSS-variable aliases). These are the `var(--…)` references used in the generated code. They are **not** named design tokens in the Figma Variables panel in the traditional sense; they appear to be auto-generated from the file import. The variable map contained values for font-family, font-size, font-weight, line-height, letter-spacing, item-spacing, stroke-weight, opacity, and color. All concrete numeric/color values are captured in the tables below. No Figma library variables were detected.

---

## Figma raw values

### Font size

| Raw value | Frame(s) / element(s) |
|-----------|----------------------|
| `11px` | All frames — breadcrumb label ("01 · Home" etc.), project card status badge, post category badge, archive filter tabs, section headings in header breadcrumb |
| `11.5px` | All frames — availability status badge ("Available for new roles · Jun 2026"), separator dots next to status, project card tech-tag labels |
| `12px` | All frames — section heading labels (JetBrains Mono, uppercase; "Selected projects", "Currently", etc.), archive year dividers ("2026", "2025"), project card "log / github" links, About Tag component |
| `12.5px` | All frames — date column in post list (Home, Archive frames: "22 Apr 2026", "2026-05-08", etc.), contact list labels (About: "email", "github", etc.) |
| `12.8px` | Home frame — "References & cheat sheets" intro paragraph |
| `12.9px` | Home frame — "Essays" section intro paragraph |
| `13px` | All frames — footer copyright and design-reference text, archive filter tab text ("All", "Project logs", etc.) |
| `13.5px` | All frames — hero contact links ("hello@ajscanlan.dev", "github.com/AJScanlan ↗", etc.), About contact list values |
| `13.7px` | Home frame — project card body paragraph (ajscanlan.dev card, pgexplain.fyi card body text) |
| `13.8px` | All frames — header nav link "Archive" |
| `13.9px` | All frames — header nav link "GitHub ↗" |
| `14px` | Post frame — inline `<code>` span font-size (used as item-spacing alias in code spans: `var(--item-spacing/14,14px)`) |
| `14.5px` | All frames — header nav link "RSS" |
| `13.4px` | Home frame — project card body paragraph (UPLEX card body text) |
| `13.5px` | Home frame — project card body paragraph (tinypipe card: `13.5px`) |
| `15.3px` | Archive frame — archive page intro paragraph |
| `15.8px` | About frame — "Currently" and "Background" and "How I work" body paragraphs |
| `15.9px` | About frame — "This site" body paragraph |
| `16.1px` | Post frame — closing paragraph ("What I'd do differently" body) |
| `16.3px` | Post frame — body paragraph text (multiple instances) |
| `16.5px` | Post frame — inline continuation paragraph text fragments |
| `16.6px` | All frames — header wordmark "ajscanlan" (bold part) |
| `17.3px` | Home frame — hero description paragraph |
| `17.5px` | About frame — hero description paragraph |
| `17.7px` | Archive frame — post list title "Three patterns that replaced Redux…" |
| `17.8px` | Home frame and Archive frame — post list title "Three patterns…" (Home: `17.8px`), Archive: `17.8px`, `17.8px` |
| `18px` | Home frame and Archive frame — post list title text (multiple items: "Thinking, Fast and Slow…", "Postgres EXPLAIN…", "Git rebase…", "On Rivers and Change", "Hunting a 0.4%…") |
| `18.1px` | Home frame — project card heading "pgexplain.fyi", "tinypipe" |
| `18.3px` | Home frame — project card heading "ajscanlan.dev" (`18.3px` per variable `font-size/19` companion), Archive: "UPLEX — Phase 0" title (`18.3px`) |
| `18.4px` | Archive frame — post list title "ajscanlan.dev — Phase 0", "On Rivers and Change" |
| `18.9px` | Post frame — post subtitle / lede (Charter Italic) |
| `19px` | Home frame — project card heading "UPLEX" (variable `font-size/19`) |
| `19.2px` | Post frame — H3 heading "What I'd do differently" |
| `27.3px` | Post frame — H2 section heading ("What I was actually trying to do", "Heap snapshot diff") |
| `43px` | Post frame — H1 post title |
| `43.1px` | About frame and Archive frame — H1 page heading ("A.J. Scanlan — engineer…", "Archive") |
| `49px` | Home frame — hero H1 emphasis span "what I / learned." |
| `49.6px` | Home frame — hero H1 main span "I build things, then I / write down" |

---

### Line height

| Raw value | Frame(s) / element(s) |
|-----------|----------------------|
| `13.42px` | Post frame — H2 section number label ("01 — The setup", "02 — The investigation") |
| `17.6px` | All frames — breadcrumb, status badge, project card status label, post category badge |
| `18.4px` | All frames — availability status text |
| `19.2px` | All frames — section headings (JetBrains Mono uppercase), archive year labels, "log / github" links |
| `20px` | All frames — date column in post list, archive date column |
| `20.8px` | All frames — footer text, archive filter tab text |
| `20.93px` | Post frame — code block (`<pre>`) lines |
| `21.6px` | Home frame — hero contact links |
| `21.75px` | Home frame — project card body paragraphs |
| `22.28px` | About frame — contact list items |
| `22.4px` | Home frame — "Selected projects" and "Projects & technical writing" and "References & cheat sheets" intro paragraphs; "Essays" intro |
| `23.1px` | Post frame — inline `<code>` span line-height |
| `23.2px` | All frames — header nav links |
| `24px` | About frame — reader's note body paragraph (Post frame: `24px`) |
| `24.7px` | Home frame — project card heading line-height |
| `25.65px` | Home and Archive frames — post list title text |
| `26px` | Post frame — H3 heading ("What I'd do differently") |
| `27.2px` | All frames — header wordmark |
| `28px` | About frame — "Currently", "Background", "How I work", "This site" body paragraphs |
| `28.68px` | Home frame — hero description paragraph |
| `28.88px` | Post frame — body paragraphs |
| `29.45px` | About frame — hero description paragraph |
| `30px` | Post frame — post lede (Charter Italic) |
| `34.16px` | Post frame — H2 section heading text |
| `47.52px` | About and Archive frames — H1 page heading |
| `52.5px` | Home frame — hero H1 text |

---

### Letter spacing

| Raw value | Frame(s) / element(s) |
|-----------|----------------------|
| `-1.4px` | Home frame — hero H1 (main span) |
| `-1.1px` | About and Archive frames — H1 page headings |
| `-0.42px` | Post frame — H2 section headings |
| `-0.23px` (approx `-0.228px`) | Home frame — project card headings |
| `-0.17px` | All frames — header wordmark ("ajscanlan") |
| `-0.15px` (approx `-0.152px`) | Home and Archive frames — post list title text |
| `-0.1px` | Post frame — H3 heading |
| `0.66px` | Post frame — post category badge ("Technical") |
| `0.88px` | Home frame — post list category tag ("Project log", "Technical", "Cheat sheet", "Essay") |
| `1.32px` | All frames — project card status label ("In progress", "Live", "Archived") |
| `1.54px` | Post frame — reader's note heading ("Reader's note") |
| `1.61px` | All frames — availability status badge |
| `1.68px` | About frame — two-column section headings ("Currently", "Background", etc.) |
| `1.76px` | All frames — page breadcrumb label |
| `1.92px` | All frames — section heading labels (JetBrains Mono uppercase) |
| `1.98px` | Post frame — H2 section number labels |

---

### Spacing (padding, gap, margin)

All values below are from explicit `px` values in the generated code. Variable alias values are resolved to their concrete value where available.

| Raw value | Type | Frame(s) / element(s) |
|-----------|------|----------------------|
| `4px` | gap (item-spacing/xxs) | All frames — section gap between heading and intro paragraph, archive filter tab gap |
| `5px` | padding-top | About frame — two-column section heading alignment offset |
| `5.2px` | gap | Home frame — project card internal gap (UPLEX card, ajscanlan.dev card) |
| `5.3px` | gap | Home frame — tinypipe card internal gap |
| `5.4px` | gap | Home frame — pgexplain.fyi card internal gap |
| `6px` | gap (item-spacing/6) | All frames — project card tech-tag row gap; also padding-bottom on hero contact links |
| `8px` | gap (item-spacing/xs) | All frames — status badge dot-to-text gap, project card status area gap |
| `9px` | padding | Archive frame — filter tab bottom padding |
| `10px` | gap (item-spacing/10) | All frames — header logo area (icon + wordmark gap), breadcrumb row gap |
| `12px` | gap | About frame — "Currently" section internal gap; Post frame — section gap |
| `14px` | gap (item-spacing/14) | All frames — hero status row gap; archive year row gap; also col gap in post list grid |
| `14px` | padding (top+bottom) | All frames — post list row padding |
| `15px` | padding (top+bottom) | All frames — post list bottom/last row padding (py-15) |
| `17px` | padding (top+bottom) | Post frame — reader's note box (`py-[17px]`) |
| `18px` | gap (item-spacing/18) | All frames — hero section internal gap, archive filter tab row gap |
| `18px` | padding-bottom | Post frame — code block (`<pre>`) bottom padding |
| `19px` | padding (top+bottom) | Home frame — project card top/bottom padding (`pt-21 pb-19`) |
| `20px` | padding (vertical) | Post frame — code block horizontal padding (`px-[20px]`) |
| `21px` | padding | Home frame — project card top padding and horizontal padding |
| `22px` | gap (item-spacing/22) | Home frame — hero contact links row gap |
| `23px` | padding (horizontal) | Post frame — reader's note box (`px-[23px]`) |
| `24px` | padding (horizontal) | All frames — page footer horizontal padding, post list col gap |
| `24px` | padding (top/bottom) | All frames — header top/bottom padding (`pt-24 pb-25`) |
| `25px` | padding-bottom | All frames — header bottom padding, footer top padding |
| `26px` | gap (item-spacing/26) | All frames — header nav links gap |
| `28px` | padding (top) | Archive frame — year group items top padding |
| `30px` | padding-top | Post frame — code block top padding (`pt-[30.61px]` ~`31px`) |
| `32px` | padding (horizontal) | All frames — main content container, header, footer horizontal padding (`px-[32px]`) |
| `40px` | padding (bottom) | About frame — hero section bottom padding; Post frame — post body bottom padding |
| `50px` | padding-top | About frame — two-column grid top padding (`pt-[50.2px]`) |
| `72px` | padding (top+bottom) | All frames — main content container vertical padding (`py-[72px]`) |

---

### Border radius

| Raw value | Frame(s) / element(s) |
|-----------|----------------------|
| `3px` | All frames — post list category tag pill, project card tech-tag, archive filter active underline border (also used for inline `<code>` background chip in Post) |
| `6px` (as `size-[6px]` circular) | All frames — status indicator dot (rendered circular via `rounded-[999px]`) |
| `8px` | Post frame — reader's note box (`rounded-[8px]`), code block `<pre>` (`rounded-[8px]`) |
| `10px` | Home frame — project card border radius (`rounded-[10px]`) |
| `999px` | All frames — status indicator dot (pill/circle: `rounded-[999px]`) |

---

### Color

| Raw value | Frame(s) / element(s) |
|-----------|----------------------|
| `#faf9f6` | All frames — page background, header/footer logo background layer, project card background |
| `#0b0b0e` | All frames — primary body text, header wordmark "ajscanlan" (bold), project card headings, H1/H2/H3 headings, post title, post body bold inline |
| `#1a1b1d` | About and Post frames — body paragraph text (aliased as `color/grey/11`), post body text |
| `#2d2e31` | Home and About frames — project card tech-tag text, About tag text |
| `#44464a` | All frames — secondary text (header nav links, project card body text, contact link text, archive filter text (unselected), post nav links) |
| `#6d6f73` | All frames — tertiary / muted text (section heading labels, date column, archive filter counts, footer text, about section headings) |
| `#a0a2a6` | All frames — header wordmark ".dev" (light suffix), breadcrumb text, archive filter count numbers |
| `#c8c9cb` | Home frame — separator dots in hero contact links row, section divider color (border on link underlines); Post frame — section break dots |
| `#e8e8e9` | All frames — horizontal rule / divider line color, header bottom border, project card border, post list row border, footer top border |
| `#f3f1ec` | All frames — project card tech-tag background, About tag background, Post reader's note background, Post inline `<code>` chip background |
| `#d0342c` | All frames — header logo icon fill (red), project card "In progress" status dot |
| `#8a221c` | Home and Archive frames — hero H1 emphasis text color ("what I / learned."), post list "project-log" category label, post category badge text, "Project log" tag text/border |
| `#1f7a5c` | All frames — "Available" / "Live" status indicator dot (green) |
| `#f5a78a` | Post frame — code block `const`/`new` keyword color (light orange-red syntax highlight) |
| `#f7f7f8` | Post frame — code block default text color |
| `#f3f1ec` (also `#0b0b0e` bg) | Post frame — code block background is `#0b0b0e` (dark), inline code chip background is `#f3f1ec` |
| `rgba(31,122,92,0.18)` | All frames — "Available"/"Live" status dot ring shadow |
| `rgba(208,52,44,0.18)` | Home frame — "In progress" status dot ring shadow |
| `rgba(208,52,44,0.04)` | Home frame — "Project log" tag background tint (`color/red/49 4%`) |
| `rgba(138,34,28,0.25)` | Home frame — "Project log" tag border (`color/red/33 25%`) |
| `rgba(208,52,44,0.06)` | Post frame — post category badge background ("Technical") |
| `rgba(255,255,255,0)` | All frames — status dot overlay layer (transparent white, 0% opacity) |

---

## Code raw values

Extracted 2026-05-15. Sources: `src/components/*.astro`, `src/pages/**/*.astro`, `src/layouts/BaseLayout.astro`, `src/styles/global.css`, `tailwind.config.js`.  
Every distinct occurrence is listed; no deduplication.

---

### Font size

| Raw value | file:line |
|-----------|-----------|
| `10px` | `src/components/ProjectCard.astro:58` |
| `16px` | `src/components/ProjectCard.astro:72` |
| `13px` | `src/components/ProjectCard.astro:81` |
| `9.5px` | `src/components/ProjectCard.astro:96` |
| `11px` | `src/components/ProjectCard.astro:114` |
| `11px` | `src/components/Callout.astro:47` |
| `13px` | `src/components/Callout.astro:56` |
| `0.71875rem` (≈11.5px) | `src/components/Eyebrow.astro:24` |
| `1rem` (16px) | `src/components/SectionBreak.astro:45` |
| `13px` | `src/components/Nav.astro:84` |
| `12px` | `src/components/Nav.astro:97` |
| `12px` | `src/components/PostRow.astro:103` |
| `15px` | `src/components/PostRow.astro:112` |
| `12.5px` | `src/components/PostRow.astro:119` |
| `10px` | `src/components/PostRow.astro:129` |
| `10.5px` | `src/components/PostRow.astro:156` |
| `10px` | `src/components/PostRow.astro:162` |
| `12.5px` | `src/components/PostRow.astro:168` |
| `10.5px` | `src/components/PostRow.astro:176` |
| `11px` | `src/pages/about.astro:64` |
| `2.75rem` (44px) | `src/pages/about.astro:72` |
| `1.1875rem` (19px) | `src/pages/about.astro:81` |
| `12px` | `src/pages/about.astro:97` |
| `13.5px` | `src/pages/about.astro:108` |
| `10px` | `src/pages/about.astro:124` |
| `2.25rem` (36px) | `src/pages/archive.astro:98` |
| `11.5px` | `src/pages/archive.astro:108` |
| `10.5px` | `src/pages/archive.astro:119` |
| `10.5px` | `src/pages/archive.astro:135` |
| `10px` | `src/pages/archive.astro:137` |
| `13px` | `src/pages/archive.astro:142` |
| `10.5px` | `src/pages/archive.astro:143` |
| `10px` | `src/pages/archive.astro:153` |
| `10px` | `src/pages/archive.astro:155` |
| `12px` | `src/pages/posts/[slug].astro:77` |
| `10.5px` | `src/pages/posts/[slug].astro:87` |
| `2.75rem` (44px) | `src/pages/posts/[slug].astro:96` |
| `1.25rem` (20px) | `src/pages/posts/[slug].astro:102` |
| `1.09375rem` (≈17.5px) | `src/pages/posts/[slug].astro:107` |
| `11px` | `src/pages/index.astro:163` |
| `3.125rem` (50px) | `src/pages/index.astro:170` |
| `1.15625rem` (≈18.5px) | `src/pages/index.astro:179` |
| `12px` | `src/pages/index.astro:187` |
| `2.25rem` (36px) | `src/pages/index.astro:202` (mobile breakpoint) |
| `11.5px` | `src/pages/index.astro:211` |
| `12px` | `src/layouts/BaseLayout.astro:51` |
| `16px` | `src/styles/global.css:34` (html base) |
| `1.0625rem` (17px) | `src/styles/global.css:39` (body) |
| `3.0625rem` (49px) | `src/styles/global.css:161` (h1) |
| `1.75rem` (28px) | `src/styles/global.css:172` (h2) |
| `1.25rem` (20px) | `src/styles/global.css:185` (h3) |
| `1.5625rem` (25px) | `src/styles/global.css:198` (h4) |
| `1.25rem` (20px) | `src/styles/global.css:208` (h5) |
| `1.125rem` (18px) | `src/styles/global.css:218` (h6) |
| `0.95em` | `src/styles/global.css:234` (code) |
| `0.9em` | `src/styles/global.css:238` (pre code) |
| `1.0625rem` (17px) | `tailwind.config.js:63` (fontSize.base) |
| `1.25rem` (20px) | `tailwind.config.js:64` (fontSize.lg) |
| `1.25rem` (20px) | `tailwind.config.js:67` (fontSize.heading-sm) |
| `1.5625rem` (25px) | `tailwind.config.js:68` (fontSize.heading-md) |
| `1.25rem` (20px) | `tailwind.config.js:69` (fontSize.heading-lg) |
| `1.75rem` (28px) | `tailwind.config.js:70` (fontSize.heading-xl) |
| `3.0625rem` (49px) | `tailwind.config.js:71` (fontSize.heading-2xl) |
| `1.0625rem` (17px) | `tailwind.config.js:94` (typography DEFAULT fontSize) |
| `3.0625rem` (49px) | `tailwind.config.js:110` (typography h1) |
| `1.75rem` (28px) | `tailwind.config.js:118` (typography h2) |
| `1.25rem` (20px) | `tailwind.config.js:128` (typography h3) |
| `1.5625rem` (25px) | `tailwind.config.js:138` (typography h4) |
| `1.25rem` (20px) | `tailwind.config.js:148` (typography h5) |
| `1.125rem` (18px) | `tailwind.config.js:153` (typography h6) |
| `0.95em` | `tailwind.config.js:166` (typography code) |
| `0.9em` | `tailwind.config.js:177` (typography pre) |

---

### Line height

| Raw value | file:line |
|-----------|-----------|
| `1.55` | `src/components/ProjectCard.astro:82` |
| `1.55` | `src/components/Callout.astro:57` |
| `1.6` | `src/pages/about.astro:82` |
| `1.6` | `src/pages/about.astro:112` |
| `1.08` | `src/pages/about.astro:75` |
| `1.08` | `src/pages/posts/[slug].astro:97` |
| `1.5` | `src/pages/posts/[slug].astro:102` |
| `1.65` | `src/pages/posts/[slug].astro:108` |
| `1.05` | `src/pages/index.astro:171` |
| `1.55` | `src/pages/index.astro:180` |
| `1.6` | `src/styles/global.css:40` (body) |
| `1.65` | `src/styles/global.css:43` (body mobile) |
| `1.2` | `src/styles/global.css:162` (h1) |
| `1.22` | `src/styles/global.css:173` (h2) |
| `1.3` | `src/styles/global.css:186` (h3) |
| `1.5` | `src/styles/global.css:199` (h4) |
| `1.6` | `src/styles/global.css:209` (h5) |
| `1.65` | `src/styles/global.css:219` (h6) |
| `1.6` | `tailwind.config.js:63` (fontSize.base) |
| `1.65` | `tailwind.config.js:64` (fontSize.lg) |
| `1.6` | `tailwind.config.js:67` (fontSize.heading-sm) |
| `1.5` | `tailwind.config.js:68` (fontSize.heading-md) |
| `1.3` | `tailwind.config.js:69` (fontSize.heading-lg) |
| `1.22` | `tailwind.config.js:70` (fontSize.heading-xl) |
| `1.2` | `tailwind.config.js:71` (fontSize.heading-2xl) |
| `1.65` | `tailwind.config.js:95` (typography DEFAULT) |
| `1.2` | `tailwind.config.js:111` (typography h1) |
| `1.22` | `tailwind.config.js:119` (typography h2) |
| `1.3` | `tailwind.config.js:129` (typography h3) |
| `1.5` | `tailwind.config.js:139` (typography h4) |
| `1.6` | `tailwind.config.js:147` (typography h5) |
| `1.65` | `tailwind.config.js:154` (typography h6) |
| `1.6` | `tailwind.config.js:178` (typography pre) |

---

### Letter spacing

| Raw value | file:line |
|-----------|-----------|
| `0.1em` | `src/components/ProjectCard.astro:61` (status-pill) |
| `-0.01em` | `src/components/ProjectCard.astro:75` (title) |
| `0.14em` | `src/components/Callout.astro:49` (callout-label) |
| `0.15em` | `src/components/Eyebrow.astro:26` |
| `0.5em` | `src/components/SectionBreak.astro:46` (ornament) |
| `0.12em` | `src/pages/about.astro:64` (avail-pill) |
| `-0.025em` | `src/pages/about.astro:74` (about-h1) |
| `0.12em` | `src/pages/about.astro:100` (grid-label) |
| `-0.02em` | `src/pages/archive.astro:99` (archive-h1) |
| `0.14em` | `src/pages/archive.astro:120` (year-label) |
| `0.08em` | `src/pages/archive.astro:138` (arc-kind) |
| `0.08em` | `src/pages/posts/[slug].astro:87` (meta-kind) |
| `-0.025em` | `src/pages/posts/[slug].astro:96` (post-h1) |
| `0.12em` | `src/pages/index.astro:163` (avail-pill) |
| `-0.028em` | `src/pages/index.astro:173` (hero-h1) |
| `-0.02em` | `src/styles/global.css:164` (h1) |
| `-0.015em` | `src/styles/global.css:175` (h2) |
| `-0.005em` | `src/styles/global.css:188` (h3) |
| `-0.02em` | `tailwind.config.js:112` (typography h1) |
| `-0.015em` | `tailwind.config.js:120` (typography h2) |
| `-0.005em` | `tailwind.config.js:130` (typography h3) |
| `-0.005em` | `tailwind.config.js:140` (typography h4) |

---

### Spacing (padding, margin, gap)

| Raw value | Type | file:line |
|-----------|------|-----------|
| `10px` | gap | `src/components/SectionBreak.astro:72` (dots-container) |
| `0` | margin | `src/components/Eyebrow.astro:22` (.eyebrow) |
| `0 0.25em` | margin | `src/components/Eyebrow.astro:32` (.separator) |
| `10px` | border-radius | `src/components/ProjectCard.astro:40` |
| `22px` | padding | `src/components/ProjectCard.astro:41` |
| `16px` | gap | `src/components/ProjectCard.astro:45` |
| `2px 8px` | padding | `src/components/ProjectCard.astro:63` (status-pill) |
| `0` | margin | `src/components/ProjectCard.astro:76` (.title) |
| `0` | padding | `src/components/ProjectCard.astro:77` (.title) |
| `0` | margin | `src/components/ProjectCard.astro:84` (.blurb) |
| `0` | padding | `src/components/ProjectCard.astro:85` (.blurb) |
| `4px` | gap | `src/components/ProjectCard.astro:91` (.stack-chips) |
| `2px 7px` | padding | `src/components/ProjectCard.astro:98` (.chip) |
| `12px` | gap | `src/components/ProjectCard.astro:107` (.links-section) |
| `14px 20px` | padding | `src/components/Callout.astro:41` (.callout) |
| `24px 0` | margin | `src/components/Callout.astro:42` (.callout) |
| `0 0 6px` | margin | `src/components/Callout.astro:52` (.callout-label) |
| `12px 0` | padding | `src/components/Nav.astro:58` (.nav-container) |
| `8px` | gap | `src/components/Nav.astro:64` (.brand-link) |
| `20px` | gap | `src/components/Nav.astro:92` (.nav-links) |
| `11px 0` | padding | `src/components/PostRow.astro:72` (a) |
| `24px` | gap | `src/components/PostRow.astro:79` (.post-row-home) |
| `0` | margin-left | `src/components/PostRow.astro:93` |
| `1px 7px` | padding | `src/components/PostRow.astro:133` (.kind-pill) |
| `16px` | gap | `src/components/PostRow.astro:141` (.post-row-archive) |
| `64px` | padding-top | `src/pages/about.astro:57` (.about-wrap) |
| `80px` | padding-bottom | `src/pages/about.astro:58` (.about-wrap) |
| `6px` | gap | `src/pages/about.astro:62` (.avail-pill) |
| `16px` | margin-bottom | `src/pages/about.astro:65` (.avail-pill) |
| `0 0 14px` | margin | `src/pages/about.astro:77` (.about-h1) |
| `0 0 36px` | margin | `src/pages/about.astro:85` (.about-lede) |
| `0 40px` | gap (column) | `src/pages/about.astro:91` (.about-grid) |
| `16px 0` | padding | `src/pages/about.astro:102` (.grid-label) |
| `16px 0` | padding | `src/pages/about.astro:110` (.grid-value) |
| `4px` | gap | `src/pages/about.astro:118` (.stack-value) |
| `2px 7px` | padding | `src/pages/about.astro:126` (.chip) |
| `0 6px` | margin | `src/pages/about.astro:138` (.reach-sep) |
| `4px` | padding-bottom | `src/pages/about.astro:142` (mobile grid-label) |
| `52px` | padding-top | `src/pages/archive.astro:96` (.archive-wrap) |
| `80px` | padding-bottom | `src/pages/archive.astro:96` (.archive-wrap) |
| `0 0 28px` | margin | `src/pages/archive.astro:99` (.archive-h1) |
| `32px` | margin-bottom | `src/pages/archive.astro:104` (.filter-tabs) |
| `9px 13px` | padding | `src/pages/archive.astro:108` (.tab) |
| `24px` | margin-bottom | `src/pages/archive.astro:116` (.year-group) |
| `12px` | gap | `src/pages/archive.astro:118` (.year-label) |
| `4px` | margin-bottom | `src/pages/archive.astro:121` (.year-label) |
| `16px` | gap | `src/pages/archive.astro:128` (.archive-row) |
| `11px 0` | padding | `src/pages/archive.astro:128` (.archive-row) |
| `64px` | margin-top (section spacing) | `src/pages/index.astro:154` |
| `64px` | padding-top | `src/pages/index.astro:158` (.hero) |
| `8px` | padding-bottom | `src/pages/index.astro:158` (.hero) |
| `6px` | gap | `src/pages/index.astro:161` (.avail-pill) |
| `20px` | margin-bottom | `src/pages/index.astro:164` (.avail-pill) |
| `0 0 18px` | margin | `src/pages/index.astro:175` (.hero-h1) |
| `0 0 24px` | margin | `src/pages/index.astro:183` (.hero-lede) |
| `10px` | gap | `src/pages/index.astro:186` (.hero-links) |
| `16px` | margin-top | `src/pages/index.astro:195` (.projects-grid) |
| `16px` | gap | `src/pages/index.astro:198` (.projects-grid) |
| `12px` | margin-top | `src/pages/index.astro:206` (.post-rows) |
| `12px` | margin-top | `src/pages/index.astro:209` (.see-all) |
| `80px` | margin-top | `src/layouts/BaseLayout.astro:47` (.site-footer) |
| `32px 0` | padding | `src/layouts/BaseLayout.astro:49` (.site-footer) |
| `32px` | padding-left | `src/styles/global.css:79` (.layout-home) |
| `32px` | padding-right | `src/styles/global.css:80` (.layout-home) |
| `32px` | padding-left | `src/styles/global.css:87` (.layout-post) |
| `32px` | padding-right | `src/styles/global.css:88` (.layout-post) |
| `20px` | padding-left | `src/styles/global.css:94` (.layout-home mobile) |
| `20px` | padding-right | `src/styles/global.css:95` (.layout-home mobile) |
| `1rem` | padding-left | `src/styles/global.css:54` (.content-column) |
| `1rem` | padding-right | `src/styles/global.css:55` (.content-column) |
| `1.25rem` | margin-top | `src/styles/global.css:101` (.prose-spacing > * + *) |
| `2.5rem` | margin-top | `src/styles/global.css:105` (.prose-spacing > h2) |
| `1rem` | margin-bottom | `src/styles/global.css:106` (.prose-spacing > h2) |
| `2rem` | margin-top | `src/styles/global.css:110` (.prose-spacing > h3) |
| `0.75rem` | margin-bottom | `src/styles/global.css:111` (.prose-spacing > h3) |
| `0` | margin-top | `src/styles/global.css:165` (h1) |
| `1.5rem` | margin-bottom | `src/styles/global.css:166` (h1) |
| `3.5rem` | margin-top | `src/styles/global.css:176` (h2) |
| `0.75rem` | margin-bottom | `src/styles/global.css:177` (h2) |
| `2rem` | margin-top | `src/styles/global.css:189` (h3) |
| `0.5rem` | margin-bottom | `src/styles/global.css:190` (h3) |
| `1.75rem` | margin-top | `src/styles/global.css:201` (h4) |
| `0.5rem` | margin-bottom | `src/styles/global.css:202` (h4) |
| `1.5rem` | margin-top | `src/styles/global.css:211` (h5) |
| `0.5rem` | margin-bottom | `src/styles/global.css:212` (h5) |
| `1.25rem` | margin-top | `src/styles/global.css:221` (h6) |
| `0.5rem` | margin-bottom | `src/styles/global.css:222` (h6) |
| `0.75rem 1.5rem` | padding | `src/styles/global.css:250` (.skip-to-content) |
| `0.15rem 0.35rem` | padding | `tailwind.config.js:168` (typography code) |
| `1.5rem` | padding-left | `tailwind.config.js:191` (typography blockquote) |
| `3rem` | margin-top | `tailwind.config.js:197` (typography hr) |
| `3rem` | margin-bottom | `tailwind.config.js:198` (typography hr) |
| `1.5rem` | padding-left | `tailwind.config.js:203` (typography ul/ol) |
| `0.5rem` | margin-top | `tailwind.config.js:206` (typography li) |
| `0.5rem` | margin-bottom | `tailwind.config.js:207` (typography li) |
| `1.25rem` | margin-top | `tailwind.config.js:213` (typography p) |
| `1.25rem` | margin-bottom | `tailwind.config.js:214` (typography p) |
| `10px` | gap | `src/pages/posts/[slug].astro:76` (.meta-row) |
| `28px` | margin-bottom | `src/pages/posts/[slug].astro:78` (.meta-row) |
| `40px` | padding-top | `src/pages/posts/[slug].astro:78` (.meta-row) |
| `1px 7px` | padding | `src/pages/posts/[slug].astro:88` (.meta-kind) |
| `0 0 14px` | margin | `src/pages/posts/[slug].astro:97` (.post-h1) |
| `0 0 36px` | margin | `src/pages/posts/[slug].astro:103` (.post-dek) |
| `0 0 20px` | margin | `src/pages/posts/[slug].astro:111` (.post-prose p) |

---

### Border radius

| Raw value | file:line |
|-----------|-----------|
| `999px` | `src/components/SectionBreak.astro:78` (.dot) |
| `10px` | `src/components/ProjectCard.astro:40` (.project-card) |
| `3px` | `src/components/ProjectCard.astro:62` (.status-pill) |
| `3px` | `src/components/ProjectCard.astro:97` (.chip) |
| `8px` | `src/components/Callout.astro:39` (.callout) |
| `50%` | `src/pages/about.astro:68` (.green-dot) |
| `3px` | `src/pages/about.astro:125` (.chip) |
| `3px` | `src/components/PostRow.astro:132` (.kind-pill) |
| `3px` | `src/pages/posts/[slug].astro:88` (.meta-kind) |
| `50%` | `src/pages/index.astro:167` (.green-dot) |
| `0 0 0.5rem 0` | `src/styles/global.css:255` (.skip-to-content) |
| `2px` | `src/styles/global.css:269` (:focus-visible) |
| `0.25rem` | `tailwind.config.js:169` (typography code) |

---

### Color

| Raw value | file:line |
|-----------|-----------|
| `#0b0b0e` | `src/styles/global.css:11` (--ink-900) |
| `#0f1011` | `src/styles/global.css:12` (--ink-800) |
| `#1a1b1d` | `src/styles/global.css:13` (--ink-700) |
| `#2d2e31` | `src/styles/global.css:14` (--ink-600) |
| `#44464a` | `src/styles/global.css:15` (--ink-500) |
| `#6d6f73` | `src/styles/global.css:16` (--ink-400) |
| `#a0a2a6` | `src/styles/global.css:17` (--ink-300) |
| `#c8c9cb` | `src/styles/global.css:18` (--ink-200) |
| `#e8e8e9` | `src/styles/global.css:19` (--ink-100) |
| `#f7f7f8` | `src/styles/global.css:20` (--ink-50) |
| `#faf9f6` | `src/styles/global.css:21` (--paper) |
| `#f3f1ec` | `src/styles/global.css:22` (--paper-2) |
| `#d0342c` | `src/styles/global.css:23` (--fox) |
| `#8a221c` | `src/styles/global.css:24` (--fox-ink) |
| `rgba(208, 52, 44, 0.18)` | `src/styles/global.css:28` (::selection background) |
| `#d0342c` | `src/styles/global.css:251` (.skip-to-content background) |
| `#0b0b0e` | `src/styles/global.css:261` (.skip-to-content:focus outline) |
| `#d0342c` | `src/styles/global.css:267` (:focus-visible outline) |
| `#d0342c` | `src/styles/global.css:280` (a:focus-visible outline) |
| `#d0342c` | `src/styles/global.css:288` (input:focus-visible outline) |
| `#d0342c` | `src/styles/global.css:290` (input:focus-visible border-color) |
| `#f87171` | `src/styles/global.css:295` (.dark :focus-visible outline-color) |
| `#1f7a5c` | `src/components/ProjectCard.astro:67` (.status-pill[live] background) |
| `rgba(11, 11, 14, 0.18)` | `src/components/ProjectCard.astro:52` (.project-card:hover box-shadow) |
| `rgba(138, 34, 28, 0.6)` | `src/components/ReadingProgress.astro:22` (.reading-progress background) |
| `rgba(138, 34, 28, 0.06)` | `src/components/PostRow.astro:33` (JS getKindColor project-log bg) |
| `rgba(138, 34, 28, 0.2)` | `src/components/PostRow.astro:34` (JS getKindColor project-log border) |
| `#1f7a5c` | `src/pages/about.astro:68` (.green-dot background) |
| `rgba(208, 52, 44, 0.04)` | `src/pages/posts/[slug].astro:89` (.meta-kind background) |
| `rgba(138, 34, 28, 0.25)` | `src/pages/posts/[slug].astro:90` (.meta-kind border) |
| `#1f7a5c` | `src/pages/index.astro:167` (.green-dot background) |
| `#f7f7f8` | `tailwind.config.js:13` (ink.50) |
| `#e8e8e9` | `tailwind.config.js:14` (ink.100) |
| `#c8c9cb` | `tailwind.config.js:15` (ink.200) |
| `#a0a2a6` | `tailwind.config.js:16` (ink.300) |
| `#6d6f73` | `tailwind.config.js:17` (ink.400) |
| `#44464a` | `tailwind.config.js:18` (ink.500) |
| `#2d2e31` | `tailwind.config.js:19` (ink.600) |
| `#1a1b1d` | `tailwind.config.js:20` (ink.700) |
| `#0f1011` | `tailwind.config.js:21` (ink.800) |
| `#0b0b0e` | `tailwind.config.js:22` (ink.900) |
| `#fcfcfc` | `tailwind.config.js:27` (paper.50) |
| `#faf9f6` | `tailwind.config.js:28` (paper.100) |
| `#f3f1ec` | `tailwind.config.js:29` (paper.200) |
| `#fef2f2` | `tailwind.config.js:33` (fox.50) |
| `#fee2e2` | `tailwind.config.js:34` (fox.100) |
| `#fecaca` | `tailwind.config.js:35` (fox.200) |
| `#fca5a5` | `tailwind.config.js:36` (fox.300) |
| `#f87171` | `tailwind.config.js:37` (fox.400) |
| `#d0342c` | `tailwind.config.js:38` (fox.500) |
| `#b82a23` | `tailwind.config.js:39` (fox.600) |
| `#9f221b` | `tailwind.config.js:40` (fox.700) |
| `#7f1d16` | `tailwind.config.js:41` (fox.800) |
| `#651710` | `tailwind.config.js:42` (fox.900) |
| `#8a221c` | `tailwind.config.js:43` (fox.ink) |
| `#1f7a5c` | `tailwind.config.js:45` (green) |
| `#d97706` | `tailwind.config.js:46` (amber) |
| `#dc2626` | `tailwind.config.js:47` (red) |
