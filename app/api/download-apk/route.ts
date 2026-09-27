import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

export const maxDuration = 60;

// ZIP ফাইল থেকে সরাসরি আসল Signed .apk বাইনারি আলাদা করার ফাংশন (কোনো অতিরিক্ত প্যাকেজ ছাড়াই)
function extractApkFromZip(buf: Buffer): Buffer | null {
  let eocdOffset = -1;
  for (let i = buf.length - 22; i >= 0; i--) {
    if (buf.readUInt32LE(i) === 0x06054b50) {
      eocdOffset = i;
      break;
    }
  }
  if (eocdOffset === -1) return null;

  const cdEntries = buf.readUInt16LE(eocdOffset + 10);
  let cdOffset = buf.readUInt32LE(eocdOffset + 16);

  for (let i = 0; i < cdEntries; i++) {
    const method = buf.readUInt16LE(cdOffset + 10);
    const compSize = buf.readUInt32LE(cdOffset + 20);
    const nameLen = buf.readUInt16LE(cdOffset + 28);
    const extraLen = buf.readUInt16LE(cdOffset + 30);
    const commentLen = buf.readUInt16LE(cdOffset + 32);
    const localHeaderOffset = buf.readUInt32LE(cdOffset + 42);
    const name = buf.subarray(cdOffset + 46, cdOffset + 46 + nameLen).toString('utf8');

    if (name.endsWith('.apk')) {
      const lNameLen = buf.readUInt16LE(localHeaderOffset + 26);
      const lExtraLen = buf.readUInt16LE(localHeaderOffset + 28);
      const dataStart = localHeaderOffset + 30 + lNameLen + lExtraLen;
      const compData = buf.subarray(dataStart, dataStart + compSize);
      return method === 8 ? zlib.inflateRawSync(compData) : compData;
    }
    cdOffset += 46 + nameLen + extraLen + commentLen;
  }
  return null;
}

export async function GET() {
  const publicApkPath = path.join(process.cwd(), 'public', 'nagarik-seba.apk');
  const tmpApkPath = '/tmp/nagarik-seba.apk';

  // ১. যদি public/nagarik-seba.apk ফাইলটি থাকে (১০০ KB এর বড় আসল APK), তবে সেটি সাথে সাথে ডাউনলোড হবে
  if (fs.existsSync(publicApkPath) && fs.statSync(publicApkPath).size > 100000) {
    const fileBuffer = fs.readFileSync(publicApkPath);
    return new NextResponse(new Uint8Array(fileBuffer), {
      headers: {
        'Content-Type': 'application/vnd.android.package-archive',
        'Content-Disposition': 'attachment; filename="Nagarik-Sheba.apk"',
        'Content-Length': String(fileBuffer.length),
      },
    });
  }

  // ২. যদি সার্ভারের /tmp ফোল্ডারে আগে থেকেই জেনারেট করা APK ক্যাশ থাকে
  if (fs.existsSync(tmpApkPath) && fs.statSync(tmpApkPath).size > 100000) {
    const fileBuffer = fs.readFileSync(tmpApkPath);
    return new NextResponse(new Uint8Array(fileBuffer), {
      headers: {
        'Content-Type': 'application/vnd.android.package-archive',
        'Content-Disposition': 'attachment; filename="Nagarik-Sheba.apk"',
        'Content-Length': String(fileBuffer.length),
      },
    });
  }

  // ৩. নতুবা স্বয়ংক্রিয়ভাবে আসল Signed Android APK (876 KB) জেনারেট করে ডাউনলোড করাবে
  try {
    const payload = {
      additionalTrustedOrigins: [],
      appVersion: '1.0.0.0',
      appVersionCode: 1,
      backgroundColor: '#4a0475',
      display: 'standalone',
      enableSiteSettingsShortcut: true,
      enableNotifications: true,
      includeSourceCode: false,
      fallbackType: 'customtabs',
      features: {
        locationDelegation: { enabled: false },
        playBilling: { enabled: false },
      },
      host: 'https://nagarik-seba3.vercel.app',
      iconUrl: 'https://placehold.co/512x512/6b0f9c/ffffff.png?text=N',
      launcherName: 'নাগরিক সেবা',
      name: 'নাগরিক সেবা - Nagarik Sheba',
      maskableIconUrl: 'https://placehold.co/512x512/6b0f9c/ffffff.png?text=N',
      navigationColor: '#4a0475',
      navigationColorDark: '#4a0475',
      navigationDividerColor: '#4a0475',
      navigationDividerColorDark: '#4a0475',
      orientation: 'portrait',
      packageId: 'app.vercel.nagarik_seba3.twa',
      pwaUrl: 'https://nagarik-seba3.vercel.app',
      shortcuts: [],
      signingMode: 'new',
      signing: {
        file: null,
        alias: 'nagarik-seba-key',
        fullName: 'Nagarik Sheba',
        organization: 'Nagarik Sheba',
        organizationalUnit: 'Citizen Services',
        countryCode: 'BD',
        keyPassword: 'Nagarik123$%',
        storePassword: 'Nagarik987#@',
      },
      splashScreenFadeOutDuration: 300,
      startUrl: '/',
      themeColor: '#6b0f9c',
      themeColorDark: '#4a0475',
      webManifestUrl: 'https://nagarik-seba3.vercel.app/manifest.webmanifest',
    };

    const response = await fetch(
      'https://pwabuilder-cloudapk.azurewebsites.net/generateAppPackage',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'platform-identifier': 'PWABuilder',
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to build APK package');
    }

    const zipArrayBuffer = await response.arrayBuffer();
    const zipBuffer = Buffer.from(zipArrayBuffer);
    const apkBuffer = extractApkFromZip(zipBuffer);

    if (!apkBuffer || apkBuffer.length < 100000) {
      throw new Error('Invalid extracted APK buffer');
    }

    // পরের বারের জন্য /tmp ফোল্ডারে সেভ করে রাখা
    try {
      fs.writeFileSync(tmpApkPath, apkBuffer);
    } catch {}

    return new NextResponse(new Uint8Array(apkBuffer), {
      headers: {
        'Content-Type': 'application/vnd.android.package-archive',
        'Content-Disposition': 'attachment; filename="Nagarik-Sheba.apk"',
        'Content-Length': String(apkBuffer.length),
      },
    });
  } catch (err) {
    return NextResponse.json(
      { error: 'APK তৈরি করতে সমস্যা হয়েছে, অনুগ্রহ করে আবার চেষ্টা করুন।' },
      { status: 500 }
    );
  }
}