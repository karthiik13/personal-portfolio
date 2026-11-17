---
title: This site
summary: My portfolio, built with Astro and TypeScript, developed with Claude Code from a written spec.
tags: [Astro, TypeScript, Claude Code]
order: 4
github: https://github.com/karthiik13/personal-portfolio
---

## Problem

I wanted a fast, accessible portfolio, and a real project to learn agentic coding properly: writing a spec, planning before code, and reviewing every step.

## Demo

You're looking at it.

## How it works

- A static Astro site: pages are plain HTML at build time, with only a few lines of client-side JavaScript (theme toggle, scroll reveal).
- All copy lives in Markdown content collections with typed schemas, so the build fails on missing or misspelled content.
- Plain CSS design tokens for colour, type and spacing, with light and dark themes that load without a flash.
- A written spec (`CLAUDE.md`) sets the structure, design rules and code conventions that every change follows.

## Stack

Astro 7 · TypeScript (strict) · plain CSS · Prettier · `astro check` · Claude Code

Lighthouse: 100 on Performance, Accessibility, Best Practices and SEO (measured locally).

## What I learned

- A clear written spec plus "plan before code" keeps an AI coding agent on track.
- Small, reviewed commits make every change easy to check and undo.
- Typed content schemas catch mistakes before they ship.
