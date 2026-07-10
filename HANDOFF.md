# HANDOFF — Emmanuel Lawal Portfolio

> Looks Expensive phases 1–9 complete. 2026-07-10.

---

## Design system summary

| Axis | Spec |
|------|------|
| **Font** | Archivo variable (latin subset), weights 400–700 via axis. Fallback: `Archivo Fallback` (Arial + size-adjust). Preload: `/fonts/archivo-latin-wght.woff2` |
| **Type** | Base 17px · ratio ~1.333 · H1 `clamp(2.5rem … 4.4375rem)` · `text-wrap: balance` / `pretty` |
| **Theme** | Dark-first OKLCH (hue 210). Required light band: `--bg-invert` |
| **Accent** | `--accent` links/tints · `--accent-ink` button fills only · hover darker · focus ring = paper |
| **Signals** | `--signal-violet` / `--signal-orange` — project tags only |
| **Spacing** | 8-base · section pad `clamp(4rem, 8vw, 6rem)` · shells 80rem / 87.5rem |
| **Radius** | xs 4 · sm 8 · md 12 (prefer sharp/hairline) |
| **Motion** | Brand underline draw · ledger reveal · state transitions · `prefers-reduced-motion` |
| **Icons** | Sparse outline SVGs (nav/social only) |
| **Containment** | Ledger · editorial prose · typographic footer · form (no card chrome on home) |

Tokens live in `src/styles/globals.css`. Font face in `src/styles/fonts.css`.

---

## Route → component map

| Route | Primary components | Parity |
|-------|-------------------|--------|
| `/` | `Hero`, ledger work, approach invert, experience, writing list, `ContactForm` | **Done** |
| `/projects` | Ledger index | **Done** |
| `/projects/[slug]` | Case study (Problem / Outcome / Stack) | **Done** |
| `/about` | Bio, approach, experience, toolkit prose, contact | **Done** — no student framing |
| `/blog` | Writing list / `PostCard` | **Done** |
| `/blog/[slug]` | `PostLayout` | **Done** (shell tokens) |
| `/blog/tags/[tag]` | Tag filter list | **Done** |
| `/resume.txt` | Static file | **Keep** — school history allowed here only |
| `/404` | `ErrorPage` | **Done** |
| `/error/[code]` | `ErrorPage` (400/401/403/429/500) | **Done** — wire host redirects |
| `/privacy`, `/terms` | Utility prose | **Token-pass** — still uses older container class names in places |
| `/llms.txt`, `/rss.xml` | API routes | **Done** |

**Islands:** `MainNav` (`client:idle`), `ContactForm` (`client:visible`).

---

## Decisions log (full)

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-07-10 | Dark-first + light invert band | Scene + dark-mode contrast rule |
| 2026-07-10 | Archivo single-family | Bold/technical; not Inter/Geist |
| 2026-07-10 | Cyan sole interactive accent | Brand hue; AA via `--accent-ink` |
| 2026-07-10 | Violet/orange signal-only | Colorful brand without multi-accent chaos |
| 2026-07-10 | Work as ledger | Agency north stars |
| 2026-07-10 | Real `/projects/*.jpg` only | No Picsum on ship |
| 2026-07-10 | School vibe only in resume | Explicit user constraint |
| 2026-07-10 | Strip dead SkillGrid/cards/testimonials/education data | Phase 6 subtraction |
| 2026-07-10 | `--text-3` → L 0.60 | Phase 7 AA on 14px meta |
| 2026-07-10 | Self-host + preload Archivo variable | Phase 8 font discipline |
| 2026-07-10 | Static `/error/{code}` pages | Host-level error UX stand-ins |

---

## Known open items

1. ~~**Host error routing**~~ — done via `vercel.json` (404 catch-all + `/error/{code}` status routes)
2. ~~**Resume voice**~~ — refreshed; education kept as history
3. **Project screenshots quality** — replace anytime if crops/resolution improve
4. **Experience thinness** — only 2019 roles on the site body; resume now includes ResponderView + featured projects
5. **Privacy/terms** — light restyle leftover (`container` / older prose); low priority
6. **Unused `@fontsource-variable/archivo` in node_modules** — runtime uses `/public/fonts/…`; package kept as source for the copied woff2

---

## What’s working — don’t touch casually

- Token system in `globals.css` (`--accent-ink` background-only rule)
- Scroll-state header + drawer a11y (trap / Esc / scroll-lock)
- Homepage section rhythm (dark → dark-2 → light invert → dark → …)
- Ledger containment for work
- Memorable-filter copy law (detail first; AI second)
- Font preload + fallback pair
- Contact form loading / error / success states

---

## Grep entry points

```bash
# Design tokens
rg -- '--(accent|bg|text|hairline|signal)' src/styles/globals.css

# Accent-ink misuse (must be zero as color/fill/stroke/border)
rg 'color:\s*var\(--accent-ink\)|fill:\s*var\(--accent-ink\)|stroke:\s*var\(--accent-ink\)|border-color:\s*var\(--accent-ink\)' src

# Student / school leakage outside resume
rg -i 'NJIT|student|college|undergrad|GPA|capstone' src public --glob '!public/resume.txt'

# Imagery / project stills
rg 'project\.image|/projects/' src

# Motion / reduced-motion
rg 'prefers-reduced-motion|brand-underline|scroll-reveal' src

# CTAs / banned UX words
rg -i 'get started|learn more|seamless|robust|leverage|exceptional' src
```

---

## Local commands

```bash
npm run dev      # http://localhost:4321
npm run build    # astro check && astro build
npm run preview  # serve dist/
```

---

## Distinctiveness (shipped)

1. Chromatic signal tags on dark agency ledgers  
2. Archivo compressed display hero + cyan underline draw  
3. Copy law: detail-oriented originality first; AI never the loudest claim  

---

*Phase 9 complete. Design pass closed.*
