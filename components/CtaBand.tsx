import { contact } from '@/data/contact';
import { waLink } from '@/lib/whatsapp';
import { CheckIcon, PhoneIcon, WhatsAppIcon } from './Icons';

export default function CtaBand({ title = 'Tell us what you need built.', text = 'Send photos and rough size on WhatsApp. The quotation is free.', message }: { title?: string; text?: string; message?: string }) {
  return (
    <section className="bg-weld py-14 text-ink sm:py-20" aria-label="Get a quote">
      <div className="container-x flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-[clamp(2.4rem,7vw,4.5rem)] !text-ink">{title}</h2>
          <p className="mt-4 flex items-start gap-2 text-lg font-medium"><CheckIcon className="mt-1 shrink-0" /> {text}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a href={waLink(message)} target="_blank" rel="noopener noreferrer" className="btn btn-dark"><WhatsAppIcon /> WhatsApp us</a>
          <a href={`tel:${contact.phoneTel}`} className="btn btn-outline"><PhoneIcon /> {contact.phoneDisplay}</a>
        </div>
      </div>
    </section>
  );
}
