const cacheName = 'cache-members';
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(['/studentss/', '/studentss/index.html', '/studentss/members.json', '/studentss/javascript.js', '/studentss/morten.png', '/studentss/mystyle.css', '/studentss/nina.png', '/studentss/olivia.png']);
    })
  );
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(() =>
      caches.open(cacheName).then(cache => cache.match(event.request))
    )
  );
});