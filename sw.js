self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('radio12-cache').then(cache => cache.addAll(['./index.html','./manifest.json','./logo.png']))
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(r => r || fetch(event.request)));
});