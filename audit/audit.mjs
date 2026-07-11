import { chromium } from 'playwright';
import { AxeBuilder } from '@axe-core/playwright';
import { mkdirSync, writeFileSync } from 'node:fs';

const BASE = process.env.AUDIT_BASE ?? 'http://localhost:4323';
const OUT = new URL('./shots/', import.meta.url).pathname;
mkdirSync(OUT, { recursive: true });

const ROUTES = [
  { path: '/', name: 'home' },
  { path: '/about', name: 'about' },
  { path: '/projects', name: 'projects' },
  { path: '/projects/three-decades-of-mobility', name: 'project-detail' },
  { path: '/blog', name: 'blog' },
  { path: '/blog/accessible-dark-mode', name: 'blog-post' },
  { path: '/blog/tags/css', name: 'blog-tag' },
  { path: '/privacy', name: 'privacy' },
  { path: '/terms', name: 'terms' },
  { path: '/this-route-does-not-exist', name: '404' },
];

const BREAKPOINTS = [375, 768, 1024, 1280, 1536];

const results = {
  axe: {},
  horizontalScroll: {},
  headings: {},
  images: {},
  skipLink: {},
  focusRing: {},
  touchTargets: {},
  mobileDrawer: {},
};

const browser = await chromium.launch();

// ---- Screenshots + layout checks at every breakpoint ----
for (const bp of BREAKPOINTS) {
  const ctx = await browser.newContext({ viewport: { width: bp, height: 900 }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  for (const route of ROUTES) {
    const resp = await page.goto(BASE + route.path, { waitUntil: 'networkidle' });
    // scroll through the page to trigger IntersectionObserver reveals
    await page.evaluate(async () => {
      const step = window.innerHeight * 0.8;
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 120));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(400); // let reveal animations settle
    await page.screenshot({ path: `${OUT}${route.name}-${bp}.png`, fullPage: true });

    // horizontal scroll check
    const overflow = await page.evaluate(() => ({
      scrollW: document.documentElement.scrollWidth,
      clientW: document.documentElement.clientWidth,
    }));
    const key = `${route.name}@${bp}`;
    results.horizontalScroll[key] = {
      overflows: overflow.scrollW > overflow.clientW + 1,
      scrollW: overflow.scrollW,
      clientW: overflow.clientW,
      status: resp?.status(),
    };
  }
  await ctx.close();
}

// ---- Deep checks at desktop (1280) ----
{
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await ctx.newPage();
  for (const route of ROUTES) {
    await page.goto(BASE + route.path, { waitUntil: 'networkidle' });
    await page.waitForTimeout(300);
    const name = route.name;

    // axe accessibility (WCAG 2.0/2.1 A + AA)
    try {
      const axe = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();
      results.axe[name] = axe.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        help: v.help,
        nodes: v.nodes.length,
        sample: v.nodes[0]?.target?.join(' '),
      }));
    } catch (e) {
      results.axe[name] = [{ id: 'axe-error', help: String(e) }];
    }

    // heading hierarchy
    results.headings[name] = await page.evaluate(() => {
      const hs = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')];
      const levels = hs.map((h) => Number(h.tagName[1]));
      let skipped = false;
      for (let i = 1; i < levels.length; i++) {
        if (levels[i] - levels[i - 1] > 1) skipped = true;
      }
      const h1Count = levels.filter((l) => l === 1).length;
      return { count: hs.length, h1Count, skipped, sequence: levels };
    });

    // images missing alt
    results.images[name] = await page.evaluate(() => {
      const imgs = [...document.querySelectorAll('img')];
      return {
        total: imgs.length,
        missingAlt: imgs.filter((i) => !i.hasAttribute('alt')).map((i) => i.src),
        emptyAlt: imgs.filter((i) => i.getAttribute('alt') === '').map((i) => i.src),
        noDimensions: imgs.filter((i) => !i.getAttribute('width') || !i.getAttribute('height')).length,
      };
    });

    // skip link present + hidden until focus
    results.skipLink[name] = await page.evaluate(() => {
      const link = document.querySelector('a[href="#main-content"], a.skip-link');
      if (!link) return { present: false };
      const r = link.getBoundingClientRect();
      return { present: true, offscreenByDefault: r.top < 0 || r.left < 0 || r.width === 0 };
    });
  }

  // focus ring: tab to first interactive on home, check outline
  await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  await page.keyboard.press('Tab');
  results.focusRing.home = await page.evaluate(() => {
    const el = document.activeElement;
    const s = getComputedStyle(el);
    return {
      tag: el.tagName,
      text: el.textContent?.trim().slice(0, 30),
      outlineWidth: s.outlineWidth,
      outlineStyle: s.outlineStyle,
      boxShadow: s.boxShadow.slice(0, 60),
    };
  });

  // touch targets in nav (desktop nav links)
  results.touchTargets.nav = await page.evaluate(() => {
    const links = [...document.querySelectorAll('header a, header button')];
    return links.map((l) => {
      const r = l.getBoundingClientRect();
      return { text: l.textContent?.trim().slice(0, 20), w: Math.round(r.width), h: Math.round(r.height), tooSmall: r.height < 44 && r.width < 44 };
    });
  });

  await ctx.close();
}

