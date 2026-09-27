'use client';

import React, { useEffect, useState } from 'react';

export default function MobileAppInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showIOSModal, setShowIOSModal] = useState(false);
  const [isStandaloneApp, setIsStandaloneApp] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }

    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true ||
      document.referrer.includes('android-app://');
    setIsStandaloneApp(isStandalone);

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);

    const timer = setTimeout(() => {
      fetch('/api/download-apk?v=2', { cache: 'force-cache' }).catch(() => {});
    }, 800);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
      clearTimeout(timer);
    };
  }, []);

  const handleFastAndroidInstall = async () => {
    if (deferredPrompt) {
      setIsInstalling(true);
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      setIsInstalling(false);
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
        return;
      }
    }
    const link = document.createElement('a');
    link.href = '/api/download-apk?v=2';
    link.download = 'Nagarik-Sheba.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <style jsx global>{`
        @media (max-width: 640px) {
          nav a[href="/"] {
            flex-shrink: 0 !important;
            gap: 8px !important;
          }
          nav a[href="/"] span {
            white-space: nowrap !important;
          }
          nav a[href="/"] span:first-child {
            font-size: 15px !important;
            line-height: 1.2 !important;
          }
          nav a[href="/"] span:last-child {
            font-size: 9px !important;
            display: block !important;
          }
          nav a[href*="wa.me"],
          nav a[href="/dashboard"] {
            white-space: nowrap !important;
            padding: 6px 10px !important;
            font-size: 11px !important;
          }
        }
      `}</style>

      {!isStandaloneApp && (
        <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
          <button
            onClick={handleFastAndroidInstall}
            disabled={isInstalling}
            className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-3.5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-xl hover:scale-105 transition-transform cursor-pointer border border-white/20 whitespace-nowrap"
          >
            <span>🤖 {isInstalling ? 'ইনস্টল হচ্ছে...' : 'Android APK'}</span>
          </button>

          <button
            onClick={() => setShowIOSModal(true)}
            className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-purple-700 to-fuchsia-600 px-3.5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-xl hover:scale-105 transition-transform cursor-pointer border border-white/20 whitespace-nowrap"
          >
            <span>🍎 iPhone অ্যাপ</span>
          </button>
        </div>
      )}

      {showIOSModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="text-base font-bold text-purple-950">🍎 iPhone / iPad (iOS) অ্যাপ ইনস্টল</h3>
              <button onClick={() => setShowIOSModal(false)} className="text-gray-500 hover:bg-gray-100 px-2 py-1 rounded-lg">✕</button>
            </div>
            <div className="mt-4 space-y-4">
              <ol className="rounded-xl bg-purple-50 p-4 text-sm text-purple-950 space-y-2.5 list-decimal list-inside border border-purple-100">
                <li>Safari ব্রাউজারের নিচে থাকা <strong>Share (⬆️)</strong> আইকনে ট্যাপ করুন।</li>
                <li>নিচে স্ক্রল করে <strong>"Add to Home Screen"</strong> অপশনে ট্যাপ করুন।</li>
                <li>উপরে ডানপাশে <strong>"Add"</strong> বাটনে ক্লিক করলেই হোম স্ক্রিনে <strong>নাগরিক সেবা</strong> অ্যাপ ইনস্টল হয়ে যাবে!</li>
              </ol>
              <button
                onClick={() => setShowIOSModal(false)}
                className="w-full rounded-xl bg-purple-700 py-3 text-sm font-bold text-white hover:bg-purple-800 transition cursor-pointer"
              >
                ঠিক আছে, বুঝতে পেরেছি
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}