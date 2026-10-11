import Link from 'next/link';
import Logo from './Logo';
import MobileNav from './MobileNav';
import { CallButton, QuoteButton } from './Actions';
import { nav } from './nav';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-steel-200 bg-white">
      <div className="container-x relative flex h-16 items-center gap-3">
        <div className="mr-auto"><Logo /></div>
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {nav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="font-display text-lg font-semibold uppercase tracking-wider text-steel-700 hover:text-weld-deep">{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <CallButton size="sm" compact />
        <QuoteButton size="sm" label="Free quote" className="max-sm:hidden" />
        <QuoteButton size="sm" label="Quote" className="sm:hidden" />
        <MobileNav />
      </div>
    </header>
  );
}
