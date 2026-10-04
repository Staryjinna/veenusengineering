import Link from 'next/link';
import { contact, hours } from '@/data/contact';
import { services } from '@/data/services';
import { ClockIcon, InstagramIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon, YoutubeIcon } from './Icons';
import { waLink } from '@/lib/whatsapp';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="blueprint on-dark mt-0 border-t-4 border-weld pb-24 pt-14 md:pb-10">
      <div className="container-x grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <Logo size="lg" />
          <p className="mt-4 max-w-xs text-steel-300">
            SS &amp; MS gates, railings, grills, rolling shutters and roofing. Designed, fabricated and installed in Vaniyambadi and Tirupathur district.
          </p>
          <div className="mt-5 flex gap-3">
            <a href={contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Veenus Engineering on Instagram" className="grid h-11 w-11 place-items-center border border-white/25 text-white hover:border-weld hover:text-weld"><InstagramIcon /></a>
            <a href={contact.youtube} target="_blank" rel="noopener noreferrer" aria-label="Veenus Engineering on YouTube" className="grid h-11 w-11 place-items-center border border-white/25 text-white hover:border-weld hover:text-weld"><YoutubeIcon /></a>
          </div>
        </div>

        <nav aria-label="Services">
          <h2 className="text-xl text-white">Services</h2>
          <ul className="mt-4 space-y-2">
            {services.map((s) => (
              <li key={s.slug}><Link href={`/services/${s.slug}/`} className="hover:text-weld">{s.name}</Link></li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <h2 className="text-xl text-white">Company</h2>
          <ul className="mt-4 space-y-2">
            <li><Link href="/projects/" className="hover:text-weld">Projects</Link></li>
            <li><Link href="/about/" className="hover:text-weld">About us</Link></li>
            <li><Link href="/contact/" className="hover:text-weld">Get a quote</Link></li>
            <li><Link href="/terms/" className="hover:text-weld">Terms &amp; Conditions</Link></li>
            <li><Link href="/refund-policy/" className="hover:text-weld">Return &amp; Refund Policy</Link></li>
          </ul>
        </nav>

        <div>
          <h2 className="text-xl text-white">Visit or call</h2>
          <address className="mt-4 space-y-3 not-italic">
            <p className="flex gap-3"><PinIcon className="mt-1 shrink-0 text-weld" /><span>{contact.addressLines.join(', ')}</span></p>
            <p className="flex gap-3"><PhoneIcon className="mt-1 shrink-0 text-weld" /><a href={`tel:${contact.phoneTel}`} className="hover:text-weld">{contact.phoneDisplay}</a></p>
            <p className="flex gap-3"><WhatsAppIcon className="mt-1 shrink-0 text-weld" /><a href={waLink()} className="hover:text-weld" target="_blank" rel="noopener noreferrer">WhatsApp us</a></p>
            <p className="flex gap-3"><MailIcon className="mt-1 shrink-0 text-weld" /><a href={`mailto:${contact.email}`} className="break-all hover:text-weld">{contact.email}</a></p>
            <div className="flex gap-3"><ClockIcon className="mt-1 shrink-0 text-weld" />
              <dl>{hours.map((h) => (<div key={h.label} className="flex gap-2"><dt className="min-w-[7.5rem] text-steel-400">{h.label}</dt><dd>{h.time}</dd></div>))}</dl>
            </div>
          </address>
        </div>
      </div>
      <div className="container-x mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-steel-400 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Veenus Engineering. All rights reserved.</p>
        <p>Vaniyambadi, Tirupathur district, Tamil Nadu</p>
      </div>
    </footer>
  );
}
