const CACHE_NAME = 'nagarik-sheba-fast-v2'
const PRECACHE_URLS = [
  '/',
  '/dashboard',
  '/services',
  '/dashboard/balance',
  '/dashboard/orders'
]

self.addEventListener('install', (event) => {
  self.skipWaiting()
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_URLS).catch(() => {})
    })
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key)
        })
      )
    ).then(() => self.clients.claim())
  )
})

// Stale-While-Revalidate কৌশল: আগে ক্যাশ থেকে ফাস্ট দেখাবে, ব্যাকগ্রাউন্ডে আপডেট করবে
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return
  const url = new URL(event.request.url)

  // Supabase বা API কল ক্যাশ করা হবে না (যাতে ব্যালেন্স ও অর্ডার সবসময় রিয়েল-টাইম থাকে)
  if (url.pathname.startsWith('/api/') || url.hostname.includes('supabase.co')) {
    return
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone()
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone)
            })
          }
          return networkResponse
        })
        .catch(() => cachedResponse)

      // ক্যাশে থাকলে ০ সেকেন্ডে ক্যাশ থেকে রিটার্ন করবে, না থাকলে নেটওয়ার্ক থেকে আনবে
      return cachedResponse || fetchPromise
    })
  )
})