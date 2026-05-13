import type { CollectionEntry } from 'astro:content';
import { calculateReadingTime } from './reading-time';

export async function getReadingTime(
    entry: CollectionEntry<'essays'> | CollectionEntry<'notes'> | CollectionEntry<'cheat-sheets'> | CollectionEntry<'logs'> | CollectionEntry<'technical'>
): Promise<number> {
    if (entry.data.readingTime) {
        return entry.data.readingTime;
    }
    const { body } = entry;
    return calculateReadingTime(body ?? '');
}
