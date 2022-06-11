/* eslint-disable no-restricted-globals */

const DASHBOARD_CACHE = 'dashBoardCache-v1'

const statics = [
  '/',
  'manifest.json',
  'logo192.png',
  'logo512.png',
  ...self.__WB_MANIFEST.map(file => file.url)
]


const cacheResources = files => {
  console.log(statics);
  caches.open(DASHBOARD_CACHE)
  .then(cache => cache.addAll(files))
}

const clearOldCache = () => {
  caches.keys().then(cacheNames => {
    cacheNames.forEach(name => {
      if(name !== DASHBOARD_CACHE) caches.delete(name)
    })
  })
}


self.addEventListener('install', e => {
  console.log('installing')
  e.waitUntil( cacheResources(statics) )
  self.skipWaiting()
})

self.addEventListener('fetch', e => {
  if(!navigator.onLine){
    console.log(e.request);
    e.respondWith( caches.match(e.request).then(res => {
      if(res) return res
      else return new Response(
        '<h1>Offline</h1>',
        {header: { 'Content-Type': 'text/html' }}
      )
    }) )
  }else{
    fetch(e.request).then(response => {
      console.log(response);
      const resClone = response.clone()
      caches.open(DASHBOARD_CACHE).then(cache => {
        console.log('caching');
        cache.put(e.request, resClone)
      })
      return response
    }).catch(err => console.log(err))
  }
})

self.addEventListener('activate', e => {
  console.log('activating')
  e.waitUntil( clearOldCache() )
})
