import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import Faqs from '@/components/Faqs';
import JsonLd from '@/components/JsonLd';
import PhotoGrid from '@/components/PhotoGrid';
import { Button, Photo, SectionHead } from '@/components/ui';
import { ArrowIcon, PhoneIcon, WhatsAppIcon } from '@/components/Icons';
import { contact } from '@/data/contact';
import { services, serviceBySlug, serviceHero, servicePhotos } from '@/data/services';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';
import { waLinkForService } from '@/lib/whatsapp';

export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const s = serviceBySlug((await params).slug);
  if (!s) return {};
  const hero = serviceHero(s);
  return {
    title: s.seoTitle,
    description: s.seoDescription,
    alternates: { canonical: `/services/${s.slug}/` },
    openGraph: { title: s.seoTitle, description: s.seoDescription, images: [{ url: hero.src, width: hero.width, height: hero.height, alt: hero.alt }] },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const service = serviceBySlug((await params).slug);
  if (!service) notFound();
  const hero = serviceHero(service);
  const gallery = servicePhotos(service);
  const others = services.filter((s) => s.slug !== service.slug);
  const uses = [
    ['Home', service.uses.home],
    ['Shop', service.uses.shop],
    ['Factory', service.uses.factory],
  ] as const;

  return (
    <>
      <PageHero crumbs={[{ label: 'Services', href: '/services/' }, { label: service.name }]} title={service.headline}>
        <div className="mt-8 grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="max-w-xl text-lg text-steel-300">{service.keyword.charAt(0).toUpperCase() + service.keyword.slice(1)}: made to your measurements and installed by our team.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={waLinkForService(service.name)} target="_blank" rel="noopener noreferrer" className="btn btn-primary"><WhatsAppIcon /> Get a free quote on WhatsApp</a>
              <a href={`tel:${contact.phoneTel}`} className="btn btn-ghost"><PhoneIcon /> Call {contact.phoneDisplay}</a>
            </div>
          </div>
          <figure className="relative w-full max-w-lg lg:w-[30rem]">
            <span aria-hidden className="absolute -left-2 -top-2 h-8 w-8 border-l-4 border-t-4 border-weld" />
            <span aria-hidden className="absolute -bottom-2 -right-2 h-8 w-8 border-b-4 border-r-4 border-weld" />
            <Photo photo={hero} priority sizes="(min-width:1024px) 480px, 90vw" className="w-full" />
          </figure>
        </div>
      </PageHero>

      <section className="py-14 sm:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[7fr_5fr]">
          <div>
            <SectionHead index="01" label="What it is" title={service.name} />
            <div className="prose-plain mt-5 max-w-2xl">
              {service.intro.map((p) => <p key={p}>{p}</p>)}
            </div>
          </div>
          <div>
            <p className="eyebrow">Typical uses</p>
            <ul className="mt-4 divide-y divide-steel-300 border-y border-steel-300">
              {uses.map(([k, v]) => (
                <li key={k} className="grid grid-cols-[5.5rem_1fr] gap-3 py-4">
                  <span className="font-display text-xl font-bold uppercase tracking-wide text-weld-deep">{k}</span>
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20" aria-labelledby="opts-h">
        <div className="container-x">
          <SectionHead index="02" label="Materials & finishes" title={<span id="opts-h">Things to decide together</span>} intro="These are the questions we go through on the site visit. We confirm what is available and the cost in your quotation." />
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {service.options.map((o) => (
              <li key={o.question} className="border-l-4 border-weld bg-paper p-5">
                <h3 className="text-2xl normal-case !leading-tight">{o.question}</h3>
                <p className="mt-2 text-steel-600">{o.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="blueprint on-dark py-14 sm:py-20" aria-labelledby="proc-h">
        <div className="container-x">
          <SectionHead index="03" label="Process" title={<span id="proc-h">How we do {service.name.toLowerCase()}</span>} />
          <ol className="mt-10 grid gap-6 md:grid-cols-4">
            {service.process.map((step, i) => (
              <li key={step} className="border-t-[3px] border-weld pt-4">
                <p className="font-display text-5xl font-bold text-white/25" aria-hidden>{String(i + 1).padStart(2, '0')}</p>
                <p className="mt-1 text-lg text-white">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {gallery.length > 0 && (
        <section className="py-14 sm:py-20" aria-labelledby="gal-h">
          <div className="container-x">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHead index="04" label="Our work" title={<span id="gal-h">{service.name} photos</span>} />
              <Button href="/projects/" variant="outline" size="sm">All projects <ArrowIcon /></Button>
            </div>
            <div className="mt-8"><PhotoGrid photos={gallery} /></div>
          </div>
        </section>
      )}

      <section className="bg-white py-14 sm:py-20" aria-labelledby="faq-h">
        <div className="container-x max-w-4xl">
          <SectionHead index="05" label="FAQ" title={<span id="faq-h">Common questions</span>} />
          <div className="mt-8"><Faqs faqs={service.faqs} /></div>
        </div>
      </section>

      <section className="py-12" aria-label="Other services">
        <div className="container-x">
          <p className="eyebrow">Other services</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {others.map((o) => (
              <li key={o.slug}><Link href={`/services/${o.slug}/`} className="inline-block border-2 border-steel-300 px-4 py-2 font-display text-lg font-semibold uppercase tracking-wider hover:border-ink">{o.name}</Link></li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title={`Need ${service.name}?`} text="Send photos and rough size on WhatsApp. The quotation is free." message={`Hello Veenus Engineering, I would like a free quote for ${service.name}.`} />

      <JsonLd data={serviceSchema(service, hero.src)} />
      <JsonLd data={faqSchema(service.faqs)} />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services/' }, { name: service.name, path: `/services/${service.slug}/` }])} />
    </>
  );
}
