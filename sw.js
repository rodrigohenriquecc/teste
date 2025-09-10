const CACHE='malha-static-v1';
const ASSETS=['./','./index.html','./rotas.geojson','./rc_simplificado.geojson'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)))});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
