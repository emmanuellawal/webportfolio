# SCREEN-SPEC.md — Emmanuel Lawal Portfolio

> Phase 4. Derived from DESIGN.md. Not a template section list.

---

## Brief → page job (before sections)

This homepage must do three jobs in order: (1) plant the name as a brand-level signal so a recruiter knows who they’re looking at in under two seconds; (2) prove craft through selected work shown large and specific — not a grid of equal cards; (3) make contact and resume frictionless for a client who wants to hire. Everything else (skills icon grids, vanity counters, testimonials with stock names, student framing) is noise. The page should feel like a dark agency gallery with cyan punctuation — detail-first, AI never the loudest claim.

---

## 1. Route and purpose

| Route | Purpose | Priority |
|-------|---------|----------|
| `/` | Convert skim → work → contact/resume | **Primary build** |
| `/projects` | Full work index (ledger) | Restyle to match |
| `/projects/[slug]` | Case study: problem → decisions → outcome | Restyle to match |
| `/about` | Short bio (no student), approach, availability | Restyle; strip NJIT |
| `/blog`, `/blog/[slug]` | Writing — keep, quieter chrome | Restyle shell |
| Resume (existing PDF/link) | Persistent utility in nav + footer | Keep |
| `/privacy`, `/terms`, `/404` | Utility | Token pass only |

---

## 2. Hero pattern

**Selected: Pattern 10 — Minimal / Typographic**, with a **mandatory full-bleed project still** as the dominant visual plane completing the first composition (agency table: Pattern 10 primary; photography mandatory for portfolio).

Not Pattern 7 (Dark Mode Tech glow). Not Pattern 1 centered SaaS. Not WebGL.

**Composition (first viewport):**
1. Brand: **Emmanuel Lawal** (hero-level type, Archivo 700, ~71px)
2. One headline (role + craft filter), ≤60 chars
3. One supporting sentence, ≤120 chars
4. CTA group: primary **View selected work** · secondary **Email me** (or Download resume as tertiary text link)
5. One dominant edge-to-edge project still (no inset card, no floating badge overlays)

**Copy draft (finalize in build; no banned words):**

- Headline: `Full stack work with deliberate detail`
- Sub: `Interfaces and systems built to feel intentional — including where AI is involved.`
- Availability (optional, muted, not a pill): `Available for select projects · New Jersey`

---

## 3. Imagery audit gate

Photography mandatory → hero + ≥2 in-page. Concrete URLs:

```
Imagery URLs:
- Hero: <img src="https://picsum.photos/seed/emmanuel-portfolio-hero-ui-desk-cinematic/2400/1000" alt="Full-bleed still of a shipped product interface on a dark display — replace with Emmanuel’s strongest project screenshot" width="2400" height="1000">
- Selected work / Three Decades: <img src="https://picsum.photos/seed/mobility-dataviz-dashboard-dark-ui/1500/900" alt="Data visualization dashboard showing mobility and cost-of-living trends over three decades" width="1500" height="900">
- Selected work / AI Calculator: <img src="https://picsum.photos/seed/mobile-calculator-nlp-app-screen/800/1000" alt="Mobile calculator app screen with natural-language calculation input" width="800" height="1000">
- Selected work / Cultural AI: <img src="https://picsum.photos/seed/cultural-ai-recommendation-app-ui/1500/900" alt="Cultural recommendation app interface with personalized insight cards" width="1500" height="900">
- Approach band (optional editorial): <img src="https://picsum.photos/seed/developer-workspace-evening-monitor-only/1600/900" alt="Quiet workspace with a single monitor showing code and design side by side — no stock smile" width="1600" height="900">
```

Also use existing local assets where they exist (`/projects/*.jpg`, `/pic/1image.jpg`) — Picsum seeds are placeholders until real stills are swapped. Prefer real project screenshots over Picsum at ship.

**Hero LCP:** hero `<img>` with `fetchpriority="high"`; all others `loading="lazy"`.

---

## 4. Full-page section map (`/`)

