'use client';

import React, { useState } from 'react';

export default function MobileAppInstall() {
  const [showIOSModal, setShowIOSModal] = useState(false);

  return (
    <>
      {/* নিচে ডানপাশে পাশাপাশি ২টি বাটন: ১. সরাসরি Android APK ডাউনলোড, ২. iPhone (iOS) অ্যাপ */}
      <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
        {/* ১. Android: ক্লিক করলেই সরাসরি .APK ডাউনলোড হবে (কোনো পপআপ নেই) */}
        <a
          href="/api/download-apk"
          download="Nagarik-Sheba.apk"
          className="flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-3 text-xs sm:text-sm font-bold text-white shadow-xl hover:scale-105 transition-transform cursor-pointer border border-white/20"
        >
          <span>🤖 Android APK ডাউনলোড</span>
        </a>

        {/* ২. iOS (iPhone): ক্লিক করলে iPhone-এ ইনস্টল করার গাইড ওপেন হবে */}
        <button
          onClick={() => setShowIOSModal(true)}
          className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-purple-700 to-fuchsia-600 px-4 py-3 text-xs sm:text-sm font-bold text-white shadow-xl hover:scale-105 transition-transform cursor-pointer border border-white/20"
        >
          <span>🍎 iPhone (iOS) অ্যাপ</span>
        </button>
      </div>

      {/* শুধুমাত্র iPhone (iOS) ইউজারদের জন্য ইনস্টল গাইড */}
      {showIOSModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b pb-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-700 text-white font-bold">
                  🍎
                </div>
                <div>
                  <h3 className="text-base font-bold text-purple-950">iPhone / iPad (iOS) অ্যাপ ইনস্টল</h3>
                  <p className="text-xs text-gray-500">নাগরিক সেবা iOS ওয়েব অ্যাপ</p>
                </div>
              </div>
              <button
                onClick={() => setShowIOSModal(false)}
                className="rounded-lg px-2.5 py-1 text-sm text-gray-500 hover:bg-gray-100 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 space-y-4">
              <p className="text-sm text-gray-600 leading-relaxed">
                অ্যাপল (iPhone ও iPad)-এ সরাসরি <strong>Safari</strong> ব্রাউজার থেকে অ্যাপটি আপনার ফোনের হোম স্ক্রিনে ইনস্টল করে লগইন ও রেজিস্ট্রেশনসহ সব কাজ করতে পারবেন:
              </p>
              <ol className="rounded-xl bg-purple-50 p-4 text-sm text-purple-950 space-y-2.5 list-decimal list-inside border border-purple-100">
                <li>Safari ব্রাউজারের নিচে থাকা <strong>Share (⬆️)</strong> আইকনে ট্যাপ করুন।</li>
                <li>নিচে স্ক্রল করে <strong>"Add to Home Screen"</strong> অপশনে ট্যাপ করুন।</li>
                <li>উপরে ডানপাশে <strong>"Add"</strong> বাটনে ক্লিক করলেই আপনার iPhone-এর হোম স্ক্রিনে <strong>নাগরিক সেবা</strong> অ্যাপ ইনস্টল হয়ে যাবে!</li>
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