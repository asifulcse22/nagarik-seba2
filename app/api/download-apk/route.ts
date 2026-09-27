import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

export const maxDuration = 60;

let memoryCachedApk: Uint8Array | null = null;

const APK_HEADERS = (byteLength: number) => ({
  'Content-Type': 'application/vnd.android.package-archive',
  'Content-Disposition': 'attachment; filename="Nagarik-Sheba.apk"',
  'Content-Length': String(byteLength),
  'Cache-Control': 'public, max-age=31536000, s-maxage=31536000, stale-while-revalidate=86400, immutable',
});

const BANGLA_ICON_PNG_BASE64 =
  'iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAnFBMVEVKBHVKBHZNB3xRC4VWEZJbF6BiHa5nJLxtKspyL9V2M995N+Z7Oet8Ou15N+d2NN9yL9ZoJL1iHq5cF6BRC4ZLBXlRDIdbFp5nI7t1M95MBnpVEJBjH7J2NOB3NOFPCoNeGaV0Mdl0MdpgHKtVD49xLtNWEZNvLM9lIbZYE5hYFJhOCH9ZFJlLBnloJb97OexaFZtjH7NNCH5PCoIvZ3zPAAAAB3RJTUUH6gkbDxESWj81zgAACU9JREFUeNrt3YtWEl0chvFUTCS+yJKDqEHh+Zze/719q9VyZZoG7D0889/z/C5hP28BwzC+eydJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkmphbX2jtfl+q73d+dD9r+66H3uf2jufv7R219fogytAfzAc7dFNl7Y3Gg769BHGNd4/OKQTZvD1YH9MH2VAk+k3ulxG36cT+kBDmczq/1q/qO7MDcxnPOzRsSrSGfpa8E+7IzpTpUYb9AHX29ExXahyx0f0IdfXSYeusxKdE/qg6+ko7uf9Re35v8ALu6d0lZU69b3AH8ZndJGVO/MTwW/ndA3EBX3sdXHZplNA2pf00dfCFd0BdEUfPu/6ho6AurmmA8AGt3QC2O2AToC6o8+/Bu7oCKAD+vBr4QedgdJv6rv/59rNvGvovhlX/ufRu6djAB7oU6+VBzrHym3QR14zTftuYEAfeO006+Og//5fatL/Ab7+/01z3gfc00ddU035LNAv9a7fVJ2GXA/w+s9r2nSalfhBH3ONHdBxVsDvf95yR+epnBcA3lb65YDrpn///y+3hd8h0uz7f+ZxQyeqVJPv/5tXyfcJXtKHG0LB9wp7BWAe5V4NuKCPNohzOlRFxvTBhlHor8aa9/u/ZZ3RqSrhPQDz26VjVaFZv/9Oc0rHqsARfaihFPgEieY8/yOHPTpXdif0kQZT3HOE/BXIYjp0sMx8B7Cowt4FlP/8v9yO6WRZeQ1gcUVdCyj7+a/VGNHRMvJbgGUU9I3AkD7LkIZ0tnz8DLiMHp0tmwl9lEEV8xcmZvRJBjWjw+VS3t9/WY0uHS4TXwGWVchrwJQ+x7CmdLo8vtPnGNY3Ol0WXgVaXhHXgvbpUwxsn46Xg8+DXV4Rzwv4Sp9iYId0vAz69CGGVsBTg3wiRIoCnhfhN4EpCvhG0HtBUhRwV4i/B0gR//cBa/QRBrdGB0y1Tp9gcOt0wFS79AkGF/4Z4i36BINr0QFTfaFPMLhNOmCqz/QJBveeDphqhz7B4LbogKl8Mlya8M+M+0SfYHDbdMBU/nWQNOGfE/CRPsHgPtABU/mbgDThfxtAH2B4dEAHAKMDOgAYHdABwOiADgBGB3QAMDqgA4DRAR0AjA7oAGB0QAcAowM6ABgd0AHA6IAOAEYHdAAwOqADgNEBHQCMDugAYHRABwCjAzoAGB3QAcDogA4ARgd0ADA6oAOA0QEdAIwO6ABgdEAHAKMDOgAYHdABwOiADgBGB3QAMDqgA4DRAR0AjA7oAGB0QAcAowM6ABgd0AHA6IAOAEYHdAAwOqADgNEBHQCMDugAYHRABwCjAzoAGB3QAcDogA4ARgd0ADA6oAOA0QEdAIwO6ABgdEAHAKMDOgAYHdABwOiADgBGB3QAMDqgA4DRAR0AjA7oAGB0QAcAowM6ABgd0AHA6IAOAEYHdAAwOqADgNEBHQCMDugAYHRABwCjAzoAGB3QAcDogA4ARgd0ADA6oAOA0QEdAIwO6ABgdEAHAKMDOgAYHdABwOiADgBGB3QAMDqgA4DRAR0AjA7oAGB0QAcAowM6ABgd0AHA6IAOAEYHdAAwOqADgNEBHQCMDugAYHRABwCjAzoAGB3QAcDogA4ARgd0ADA6oAOA0QEdAIwO6ABgdEAHAKMDOgAYHdABwOiADgBGB3QAMDqgA4DRAR0AjA7oAGB0QAcAowM6ABgd0AHA6IAOAEYHdAAwOqADgNEBHQCMDugAYHRABwCjAzoAGB3QAcDogA4ARgd0ADA6oAOA0QEdAIwO6ABgdEAHAKMDOgAYHdABwOiADgBGB3QAMDqgA4DRAR0AjA7oAGB0QAcAowM6ABgd0AHA6IAOAEYHdAAwOqADgNEBHQCMDugAYHRABwCjAzoAGB3QAcDogA4ARgd0ADA6oAOA0QEdAIwO6ABgdEAHAKMDOgAYHdABwOiADgBGB3QAMDqgA4DRAR0AjA7oAGB0QAcAowM6ABgd0AHA6IAOAEYHdAAwOqADgNEBHQCMDugAYHRABwCjAzoAGB3QAcDogA4ARgd0ADA6oAOA0QEdAIwO6ABgdMBUPfoAg+vRAVNt0ycY3Cc6YKo2fYLBtemAqbboEwxuhw6Y6j19gsF9pgOm2qRPMLgvdMBULfoEg2vRAVNt0CcY3C4dMNU6fYLBrdMBU63RJxjcGh0w2R59hKHt0fnSjegzDG1E50s3pM8wtCGdL92APsPQBnS+dH36DEPr0/kyOKQPMbCvdLwcDuhTDOyAjpfDPn2Kge3T8XIY06cY2JiOl8U3+hjD+k6ny2NKn2NYUzpdHhP6HMOa0Oky8bcBywn/m4BHM/okg5rR4XLxNWA5pbwCvHvXo48ypA6dLR+/EVxGAd8EPvJa0DLKuAr0i3eFLK6Ae0F+26VPM6ANOlpWx/RxhnNMJ8vriD7PcI7oZJn5nIDFFPQZ8JcT+kSDOaGDZefvAxZRwO8BnvNdwCJKewfw0yl9qIGc0rGq4LWA+ZV1DeDRGX2sYZzRqarhNwLzKulbgKfO6YMN4oIOVRmfGTeP8E+Ge90lfbYhXNKZKnRFH24AV3SkSt3Qx1t7N3Sial3f0gdcc7fXdKKK+byItxXwRIh/uKOPuNbu6Dwr4PMCXveDjrMSXg14TcFXAJ7qe3fQ3/VKeCLQPO7pk66pezrMyjzQR11LD3SWFfIZ4i+VeQ/Aa7wc8Fz5FwD+5P8Bf2rWv/+ffB/wVJNe/x/d+9SAR53mvP9/qu8VoV/aTfn8/8IP+uhroYjnwS7Jb4aa8f3P6wZNvz/gtmkf/567bvY9Qjel3/8xhybfJ1j2/X/zumzqp4F2yff/LuSCToE4p4+9RsbN+93gWam//1rSRrN+PX4a/m8C53fUnGeI7JX4/IcMTppxr1invOf/ZHNU/vMEj/3X/6aNsp8qO/K1/5/Gw1JfCXpD3/nPZzIr76/MdGfl/P2HVZhMv9PJMvo2tf7ixvsHX+lyGRwe7Ps//9L6g+Eo7vWBvdFw0Ni7fTJaW99tffm80/7U+1j/9wbdD53t9tb7zdbG+hp9cJIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZKkR/8DXoF16y2WfWMAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjYtMDktMjdUMTU6MTc6MTgrMDA6MDDV3BE4AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDI2LTA5LTI3VDE1OjE3OjE4KzAwOjAwpIGphAAAAABJRU5ErkJggg==';

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

  if (searchParams.get('icon') === '512') {
    const iconBuf = Buffer.from(BANGLA_ICON_PNG_BASE64, 'base64');
    return new NextResponse(new Uint8Array(iconBuf) as unknown as BodyInit, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, s-maxage=31536000, immutable',
      },
    });
  }

  if (memoryCachedApk && memoryCachedApk.byteLength > 100000) {
    return new NextResponse(memoryCachedApk as unknown as BodyInit, {
      headers: APK_HEADERS(memoryCachedApk.byteLength),
    });
  }

  const publicApkPath = path.join(process.cwd(), 'public', 'nagarik-seba.apk');
  const tmpApkPath = '/tmp/nagarik-seba-v2.apk';

  if (fs.existsSync(publicApkPath) && fs.statSync(publicApkPath).size > 100000) {
    const fileBuffer = fs.readFileSync(publicApkPath);
    memoryCachedApk = new Uint8Array(fileBuffer);
    return new NextResponse(memoryCachedApk as unknown as BodyInit, {
      headers: APK_HEADERS(memoryCachedApk.byteLength),
    });
  }

  if (fs.existsSync(tmpApkPath) && fs.statSync(tmpApkPath).size > 100000) {
    const fileBuffer = fs.readFileSync(tmpApkPath);
    memoryCachedApk = new Uint8Array(fileBuffer);
    return new NextResponse(memoryCachedApk as unknown as BodyInit, {
      headers: APK_HEADERS(memoryCachedApk.byteLength),
    });
  }

  try {
    const iconUrl = 'https://nagarik-seba3.vercel.app/api/download-apk?icon=512';

    const payload = {
      additionalTrustedOrigins: [],
      appVersion: '2.0.0.0',
      appVersionCode: 2,
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
      iconUrl,
      launcherName: 'নাগরিক সেবা',
      name: 'নাগরিক সেবা - Nagarik Sheba',
      maskableIconUrl: iconUrl,
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