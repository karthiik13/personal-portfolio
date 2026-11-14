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

// One Markdown file per project; the filename becomes the URL slug.
const projects = defineCollection({
	loader: glob({ pattern: '*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		tags: z.array(z.string()),
		order: z.number(),
		github: z.url(),
		demo: z.url().optional(),
		draft: z.boolean().default(false),
		sample: z.boolean().default(false),
	}),
});

// One Markdown file per employer.
const experience = defineCollection({
	loader: glob({ pattern: '*.md', base: './src/content/experience' }),
	schema: z.object({
		company: z.string(),
		roles: z.array(
			z.object({
				title: z.string(),
				period: z.string(),
			}),
		),
		context: z.string(),
		highlights: z.array(z.string()).min(1),
		order: z.number(),
	}),
});

// One Markdown file per degree or award.
const education = defineCollection({
	loader: glob({ pattern: '*.md', base: './src/content/education' }),
	schema: z.object({
		kind: z.enum(['education', 'award']),
		title: z.string(),
		detail: z.string(),
		year: z.string(),
		order: z.number(),
	}),
});

export const collections = { home, projects, experience, education };
