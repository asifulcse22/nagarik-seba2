import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function HEAD() {
  const apkPath = path.join(process.cwd(), 'public', 'nagarik-seba.apk');
  if (fs.existsSync(apkPath) && fs.statSync(apkPath).size > 10000) {
    return new NextResponse(null, {
      status: 200,
      headers: { 'x-real-apk': 'true' },
    });
  }
  return new NextResponse(null, { status: 404 });
}

export async function GET(req: Request) {
  const apkPath = path.join(process.cwd(), 'public', 'nagarik-seba.apk');

  // শুধুমাত্র আসল APK ফাইল (১০ কিলোবাইটের বড়) থাকলে ডাউনলোড হবে
  if (fs.existsSync(apkPath) && fs.statSync(apkPath).size > 10000) {
    const fileBuffer = fs.readFileSync(apkPath);
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/vnd.android.package-archive',
        'Content-Disposition': 'attachment; filename="Nagarik-Sheba.apk"',
      },
    });
  }

  return NextResponse.redirect(new URL('/?install=android', req.url));
}