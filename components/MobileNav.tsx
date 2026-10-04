'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { CloseIcon, MenuIcon } from './Icons';
import { nav } from './nav';

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const btn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(false); btn.current?.focus(); } };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={btn}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((o) => !o)}
        className="grid h-11 w-11 place-items-center rounded-sm border border-white/25 text-white"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>
      {open && (
        <nav id="mobile-menu" aria-label="Main" className="blueprint absolute inset-x-0 top-full border-t border-white/10 pb-6 shadow-2xl">
          <ul className="container-x pt-2">
            {nav.map((l) => (
              <li key={l.href} className="border-b border-white/10">
                <Link href={l.href} onClick={() => setOpen(false)} className="flex items-center justify-between py-4 font-display text-2xl font-bold uppercase tracking-wide text-white">
                  {l.label}
                  <span aria-hidden className="text-weld">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
