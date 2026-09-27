import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

export const maxDuration = 60;

// মেমোরি ক্যাশ - যাতে দ্বিতীয়বার ক্লিক করলে ০.০১ সেকেন্ডে সাথে সাথে ডাউনলোড হয়
let memoryCachedApk: Uint8Array | null = null;

const APK_HEADERS = (byteLength: number) => ({
  'Content-Type': 'application/vnd.android.package-archive',
  'Content-Disposition': 'attachment; filename="Nagarik-Sheba.apk"',
  'Content-Length': String(byteLength),
  'Cache-Control': 'public, max-age=0, s-maxage=86400, stale-while-revalidate=86400',
});

// ফিক্সড Signing Keystore (যাতে assetlinks.json-এর সাথে ১০০% মিলে যায় এবং উপরের লিংক বার না দেখায়)
const FIXED_KEYSTORE_BASE64 =
  'data:application/octet-stream;base64,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';

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

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  // অ্যাপ ওপেন করার সময় Splash Screen-এ "ন" বা "N"-এর বদলে সুন্দর গোলাকার Loading Icon দেখানোর PNG
  if (searchParams.get('splash') === 'loader') {
    const W = 512, H = 512;
    const raw = Buffer.alloc(H * (W * 4 + 1));
    const cx = 256, cy = 256, outerR = 54, innerR = 38;

    for (let y = 0; y < H; y++) {
      const rowOff = y * (W * 4 + 1);
      raw[rowOff] = 0;
      for (let x = 0; x < W; x++) {
        const dx = x - cx, dy = y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const pxOff = rowOff + 1 + x * 4;
        let r = 255, g = 255, b = 255;

        if (dist >= innerR - 1.5 && dist <= outerR + 1.5) {
          const edgeAlpha = Math.min(
            Math.max(0, dist - (innerR - 1.5)) / 1.5,
            Math.max(0, outerR + 1.5 - dist) / 1.5,
            1
          );
          const norm = (Math.atan2(dy, dx) + Math.PI) / (2 * Math.PI);
          const midR = (innerR + outerR) / 2;
          const halfThick = (outerR - innerR) / 2;
          const cap2Angle = -Math.PI + 0.72 * 2 * Math.PI;
          const dCap1 = Math.hypot(x - (cx - midR), y - cy);
          const dCap2 = Math.hypot(
            x - (cx + midR * Math.cos(cap2Angle)),
            y - (cy + midR * Math.sin(cap2Angle))
          );

          let arc = 0;
          if (norm < 0.72) arc = 0.25 + 0.75 * (norm / 0.72);
          else if (dCap1 <= halfThick) arc = 0.25;
          else if (dCap2 <= halfThick) arc = 1.0;

          const ringR = Math.round(237 * (1 - arc) + 109 * arc);
          const ringG = Math.round(233 * (1 - arc) + 40 * arc);
          const ringB = Math.round(254 * (1 - arc) + 217 * arc);

          r = Math.round(255 * (1 - edgeAlpha) + ringR * edgeAlpha);
          g = Math.round(255 * (1 - edgeAlpha) + ringG * edgeAlpha);
          b = Math.round(255 * (1 - edgeAlpha) + ringB * edgeAlpha);
        }

        raw[pxOff] = r;
        raw[pxOff + 1] = g;
        raw[pxOff + 2] = b;
        raw[pxOff + 3] = 255;
      }
    }

    const makeChunk = (type: string, data: Buffer) => {
      const len = Buffer.alloc(4);
      len.writeUInt32BE(data.length, 0);
      const t = Buffer.from(type, 'ascii');
      const crc = Buffer.alloc(4);
      crc.writeUInt32BE(zlib.crc32(Buffer.concat([t, data])) >>> 0, 0);
      return Buffer.concat([len, t, data, crc]);
    };

    const ihdr = Buffer.alloc(13);
    ihdr.writeUInt32BE(W, 0);
    ihdr.writeUInt32BE(H, 4);
    ihdr[8] = 8;
    ihdr[9] = 6;

    const loaderPng = Buffer.concat([
      Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
      makeChunk('IHDR', ihdr),
      makeChunk('IDAT', zlib.deflateSync(raw)),
      makeChunk('IEND', Buffer.alloc(0)),
    ]);

    return new NextResponse(new Uint8Array(loaderPng) as unknown as BodyInit, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, s-maxage=31536000, immutable',
      },
    });
  }

  // ০. মেমোরিতে ক্যাশ থাকলে ০.০১ সেকেন্ডে সাথে সাথে রিটার্ন
  if (memoryCachedApk && memoryCachedApk.byteLength > 100000) {
    return new NextResponse(memoryCachedApk as unknown as BodyInit, {
      headers: APK_HEADERS(memoryCachedApk.byteLength),
    });
  }

  const publicApkPath = path.join(process.cwd(), 'public', 'nagarik-seba.apk');
  const tmpApkPath = '/tmp/nagarik-seba-v4.apk';

  // ১. যদি public/nagarik-seba.apk ফাইলটি থাকে (সবচেয়ে দ্রুত - ০.১ সেকেন্ড)
  if (fs.existsSync(publicApkPath) && fs.statSync(publicApkPath).size > 100000) {
    const fileBuffer = fs.readFileSync(publicApkPath);
    memoryCachedApk = new Uint8Array(fileBuffer);
    return new NextResponse(memoryCachedApk as unknown as BodyInit, {
      headers: APK_HEADERS(memoryCachedApk.byteLength),
    });
  }

  // ২. যদি /tmp ফোল্ডারে ক্যাশ থাকে
  if (fs.existsSync(tmpApkPath) && fs.statSync(tmpApkPath).size > 100000) {
    const fileBuffer = fs.readFileSync(tmpApkPath);
    memoryCachedApk = new Uint8Array(fileBuffer);
    return new NextResponse(memoryCachedApk as unknown as BodyInit, {
      headers: APK_HEADERS(memoryCachedApk.byteLength),
    });
  }

  try {
    // অ্যাপ ওপেন করার সময় স্ক্রিনের মাঝখানে "ন"-এর বদলে সুন্দর গোলাকার Loading Icon দেখাবে
    const splashLoaderIconUrl = 'https://nagarik-seba3.vercel.app/api/download-apk?splash=loader';
    // আর মোবাইলের হোম স্ক্রিনে অ্যাপের আসল লোগো থাকবে
    const launcherIconUrl = 'https://nagarik-seba3.vercel.app/api/icon?size=512';

    const payload = {
      additionalTrustedOrigins: [],
      appVersion: '4.0.0.0',
      appVersionCode: 4,
      backgroundColor: '#ffffff',
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
      iconUrl: splashLoaderIconUrl,
      launcherName: 'নাগরিক সেবা',
      name: 'নাগরিক সেবা - Nagarik Sheba',
      maskableIconUrl: launcherIconUrl,
      navigationColor: '#4a0475',
      navigationColorDark: '#4a0475',
      navigationDividerColor: '#4a0475',
      navigationDividerColorDark: '#4a0475',
      orientation: 'portrait',
      packageId: 'app.vercel.nagarik_seba3.twa',
      pwaUrl: 'https://nagarik-seba3.vercel.app',
      shortcuts: [],
      signingMode: 'mine',
      signing: {
        file: FIXED_KEYSTORE_BASE64,
        alias: 'my-key-alias',
        fullName: 'Nagarik Sheba',
        organization: 'Nagarik Sheba',
        organizationalUnit: 'Citizen Services',
        countryCode: 'BD',
        keyPassword: '52SO4fg9ZIsw',
        storePassword: 'o93619kHyx82',
      },
      splashScreenFadeOutDuration: 0,
      startUrl: '/',
      themeColor: '#4c1d95',
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

    try {
      fs.writeFileSync(tmpApkPath, apkBuffer);
    } catch {}

    memoryCachedApk = new Uint8Array(apkBuffer);

    return new NextResponse(memoryCachedApk as unknown as BodyInit, {
      headers: APK_HEADERS(memoryCachedApk.byteLength),
    });
  } catch (err) {
    return NextResponse.json(
      { error: 'APK তৈরি করতে সমস্যা হয়েছে, অনুগ্রহ করে আবার চেষ্টা করুন।' },
      { status: 500 }
    );
  }
}