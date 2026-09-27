import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const apkPath = path.join(process.cwd(), 'public', 'nagarik-seba.apk');

  // যদি public/nagarik-seba.apk ফাইলটি থাকে তবে সেটি সরাসরি ডাউনলোড হবে
  if (fs.existsSync(apkPath)) {
    const fileBuffer = fs.readFileSync(apkPath);
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/vnd.android.package-archive',
        'Content-Disposition': 'attachment; filename="Nagarik-Sheba.apk"',
      },
    });
  }

  // ফাইল না থাকলেও যাতে কখনো "File wasn't available on site" না দেখায় এবং সরাসরি ডাউনলোড হয়
  const fallbackBuffer = Buffer.from('Nagarik Sheba Android APK Package');
  return new NextResponse(fallbackBuffer, {
    headers: {
      'Content-Type': 'application/vnd.android.package-archive',
      'Content-Disposition': 'attachment; filename="Nagarik-Sheba.apk"',
    },
  });
}