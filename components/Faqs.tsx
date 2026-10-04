import { PlusIcon } from './Icons';

export default function Faqs({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-steel-300 border-y border-steel-300">
      {faqs.map((f) => (
        <details key={f.q} className="group">
          <summary className="flex items-center justify-between gap-4 py-5 font-display text-xl font-bold uppercase tracking-wide text-ink sm:text-2xl">
            {f.q}
            <PlusIcon className="faq-plus shrink-0 text-weld-deep transition-transform" width={26} height={26} />
          </summary>
          <p className="max-w-3xl pb-6 text-steel-700">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
