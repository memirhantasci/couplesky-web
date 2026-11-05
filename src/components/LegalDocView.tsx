'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import {
  getLegalDoc,
  type LegalDocType,
} from '@/constants/legalTexts';
import {
  ShieldCheck,
  FileText,
  Shield,
  CheckCircle2,
  CreditCard,
  ArrowLeft,
  Mail,
  MapPin,
  ExternalLink,
} from 'lucide-react';

interface LegalDocViewProps {
  docId: LegalDocType;
  defaultLang?: 'tr' | 'en';
}

const DOC_ICONS: Record<LegalDocType, React.ComponentType<{ className?: string }>> = {
  kvkk: Shield,
  privacy: ShieldCheck,
  terms: FileText,
  consent: CheckCircle2,
  subscription: CreditCard,
};

const DOC_ROUTES: { id: LegalDocType; href: string; labelTr: string; labelEn: string }[] = [
  { id: 'privacy', href: '/privacy', labelTr: 'Gizlilik Politikası', labelEn: 'Privacy Policy' },
  { id: 'terms', href: '/terms', labelTr: 'Kullanım Koşulları (EULA)', labelEn: 'Terms of Use' },
  { id: 'kvkk', href: '/kvkk', labelTr: 'KVKK Aydınlatma', labelEn: 'KVKK & GDPR' },
  { id: 'consent', href: '/consent', labelTr: 'Açık Rıza', labelEn: 'Explicit Consent' },
  { id: 'subscription', href: '/subscription', labelTr: 'Abonelik & İade', labelEn: 'Subscription' },
];

