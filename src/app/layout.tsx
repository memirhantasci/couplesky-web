import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CoupleSky — İkinize Özel Bir Gökyüzü | Private Universe for Couples',
  description:
    'Zaman kilitli mektuplar, anı haritası, gökyüzünde ortak bir yıldız ve paylaşılan özel anlar. CoupleSky ile aşkınızı ölümsüzleştirin. iOS ve Android için yayında.',
  keywords: [
    'CoupleSky',
    'çift uygulaması',
    'couples app',
    'aşk uygulaması',
    'zaman kilitli mektup',
    'anı haritası',
    'yıldız sahiplenme',
    'ilişki günlüğü',
    'relationship app',
  ],
  authors: [{ name: 'CoupleSky Team' }],
  metadataBase: new URL('https://couplesky.app'),
  alternates: {
    canonical: 'https://couplesky.app',
  },
  openGraph: {
    title: 'CoupleSky — İkinize Özel Bir Gökyüzü',
    description:
      'Zaman kilitli mektuplar, anı haritası, gökyüzünde ortak bir yıldız ve paylaşılan özel anlar.',
    url: 'https://couplesky.app',
    siteName: 'CoupleSky',
    images: [
      {
        url: '/icon.png',
        width: 1024,
        height: 1024,
        alt: 'CoupleSky App Icon',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CoupleSky — İkinize Özel Bir Gökyüzü',
    description:
      'Zaman kilitli mektuplar, anı haritası, gökyüzünde ortak bir yıldız ve paylaşılan özel anlar.',
    images: ['/icon.png'],
  },
  icons: {
    icon: '/favicon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="bg-cosmic-950 text-white min-h-screen selection:bg-roseGold/20 selection:text-roseGold">
        {children}
      </body>
    </html>
  );
}
