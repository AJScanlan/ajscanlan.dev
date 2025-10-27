import { defineCollection, z } from 'astro:content';

const sharedFields = z.object({
    title: z.string(),
    dek: z.string().min(1).optional(),
    tags: z.array(z.string()).default([]),
    series: z.string().optional(),
    readingTime: z.number().int().positive().optional(),
    status: z.enum(['draft', 'published']).default('draft'),
    openness: z.enum(['provisional', 'confident']).default('provisional'),
    updated: z.coerce.date().optional(),
});

const thoughts = defineCollection({
    type: 'content',
    schema: sharedFields.extend({
        dek: z.string().min(1),
        date: z.coerce.date(),
    }),
});

const notes = defineCollection({
    type: 'content',
    schema: sharedFields.extend({
        date: z.coerce.date(),
    }),
});

const cheatSheets = defineCollection({
    type: 'content',
    schema: sharedFields.extend({
        updated: z.coerce.date(),
    }),
});

const logs = defineCollection({
    type: 'content',
    schema: sharedFields.extend({
        date: z.coerce.date(),
    }),
});

const drafts = defineCollection({
    type: 'content',
    schema: sharedFields.extend({
        date: z.coerce.date().optional(),
    }),
});

export const collections = {
    thoughts,
    notes,
    'cheat-sheets': cheatSheets,
    logs,
    drafts,
};
