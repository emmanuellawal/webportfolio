# HANDOFF — emmanuellawal.dev

> Forward Deployed AI Engineer portfolio. Dark agency register. Type and work carry the page. Color is punctuation.

Completed: 9-phase looks-expensive build pass. Build is clean (0 errors, 0 warnings, 1 pre-existing TS hint). axe WCAG 2.0/2.1 A+AA clean on all 10 routes. Playwright-verified across 5 breakpoints.

---

## Design System

### Font

| Token | Value |
|---|---|
| Family | `'Archivo Variable'` (wght axis, 100–900) |
| Fallback | `'Archivo Variable Fallback'` → Arial, metric-matched (ascent 90%, descent 24%, size-adjust 95%) |
| Stack | `'Archivo Variable', 'Archivo Variable Fallback', system-ui, sans-serif` |
| Preload | `/_astro/archivo-latin-wght-normal.[hash].woff2` (generated at build, in `<head>` of every page) |
| Package | `@fontsource-variable/archivo` (variable only — static weights removed) |

Type scale (fluid via `clamp()`):

| Role | Size | Weight |
|---|---|---|
| Display / H1 | `clamp(2.5rem, 5vw + 1rem, 4.5rem)` | 700 |
| H2 | `clamp(1.5rem, 3vw + 0.5rem, 2.25rem)` | 700 |
| H3 | `1.125rem` | 600 |
| Body | `17px` | 400 |
| Small / meta | `0.875rem` | 400–500 |

Typography craft layer active: `text-wrap: balance` on headings, `text-wrap: pretty` on prose, `tabular-nums` on all figures.

---

### Color (all OKLCH, hue 210)

```
--bg              oklch(0.13 0.012 210)   Near-black canvas
--bg-2            oklch(0.16 0.012 210)   Alternate dark section
--surface         oklch(0.18 0.014 210)   Card/form surface
--raised          oklch(0.22 0.014 210)   Elevated UI elements
--bg-invert       oklch(0.97 0.008 210)   Light invert section

--text            oklch(0.96 0.01  210)   Primary text
--text-2          oklch(0.72 0.012 210)   Secondary / muted
--text-3          oklch(0.62 0.01  210)   Tertiary / subtle (≥5.17:1 on all surfaces — WCAG AA)
--text-invert     oklch(0.16 0.014 210)   Text on light invert section
--text-invert-2   oklch(0.42 0.012 210)   Secondary text on light invert

--hairline        rgba(255,255,255,0.06)  Default border
--hairline-strong rgba(255,255,255,0.10)
--hairline-bold   rgba(255,255,255,0.16)
--hairline-invert rgba(15,25,40,0.10)     Border on light section

--accent          oklch(0.72 0.12  210)   Links, icons, tints — NOT button fills
--accent-ink      oklch(0.46 0.12  210)   Primary button background (WCAG AA with near-white text)
--accent-hover    oklch(0.42 0.12  210)   Button hover — darker than rest
--accent-pressed  oklch(0.38 0.11  210)   Button active
--accent-on-dark  oklch(0.78 0.10  210)   Accent on near-black surfaces
--accent-focus-ring oklch(0.97 0.008 210) Focus ring on accent-filled elements
--accent-tint     oklch(0.72 0.12 210 / 0.08)  Tinted section background

--signal-violet   oklch(0.70 0.14  310)   Secondary signal (rare)
--signal-orange   oklch(0.72 0.14   45)   Secondary signal (rare)

--destructive     oklch(0.62 0.20   25)   Form error
--success         oklch(0.68 0.14  150)   Form success
```

**Rule:** `--accent-ink` is a background-only token. Never use as `color`, `fill`, `stroke`, or `border-color`.

---

### Spacing

Base: 8px. Standard marketing rhythm.

```
xs:  4px    (internal gaps)
sm:  8px    (tight spacing)
md:  16px   (component padding)
lg:  24px   (section sub-gaps)
xl:  40px   (component gaps)
2xl: 64px   (section padding mobile)
3xl: 96px   (section padding desktop)
```

Section padding: `.section-pad` → `clamp(4rem, 8vw, 7rem)` top/bottom.
Max content width: `80rem` via `.site-shell`.

---

### Border Radius

```
--radius-xs: 4px   (inputs, small pills)
--radius-sm: 8px   (buttons, cards)
--radius-md: 12px  (modals, larger cards)
```

---

### Motion

All transitions use custom cubic-bezier — bare `linear` and `ease-in-out` are banned.

