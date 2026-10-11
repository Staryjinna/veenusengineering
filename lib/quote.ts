import { contact } from '@/data/contact';

export const hasWhatsApp = !!contact.whatsappNumber;
export const hasPhone = !!contact.phoneTel;

export const waLink = (message = 'Hello Velan Industries, I would like a free quote.') =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;

/** Where "Get a quote" buttons go: WhatsApp when a number exists, otherwise the contact form. */
export const quoteHref = (message?: string) => (hasWhatsApp ? waLink(message) : '/contact/');
export const quoteLabel = hasWhatsApp ? 'Get a free quote on WhatsApp' : 'Get a free quote';

export const mailtoLink = (subject: string, body: string) =>
  `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
