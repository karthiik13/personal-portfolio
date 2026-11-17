# Karthik Sudarsan — portfolio

My personal site: a single home page (projects, experience, skills, contact) plus one page per project.
I'm a software engineer moving into AI engineering, and this site is where those projects live.

Built with Astro and TypeScript, styled with plain CSS, and developed with Claude Code as a way to learn agentic coding.

## Stack

- [Astro](https://astro.build): static output, no backend
- TypeScript (strict)
- Plain CSS with design tokens (CSS custom properties); no CSS framework or UI library
- Geist and Geist Mono, self-hosted at build time
- Content in Markdown via Astro content collections

No client-side JavaScript except a small script for the light/dark toggle.

## Project structure

```text
public/              static files (favicons, robots.txt)
src/
  content/           all site copy, as Markdown (one file per project, job, skill group…)
  content.config.ts  content collection schemas
  lib/               data access: every content read goes through here
  pages/             routes: home, /projects/<slug>, 404
  layouts/           page shell (head, nav, footer)
  components/        presentational components (props in, markup out)
  styles/global.css  design tokens and base styles
```

To add a project, create a Markdown file in `src/content/projects/`. Set `draft: true` in its frontmatter to keep it out of the build.

## Commands

| Command                | What it does                                      |
| :--------------------- | :------------------------------------------------ |
| `npm install`          | Install dependencies                              |
| `npm run dev`          | Start the dev server at `localhost:4321`          |
| `npm run build`        | Type-check (`astro check`), then build to `dist/` |
| `npm run preview`      | Serve the production build locally                |
| `npm run check`        | Type-check only                                   |
| `npm run format`       | Format everything with Prettier                   |
| `npm run format:check` | Check formatting without changing files           |

Requires Node 22.23.4 or newer.
