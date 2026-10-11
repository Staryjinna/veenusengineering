import type { Metadata } from 'next';
import Link from 'next/link';
import { preload } from 'react-dom';
import { Button, Photo, SectionHead } from '@/components/ui';
import { CallButton, QuoteButton } from '@/components/Actions';
import ServiceCard from '@/components/ServiceCard';
import ServiceAreaGraphic from '@/components/ServiceAreaGraphic';
import SampleNotice from '@/components/SampleNotice';
import CtaBand from '@/components/CtaBand';
import { ArrowIcon } from '@/components/Icons';
import { business, serviceArea } from '@/data/contact';
import { categories, photoByFile, photos } from '@/data/gallery';
import { services } from '@/data/services';
import { processSteps, whyChoose } from '@/data/process';
import { testimonials } from '@/data/testimonials';
import { visibleStats } from '@/data/stats';

export const metadata: Metadata = {
  title: 'Velan Industries | SS & MS Gates, Railings, Shutters, Roofing in Chennai',
  description:
    'Velan Industries designs, fabricates and installs SS & MS gates, railings, grills, rolling shutters and roofing in Chennai. Request a free quote.',
  alternates: { canonical: '/' },
};

const catLabel = (slug: string) => categories.find((c) => c.slug === slug)?.label ?? '';
const workshopPhoto = photoByFile('weld-factory2.jpg');

// Interleave categories so the strip shows variety.
const featured = (() => {
  const groups = categories
    .map((c) => photos.filter((p) => p.featured && p.category === c.slug && p.file !== 'weld-sparks.jpg'))
    .filter((g) => g.length > 0);
  const out: typeof photos = [];
  for (let i = 0; groups.some((g) => i < g.length); i++) groups.forEach((g) => g[i] && out.push(g[i]));
  return out;
})();

const rise = (d: number) => ({ '--d': `${d}ms` }) as React.CSSProperties;

