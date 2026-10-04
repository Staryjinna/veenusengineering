import type { MetadataRoute } from 'next';
import { business } from '@/data/contact';
import { services } from '@/data/services';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['/', '/services/', '/projects/', '/about/', '/contact/', '/terms/', '/refund-policy/', ...services.map((s) => `/services/${s.slug}/`)];
  return pages.map((p) => ({ url: `${business.siteUrl}${p}`, changeFrequency: p === '/' ? 'weekly' : 'monthly', priority: p === '/' ? 1 : p.startsWith('/services/') ? 0.8 : 0.6 }));
}
