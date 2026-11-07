'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import {
  Trash2,
  AlertTriangle,
  Clock,
  Mail,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  ArrowLeft,
  Smartphone,
  ExternalLink,
} from 'lucide-react';

export default function DeleteAccountPage() {
  const [lang, setLang] = useState<'tr' | 'en'>('tr');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col antialiased selection:bg-rose-500 selection:text-white">
      <Navbar lang={lang} onToggleLang={() => setLang(lang === 'tr' ? 'en' : 'tr')} />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        {/* Navigation & Language Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {lang === 'tr' ? 'Ana Sayfaya Dön' : 'Back to Home'}
          </Link>

          <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 p-1 rounded-xl">
            <button
              onClick={() => setLang('tr')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                lang === 'tr'
                  ? 'bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Türkçe
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                lang === 'en'
                  ? 'bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              English
            </button>
          </div>
        </div>

        {/* Header */}
        <div className="rounded-3xl border border-rose-500/20 bg-gradient-to-b from-rose-950/20 via-slate-900/60 to-slate-900/40 p-8 sm:p-10 mb-8 backdrop-blur-xl">
          <div className="w-14 h-14 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-6 shadow-inner">
            <Trash2 className="w-7 h-7" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            {lang === 'tr' ? 'Hesap ve Veri Silme Talebi' : 'Account & Data Deletion Request'}
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
            {lang === 'tr'
              ? 'CoupleSky hesabınızı ve uygulamanızla ilişkili tüm kişisel verilerinizi kalıcı olarak nasıl silebileceğinizi aşağıda bulabilirsiniz.'
              : 'Learn how to permanently delete your CoupleSky account and all associated personal data below.'}
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {/* Method 1: In-App Deletion */}
          <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                  {lang === 'tr' ? '1. Yöntem (Önerilen)' : 'Method 1 (Recommended)'}
                </span>
                <h2 className="text-xl font-bold text-white">
                  {lang === 'tr' ? 'Uygulama İçinden Hesap Silme' : 'Delete Account From Inside the App'}
                </h2>
              </div>
            </div>

            <p className="text-slate-300 mb-4 leading-relaxed">
              {lang === 'tr'
                ? 'Hesabınızı ve verilerinizi silmenin en hızlı yolu mobil uygulamamızı kullanmaktır:'
                : 'The quickest way to delete your account and personal data is directly within our mobile app:'}
            </p>

            <ol className="space-y-3 list-decimal list-inside text-slate-300 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
              <li>
                <span className="font-semibold text-white">
                  {lang === 'tr' ? 'CoupleSky uygulamasını açın' : 'Open CoupleSky app'}
                </span>
              </li>
              <li>
                <span className="font-semibold text-white">
                  {lang === 'tr' ? 'Profil / Ayarlar sekmesine gidin' : 'Navigate to Profile / Settings'}
                </span>
              </li>
              <li>
                <span className="font-semibold text-white">
                  {lang === 'tr' ? 'Sayfanın en altındaki "Tehlikeli Bölge" alanına inin' : 'Scroll down to the "Danger Zone" section'}
                </span>
              </li>
              <li>
                <span className="font-semibold text-white">
                  {lang === 'tr' ? '"Hesabı Sil" seçeneğine dokunun ve onaylayın' : 'Tap "Delete Account" and confirm'}
                </span>
              </li>
            </ol>
          </section>

          {/* Grace Period Info */}
          <section className="rounded-2xl border border-amber-500/20 bg-amber-950/10 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-amber-300 mb-2">
                  {lang === 'tr' ? '7 Günlük Cayma & Hatırlatma Süresi' : '7-Day Cooling-off & Reminder Period'}
                </h3>
                <p className="text-slate-300 leading-relaxed mb-3">
                  {lang === 'tr'
                    ? 'Silme talebi verildiğinde hesabınız derhal dondurulur ve çift alanından ayrılırsınız. Fikrinizi değiştirme ihtimaline karşı 7 günlük bir bekleme süresi tanınır. Bu süre içinde uygulamaya tekrar giriş yaparsanız silme talebi otomatik olarak iptal edilir.'
                    : 'Once requested, your account is immediately frozen and unlinked from the couple space. A 7-day grace period is provided in case you change your mind. Logging back in during this time automatically cancels the deletion request.'}
                </p>
                <p className="text-slate-300 leading-relaxed text-sm bg-amber-900/20 border border-amber-700/30 p-3 rounded-lg">
                  {lang === 'tr'
                    ? '🔔 Silme gününe 3 gün ve 1 gün kala, vazgeçebilmeniz için uygulama bildirimiyle hatırlatma gönderilir.'
                    : '🔔 A reminder notification is sent 3 days and 1 day before the scheduled deletion day so you can still cancel.'}
                </p>
              </div>
            </div>
          </section>

          {/* Method 2: Web / Email Request */}
          <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-rose-400">
                  {lang === 'tr' ? '2. Yöntem (Uygulamaya Erişemiyorsanız)' : 'Method 2 (If you cannot access the app)'}
                </span>
                <h2 className="text-xl font-bold text-white">
                  {lang === 'tr' ? 'E-posta ile Talep Gönderin' : 'Request Deletion via Email'}
                </h2>
              </div>
            </div>

            <p className="text-slate-300 mb-4 leading-relaxed">
              {lang === 'tr'
                ? 'Uygulamayı sildiyseniz veya cihazınıza erişemiyorsanız, CoupleSky hesabınıza kayıtlı e-posta adresinizden destek ekibimize talep iletebilirsiniz:'
                : 'If you have uninstalled the app or lost device access, send a request from your registered email address to our support team:'}
            </p>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs text-slate-400 uppercase font-semibold">
                  {lang === 'tr' ? 'Destek E-postası' : 'Support Email'}
                </p>
                <a
                  href="mailto:destek@couplesky.app?subject=Hesap%20Silme%20Talebi"
                  className="text-rose-400 font-mono text-base hover:underline"
                >
                  destek@couplesky.app
                </a>
              </div>
              <a
                href="mailto:destek@couplesky.app?subject=Hesap%20Silme%20Talebi"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-rose-500 to-amber-500 text-white font-medium px-5 py-2.5 rounded-xl shadow hover:opacity-90 transition-opacity text-sm"
              >
                <Mail className="w-4 h-4" />
                {lang === 'tr' ? 'Talep Gönder' : 'Send Email'}
              </a>
            </div>
            <p className="text-xs text-slate-400 mt-3">
              {lang === 'tr'
                ? '* Güvenliğiniz için silme talebi yalnızca CoupleSky hesabınızla eşleşen e-posta adresinden yapıldığında işleme alınır.'
                : '* For security reasons, deletion requests are only processed when sent from the email registered with your CoupleSky account.'}
            </p>
          </section>

          {/* What is deleted vs kept */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-rose-500/20 bg-rose-950/10 p-6">
              <div className="flex items-center gap-2 text-rose-400 font-bold mb-4">
                <CheckCircle2 className="w-5 h-5" />
                <h3>{lang === 'tr' ? 'Kalıcı Olarak Silinen Veriler' : 'Data Permanently Deleted'}</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 shrink-0">•</span>
                  <span>{lang === 'tr' ? 'Ad, e-posta, şifre ve profil fotoğrafı' : 'Name, email, password and profile photo'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 shrink-0">•</span>
                  <span>{lang === 'tr' ? 'Partner eşleşme bağlantısı ve bildirim tokenları' : 'Partner connection and push notification tokens'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 shrink-0">•</span>
                  <span>{lang === 'tr' ? 'Şifrelenmiş mektuplarınız ve aşk kapsülü içerikleri' : 'Encrypted letters and love capsule messages'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 shrink-0">•</span>
                  <span>{lang === 'tr' ? 'Döngü ve sağlık takibi kayıtlarınız' : 'Menstrual cycle and health tracking records'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 shrink-0">•</span>
                  <span>{lang === 'tr' ? 'Yüklediğiniz tüm medya ve anı albümü fotoğrafları' : 'All uploaded media and memory album photos'}</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6">
              <div className="flex items-center gap-2 text-slate-400 font-bold mb-4">
                <ShieldCheck className="w-5 h-5 text-indigo-400" />
                <h3>{lang === 'tr' ? 'Mevzuat Gereği Saklanan Veriler' : 'Data Retained for Legal Compliance'}</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 shrink-0">•</span>
                  <span>
                    {lang === 'tr'
                      ? '5651 sayılı kanun gereği tutulması zorunlu olan sistem erişim ve silme talep logları (yasal süre sonunda imha edilir).'
                      : 'System access logs and deletion request receipts required by telecommunications laws (retained for statutory periods then destroyed).'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 shrink-0">•</span>
                  <span>
                    {lang === 'tr'
                      ? 'Mali ve vergi mevzuatı gereği saklanması gereken fatura / satın alma işlem kayıtları.'
                      : 'Billing and invoice records required by tax regulations.'}
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Subscriptions Warning */}
          <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-sm text-slate-300 leading-relaxed">
                <strong className="text-white">
                  {lang === 'tr' ? 'Mağaza Abonelikleri Hakkında Hatırlatma: ' : 'Reminder Regarding Store Subscriptions: '}
                </strong>
                {lang === 'tr'
                  ? 'CoupleSky hesabınızı silmek, Apple App Store veya Google Play Store üzerinden başlattığınız ücretli abonelikleri otomatik olarak iptal etmez. Aboneliğinizi cihazınızın mağaza ayarlarından iptal etmeniz gerekmektedir.'
                  : 'Deleting your CoupleSky account does not automatically cancel active paid subscriptions via Apple App Store or Google Play Store. You must cancel them from your device store settings.'}
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer lang={lang} />
    </div>
  );
}

