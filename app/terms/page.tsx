import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { terms } from '@/data/policies';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Veenus Engineering',
  description: 'Terms for fabrication and installation work by Veenus Engineering: quotations, payment, timelines, warranty and liability.',
  alternates: { canonical: '/terms/' },
};

export default function Page() {
  return <LegalPage policy={terms} other={{ label: 'Return & Refund Policy', href: '/refund-policy/' }} />;
}
