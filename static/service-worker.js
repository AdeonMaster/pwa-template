var productionMode = true;
var CACHE_NAME = 'pwa-template-cache-v1';

// The first time the user starts up the PWA, 'install' is triggered.
self.addEventListener('install', function(event) {
  if (productionMode) {
    event.waitUntil(
      caches.open(CACHE_NAME).then(function(cache) {
        cache.addAll([
          '/',
          '/index.html',
          '/img/favicon.ico'
        ]);
      })
    );
  }
});

// Delete old caches that are not our current one!
self.addEventListener("activate", function(event) {
  var cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(keyList.map(key => {
        if (!cacheWhitelist.includes(key)) {
          console.log('Deleting cache: ' + key);

          return caches.delete(key);
        }
      }))
    )
  );
});

// When the webpage goes to fetch files, we intercept that request and serve up the matching files
self.addEventListener('fetch', function(event) {
  if (productionMode) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  }
});
