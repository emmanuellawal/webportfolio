# DESIGN.md — Emmanuel Lawal Portfolio

> Dark agency portfolio. Work and type carry the page. Color is punctuation, not decoration.

---

## Product Context

| | |
|---|---|
| **Product** | Personal site to land freelance and full-time work |
| **Audience** | Recruiters (skim) + clients inquiring for project collab (deeper read) |
| **Register** | Brand — design is the product |
| **Memorable filter** | “I would never have expected him to utilize AI with how detail-oriented and original it was.” |
| **Temperature** | Bold / High-Contrast / Technical |
| **North stars** | Pentagram · Studio Sutherl& · Mast |
| **Anti** | Default designer template · generic · vibecoder · subpar coder resume-site |
| **Constraints** | Strip all student/college/NJIT framing. Resume stays. Dark + chromatic brand stays. Astro + JSON/MDX content model stays. |

---

## Aesthetic Direction

**Label:** Chromatic gallery on near-black  
**Decoration level:** Low — hairlines, type, project imagery. No glow, no mesh, no particles.  
**Mood:** A hiring manager opens the site on a large monitor in a bright office; the page is dark and quiet until a project still and one cyan accent prove the work is real. Confidence without neon.

**Anti-references (visual):** Inter + purple glow · equal project cards · 4-col counters · floating pill nav · cream editorial · Vercel clone · WebGL wallpaper

---

## Scene Sentence

A recruiter at a standing desk in a sunlit open office, 11am, skimming on a 27-inch monitor — they need name, level, and proof in five seconds; a client later scrolls the same dark page at night looking for craft signals that AI did not author the taste.

**Forced decisions from scene:**
- Theme → **dark-first** (night client + high-contrast brand; light band for office-skim contrast)
- Density → **spacious agency**, not dense SaaS dashboard
- Type → **large display sans**, compressed tracking, no serif
- Color → near-black canvas; cyan as the one interactive accent; violet/orange as rare Ableton-style signal tags only
- Imagery → real project stills / UI captures mandatory; no gradient blobs

---

## Imagery Decision

**Category: Photography mandatory** (agency / portfolio)

| Section | Treatment | What it shows |
|---------|-----------|---------------|
| Hero | Full-bleed project still OR typography-led with one dominant still below fold | Real shipped UI / product surface — not abstract |
| Selected work | Project row thumbnails (asymmetric or ledger + image) | Distinct product screens per case |
| Case study / project detail | Inline editorial + CSS mockup where UI is the artifact | Honest screenshots; CSS mockup only as secondary |
| About / proof band | Optional single editorial photo (workspace or portrait) | Human presence without stock “laptop smile” |

**Not allowed:** CSS gradient rectangles as hero stand-ins. Empty “mock browser” with traffic-light dots.

Placeholder URL pattern (Phase 4 will lock concrete seeds):
`https://picsum.photos/seed/[descriptive-kebab]/W/H`

---

## Font System

**Rule:** One sans family. No Inter. No serif. No italics. Mono only for ≤14px data atoms (commit hashes, version tags) if a project row needs them — never headings/eyebrows/body.

### Candidates (eliminated → pick)

| Candidate | Fit | Cut reason |
|-----------|-----|------------|
| Inter | Legible | **Banned default** — current site; fingerprint |
| Geist | Technical | Too Vercel; fights “not another SaaS” |
| Space Grotesk | Geometric bold | Overused on AI portfolios |
| Plus Jakarta Sans | Friendly | Too soft for Bold/High-Contrast |
| **Archivo** | Condensed grotesk, slab-like display | **SELECTED** |

**Choice: Archivo** — compressed display slabs (Pentagram energy), technical without Geist cosplay, strong at large sizes with tight tracking.

**Weights:** 400 body · 500 labels/nav · 600 h2/h3 · 700 h1  
**No** 500+600 on the same role. No variable-axis hover weight tricks.

### Type scale (derived)

- **Base body:** 17px  
- **Ratio:** 1.333 (perfect fourth — marketing/agency)  
- **Ladder** (approx): 17 → 23 → 30 → 40 → 53 → **71 (H1)**  
- **Fluid:** `clamp()` — H1 ~40px mobile → ~71px desktop; body 17px  
- **Display line-height:** 1.02–1.08 on H1/H2  
- **Body line-height:** 1.65  
- **Tracking:** −0.02em on ≥40px; −0.01em on headings; 0 on body  
- **Measure:** 65–72ch max on prose  

### Craft layer

