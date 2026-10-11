import { hasWhatsApp, waLink } from '@/lib/quote';
import { business } from '@/data/contact';
import { WhatsAppIcon } from './Icons';

/** Shows only once a WhatsApp number is set in data/contact.ts. */
export default function FloatingWhatsApp() {
  if (!hasWhatsApp) return null;
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${business.name} on WhatsApp`}
      className="fixed bottom-4 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-wa text-white shadow-[0_6px_20px_rgba(0,0,0,.25)] ring-2 ring-white md:hidden"
    >
      <WhatsAppIcon width={30} height={30} />
    </a>
  );
}