| # | Section | Layout pattern | Background | Content | Containment | Visual |
|---|---------|----------------|------------|---------|-------------|--------|
| 0 | Header | Scroll-state nav | transparent → blur | Logo wordmark, Work, Writing, About, Resume CTA | — | Type |
| 1 | Hero | Pattern 10 + full-bleed still | `--bg` | Brand, headline, sub, CTAs, hero image | Full-bleed photo + type | Photo |
| 2 | Selected work | Ledger rows (Pattern 1 non-card) | `--bg-2` | 3 featured projects: title, one-line outcome, year/stack signal, thumb, link | **Ledger** + inline thumb | Photo |
| 3 | Approach | Editorial rules (Pattern 3) | `--bg-invert` (light) | 2–3 short blocks: how he works, what “detail” means, AI stance | **Prose + hr rules** | Optional editorial photo |
| 4 | Experience | Numbered timeline vertical OR definition list | `--bg` | Roles as term/period + prose (convert bullets → sentences) | **Ledger / dl** | Type |
| 5 | Writing | Editorial list (not 3 cards) | `--bg-2` | Up to 3 recent posts: title · date · reading time | **Editorial list** | Type |
| 6 | Contact | Compact form + prose | `--bg` + optional `--accent-tint` | ≤4 fields: name, email, message, (optional project type) | Form + prose | — |
| 7 | Footer | Typographic | `--bg` | Oversized name or EL · Resume · GitHub · LinkedIn · Email · legal | **Typographic footer** | Type |

**Removed from current homepage (do not rebuild):**
- Skill icon grid as a section
- 3 equal project cards
- Testimonials block (unless real named quotes exist later — no banned AI names)
- Vanity 4-col stats (15+ / 8 / 4.9)
- “About Me” centered card preview with student bio

**About content** moves to `/about` and a short line in Approach — not a duplicate mid-page bio dump.

---

## 5. Containment variance plan

| Section | Containment |
|---------|-------------|
| Hero | Full-bleed photography + typography |
| Selected work | Ledger (hairline rows) |
| Approach | Editorial rules / prose |
| Experience | Definition list / ledger timeline |
| Writing | Editorial list (no card chrome) |
| Contact | Prose + form (inputs only; no card wrapper) |
| Footer | Typographic (borderless) |

**Card count:** 0 on homepage (under max 2).  
**Distinct patterns:** ≥4 (full-bleed, ledger, editorial rules, dl/timeline, typographic footer).  
**Footer type:** Typographic (agency / thin IA). Real links only — no fabricated sitemap columns. Footer `<li>`s exempt from bullet budget.

---

## 5b. Bullet budget

| Section that usually bullets | Replacement |
|------------------------------|-------------|
| Skills / “what I use” | Omit on home; optional comma prose on `/about` |
| Project features | One outcome sentence in ledger row |
| Experience bullets | Rewrite as 1–2 prose sentences per role |
| Approach “why me” | Editorial rule paragraphs |
| Contact perks | None |

**Page `<li>` / faux-bullet total (content):** **0** on homepage (nav/footer exempt).  
If experience must keep short facts: max **3** total page bullets — prefer zero.

---

## 5c. Pricing pattern

**N/A** — no plans. No pricing section.

---

## 5d. Stat section

**No stats section.** Vanity counters banned for this brand. Credibility = work + resume + writing.  
If one number must appear later: Pattern 6 single hero stat inside Approach prose — not a 4-col strip.

---

## 5e. Product-UI surface gate

**NONE.** Portfolio marketing site — no live product UI kit, no Cmd-K, no PDP, no trust-cert grid.

---

## 5f. WebGL / 3D gate

**NONE.** Recruiter skim + craft signal; no particle/WebGL hero.

---

## 6. Illustration / visual plan

| Section | Medium |
|---------|--------|
| Hero | Real photography / project screenshot |
| Work rows | Real project images (local preferred) |
| Approach | Typography; optional one editorial photo |
| Experience | Typography only |
| Writing | Typography only |
| Contact | Form UI only |
| Project detail pages | Screenshots + optional CSS mockup frame (no browser chrome dots) |

---

## 7. ASCII wireframe (`/`)

```
┌──────────────────────────────────────────────────────────┐
│ EL          Work   Writing   About        [Resume]       │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  EMMANUEL LAWAL                                          │
│  Full stack work with deliberate detail                  │
│  Interfaces and systems built to feel intentional…       │
│  [View selected work]   Email me                         │
│                                                          │
│████████████████ HERO STILL (full-bleed) █████████████████│
├──────────────────────────────────────────────────────────┤
│  Selected work                                    All →  │
│  ─────────────────────────────────────────────────────   │
│  [thumb] Three Decades of Mobility    outcome · →        │
│  ─────────────────────────────────────────────────────   │
│  [thumb] AI-Enhanced Calculator       outcome · →        │
│  ─────────────────────────────────────────────────────   │
│  [thumb] Cultural AI                  outcome · →        │
├──────────────────────────────────────────────────────────┤
│ ░░░░░░░░░░░░░ LIGHT INVERT ░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│  How the work gets made                                  │
│  ── short prose ──                                       │
│  Where AI fits                                           │
│  ── short prose ──                                       │
│  (optional workspace photo)                              │
├──────────────────────────────────────────────────────────┤
│  Experience                                              │
│  Role · Org · Period                                     │
│  One or two sentences. No bullet dump.                   │
│  ─────────────────────────────────────────────────────   │
│  …                                                       │
├──────────────────────────────────────────────────────────┤
│  Writing                                                 │
│  Post title                              date · 6 min    │
│  Post title                              date · 4 min    │
├──────────────────────────────────────────────────────────┤
│  Start a project                                         │
│  Name / Email / Message / [Send message]                 │
├──────────────────────────────────────────────────────────┤
│  EMMANUEL LAWAL                                          │
│  Resume · GitHub · LinkedIn · Email                      │
│  © · Privacy · Terms                                     │
└──────────────────────────────────────────────────────────┘
```

