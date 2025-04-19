self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('radio12-cache').then((cache) => {
      return cache.addAll([
        'index.html',
        'logo.png',
        'manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});