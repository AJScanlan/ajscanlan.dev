import { defineCollection, z } from 'astro:content';

const kindEnum = z.enum(['project-log', 'technical', 'cheat-sheet', 'note', 'essay']);

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

const essays = defineCollection({
    type: 'content',
    schema: sharedFields.extend({
        dek: z.string().min(1),
        date: z.coerce.date(),
        kind: kindEnum,
    }),
});

const notes = defineCollection({
    type: 'content',
    schema: sharedFields.extend({
        date: z.coerce.date(),
        kind: kindEnum,
    }),
});

const cheatSheets = defineCollection({
    type: 'content',
    schema: sharedFields.extend({
        updated: z.coerce.date(),
        kind: kindEnum,
    }),
});

const logs = defineCollection({
    type: 'content',
    schema: sharedFields.extend({
        date: z.coerce.date(),
        kind: kindEnum,
    }),
});

const technical = defineCollection({
    type: 'content',
    schema: sharedFields.extend({
        dek: z.string().min(1),
        date: z.coerce.date(),
        kind: kindEnum,
    }),
});

const drafts = defineCollection({
    type: 'content',
    schema: sharedFields.extend({
        date: z.coerce.date().optional(),
    }),
});

const projects = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        blurb: z.string(),
        status: z.enum(['live', 'in-progress', 'archived']),
        stack: z.array(z.string()),
        links: z.array(z.object({
            label: z.string(),
            url: z.string(),
        })),
        featured: z.boolean().default(false),
        order: z.number().optional(),
    }),
});

export const collections = {
    essays,
    notes,
    'cheat-sheets': cheatSheets,
    logs,
    technical,
    drafts,
    projects,
};
