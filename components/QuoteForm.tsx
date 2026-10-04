'use client';
import { useState } from 'react';
import { WhatsAppIcon } from './Icons';
import { services } from '@/data/services';
import { waLink } from '@/lib/whatsapp';

const field = 'mt-1.5 block w-full border-2 border-steel-300 bg-white px-4 py-3 text-base text-ink placeholder:text-steel-400 focus:border-ink';

export default function QuoteForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? '').trim();
    const errs: Record<string, string> = {};
    if (!get('name')) errs.name = 'Please enter your name.';
    if (!/^[+\d][\d\s-]{7,}$/.test(get('phone'))) errs.phone = 'Please enter a valid phone number.';
    setErrors(errs);
    if (Object.keys(errs).length) {
      (e.currentTarget.querySelector('[aria-invalid="true"]') as HTMLElement | null)?.focus();
      return;
    }
    const lines = [
      'Hello Veenus Engineering, I would like a free quote.',
      `Name: ${get('name')}`,
      `Phone: ${get('phone')}`,
      `Service: ${get('service') || 'Not sure yet'}`,
      get('location') && `Location: ${get('location')}`,
      get('notes') && `Size / notes: ${get('notes')}`,
    ].filter(Boolean);
    window.open(waLink(lines.join('\n')), '_blank', 'noopener');
  }

  const err = (k: string) => errors[k] && <p id={`${k}-err`} className="mt-1 text-sm font-semibold text-red-700">{errors[k]}</p>;

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 border border-steel-200 bg-white p-5 sm:p-8">
      <div>
        <label htmlFor="name" className="font-semibold text-ink">Your name</label>
        <input id="name" name="name" autoComplete="name" required aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-err' : undefined} className={field} />
        {err('name')}
      </div>
      <div>
        <label htmlFor="phone" className="font-semibold text-ink">Phone number</label>
        <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required placeholder="+91" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'phone-err' : undefined} className={field} />
        {err('phone')}
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className="font-semibold text-ink">Service</label>
          <select id="service" name="service" defaultValue="" className={field}>
            <option value="">Not sure yet</option>
            {services.map((s) => <option key={s.slug} value={s.name}>{s.name}</option>)}
            <option value="Custom fabrication">Custom fabrication</option>
          </select>
        </div>
        <div>
          <label htmlFor="location" className="font-semibold text-ink">Location</label>
          <input id="location" name="location" autoComplete="address-level2" placeholder="Town or area" className={field} />
        </div>
      </div>
      <div>
        <label htmlFor="notes" className="font-semibold text-ink">Size and notes <span className="font-normal text-steel-500">(optional)</span></label>
        <textarea id="notes" name="notes" rows={4} placeholder="For example: gate opening 12 ft wide, SS, laser-cut panels" className={field} />
      </div>
      <p className="border-l-4 border-weld bg-paper p-3 text-sm text-steel-700">
        Photos help us quote faster. After WhatsApp opens with your message, attach photos of the site or a design you like.
      </p>
      <button type="submit" className="btn btn-primary w-full sm:w-auto"><WhatsAppIcon /> Send on WhatsApp</button>
    </form>
  );
}
