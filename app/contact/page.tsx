import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import QuoteForm from '@/components/QuoteForm';
import JsonLd from '@/components/JsonLd';
import { ClockIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from '@/components/Icons';
import { contact, hours } from '@/data/contact';
import { breadcrumbSchema } from '@/lib/schema';
import { waLink } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Get a Free Quote | Contact Veenus Engineering, Vaniyambadi',
  description: 'Call or WhatsApp Veenus Engineering on +91 90475 11368 for a free quote on gates, railings, grills, rolling shutters and roofing in Vaniyambadi and Tirupathur district.',
  alternates: { canonical: '/contact/' },
};

export default function ContactPage() {
  return (
    <>
      <PageHero crumbs={[{ label: 'Contact' }]} title="Get a free quote" intro="Fill in the form and it opens WhatsApp with your details ready to send. Or call us." />
      <section className="py-14 sm:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[7fr_5fr]">
          <QuoteForm />
          <div className="space-y-6">
            <ul className="grid gap-3">
              <li><a href={`tel:${contact.phoneTel}`} className="flex items-center gap-4 border border-steel-200 bg-white p-4 hover:border-weld"><PhoneIcon className="shrink-0 text-weld-deep" width={26} height={26} /><span><span className="block text-sm text-steel-500">Call</span><span className="font-display text-2xl font-bold">{contact.phoneDisplay}</span></span></a></li>
              <li><a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 border border-steel-200 bg-white p-4 hover:border-weld"><WhatsAppIcon className="shrink-0 text-wa" width={26} height={26} /><span><span className="block text-sm text-steel-500">WhatsApp</span><span className="font-display text-2xl font-bold">Message us</span></span></a></li>
              <li><a href={`mailto:${contact.email}`} className="flex items-center gap-4 border border-steel-200 bg-white p-4 hover:border-weld"><MailIcon className="shrink-0 text-weld-deep" width={26} height={26} /><span className="min-w-0"><span className="block text-sm text-steel-500">Email</span><span className="block break-all font-semibold">{contact.email}</span></span></a></li>
            </ul>
            <div className="flex gap-4 border border-steel-200 bg-white p-4">
              <PinIcon className="mt-1 shrink-0 text-weld-deep" />
              <address className="not-italic">
                <p className="font-semibold text-ink">Workshop</p>
                {contact.addressLines.map((l) => <p key={l}>{l}</p>)}
                <a href={contact.mapLink} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block font-semibold text-weld-deep underline underline-offset-4">Open in Google Maps</a>
              </address>
            </div>
            <div className="flex gap-4 border border-steel-200 bg-white p-4">
              <ClockIcon className="mt-1 shrink-0 text-weld-deep" />
              <div>
                <p className="font-semibold text-ink">Opening hours</p>
                <dl className="mt-1">{hours.map((h) => <div key={h.label} className="flex flex-wrap gap-x-3"><dt className="min-w-[8rem] text-steel-600">{h.label}</dt><dd>{h.time}</dd></div>)}</dl>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section aria-label="Map" className="border-t border-steel-200">
        <iframe title="Map showing the Veenus Engineering workshop in Vaniyambadi" src={contact.mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="block h-[22rem] w-full border-0 sm:h-[28rem]" />
      </section>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact/' }])} />
    </>
  );
}
