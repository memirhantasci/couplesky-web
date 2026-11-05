import type { Metadata } from 'next';
import { LegalDocView } from '@/components/LegalDocView';

export const metadata: Metadata = {
  title: 'Açık Rıza Metni — CoupleSky | Explicit Consent Declaration',
  description:
    'Döngü takibi, sağlık ve konum verilerinin işlenmesine ilişkin 6698 Sayılı KVKK ve GDPR kapsamındaki açık rıza beyanı.',
  alternates: {
    canonical: 'https://couplesky.app/consent',
  },
};

export default function ConsentPage() {
  return <LegalDocView docId="consent" />;
}
