import { contact } from '@/data/contact';

export const waLink = (message = 'Hello Veenus Engineering, I would like a free quote.') =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const waLinkForService = (serviceName: string) =>
  waLink(`Hello Veenus Engineering, I would like a free quote for ${serviceName}.`);
