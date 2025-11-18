# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project overview

- Next.js 16 App Router application (`src/app`) using React 19 and TypeScript (strict mode enabled in `tsconfig.json`).
- Styling is primarily via Tailwind CSS v4 (wired through `postcss.config.mjs`) plus custom utility classes in `src/app/globals.css`.
- Module resolution uses a path alias: `@/*` maps to `./src/*` (see `tsconfig.json`). Prefer this alias when importing from `src`.

## Development commands

All commands are run from the repo root (`the-anth-site`). Use a single package manager consistently (the examples below use `npm`).

- **Start dev server** (primary workflow)
  - `npm run dev`
  - Serves the site at `http://localhost:3000` using Next.js in development mode.

- **Production build**
  - `npm run build`
  - Runs `next build` to produce an optimized production bundle in `.next/`.

- **Run production server locally**
  - `npm run start`
  - Starts `next start` against the latest build output. Run `npm run build` first if needed.

- **Lint the codebase**
  - `npm run lint`
  - Uses ESLint 9 with `eslint-config-next` (core web vitals + TypeScript) via `eslint.config.mjs`.
  - To lint a specific file or directory, pass a path through to ESLint, e.g.:
    - `npm run lint -- src/app/page.tsx`
    - `npm run lint -- src/components/site-shell.tsx`

- **Testing**
  - There is no test runner or test script configured in `package.json` at present. Before adding test-related commands to this section, first introduce a testing stack (e.g. Jest/RTL or Vitest/Playwright) and expose it via `npm test` or similar.

## High-level architecture

### App Router and layouts

- The application uses the **App Router** under `src/app`.
- `src/app/layout.tsx` defines `RootLayout`, which:
  - Configures global metadata (`Metadata`) for the site (title templates, OpenGraph, and Twitter cards) targeting "The ANTH" brand and domain.
  - Loads Geist and Geist Mono via `next/font/google`, wiring them into CSS variables (`--font-geist-sans`, `--font-geist-mono`).
  - Imports global styles from `./globals.css`.
  - Wraps all route content in the shared `SiteShell` component from `src/components/site-shell.tsx`.

### Site shell and navigation

- `src/components/site-shell.tsx` is a client component (`"use client"`) that provides the overall page chrome:
  - Uses `usePathname` from `next/navigation` to determine the current route.
  - Renders the main header with brand identity and a pill-style navigation bar derived from a static `navItems` array (Home, About, Team, Capabilities, Delivery & Governance, Partnership, Contact).
  - Highlights the active navigation item by comparing `pathname` to each `href` (special-casing `/`).
  - Provides a shared content container (`content-shell`) for the main area and a consistent footer with brand messaging.
- Every top-level page rendered under `src/app` is composed inside this `SiteShell`, ensuring consistent layout, navigation, and footer across routes.

### Pages and content structure

- The primary landing page is `src/app/page.tsx` (the `/` route):
  - Structured as a stack of semantic sections (Hero, Mission & Philosophy, Capabilities, Contact) using descriptive CSS utility classes (e.g. `section-card`, `section-inner`, `section-title`).
  - Uses in-page anchors (`id="about"`, `id="capabilities"`, `id="contact"`) that align with navigation CTAs.
  - Content focuses on The ANTH’s positioning (bank-grade platforms, governance model, Afro-futurist framing) and is largely static markup.
- Additional sections of the site are implemented as **route segments** under `src/app/*/page.tsx` (e.g. `about`, `capabilities`, `delivery-governance`, `partnership`, `team`, `contact`). These follow the same visual language and are rendered within the shared `SiteShell`.

### Configuration and tooling

- **Next.js config**: `next.config.ts` currently uses the default `NextConfig` shape with a placeholder for options. Extend this file for domain-specific behavior (redirects, image domains, experimental flags, etc.).
- **TypeScript config**: `tsconfig.json`:
  - Enables strict type-checking and `jsx: "react-jsx"`.
  - Uses `moduleResolution: "bundler"` and includes all `*.ts`, `*.tsx`, and `*.mts` files under the project and `.next` type outputs.
  - Declares the `@/*` path alias to point at `src/*`.
- **ESLint**: `eslint.config.mjs`:
  - Builds the config via `defineConfig`, spreading `eslint-config-next` presets for core web vitals and TypeScript.
  - Overrides default ignores using `globalIgnores` to skip `.next/**`, `out/**`, `build/**`, and `next-env.d.ts`.
- **PostCSS/Tailwind**: `postcss.config.mjs` wires the `@tailwindcss/postcss` plugin, powering Tailwind v4 utility class usage across the app.

## How to extend this file

- If you introduce testing, Storybook, additional build pipelines, or non-trivial shared components/layouts, update this file with:
  - The new commands (e.g. `npm test`, `npm run storybook`).
  - Any new top-level architectural concepts (e.g. design system packages, feature modules, or shared layout primitives).