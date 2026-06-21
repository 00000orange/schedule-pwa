// 最简单的 Service Worker，不缓存任何东西，只做网络请求
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
