// Single source of truth for contact details and address.
// Optional fields (phone, WhatsApp, social links, hours): leave as null / [] and the site
// hides every button and line that depends on them. Fill one in and it appears everywhere.

export const business = {
  name: 'Velan Industries',
  descriptor: 'Steel Works',
  owner: 'Velan',
  locality: 'Chennai',
  region: 'Tamil Nadu',
  tagline: 'Steel works in Chennai: gates, railings, shutters and roofing',
  // PLACEHOLDER domain. Set NEXT_PUBLIC_SITE_URL in Vercel (or edit here) once the real domain is known.
  // It feeds the sitemap, canonical links and structured data.
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://velanindustries.example',
};

export const contact: {
  phoneDisplay: string | null;
  phoneTel: string | null;
  /** digits only, country code first, no "+" (e.g. 919876543210). Enables WhatsApp buttons. */
  whatsappNumber: string | null;
  email: string;
  instagram: string | null;
  youtube: string | null;
  addressLines: string[];
  mapEmbedUrl: string;
  mapLink: string;
} = {
  // Phone and WhatsApp intentionally removed for now.
  phoneDisplay: null,
  phoneTel: null,
  whatsappNumber: null,
  // PLACEHOLDER email. The quote form sends enquiries here. Replace before launch.
  email: 'hello@velanindustries.example',
  instagram: null,
  youtube: null,
  // TODO: add the full street address once known.
  addressLines: ['Chennai', 'Tamil Nadu'],
  mapEmbedUrl: 'https://www.google.com/maps?q=Chennai,+Tamil+Nadu&output=embed',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=Chennai%2C+Tamil+Nadu',
};

export type HoursRow = { label: string; time: string; days: string[]; opens: string; closes: string };
// TODO: opening hours not provided yet. Add rows like
// { label: 'Monday – Saturday', time: '9:00 AM – 6:00 PM', days: ['Monday', ...], opens: '09:00', closes: '18:00' }
export const hours: HoursRow[] = [];

// Areas shown as the service area. PLACEHOLDER list: confirm with Velan.
export const serviceArea = {
  headline: 'Chennai and nearby areas',
  towns: ['Chennai', 'Ambattur', 'Guindy', 'Avadi', 'Tambaram', 'Poonamallee', 'Sriperumbudur'],
  note: 'Outside this area? Send us a message and we will tell you if we can take the job.',
  confirmed: false,
};
