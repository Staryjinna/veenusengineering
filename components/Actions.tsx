import Link from 'next/link';
import { contact } from '@/data/contact';
import { hasPhone, hasWhatsApp, quoteHref, quoteLabel } from '@/lib/quote';
import { ArrowIcon, PhoneIcon, WhatsAppIcon } from './Icons';
import { cx } from '@/lib/cx';

type V = 'primary' | 'dark' | 'ghost' | 'outline';

/** "Get a quote": WhatsApp when a number is configured, otherwise the contact form. */
export function QuoteButton({ variant = 'primary', size = 'md', message, label, className }: { variant?: V; size?: 'md' | 'sm'; message?: string; label?: string; className?: string }) {
  const cls = cx('btn', `btn-${variant}`, size === 'sm' && 'btn-sm', className);
  const text = label ?? quoteLabel;
  if (hasWhatsApp) {
    return <a href={quoteHref(message)} target="_blank" rel="noopener noreferrer" className={cls}><WhatsAppIcon /> {text}</a>;
  }
  return <Link href="/contact/" className={cls}>{text} <ArrowIcon /></Link>;
}

/** Renders nothing until a phone number is added to data/contact.ts. */
export function CallButton({ variant = 'ghost', size = 'md', className, compact }: { variant?: V; size?: 'md' | 'sm'; className?: string; compact?: boolean }) {
  if (!hasPhone) return null;
  return (
    <a href={`tel:${contact.phoneTel}`} className={cx('btn', `btn-${variant}`, size === 'sm' && 'btn-sm', className)} aria-label={`Call ${contact.phoneDisplay}`}>
      <PhoneIcon /> {compact ? <span className="hidden sm:inline">Call</span> : <>Call {contact.phoneDisplay}</>}
    </a>
  );
}
