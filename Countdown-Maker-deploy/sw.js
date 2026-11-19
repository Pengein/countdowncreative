const CACHE='countdown-maker-9c8cf120eadd';
const FILES=['./','./index.html','./app.js','./style.css','./icon.svg','./fonts/WAGURI.ttf','./fonts/Recipekorea.otf','./THIRD_PARTY.txt','./TEST-REPORT.html'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('countdown-maker-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin)return;e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));});
