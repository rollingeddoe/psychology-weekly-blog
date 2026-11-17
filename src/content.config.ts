import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(['Weekly digest', 'Research note', 'Editorial']),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(true),
    issue: z.number().int().positive().optional(),
  }),
});
export const collections = { posts };
