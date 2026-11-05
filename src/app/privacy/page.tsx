import type { Metadata } from 'next';
import { LegalDocView } from '@/components/LegalDocView';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası — CoupleSky | Privacy Policy & Data Security',
  description:
    'CoupleSky gizlilik politikası: verilerinizin AES-256 ile korunması, şifrelenmiş mektuplar, döngü takibi ve gizlilik prensiplerimiz.',
  alternates: {
    canonical: 'https://couplesky.app/privacy',
  },
};

export default function PrivacyPage() {
  return <LegalDocView docId="privacy" />;
}
