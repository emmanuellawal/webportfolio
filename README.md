# Emmanuel Lawal | Full Stack Developer Portfolio

A statically generated developer portfolio and blog built with Astro, React 19 islands, and JSON/MDX content. Designed for 90+ Lighthouse scores, WCAG 2.1 AA accessibility, JSON-LD structured data, and agent-ready content.

**Live:** [emmanuellawal.dev](https://emmanuellawal.dev)

## Features

- **Blog** — MDX posts with syntax highlighting, TOC, tags, RSS, prev/next navigation
- **Portfolio** — JSON-driven projects with detail pages and case studies
- **Performance** — Zero JS by default; React islands only for nav and contact form
- **Accessibility** — Skip link, semantic landmarks, reduced-motion support, focus states
- **SEO** — Per-page metadata, Open Graph, Twitter cards, sitemap, JSON-LD
- **Agent-ready** — `/llms.txt`, RSS, clean semantic HTML, structured data
- **No database** — All content in `src/content/` (MDX) and `src/data/` (JSON)

## Tech Stack

- [Astro 5](https://astro.build/) — Static site generation
- [React 19](https://react.dev/) — Interactive islands (nav, contact form)
- [Tailwind CSS 3](https://tailwindcss.com/) — Styling (ported from original design)
- [MDX](https://mdxjs.com/) — Blog content with Shiki highlighting
- TypeScript — End-to-end type safety including content collections

## Project Structure

```
src/
├── content/blog/       # MDX blog posts
├── data/               # profile.json, projects.json, skills.json, etc.
├── components/
│   ├── astro/          # Static components
│   └── react/          # Hydrated islands
├── layouts/            # BaseLayout, PostLayout
├── lib/                # SEO, JSON-LD, utilities
└── pages/              # Routes
public/                 # Static assets, robots.txt
```

## Local Development

```bash
npm install
cp .env.example .env   # optional
npm run dev            # http://localhost:4321
```

## Build & Preview

```bash
npm run build          # outputs to dist/
npm run preview        # serve production build locally
```

## Adding Content

**Blog post:** Create `src/content/blog/my-post.mdx` with frontmatter:

```yaml
---
title: "My Post Title"
description: "Short description for SEO"
pubDate: 2025-06-18
tags: ["Astro", "Web Development"]
draft: false
---
```

**Project:** Add an entry to `src/data/projects.json`.

## Deployment (Vercel)

1. Connect the repo at [vercel.com/new](https://vercel.com/new) — Vercel auto-detects Astro.
2. Set `SITE_URL=https://emmanuellawal.dev` in Vercel → Project Settings → Environment Variables (Production, Preview, Development).
3. Confirm the build is green on the `*.vercel.app` preview URL.
4. Add custom domain `emmanuellawal.dev` in Vercel → Domains and update DNS at your registrar.
5. Disable GitHub Pages in repo settings (Settings → Pages → Source → None) if it was previously enabled.

Place your resume at `public/resume.txt` (or `public/resume.pdf`) for the About page download link.

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `SITE_URL` | Build time | Production URL for sitemap, JSON-LD, OG tags |
| `PUBLIC_WEB3FORMS_KEY` | Optional | Web3Forms key for contact form; falls back to mailto |

## Contact

- GitHub: [emmanuellawal](https://github.com/emmanuellawal)
- LinkedIn: [Emmanuel Lawal](https://linkedin.com/in/emmanuel-lawal-98519718b)
- Email: emmanuellawal2024@gmail.com

---

© Emmanuel Lawal. All rights reserved.