- `text-wrap: balance` on headings  
- `text-wrap: pretty` on prose only  
- `font-variant-numeric: tabular-nums` on any aligned figures (experience years, stats if any)  
- Ligatures default-on  
- No italics, no decorative `ssXX`, no animated weight  

### Font loading

- Self-host subset variable Archivo `woff2`  
- Preload critical headline face  
- `font-display: swap`  
- Metric-matched fallback (`size-adjust` / ascent-override) to kill CLS  

---

## Color System

**Brand hue H ≈ 210** (cyan lineage from existing `--primary: 199 89% 48%`).

Dark-engineered per `reference/dark-mode.md`. Not a palette flip.

### Neutrals (OKLCH, hue 210)

| Token | Value | Role |
|-------|-------|------|
| `--bg` | `oklch(0.13 0.012 210)` | Page canvas — near-black, not `#000` |
| `--bg-2` | `oklch(0.16 0.012 210)` | Section alt / subtle band |
| `--surface` | `oklch(0.18 0.014 210)` | Raised panels (+L elevation) |
| `--raised` | `oklch(0.22 0.014 210)` | Hover / popover |
| `--bg-invert` | `oklch(0.97 0.008 210)` | **Required light band** |
| `--text` | `oklch(0.96 0.010 210)` | Primary ink on dark |
| `--text-2` | `oklch(0.72 0.012 210)` | Secondary |
| `--text-3` | `oklch(0.55 0.010 210)` | Tertiary / meta |
| `--text-invert` | `oklch(0.16 0.014 210)` | Ink on light band |

### Hairlines (white-alpha on dark)

| Token | Value |
|-------|-------|
| `--hairline` | `rgba(255,255,255,0.06)` |
| `--hairline-strong` | `rgba(255,255,255,0.10)` |
| `--hairline-bold` | `rgba(255,255,255,0.16)` |
| `--hairline-invert` | `rgba(15,25,40,0.10)` | on light band |

### Accent (one interactive accent)

Cyan lineage — chroma **dropped**, lightness **raised** for dark survival. No glow.

| Token | Value | Role |
|-------|-------|------|
| `--accent` | `oklch(0.72 0.12 210)` | Links, icons, strokes, tints (4–8% bg) |
| `--accent-ink` | `oklch(0.46 0.12 210)` | **Primary button fill only** (near-white text) — background-only token |
| `--accent-hover` | `oklch(0.42 0.12 210)` | ≤ rest L — never lighter |
| `--accent-pressed` | `oklch(0.38 0.11 210)` | Active |
| `--accent-on-dark` | `oklch(0.78 0.10 210)` | On near-black when extra lift needed |
| `--accent-focus-ring` | `oklch(0.97 0.008 210)` | Focus ring on `--accent-ink` fills (paper, not same-hue) |
| `--accent-tint` | `oklch(0.72 0.12 210 / 0.08)` | One tinted section wash |

**`--accent-ink` is never** `color` / `fill` / `stroke` / `border-color`.

### Signal colors (brand constraint — not second accents)

Existing violet + orange retained as **Ableton-style category punctuation only** (project tags, rare status). Max one signal chip visible per project row. Never on buttons, never as section washes, never glowing.

| Token | Value | Use |
|-------|-------|-----|
| `--signal-violet` | `oklch(0.70 0.14 310)` | Rare tag fill/text on dark |
| `--signal-orange` | `oklch(0.72 0.14 45)` | Rare tag fill/text on dark |

### Semantic (quiet)

Success / warning / error derived in OKLCH; used only in form states.

### Hard rules

- No literal `#000` / `#fff` as tokens  
- No gradients unless explicitly requested later  
- No glow / bloom on accent  
- Elevation = lighter surface, not heavy shadow  
- Accent must read as cyan at arm’s length vs ink  

---

## Spacing

- **Base unit:** 8px  
- **Rhythm:** Spacious (agency)  
- **Scale:** 8 / 16 / 24 / 40 / 64 / 96 / 144 / 200  
- **Section padding:** 96–160px desktop; 64–96px mobile  
- **Content max-width:** 1280px (work grid may go 1400px)  
- **Gutter:** 24px desktop / 16px mobile  

---

## Layout

- Grid: 12-col conceptual; work ledger full-bleed within max-width  
- Text measure: 65–72ch  
- Hero: brand name as hero-level signal (not nav-only)  
- At least one full light-inverted section  

---

## Border Radius (4–32)

