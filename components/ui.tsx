import Link from 'next/link';
import type { ReactNode } from 'react';
import { cx } from '@/lib/cx';
import type { PublishedPhoto } from '@/data/gallery';

type BtnProps = {
  href: string;
  variant?: 'primary' | 'dark' | 'ghost' | 'outline';
  size?: 'md' | 'sm';
  children: ReactNode;
  className?: string;
  external?: boolean;
  label?: string;
};

export function Button({ href, variant = 'primary', size = 'md', children, className, external, label }: BtnProps) {
  const cls = cx('btn', `btn-${variant}`, size === 'sm' && 'btn-sm', className);
  if (external || /^(https?:|tel:|mailto:)/.test(href)) {
    return (
      <a href={href} className={cls} aria-label={label} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {children}
      </a>
    );
  }
  return <Link href={href} className={cls} aria-label={label}>{children}</Link>;
}

export function SectionHead({ index, label, title, intro, className }: { index?: string; label: string; title: ReactNode; intro?: ReactNode; className?: string }) {
  return (
    <header className={cx('max-w-3xl', className)}>
      <p className="eyebrow">{index && <span className="tabular-nums">{index} /</span>} {label}</p>
      <h2 className="h-section mt-3">{title}</h2>
      {intro && <p className="mt-4 text-lg text-steel-600 [.on-dark_&]:text-steel-300">{intro}</p>}
    </header>
  );
}

/** Plain <img> with explicit dimensions: static export, no runtime image server needed. */
export function Photo({ photo, sizes, priority, className, alt }: { photo: PublishedPhoto; sizes?: string; priority?: boolean; className?: string; alt?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={photo.src}
      alt={alt ?? photo.alt}
      width={photo.width}
      height={photo.height}
      sizes={sizes}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      {...(priority ? { fetchPriority: 'high' as const } : {})}
      className={className}
    />
  );
}
