import Link from 'next/link';

export default function Logo({ size = 'md' }: { size?: 'md' | 'lg' }) {
  const lg = size === 'lg';
  return (
    <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="Veenus Engineering, home">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/logo-mark.webp" alt="" width={91} height={78} className={lg ? 'h-14 w-auto' : 'h-10 w-auto'} />
      <span className="font-display uppercase leading-none text-white">
        <span className={`block font-bold tracking-wide ${lg ? 'text-4xl' : 'text-[1.7rem]'}`}>Veenus</span>
        <span className={`mt-0.5 block font-semibold text-steel-300 ${lg ? 'text-base tracking-[.3em]' : 'text-[.72rem] tracking-[.3em]'}`}>Engineering</span>
      </span>
    </Link>
  );
}
