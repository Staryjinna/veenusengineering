import Link from 'next/link';
import { business, contact, hours } from '@/data/contact';
import { services } from '@/data/services';
import { hasPhone, hasWhatsApp, waLink } from '@/lib/quote';
import { ClockIcon, InstagramIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon, YoutubeIcon } from './Icons';

export default function Footer() {
  const social = [
    contact.instagram && { href: contact.instagram, label: `${business.name} on Instagram`, icon: <InstagramIcon /> },
    contact.youtube && { href: contact.youtube, label: `${business.name} on YouTube`, icon: <YoutubeIcon /> },
  ].filter(Boolean) as { href: string; label: string; icon: React.ReactNode }[];

  return (
    <footer className="border-t-4 border-weld bg-mist pb-24 pt-14 md:pb-10">
      <div className="container-x grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <Link href="/" aria-label="Velan Industries Steel Works, home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.webp" alt="Velan Industries Steel Works logo" width={800} height={715} loading="lazy" className="h-36 w-auto mix-blend-multiply" />
          </Link>
          <p className="mt-4 max-w-xs text-steel-600">
            Steel works in Chennai. SS &amp; MS gates, railings, grills, rolling shutters and roofing, designed, fabricated and installed.
          </p>
          <p className="mt-3 text-steel-700">Owner: <span className="font-semibold text-ink">{business.owner}</span></p>
          {social.length > 0 && (
            <div className="mt-5 flex gap-3">
              {social.map((s) => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="grid h-11 w-11 place-items-center border border-steel-300 bg-white text-ink hover:border-weld hover:text-weld-deep">{s.icon}</a>
              ))}
            </div>
          )}
        </div>

        <nav aria-label="Services">
          <h2 className="text-xl">Services</h2>
          <ul className="mt-4 space-y-2">
            {services.map((s) => (
              <li key={s.slug}><Link href={`/services/${s.slug}/`} className="text-steel-700 hover:text-weld-deep">{s.name}</Link></li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <h2 className="text-xl">Company</h2>
          <ul className="mt-4 space-y-2 text-steel-700">
            <li><Link href="/projects/" className="hover:text-weld-deep">Gallery</Link></li>
            <li><Link href="/about/" className="hover:text-weld-deep">About us</Link></li>
            <li><Link href="/contact/" className="hover:text-weld-deep">Get a quote</Link></li>
            <li><Link href="/terms/" className="hover:text-weld-deep">Terms &amp; Conditions</Link></li>
            <li><Link href="/refund-policy/" className="hover:text-weld-deep">Return &amp; Refund Policy</Link></li>
          </ul>
        </nav>

        <div>
          <h2 className="text-xl">Contact</h2>
          <address className="mt-4 space-y-3 not-italic text-steel-700">
            <p className="flex gap-3"><PinIcon className="mt-1 shrink-0 text-weld-deep" /><span>{contact.addressLines.join(', ')}</span></p>
            {hasPhone && <p className="flex gap-3"><PhoneIcon className="mt-1 shrink-0 text-weld-deep" /><a href={`tel:${contact.phoneTel}`} className="hover:text-weld-deep">{contact.phoneDisplay}</a></p>}
            {hasWhatsApp && <p className="flex gap-3"><WhatsAppIcon className="mt-1 shrink-0 text-weld-deep" /><a href={waLink()} className="hover:text-weld-deep" target="_blank" rel="noopener noreferrer">WhatsApp us</a></p>}
            <p className="flex gap-3"><MailIcon className="mt-1 shrink-0 text-weld-deep" /><a href={`mailto:${contact.email}`} className="break-all hover:text-weld-deep">{contact.email}</a></p>
            {hours.length > 0 && (
              <div className="flex gap-3"><ClockIcon className="mt-1 shrink-0 text-weld-deep" />
                <dl>{hours.map((h) => (<div key={h.label} className="flex gap-2"><dt className="min-w-[7.5rem] text-steel-500">{h.label}</dt><dd>{h.time}</dd></div>))}</dl>
              </div>
            )}
          </address>
        </div>
      </div>
      <div className="container-x mt-12 flex flex-col gap-2 border-t border-steel-200 pt-6 text-sm text-steel-500 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
        <p>Chennai, Tamil Nadu</p>
      </div>
    </footer>
  );
}
