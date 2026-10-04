import { waLink } from '@/lib/whatsapp';
import { WhatsAppIcon } from './Icons';

export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Veenus Engineering on WhatsApp"
      className="fixed bottom-4 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-wa text-white shadow-[0_6px_20px_rgba(0,0,0,.35)] ring-2 ring-white/90 md:hidden"
    >
      <WhatsAppIcon width={30} height={30} />
    </a>
  );
}
