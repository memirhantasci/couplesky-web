'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Globe, Sparkles, Download } from 'lucide-react';

interface NavbarProps {
  lang: 'tr' | 'en';
  onToggleLang: () => void;
}

export function Navbar({ lang, onToggleLang }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = {
    features: lang === 'tr' ? 'Özellikler' : 'Features',
    cosmicSky: lang === 'tr' ? 'Yıldızımız' : 'Our Star',
    security: lang === 'tr' ? 'Gizlilik' : 'Privacy',
    faq: lang === 'tr' ? 'SSS' : 'FAQ',
    support: lang === 'tr' ? 'Destek' : 'Support',
    download: lang === 'tr' ? 'Uygulamayı İndir' : 'Get CoupleSky',
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl bg-cosmic-950/70 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden ring-1 ring-white/10 group-hover:ring-roseGold/50 transition-all duration-300 shadow-lg shadow-purple-500/10">
              <Image
                src="/icon.png"
                alt="CoupleSky Logo"
                width={40}
                height={40}
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-white via-roseGold-light to-roseGold bg-clip-text text-transparent">
                CoupleSky
              </span>
              <span className="text-[10px] tracking-wider text-white/40 uppercase font-medium">
                {lang === 'tr' ? 'İkinize Özel Evren' : 'Built for Two'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            <a href="#features" className="hover:text-roseGold transition-colors">
              {t.features}
            </a>
            <a href="#star" className="hover:text-roseGold transition-colors flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              {t.cosmicSky}
            </a>
            <a href="#security" className="hover:text-roseGold transition-colors">
              {t.security}
            </a>
            <a href="#faq" className="hover:text-roseGold transition-colors">
              {t.faq}
            </a>
            <Link href="/support" className="hover:text-roseGold transition-colors">
              {t.support}
            </Link>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/5 hover:bg-white/10 text-white/80 border border-white/10 transition-all cursor-pointer"
              title={lang === 'tr' ? 'Switch to English' : "Türkçe'ye Geç"}
            >
              <Globe className="w-3.5 h-3.5 text-roseGold" />
              <span>{lang === 'tr' ? 'TR 🇹🇷' : 'EN 🇺🇸'}</span>
            </button>

            {/* Download CTA */}
            <a
              href="#download"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-roseGold-dark via-aurora-pink to-purple-600 hover:opacity-95 shadow-lg shadow-roseGold/20 hover:shadow-roseGold/30 transition-all duration-300 hover:scale-[1.02]"
            >
              <Download className="w-4 h-4" />
              <span>{t.download}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onToggleLang}
              className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/5 text-white/80 border border-white/10 mr-1"
            >
              {lang === 'tr' ? '🇹🇷' : '🇺🇸'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 text-white/80 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-white/10 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-white/80 hover:bg-white/5 hover:text-roseGold"
          >
            {t.features}
          </a>
          <a
            href="#star"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-white/80 hover:bg-white/5 hover:text-roseGold"
          >
            {t.cosmicSky}
          </a>
          <a
            href="#security"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-white/80 hover:bg-white/5 hover:text-roseGold"
          >
            {t.security}
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-white/80 hover:bg-white/5 hover:text-roseGold"
          >
            {t.faq}
          </a>
          <Link
            href="/support"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-white/80 hover:bg-white/5 hover:text-roseGold"
          >
            {t.support}
          </Link>
          <div className="pt-2">
            <a
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-roseGold-dark to-purple-600 shadow-md"
            >
              {t.download}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
