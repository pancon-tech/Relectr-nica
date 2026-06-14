const CACHE_NAME = 'relectronica-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/recepcion.html',
  '/notas.html',
  '/biblioteca.html',
  '/fallas.html',
  '/hardware.html',
  '/calculadoras.html',
  '/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});