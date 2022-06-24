const CACHE_NAME = "lab-assistant-cache";
const self = this;

self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            if (response) {
                return response;
            } else {
                return fetch(event.request)
                    .then(function (res) {
                        return caches.open(CACHE_NAME).then(function (cache) {
                            cache.put(event.request.url, res.clone());
                            return res;
                        });
                    })

            }
        })
    );
});