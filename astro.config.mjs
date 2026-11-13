// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Fonts are downloaded at build time and self-hosted (no CDN, no npm dependency).
	fonts: [
		{
			name: 'Geist',
			cssVariable: '--font-geist',
			provider: fontProviders.fontsource(),
			// Variable font: one file covers the whole weight range.
			weights: ['400 700'],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['system-ui', 'sans-serif'],
		},
		{
			name: 'Geist Mono',
			cssVariable: '--font-geist-mono',
			provider: fontProviders.fontsource(),
			weights: ['400 500'],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['ui-monospace', 'monospace'],
		},
	],
});
