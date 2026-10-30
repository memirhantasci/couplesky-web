'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Mail, MessageSquare, ArrowLeft, Send, CheckCircle, Instagram, Sparkles, Clock } from 'lucide-react';

export default function SupportPage() {
  const [lang, setLang] = useState<'tr' | 'en'>('tr');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const isTr = lang === 'tr';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;
    // Build mailto link for direct delivery to support@couplesky.app
    const mailtoUrl = `mailto:support@couplesky.app?subject=${encodeURIComponent(
      `[CoupleSky Support] ${subject || 'Destek Talebi'}`
    )}&body=${encodeURIComponent(
      `Gönderen: ${name}\nE-posta: ${email}\n\nMesaj:\n${message}`
    )}`;
    window.location.href = mailtoUrl;
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-cosmic-950 text-white selection:bg-roseGold/20 selection:text-roseGold">
      <Navbar lang={lang} onToggleLang={() => setLang(isTr ? 'en' : 'tr')} />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-white/50 hover:text-roseGold transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isTr ? 'Ana Sayfaya Dön' : 'Back to Home'}</span>
        </Link>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-roseGold/10 border border-roseGold/20 text-roseGold text-xs font-semibold">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{isTr ? 'Canlı Destek & İletişim' : 'Support & Contact'}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            {isTr ? 'Nasıl Yardımcı Olabiliriz?' : 'How Can We Help You?'}
          </h1>
          <p className="text-sm sm:text-base text-white/60">
            {isTr
              ? 'Hesabınız, aboneliğiniz, eşleşme kodunuz veya önerileriniz için buradayız. 7/24 bize ulaşabilirsiniz.'
              : 'Have questions about pairing, subscription, or feature suggestions? Our team is always here for you.'}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl glass-panel border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-roseGold/20 flex items-center justify-center text-roseGold">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-white">{isTr ? 'Doğrudan E-posta' : 'Email Directly'}</h3>
              <p className="text-xs text-white/60">
                {isTr ? 'Tüm sorularınız için resmi destek e-posta adresimiz:' : 'Reach out directly to our official inbox:'}
              </p>
              <div className="space-y-1 pt-1">
                <a
                  href="mailto:support@couplesky.app"
                  className="block text-sm font-semibold text-roseGold hover:underline"
                >
                  support@couplesky.app
                </a>
                <a
                  href="mailto:destek@couplesky.app"
                  className="block text-sm font-semibold text-white/70 hover:underline"
                >
                  destek@couplesky.app
                </a>
              </div>
              <div className="flex items-center gap-1.5 pt-2 text-[11px] text-emerald-400">
                <Clock className="w-3.5 h-3.5" />
                <span>{isTr ? 'Ortalama yanıt süresi: < 12 saat' : 'Average response: < 12 hours'}</span>
              </div>
            </div>

            <div className="p-6 rounded-3xl glass-panel border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-aurora-pink/20 flex items-center justify-center text-aurora-pink">
                <Instagram className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-white">{isTr ? 'Sosyal Medya' : 'Social Channels'}</h3>
              <p className="text-xs text-white/60">
                {isTr ? 'Yeni güncellemeler ve aşk hikayeleri için bizi takip edin:' : 'Follow our romantic community:'}
              </p>
              <div className="space-y-1 pt-1">
                <a
                  href="https://instagram.com/coupleskyapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm font-semibold text-white hover:text-roseGold"
                >
                  Instagram: @coupleskyapp
                </a>
                <a
                  href="https://tiktok.com/@coupleskyapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm font-semibold text-white hover:text-roseGold"
                >
                  TikTok: @coupleskyapp
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-roseGold/20 space-y-6 shadow-2xl relative">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-roseGold" />
                <span>{isTr ? 'Bize Mesaj Gönderin' : 'Send Us a Message'}</span>
              </h2>

              {sent ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                  <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="font-bold text-white">{isTr ? 'Mesajınız Hazırlandı!' : 'Draft Created!'}</h4>
                  <p className="text-xs text-white/70">
                    {isTr
                      ? 'E-posta uygulamanız açıldı. Gönder butonuna basarak doğrudan bize iletebilirsiniz.'
                      : 'Your email client has opened. Hit send to deliver your message directly.'}
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="text-xs text-roseGold underline pt-2 cursor-pointer"
                  >
                    {isTr ? 'Yeni bir mesaj yaz' : 'Write another message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-white/70">
                        {isTr ? 'Adınız Soyadınız' : 'Your Name'}
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={isTr ? 'Örn: Emirhan Taşcı' : 'e.g. John Doe'}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-roseGold/50 transition-colors"
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-white/70">
                        {isTr ? 'E-posta Adresiniz' : 'Your Email'}
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ornek@gmail.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-roseGold/50 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-white/70">
                      {isTr ? 'Konu' : 'Subject'}
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder={isTr ? 'Örn: Eşleşme kodu sorunu / Abonelik' : 'e.g. Pairing issue / Subscription question'}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-roseGold/50 transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-white/70">
                      {isTr ? 'Mesajınız' : 'Your Message'}
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={isTr ? 'Bize iletmek istediğiniz detayları buraya yazabilirsiniz...' : 'Write your detailed message here...'}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-roseGold/50 transition-colors"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-roseGold-dark via-aurora-pink to-purple-600 hover:opacity-95 shadow-lg shadow-roseGold/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isTr ? 'Mesajı Gönder' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer lang={lang} />
    </div>
  );
}
