import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';


export async function GET(context: APIContext) {
    // Fetch all published content from all collections
    const [thoughts, notes, cheatSheets, logs] = await Promise.all([
        getCollection('thoughts', ({ data }) => data.status === 'published'),
        getCollection('notes', ({ data }) => data.status === 'published'),
        getCollection('cheat-sheets', ({ data }) => data.status === 'published'),
        getCollection('logs', ({ data }) => data.status === 'published'),
    ]);

    // Combine all content types into a single array
    const allContent = [
        ...thoughts.map((post) => ({
            ...post,
            collection: 'thoughts' as const,
        })),
        ...notes.map((post) => ({
            ...post,
            collection: 'notes' as const,
        })),
        ...cheatSheets.map((post) => ({
            ...post,
            collection: 'cheat-sheets' as const,
        })),
        ...logs.map((post) => ({
            ...post,
            collection: 'logs' as const,
        })),
    ];

    // Sort by date (use 'updated' for cheat-sheets, 'date' for others), most recent first
    const sortedContent = allContent.sort((a, b) => {
        const dateA = 'date' in a.data ? a.data.date : a.data.updated;
        const dateB = 'date' in b.data ? b.data.date : b.data.updated;
        return dateB.valueOf() - dateA.valueOf();
    });

    return rss({
        title: 'ajscanlan.dev',
        description: 'Writing my way to understanding',
        site: context.site?.href ?? 'https://ajscanlan.dev',
        items: sortedContent.map((post) => ({
            title: post.data.title,
            description: post.data.dek ?? '',
            pubDate: 'date' in post.data ? post.data.date : post.data.updated,
            link: `/posts/${post.slug}/`,
        })),
    });
}
