import { useEffect, useRef, useState, useCallback } from 'react';

const routes = [
  { href: '/projects', label: 'Work' },
  { href: '/blog', label: 'Writing' },
  { href: '/about', label: 'About' },
];

interface MainNavProps {
  currentPath: string;
}

export default function MainNav({ currentPath }: MainNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const isActive = (href: string) => currentPath.startsWith(href);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    const sentinel = document.querySelector('.scroll-sentinel');
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { rootMargin: '0px' }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';
    const drawer = drawerRef.current;
    const focusable = drawer?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])'
    );
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];
    first?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        closeMobile();
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== 'Tab' || !focusable?.length) return;

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    }

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [mobileOpen, closeMobile]);

  return (
    <>
      <header
        className="site-header"
        data-scrolled={scrolled ? 'true' : 'false'}
      >
        <nav
          className="site-header__inner"
          aria-label="Main navigation"
        >
          <a href="/" className="site-header__logo">
            EL
          </a>

          <ul className="site-header__links hidden md:flex">
            {routes.map((route) => (
              <li key={route.href}>
                <a
                  href={route.href}
                  className="site-header__link"
                  aria-current={isActive(route.href) ? 'page' : undefined}
                >
                  {route.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="site-header__actions">
            <a href="/resume.txt" download="Emmanuel-Lawal-Resume.txt" className="btn-primary site-header__cta hidden md:inline-flex">
              Resume
            </a>
            <button
              ref={toggleRef}
              type="button"
              className="site-header__menu-btn md:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {mobileOpen && (
        <div
          id="mobile-menu"
          ref={drawerRef}
          className="mobile-drawer md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <ul className="mobile-drawer__list">
            {routes.map((route) => (
              <li key={route.href}>
                <a
                  href={route.href}
                  className="mobile-drawer__link"
                  aria-current={isActive(route.href) ? 'page' : undefined}
                  onClick={closeMobile}
                >
                  {route.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.txt"
                download="Emmanuel-Lawal-Resume.txt"
                className="btn-primary mobile-drawer__cta"
                onClick={closeMobile}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}

      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 50;
          height: 5rem;
          background: transparent;
          border-bottom: 1px solid transparent;
          transition:
            height 240ms cubic-bezier(0.32, 0.72, 0, 1),
            background-color 240ms cubic-bezier(0.22, 1, 0.36, 1),
            border-color 240ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .site-header[data-scrolled='true'] {
          height: 4rem;
          background: color-mix(in oklab, var(--bg) 78%, transparent);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom-color: var(--hairline);
        }

        .site-header__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: min(100% - 2rem, 80rem);
          height: 100%;
          margin-inline: auto;
        }

        .site-header__logo {
          display: inline-flex;
          align-items: center;
          min-height: 2.75rem;
          font-size: 1.125rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: var(--text);
          text-decoration: none;
        }

        .site-header__links {
          align-items: center;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .site-header__link {
          display: inline-flex;
          align-items: center;
          min-height: 2.75rem;
          font-size: 0.9375rem;
          font-weight: 500;
          color: var(--text-2);
          text-decoration: none;
          transition: color 180ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .site-header__link:hover,
        .site-header__link[aria-current='page'] {
          color: var(--accent-on-dark);
        }

        .site-header__actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .site-header__cta {
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        }

        .site-header__menu-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 2.75rem;
          min-height: 2.75rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--hairline-strong);
          background: var(--surface);
          color: var(--text);
        }

        .mobile-drawer {
          position: fixed;
          inset: 4rem 0 0 0;
          z-index: 49;
          background: color-mix(in oklab, var(--bg) 96%, transparent);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-top: 1px solid var(--hairline);
          padding: 1rem;
        }

        .mobile-drawer__list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .mobile-drawer__link {
          display: block;
          padding: 0.875rem 1rem;
          border-radius: var(--radius-sm);
          font-size: 1rem;
          font-weight: 500;
          color: var(--text);
          text-decoration: none;
        }

        .mobile-drawer__link:hover {
          background: var(--accent-tint);
        }

        .mobile-drawer__cta {
          margin-top: 0.5rem;
          width: 100%;
        }

        @media (prefers-reduced-motion: reduce) {
          .site-header {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
