'use client';

import React, { useEffect, useState } from 'react';

export default function MobileAppInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [hasRealApk, setHasRealApk] = useState(false);
  const [showIOSModal, setShowIOSModal] = useState(false);
  const [showAndroidGuide, setShowAndroidGuide] = useState(false);

  useEffect(() => {
    // ১. Service Worker রেজিস্টার করা (Android সরাসরি ইনস্টলের জন্য আবশ্যক)
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }

    // ২. public/nagarik-seba.apk আসল ফাইল আছে কি না চেক করা
    fetch('/api/download-apk', { method: 'HEAD' })
      .then((res) => {
        if (res.ok && res.headers.get('x-real-apk') === 'true') {
          setHasRealApk(true);
        }
      })
      .catch(() => {});

    // ৩. Android Chrome-এর ১-ক্লিক নেটিভ অ্যাপ ইনস্টল ইভেন্ট ধরা
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleAndroidInstall = async () => {
    // যদি public/nagarik-seba.apk আসল ফাইল থাকে তবে সরাসরি ডাউনলোড হবে
    if (hasRealApk) {
      window.location.href = '/api/download-apk';
      return;
    }

    // নতুবা সরাসরি Android Chrome-এর আসল সিস্টেম ইনস্টলার পপআপ চালু হবে (কোনো Parsing failed হবে না!)
    if (deferredPrompt) {
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      setDeferredPrompt(null);
      return;
    }

    // যদি ব্রাউজার মেনু থেকে ইনস্টল করতে হয়
    setShowAndroidGuide(true);
  };

  return (
    <>
      <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
        {/* ১. Android বাটন */}
        <button
          onClick={handleAndroidInstall}
          className="flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-3 text-xs sm:text-sm font-bold text-white shadow-xl hover:scale-105 transition-transform cursor-pointer border border-white/20"
        >
          <span>🤖 Android অ্যাপ ইনস্টল</span>
        </button>

        {/* ২. iOS (iPhone) বাটন */}
        <button
          onClick={() => setShowIOSModal(true)}
          className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-purple-700 to-fuchsia-600 px-4 py-3 text-xs sm:text-sm font-bold text-white shadow-xl hover:scale-105 transition-transform cursor-pointer border border-white/20"
        >
          <span>🍎 iPhone (iOS) অ্যাপ</span>
        </button>
      </div>

      {/* Android সরাসরি ইনস্টল গাইড */}
      {showAndroidGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="text-base font-bold text-gray-900">🤖 Android ফোনে সরাসরি অ্যাপ ইনস্টল</h3>
              <button onClick={() => setShowAndroidGuide(false)} className="text-gray-500 hover:bg-gray-100 px-2 py-1 rounded-lg">✕</button>
            </div>
            <div className="mt-4 space-y-3 text-sm text-gray-700">
              <p>কোনো <strong>Parsing Failed</strong> ছাড়াই সরাসরি আপনার ফোনে আসল অ্যাপটি ইনস্টল করতে:</p>
              <ol className="rounded-xl bg-orange-50 p-4 space-y-2 list-decimal list-inside border border-orange-200 text-gray-900 font-medium">
                <li>Chrome ব্রাউজারের উপরে ডানপাশে <strong>৩-ডট মেনু (⋮)</strong>-তে ট্যাপ করুন।</li>
                <li><strong>"Install app"</strong> অথবা <strong>"Add to Home screen"</strong>-এ ট্যাপ করুন।</li>
                <li><strong>"Install"</strong> চাপলেই ৫ সেকেন্ডে আপনার ফোনে <strong>নাগরিক সেবা</strong> অ্যাপ ইনস্টল হয়ে যাবে!</li>
              </ol>
              <button
                onClick={() => setShowAndroidGuide(false)}
                className="w-full rounded-xl bg-orange-500 py-3 font-bold text-white hover:bg-orange-600 transition cursor-pointer"
              >
                ঠিক আছে
              </button>
            </div>
          </div>
        </div>
      )}

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