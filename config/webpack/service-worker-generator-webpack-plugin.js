const fs = require('fs');

class ServiceWorkerGeneratorWebpackPlugin {
  constructor(options = {}) {
    this.options = {
      file: options.file || 'service-worker.js',
      assetMatch: options.assetMatch || null
    };
  }

  // Define `apply` as its prototype method which is supplied with compiler as its argument
  apply(compiler) {
    // Specify the event hook to attach to
    compiler.hooks.emit.tapAsync(
      'ServiceWorkerGeneratorWebpackPlugin',
      (compilation, callback) => {
        const file = this.options.file;
        const assetMatchRegExp = this.options.assetMatch ? new RegExp(this.options.assetMatch) : null;

        const assets = Object.keys(compilation.assets);

        const filteredAssets = (
          assetMatchRegExp
            ? assets.filter(asset => Boolean(asset.match(assetMatchRegExp)))
            : assets
          )
          .filter(asset => asset !== file);

        const content = `var productionMode = ${true};
var CACHE_NAME = 'pwa-template-cache-v1';

// The first time the user starts up the PWA, 'install' is triggered.
self.addEventListener('install', function(event) {
  if (productionMode) {
    event.waitUntil(
      caches.open(CACHE_NAME).then(function(cache) {
        cache.addAll([
          '/'
        ]);
        cache.addAll(${JSON.stringify(filteredAssets)});
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
});`;

        fs.writeFile(`dist/${file}`, content, error => {
          if (error) throw error;

          callback();
        });
      }
    );
  }
}

module.exports = ServiceWorkerGeneratorWebpackPlugin;
