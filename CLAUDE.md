# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Overview
This is a personal portfolio of the repository owner, Michael Kenji Wilkins.

## Commands

```bash
pnpm dev        # Development server (Turbopack)
pnpm build      # Production build (static export)
pnpm lint       # ESLint
```

No test suite is configured.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which:
1. Builds with `pnpm build`, passing `PAGES_BASE_PATH` from `actions/configure-pages` so Next.js sets the correct `basePath`
2. Uploads `./out` as a Pages artifact and deploys via `actions/deploy-pages`

PRs targeting `main` or `develop` run `.github/workflows/pullRequest.yml`: lint + build check (no deploy).

## Architecture

Personal portfolio site — Next.js 15 App Router, TypeScript, Tailwind CSS, statically exported.

**Output:** `next build` generates a static site in `/out`. Images are unoptimized (`next.config.ts`) to support static export. Base path is configurable via `PAGES_BASE_PATH` env var.

**Routing:** No route, just a single page at `/` (home). All content is rendered statically at build time for deployment to github pages.

**i18n:** Client-side language detection in `app/page.tsx` using `navigator.language`. Detects "ja" for Japanese, defaults to English. Translations live in `i18n/dictionaries/{en,ja}/*.json` and are lazy-loaded via `i18n/dictionaries.ts`. The `lang` prop flows down from the page to leaf components.

**React coding rules:**
- Functional components only, with React hooks for state/effects
- No server components or API routes since this is a static site
- Data fetching is static at build time, no client-side fetching or SWR

**Component patterns:**
- `app/page.tsx` — `"use client"`, manages language state on mount, passes `lang` to children
- `components/` — presentational components; Card sub-components export from `cards/index.ts`
- `components/techstacks/TechStackSwiper.tsx` — Swiper carousel with debounced resize and responsive breakpoints (3/5/7 slides)

**Styling:** Tailwind utilities + `app/globals.css` (CSS variables for theme) + `app/home.css` (gradient animation). Dark mode via `prefers-color-scheme`.
