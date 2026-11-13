import { getEntry, type CollectionEntry } from 'astro:content';

// All reads of the `home` collection go through here, so pages and
// components never depend on where or how the content is stored.

export type HeroContent = CollectionEntry<'home'>['data'];

export async function getHero(): Promise<HeroContent> {
	const entry = await getEntry('home', 'hero');
	if (!entry) throw new Error('Missing src/content/home/hero.md');
	return entry.data;
}