function isHeading(line: string): boolean {
  const trimmed = line.trim();
  const firstLine = trimmed.split('\n')[0];
  return /^\d+\.\s+[A-ZÇĞİÖŞÜ0-9 ,.'’()\-/&]+$/i.test(firstLine) && !trimmed.includes('\n');
}

/**
 * Text renderer that automatically detects emails and URLs and converts them to clickable links.
 */
function renderWithLinks(text: string): React.ReactNode[] {
  // Regex for emails and URLs
  const regex = /(https?:\/\/[^\s]+|mailto:[^\s]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    const token = match[0];
    const cleanToken = token.replace(/[.,;)]+$/, ''); // Strip trailing punctuation
    const trailing = token.slice(cleanToken.length);

    if (cleanToken.includes('@') && !cleanToken.startsWith('mailto:')) {
      parts.push(
        <a
          key={match.index}
          href={`mailto:${cleanToken}`}
          className="text-roseGold underline hover:text-white transition-colors font-medium"
        >
          {cleanToken}
        </a>
      );
    } else {
      parts.push(
        <a
          key={match.index}
          href={cleanToken}
          target="_blank"
          rel="noopener noreferrer"
          className="text-roseGold underline hover:text-white transition-colors font-medium inline-flex items-center gap-0.5"
        >
          <span>{cleanToken}</span>
          <ExternalLink className="w-3 h-3 inline-block opacity-70" />
        </a>
      );
    }

    if (trailing) {
      parts.push(trailing);
    }

    lastIndex = match.index + token.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
}

export function LegalDocView({ docId, defaultLang = 'tr' }: LegalDocViewProps) {
  const [lang, setLang] = useState<'tr' | 'en'>(defaultLang);
  const isTr = lang === 'tr';

  const doc = getLegalDoc(docId, lang);
  const IconComponent = DOC_ICONS[docId] || ShieldCheck;

  return (
    <div className="min-h-screen bg-cosmic-950 text-white selection:bg-roseGold/20 selection:text-roseGold">
      <Navbar lang={lang} onToggleLang={() => setLang(isTr ? 'en' : 'tr')} />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        {/* Breadcrumb / Back Link */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-white/50 hover:text-roseGold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{isTr ? 'Ana Sayfaya Dön' : 'Back to Home'}</span>
          </Link>

          {/* Quick Language Badge Toggle */}
          <button
            onClick={() => setLang(isTr ? 'en' : 'tr')}
            className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-all cursor-pointer"
          >
            {isTr ? 'Read in English 🇺🇸' : "Türkçe Görüntüle 🇹🇷"}
          </button>
        </div>

        {/* Legal Document Navigation Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-white/5 scrollbar-none">
          {DOC_ROUTES.map((route) => {
            const isActive = route.id === docId;
            return (
              <Link
                key={route.id}
                href={route.href}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-roseGold/15 text-roseGold border border-roseGold/40 shadow-sm shadow-roseGold/10'
                    : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {isTr ? route.labelTr : route.labelEn}
              </Link>
            );
          })}
        </div>

        {/* Hero Header */}
        <div className="space-y-4 pb-8 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-roseGold/10 border border-roseGold/20 text-roseGold text-xs font-semibold">
            <IconComponent className="w-3.5 h-3.5" />
            <span>{doc.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent">
            {doc.title}
          </h1>

          <p className="text-xs sm:text-sm text-white/50">
            {isTr ? 'Son Güncelleme: ' : 'Last Updated: '}
            <span className="text-white/80 font-medium">{doc.lastUpdated}</span>
            {' · CoupleSky Mobile & Web (couplesky.app)'}
          </p>
        </div>

        {/* Executive Summary Card */}
        {doc.summary && (
          <div className="my-8 p-6 rounded-2xl glass-panel border border-roseGold/25 bg-gradient-to-br from-roseGold/10 via-purple-950/20 to-transparent">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-roseGold/20 flex items-center justify-center text-roseGold shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-roseGold">
                  {isTr ? 'ÖZET BİLGİLENDİRME' : 'EXECUTIVE SUMMARY'}
                </h4>
                <p className="text-sm text-white/85 leading-relaxed font-normal">
                  {doc.summary}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Document Content Sections */}
        <div className="space-y-8 text-sm sm:text-base text-white/80 leading-relaxed pt-2">
          {doc.content.map((block, idx) => {
            if (isHeading(block)) {
              return (
                <div key={idx} className="pt-6 border-t border-white/5 first:border-0 first:pt-0">
                  <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-roseGold shrink-0" />
                    <span>{block}</span>
                  </h2>
                </div>
              );
            }

            // Paragraphs and bullet points
            const lines = block.split('\n');
            const hasBullets = lines.some((l) => l.trim().startsWith('• ') || l.trim().startsWith('- '));

            if (hasBullets) {
              const leadText = lines[0].startsWith('• ') || lines[0].startsWith('- ') ? null : lines[0];
              const bulletLines = leadText ? lines.slice(1) : lines;

              return (
                <div key={idx} className="space-y-3">
                  {leadText && <p>{renderWithLinks(leadText)}</p>}
                  <ul className="space-y-2.5 pl-1">
                    {bulletLines
                      .filter((l) => l.trim().length > 0)
                      .map((bullet, bIdx) => {
                        const cleanBullet = bullet.trim().replace(/^[•\-]\s*/, '');
                        return (
                          <li key={bIdx} className="flex items-start gap-2.5 text-white/75 text-sm sm:text-[15px] leading-relaxed">
                            <span className="text-roseGold font-bold mt-1 shrink-0 text-xs">◆</span>
                            <div>{renderWithLinks(cleanBullet)}</div>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              );
            }

            return (
              <div key={idx} className="space-y-2">
                {lines.map((line, lineIdx) => (
                  <p key={lineIdx} className="text-white/80 text-sm sm:text-[15px] leading-relaxed">
                    {renderWithLinks(line)}
                  </p>
                ))}
              </div>
            );
          })}
        </div>

        {/* Official Controller & Contact Card */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 space-y-4 bg-gradient-to-b from-white/[0.03] to-transparent">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Mail className="w-4 h-4 text-roseGold" />
            <span>{isTr ? 'Resmi Tebligat & Veri Sorumlusu İletişim' : 'Official Data Controller Contact'}</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-white/70">
            <div className="space-y-1">
              <p className="font-semibold text-white/90">
                {isTr ? 'Veri Sorumlusu:' : 'Data Controller:'}
              </p>
              <p>Necati Taşcı (CoupleSky)</p>
              <p className="text-white/50 text-xs">CoupleSky Mobile & Web Services</p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-white/90">
                {isTr ? 'İletişim & Destek:' : 'Support Inquiries:'}
              </p>
              <p>
                <a href="mailto:destek@couplesky.app" className="text-roseGold underline">
                  destek@couplesky.app
                </a>{' '}
                / {' '}
                <a href="mailto:support@couplesky.app" className="text-roseGold underline">
                  support@couplesky.app
                </a>
              </p>
              <p className="flex items-center gap-1 text-white/60 text-xs">
                <MapPin className="w-3.5 h-3.5 text-roseGold shrink-0" />
                <span>Küçükbakkalköy Mah. Sümer Sok. No:8, Ataşehir / İstanbul</span>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer lang={lang} />
    </div>
  );
}
