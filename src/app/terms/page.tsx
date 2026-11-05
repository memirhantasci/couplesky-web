import type { Metadata } from 'next';
import { LegalDocView } from '@/components/LegalDocView';

export const metadata: Metadata = {
  title: 'Kullanım Koşulları (EULA) — CoupleSky | Terms of Service',
  description:
    'CoupleSky mobil uygulaması kullanıcı sözleşmesi, EULA lisans şartları, hesap güvenliği ve hizmet kuralları.',
  alternates: {
    canonical: 'https://couplesky.app/terms',
  },
};

export default function TermsPage() {
  return <LegalDocView docId="terms" />;
}
