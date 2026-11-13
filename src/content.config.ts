import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Home page copy. One Markdown file per section (hero.md, …).
// The schema makes the build fail on missing or misspelled fields.
const home = defineCollection({
	loader: glob({ pattern: '*.md', base: './src/content/home' }),
	schema: z.object({
		heading: z.string(),
		intro: z.array(z.string()).min(1),
		links: z.array(
			z.object({
				label: z.string(),
				href: z.string(),
			}),
		),
		now: z.string(),
		// Path under /public, e.g. "/images/karthik.jpg". Omit to show the placeholder.
		photo: z.string().optional(),
		photoAlt: z.string().optional(),
	}),
});

export const collections = { home };
