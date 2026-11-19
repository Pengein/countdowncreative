const CACHE='countdown-maker-05e34a6882ce';
const FILES=['./','./index.html','./app.js','./style.css','./icon.svg','./fonts/WAGURI.ttf','./fonts/Recipekorea.otf','./THIRD_PARTY.txt','./TEST-REPORT.html'];
const SCOPED_CACHE=CACHE+'@'+self.registration.scope;
self.addEventListener('install',e=>e.waitUntil(caches.open(SCOPED_CACHE).then(c=>c.addAll(FILES.map(f=>new Request(new URL(f,self.registration.scope),{cache:'reload'})))).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('countdown-maker-')&&k!==SCOPED_CACHE&&(!k.includes('@')||k.endsWith('@'+self.registration.scope))).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||!e.request.url.startsWith(self.registration.scope))return;e.respondWith(fetch(e.request,{cache:'no-cache'}).catch(()=>caches.open(SCOPED_CACHE).then(c=>c.match(e.request))));});
