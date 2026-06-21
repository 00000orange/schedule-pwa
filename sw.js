// sw.js 完整内容（替换原文件）
self.addEventListener('install', (event) => {
  self.skipWaiting(); // 立即激活，不等待旧 SW 停止
  event.waitUntil(
    caches.open('schedule-v2').then((cache) => {
      return cache.addAll(['/index.html']);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim()); // 立即控制所有客户端
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => resp || fetch(event.request))
  );
});
