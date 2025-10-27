# Reading Time Calculation Implementation

## Overview
Automatic reading time calculation for all content types (thoughts, notes, cheat-sheets, logs).

## How It Works
Reading time is calculated at **build time** from the raw markdown body of each post:
- **Default rate**: 200 words per minute
- **Minimum**: 1 minute
- **Rounding**: Up to nearest minute
- **Manual override**: Set `readingTime` in frontmatter to override auto-calculation

## Implementation Details

### Core Utilities
1. **`src/utils/reading-time.ts`**
   - `calculateReadingTime(text, wordsPerMinute)` - Calculates reading time from text
   - `formatReadingTime(minutes)` - Formats as "X min read"
   - Strips code blocks, HTML tags, and markdown syntax before counting words

2. **`src/utils/get-reading-time.ts`**
   - `getReadingTime(entry)` - Gets reading time for a content entry
   - Respects manual `readingTime` in frontmatter if present
   - Otherwise calculates from `entry.body`

### Usage in Templates
All post-related pages pre-calculate reading time:

```typescript
import { getReadingTime } from "@/utils/get-reading-time";
import { formatReadingTime } from "@/utils/reading-time";

// For single post
const readingTime = await getReadingTime(entry);

// For post lists
const postsWithReadingTime = await Promise.all(
    posts.map(async (post) => ({
        post,
        readingTime: await getReadingTime(post),
    }))
);
```

### Display Format
Reading time appears as inline metadata:
- **Single post**: After date, before content
- **Post lists**: After date in metadata line
- **Format**: "X min read" (e.g., "6 min read")

## Files Modified
- ✅ `src/utils/reading-time.ts` - Core calculation logic
- ✅ `src/utils/get-reading-time.ts` - Content entry wrapper
- ✅ `src/pages/posts/[slug].astro` - Individual post template
- ✅ `src/pages/posts/index.astro` - Archive page
- ✅ `src/pages/index.astro` - Homepage
- ✅ `.github/copilot-instructions.md` - Updated documentation
- ✅ `TODO.md` - Marked task complete

## Dependencies
- `mdast-util-to-string` - For extracting text from markdown AST (already installed via `unist-util-visit`)

## Testing
Verified that:
- ✅ Manual `readingTime` in frontmatter is respected (6 min for main post)
- ✅ Automatic calculation works for posts without frontmatter value
- ✅ Reading time displays on individual posts
- ✅ Reading time displays in post lists (homepage, archive)
- ✅ Build succeeds without errors

## Future Improvements
- Consider adding "X min read" to RSS feed items
- Add reading time to SEO meta tags
- Consider different reading speeds for code-heavy posts
