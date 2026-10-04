import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ServiceCard from '@/components/ServiceCard';
import CtaBand from '@/components/CtaBand';
import JsonLd from '@/components/JsonLd';
import { services } from '@/data/services';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Services: Gates, Railings, Grills, Shutters, Roofing | Veenus Engineering',
  description: 'SS gates, SS railings, MS gates, MS grills, rolling shutters, roofing, Kerala-type roofing and SS furniture, made and installed in Vaniyambadi and Tirupathur district.',
  alternates: { canonical: '/services/' },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Services' }]}
        title="Our services"
        intro="Stainless steel and mild steel fabrication for homes, shops and factories in Vaniyambadi and Tirupathur district. Designed, fabricated and installed by one team."
      />
      <section className="py-14 sm:py-20">
        <div className="container-x">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}
          </ul>
          <p className="mt-10 max-w-2xl text-steel-600">
            We also take on custom fabrication and hydraulic machinery services. If your job is not listed above, message us with a photo or sketch and we will tell you if we can do it.
          </p>
        </div>
      </section>
      <CtaBand />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services/' }])} />
    </>
  );
}
