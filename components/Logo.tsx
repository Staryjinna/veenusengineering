import Link from 'next/link';
import { business } from '@/data/contact';

export default function Logo({ size = 'md' }: { size?: 'md' | 'lg' }) {
  const lg = size === 'lg';
  return (
    <Link href="/" className="flex shrink-0 items-center gap-3" aria-label={`${business.name}, home`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/logo-mark.webp" alt="" width={289} height={240} className={lg ? 'h-14 w-auto mix-blend-multiply' : 'h-10 w-auto mix-blend-multiply'} />
      <span className="font-display uppercase leading-none text-ink">
        <span className={`block font-bold tracking-wide ${lg ? 'text-[2.4rem]' : 'text-[1.75rem]'}`}>Velan</span>{' '}
        <span className={`mt-0.5 block font-semibold text-steel-600 ${lg ? 'text-sm tracking-[.34em]' : 'text-[.68rem] tracking-[.34em]'}`}>Industries</span>{' '}
        <span className={`block font-semibold text-weld-deep ${lg ? 'mt-1 text-xs tracking-[.3em]' : 'mt-[3px] text-[.56rem] tracking-[.3em]'}`}>Steel Works</span>
      </span>
    </Link>
  );
}
