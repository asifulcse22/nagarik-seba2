import type { Metadata } from "next";
// @ts-ignore
import "./globals.css";
import MobileAppInstall from "../components/MobileAppInstall";

export const metadata: Metadata = {
  title: "নাগরিক সেবা - Nagarik Sheba",
  description:
    "বাংলাদেশের নাগরিক সেবা প্ল্যাটফর্ম। NID, স্মার্টকার্ড, TIN সহ ৪২টিরও বেশি সরকারি সেবা এক জায়গায়।",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "নাগরিক সেবা",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <head>
        <meta name="theme-color" content="#6b0f9c" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@500;600;700&family=Noto+Sans+Bengali:wght@500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body
        style={{
          fontFamily: "'Noto Sans Bengali', 'Hind Siliguri', sans-serif",
          fontWeight: 500,
        }}
      >
        {children}
        <MobileAppInstall />
      </body>
    </html>
  );
}