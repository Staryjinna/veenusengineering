import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import PhotoGrid from '@/components/PhotoGrid';
import CtaBand from '@/components/CtaBand';
import JsonLd from '@/components/JsonLd';
import SampleNotice from '@/components/SampleNotice';
import { categories, photos, usingSamplePhotos } from '@/data/gallery';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Gallery: Gates, Railings, Shutters, Roofing | Velan Industries',
  description: 'Photos of SS and MS gates, railings, grills, rolling shutters, roofing and SS furniture from Velan Industries, Chennai.',
  alternates: { canonical: '/projects/' },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero crumbs={[{ label: 'Gallery' }]} title="Gallery" intro="Steel work by type, sorted by service. Tap any photo to enlarge it.">
        <SampleNotice className="mt-5" />
      </PageHero>
      <section className="py-12 sm:py-16">
        <div className="container-x">
          <PhotoGrid photos={photos} categories={categories} filterable />
          {usingSamplePhotos && (
            <p className="mt-10 max-w-3xl text-sm text-steel-500">
              Photo credits: images are free-licence photographs from Unsplash, credited to their photographers in the viewer. Individual sources are listed in <code>data/gallery.json</code>.
            </p>
          )}
        </div>
      </section>
      <CtaBand title="Want something like this?" text="Send us a photo of the one you like, with your size." />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Gallery', path: '/projects/' }])} />
    </>
  );
}
