const CACHE = 'food-drink-pocket-v1';
const FILES = ['./', './index.html', './manifest.json'];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())));
self.addEventListener('activate', event => event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)));await self.clients.claim()})()));
self.addEventListener('fetch', event => { if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return; if(event.request.mode==='navigate'){event.respondWith(fetch(event.request).then(r=>{if(r.ok)caches.open(CACHE).then(c=>c.put('./index.html',r.clone()));return r}).catch(()=>caches.match('./index.html')));return;} event.respondWith(caches.match(event.request).then(c=>c||fetch(event.request))); });
