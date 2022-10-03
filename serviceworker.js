const cacheName = 'cache-members';
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(['/repo/', '/repo/studentss/index.html', '/repo/studentss/manifest.json', '/repo/studentss/members.json', '/repo/studentss/serviceworker.js', '/repo/studentss/morten.png', '/repo/studentss/mystyle.css', '/repo/studentss/nina.png', '/repo/studentss/olivia.png']);
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