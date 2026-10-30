import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Instagram, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  lang: 'tr' | 'en';
}

export function Footer({ lang }: FooterProps) {
  const isTr = lang === 'tr';

  return (
    <footer className="relative bg-cosmic-950 border-t border-white/5 pt-16 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-roseGold/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl overflow-hidden ring-1 ring-white/10 shadow-lg">
                <Image
                  src="/icon.png"
                  alt="CoupleSky"
                  width={36}
                  height={36}
                  className="object-cover"
                />
              </div>
              <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-white via-roseGold-light to-roseGold bg-clip-text text-transparent">
                CoupleSky
              </span>
            </Link>
            <p className="text-sm text-white/60 max-w-sm leading-relaxed">
              {isTr
                ? 'İki kişilik özel dijital sığınak. Zaman kilitli mektuplar, buluşma anı haritası ve gökyüzünde ikinize ait parlayan bir yıldız.'
                : 'A sacred digital sanctuary designed exclusively for couples. Time-capsule letters, memory maps, and your very own star in the celestial skies.'}
            </p>
            <div className="flex items-center gap-3 pt-2 text-white/50 text-xs">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                {isTr ? 'AES-256 Şifreli Gizlilik' : 'AES-256 Encrypted'}
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/5">
                <Heart className="w-3.5 h-3.5 text-roseGold" />
                {isTr ? 'Tek Üyelik / İki Partner' : 'One Sub / Both Partners'}
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">
              {isTr ? 'Uygulama' : 'Product'}
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#features" className="hover:text-roseGold transition-colors">
                  {isTr ? 'Özellikler' : 'Features'}
                </a>
              </li>
              <li>
                <a href="#star" className="hover:text-roseGold transition-colors">
                  {isTr ? 'Bizim Yıldızımız' : 'Our Star'}
                </a>
              </li>
              <li>
                <a href="#letters" className="hover:text-roseGold transition-colors">
                  {isTr ? 'Mühürlü Mektuplar' : 'Time Capsules'}
                </a>
              </li>
              <li>
                <a href="#map" className="hover:text-roseGold transition-colors">
                  {isTr ? 'Aşk Haritası' : 'Love Map'}
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-roseGold transition-colors">
                  {isTr ? 'İndir' : 'Download'}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">
              {isTr ? 'Yasal & Güvenlik' : 'Legal & Trust'}
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/privacy" className="hover:text-roseGold transition-colors">
                  {isTr ? 'Gizlilik Politikası' : 'Privacy Policy'}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-roseGold transition-colors">
                  {isTr ? 'Kullanım Koşulları (EULA)' : 'Terms of Use (EULA)'}
                </Link>
              </li>
              <li>
                <Link href="/kvkk" className="hover:text-roseGold transition-colors">
                  {isTr ? 'KVKK Aydınlatma Metni' : 'KVKK & GDPR Rights'}
                </Link>
              </li>
              <li>
                <Link href="/consent" className="hover:text-roseGold transition-colors">
                  {isTr ? 'Açık Rıza Metni' : 'Explicit Consent'}
                </Link>
              </li>
              <li>
                <Link href="/subscription" className="hover:text-roseGold transition-colors">
                  {isTr ? 'Abonelik & İade Koşulları' : 'Subscription & Refunds'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">
              {isTr ? 'İletişim & Destek' : 'Support & Socials'}
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/support" className="hover:text-roseGold transition-colors">
                  {isTr ? 'Destek Merkezi' : 'Help & Support'}
                </Link>
              </li>
              <li>
                <a
                  href="mailto:support@couplesky.app"
                  className="flex items-center gap-1.5 hover:text-roseGold transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-roseGold" />
                  <span>support@couplesky.app</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/coupleskyapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-roseGold transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-aurora-pink" />
                  <span>@coupleskyapp</span>
                </a>
              </li>
              <li>
                <a
                  href="https://tiktok.com/@coupleskyapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-roseGold transition-colors"
                >
                  <span className="text-xs font-bold text-cyan-400">TikTok</span>
                  <span>@coupleskyapp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Rights Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} CoupleSky. {isTr ? 'Tüm hakları saklıdır.' : 'All rights reserved.'}</p>
          <p className="flex items-center gap-1">
            <span>{isTr ? 'Dünyanın dört bir yanındaki çiftler için' : 'Crafted with'}</span>
            <span className="text-roseGold">♥</span>
            <span>{isTr ? 'ile tasarlandı.' : 'for couples worldwide.'}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
