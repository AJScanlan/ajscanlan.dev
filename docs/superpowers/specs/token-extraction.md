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
