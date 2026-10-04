import type { Metadata } from 'next';
import { preload } from 'react-dom';
import Link from 'next/link';
import { Button, Photo, SectionHead } from '@/components/ui';
import ServiceCard from '@/components/ServiceCard';
import ServiceAreaGraphic from '@/components/ServiceAreaGraphic';
import { ArrowIcon, CheckIcon, PhoneIcon, WhatsAppIcon } from '@/components/Icons';
import { business, contact, hoursSummary, serviceArea } from '@/data/contact';
import { categories, photoByFile, photos } from '@/data/gallery';
import { services } from '@/data/services';
import { processSteps, whyChoose } from '@/data/process';
import { testimonials, testimonialsUnverified } from '@/data/testimonials';
import { visibleStats } from '@/data/stats';
import { waLink } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'SS & MS Gates, Railings, Rolling Shutters, Roofing in Vaniyambadi | Veenus Engineering',
  description:
    'Veenus Engineering designs, fabricates and installs SS & MS gates, railings, grills, rolling shutters and roofing in Vaniyambadi and Tirupathur district. Get a free quote on WhatsApp.',
  alternates: { canonical: '/' },
};

const catLabel = (slug: string) => categories.find((c) => c.slug === slug)?.label ?? '';
const weldersPhoto = photoByFile('service-62.jpg');
// Interleave categories so the strip shows variety instead of five gates in a row.
const featured = (() => {
  const groups = categories
    .map((c) => photos.filter((p) => p.featured && p.category === c.slug && p.file !== 'carousel-3.jpg'))
    .filter((g) => g.length > 0);
  const out: typeof photos = [];
  for (let i = 0; groups.some((g) => i < g.length); i++) groups.forEach((g) => g[i] && out.push(g[i]));
  return out;
})();

