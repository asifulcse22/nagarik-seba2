import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: '/',
    name: 'নাগরিক সেবা - Nagarik Sheba',
    short_name: 'নাগরিক সেবা',
    description: 'বাংলাদেশের সহজ নাগরিক সেবা প্ল্যাটফর্ম',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#4a0475',
    theme_color: '#6b0f9c',
    orientation: 'portrait',
    icons: [
      {
        src: '/api/icon?size=192',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/api/icon?size=512',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}