// ---- Mobile drawer behavior at 375 ----
{
  const ctx = await browser.newContext({ viewport: { width: 375, height: 812 } });
  const page = await ctx.newPage();
  await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(300);

  const toggle = page.locator('header button').first();
  const hasToggle = await toggle.count();
  const drawer = { hasToggle: hasToggle > 0 };

  if (hasToggle) {
    await toggle.click();
    await page.waitForTimeout(400);
    drawer.bodyScrollLocked = await page.evaluate(() => {
      const b = getComputedStyle(document.body);
      const h = getComputedStyle(document.documentElement);
      return b.overflow === 'hidden' || h.overflow === 'hidden' || b.position === 'fixed';
    });
    drawer.focusMovedIntoDrawer = await page.evaluate(() => {
      const el = document.activeElement;
      return el ? el.tagName + ':' + (el.textContent?.trim().slice(0, 20) || '') : 'none';
    });
    await page.screenshot({ path: `${OUT}drawer-open-375.png` });
    // Esc closes
    await page.keyboard.press('Escape');
    await page.waitForTimeout(400);
    drawer.escClosed = await page.evaluate(() => {
      const b = getComputedStyle(document.body);
      return b.overflow !== 'hidden' && b.position !== 'fixed';
    });
  }
  results.mobileDrawer = drawer;
  await ctx.close();
}

// ---- prefers-reduced-motion honored ----
{
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, reducedMotion: 'reduce' });
  const page = await ctx.newPage();
  await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(200);
  results.reducedMotion = await page.evaluate(() => {
    // any element with a long transition-duration while reduce is on is suspicious
    const els = [...document.querySelectorAll('*')].slice(0, 4000);
    let longTransitions = 0;
    for (const el of els) {
      const d = getComputedStyle(el).transitionDuration;
      if (d && parseFloat(d) > 0.35) longTransitions++;
    }
    return { longTransitionCount: longTransitions };
  });
  await ctx.close();
}

await browser.close();

writeFileSync(new URL('./results.json', import.meta.url), JSON.stringify(results, null, 2));

// ---- Console summary ----
console.log('\n===== AXE VIOLATIONS =====');
for (const [name, v] of Object.entries(results.axe)) {
  if (!v.length) { console.log(`  ${name}: clean`); continue; }
  console.log(`  ${name}:`);
  for (const x of v) console.log(`    [${x.impact}] ${x.id} (${x.nodes}x) — ${x.help} :: ${x.sample}`);
}

console.log('\n===== HORIZONTAL SCROLL =====');
for (const [k, v] of Object.entries(results.horizontalScroll)) {
  if (v.overflows) console.log(`  OVERFLOW ${k}: scrollW=${v.scrollW} clientW=${v.clientW}`);
}
console.log('  (only overflows listed; none above = all clean)');

console.log('\n===== HEADINGS =====');
for (const [k, v] of Object.entries(results.headings)) {
  const flag = v.skipped ? ' SKIPPED-LEVEL' : '';
  const h1 = v.h1Count !== 1 ? ` H1x${v.h1Count}` : '';
  console.log(`  ${k}: ${v.count} headings${flag}${h1} [${v.sequence.join(',')}]`);
}

console.log('\n===== IMAGES =====');
for (const [k, v] of Object.entries(results.images)) {
  console.log(`  ${k}: total=${v.total} missingAlt=${v.missingAlt.length} emptyAlt=${v.emptyAlt.length} noDims=${v.noDimensions}`);
}

console.log('\n===== SKIP LINK =====');
for (const [k, v] of Object.entries(results.skipLink)) {
  console.log(`  ${k}: ${JSON.stringify(v)}`);
}

console.log('\n===== FOCUS RING (first tab, home) =====');
console.log('  ' + JSON.stringify(results.focusRing.home));

console.log('\n===== NAV TOUCH TARGETS =====');
for (const t of results.touchTargets.nav) {
  console.log(`  ${t.tooSmall ? 'SMALL ' : '      '}${t.w}x${t.h}  "${t.text}"`);
}

console.log('\n===== MOBILE DRAWER =====');
console.log('  ' + JSON.stringify(results.mobileDrawer));

console.log('\n===== REDUCED MOTION =====');
console.log('  ' + JSON.stringify(results.reducedMotion));
console.log('\nScreenshots written to audit/shots/');