```
Hover state:      180ms cubic-bezier(0.22, 1, 0.36, 1)
Scroll reveal:    500ms cubic-bezier(0.16, 1, 0.30, 1)
Header state:     250ms cubic-bezier(0.22, 1, 0.36, 1)
Brand underline:  600ms cubic-bezier(0.16, 1, 0.30, 1) on page load
```

Animations:
1. Brand underline draw (CSS `scaleX` keyframe — typographic, domain-specific)
2. Ledger stagger reveal (IntersectionObserver, staggered `transition-delay` per row)
3. Scroll-state header condense (transparent → hairline + backdrop-blur)

`prefers-reduced-motion: reduce` disables all animations globally via CSS. No-JS fallback via `<noscript>` in `<head>`.

---

### Icons

Lucide-style. Outlined only. Stroke weight: 1–1.5px. Sizes: 16/20/22/24px. Inline SVG only — no icon library imported.

---

## Route → Component Map

| Route | Page file | Status |
|---|---|---|
| `/` | `src/pages/index.astro` | Complete |
| `/about` | `src/pages/about.astro` | Complete |
| `/projects` | `src/pages/projects/index.astro` | Complete — 1 project (Three Decades) |
| `/projects/[slug]` | `src/pages/projects/[slug].astro` | Complete — 1 slug rendered |
| `/blog` | `src/pages/blog/index.astro` | Complete |
| `/blog/[slug]` | `src/pages/blog/[slug].astro` | Complete — 2 posts |
| `/blog/tags/[tag]` | `src/pages/blog/tags/[tag].astro` | Complete |
| `/privacy` | `src/pages/privacy.astro` | Complete |
| `/terms` | `src/pages/terms.astro` | Complete |
| `/404` | `src/pages/404.astro` | Complete — served by Astro |
| `/403` | `src/pages/403.astro` | Complete — configure host to serve on 403 |
| `/500` | `src/pages/500.astro` | Complete — configure host to serve on 500 |

### Components

| Component | Type | Role |
|---|---|---|
| `MainNav.tsx` | React | Scroll-state header, desktop nav, mobile drawer |
| `ContactForm.tsx` | React | Controlled form with loading/success/error states |
| `Hero.astro` | Astro | Homepage hero — typographic + project still |
| `Footer.astro` | Astro | Typographic footer with obfuscated email |
| `SEOHead.astro` | Astro | Meta, OG, Twitter cards |
| `JsonLd.astro` | Astro | Injects structured data from `lib/jsonld.ts` |
| `ObfuscatedEmail.astro` | Astro | Harvesting-resistant mailto (assembled by inline JS) |
| `ScrollReveal.astro` | Astro | IntersectionObserver stagger wrapper |
| `SectionHeading.astro` | Astro | `h2` (configurable to h1/h3) with balance wrapping |
| `PostCard.astro` | Astro | Blog post ledger row (h2 inside — correct hierarchy) |
| `SkipLink.astro` | Astro | Keyboard skip-to-main-content |

---

## Data Files

All content is JSON or MDX — no database, no CMS.

| File | Controls |
|---|---|
| `src/data/profile.json` | Name, role, tagline, bio, availability, social links |
| `src/data/projects.json` | Project list (slug, title, desc, tags, URLs, image) |
| `src/data/experience.json` | Work history (title, org, location, period, summary) |
| `src/data/skills.json` | Skill categories (not rendered yet — available for future use) |
| `src/data/education.json` | Education entries (not rendered — available) |
| `src/content/blog/*.mdx` | Blog posts (frontmatter: title, description, pubDate, tags) |
| `public/resume.txt` | Downloadable plain-text resume |
| `public/projects/*.jpg` | Project images (Picsum placeholders — swap with real screenshots) |
| `src/site.config.ts` | Site-wide title, description, URL, email, locale |

---

## Decisions Log

| Decision | Rationale |
|---|---|
| Archivo Variable (not Inter) | Inter banned by methodology; Archivo has the technical-editorial register without being Vercel-generic |
| OKLCH hue 210 throughout | Cool blue-teal brand, perceptually uniform neutrals, all derived from the single hue |
| `--text-3` at L=0.62 (not 0.55) | Phase 7 Playwright/axe audit caught 4.16:1 failure — raised to ≥5.17:1 across all surfaces |
| Ledger pattern (not card grid) | Projects and experience as hairline-row ledgers — anti-card-chrome per methodology |
| One light invert section | Approach section on homepage — required contrast break on an all-dark site |
| Title: "Forward Deployed AI Engineer" | User-directed — distinctive positioning, signals client-facing accountability |
| Projects cut to 1 | ai-enhanced-calculator and cultural-ai removed — "Forward Deployed AI Engineer" title requires strong evidence; thin projects weaken the claim |
| ResponderView absent | User decision — product to be monetized separately as its own landing page; not part of the portfolio |
| Metric-matched fallback @font-face | CLS mitigation — Arial tuned to Archivo's metrics so swap is near-zero layout shift |
| `min-width: 0` on `*` | Prevents flex/grid child overflow on long strings — overflow-wrap alone doesn't catch it |

