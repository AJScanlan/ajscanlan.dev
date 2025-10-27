import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import {
    ARCHIVE_COLLECTIONS,
    type ArchiveCollection,
    type ArchiveEntryData,
    getPrimaryDate,
} from '@/lib/archive';

export async function GET(context: APIContext) {
    const entries: Array<{
        collection: ArchiveCollection;
        slug: string;
        data: ArchiveEntryData;
    }> = (
        await Promise.all(
            ARCHIVE_COLLECTIONS.map(async (collection) => {
                const items = await getCollection(
                    collection,
                    ({ data }) => data.status === 'published',
                );
                return items.map((item) => ({
                    collection,
                    slug: item.slug,
                    data: item.data as ArchiveEntryData,
                }));
            }),
        )
    ).flat();

    const datedEntries = entries
        .map((entry) => {
            const primaryDate = getPrimaryDate(entry.data);
            if (!primaryDate) {
                return undefined;
            }
            return { ...entry, primaryDate };
        })
        .filter((entry): entry is (typeof entries)[number] & { primaryDate: Date } =>
            Boolean(entry),
        )
        .sort((a, b) => b.primaryDate.valueOf() - a.primaryDate.valueOf());

    return rss({
        title: 'ajscanlan.dev',
        description: 'Writing my way to understanding',
        site: context.site?.href ?? 'https://ajscanlan.dev',
        items: datedEntries.map(({ collection, slug, data, primaryDate }) => ({
            title: data.title,
            description: data.dek ?? '',
            pubDate: primaryDate,
            link: `/archive/${collection}/${slug}/`,
        })),
    });
}