export default function Home() {
  // Start fetching the hero image before the browser reaches the <img> tag (LCP element)
  preload('/images/hero-1920.webp', { as: 'image', fetchPriority: 'high', imageSrcSet: '/images/hero-720.webp 720w, /images/hero-1200.webp 1200w, /images/hero-1920.webp 1920w', imageSizes: '100vw' });
  return (
    <>
      {/* ───────── Hero ───────── */}
      <section className="on-dark relative isolate flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden bg-ink">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-1920.webp"
          srcSet="/images/hero-720.webp 720w, /images/hero-1200.webp 1200w, /images/hero-1920.webp 1920w"
          sizes="100vw"
          width={1920}
          height={1080}
          alt="Blue steel roof trusses spanning a large industrial hall fabricated by Veenus Engineering"
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[60%_30%]"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/55 to-ink/10 md:bg-gradient-to-r md:from-ink md:via-ink/75 md:to-transparent" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-3/4 bg-gradient-to-t from-ink/90 to-transparent md:hidden" />

        <div className="container-x relative flex flex-1 flex-col justify-end pb-8 pt-16 md:justify-center md:pb-12 md:pt-24">
          <p className="hero-rise eyebrow" style={{ '--d': '100ms' } as React.CSSProperties}>
            Vaniyambadi · Tirupathur district
          </p>
          <h1 className="hero-rise mt-4 max-w-4xl text-[clamp(3rem,10.5vw,7.25rem)]" style={{ '--d': '220ms' } as React.CSSProperties}>
            Steel fabrication,<br />made to fit <span className="text-weld">your site.</span>
          </h1>
          <div className="hero-weld mt-6 w-40 sm:w-64" aria-hidden />
          <p className="hero-rise mt-5 max-w-xl text-base text-steel-200 sm:mt-6 sm:text-xl" style={{ '--d': '700ms' } as React.CSSProperties}>
            SS &amp; MS gates, railings, rolling shutters and roofing, designed, fabricated and installed in Vaniyambadi &amp; Tirupathur district.
          </p>
          <div className="hero-rise mt-8 flex flex-col gap-3 sm:flex-row" style={{ '--d': '850ms' } as React.CSSProperties}>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <WhatsAppIcon /> Get a free quote on WhatsApp
            </a>
            <a href={`tel:${contact.phoneTel}`} className="btn btn-ghost">
              <PhoneIcon /> Call {contact.phoneDisplay}
            </a>
          </div>
        </div>

        {/* Drawing title-block */}
        <div className="hero-rise relative border-t border-white/20 bg-ink/70 backdrop-blur-sm" style={{ '--d': '1000ms' } as React.CSSProperties}>
          <dl className="container-x grid grid-cols-2 gap-px text-sm md:grid-cols-4 [&>div]:border-white/15 [&>div]:py-3 md:[&>div]:px-5 md:[&>div:first-child]:pl-0 md:[&>div+div]:border-l">
            {[
              ['Work', 'SS & MS fabrication', true],
              ['Sites', 'Home · Shop · Factory', true],
              ['Area', 'Tirupathur district', false],
              ['Open', hoursSummary, false],
            ].map(([k, v, hideOnPhone]) => (
              <div key={String(k)} className={hideOnPhone ? 'max-md:hidden' : k === 'Open' ? 'max-md:pr-16' : undefined}>
                <dt className="font-display text-xs font-semibold uppercase tracking-[.2em] text-weld">{k}</dt>
                <dd className="mt-0.5 text-white">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ───────── Services ───────── */}
      <section className="py-16 sm:py-24" aria-labelledby="services-h">
        <div className="container-x">
          <SectionHead
            index="01"
            label="What we make"
            title={<span id="services-h">Eight services, one workshop</span>}
            intro="Pick a service to see typical uses, options to discuss, our process and photos of finished work."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}
          </ul>
          <p className="mt-8 text-steel-600">
            Also available: custom fabrication and hydraulic machinery services. <Link href="/contact/" className="font-semibold text-weld-deep underline underline-offset-4 hover:text-ink">Ask us about your job</Link>.
          </p>
        </div>
      </section>

      {/* ───────── Why choose us ───────── */}
      <section className="blueprint on-dark py-16 sm:py-24" aria-labelledby="why-h">
        <div className="container-x grid gap-12 lg:grid-cols-[5fr_7fr] lg:items-center">
          <div>
            <SectionHead index="02" label="Why Veenus" title={<span id="why-h">Built on site measurements, not guesswork</span>} />
            <figure className="relative mt-8 max-w-md">
              <span aria-hidden className="absolute -left-2 -top-2 h-8 w-8 border-l-4 border-t-4 border-weld" />
              <span aria-hidden className="absolute -bottom-2 -right-2 h-8 w-8 border-b-4 border-r-4 border-weld" />
              <Photo photo={weldersPhoto} sizes="(min-width:1024px) 440px, 90vw" className="w-full" />
              <figcaption className="mt-3 text-sm text-steel-400">Welders fabricating a steel canopy frame on site.</figcaption>
            </figure>
          </div>
          <ul className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {whyChoose.map((w, i) => (
              <li key={w.title} className="border-t border-white/20 pt-4">
                <p className="font-display text-sm font-semibold tracking-[.2em] text-weld">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-1 text-2xl">{w.title}</h3>
                <p className="mt-2 text-steel-300">{w.text}</p>
              </li>
            ))}
          </ul>
        </div>
        {visibleStats.length > 0 && (
          <div className="container-x mt-14 grid grid-cols-2 gap-6 border-t border-white/15 pt-8">
            {visibleStats.map((s) => (
              <div key={s.label}><p className="font-display text-5xl font-bold text-white">{s.value}</p><p className="text-steel-400">{s.label}</p></div>
            ))}
          </div>
        )}
      </section>

      {/* ───────── Featured projects ───────── */}
      <section className="bg-ink py-16 text-white sm:py-24" aria-labelledby="proj-h">
        <div className="on-dark container-x flex flex-wrap items-end justify-between gap-4">
          <SectionHead index="03" label="Recent work" title={<span id="proj-h">Finished jobs</span>} />
          <Button href="/projects/" variant="ghost">All projects <ArrowIcon /></Button>
        </div>
        <ul className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 strip-inset pe-4" aria-label="Featured projects, scroll sideways">
          {featured.map((p, i) => (
            <li key={p.file} className="relative shrink-0 snap-start">
              <Link href="/projects/" className="block" aria-label={`${catLabel(p.category)}: ${p.alt}. View all projects`}>
                <Photo photo={p} alt="" sizes="360px" priority={false} className="h-64 w-auto max-w-none object-cover sm:h-80" />
                <span className="absolute bottom-0 left-0 bg-ink/90 px-3 py-1.5 font-display text-base font-semibold uppercase tracking-widest text-weld">
                  {catLabel(p.category)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ───────── How it works ───────── */}
      <section className="py-16 sm:py-24" aria-labelledby="how-h">
        <div className="container-x">
          <SectionHead index="04" label="How it works" title={<span id="how-h">From first message to installation</span>} intro="Five steps. You approve the quotation before any work starts." />
          <ol className="mt-12 grid gap-0 lg:grid-cols-5 lg:gap-6">
            {processSteps.map((s, i) => (
              <li key={s.title} className="relative border-l-2 border-steel-300 pb-10 pl-6 last:pb-0 lg:border-l-0 lg:border-t-[3px] lg:border-t-ink lg:pb-0 lg:pl-0 lg:pt-6">
                <span aria-hidden className="absolute -left-[7px] top-1 h-3 w-3 bg-weld lg:-top-[8px] lg:left-0" />
                <p className="font-display text-6xl font-bold leading-none text-steel-500 sm:text-7xl" aria-hidden>{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-2 text-2xl">{s.title}</h3>
                <p className="mt-2 text-steel-600">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────── Testimonials ───────── */}
      <section className="bg-white py-16 sm:py-24" aria-labelledby="test-h">
        <div className="container-x">
          <SectionHead index="05" label="Customers" title={<span id="test-h">What customers say</span>} />
          {testimonialsUnverified && (
            <p className="mt-4 inline-block border border-dashed border-weld-deep px-3 py-1.5 text-sm font-semibold text-weld-deep">
              Awaiting client confirmation. To be replaced with verified Google reviews.
            </p>
          )}
          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            {testimonials.map((t) => (
              <li key={t.name}>
                <figure className="h-full border border-steel-200 bg-paper p-6">
                  <blockquote className="text-lg text-steel-800">&ldquo;{t.quote}&rdquo;</blockquote>
                  <figcaption className="mt-5 flex flex-wrap items-baseline justify-between gap-2 border-t border-steel-200 pt-4">
                    <span><span className="font-semibold text-ink">{t.name}</span>{t.role && <span className="text-steel-500">, {t.role}</span>}</span>
                    <span className="font-display text-base font-semibold uppercase tracking-widest text-weld-deep">{t.service}</span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────── Service area ───────── */}
      <section className="blueprint on-dark py-16 sm:py-24" aria-labelledby="area-h">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHead index="06" label="Where we work" title={<span id="area-h">{serviceArea.headline}</span>} intro={`Our workshop is in ${business.locality}. We visit sites, measure and install across the area below.`} />
            <ul className="mt-6 flex flex-wrap gap-2">
              {serviceArea.towns.map((t) => (
                <li key={t} className="border border-white/25 px-3 py-1.5 font-display text-lg font-semibold uppercase tracking-wider text-white">{t}</li>
              ))}
            </ul>
            <p className="mt-5 max-w-lg text-steel-300">{serviceArea.note}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={contact.mapLink} variant="ghost" size="sm">Open in Google Maps</Button>
              <Button href="/contact/" variant="ghost" size="sm">Visit the workshop</Button>
            </div>
          </div>
          <ServiceAreaGraphic />
        </div>
      </section>

      {/* ───────── Final CTA ───────── */}
      <section className="bg-weld py-14 text-ink sm:py-20" aria-labelledby="cta-h">
        <div className="container-x flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 id="cta-h" className="text-[clamp(2.4rem,7vw,4.5rem)] !text-ink">Tell us what you need built.</h2>
            <p className="mt-4 flex items-start gap-2 text-lg font-medium text-ink">
              <CheckIcon className="mt-1 shrink-0" /> Send photos and rough size on WhatsApp. The quotation is free.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-dark"><WhatsAppIcon /> WhatsApp us</a>
            <a href={`tel:${contact.phoneTel}`} className="btn btn-outline"><PhoneIcon /> {contact.phoneDisplay}</a>
          </div>
        </div>
      </section>
    </>
  );
}
