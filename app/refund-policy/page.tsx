import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { refund } from '@/data/policies';

export const metadata: Metadata = {
  title: 'Return & Refund Policy | Velan Industries',
  description: 'How returns, cancellations and refunds work for custom fabrication jobs at Velan Industries.',
  alternates: { canonical: '/refund-policy/' },
};

export default function Page() {
  return <LegalPage policy={refund} other={{ label: 'Terms & Conditions', href: '/terms/' }} />;
}
