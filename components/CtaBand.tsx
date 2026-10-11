import { QuoteButton, CallButton } from './Actions';
import { CheckIcon } from './Icons';
import { hasWhatsApp } from '@/lib/quote';

export default function CtaBand({ title = 'Tell us what you need built.', text, message }: { title?: string; text?: string; message?: string }) {
  const body = text ?? (hasWhatsApp ? 'Send photos and a rough size on WhatsApp. The quotation is free.' : 'Send photos and a rough size through the contact form. The quotation is free.');
  return (
    <section className="bg-weld py-14 text-ink sm:py-20" aria-label="Get a quote">
      <div className="container-x flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-[clamp(2.4rem,7vw,4.5rem)] !text-ink">{title}</h2>
          <p className="mt-4 flex items-start gap-2 text-lg font-medium"><CheckIcon className="mt-1 shrink-0" /> {body}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <QuoteButton variant="dark" message={message} label={hasWhatsApp ? 'WhatsApp us' : 'Get a free quote'} />
          <CallButton variant="outline" />
        </div>
      </div>
    </section>
  );
}
