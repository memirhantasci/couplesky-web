'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CreditCard, ArrowLeft, RefreshCw, Check } from 'lucide-react';

export default function SubscriptionPage() {
  const [lang, setLang] = useState<'tr' | 'en'>('tr');
  const isTr = lang === 'tr';

  return (
    <div className="min-h-screen bg-cosmic-950 text-white selection:bg-roseGold/20 selection:text-roseGold">
      <Navbar lang={lang} onToggleLang={() => setLang(isTr ? 'en' : 'tr')} />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-white/50 hover:text-roseGold transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isTr ? 'Ana Sayfaya Dön' : 'Back to Home'}</span>
        </Link>

        <div className="space-y-4 pb-8 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
            <CreditCard className="w-3.5 h-3.5" />
            <span>Apple 3.1.2 & Google Play Uyumlu</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            {isTr ? 'Abonelik ve İade Koşulları' : 'Subscription & Refund Policy'}
          </h1>
          <p className="text-sm text-white/60">
            {isTr ? 'Şeffaf fiyatlandırma, ortak çift aboneliği ve iptal prosedürleri.' : 'Transparent pricing, shared couple model, and cancellation rules.'}
          </p>
        </div>

        <div className="pt-8 space-y-8 text-sm sm:text-base text-white/80 leading-relaxed">
          {/* Highlight Card */}
          <div className="p-6 rounded-2xl glass-panel border border-roseGold/30 bg-gradient-to-br from-roseGold/10 to-transparent space-y-2">
            <h3 className="font-bold text-lg text-white flex items-center gap-2">
              <span className="text-roseGold">★</span>
              {isTr ? 'Tek Abonelik, İki Partner!' : 'One Subscription, Both Partners!'}
            </h3>
            <p className="text-sm text-white/70">
              {isTr
                ? 'CoupleSky Premium çiftler için özel tasarlandı: Partnerlerden biri Premium abone olduğunda, eşleşen diğer partner hiçbir ek ücret ödemeden tüm Premium özelliklerden anında yararlanır.'
                : 'When one partner purchases CoupleSky Premium, both accounts unlock all premium privileges immediately at no additional cost.'}
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">
              {isTr ? '1. PREMIUM AYRICALIKLARI' : '1. PREMIUM PRIVILEGES'}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-white/80">
              <li className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/5">
                <Check className="w-4 h-4 text-emerald-400" />
                {isTr ? 'Sınırsız fotoğraf ve anı yükleme' : 'Unlimited photo memory uploads'}
              </li>
              <li className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/5">
                <Check className="w-4 h-4 text-emerald-400" />
                {isTr ? 'Bizim Yıldızımız uzay atlası erişimi' : 'Full access to Our Star cosmos'}
              </li>
              <li className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/5">
                <Check className="w-4 h-4 text-emerald-400" />
                {isTr ? 'Sınırsız zaman kilitli mektup yazma' : 'Unlimited time-capsule letters'}
              </li>
              <li className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/5">
                <Check className="w-4 h-4 text-emerald-400" />
                {isTr ? 'Özel kilit ekranı ve masaüstü widget’ları' : 'Exclusive lock screen widgets'}
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">
              {isTr ? '2. ABONELİK İPTAL PROSEDÜRÜ' : '2. HOW TO CANCEL'}
            </h2>
            <p>
              {isTr
                ? 'Aboneliğinizi dilediğiniz an hiçbir cezai şart olmaksızın iptal edebilirsiniz. Apple ve Google politikaları gereği iptal işlemi mobil uygulama içerisinden değil, cihazınızın mağaza hesap ayarlarından gerçekleştirilmelidir:'
                : 'You may cancel anytime. Per Apple and Google terms, cancellations must be processed via your device store settings:'}
            </p>
            <div className="space-y-2 text-sm text-white/70">
              <p><strong>• iOS (Apple App Store):</strong> iPhone Ayarlar &gt; [Apple Kimliğiniz] &gt; Abonelikler &gt; CoupleSky &gt; Aboneliği İptal Et.</p>
              <p><strong>• Android (Google Play):</strong> Google Play Store &gt; Profil Simgesi &gt; Ödemeler ve Abonelikler &gt; Abonelikler &gt; CoupleSky &gt; İptal Et.</p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">
              {isTr ? '3. İADE POLİTİKASI' : '3. REFUND POLICY'}
            </h2>
            <p>
              {isTr
                ? 'Tüm ödemeler doğrudan Apple App Store veya Google Play Store altyapısı üzerinden işlendiğinden; hatalı veya mükerrer tahsilatlara ilişkin iade talepleri doğrudan ilgili mağaza platformu (reportaproblem.apple.com veya Google Play Destek) üzerinden iletilmelidir.'
                : 'Since all transactions are processed via Apple App Store or Google Play Store billing systems, refund requests must be directed to reportaproblem.apple.com or Google Play Support.'}
            </p>
          </section>
        </div>
      </main>

      <Footer lang={lang} />
    </div>
  );
}