export default function Home() {
  // Start fetching the hero image early (it is the LCP element)
  preload('/images/hero-1200.webp', { as: 'image', fetchPriority: 'high', imageSrcSet: '/images/hero-720.webp 720w, /images/hero-1200.webp 1200w, /images/hero-1600.webp 1600w', imageSizes: '(min-width:1024px) 50vw, 100vw' });
  return (
    <>
      {/* ───────── Hero ───────── */}
      <section className="blueprint relative isolate overflow-hidden">
        <div className="relative aspect-[4/3] w-full sm:aspect-[16/9] lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-1/2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-1200.webp"
            srcSet="/images/hero-720.webp 720w, /images/hero-1200.webp 1200w, /images/hero-1600.webp 1600w"
            sizes="(min-width:1024px) 50vw, 100vw"
            width={1600}
            height={1067}
            alt="Welder in protective gear grinding a blue steel frame with sparks flying"
            fetchPriority="high"
            className="h-full w-full object-cover object-[60%_50%]"
          />
          <span aria-hidden className="absolute bottom-0 left-0 h-1.5 w-full bg-weld" />
        </div>

        <div className="container-x relative py-10 sm:py-14 lg:flex lg:min-h-[min(40rem,calc(100svh-4rem-4.5rem))] lg:items-center lg:py-20">
          <div className="lg:max-w-[calc(50vw-3rem)] xl:max-w-[36rem]">
            <p className="hero-rise eyebrow" style={rise(80)}>Velan Industries · Chennai</p>
            <h1 className="hero-rise mt-4 text-[clamp(2.7rem,11vw,4rem)] lg:text-[4.2rem] xl:text-[4.7rem]" style={rise(180)}>
              Steel fabrication,<br />made to fit <span className="text-weld-deep">your site.</span>
            </h1>
            <div className="hero-weld mt-6 w-40 sm:w-60" aria-hidden />
            <p className="hero-rise mt-6 max-w-xl text-lg text-steel-700 sm:text-xl" style={rise(620)}>
              SS &amp; MS gates, railings, rolling shutters and roofing, designed, fabricated and installed in Chennai.
            </p>
            <div className="hero-rise mt-8 flex flex-col gap-3 sm:flex-row" style={rise(780)}>
              <QuoteButton />
              <CallButton />
              {/* With no phone number set, give the second slot a useful link instead */}
              <Button href="/services/" variant="ghost" className="sm:hidden lg:inline-flex">Our services</Button>
            </div>
          </div>
        </div>

        {/* Drawing title-block */}
        <div className="hero-rise relative border-t border-steel-300 bg-white" style={rise(900)}>
          <dl className="container-x grid grid-cols-2 gap-px text-sm md:grid-cols-4 [&>div]:border-steel-200 [&>div]:py-3 md:[&>div]:px-5 md:[&>div:first-child]:pl-0 md:[&>div+div]:border-l">
            {[
              ['Work', 'SS & MS fabrication'],
              ['Sites', 'Home · Shop · Factory'],
              ['Based in', 'Chennai, Tamil Nadu'],
              ['Owner', business.owner],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-display text-xs font-semibold uppercase tracking-[.2em] text-weld-deep">{k}</dt>
                <dd className="mt-0.5 font-medium text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ───────── Services ───────── */}
      <section className="py-16 sm:py-24" aria-labelledby="services-h">
        <div className="container-x">
          <SectionHead index="01" label="What we make" title={<span id="services-h">Eight services, one workshop</span>} intro="Pick a service to see typical uses, options to discuss, our process and sample photos." />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}
          </ul>
          <p className="mt-8 text-steel-600">
            Need something that is not listed? <Link href="/contact/" className="font-semibold text-weld-deep underline underline-offset-4 hover:text-ink">Tell us about your job</Link>.
          </p>
        </div>
      </section>

      {/* ───────── Why choose us ───────── */}
      <section className="blueprint py-16 sm:py-24" aria-labelledby="why-h">
        <div className="container-x grid gap-12 lg:grid-cols-[5fr_7fr] lg:items-center">
          <div>
            <SectionHead index="02" label="Why Velan" title={<span id="why-h">Built on site measurements, not guesswork</span>} />
            <figure className="relative mt-8 max-w-md">
              <span aria-hidden className="absolute -left-2 -top-2 h-8 w-8 border-l-4 border-t-4 border-weld" />
              <span aria-hidden className="absolute -bottom-2 -right-2 h-8 w-8 border-b-4 border-r-4 border-weld" />
              <Photo photo={workshopPhoto} sizes="(min-width:1024px) 440px, 90vw" className="aspect-[4/3] w-full object-cover" />
              <figcaption className="mt-3 text-sm text-steel-500">Sample photo: welding in an industrial workshop.</figcaption>
            </figure>
          </div>
          <ul className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {whyChoose.map((w, i) => (
              <li key={w.title} className="border-t-2 border-ink pt-4">
                <p className="font-display text-sm font-semibold tracking-[.2em] text-weld-deep">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-1 text-2xl">{w.title}</h3>
                <p className="mt-2 text-steel-600">{w.text}</p>
              </li>
            ))}
          </ul>
        </div>
        {visibleStats.length > 0 && (
          <div className="container-x mt-14 grid grid-cols-2 gap-6 border-t border-steel-300 pt-8">
            {visibleStats.map((s) => (<div key={s.label}><p className="font-display text-5xl font-bold text-ink">{s.value}</p><p className="text-steel-600">{s.label}</p></div>))}
          </div>
        )}
      </section>

      {/* ───────── Gallery strip ───────── */}
      <section className="py-16 sm:py-24" aria-labelledby="proj-h">
        <div className="container-x flex flex-wrap items-end justify-between gap-4">
          <SectionHead index="03" label="Gallery" title={<span id="proj-h">Steel, up close</span>} />
          <Button href="/projects/" variant="outline">All photos <ArrowIcon /></Button>
        </div>
        <div className="container-x mt-4"><SampleNotice /></div>
        <ul className="no-scrollbar strip-inset mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 pe-4" aria-label="Sample photos, scroll sideways">
          {featured.map((p) => (
            <li key={p.file} className="relative shrink-0 snap-start">
              <Link href="/projects/" className="block" aria-label={`${catLabel(p.category)}: ${p.alt}. View all photos`}>
                <Photo thumb photo={p} alt="" sizes="360px" className="h-64 w-64 max-w-none object-cover sm:h-80 sm:w-96" />
                <span className="absolute bottom-0 left-0 bg-ink px-3 py-1.5 font-display text-base font-semibold uppercase tracking-widest text-white">{catLabel(p.category)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ───────── How it works ───────── */}
      <section className="blueprint py-16 sm:py-24" aria-labelledby="how-h">
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

      {/* ───────── Testimonials: hidden until real reviews are added ───────── */}
      {testimonials.length > 0 && (
        <section className="py-16 sm:py-24" aria-labelledby="test-h">
          <div className="container-x">
            <SectionHead index="05" label="Customers" title={<span id="test-h">What customers say</span>} />
            <ul className="mt-10 grid gap-5 md:grid-cols-2">
              {testimonials.map((t) => (
                <li key={t.name}>
                  <figure className="h-full border border-steel-200 bg-mist p-6">
                    <blockquote className="text-lg text-steel-800">&ldquo;{t.quote}&rdquo;</blockquote>
                    <figcaption className="mt-5 border-t border-steel-200 pt-4"><span className="font-semibold text-ink">{t.name}</span>{t.role && <span className="text-steel-500">, {t.role}</span>}</figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ───────── Service area ───────── */}
      <section className="py-16 sm:py-24" aria-labelledby="area-h">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHead index={testimonials.length > 0 ? '06' : '05'} label="Where we work" title={<span id="area-h">{serviceArea.headline}</span>} intro={`Velan Industries is based in ${business.locality}. We visit sites, measure and install across the areas below.`} />
            <ul className="mt-6 flex flex-wrap gap-2">
              {serviceArea.towns.map((t) => (<li key={t} className="border-2 border-steel-300 px-3 py-1.5 font-display text-lg font-semibold uppercase tracking-wider text-ink">{t}</li>))}
            </ul>
            <p className="mt-5 max-w-lg text-steel-600">{serviceArea.note}</p>
            <div className="mt-6"><Button href="/contact/" variant="outline" size="sm">Contact us</Button></div>
          </div>
          <div className="mx-auto w-full max-w-md border border-steel-200 bg-mist p-4"><ServiceAreaGraphic /></div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
