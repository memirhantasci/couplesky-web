'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CheckCircle2, ArrowLeft } from 'lucide-react';

export default function ConsentPage() {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Açık Rıza & Onay</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            {isTr ? 'Açık Rıza Metni' : 'Explicit Consent Declaration'}
          </h1>
          <p className="text-sm text-white/60">
            {isTr ? '6698 Sayılı KVKK ve GDPR Kapsamında Bilgilendirme' : 'Compliant with statutory consent guidelines'}
          </p>
        </div>

        <div className="pt-8 space-y-8 text-sm sm:text-base text-white/80 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. AÇIK RIZA BEYANI</h2>
            <p>
              CoupleSky uygulamasında sunulan isteğe bağlı fonksiyonların (örneğin döngü/sağlık takibi, konum tabanlı anı pini ve bildirim hizmetleri) yürütülmesi için açık rızanız talep edilmektedir.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. RIZA VERİLEN HUSUSLAR</h2>
            <ul className="list-disc pl-5 space-y-2 text-white/70">
              <li><strong>Özel Nitelikli Sağlık Verileri:</strong> Döngü başlangıç/tahmin tarihleri, ilaç saatleri ve döngü belirtilerinin partnerinizle senkronize biçimde işlenmesi ve hatırlatma bildirimleri gönderilmesi.</li>
              <li><strong>Konum Bilgileri:</strong> Anılara ve buluşma planlarına eklenen GPS koordinatlarının harita üzerinde görselleştirilmesi.</li>
              <li><strong>Yurtdışı Veri Aktarımı:</strong> Veritabanı ve bildirim altyapılarının (Supabase, Firebase, RevenueCat) uluslararası sunucularında AES-256 şifreli olarak barındırılması.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. RIZANIN GERİ ALINMASI</h2>
            <p>
              Verdiğiniz açık rızayı dilediğiniz zaman uygulama içerisindeki Ayarlar bölümünden ilgili özellikleri devre dışı bırakarak veya hesabınızı silerek geri alabilirsiniz. Rızanın geri alınması, o tarihe kadar yapılan işlemlerin hukuka uygunluğunu etkilemez.
            </p>
          </section>
        </div>
      </main>

      <Footer lang={lang} />
    </div>
  );
}
