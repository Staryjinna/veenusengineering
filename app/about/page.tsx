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
  title: 'About Veenus Engineering | Metal Fabrication in Vaniyambadi',
  description: 'Veenus Engineering is a metal fabrication and engineering company in Vaniyambadi, Tirupathur district, serving homes, shops and factories.',
  alternates: { canonical: '/about/' },
};

const values = [
  { t: 'Precision', d: 'We measure on site and fabricate to those measurements, so parts fit the first time.' },
  { t: 'Durability', d: 'We choose materials and finishes for where the work will be used.' },
  { t: 'Honest quotations', d: 'Scope, payment and timeline are agreed before work starts.' },
  { t: 'On-time delivery', d: 'We plan the schedule with you and tell you early if it could change.' },
];

function Placeholder({ label, note }: { label: string; note: string }) {
  return (
    <div className="grid aspect-[4/3] place-items-center border-2 border-dashed border-steel-400 bg-steel-100 p-6 text-center">
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
      <PageHero crumbs={[{ label: 'About' }]} title="Metal fabrication from Vaniyambadi" intro="Veenus Engineering makes and installs steel work for homes, shops and factories in Tirupathur district." />

      <section className="py-14 sm:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHead index="01" label="Our story" title="What we do" />
            <div className="prose-plain mt-5 max-w-xl">
              <p>Veenus Engineering is a fabrication and engineering company. We make stainless steel and mild steel gates, railings and grills, rolling shutters, roofing and SS furniture. We also do custom fabrication and hydraulic machinery services.</p>
              <p>Our customers include homeowners, shop owners and industrial clients. Every job is measured on site, designed with the customer, fabricated and installed by our team.</p>
              <p>We want customers to come back and recommend us, so we focus on workmanship, clear quotations and finishing on time.</p>
            </div>
            <p className="mt-6 border border-dashed border-weld-deep px-3 py-2 text-sm text-weld-deep">
              PLACEHOLDER: add the founding year, founder&apos;s name and a short personal story once the client provides them.
            </p>
          </div>
          <figure className="relative">
            <span aria-hidden className="absolute -left-2 -top-2 h-8 w-8 border-l-4 border-t-4 border-weld" />
            <Photo photo={photoByFile('service-62.jpg')} sizes="(min-width:1024px) 540px, 90vw" className="w-full" />
            <figcaption className="mt-2 text-sm text-steel-500">Our welders fabricating a steel canopy frame on site.</figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20" aria-labelledby="ws-h">
        <div className="container-x">
          <SectionHead index="02" label="Workshop & team" title={<span id="ws-h">The people and the workshop</span>} />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <Placeholder label="Workshop photo" note="Add a wide photo of the Vaniyambadi workshop" />
            <Placeholder label="Team photo" note="Add a photo of the welders and fitters" />
            <Placeholder label="Owner portrait" note="Add owner name, role and a short quote" />
          </div>
        </div>
      </section>

      <section className="blueprint on-dark py-14 sm:py-20" aria-labelledby="val-h">
        <div className="container-x">
          <SectionHead index="03" label="Values" title={<span id="val-h">How we work</span>} />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <li key={v.t} className="border-t-[3px] border-weld pt-4">
                <p className="font-display text-sm font-semibold tracking-[.2em] text-weld">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-1 text-2xl">{v.t}</h3>
                <p className="mt-2 text-steel-300">{v.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-14 sm:py-20" aria-labelledby="area-h">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHead index="04" label="Service area" title={<span id="area-h">{serviceArea.headline}</span>} intro={`Our workshop is in ${business.locality}. We visit sites, measure and install across Tirupathur district.`} />
            <ul className="mt-6 flex flex-wrap gap-2">
              {serviceArea.towns.map((t) => <li key={t} className="border-2 border-steel-300 px-3 py-1.5 font-display text-lg font-semibold uppercase tracking-wider">{t}</li>)}
            </ul>
            <p className="mt-5 text-steel-600">{serviceArea.note}</p>
          </div>
          <div className="rounded-sm bg-steel-900 p-6"><ServiceAreaGraphic /></div>
        </div>
      </section>

      <CtaBand />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About', path: '/about/' }])} />
    </>
  );
}
