var CACHE_NAME = "site-cache-v1";
var urlsToCache = [
  "/",
  "/index.html",
  "/static/js/main.1860e5bc.js",
  "/static/css/main.9edd22be.css",
  "/static/media/lasku.7394e618.webp",
  "https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css",
  "//cdn.jsdelivr.net/devicons/1.8.0/css/devicons.min.css"
];
if (process.env.NODE_ENV == "production") {
  self.addEventListener("install", function(event) {
    event.waitUntil(
      caches.open(CACHE_NAME).then(function(cache) {
        console.log("Opened cache");
        return cache.addAll(urlsToCache);
      })
    );
  });

  self.addEventListener("fetch", function(event) {
    console.log(event.request.url);
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
}