---

## Known Open Items

**Content — highest leverage:**
1. **Add ResponderView when ready.** Not on the portfolio (user decision — monetizing separately). When you add it: it slots in `src/data/projects.json` as the first entry, slug `/projects/responderview`, and becomes the homepage hero project. The ledger handles multiple entries automatically.
2. **Replace Picsum placeholders.** `public/projects/three-decades-of-mobility.jpg` is a placeholder. Swap with a real screenshot of the deployed visualization. Same for any future projects.
3. **Write more blog posts.** Two posts is thin. The Writing section is shown on the homepage — three or more posts signal active thought leadership, which backs the "Forward Deployed" claim.

**Configuration — before launch:**
4. **Set `PUBLIC_WEB3FORMS_KEY` env var.** Without it, the contact form falls back to `mailto:` — functional but not logged. Get a free key at web3forms.com and add it to your hosting environment.
5. **Configure host error routing.** Add to `vercel.json` (or Netlify `_redirects`):
   - Vercel: `"routes": [{"src": "/(.*)", "status": 500, "dest": "/500"}]` (and similar for 403)
   - Netlify: custom 404 is automatic; 500 requires server-side configuration
6. **Update `SITE.url`** in `src/site.config.ts` once the domain is confirmed live (currently `https://emmanuellawal.dev`).

**Future work (not blockers):**
7. **ResponderView landing page.** Separate product site — not this repo. When you build it, reuse the same design tokens (same OKLCH palette, same Archivo Variable, same spacing scale) for brand coherence.
8. **`FormEvent` deprecation hint.** `ContactForm.tsx` line 9 — `React.FormEvent` is deprecated in React 19 types. Replace with `React.SyntheticEvent<HTMLFormElement>` or just `Event` next time you touch that file. Non-breaking.

---

## What's Working — Don't Touch

- **`src/styles/globals.css`** — The entire token system and component library lives here. Every visual decision is a CSS variable or utility class. Do not inline styles on pages.
- **`MainNav.tsx`** — The scroll-state header, drawer scroll-lock, focus trap, and Esc-to-close are all engineered and Playwright-verified. Do not simplify.
- **`ObfuscatedEmail.astro`** — The email is assembled from parts at runtime. Do not replace with a plain `mailto:` href.
- **`ScrollReveal.astro`** — `prefers-reduced-motion` and no-JS are handled. Do not add new reveal logic outside this component.
- **`src/lib/jsonld.ts`** — All structured data is here. Update `jobTitle` if the role ever changes.
- **Font preload in `BaseLayout.astro`** — The `import fontUrl from '...woff2?url'` line is load-critical. Do not remove or move below other assets in `<head>`.

---

## Grep Entry Points

When you need to find something:

```bash
# Update the role/title everywhere
grep -r "Forward Deployed AI Engineer" src/

# Find where availability details are set
grep -r "availab" src/data/

# Find every use of --accent-ink (should ONLY appear on backgrounds)
grep -r "accent-ink" src/

# Find all btn-primary usage
grep -r "btn-primary" src/

# Find all scroll-reveal usage
grep -r "scroll-reveal\|ScrollReveal" src/

# Find every image tag (for placeholder audit)
grep -r "<img" src/

# Find the contact form key reference
grep -r "WEB3FORMS" src/

# Find structured data entry point
grep -r "personJsonLd\|websiteJsonLd" src/

# Check for any Inter font slippage
grep -ri "inter" src/

# Check for any gradient slippage
grep -ri "gradient" src/
```

---

## Audit Artifacts

`audit/` directory contains:
- `audit.mjs` — Playwright harness (screenshots + axe + layout probes). Run with `AUDIT_BASE=http://localhost:4321 node audit/audit.mjs`
- `results.json` — Last run output (JSON)
- `shots/` — 52 screenshots across 10 routes × 5 breakpoints + mobile drawer capture

Final score: **B+ (~88.5)**. Caps at B+ because the portfolio has one project. The score moves to A when ResponderView (or equivalent evidence) is added.
