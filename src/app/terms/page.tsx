'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FileText, ArrowLeft } from 'lucide-react';

export default function TermsPage() {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-roseGold/10 border border-roseGold/20 text-roseGold text-xs font-semibold">
            <FileText className="w-3.5 h-3.5" />
            <span>{isTr ? 'Kullanıcı Sözleşmesi' : 'End User License Agreement (EULA)'}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            {isTr ? 'Kullanım Koşulları (EULA)' : 'Terms of Service (EULA)'}
          </h1>
          <p className="text-sm text-white/60">
            {isTr
              ? 'Son Güncelleme: Ekim 2026 · Apple App Store & Google Play Uyumlu'
              : 'Last Updated: October 2026 · Apple & Google Play Compliant'}
          </p>
        </div>

        {/* Content */}
        <div className="pt-8 space-y-8 text-sm sm:text-base text-white/80 leading-relaxed">
          {isTr ? (
            <>
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">1. SÖZLEŞMENİN KABULÜ</h2>
                <p>
                  CoupleSky mobil uygulamasını indirerek, hesap oluşturarak veya kullanarak işbu Kullanım Koşulları&rsquo;nı (&ldquo;Sözleşme&rdquo;) kabul etmiş sayılırsınız. Bu koşulları kabul etmiyorsanız lütfen uygulamayı kullanmayınız.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">2. HİZMETİN KAPSAMI VE ÇİFT EŞLEŞMESİ</h2>
                <p>
                  CoupleSky, iki kullanıcının özel bir kod (&ldquo;Eşleşme Kodu&rdquo;) veya davet bağlantısı aracılığıyla birbirine bağlanarak ortak anı, takvim, fotoğraf arşivi, döngü takibi ve zaman kilitli mektuplar paylaşmasını sağlayan bir platformdur. Eşleşme kodunuzu yalnızca güvendiğiniz partnerinizle paylaşmalısınız.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">3. HESAP GÜVENLİĞİ VE ŞİFRELER</h2>
                <p>
                  Kullanıcı, hesap şifresinin ve erişim cihazının gizliliğini korumaktan bizzat sorumludur. Hesabınız altında gerçekleşen tüm faaliyetler sizin sorumluluğunuzdadır. Yetkisiz bir giriş fark ettiğinizde derhal şifrenizi sıfırlamalı veya bizimle iletişime geçmelisiniz.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">4. KABUL EDİLEMEZ KULLANIM VE YASAKLI İÇERİKLER</h2>
                <p>Uygulamayı kullanırken aşağıdaki eylemlerde bulunmak kesinlikle yasaktır:</p>
                <ul className="list-disc pl-5 space-y-1 text-white/70">
                  <li>Yasadışı, tehditkar, taciz edici, hakaret içeren veya üçüncü şahısların mahremiyetini ihlal eden içerik yüklemek,</li>
                  <li>Telif hakkı veya fikri mülkiyet haklarını ihlal eden materyalleri paylaşmak,</li>
                  <li>Uygulamanın güvenliğini aşmaya çalışmak, tersine mühendislik yapmak veya otomatik bot/veri madenciliği çalıştırmak.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">5. PREMIUM ABONELİK VE ÖDEME KOŞULLARI</h2>
                <p>
                  CoupleSky Premium, çiftlerden birinin abone olması halinde her iki partner için de geçerli olan ortak bir abonelik modelidir.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-white/70">
                  <li>Abonelikler Apple iTunes / Google Play hesabı üzerinden tahsil edilir.</li>
                  <li>Abonelik, geçerli dönemin bitiminden en az 24 saat önce iptal edilmediği sürece otomatik olarak yenilenir.</li>
                  <li>Aboneliğinizi dilediğiniz an cihazınızın Mağaza Ayarları &gt; Abonelikler bölümünden iptal edebilirsiniz.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">6. SORUMLULUK SINIRLAMASI VE DESTEK</h2>
                <p>
                  CoupleSky &ldquo;olduğu gibi&rdquo; (as is) ve &ldquo;mevcut olduğu ölçüde&rdquo; sunulmaktadır. Sorularınız veya destek talepleriniz için <a href="mailto:support@couplesky.app" className="text-roseGold underline">support@couplesky.app</a> adresinden bize ulaşabilirsiniz.
                </p>
              </section>
            </>
          ) : (
            <>
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">1. ACCEPTANCE OF TERMS</h2>
                <p>
                  By downloading, installing, registering, or using CoupleSky, you agree to be bound by these Terms of Use (&ldquo;Agreement&rdquo;). If you do not accept all terms contained herein, do not use the application.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">2. SCOPE OF SERVICES & PAIRING</h2>
                <p>
                  CoupleSky provides a private platform enabling two partners to connect via a unique pairing code to share memories, calendars, photographs, health tracking, and time-capsule letters. You must only share your pairing code with your trusted partner.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">3. ACCOUNT SECURITY</h2>
                <p>
                  You are solely responsible for maintaining the confidentiality of your login credentials and for all activities occurring under your account. You must promptly notify us of any security compromise.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">4. PROHIBITED CONDUCT</h2>
                <p>You agree not to upload unlawful, harassing, defamatory, or privacy-infringing content, nor attempt to reverse engineer or breach the application security mechanisms.</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">5. PREMIUM SUBSCRIPTION TERMS</h2>
                <p>
                  CoupleSky Premium operates on a shared subscription model: when one partner subscribes, both partners unlock all Premium features instantly.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-white/70">
                  <li>Payment will be charged to your Apple ID / Google Play account at confirmation of purchase.</li>
                  <li>Subscription automatically renews unless canceled at least 24 hours before the end of the current billing cycle.</li>
                  <li>You may manage and cancel subscriptions anytime in your device Account Settings.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">6. CONTACT & SUPPORT</h2>
                <p>
                  Inquiries concerning these Terms can be addressed directly to <a href="mailto:support@couplesky.app" className="text-roseGold underline">support@couplesky.app</a>.
                </p>
              </section>
            </>
          )}
        </div>
      </main>

      <Footer lang={lang} />
    </div>
  );
}
