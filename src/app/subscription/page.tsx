import type { Metadata } from 'next';
import { LegalDocView } from '@/components/LegalDocView';

export const metadata: Metadata = {
  title: 'Abonelik ve İade Koşulları — CoupleSky | Subscription & Refund Policy',
  description:
    'CoupleSky Premium abonelik şartları, ortak çift aboneliği, otomatik yenileme, App Store ve Google Play iptal ve iade koşulları.',
  alternates: {
    canonical: 'https://couplesky.app/subscription',
  },
};

export default function SubscriptionPage() {
  return <LegalDocView docId="subscription" />;
}
