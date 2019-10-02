console.log('Hello from sw.js')

let CACHE_NAME =

    self.addEventListener("install", (e) => {
        console.log(e)
        event.waitUntil(
            caches.open(CACHE_NAME)
                .then(function (cache) {
                    console.log('Opened cache');
                    return cache.addAll(urlsToCache);
                })
        );
    })

self.addEventListener('fetch', (e) => {
    console.log(e)
});