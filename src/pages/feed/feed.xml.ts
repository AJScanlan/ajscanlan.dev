import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';


export async function GET(context: APIContext) {
    const posts = await getCollection('posts', ({ data }) => !data.draft);
    return rss({
        title: 'ajscanlan.dev',
        description: 'Writing my way to understanding',
        site: context.site?.href ?? 'https://ajscanlan.dev',
        items: posts.map((p) => ({
            title: p.data.title,
            description: p.data.description,
            pubDate: p.data.date,
            link: `/posts/${p.slug}/`,
        })),
    });
}
