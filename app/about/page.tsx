import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import JsonLd from '@/components/JsonLd';
import ServiceAreaGraphic from '@/components/ServiceAreaGraphic';
import { Photo, SectionHead } from '@/components/ui';
import { business, serviceArea } from '@/data/contact';
import { photoByFile } from '@/data/gallery';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'About Velan Industries | Steel Works in Chennai',
  description: 'Velan Industries is a steel works in Chennai, owned by Velan, making gates, railings, grills, rolling shutters and roofing for homes, shops and factories.',
  alternates: { canonical: '/about/' },
};

const values = [
  { t: 'Precision', d: 'We measure on site and fabricate to those measurements, so parts fit the first time.' },
  { t: 'Durability', d: 'We choose materials and finishes for where the work will be used.' },
  { t: 'Clear quotations', d: 'Scope, payment and timeline are agreed before work starts.' },
  { t: 'On-time delivery', d: 'We plan the schedule with you and tell you early if it could change.' },
];

function Placeholder({ label, note }: { label: string; note: string }) {
  return (
    <div className="grid aspect-[4/3] place-items-center border-2 border-dashed border-steel-400 bg-mist p-6 text-center">
      <div>
        <p className="font-display text-2xl font-bold uppercase text-steel-600">{label}</p>
        <p className="mt-1 text-sm text-steel-500">{note}</p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero crumbs={[{ label: 'About' }]} title="Steel works, Chennai" intro="Velan Industries makes and installs steel work for homes, shops and factories in Chennai." />

      <section className="py-14 sm:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHead index="01" label="Our story" title="What we do" />
            <div className="prose-plain mt-5 max-w-xl">
              <p>Velan Industries is a steel works based in {business.locality}, owned and run by {business.owner}. We make stainless steel and mild steel gates, railings and grills, rolling shutters, roofing and SS furniture, and we take on custom fabrication.</p>
              <p>Our customers include homeowners, shop owners and industrial clients. Every job is measured on site, designed with the customer, fabricated and installed by our team.</p>
              <p>We want customers to come back and recommend us, so we focus on workmanship, clear quotations and finishing on time.</p>
            </div>
            <p className="mt-6 border border-dashed border-weld-deep px-3 py-2 text-sm text-weld-deep">
              PLACEHOLDER: add the year Velan Industries started and a short story in {business.owner}&apos;s own words.
            </p>
          </div>
          <figure className="relative">
            <span aria-hidden className="absolute -left-2 -top-2 h-8 w-8 border-l-4 border-t-4 border-weld" />
            <Photo photo={photoByFile('weld-factory2.jpg')} sizes="(min-width:1024px) 540px, 90vw" className="aspect-[4/3] w-full object-cover" />
            <figcaption className="mt-2 text-sm text-steel-500">Sample photo: welding in an industrial workshop.</figcaption>
          </figure>
        </div>
      </section>

      <section className="blueprint py-14 sm:py-20" aria-labelledby="own-h">
        <div className="container-x">
          <SectionHead index="02" label="Owner & workshop" title={<span id="own-h">The people and the workshop</span>} />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <Placeholder label={`${business.owner}, owner`} note="Add a portrait and a few lines about your background" />
            <Placeholder label="Workshop photo" note="Add a wide photo of the Chennai workshop" />
            <Placeholder label="Team photo" note="Add a photo of the welders and fitters" />
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20" aria-labelledby="val-h">
        <div className="container-x">
          <SectionHead index="03" label="Values" title={<span id="val-h">How we work</span>} />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <li key={v.t} className="border-t-[3px] border-ink pt-4">
                <p className="font-display text-sm font-semibold tracking-[.2em] text-weld-deep">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-1 text-2xl">{v.t}</h3>
                <p className="mt-2 text-steel-600">{v.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="blueprint py-14 sm:py-20" aria-labelledby="area-h">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHead index="04" label="Service area" title={<span id="area-h">{serviceArea.headline}</span>} intro={`We are based in ${business.locality}. We visit sites, measure and install across the areas below.`} />
            <ul className="mt-6 flex flex-wrap gap-2">
              {serviceArea.towns.map((t) => <li key={t} className="border-2 border-steel-300 bg-white px-3 py-1.5 font-display text-lg font-semibold uppercase tracking-wider">{t}</li>)}
            </ul>
            <p className="mt-5 text-steel-600">{serviceArea.note}</p>
          </div>
          <div className="mx-auto w-full max-w-md border border-steel-200 bg-white p-4"><ServiceAreaGraphic /></div>
        </div>
      </section>

      <CtaBand />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About', path: '/about/' }])} />
    </>
  );
}
