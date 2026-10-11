import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import QuoteForm from '@/components/QuoteForm';
import JsonLd from '@/components/JsonLd';
import { ClockIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from '@/components/Icons';
import { business, contact, hours } from '@/data/contact';
import { breadcrumbSchema } from '@/lib/schema';
import { hasPhone, hasWhatsApp, waLink } from '@/lib/quote';

export const metadata: Metadata = {
  title: 'Get a Free Quote | Contact Velan Industries, Chennai',
  description: 'Request a free quote from Velan Industries for gates, railings, grills, rolling shutters and roofing in Chennai.',
  alternates: { canonical: '/contact/' },
};

const card = 'flex items-center gap-4 border border-steel-200 bg-white p-4 hover:border-weld';

export default function ContactPage() {
  return (
    <>
      <PageHero crumbs={[{ label: 'Contact' }]} title="Get a free quote" intro={hasWhatsApp ? 'Fill in the form and it opens WhatsApp with your details ready to send.' : 'Fill in the form and it opens your email app with your details ready to send. Tell us what you need and where.'} />
      <section className="py-14 sm:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[7fr_5fr]">
          <QuoteForm />
          <div className="space-y-4">
            <ul className="grid gap-3">
              {hasPhone && <li><a href={`tel:${contact.phoneTel}`} className={card}><PhoneIcon className="shrink-0 text-weld-deep" width={26} height={26} /><span><span className="block text-sm text-steel-500">Call</span><span className="font-display text-2xl font-bold">{contact.phoneDisplay}</span></span></a></li>}
              {hasWhatsApp && <li><a href={waLink()} target="_blank" rel="noopener noreferrer" className={card}><WhatsAppIcon className="shrink-0 text-wa" width={26} height={26} /><span><span className="block text-sm text-steel-500">WhatsApp</span><span className="font-display text-2xl font-bold">Message us</span></span></a></li>}
              <li><a href={`mailto:${contact.email}`} className={card}><MailIcon className="shrink-0 text-weld-deep" width={26} height={26} /><span className="min-w-0"><span className="block text-sm text-steel-500">Email</span><span className="block break-all font-semibold">{contact.email}</span></span></a></li>
            </ul>
            <div className="flex gap-4 border border-steel-200 bg-white p-4">
              <PinIcon className="mt-1 shrink-0 text-weld-deep" />
              <address className="not-italic">
                <p className="font-semibold text-ink">{business.name}</p>
                {contact.addressLines.map((l) => <p key={l}>{l}</p>)}
                <p className="mt-1 text-sm text-steel-500">Owner: {business.owner}</p>
                <a href={contact.mapLink} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block font-semibold text-weld-deep underline underline-offset-4">Open in Google Maps</a>
              </address>
            </div>
            {hours.length > 0 && (
              <div className="flex gap-4 border border-steel-200 bg-white p-4">
                <ClockIcon className="mt-1 shrink-0 text-weld-deep" />
                <div>
                  <p className="font-semibold text-ink">Opening hours</p>
                  <dl className="mt-1">{hours.map((h) => <div key={h.label} className="flex flex-wrap gap-x-3"><dt className="min-w-[8rem] text-steel-600">{h.label}</dt><dd>{h.time}</dd></div>)}</dl>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <section aria-label="Map" className="border-t border-steel-200">
        <iframe title="Map of Chennai, Tamil Nadu" src={contact.mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="block h-[22rem] w-full border-0 sm:h-[28rem]" />
      </section>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact/' }])} />
    </>
  );
}
