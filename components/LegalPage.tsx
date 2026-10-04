import type { Policy } from '@/data/policies';
import PageHero from './PageHero';
import CtaBand from './CtaBand';
import { Button } from './ui';

export default function LegalPage({ policy, other }: { policy: Policy; other: { label: string; href: string } }) {
  return (
    <>
      <PageHero crumbs={[{ label: policy.title }]} title={policy.title} intro={policy.intro} />
      <section className="py-14 sm:py-20">
        <div className="container-x max-w-3xl">
          <ol className="divide-y divide-steel-300 border-y border-steel-300">
            {policy.clauses.map((c, i) => (
              <li key={c.heading} className="grid gap-1 py-5 sm:grid-cols-[3.5rem_1fr] sm:gap-4">
                <span className="font-display text-2xl font-bold text-weld-deep" aria-hidden>{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h2 className="text-2xl">{c.heading}</h2>
                  <p className="mt-1 text-steel-700">{c.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-steel-600">Questions about these terms? Call or message us before you approve a quotation.</p>
          <div className="mt-5"><Button href={other.href} variant="outline" size="sm">{other.label}</Button></div>
        </div>
      </section>
      <CtaBand title="Questions first?" text="Ask us on WhatsApp before you decide." />
    </>
  );
}
