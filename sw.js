self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('radio12-cache').then(cache => {
      return cache.addAll(['./index.html', './manifest.json', './logo.png']);
    })
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
