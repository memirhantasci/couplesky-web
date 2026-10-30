'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ShieldCheck, ArrowLeft, Mail } from 'lucide-react';

export default function PrivacyPage() {
  const [lang, setLang] = useState<'tr' | 'en'>('tr');
  const isTr = lang === 'tr';

  return (
    <div className="min-h-screen bg-cosmic-950 text-white selection:bg-roseGold/20 selection:text-roseGold">
      <Navbar lang={lang} onToggleLang={() => setLang(isTr ? 'en' : 'tr')} />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-white/50 hover:text-roseGold transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isTr ? 'Ana Sayfaya Dön' : 'Back to Home'}</span>
        </Link>

        {/* Header */}
        <div className="space-y-4 pb-8 border-b border-white/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{isTr ? 'KVKK & GDPR Uyumlu' : 'GDPR & Privacy Shield Compliant'}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            {isTr ? 'Gizlilik Politikası' : 'Privacy Policy'}
          </h1>
          <p className="text-sm text-white/60">
            {isTr
              ? 'Son Güncelleme: Ekim 2026 · CoupleSky Mobile & Web'
              : 'Last Updated: October 2026 · CoupleSky Mobile & Web'}
          </p>
        </div>

        {/* Content */}
        <div className="pt-8 space-y-8 text-sm sm:text-base text-white/80 leading-relaxed">
          {isTr ? (
            <>
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">1. GİRİŞ VE TAAHHÜDÜMÜZ</h2>
                <p>
                  CoupleSky (&ldquo;Uygulama&rdquo;, &ldquo;Biz&rdquo; veya &ldquo;Veri Sorumlusu&rdquo;), çiftler arasındaki en özel anları, mektupları, anı fotoğraflarını ve ortak günlükleri güvenli bir dijital alanda paylaşmaları için tasarlanmıştır. Bu sebeple kullanıcı gizliliği en temel önceliğimizdir. Bilgileriniz asla üçüncü şahıslara satılmaz, pazarlama veya reklam veritabanlarına devredilmez.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">2. TOPLANAN BİLGİLER VE KULLANIM ALANLARI</h2>
                <p>Uygulamamızı kullanırken aşağıdaki kategorilerde verileriniz işlenmektedir:</p>
                <ul className="list-disc pl-5 space-y-2 text-white/70">
                  <li><strong>Hesap Bilgileri:</strong> Kayıt sırasında belirttiğiniz ad-soyad, kullanıcı adı, e-posta adresi ve şifreniz (kriptografik tuzlanmış hash olarak).</li>
                  <li><strong>İlişki ve Anı İçeriği:</strong> Eklediğiniz fotoğraflar, anı açıklamaları, zaman kilitli mektuplar, ruh hali (mood) seçimleri ve takvim notları. Bu içerikler yalnızca siz ve eşleştiğiniz partneriniz tarafından görüntülenebilir.</li>
                  <li><strong>Döngü ve Sağlık Verileri:</strong> Kadın kullanıcıların ve çiftlerinin takip ettiği döngü/regl tarihleri ve günlük vitamin/ilaç saatleri. Yalnızca hatırlatma sağlamak ve partner empati senkronizasyonu amacıyla işlenir.</li>
                  <li><strong>Lokasyon (Konum) Bilgileri:</strong> Yalnızca buluşma noktası seçimi veya bir anıya harita pini eklediğinizde anlık olarak alınır. Sürekli arka plan konum takibi kesinlikle yapılmaz.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">3. GÜVENLİK VE KRİPTOGRAFİK ŞİFRELEME (AES-256)</h2>
                <p>
                  Tüm ağ trafiği TLS/SSL protokolleri üzerinden şifrelenir. Özel mektuplar ve günlük notları veritabanında AES-256 simetrik şifreleme ile saklanır. Veritabanı erişimi, Supabase Row-Level Security (RLS) politikaları ile yalnızca oturum açmış ilgili çifte aittir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">4. VERİLERİN ÜÇÜNCÜ TARAFLARLA PAYLAŞIMI</h2>
                <p>
                  Verileriniz asla reklam amacıyla üçüncü taraflarla paylaşılmaz veya satılmaz. Hizmetin teknik olarak sunulabilmesi adına yalnızca aşağıdaki altyapı sağlayıcıları kullanılmaktadır:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-white/70">
                  <li><strong>Supabase Inc.:</strong> Güvenli PostgreSQL veritabanı ve şifreli dosya depolama.</li>
                  <li><strong>RevenueCat Inc.:</strong> Uygulama içi satın alım ve abonelik haklarının doğrulanması.</li>
                  <li><strong>Expo & Google Firebase:</strong> Anlık push bildirimlerinin cihazınıza iletilmesi.</li>
                  <li><strong>Apple & Google:</strong> Giriş yapma ve uygulama içi mağaza altyapıları.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">5. HESAP SİLME VE VERİLERİN İMHASI (UNUTULMA HAKKI)</h2>
                <p>
                  Hesabınızı dilediğiniz an mobil uygulama içerisindeki <strong>Profil &gt; Hesap Yönetimi &gt; Hesabımı Sil</strong> bölümünden silebilirsiniz. Talep 7 gün beklemeye alınır; bu süre içinde aynı hesapla giriş yaparak talebi iptal edebilirsiniz. 7 gün sonunda hesabınıza ait profil bilgileri, fotoğraflar, mektuplar ve veriler sunuculardan kalıcı ve geri getirilemez biçimde silinir.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">6. İLETİŞİM VE VERİ SORUMLUSU</h2>
                <p>
                  Gizlilik politikamız ile ilgili her türlü soru, talep ve KVKK/GDPR haklarınız için bizimle doğrudan iletişime geçebilirsiniz:
                </p>
                <div className="p-4 rounded-xl glass-panel border border-white/10 space-y-1">
                  <p><strong>Veri Sorumlusu:</strong> CoupleSky</p>
                  <p><strong>E-posta (Global):</strong> <a href="mailto:support@couplesky.app" className="text-roseGold underline">support@couplesky.app</a></p>
                  <p><strong>E-posta (Türkiye Destek):</strong> <a href="mailto:destek@couplesky.app" className="text-roseGold underline">destek@couplesky.app</a></p>
                </div>
              </section>
            </>
          ) : (
            <>
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">1. INTRODUCTION & OUR PLEDGE</h2>
                <p>
                  CoupleSky (&ldquo;App&rdquo;, &ldquo;We&rdquo;, or &ldquo;Data Controller&rdquo;) is designed to allow partners to cherish their most intimate moments, time-capsule letters, private journals, and memories within an encrypted sanctuary. User privacy is our foremost founding principle. Your personal data is never sold to third parties or traded with advertising brokers.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">2. INFORMATION WE COLLECT & SCOPE</h2>
                <p>We process the following categories of data strictly to fulfill our core services:</p>
                <ul className="list-disc pl-5 space-y-2 text-white/70">
                  <li><strong>Account Credentials:</strong> Full name, username, email address, and cryptographically salted password hashes.</li>
                  <li><strong>Couple & Relationship Content:</strong> Photos, journal entries, time-locked sealed letters, mood selections, and calendar notes. This content is solely accessible by you and your paired partner.</li>
                  <li><strong>Cycle & Health Logs:</strong> Menstrual cycle start dates and medication hours. Used solely to deliver reminders and shared couple empathy insights.</li>
                  <li><strong>Location Data:</strong> Acquired only when you explicitly select a meeting point on the map or tag a memory pin. Continuous background location tracking is never performed.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">3. SECURITY & CRYPTOGRAPHIC ENCRYPTION (AES-256)</h2>
                <p>
                  All network communications are guarded by TLS/SSL encryption. Private letters and sensitive journals are encrypted with AES-256 standards. Database access is strictly governed by Supabase Row-Level Security (RLS) policies scoped exclusively to authenticated members of each couple.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">4. THIRD-PARTY INFRASTRUCTURE</h2>
                <p>
                  We partner strictly with vetted enterprise infrastructure providers necessary to run the application:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-white/70">
                  <li><strong>Supabase Inc.:</strong> Encrypted cloud storage and secure PostgreSQL database.</li>
                  <li><strong>RevenueCat Inc.:</strong> In-app purchase validation and subscription status.</li>
                  <li><strong>Google Firebase & Expo Notifications:</strong> Reliable push notification delivery.</li>
                  <li><strong>Apple & Google:</strong> Store hosting and OAuth identity services.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">5. DATA DELETION & RIGHT TO BE FORGOTTEN</h2>
                <p>
                  You can permanently delete your account anytime from <strong>Profile &gt; Account Management &gt; Delete Account</strong>. A 7-day safety grace period applies. After 7 days, all profile records, private letters, photos, and files are permanently and irreversibly purged from our production servers.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">6. CONTACT & DATA PROTECTION INQUIRIES</h2>
                <p>For any questions regarding privacy or to exercise your GDPR statutory rights, contact us directly:</p>
                <div className="p-4 rounded-xl glass-panel border border-white/10 space-y-1">
                  <p><strong>Data Controller:</strong> CoupleSky</p>
                  <p><strong>Email:</strong> <a href="mailto:support@couplesky.app" className="text-roseGold underline">support@couplesky.app</a></p>
                </div>
              </section>
            </>
          )}
        </div>
      </main>

      <Footer lang={lang} />
    </div>
  );
}
