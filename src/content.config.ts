// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collections
const blog = defineCollection({
    loader: file("src/data/blog.yaml"),
    schema: z.object({
        title: z.string(),
        id: z.string(),
        date: z.string(),
        link: z.string(),
        publication: z.string().optional()
    })
});
const mentions = defineCollection({
    loader: file("src/data/mentions.yaml"),
    schema: z.object({
        venue: z.string(),
        id: z.string(),
        title: z.string(),
        link: z.string(),
        work_mentioned_title: z.string().optional(),
        work_mentioned_link: z.string().optional(),
        date: z.string().optional()
    })
});
const papers = defineCollection({
    loader: file("src/data/papers.yaml"),
    schema: z.object({
        title: z.string(),
        id: z.string(),
        authors: z.array(z.string()),
        type: z.string(),
        venue: z.string(),
        year: z.number(),
        link: z.string().optional()
    })
});
const prototypes = defineCollection({
    loader: file("src/data/prototypes.yaml"),
    schema: z.object({
        name: z.string(),
        id: z.string(),
        description: z.string(),
        link: z.string().optional(),
        image: z.string().optional(),
        tags: z.array(z.string()).optional()
    })
});
const software = defineCollection({
    loader: file("src/data/software.yaml"),
    schema: z.object({
        name: z.string(),
        id: z.string(),
        description: z.string(),
        link: z.string()
    })
});
const updates = defineCollection({
    loader: file("src/data/updates.yaml"),
    schema: z.object({
        emoji: z.string(),
        id: z.string(),
        date: z.string(),
        description: z.string(),
        link: z.string().optional(),
    })
});


// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog, mentions, papers, prototypes, software, updates };