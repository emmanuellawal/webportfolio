import { useState } from 'react';

const routes = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/about#contact', label: 'Contact' },
];

interface MainNavProps {
  currentPath: string;
}

export default function MainNav({ currentPath }: MainNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') return currentPath === '/';
    if (href.includes('#')) return currentPath === href.split('#')[0];
    return currentPath.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <nav className="flex items-center justify-between w-full py-4 px-4 md:px-8 max-w-7xl mx-auto" aria-label="Main navigation">
        <a href="/" className="text-xl font-mono font-bold relative group flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 rounded">
          <img src="/celestial-gear.svg" alt="" width={24} height={24} className="object-contain" aria-hidden="true" />
          <span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">Emmanuel</span>
            <span className="text-accent-500">.dev</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {routes.map((route) => (
            <li key={route.href}>
              <a
                href={route.href}
                className="relative text-base font-medium group"
                aria-current={isActive(route.href) ? 'page' : undefined}
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-primary-400">
                  {route.label}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden p-2 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 12h16M4 6h16M4 18h16"/></svg>
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">
          <ul className="flex flex-col gap-1 py-4 px-4 list-none m-0">
            {routes.map((route) => (
              <li key={route.href}>
                <a
                  href={route.href}
                  className="block rounded-lg px-4 py-3 text-base font-medium hover:bg-primary-500/10 hover:text-primary-400 transition-colors"
                  aria-current={isActive(route.href) ? 'page' : undefined}
                  onClick={() => setMobileOpen(false)}
                >
                  {route.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
