import { business, contact, hours, serviceArea } from '@/data/contact';
import type { Service } from '@/data/services';

const url = business.siteUrl;

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${url}/#business`,
  name: business.name,
  url,
  image: `${url}/images/og.jpg`,
  logo: `${url}/images/logo.webp`,
  description: 'SS and MS gates, railings, grills, rolling shutters, roofing and SS furniture, designed, fabricated and installed in Vaniyambadi and Tirupathur district, Tamil Nadu.',
  telephone: contact.phoneTel,
  email: contact.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: business.streetAddress,
    addressLocality: business.locality,
    addressRegion: business.region,
    postalCode: business.postalCode,
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: business.geo.lat, longitude: business.geo.lng },
  hasMap: contact.mapLink,
  openingHoursSpecification: hours
    .filter((h) => h.days.length > 0)
    .map((h) => ({ '@type': 'OpeningHoursSpecification', dayOfWeek: [...h.days], opens: h.opens, closes: h.closes })),
  areaServed: serviceArea.towns.map((t) => ({ '@type': 'City', name: t })),
  sameAs: [contact.instagram, contact.youtube],
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
  areaServed: [{ '@type': 'AdministrativeArea', name: 'Tirupathur district, Tamil Nadu' }, { '@type': 'City', name: 'Vaniyambadi' }],
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
