self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open('schedule-v2').then((cache) => {
      return cache.addAll(['/index.html']);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => resp || fetch(event.request))
  );
});
