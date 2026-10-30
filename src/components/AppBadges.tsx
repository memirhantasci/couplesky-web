'use client';

import React, { useState } from 'react';
import { QrCode, Sparkles } from 'lucide-react';

interface AppBadgesProps {
  lang: 'tr' | 'en';
  size?: 'default' | 'lg';
}

export function AppBadges({ lang, size = 'default' }: AppBadgesProps) {
  const [showQr, setShowQr] = useState(false);
  const isTr = lang === 'tr';

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      {/* App Store Button */}
      <a
        href="https://apps.apple.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3.5 px-6 py-3.5 rounded-2xl glass-panel glass-panel-hover border border-white/10 hover:border-roseGold/40 transition-all duration-300 w-full sm:w-auto justify-center"
      >
        <svg
          className="w-7 h-7 fill-current text-white group-hover:scale-105 transition-transform"
          viewBox="0 0 24 24"
        >
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.84c.64-.78 1.08-1.87.96-2.96-.93.04-2.05.62-2.71 1.4-.58.68-1.09 1.77-.96 2.84 1.04.08 2.08-.52 2.71-1.28z" />
        </svg>
        <div className="text-left">
          <p className="text-[10px] uppercase tracking-wider text-white/50 leading-tight">
            {isTr ? "App Store'dan" : 'Download on the'}
          </p>
          <p className="text-sm font-semibold tracking-wide text-white leading-tight">
            App Store
          </p>
        </div>
      </a>

      {/* Google Play Button */}
      <a
        href="https://play.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3.5 px-6 py-3.5 rounded-2xl glass-panel glass-panel-hover border border-white/10 hover:border-cyan-400/40 transition-all duration-300 w-full sm:w-auto justify-center"
      >
        <svg
          className="w-7 h-7 text-white group-hover:scale-105 transition-transform"
          viewBox="0 0 24 24"
        >
          <path
            fill="#EA4335"
            d="M3.6 1.7L13.8 12 3.6 22.3c-.4-.3-.6-.8-.6-1.4V3.1c0-.6.2-1.1.6-1.4z"
          />
          <path
            fill="#FBBC04"
            d="M17.4 8.5L4.8 1.2c-.4-.2-.8-.2-1.2 0l10.2 10.3 3.6-3z"
          />
          <path
            fill="#4285F4"
            d="M13.8 12l3.6 3.5 3.3-1.9c1-.6 1-1.6 0-2.2l-3.3-1.9L13.8 12z"
          />
          <path
            fill="#34A853"
            d="M3.6 22.3l13.8-7.8-3.6-3.5L3.6 21.3c0 .3.1.6.2.8.2.2.4.3.8.2h-1z"
          />
        </svg>
        <div className="text-left">
          <p className="text-[10px] uppercase tracking-wider text-white/50 leading-tight">
            {isTr ? "Google Play'den" : 'GET IT ON'}
          </p>
          <p className="text-sm font-semibold tracking-wide text-white leading-tight">
            Google Play
          </p>
        </div>
      </a>

      {/* Quick QR code preview button */}
      <button
        onClick={() => setShowQr(!showQr)}
        className="hidden sm:flex items-center gap-2 px-3.5 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-all cursor-pointer"
        title={isTr ? 'Telefona indirmek için QR Kodu gör' : 'Scan QR code to install'}
      >
        <QrCode className="w-5 h-5 text-roseGold" />
        <span className="text-xs font-medium">{isTr ? 'QR Kod' : 'QR Scan'}</span>
      </button>

      {/* QR Modal Popover */}
      {showQr && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-panel p-6 rounded-3xl max-w-xs w-full text-center space-y-4 border border-roseGold/20 shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-roseGold uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                {isTr ? 'Kameranı Aç' : 'Scan to Install'}
              </span>
              <button
                onClick={() => setShowQr(false)}
                className="text-white/50 hover:text-white text-sm"
              >
                ✕
              </button>
            </div>
            {/* Visual QR Simulator SVG */}
            <div className="p-4 bg-white rounded-2xl shadow-inner flex items-center justify-center">
              <svg className="w-44 h-44 text-cosmic-950" viewBox="0 0 100 100">
                <rect x="5" y="5" width="25" height="25" rx="3" fill="currentColor" />
                <rect x="9" y="9" width="17" height="17" rx="2" fill="white" />
                <rect x="13" y="13" width="9" height="9" fill="currentColor" />

                <rect x="70" y="5" width="25" height="25" rx="3" fill="currentColor" />
                <rect x="74" y="9" width="17" height="17" rx="2" fill="white" />
                <rect x="78" y="13" width="9" height="9" fill="currentColor" />

                <rect x="5" y="70" width="25" height="25" rx="3" fill="currentColor" />
                <rect x="9" y="74" width="17" height="17" rx="2" fill="white" />
                <rect x="13" y="78" width="9" height="9" fill="currentColor" />

                <circle cx="50" cy="50" r="10" fill="#E08075" />
                <rect x="35" y="10" width="8" height="8" fill="currentColor" />
                <rect x="45" y="20" width="8" height="8" fill="currentColor" />
                <rect x="35" y="75" width="8" height="8" fill="currentColor" />
                <rect x="65" y="65" width="12" height="12" fill="currentColor" />
                <rect x="55" y="80" width="15" height="8" fill="currentColor" />
                <rect x="80" y="40" width="8" height="15" fill="currentColor" />
                <rect x="40" y="35" width="20" height="8" fill="currentColor" />
              </svg>
            </div>
            <p className="text-xs text-white/60">
              {isTr
                ? 'Telefon kameranı okutarak App Store veya Play Store üzerinden doğrudan indir.'
                : 'Point your smartphone camera to download CoupleSky directly.'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
