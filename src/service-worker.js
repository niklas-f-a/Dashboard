/* eslint-disable no-restricted-globals */

const DASHBOARD_CACHE = 'dashBoardCache-v4'

const statics = self.__WB_MANIFEST.map(file => file.url)


const cacheResources = files => {
  caches.open(DASHBOARD_CACHE).then(cache => cache.addAll(files))
}

const clearOldCache = () => {
  caches.keys().then(cacheNames => {
    cacheNames.forEach(name => {
      if(name !== DASHBOARD_CACHE) caches.delete(name)
    })
  })
}

const offlineResponse = request => {
  caches.match(request).then(res => {
    if(res) return res
    else return new Response(
      '<h1>Offline. You need to Online to update info</h1>',
      {header: { 'Content-Type': 'text/html' }}
    )
  })
}

const fetchAndCache = request => {
  fetch(request).then(response => {
    const resClone = response.clone()
    caches.open(DASHBOARD_CACHE).then(cache => {
      cache.put(request, resClone)
    })
    return response
  }).catch(err => console.log(err))
}


self.addEventListener('install', e => {
  console.log('installing')
  e.waitUntil( cacheResources(statics) )
  self.skipWaiting()
})

self.addEventListener('fetch', e => {
  if(!navigator.onLine) e.respondWith( offlineResponse(e.request) )
  else fetchAndCache(e.request)
})

self.addEventListener('activate', e => {
  console.log('activating')
  e.waitUntil( clearOldCache() )
})
