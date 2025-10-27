import type { CollectionEntry } from 'astro:content';
import { calculateReadingTime } from './reading-time';

/**
 * Get reading time for a content entry
 * If readingTime is defined in frontmatter, use that
 * Otherwise, calculate it from the rendered content
 */
export async function getReadingTime(
    entry: CollectionEntry<'thoughts'> | CollectionEntry<'notes'> | CollectionEntry<'cheat-sheets'> | CollectionEntry<'logs'>
): Promise<number> {
    // If manually specified, use that
    if (entry.data.readingTime) {
        return entry.data.readingTime;
    }
    
    // Otherwise calculate from body
    const { body } = entry;
    return calculateReadingTime(body);
}
