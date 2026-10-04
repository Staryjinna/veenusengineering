import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import PhotoGrid from '@/components/PhotoGrid';
import CtaBand from '@/components/CtaBand';
import JsonLd from '@/components/JsonLd';
import { categories, photos } from '@/data/gallery';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Projects & Gallery: Gates, Railings, Shutters, Roofing | Veenus Engineering',
  description: 'Photos of SS and MS gates, railings, grills, rolling shutters, roofing and SS furniture made and installed by Veenus Engineering in Vaniyambadi and Tirupathur district.',
  alternates: { canonical: '/projects/' },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero crumbs={[{ label: 'Projects' }]} title="Projects" intro="Photos of finished work, sorted by service. Tap any photo to enlarge it." />
      <section className="py-12 sm:py-16">
        <div className="container-x">
          <PhotoGrid photos={photos} categories={categories} filterable />
        </div>
      </section>
      <CtaBand title="Want something like this?" text="Send us a photo of the one you like, with your size." message="Hello Veenus Engineering, I saw your projects page and would like a free quote." />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Projects', path: '/projects/' }])} />
    </>
  );
}
