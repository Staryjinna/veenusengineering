import { business, contact, hours, serviceArea } from '@/data/contact';
import type { Service } from '@/data/services';

const url = business.siteUrl;

// Only facts we actually have are emitted. Phone, hours, street address and coordinates are
// added automatically once they are filled in data/contact.ts.
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${url}/#business`,
  name: business.name,
  alternateName: `${business.name} ${business.descriptor}`,
  url,
  image: `${url}/images/og.jpg`,
  logo: `${url}/images/logo.webp`,
  description: 'SS and MS gates, railings, grills, rolling shutters, roofing and SS furniture, designed, fabricated and installed in Chennai, Tamil Nadu.',
  founder: { '@type': 'Person', name: business.owner },
  email: contact.email,
  ...(contact.phoneTel ? { telephone: contact.phoneTel } : {}),
  address: { '@type': 'PostalAddress', addressLocality: business.locality, addressRegion: business.region, addressCountry: 'IN' },
  ...(hours.length > 0
    ? { openingHoursSpecification: hours.filter((h) => h.days.length > 0).map((h) => ({ '@type': 'OpeningHoursSpecification', dayOfWeek: h.days, opens: h.opens, closes: h.closes })) }
    : {}),
  areaServed: serviceArea.towns.map((t) => ({ '@type': 'City', name: t })),
  sameAs: [contact.instagram, contact.youtube].filter(Boolean),
};

export const serviceSchema = (s: Service, imageSrc: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: s.name,
  serviceType: s.name,
  description: s.seoDescription,
  url: `${url}/services/${s.slug}/`,
  image: `${url}${imageSrc}`,
  provider: { '@id': `${url}/#business` },
  areaServed: { '@type': 'City', name: business.locality },
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: `${url}${it.path}` })),
});
