// Single source of truth for contact details, hours and address.
// Used by the header, footer, contact page, WhatsApp links and JSON-LD.

export const business = {
  name: 'Veenus Engineering',
  tagline: 'Metal fabrication and installation in Vaniyambadi, Tirupathur district',
  // OPEN QUESTION: site text says "Tirupathur", the Google Maps pin says "Vaniyambadi".
  // Default used here: Vaniyambadi, Tirupathur district.
  locality: 'Vaniyambadi',
  district: 'Tirupathur district',
  region: 'Tamil Nadu',
  postalCode: '635751',
  streetAddress: '351, Mariyamman Kovil St, Fort, Shakirabad',
  geo: { lat: 12.67987, lng: 78.61412 },
  siteUrl: 'https://veenusengineering.in',
} as const;

export const contact = {
  phoneDisplay: '+91 90475 11368',
  phoneTel: '+919047511368',
  whatsappNumber: '919047511368', // no "+" for wa.me
  email: 'sales@veenusengineering.in',
  instagram: 'https://www.instagram.com/veenusengineering',
  youtube: 'https://youtube.com/@veenusengineeringvnb',
  addressLines: [
    '351, Mariyamman Kovil St, Fort, Shakirabad',
    'Vaniyambadi, Tirupathur district',
    'Tamil Nadu 635751',
  ],
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.200644763109!2d78.61412326539435!3d12.679872080060797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bada9a738eb40e1%3A0x51934e533bf7cd23!2s351%2C%20Mariyamman%20Kovil%20St%2C%20Fort%2C%20Shakirabad%2C%20Vaniyambadi%2C%20Tamil%20Nadu%20635751!5e0!3m2!1sen!2sin!4v1779732015432!5m2!1sen!2sin',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=12.67987,78.61412',
} as const;

// OPEN QUESTION: the services page of the old site says "Mon-Sat 9 AM-8 PM".
// Default used here is Mon-Fri 9-7, Sat 9-12, as on the contact page.
export const hours = [
  { label: 'Monday – Friday', short: 'Mon–Fri', time: '9:00 AM – 7:00 PM', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '19:00' },
  { label: 'Saturday', short: 'Sat', time: '9:00 AM – 12:00 PM', days: ['Saturday'], opens: '09:00', closes: '12:00' },
  { label: 'Sunday', short: 'Sun', time: 'Closed', days: [], opens: '', closes: '' },
] as const;

export const hoursSummary = 'Mon–Fri 9–7 · Sat 9–12';

// Towns we show as the service area. OPEN QUESTION: confirm the exact list with the client.
export const serviceArea = {
  headline: 'Vaniyambadi and Tirupathur district',
  towns: ['Vaniyambadi', 'Tirupathur', 'Ambur', 'Jolarpet', 'Natrampalli', 'Alangayam'],
  note: 'Outside this area? Message us on WhatsApp and we will tell you if we can take the job.',
  confirmed: false,
} as const;
