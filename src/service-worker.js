/* eslint-disable no-restricted-globals */

const DASHBOARD_CACHE = 'dashBoardCache-v1'

const statics = self.__WB_MANIFEST.map(file => file.url)


const cacheResources = files => {
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

// const offLineResponse = () => {
//   const markup = '<h1>Du är för tillfället offline. Ingen ny information hämtas för tillfället<h1>'
//   const headers = {'Content-type': 'text/html'}
//   return new Response(markup, {headers})
// }


self.addEventListener('install', e => {
  console.log('installing')
  e.waitUntil( cacheResources(statics) )
  self.skipWaiting()
})

self.addEventListener('fetch', e => {
  // if(!navigator.onLine){
  //   console.log('offline');
  //   e.respondWith( caches.match(e.request).then(response => {
  //     return response
  //   }))
  // }
  // else {
  //   fetch(e.request)
  // }
})

self.addEventListener('activate', e => {
  console.log('activating')
  e.waitUntil( clearOldCache() )
})
