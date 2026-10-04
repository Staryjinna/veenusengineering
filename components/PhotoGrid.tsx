'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { CategorySlug, PublishedPhoto } from '@/data/gallery';
import { CloseIcon, ArrowIcon } from './Icons';
import { cx } from '@/lib/cx';

type Cat = { slug: CategorySlug; label: string };

/** Photo grid with optional category filter and an accessible lightbox (native <dialog>). */
export default function PhotoGrid({ photos, categories, filterable = false }: { photos: PublishedPhoto[]; categories?: Cat[]; filterable?: boolean }) {
  const [active, setActive] = useState<CategorySlug | 'all'>('all');
  const [open, setOpen] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);

  const shown = active === 'all' ? photos : photos.filter((p) => p.category === active);
  const counts = (slug: CategorySlug) => photos.filter((p) => p.category === slug).length;
  const cats = (categories ?? []).filter((c) => counts(c.slug) > 0);

  const show = (i: number, el?: HTMLElement) => { if (el) opener.current = el; setOpen(i); };
  const close = useCallback(() => { dialog.current?.close(); }, []);
  const step = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + shown.length) % shown.length)), [shown.length]);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (open !== null && !d.open) d.showModal();
  }, [open]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'ArrowRight') step(1); if (e.key === 'ArrowLeft') step(-1); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, step]);

  const current = open !== null ? shown[open] : null;
  const label = (slug: string) => cats.find((c) => c.slug === slug)?.label ?? '';

  return (
    <div>
      {filterable && (
        <div role="group" aria-label="Filter projects by service" className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
          {[{ slug: 'all' as const, label: 'All', n: photos.length }, ...cats.map((c) => ({ ...c, n: counts(c.slug) }))].map((c) => (
            <button
              key={c.slug}
              type="button"
              aria-pressed={active === c.slug}
              onClick={() => setActive(c.slug)}
              className={cx('shrink-0 border-2 px-4 py-2 font-display text-lg font-semibold uppercase tracking-wider transition-colors', active === c.slug ? 'border-ink bg-ink text-white' : 'border-steel-300 bg-white text-ink hover:border-ink')}
            >
              {c.label} <span className={active === c.slug ? 'text-weld' : 'text-steel-500'}>{c.n}</span>
            </button>
          ))}
        </div>
      )}

      <ul className={cx('grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4', filterable && 'mt-6')} aria-live="polite">
        {shown.map((p, i) => (
          <li key={p.file}>
            <button type="button" onClick={(e) => show(i, e.currentTarget)} className="group relative block w-full overflow-hidden bg-steel-200" aria-label={`Enlarge photo: ${p.alt}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} alt={p.alt} width={p.width} height={p.height} loading="lazy" decoding="async" className="aspect-[5/4] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              {filterable && <span className="absolute bottom-0 left-0 bg-ink/90 px-2 py-1 font-display text-sm font-semibold uppercase tracking-widest text-weld">{label(p.category)}</span>}
            </button>
          </li>
        ))}
      </ul>
      {shown.length === 0 && <p className="mt-6 text-steel-600">No photos in this category yet.</p>}

      <dialog
        ref={dialog}
        aria-label="Photo viewer"
        onClose={() => { setOpen(null); opener.current?.focus(); }}
        onClick={(e) => { if (e.target === dialog.current) close(); }}
        className="m-0 h-full max-h-none w-full max-w-none bg-transparent p-0 backdrop:bg-ink/95"
      >
        {current && (
          <div className="relative flex h-full w-full flex-col items-center justify-center p-4 sm:p-10" onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
            <button type="button" onClick={close} aria-label="Close photo viewer" className="absolute right-3 top-3 z-10 grid h-12 w-12 place-items-center border border-white/40 bg-ink text-white hover:border-weld"><CloseIcon /></button>
            {/* Photos are 500px originals, so cap enlargement to avoid a blurry blow-up */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={current.src} alt={current.alt} width={current.width} height={current.height} style={{ maxWidth: `min(100%, ${Math.round(current.width * 1.7)}px)` }} className="max-h-[75vh] w-auto object-contain" />
            <p className="mt-4 max-w-2xl text-center text-steel-200">{current.alt}</p>
            <p className="mt-1 text-sm text-steel-400">{(open ?? 0) + 1} / {shown.length}</p>
            {shown.length > 1 && (
              <div className="mt-4 flex gap-3">
                <button type="button" onClick={() => step(-1)} aria-label="Previous photo" className="grid h-12 w-12 place-items-center border border-white/40 text-white hover:border-weld"><ArrowIcon className="rotate-180" /></button>
                <button type="button" onClick={() => step(1)} aria-label="Next photo" className="grid h-12 w-12 place-items-center border border-white/40 text-white hover:border-weld"><ArrowIcon /></button>
              </div>
            )}
          </div>
        )}
      </dialog>
    </div>
  );
}
