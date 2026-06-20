# Publishing a Post — Runbook

Create a new post and get it live on ajscanlan.dev.

**Last verified**: 2026-06-20
**Typical duration**: ~10 min (excluding writing)
**Prerequisites**:
- Repo cloned, `npm ci` run
- Working on a branch (not `main`)

## Steps

### 1. Choose the collection for your content type

| `kind` | Collection directory | Date field | `dek` |
|---|---|---|---|
| `project-log` | `src/content/logs/` | `date` (required) | optional |
| `technical` | `src/content/technical/` | `date` (required) | **required** |
| `essay` | `src/content/essays/` | `date` (required) | **required** |
| `note` | `src/content/notes/` | `date` (required) | optional |
| `cheat-sheet` | `src/content/cheat-sheets/` | `updated` (required) | optional |

Only `cheat-sheets/` ships with content today. If your directory doesn't exist, create it:

```bash
mkdir -p src/content/<collection>
```

### 2. Create the post file

```bash
# The filename becomes the URL slug: my-post.mdx → /posts/my-post/
touch src/content/<collection>/<your-slug>.mdx
```

Use `.mdx` (not `.md`) if you want `<Callout>`, `<SectionBreak>`, or `<Eyebrow>`.

### 3. Add frontmatter

Copy the block below. `kind` **must** match the collection — it's enforced at build.

```yaml
---
title: "Your Title"
dek: "One-line description"     # required for technical & essay; optional otherwise
date: 2026-06-20                # cheat-sheets use `updated:` instead of `date:`
kind: "technical"               # must match the collection (see Step 1)
tags: ["tag1", "tag2"]
status: "draft"                 # keep as draft while writing (see Step 5)
openness: "provisional"         # or "confident"
---
```

Full field list and defaults: `src/content/config.ts`.

### 4. Write the body

Start headings at `##`. The `#`/h1 is rendered automatically from `title`. For MDX component usage, see `COMPONENTS.md`.

### 5. Preview locally

```bash
npm run dev      # http://localhost:4321
```

To see the post's **page**, set `status: "published"` first. The route `/posts/<slug>/` is generated only for published posts — even in dev — so a draft has no page to preview.

### 6. Publish

Set `status: "published"`, then commit and push:

```bash
git add src/content/<collection>/<your-slug>.mdx
git commit -m "post: <your-slug>"
git push -u origin <branch>
```

Open a PR and merge to `main` (or push to `main` directly). A push to `main` triggers `.github/workflows/deploy.yml`, which builds and deploys to GitHub Pages.

## Verify

Local build passes:

```bash
npm run build
```

Expected: build completes and `dist/posts/<your-slug>/index.html` exists. (You may see `collection ... is empty` warnings — those are harmless; see Troubleshooting.)

After the deploy Action completes (check the **Actions** tab), confirm live:
- `https://ajscanlan.dev/posts/<your-slug>/` loads
- The post appears on `https://ajscanlan.dev/archive`

## Rollback (unpublish)

1. Set `status: "draft"` (or delete the file).
2. Commit and push to `main`.
3. The next deploy rebuilds without the post; its page then 404s.

GitHub Pages serves the last successful build, so the post stays live until that next deploy completes.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| Post 404s / missing from archive | `status` is `draft` (the **default** when omitted) | Set `status: "published"` |
| Build error: `date` Required | A non-cheat-sheet post is missing `date` | Add `date:` (cheat-sheets use `updated:`) |
| Build error on `kind` | `kind` doesn't match the collection's literal | Match them (e.g. `logs/` → `kind: "project-log"`) |
| `Callout is not defined` (or other component) | File is `.md`, not `.mdx` | Rename the file to `.mdx` |
| Post in archive but not on homepage | The homepage shows only the latest few per section (4 engineering, 3 reference, 3 essays) | Expected — the full list lives on `/archive` |
| File in `src/content/drafts/` never appears | The `drafts` collection is excluded from all routing and listings | Move the file into a real collection |
| Build warns `collection "X" does not exist or is empty` | That collection has no published posts yet (the directory is unpopulated) | Harmless — the warning clears once the collection has content |
