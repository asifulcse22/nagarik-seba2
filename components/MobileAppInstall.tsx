'use client';

import React, { useEffect, useState } from 'react';

export default function MobileAppInstall() {
  const [showIOSModal, setShowIOSModal] = useState(false);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }
  }, []);

  return (
    <>
      <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
        {/* ১. Android: ক্লিক করলেই সরাসরি আসল ৮৭৬ KB Signed .APK ডাউনলোড হবে */}
        <a
          href="/api/download-apk"
          download="Nagarik-Sheba.apk"
          className="flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-3 text-xs sm:text-sm font-bold text-white shadow-xl hover:scale-105 transition-transform cursor-pointer border border-white/20"
        >
          <span>🤖 Android APK ডাউনলোড</span>
        </a>

        {/* ২. iOS (iPhone) বাটন */}
        <button
          onClick={() => setShowIOSModal(true)}
          className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-purple-700 to-fuchsia-600 px-4 py-3 text-xs sm:text-sm font-bold text-white shadow-xl hover:scale-105 transition-transform cursor-pointer border border-white/20"
        >
          <span>🍎 iPhone (iOS) অ্যাপ</span>
        </button>
      </div>

      {/* iPhone (iOS) ইনস্টল গাইড */}
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