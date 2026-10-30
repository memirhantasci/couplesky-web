'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AppBadges } from '@/components/AppBadges';
import {
  Sparkles,
  Heart,
  Send,
  MapPin,
  Calendar,
  ShieldCheck,
  ChevronDown,
  Lock,
  Compass,
  Flame,
  ArrowRight,
  Share2,
  Bell,
  Star,
} from 'lucide-react';

export default function HomePage() {
  const [lang, setLang] = useState<'tr' | 'en'>('tr');
  const [activeTab, setActiveTab] = useState<'star' | 'letters' | 'map' | 'wrapped'>('star');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const isTr = lang === 'tr';

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="relative min-h-screen bg-cosmic-950 text-white overflow-hidden">
      {/* Background Starry Mesh & Glowing Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-roseGold/10 rounded-full blur-[140px]" />
        <div className="absolute top-[35%] -left-40 w-[600px] h-[600px] bg-purple-900/15 rounded-full blur-[150px]" />
        <div className="absolute top-[60%] -right-40 w-[600px] h-[600px] bg-sky-900/15 rounded-full blur-[150px]" />
        {/* Tiny Stars background simulation */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-15" />
      </div>

      {/* Navbar */}
      <Navbar lang={lang} onToggleLang={() => setLang(isTr ? 'en' : 'tr')} />

      {/* Hero Section */}
      <section className="relative z-10 pt-32 sm:pt-40 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-roseGold/20 shadow-lg shadow-roseGold/5">
              <Sparkles className="w-4 h-4 text-roseGold animate-pulse" />
              <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-roseGold-light to-roseGold bg-clip-text text-transparent">
                {isTr ? 'İkinize Özel Dijital Gökyüzü' : 'A Private Universe Built Exclusively for Two'}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
              {isTr ? (
                <>
                  Aşkınızı{' '}
                  <span className="bg-gradient-to-r from-roseGold-light via-roseGold to-aurora-pink bg-clip-text text-transparent">
                    Yıldızlarda
                  </span>{' '}
                  ve Kalbinizde Yaşatın.
                </>
              ) : (
                <>
                  Cherish Your Love{' '}
                  <span className="bg-gradient-to-r from-roseGold-light via-roseGold to-aurora-pink bg-clip-text text-transparent">
                    Among the Stars.
                  </span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-white/70 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {isTr
                ? 'Zaman kilitli mektuplar, anı haritası, gökyüzünde ortak bir yıldız sahiplenme ve çiftlere özel kilit ekranı widget’ları. Sadece siz ve partneriniz için güvenli bir sığınak.'
                : 'Sealed time-capsule letters, memory maps, your shared star in the celestial skies, and lock screen widgets. A protected private haven crafted exclusively for you.'}
            </p>

            {/* App Store & Google Play Badges */}
            <div className="pt-2 flex flex-col items-center lg:items-start gap-4">
              <AppBadges lang={lang} />
              <p className="text-xs text-white/40 flex items-center gap-1.5 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                {isTr
                  ? 'Banka standardında AES-256 uçtan uca şifreleme. Reklamsız & Güvenli.'
                  : 'Bank-grade AES-256 encryption. Ad-free & fully private.'}
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* Glow Behind Mockup */}
            <div className="absolute inset-0 bg-gradient-to-tr from-roseGold/20 via-purple-600/20 to-sky-500/20 rounded-full blur-3xl transform scale-90" />

            {/* Phone Body */}
            <div className="relative w-[300px] sm:w-[330px] rounded-[48px] p-3.5 bg-gradient-to-b from-white/20 via-white/5 to-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border border-white/20 backdrop-blur-2xl">
              {/* Outer Phone Shell */}
              <div className="relative rounded-[40px] overflow-hidden bg-cosmic-950 border border-white/10 shadow-inner">
                {/* Dynamic Island */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30 flex items-center justify-end pr-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
                </div>

                {/* In-App Screen Preview */}
                <div className="p-4 pt-10 space-y-4 text-left">
                  {/* Top Bar with Couple Profile */}
                  <div className="flex items-center justify-between pb-1">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-full ring-2 ring-roseGold/60 overflow-hidden shadow">
                        <Image
                          src="/icon.png"
                          alt="Couple Avatar"
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white flex items-center gap-1">
                          Emirhan & Selin <Heart className="w-3 h-3 text-roseGold fill-roseGold" />
                        </p>
                        <p className="text-[10px] text-roseGold font-semibold">1,248 {isTr ? 'Gündür Birlikte' : 'Days Together'}</p>
                      </div>
                    </div>
                    <span className="p-1.5 rounded-full bg-white/5 border border-white/10">
                      <Bell className="w-3.5 h-3.5 text-white/70" />
                    </span>
                  </div>

                  {/* Anniversary Countdown Card */}
                  <div className="p-3.5 rounded-2xl glass-panel border border-roseGold/30 bg-gradient-to-br from-roseGold/10 via-purple-900/20 to-transparent relative overflow-hidden">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[10px] font-semibold text-roseGold uppercase tracking-wider">
                          {isTr ? 'Yaklaşan Özel Gün' : 'Upcoming Milestone'}
                        </span>
                        <h4 className="text-sm font-bold text-white pt-0.5">
                          {isTr ? 'Yıl Dönümümüz 💕' : 'Our Anniversary 💕'}
                        </h4>
                      </div>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-roseGold/20 text-roseGold font-bold">
                        14 {isTr ? 'Gün Kaldı' : 'Days Left'}
                      </span>
                    </div>
                  </div>

                  {/* Sealed Letter Card */}
                  <div className="p-3.5 rounded-2xl glass-panel border border-purple-500/30 bg-gradient-to-br from-purple-900/30 to-cosmic-900 relative">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-purple-500/20 flex items-center justify-center border border-purple-500/40">
                        <Send className="w-4 h-4 text-purple-300" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-bold text-white flex items-center gap-1">
                          {isTr ? 'Mühürlü Mektup Bekliyor' : 'Sealed Letter Waiting'}
                          <Lock className="w-3 h-3 text-amber-300" />
                        </p>
                        <p className="text-[10px] text-white/50">
                          {isTr ? '14 Şubat saat 00:00’da açılacak' : 'Unlocks Feb 14 at 00:00'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Our Star Card */}
                  <div className="p-3.5 rounded-2xl glass-panel border border-sky-500/30 bg-gradient-to-br from-sky-900/20 to-cosmic-900">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-sky-400/20 flex items-center justify-center">
                          <Star className="w-4 h-4 text-sky-300 fill-sky-300 animate-pulse" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">Stella Amoris ✨</p>
                          <p className="text-[10px] text-sky-300/80">Kuğu Takımyıldızı (Cygnus)</p>
                        </div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/60">
                        HD 197076
                      </span>
                    </div>
                  </div>

                  {/* Mood Ring / Bottom Tab Simulation */}
                  <div className="pt-2 flex items-center justify-around border-t border-white/5 text-[10px] text-white/40">
                    <span className="text-roseGold font-bold">🏠 {isTr ? 'Ev' : 'Home'}</span>
                    <span>📅 {isTr ? 'Takvim' : 'Calendar'}</span>
                    <span>🗺️ {isTr ? 'Harita' : 'Map'}</span>
                    <span>💌 {isTr ? 'Mektup' : 'Letters'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Pillars Section */}
      <section id="features" className="relative z-10 py-24 border-t border-white/5 bg-cosmic-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-roseGold">
              {isTr ? 'Eksiksiz Özellikler' : 'Crafted For Intimacy'}
            </h2>
            <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              {isTr
                ? 'İlişkinizi Güçlendiren, Aşkınızı Canlı Tutan Araçlar'
                : 'Everything You Need to Cherish Every Single Moment'}
            </h3>
            <p className="text-sm sm:text-base text-white/60 leading-relaxed">
              {isTr
                ? 'CoupleSky sıradan bir mesajlaşma uygulaması değildir. İki kişinin anılarını, hayallerini ve özel anlarını ölümsüzleştirdiği dijital bir tapınaktır.'
                : 'CoupleSky is not just another messaging app. It is a shared sanctuary where your love story is written among the stars.'}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Our Star */}
            <div id="star" className="p-8 rounded-3xl glass-panel glass-panel-hover transition-all duration-300 space-y-4 relative group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-500/20 to-purple-500/20 border border-sky-400/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Sparkles className="w-7 h-7 text-sky-300" />
              </div>
              <h4 className="text-xl font-bold text-white">
                {isTr ? 'Bizim Yıldızımız & Gökyüzü Atlası' : 'Our Star & Celestial Atlas'}
              </h4>
              <p className="text-sm text-white/65 leading-relaxed">
                {isTr
                  ? '3D uzay atlasında partnerinizle ortak bir yıldız sahiplenin, isim verin ve gece gökyüzünde ışıldayan aşkınızı izleyin. Birlikte sanal dilek fenerleri uçurun.'
                  : 'Claim a real celestial star in a 3D cosmos, name it together, and watch your love light up the night sky. Release glowing wish lanterns into orbit.'}
              </p>
              <div className="pt-2 text-xs font-semibold text-sky-400 flex items-center gap-1">
                <span>{isTr ? 'Uzay atlasını keşfet' : 'Explore the atlas'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* 2. Time Capsule Letters */}
            <div id="letters" className="p-8 rounded-3xl glass-panel glass-panel-hover transition-all duration-300 space-y-4 relative group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-500/20 to-roseGold/20 border border-purple-400/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Send className="w-7 h-7 text-purple-300" />
              </div>
              <h4 className="text-xl font-bold text-white">
                {isTr ? 'Zaman Kilitli Mühürlü Mektuplar' : 'Sealed Time-Capsule Letters'}
              </h4>
              <p className="text-sm text-white/65 leading-relaxed">
                {isTr
                  ? 'Gelecekteki yıl dönümünüz veya sevgilinizin doğum günü için özel mektuplar yazın. Seçtiğiniz tarihe kadar kriptografik olarak kilitli kalır, origami kuşu ile teslim edilir.'
                  : 'Write heartfelt letters that unlock strictly on anniversaries or birthdays. Delivered with origami bird animations and kept under lock until the exact date.'}
              </p>
              <div className="pt-2 text-xs font-semibold text-purple-400 flex items-center gap-1">
                <span>{isTr ? 'Mühürlü aşk mektupları' : 'Learn about time capsules'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* 3. Memory & Date Map */}
            <div id="map" className="p-8 rounded-3xl glass-panel glass-panel-hover transition-all duration-300 space-y-4 relative group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-roseGold/20 to-aurora-pink/20 border border-roseGold/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MapPin className="w-7 h-7 text-roseGold" />
              </div>
              <h4 className="text-xl font-bold text-white">
                {isTr ? 'Buluşma & Anı Haritası' : 'Love & Memory Map'}
              </h4>
              <p className="text-sm text-white/65 leading-relaxed">
                {isTr
                  ? 'İlk kahve içtiğiniz kafe, ilk öpüşme noktası, ortak tatil rotalarınız... İl, ilçe, sokak araması (Nominatim) ile haritanızı fotoğraflarla ve hatıralarla doldurun.'
                  : 'Every memorable place pinned on an interactive couple map. Geotag photos, review dates, and build a colorful visual geography of your shared story.'}
              </p>
              <div className="pt-2 text-xs font-semibold text-roseGold flex items-center gap-1">
                <span>{isTr ? 'Haritada iz bırakın' : 'Explore memories'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* 4. Calendar & Cycle Care */}
            <div className="p-8 rounded-3xl glass-panel glass-panel-hover transition-all duration-300 space-y-4 relative group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Calendar className="w-7 h-7 text-emerald-300" />
              </div>
              <h4 className="text-xl font-bold text-white">
                {isTr ? 'Özel Günler & Döngü Takibi' : 'Milestones & Cycle Sync'}
              </h4>
              <p className="text-sm text-white/65 leading-relaxed">
                {isTr
                  ? 'Geri sayım sayaçları, ortak randevular, regl döngüsü ve günlük vitamin/ilaç hatırlatmaları. Partnerler arasında kesintisiz duygusal empati ve ilgi sağlar.'
                  : 'Anniversary countdowns, shared dates, menstrual cycle tracking, and medication reminders. Stay in sync and care for each other every single day.'}
              </p>
            </div>

            {/* 5. Monthly Wrapped */}
            <div className="p-8 rounded-3xl glass-panel glass-panel-hover transition-all duration-300 space-y-4 relative group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500/20 to-roseGold/20 border border-amber-400/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Flame className="w-7 h-7 text-amber-300" />
              </div>
              <h4 className="text-xl font-bold text-white">
                {isTr ? 'Aylık Wrapped Özeti' : 'Monthly Couple Wrapped'}
              </h4>
              <p className="text-sm text-white/65 leading-relaxed">
                {isTr
                  ? 'Her ayın sonunda ilişkinizin en tatlı istatistikleri, ruh hali analizleri, yazılan mektuplar ve anılar sinematik bir hikaye olarak karşınızda. Tek tıkla Instagram Story’de paylaşın.'
                  : 'Relive your monthly highlights with Spotify-style Couple Wrapped stories. Analyze top moods, memories, and share your romantic recap on Instagram Stories.'}
              </p>
            </div>

            {/* 6. AES-256 Security */}
            <div id="security" className="p-8 rounded-3xl glass-panel glass-panel-hover transition-all duration-300 space-y-4 relative group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-7 h-7 text-cyan-300" />
              </div>
              <h4 className="text-xl font-bold text-white">
                {isTr ? 'Askeri Düzeyde Gizlilik' : 'Military-Grade Privacy'}
              </h4>
              <p className="text-sm text-white/65 leading-relaxed">
                {isTr
                  ? 'Özel mektuplarınız ve anılarınız AES-256 kriptografik şifreleme ile korunur. Verileriniz asla satılmaz, reklam ağlarına aktarılmaz. Yalnızca ikinize özeldir.'
                  : 'Bank-grade AES-256 symmetric encryption keeps your private notes and letters safe. Compliant with GDPR & KVKK. No ad tracking, ever.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Showcase Tabs */}
      <section className="relative z-10 py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              {isTr ? 'CoupleSky Deneyimine Yakından Bakın' : 'Experience CoupleSky in Detail'}
            </h3>
            <p className="text-sm text-white/60">
              {isTr
                ? 'İki kişilik dünyaya adım atın ve her özelliğin zarafetini keşfedin.'
                : 'Explore the delicate craftsmanship behind every single interaction.'}
            </p>
          </div>

          {/* Tab Selector Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10">
            <button
              onClick={() => setActiveTab('star')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'star'
                  ? 'bg-roseGold text-cosmic-950 shadow-lg shadow-roseGold/20'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              🌌 {isTr ? 'Bizim Yıldızımız' : 'Our Star'}
            </button>
            <button
              onClick={() => setActiveTab('letters')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'letters'
                  ? 'bg-roseGold text-cosmic-950 shadow-lg shadow-roseGold/20'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              💌 {isTr ? 'Mühürlü Mektuplar' : 'Time Capsules'}
            </button>
            <button
              onClick={() => setActiveTab('map')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'map'
                  ? 'bg-roseGold text-cosmic-950 shadow-lg shadow-roseGold/20'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              🗺️ {isTr ? 'Anı Haritası' : 'Memory Map'}
            </button>
            <button
              onClick={() => setActiveTab('wrapped')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'wrapped'
                  ? 'bg-roseGold text-cosmic-950 shadow-lg shadow-roseGold/20'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              🎁 {isTr ? 'Aylık Wrapped' : 'Couple Wrapped'}
            </button>
          </div>

          {/* Tab Content Cards */}
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
            {activeTab === 'star' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                    {isTr ? 'Kozmik Gökyüzü' : 'Cosmic Sky Module'}
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-bold">
                    {isTr ? 'Gökyüzündeki Yıldızınız Sizi Bekliyor' : 'A Celestial Beacon Dedicated to You'}
                  </h4>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {isTr
                      ? 'İkinizin aşkını temsil eden gerçek bir takımyıldız yıldızını seçin. Özel yıldız sertifikanızı oluşturun, aşk mesajınızı yıldıza kazıyın ve dilek fenerleri uçurarak partnerinizle aynı anda parıltısını izleyin.'
                      : 'Claim an actual star cataloged in astronomical archives. Craft your star certificate, engrave your timeless love promise, and release glowing wish lanterns simultaneously with your partner.'}
                  </p>
                  <ul className="space-y-2 text-xs text-white/80 pt-2">
                    <li className="flex items-center gap-2">
                      <span className="text-sky-400">✦</span>
                      {isTr ? 'Gerçek takımyıldızlar ve güneş sistemleri' : 'Real constellations & exoplanet systems'}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-sky-400">✦</span>
                      {isTr ? 'İki tarafta eş zamanlı gökyüzü radar animasyonları' : 'Synchronized starry radar & wish lanterns'}
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl p-6 bg-cosmic-900/80 border border-sky-400/20 text-center space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-full bg-sky-400/20 flex items-center justify-center shadow-lg shadow-sky-400/20">
                    <Star className="w-10 h-10 text-sky-300 fill-sky-300 animate-pulse" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg text-white">Stella Amoris HD-197076</h5>
                    <p className="text-xs text-sky-300">Cygnus (Kuğu) Takımyıldızı · 0.85 Işık Yılı</p>
                  </div>
                  <p className="text-xs italic text-white/60">
                    &ldquo;Gökyüzünde milyonlarca yıldız var ama parıldayanı sadece sensin.&rdquo;
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'letters' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">
                    {isTr ? 'Zaman Kapsülü' : 'Time Capsule Letters'}
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-bold">
                    {isTr ? 'Zamanı Geldiğinde Açılan Aşk Mektupları' : 'Sealed Secrets for the Perfect Moment'}
                  </h4>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {isTr
                      ? 'Bir mektup yazın, gelecekteki bir tarih belirleyin ve mühürleyin. Partneriniz mektubun beklediğini görür ancak o tarih ve saat gelene kadar içeriğini asla okuyamaz.'
                      : 'Write heartfelt thoughts, pick an unlock timestamp, and lock it with a digital seal. Your partner anticipates the arrival, but the envelope stays sealed until the chosen celebration.'}
                  </p>
                  <ul className="space-y-2 text-xs text-white/80 pt-2">
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">✦</span>
                      {isTr ? 'Katlanan origami güverciniyle animasyonlu teslimat' : 'Animated origami dove letter delivery'}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">✦</span>
                      {isTr ? 'Açılış anında her iki cihaza sürpriz bildirim' : 'Instant dual push notification upon unlock'}
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl p-6 bg-cosmic-900/80 border border-purple-400/20 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-purple-500/20 flex items-center justify-center border border-purple-400/40">
                    <Lock className="w-8 h-8 text-amber-300" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg text-white">
                      {isTr ? 'Mühürlü: İlk Yılımız Kutlu Olsun' : 'Sealed: Happy 1st Anniversary'}
                    </h5>
                    <p className="text-xs text-purple-300">
                      {isTr ? 'Kilit Açılış Tarihi: 14 Şubat 2027 · 00:00' : 'Unlock Date: Feb 14, 2027 · 00:00'}
                    </p>
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold">
                    🔒 {isTr ? 'Kriptografik Olarak Mühürlü' : 'Cryptographically Sealed'}
                  </span>
                </div>
              </div>
            )}

            {activeTab === 'map' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <span className="text-xs font-bold text-roseGold uppercase tracking-wider">
                    {isTr ? 'Coğrafi Anılar' : 'Geographic Memories'}
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-bold">
                    {isTr ? 'Aşkınızın Geçtiği Tüm Yollar ve Şehirler' : 'Map Every Step of Your Romance'}
                  </h4>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {isTr
                      ? 'İlk göz göze geldiğiniz yer, unutulmaz tatil sahili veya favori restoranınız. Nominatim il/ilçe/mahalle araması ile kolayca işaretleyin, fotoğraflarınızı arşivleyin.'
                      : 'Pin your coffee stops, romantic dinner tables, and vacation sunsets. Seamless district and street address search powered by OpenStreetMap Nominatim.'}
                  </p>
                  <ul className="space-y-2 text-xs text-white/80 pt-2">
                    <li className="flex items-center gap-2">
                      <span className="text-roseGold">✦</span>
                      {isTr ? 'İl, ilçe ve cadde aramasıyla anında pin bırakma' : 'Instant location search with full address lookup'}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-roseGold">✦</span>
                      {isTr ? 'Her pinin arkasında şifreli ortak fotoğraf galerisi' : 'Encrypted photo album attached to each pin'}
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl p-6 bg-cosmic-900/80 border border-roseGold/20 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-roseGold/20 flex items-center justify-center border border-roseGold/40">
                    <MapPin className="w-8 h-8 text-roseGold" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg text-white">Kadıköy Moda Sahili 🌊</h5>
                    <p className="text-xs text-roseGold">18 Eylül 2024 · &ldquo;İlk gün batımını burada izlemiştik&rdquo;</p>
                  </div>
                  <div className="flex justify-center gap-2">
                    <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">📸 14 Fotoğraf</span>
                    <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/10">📍 İstanbul</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'wrapped' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    {isTr ? 'Aylık Hikayeler' : 'Couple Wrapped Stories'}
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-bold">
                    {isTr ? 'Her Ay Sonu Aşkınızın Sinematik Özeti' : 'Your Monthly Love Journey in Stories'}
                  </h4>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {isTr
                      ? 'Bu ay kaç gün birlikteydiniz? En çok hangi ruh halini seçtiniz? Kaç mektup yazıldı? Erkek ve kadın kullanıcıya özel uyarlanan temalarla Instagram Story’de tek tıkla paylaşın.'
                      : 'How many days have you been together this month? Which emotion did you share most? Automatically calculated with gender-adaptive palettes and direct Instagram Story sharing.'}
                  </p>
                  <ul className="space-y-2 text-xs text-white/80 pt-2">
                    <li className="flex items-center gap-2">
                      <span className="text-amber-400">✦</span>
                      {isTr ? 'Erkek için Gece Mavisi, kadın için Gül Kurusu teması' : 'Night Blue theme for men, Rose Gold for women'}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-amber-400">✦</span>
                      {isTr ? 'Doğrudan Instagram ve sosyal medya paylaşımı' : 'Direct Instagram Story export & sharing'}
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl p-6 bg-cosmic-900/80 border border-amber-400/20 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-500/20 flex items-center justify-center border border-amber-400/40">
                    <Share2 className="w-8 h-8 text-amber-300" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg text-white">Ekim 2026 Wrapped 🎁</h5>
                    <p className="text-xs text-amber-300">
                      {isTr ? 'Bu ayın teması: Romantik & Huzurlu ✨' : 'Monthly theme: Romantic & Serene ✨'}
                    </p>
                  </div>
                  <p className="text-xs text-white/60">
                    {isTr ? '31 gün kesintisiz aşk puanı · 4 Mühürlü Mektup · 12 Fotoğraf' : '31 streak days · 4 Letters · 12 Photos'}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials / Real Couples */}
      <section className="relative z-10 py-24 border-t border-white/5 bg-cosmic-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-roseGold">
              {isTr ? 'Kullanıcı Yorumları' : 'Beloved by Couples'}
            </h3>
            <h4 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {isTr ? 'Çiftler CoupleSky Hakkında Ne Diyor?' : 'What Couples Are Saying'}
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-3xl glass-panel space-y-3">
              <div className="flex text-amber-400 text-sm">★★★★★</div>
              <p className="text-sm text-white/80 italic leading-relaxed">
                {isTr
                  ? '“Uzak mesafe ilişkisi yaşıyoruz. Zaman kilitli mektuplar ve gökyüzündeki yıldızımız aramızdaki mesafeyi tamamen yok etti. Harika bir uygulama!”'
                  : '“We are in a long-distance relationship. The sealed letters and our shared star made miles feel like nothing. Pure magic!”'}
              </p>
              <div className="pt-2">
                <p className="text-xs font-bold text-white">Selin & Caner</p>
                <p className="text-[10px] text-white/50">{isTr ? '3 yıldır birlikte' : 'Together for 3 years'}</p>
              </div>
            </div>

            <div className="p-6 rounded-3xl glass-panel space-y-3">
              <div className="flex text-amber-400 text-sm">★★★★★</div>
              <p className="text-sm text-white/80 italic leading-relaxed">
                {isTr
                  ? '“Buluşma haritası özelliği tek kelimeyle inanılmaz. İlk gittiğimiz kafeden tatillerimize kadar her şeyi pinledik. Anılarımızı kaybetmiyoruz.”'
                  : '“The memory map is our favorite. We pinned every spot from our first date to our summer road trips. All in one private place.”'}
              </p>
              <div className="pt-2">
                <p className="text-xs font-bold text-white">Merve & Tolga</p>
                <p className="text-[10px] text-white/50">{isTr ? '520 gündür birlikte' : 'Together for 520 days'}</p>
              </div>
            </div>

            <div className="p-6 rounded-3xl glass-panel space-y-3">
              <div className="flex text-amber-400 text-sm">★★★★★</div>
              <p className="text-sm text-white/80 italic leading-relaxed">
                {isTr
                  ? '“Tek üyelikle ikimizin de Premium olması çok adil ve ince bir düşünce. Kilit ekranı widget’ları her baktığımda tebessüm ettiriyor.”'
                  : '“One subscription unlocking both accounts is so thoughtful. The lock screen widgets bring a smile to my face every day.”'}
              </p>
              <div className="pt-2">
                <p className="text-xs font-bold text-white">Zeynep & Burak</p>
                <p className="text-[10px] text-white/50">{isTr ? 'Evli · 1 yıldır birlikte' : 'Married · 1 year'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq" className="relative z-10 py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-roseGold">
              {isTr ? 'Aklınıza Takılanlar' : 'FAQ'}
            </h3>
            <h4 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {isTr ? 'Sıkça Sorulan Sorular' : 'Frequently Asked Questions'}
            </h4>
          </div>

          <div className="space-y-4">
            {[
              {
                q: isTr ? 'CoupleSky ücretsiz mi?' : 'Is CoupleSky free to use?',
                a: isTr
                  ? 'Evet! Temel anı defteri, takvim, mektup yazma ve harita özellikleri tamamen ücretsizdir. Premium sürüm sınırsız fotoğraf arşivi, gökyüzü atlası yıldız sahiplenme ve gelişmiş widget kilitlerini açar.'
                  : 'Yes! Core features like memory journals, shared calendar, time-capsule letters, and maps are completely free. CoupleSky Premium unlocks unlimited photo storage, star claiming, and custom widgets.',
              },
              {
                q: isTr ? 'Abonelik aldığımda partnerim de faydalanıyor mu?' : 'Does one subscription cover both partners?',
                a: isTr
                  ? 'Kesinlikle evet! Çiftlerden biri Premium abone olduğunda, eşleştiği partneri de otomatik olarak hiçbir ek ücret ödemeden tüm Premium ayrıcalıklarından faydalanır.'
                  : 'Absolutely! Our shared couple subscription model means when one partner subscribes, both partners unlock all Premium features instantly.',
              },
              {
                q: isTr ? 'Verilerimiz ve fotoğraflarımız güvende mi?' : 'Are our photos and letters secure?',
                a: isTr
                  ? 'Verileriniz banka standartlarında AES-256 simetrik şifreleme ve Supabase Row-Level Security (RLS) ile korunur. Mektuplarınız ve fotoğraflarınız asla üçüncü taraflara satılmaz veya paylaşılmaz.'
                  : 'All private notes and letters are encrypted using AES-256 standards with strict row-level security. Your data is strictly private and never sold or shared.',
              },
              {
                q: isTr ? 'Partnerimle nasıl eşleşebilirim?' : 'How do I pair with my partner?',
                a: isTr
                  ? 'Hesap açtıktan sonra uygulama size özel 6 haneli bir eşleşme kodu verir. Bu kodu partnerinizle paylaşmanız veya tek tıkla davet bağlantısını göndermeniz yeterlidir.'
                  : 'After creating an account, you receive a unique 6-character pairing code. Simply share this code or tap to send an invitation link to your partner.',
              },
              {
                q: isTr ? 'Hangi cihazlarda kullanılabilir?' : 'Which platforms are supported?',
                a: isTr
                  ? 'CoupleSky hem iOS (iPhone & iPad) hem de Android cihazlarda kusursuz çalışır. Biriniz iPhone, diğeriniz Android kullansa bile tam uyumlulukla senkronize olursunuz.'
                  : 'CoupleSky works smoothly on both iOS and Android. Even if one partner has an iPhone and the other uses Android, everything syncs in real time.',
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-white/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <span className="font-semibold text-sm sm:text-base text-white">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-roseGold transition-transform duration-200 ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-sm text-white/70 leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Download CTA Banner */}
      <section id="download" className="relative z-10 py-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl p-8 sm:p-14 glass-panel border border-roseGold/30 bg-gradient-to-br from-roseGold/10 via-purple-900/20 to-cosmic-900 overflow-hidden text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-2xl overflow-hidden shadow-2xl ring-2 ring-roseGold/40">
              <Image src="/icon.png" alt="CoupleSky Icon" width={64} height={64} className="object-cover" />
            </div>

            <div className="space-y-3 max-w-2xl mx-auto">
              <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                {isTr ? 'Bugün İkinize Özel Bir Evren Kurun' : 'Start Your Private Universe Today'}
              </h3>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                {isTr
                  ? 'CoupleSky’ı hemen indirin, partnerinizi davet edin ve zaman kilitli mektuplarınızı şimdiden yazmaya başlayın.'
                  : 'Download CoupleSky now, invite your partner, and begin writing timeless memories among the stars.'}
              </p>
            </div>

            <div className="pt-2 flex justify-center">
              <AppBadges lang={lang} size="lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer lang={lang} />
    </div>
  );
}
