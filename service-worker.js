const CACHE_NAME = 'offline-cache-v3'; // ← bump this every time you update

const OFFLINE_URL = './offline.html';  // <-- path updated

self.addEventListener('install', (event) => {
  console.log('✅ Service Worker installed.');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
         './',
        './index.html',
        './offline.html', 
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    // It's a page navigation request (e.g. user typed URL or refreshed)
    event.respondWith(
      fetch(event.request).catch(() => {
        console.log('🔌 Showing offline fallback page');
        return caches.match('offline.html');
      })
    );
  } else {
    // For non-navigation requests, use the cache normally
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});


self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
});

