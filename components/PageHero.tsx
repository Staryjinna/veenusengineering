import Link from 'next/link';
import type { ReactNode } from 'react';

export default function PageHero({ crumbs, title, intro, children }: { crumbs: { label: string; href?: string }[]; title: ReactNode; intro?: ReactNode; children?: ReactNode }) {
  return (
    <section className="blueprint on-dark border-b-4 border-weld py-12 sm:py-16">
      <div className="container-x">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-steel-400">
            <li><Link href="/" className="hover:text-weld">Home</Link></li>
            {crumbs.map((c) => (
              <li key={c.label} className="flex items-center gap-2">
                <span aria-hidden>/</span>
                {c.href ? <Link href={c.href} className="hover:text-weld">{c.label}</Link> : <span aria-current="page" className="text-steel-200">{c.label}</span>}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="mt-5 max-w-4xl text-[clamp(2.4rem,7.5vw,5rem)]">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg text-steel-300 sm:text-xl">{intro}</p>}
        {children}
      </div>
    </section>
  );
}
