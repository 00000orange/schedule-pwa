self.addEventListener('install', () => {
  self.skipWaiting(); // 立即激活新版本，不等待旧版本关闭
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim()); // 立即控制所有页面
});

self.addEventListener('fetch', event => {
  // 总是从网络获取最新资源，不使用缓存，保证数据同步
  event.respondWith(fetch(event.request));
});