---

## 8. Cognitive load check

| Control | Spec |
|---------|------|
| Nav links | Work, Writing, About (+ logo home) = 3–4 · **Resume** = sole header CTA |
| Form fields | ≤4: Name, Email, Message, optional Subject |
| Buttons | 1 primary + ≤2 secondary per view |
| Skip link | Required |

---

## 9. Interaction state inventory

Every interactive control implements all 8:

1. Default  
2. Hover  
3. Focus-visible (2–3px ring; on `--accent-ink` fills use `--accent-focus-ring` / paper)  
4. Active / pressed  
5. Disabled  
6. Loading (form submit)  
7. Error (form fields)  
8. Success (form confirmation)

**Header:** `data-scrolled` false/true via sentinel + IntersectionObserver; no-JS solid header fallback.  
**Mobile drawer:** open/close, body scroll-lock, focus trap, Esc, return focus to toggle.

---

## 10. Responsive spec

| Breakpoint | Behavior |
|------------|----------|
| 320 | Single column; H1 ~40px; hero still 5:2 crop; ledger stacks (thumb above text); drawer nav |
| 640 | Comfortable type; CTAs wrap cleanly |
| 768 | Ledger: thumb \| title+outcome \| arrow; experience two-col dl |
| 1024 | Full type scale; header links visible; section pad 96px |
| 1280 | Max content 1280–1400; H1 ~71px |
| 1536 | Same system; no stretchy emptiness — measure capped |

Fluid type via `clamp()`. No horizontal scroll. `min-height: 100dvh` on hero composition.

---

## 11. Animation plan

Load `reference/animations.md`. Minimum 2 types; one domain-specific or typographic.

| # | Type | Where | Notes |
|---|------|-------|-------|
| 1 | **Typographic accent underline draw** | Brand name or primary CTA on load/hover | Domain-specific to this craft brand — cyan stroke draws L→R |
| 2 | **Ledger row reveal** | Selected work rows | Staggered opacity + translateY(12–16px), 50ms stagger — not 24px template fade |
| 3 | **Smooth state transitions** | Links, buttons, header condense | 150–200ms custom bezier |

**Not used:** Counter animations, parallax on mobile, glow pulses, equal fade-up on every section.

`prefers-reduced-motion`: underline instant; reveals = opacity only or off.

---

## Secondary screens (parity notes)

### `/projects`
Same ledger pattern as home, all projects. No card grid.

### `/projects/[slug]`
Case study layout: title · outcome · full-bleed still · prose sections (Problem / Decisions / Outcome) separated by editorial rules · links (Live / GitHub). Tags as signal chips (max one hue family visible at a time).

### `/about`
Rewrite bio — **no student/NJIT**. Approach expanded. Interests as comma prose. Link to resume + contact.

### `/blog`
List layout matching Writing section. Post pages keep MDX; shell uses new tokens/type.

### Content data updates (build phase)
- `profile.json`: rewrite tagline/bio; remove student; keep availability/social  
- `experience.json`: bullets → prose sentences  
- Strip student mentions sitewide (grep)

---

## Pre-implementation checklist (Phase 4 complete when)

- [x] Started from brief, not template skeleton  
- [x] Hero pattern named (10 + full-bleed still)  
- [x] Concrete imagery URLs  
- [x] Full section map  
- [x] ≥3 containment patterns; cards ≤2 (0)  
- [x] Bullet budget ≤5 (target 0)  
- [x] Pricing N/A · Stats none · Product-UI none · WebGL none  
- [x] ASCII wireframe  
- [x] Cognitive load · 8 states · 6 breakpoints · animation plan  

---

*Phase 4 output. Awaiting approval before Phase 5 (Implementation).*
