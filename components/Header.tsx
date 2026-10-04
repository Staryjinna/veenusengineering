import Link from 'next/link';
import { contact } from '@/data/contact';
import { waLink } from '@/lib/whatsapp';
import { PhoneIcon, WhatsAppIcon } from './Icons';
import MobileNav from './MobileNav';
import Logo from './Logo';
import { nav } from './nav';

export default function Header() {
  return (
    <header className="on-dark sticky top-0 z-50 border-b border-white/10 bg-ink">
      <div className="container-x relative flex h-16 items-center gap-3">
        <div className="mr-auto"><Logo /></div>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {nav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="font-display text-lg font-semibold uppercase tracking-wider text-steel-200 hover:text-weld">{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <a href={`tel:${contact.phoneTel}`} className="btn btn-ghost btn-sm" aria-label={`Call ${contact.phoneDisplay}`}>
          <PhoneIcon />
          <span className="hidden xl:inline">{contact.phoneDisplay}</span>
          <span className="hidden sm:inline xl:hidden">Call</span>
        </a>
        <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm" aria-label="Get a free quote on WhatsApp">
          <WhatsAppIcon />
          <span className="hidden sm:inline">Free quote</span>
        </a>
        <MobileNav />
      </div>
    </header>
  );
}
