import { getCollection, getEntry, type CollectionEntry } from 'astro:content';

// All reads of content collections go through here, so pages and
// components never depend on where or how the content is stored.

export type HeroContent = CollectionEntry<'home'>['data'];
export type Project = CollectionEntry<'projects'>;

export async function getHero(): Promise<HeroContent> {
	const entry = await getEntry('home', 'hero');
	if (!entry) throw new Error('Missing src/content/home/hero.md');
	return entry.data;
}

/** Published projects (drafts excluded), sorted by `order`. */
export async function getProjects(): Promise<Project[]> {
	const projects = await getCollection('projects', ({ data }) => !data.draft);
	return projects.sort((a, b) => a.data.order - b.data.order);
}

export type Experience = CollectionEntry<'experience'>;
export type Education = CollectionEntry<'education'>;

/** Employers, sorted by `order`. */
export async function getExperience(): Promise<Experience[]> {
	const entries = await getCollection('experience');
	return entries.sort((a, b) => a.data.order - b.data.order);
}

/** Degrees and awards, sorted by `order`. */
export async function getEducation(): Promise<Education[]> {
	const entries = await getCollection('education');
	return entries.sort((a, b) => a.data.order - b.data.order);
}

/** Display number for a project's position in the list: 0 → "01". */
export function projectNumber(index: number): string {
	return String(index + 1).padStart(2, '0');
}
