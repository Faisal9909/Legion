// Keeps the apps up to date and playable offline.
// Pages: always ask the server first (so a new version shows on the next open),
// and fall back to the saved copy when there is no connection.
const CACHE = 'my-apps-v1';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    try {
      const sameOrigin = new URL(req.url).origin === self.location.origin;
      const res = await fetch(req, sameOrigin ? { cache: 'no-cache' } : undefined);
      if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
      return res;
    } catch (err) {
      const hit = await cache.match(req, { ignoreSearch: true });
      if (hit) return hit;
      throw err;
    }
  })());
});
