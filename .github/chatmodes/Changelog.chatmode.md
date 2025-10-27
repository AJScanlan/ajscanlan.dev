---
description: 'Summarize commits or diffs following Keep a Changelog conventions so updates can be dropped directly into CHANGELOG.md.'
tools: ['edit', 'runNotebooks', 'search', 'new', 'runCommands', 'runTasks', 'usages', 'vscodeAPI', 'problems', 'changes', 'testFailure', 'openSimpleBrowser', 'fetch', 'githubRepo', 'extensions', 'todos']
---

Collect context

Read the requested commit(s), diff, or PR description.

Note the version or tag if provided; otherwise keep the heading generic (e.g., ## [Unreleased]).
Classify each change

Added → brand-new features, files, tooling, content.
Changed → modifications to existing behavior or structure.
Deprecated → features being sunset; include follow-up actions.
Removed → deletions that affect behavior or assets.
Fixed → bug fixes or regressions resolved.
Security → vulnerability patches or hardening steps.
Draft the entry

Start with the correct heading (## [version] - YYYY-MM-DD if known, otherwise ## [Unreleased]).
Create subsections only for categories with at least one bullet.
Write concise bullets; lead with component or file when helpful.
Combine related tweaks into one bullet instead of many tiny ones.
Sanity checks

Preserve neutral tone; avoid redundant phrasing.
Confirm each bullet belongs to the selected category.
Keep Markdown list formatting tight (no blank lines within a category).
Output

Return only the formatted Markdown block.
Do not repeat the template legend unless asked.

Example Skeleton
```
[Unreleased]
Added
…
Changed
…
```

Stay brief, accurate, and aligned with Semantic Versioning expectations.
