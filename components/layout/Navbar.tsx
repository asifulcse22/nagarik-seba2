'use client'
import Link from 'next/link'
import { LayoutDashboard, ArrowRight } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-xs">
      <div className="bg-[#4c1d95] text-purple-100 text-[11px] sm:text-xs py-1.5 px-4 flex justify-between items-center">
        <span className="flex items-center gap-1.5 truncate">
          <span>🇧🇩</span>
          <span className="truncate">বাংলাদেশের সহজ নাগরিক সেবা প্ল্যাটফর্ম</span>
        </span>
        <span className="hidden sm:inline text-purple-200 shrink-0">📞 01602797394</span>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-18 gap-2">
          {/* বাম পাশের লোগো - shrink-0 ও whitespace-nowrap দেওয়া হয়েছে যাতে কখনোই ভেঙে না যায় */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#7c3aed] to-[#9333ea] flex items-center justify-center text-white font-black text-lg sm:text-xl shadow-md group-hover:scale-105 transition-transform shrink-0">
              ন
            </div>
            <div className="shrink-0">
              <span className="text-base sm:text-xl font-black text-gray-900 block leading-tight whitespace-nowrap">
                নাগরিক সেবা
              </span>
              <span className="text-[9px] sm:text-xs text-gray-500 font-medium tracking-wider block whitespace-nowrap">
                Nagarik Sheba
              </span>
            </div>
          </Link>

          {/* ডেস্কটপ মেনু */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-bold text-gray-700 hover:text-[#7c3aed] transition-colors">হোম</Link>
            <Link href="/dashboard" className="text-sm font-bold text-gray-700 hover:text-[#7c3aed] transition-colors">সেবাসমূহ</Link>
            <Link href="/about" className="text-sm font-bold text-gray-700 hover:text-[#7c3aed] transition-colors">আমাদের সম্পর্কে</Link>
            <Link href="/contact" className="text-sm font-bold text-gray-700 hover:text-[#7c3aed] transition-colors">যোগাযোগ</Link>
          </div>

          {/* ডান পাশের বাটন - মোবাইলে এক লাইনে সুন্দরভাবে ফিট হবে */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <a
              href="https://wa.me/message/46NDI6H4ZPSIA1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-4 py-1.5 sm:py-2 bg-[#00c853] hover:bg-[#00b34a] text-white font-bold text-[11px] sm:text-sm rounded-full shadow-md transition-all hover:-translate-y-0.5 whitespace-nowrap"
            >
              <span>💬</span>
              <span className="sm:hidden">WhatsApp</span>
              <span className="hidden sm:inline">WhatsApp এ মেসেজ দিন</span>
            </a>

            <Link
              href="/dashboard"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#9333ea] hover:from-[#6d28d9] hover:to-[#7e22ce] text-white font-black text-[11px] sm:text-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
            >
              <LayoutDashboard size={14} className="shrink-0" />
              <span className="sm:hidden">ড্যাশবোর্ড</span>
              <span className="hidden sm:inline">ড্যাশবোর্ড / সেবাসমূহ</span>
              <ArrowRight size={14} className="hidden sm:inline" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}