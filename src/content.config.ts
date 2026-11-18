import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Home page copy. One Markdown file per section (hero.md, …).
// The schema makes the build fail on missing or misspelled fields.
const home = defineCollection({
	loader: glob({ pattern: '*.md', base: './src/content/home' }),
	schema: z.object({
		intro: z.array(z.string()).min(1),
		now: z.string(),
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

// A skill, optionally marked as still being learned or at a basic level.
const skill = z.object({
	name: z.string(),
	level: z.enum(['learning', 'basic']).optional(),
});

// One Markdown file per skill group.
const skills = defineCollection({
	loader: glob({ pattern: '*.md', base: './src/content/skills' }),
	schema: z.object({
		title: z.string(),
		order: z.number(),
		items: z.array(skill).min(1),
		subgroups: z
			.array(
				z.object({
					label: z.string(),
					items: z.array(skill).min(1),
				}),
			)
			.optional(),
	}),
});

// Identity and contact details shared across the site (single file: profile.md).
const profile = defineCollection({
	loader: glob({ pattern: '*.md', base: './src/content/profile' }),
	schema: z.object({
		name: z.string(),
		/** Short role for page titles, e.g. "iOS engineer". */
		role: z.string(),
		/** One-line positioning shown under the name in the hero. */
		tagline: z.string(),
		/** Path to the résumé PDF in public/. The nav button is hidden while this is unset. */
		resume: z.string().startsWith('/').optional(),
		email: z.email(),
		location: z.string(),
		availability: z.string(),
		links: z.array(
			z.object({
				label: z.string(),
				href: z.string(),
			}),
		),
	}),
});

export const collections = { home, profile, projects, experience, education, skills };
