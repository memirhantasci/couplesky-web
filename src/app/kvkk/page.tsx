import type { Metadata } from 'next';
import { LegalDocView } from '@/components/LegalDocView';

export const metadata: Metadata = {
  title: 'KVKK Aydınlatma Metni — CoupleSky | 6698 Sayılı Kanun & GDPR',
  description:
    'CoupleSky 6698 Sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve GDPR uyarınca kişisel verilerin işlenmesi, saklanması ve kullanıcı hakları aydınlatma metni.',
  alternates: {
    canonical: 'https://couplesky.app/kvkk',
  },
};

export default function KvkkPage() {
  return <LegalDocView docId="kvkk" />;
}
