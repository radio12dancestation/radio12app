
self.addEventListener('install', event => {
  console.log('Service Worker installato');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});
