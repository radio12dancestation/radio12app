caches.open('radio12-cache').then((cache) => {
  return cache.addAll([
    '/radio12app/',
    '/radio12app/index.html',
    '/radio12app/logo.png',
    // altri file se presenti
  ]);
});
