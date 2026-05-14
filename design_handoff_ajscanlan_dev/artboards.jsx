// Artboards for ajscanlan.dev redesign canvas.
// Each component is a fixed-width frame; the DesignCanvas pans/zooms them.

const Nav = ({ active }) => (
  <div className="nav">
    <div className="nav-brand">
      <span className="fox-mark"></span>
      <span>ajscanlan<span style={{color:'var(--ink-300)'}}>.dev</span></span>
    </div>
    <div className="nav-links">
      <a style={{color: active==='writing'?'var(--ink-900)':undefined, fontWeight: active==='writing'?600:400}}>Writing</a>
      <a style={{color: active==='projects'?'var(--ink-900)':undefined, fontWeight: active==='projects'?600:400}}>Projects</a>
      <a>About</a>
      <a>RSS</a>
    </div>
  </div>
);

// ----------------------------------------------------------------------
// DIAGNOSIS
// ----------------------------------------------------------------------
const Diagnosis = () => (
  <div className="frame diag">
    <div className="kicker">An opinionated read · 12 May 2026</div>
    <h1>What's working, what isn't, and what to do about it.</h1>
    <p className="lede">You asked me to be opinionated, so I will be. The site is well-built and the writing has voice — but as a job-hunt instrument it's working against you in three specific ways.</p>

    <h2>The problems</h2>
    <ol>
      <li><b>The red leading bars are noise pretending to be hierarchy.</b> They read as “validation error” or “unresolved blockquote” to anyone fluent in modern UI. They yank the eye off the title and toward a vertical stroke that means nothing. Worse, they're applied to <em>every</em> H2 and H3 — so emphasis is everywhere, which is to say nowhere. Cut them entirely; use type weight and a small mono eyebrow for rhythm.</li>
      <li><b>The positioning sells the wrong product.</b> “Writing my way to understanding · short, sincere, approachable reflections” is a beautiful tagline for a personal essayist. A hiring engineer reading this in 8 seconds learns: this person writes feelings about rivers. Lead with the engineer, not the diarist. Reviews and musings can live one click deeper.</li>
      <li><b>The homepage is chronological by default — which buries your best work.</b> Right now a 3-min book summary sits above a project log. Project logs are your strongest signal for hiring; promote them. Group by type so a recruiter can see “projects + technical” in one glance and reach the writing if they want depth.</li>
      <li><b>The fox mark is good — keep it — but the red accent is over-deployed.</b> Red appears in the logo, the nav hover, the H2 bar, the H3 bar, the category tag, the link color, and the focus ring. When everything is the accent, nothing is. Restrict red to (a) the mark, (b) link hover/focus, (c) one tiny pill for category. Demote it to a near-burgundy (#8a221c) for text use — easier on the eyes and reads more confident.</li>
      <li><b>No proof surface.</b> There's no “Projects” page, no GitHub link in the chrome, no “currently building / available for work” signal. The first thing a recruiter looks for is — projects with READMEs, a way to email you, a 1-line value prop. Add them.</li>
    </ol>

    <div className="verdict">
      <b>Verdict.</b> Keep the type system, the warm neutrals, the calm rhythm — these are good. Strip the red bars. Re-rank the homepage around projects-and-technical first. Add a hire-me surface (one line of value prop, a real contact link, project cards with stacks). Three directions follow — pick a temperament and I'll build it.
    </div>
  </div>
);

// ----------------------------------------------------------------------
// OPTION A — Engineer's Notebook (minimal, type-led)
// ----------------------------------------------------------------------
const OptionA = () => (
  <div className="frame">
    <Nav active="writing" />
    <div className="a-hero">
      <div className="eyebrow">A.J. Scanlan · Software Engineer · Melbourne</div>
      <h1>I build, then I write down <em>what I learned.</em></h1>
      <p>This is a working notebook — project logs, technical write-ups, and the occasional cheat sheet for things I keep looking up. Open to senior backend / full-stack roles from June.</p>
      <div className="meta">
        <a>github.com/AJScanlan ↗</a>
        <a>hello@ajscanlan.dev</a>
        <a>CV (pdf) ↗</a>
        <span>· available June 2026</span>
      </div>
    </div>

    <div className="a-section">
      <h2>Projects &amp; technical</h2>
      <p className="h2sub">The reason you're probably here.</p>
      <div className="a-list">
        <div className="a-row">
          <div className="date">27 Oct 2025</div>
          <div className="title">ajscanlan.dev — Phase 0 <span>· decisions, surprises, lessons from a from-scratch Astro build</span></div>
          <div className="kind proj">Project log</div>
        </div>
        <div className="a-row">
          <div className="date">14 Oct 2025</div>
          <div className="title">UPLEX — designing a content-addressed network log <span>· what changed from v0.1 to v0.3</span></div>
          <div className="kind proj">Project log</div>
        </div>
        <div className="a-row">
          <div className="date">02 Sep 2025</div>
          <div className="title">Why I stopped reaching for Redux <span>· three patterns that replaced it</span></div>
          <div className="kind">Technical</div>
        </div>
        <div className="a-row">
          <div className="date">18 Aug 2025</div>
          <div className="title">Debugging a memory leak in a long-running Node worker</div>
          <div className="kind">Technical</div>
        </div>
      </div>
    </div>

    <div className="a-section" style={{marginTop: 24}}>
      <h2>Notes &amp; cheat sheets</h2>
      <p className="h2sub">Working references — kept short, kept honest.</p>
      <div className="a-list">
        <div className="a-row">
          <div className="date">15 Nov 2025</div>
          <div className="title">Thinking, Fast and Slow — Kahneman <span>· the parts I actually use</span></div>
          <div className="kind">Cheat sheet</div>
        </div>
        <div className="a-row">
          <div className="date">12 Nov 2025</div>
          <div className="title">Field Note: On Attention</div>
          <div className="kind">Note</div>
        </div>
      </div>
    </div>

    <div className="a-section" style={{marginTop: 24}}>
      <h2>Essays</h2>
      <p className="h2sub">Slower writing. Read these only if you want to.</p>
      <div className="a-list">
        <div className="a-row">
          <div className="date">27 Oct 2025</div>
          <div className="title">On Rivers and Change <span>· flux, entropy, and gentle stubbornness</span></div>
          <div className="kind">Essay</div>
        </div>
      </div>
    </div>
  </div>
);

// ----------------------------------------------------------------------
// OPTION B — Portfolio Hybrid (hire-me mode)
// ----------------------------------------------------------------------
const OptionB = () => (
  <div className="frame">
    <Nav active="projects" />
    <div className="b-hero">
      <div className="id">
        <div className="role">Open to senior backend / full-stack · June 2026</div>
        <h1>A.J. Scanlan — engineer who <span className="accent">writes things down.</span></h1>
        <p>Ten years of building services that have to stay up. Currently going deep on distributed systems, content-addressed storage, and developer tooling. This is where I publish what I'm learning.</p>
        <div className="links">
          <a className="primary">hello@ajscanlan.dev →</a>
          <a>github.com/AJScanlan ↗</a>
          <a>CV (pdf) ↗</a>
        </div>
      </div>
      <div className="b-feature">
        <div className="tag">Currently building</div>
        <h3>UPLEX — a content-addressed log for offline-first networks</h3>
        <p>A Merkle-DAG-backed log designed for partition tolerance over consensus. Goal: replicate a 50k-event log across three nodes in under 90s on patchy LTE.</p>
        <div className="stack">
          <span>Rust</span><span>QUIC</span><span>BLAKE3</span><span>SQLite</span><span>react-native</span>
        </div>
        <a className="more">Read the phase-0 log ↗</a>
      </div>
    </div>

    <div className="b-grid">
      <div className="b-col">
        <h4>Recent writing</h4>
        <div className="b-post">
          <div className="t">Why I stopped reaching for Redux<small>Three patterns that replaced it — and one case where I'd still pick it.</small></div>
          <div className="m"><b>Technical</b><br/>02 Sep · 9 min</div>
        </div>
        <div className="b-post">
          <div className="t">Debugging a memory leak in a long-running Node worker<small>How a 0.4% leak surfaced after seven weeks, and the heap-snapshot diff that found it.</small></div>
          <div className="m"><b>Technical</b><br/>18 Aug · 12 min</div>
        </div>
        <div className="b-post">
          <div className="t">ajscanlan.dev — Phase 0<small>Decisions, surprises, lessons from a from-scratch Astro build.</small></div>
          <div className="m"><b>Project log</b><br/>27 Oct · 3 min</div>
        </div>
        <div className="b-post">
          <div className="t">Thinking, Fast and Slow — Kahneman<small>The parts I actually use, kept brief.</small></div>
          <div className="m"><b>Cheat sheet</b><br/>15 Nov · 3 min</div>
        </div>
        <div className="b-post">
          <div className="t">On Rivers and Change<small>Flux, entropy, and gentle stubbornness.</small></div>
          <div className="m"><b>Essay</b><br/>27 Oct · 3 min</div>
        </div>
      </div>

      <aside className="b-side">
        <div className="side-card">
          <h5>Now</h5>
          <ul className="now">
            <li>Shipping UPLEX v0.3 — replication over QUIC.</li>
            <li>Reading Designing Data-Intensive Applications, slowly.</li>
            <li>Available for interviews from 1 June.</li>
          </ul>
        </div>
        <div className="side-card">
          <h5>Stack I reach for</h5>
          <div className="skills">
            <span>TypeScript</span><span>Rust</span><span>Python</span>
            <span>Node</span><span>Postgres</span><span>Redis</span>
            <span>Astro</span><span>React</span><span>Docker</span>
            <span>AWS</span><span>Terraform</span>
          </div>
        </div>
        <div className="side-card">
          <h5>Elsewhere</h5>
          <ul className="now">
            <li>GitHub — AJScanlan</li>
            <li>LinkedIn — /in/ajscanlan</li>
            <li>RSS — /feed.xml</li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
);

// ----------------------------------------------------------------------
// OPTION C — Index / Archive (dense, monospace)
// ----------------------------------------------------------------------
const OptionC = () => (
  <div className="frame">
    <Nav />
    <div className="c-hero">
      <div className="id">
        <span><b>A.J. Scanlan</b></span>
        <span>· Software engineer</span>
        <span>· Melbourne, AU</span>
        <span>· <span style={{color:'#1f7a5c'}}>● available Jun 2026</span></span>
      </div>
      <h1>I build distributed systems and developer tooling. This is the public index of everything I've shipped, learned, or written down — newest first. Look for <b>project logs</b> if you're hiring.</h1>
    </div>

    <div className="c-tabs">
      <span className="on">All<span className="count">/ 14</span></span>
      <span>Projects<span className="count">/ 4</span></span>
      <span>Technical<span className="count">/ 5</span></span>
      <span>Cheat sheets<span className="count">/ 3</span></span>
      <span>Notes<span className="count">/ 1</span></span>
      <span>Essays<span className="count">/ 1</span></span>
    </div>

    <div className="c-table">
      <div className="c-year"><h3>2025</h3><div className="rule"></div></div>
      <div className="c-row"><div className="d">2025-11-15</div><div className="k">cheat-sheet</div><div className="t">Thinking, Fast and Slow — Kahneman</div><div className="r">3 min</div></div>
      <div className="c-row"><div className="d">2025-11-12</div><div className="k">note</div><div className="t">Field Note: On Attention</div><div className="r">2 min</div></div>
      <div className="c-row"><div className="d">2025-10-27</div><div className="k proj">project-log</div><div className="t">ajscanlan.dev — Phase 0</div><div className="r">3 min</div></div>
      <div className="c-row"><div className="d">2025-10-27</div><div className="k">essay</div><div className="t">On Rivers and Change</div><div className="r">3 min</div></div>
      <div className="c-row"><div className="d">2025-10-14</div><div className="k proj">project-log</div><div className="t">UPLEX — designing a content-addressed log</div><div className="r">11 min</div></div>
      <div className="c-row"><div className="d">2025-09-02</div><div className="k">technical</div><div className="t">Why I stopped reaching for Redux</div><div className="r">9 min</div></div>
      <div className="c-row"><div className="d">2025-08-18</div><div className="k">technical</div><div className="t">Debugging a memory leak in a long-running Node worker</div><div className="r">12 min</div></div>
      <div className="c-row"><div className="d">2025-07-29</div><div className="k">cheat-sheet</div><div className="t">Postgres EXPLAIN, the parts I actually use</div><div className="r">5 min</div></div>
      <div className="c-row"><div className="d">2025-06-11</div><div className="k proj">project-log</div><div className="t">UPLEX — Phase 0: why a new log format</div><div className="r">7 min</div></div>

      <div className="c-year"><h3>2024</h3><div className="rule"></div></div>
      <div className="c-row"><div className="d">2024-12-04</div><div className="k">technical</div><div className="t">Type-safe migrations in a polyglot codebase</div><div className="r">8 min</div></div>
      <div className="c-row"><div className="d">2024-10-19</div><div className="k">technical</div><div className="t">Tracing a 99th-percentile latency spike to a kernel timer</div><div className="r">14 min</div></div>
      <div className="c-row"><div className="d">2024-08-30</div><div className="k">cheat-sheet</div><div className="t">Git rebase — the seven moves I use daily</div><div className="r">4 min</div></div>
      <div className="c-row"><div className="d">2024-05-22</div><div className="k proj">project-log</div><div className="t">Building a tiny analytics pipeline in one weekend</div><div className="r">6 min</div></div>
    </div>
  </div>
);

// ----------------------------------------------------------------------
// POST PAGE — Kahneman, no red bars
// ----------------------------------------------------------------------
const PostPage = () => (
  <div className="frame">
    <div className="post-progress"><div></div></div>
    <Nav />
    <div className="post-wrap">
      <div className="post-meta">
        <span className="kind">Cheat sheet</span>
        <span>15 Nov 2025</span>
        <span>·</span>
        <span>3 min read</span>
        <span>·</span>
        <span style={{color:'var(--ink-500)'}}>opinionated · provisional</span>
      </div>

      <h1 className="post-title">Thinking, Fast and Slow — Kahneman</h1>
      <p className="dek">Daniel Kahneman's 2011 synthesis of decades of behavioural-economics research. Dense but worth it. This is an opinionated cheat sheet — I've kept what I use and cut what I don't.</p>

      <div className="callout">
        <h6>Reader's note</h6>
        <p>This is a cheat sheet, not a review. I've kept the ideas I find practically useful. Read the book for nuance, context, and the studies behind each claim.</p>
      </div>

      <h2 className="post-h2">
        <span className="num">01 — Core model</span>
        System 1 and System 2
      </h2>
      <p><strong>System 1</strong> — Fast, automatic, unconscious. Pattern-matching, emotional, associative. Operates continuously. Generates the <em>feeling</em> of intuition.</p>
      <p><strong>System 2</strong> — Slow, effortful, deliberate. Handles logic, calculation, self-control. Lazy by default — it delegates to System 1 wherever it can get away with it.</p>
      <p>Most errors in judgment happen when System 2 <em>should</em> override System 1 but doesn't — either because we're tired, rushed, or the System 1 answer just <em>feels</em> correct.</p>

      <div className="breaker"><span></span><span></span><span></span></div>

      <h2 className="post-h2">
        <span className="num">02 — The heuristics that bite</span>
        Anchoring, availability, substitution
      </h2>
      <h3 className="post-h3">Anchoring</h3>
      <p>The first number you see warps every estimate that follows. Negotiations, estimates, salary discussions — whoever sets the anchor sets the conversation.</p>
      <h3 className="post-h3">Availability</h3>
      <p>We judge frequency by how easily examples come to mind. Recent, vivid, or emotional memories punch above their weight.</p>
    </div>
  </div>
);

// ----------------------------------------------------------------------
// README rewrite
// ----------------------------------------------------------------------
const Readme = () => (
  <div className="frame readme">
    <h1># ajscanlan.dev</h1>
    <p className="tag"><span className="cut">Personal blog and digital garden — writing my way to understanding.</span> <span className="new">A working notebook by A.J. Scanlan — project logs, technical write-ups, and references I keep looking up.</span></p>

    <h2>## What this is</h2>
    <p><span className="new">The public surface of how I work. Each post is one of four things:</span></p>
    <ul>
      <li><span className="h">project-log</span> — what I'm building, what I changed, what broke. <span className="new">The signal hiring engineers actually want.</span></li>
      <li><span className="h">technical</span> — bug write-ups, architectural decisions, deep-dives.</li>
      <li><span className="h">cheat-sheet</span> — short, opinionated reference for things I keep looking up.</li>
      <li><span className="h">essay</span> — slower, occasional, secondary.</li>
    </ul>
    <p><span className="new">If you're hiring: <a className="h">/projects</a> and the <span className="h">project-log</span> tag are the fastest read.</span></p>

    <h2>## Mission</h2>
    <p><span className="cut">Publish clear, humble, intellectually playful writing with minimal design and magazine-grade composition. Favoring short "On…" essays, field notes, cheat-sheets, and project logs.</span></p>
    <p><span className="new">Write down what I learn, in public, so that (a) I learn it better, (b) anyone evaluating me as an engineer has primary sources to look at.</span></p>

    <h2>## Brand</h2>
    <p>Abstract red-fox mark — smart, alert, kind. <span className="cut">Single accent red (#D0342C) with neutral ink/mist palette.</span> <span className="new">Fox-red used sparingly: the mark, link hover/focus, one category pill. Body uses a darker burgundy (#8A221C) for text-grade red to stay calm under long reading sessions.</span></p>

    <h2>## Content shape</h2>
    <ul>
      <li><span className="cut">thoughts/</span> <span className="new">→ essays/ &nbsp;&nbsp;(demoted; "thoughts" oversold them)</span></li>
      <li>logs/ &nbsp;&nbsp;<span className="new">(promoted to homepage feature)</span></li>
      <li><span className="new">technical/ &nbsp;&nbsp;(new — long-form bug write-ups and architecture notes)</span></li>
      <li>cheat-sheets/</li>
      <li>notes/</li>
    </ul>

    <h2>## Voice</h2>
    <p><span className="cut">Humble, curious, sincere. "Write your way to understanding." Respect the reader's time; avoid performative gravitas.</span></p>
    <p><span className="new">Clear, specific, honest about what I don't know. No "thought leadership". If a post can be a list, it's a list. If it can be one paragraph, it's one paragraph.</span></p>

    <h2>## Tech</h2>
    <p>Astro 5 · Tailwind 3 · MDX · GitHub Pages. <span className="new">Build is intentionally boring — content is the product.</span></p>
  </div>
);

Object.assign(window, { Diagnosis, OptionA, OptionB, OptionC, PostPage, Readme, Nav });