| Token | px | Use |
|-------|-----|-----|
| `xs` | 4 | Inputs |
| `sm` | 8 | Buttons, small containers |
| `md` | 12 | Image frames if needed |
| `lg` | 16 | Max for any rare card (≤2 sections) |
| `xl` / `2xl` | 24 / 32 | Avoid on this site — prefer sharp/hairline agency feel |
| `pill` | 9999 | Avoid (eyebrow/pill ban) |

**Project decision:** Prefer `xs`/`sm` and hairline ledgers over soft large radii. Buttons = `sm` (8px), not pill.

---

## Icon System

- Outlined only  
- Stroke 0.8–1px  
- Sizes: 16 / 20 / 24  
- One family (Lucide or equivalent outline set)  
- Sparse — nav/social only; no icon-feature grids  

---

## Motion

| Type | Timing | Curve |
|------|--------|-------|
| Hover | 150–200ms | `cubic-bezier(0.22, 1, 0.36, 1)` |
| Reveal | 400–600ms | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Entrance | 600–800ms | same |

- GPU-only: `transform`, `opacity`  
- `prefers-reduced-motion`: all off or instant  
- **Minimum 2 animation types;** at least one domain-specific or typographic (e.g. accent underline draw on brand name, or project-row hairline expand) — not only fade-up  

---

## Section Rhythm (homepage — directional)

| # | Section | BG | Layout idea | Containment |
|---|---------|-----|-------------|-------------|
| 1 | Hero | `--bg` | Typographic brand hero + one still | Full-bleed photo / type |
| 2 | Selected work | `--bg-2` | Ledger rows + thumb | Ledger (not cards) |
| 3 | Approach / proof | `--bg-invert` | Editorial rules / short prose | Prose + rules |
| 4 | Experience | `--bg` | Timeline or definition list | Ledger / dl |
| 5 | Writing (if kept) | `--bg-2` | Horizontal strip or list | Editorial list |
| 6 | Contact | `--bg` + tint optional | Form ≤4 fields | Prose + form |
| 7 | Footer | `--bg` | Typographic | Typographic footer |

**Rules:** No two consecutive same BG. ≥3 layout patterns. Cards ≤2 sections total. Eyebrows ≤1 (prefer 0). Bullets ≤5 page-wide.

**Bento:** Default **zero**. Not justified for this brief.

**Nav:** Scroll-state header (transparent over hero → hairline + backdrop-blur + modest shrink). Max 5 links. Mobile drawer: scroll-lock + focus trap + Esc.  
**Footer:** Typographic (agency) — name + real utilities (Resume, GitHub, LinkedIn, Email). No fake sitemap columns.

---

## UX Writing

Follow `reference/ux-writing.md`.

- Headlines ≤60 chars / 6–10 words  
- Subheads ≤120 chars  
- CTAs specific: e.g. “View selected work”, “Email me”, “Download resume” — never “Learn More” / “Get Started”  
- **Banned:** student, college, NJIT, undergrad, and all UX-writing banned words  
- No section numbers (`01.`, `02.`)  
- Tone: specific, confident, concrete — detail and originality first; AI mentioned only if it serves the memorable filter  

**Hero direction (draft — finalize in Phase 4):**  
Brand: **Emmanuel Lawal**  
Line: craft-first positioning in ≤15 words  
CTA pair: work + contact/resume  

---

## Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-07-10 | Dark-first + required light band | Scene + brand; dark-mode rule 4 contrast |
| 2026-07-10 | Archivo single-family | Bold/technical; not Inter/Geist; compressed display |
| 2026-07-10 | Cyan as sole interactive accent | Existing brand hue; AA via `--accent-ink` |
| 2026-07-10 | Violet/orange as signal-only | Keep colorful brand without multi-accent chaos |
| 2026-07-10 | Work as ledger, not card grid | Agency north stars; anti-template |
| 2026-07-10 | Photography mandatory (project stills) | Portfolio category |
| 2026-07-10 | No bento, no WebGL default | Gates closed; recruiter usability |
| 2026-07-10 | Strip student framing | Explicit constraint |
| 2026-07-10 | Typographic footer | Agency IA is thin |

---

## Distinctiveness (pre-build)

Three decisions that would not transfer to a SaaS or hospitality brief:

1. **Chromatic signal tags on a dark agency ledger** — Ableton punctuation + Pentagram structure  
2. **Archivo compressed display slabs** at ~71px with −0.02em tracking as the brand hero  
3. **Memorable filter as copy law** — every line must read detail-first; AI never the loudest claim  

---

*Phase 3 output. Awaiting approval before Phase 4 (Screen Specification).*
