'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Shield, ArrowLeft } from 'lucide-react';

export default function KvkkPage() {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <Shield className="w-3.5 h-3.5" />
            <span>6698 Sayılı Kanun & GDPR</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            {isTr ? 'KVKK Aydınlatma Metni' : 'Personal Data Protection Clarification Text'}
          </h1>
          <p className="text-sm text-white/60">
            {isTr ? 'Son Güncelleme: Ekim 2026' : 'Last Updated: October 2026'}
          </p>
        </div>

        <div className="pt-8 space-y-8 text-sm sm:text-base text-white/80 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. VERİ SORUMLUSU</h2>
            <p>
              Veri sorumlusu: <strong>CoupleSky</strong> · İletişim: <a href="mailto:support@couplesky.app" className="text-roseGold underline">support@couplesky.app</a> · Destek: <a href="mailto:destek@couplesky.app" className="text-roseGold underline">destek@couplesky.app</a>. CoupleSky olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (&ldquo;KVKK&rdquo;) ve ilgili mevzuat uyarınca kullanıcılarımızın kişisel verilerinin güvenliğine azami hassasiyet göstermekteyiz.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. İŞLENEN KİŞİSEL VERİ KATEGORİLERİ</h2>
            <ul className="list-disc pl-5 space-y-1.5 text-white/70">
              <li><strong>Kimlik ve İletişim:</strong> Ad-soyad, kullanıcı adı, e-posta adresi, cinsiyet bilgisi.</li>
              <li><strong>Çift ve İlişki Bilgileri:</strong> Eşleşme kodu, tanışma tarihi, sevgili olma tarihi, yıldönümü.</li>
              <li><strong>Görsel Veriler:</strong> Ortak galeriye veya günlüklere yüklenen fotoğraflar ve profil avatarları.</li>
              <li><strong>Konum Bilgileri:</strong> Anılara isteğe bağlı eklenen buluşma GPS koordinatları.</li>
              <li><strong>Özel Nitelikli Veriler:</strong> Döngü ve ilaç takibi kayıtları (Açık rıza kapsamında).</li>
              <li><strong>Mesajlaşma:</strong> Zaman kilitli mektuplar ve günlük notları (AES-256 şifreli).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. KİŞİSEL VERİLERİN İŞLENME AMAÇLARI</h2>
            <p>
              Verileriniz; kullanıcı hesabı açılması, çift eşleşmesinin güvenle sağlanması, zaman kilitli mektupların saklanması, harita rotalarının sunulması, bildirimlerin iletilmesi ve bilgi güvenliği süreçlerinin yürütülmesi amaçlarıyla işlenir.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. KVKK&rsquo;NIN 11. MADDESİ KAPSAMINDAKİ HAKLARINIZ</h2>
            <p>KVKK 11. maddesi uyarınca dilediğiniz an Veri Sorumlumuza başvurarak:</p>
            <ul className="list-disc pl-5 space-y-1 text-white/70">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
              <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
              <li>Amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
              <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,</li>
              <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme,</li>
              <li>KVKK 7. maddesi uyarınca silinmesini veya yok edilmesini isteme haklarına sahipsiniz.</li>
            </ul>
            <p className="pt-2">
              Haklarınızı kullanmak için <a href="mailto:destek@couplesky.app" className="text-roseGold underline">destek@couplesky.app</a> veya <a href="mailto:support@couplesky.app" className="text-roseGold underline">support@couplesky.app</a> adresine e-posta gönderebilirsiniz.
            </p>
          </section>
        </div>
      </main>

      <Footer lang={lang} />
    </div>
  );
}
