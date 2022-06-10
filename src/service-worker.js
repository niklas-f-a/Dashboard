/* eslint-disable no-restricted-globals */
const ignored = self.__WB_MANIFEST


self.addEventListener('install', () => {
  console.log('installing')
  self.skipWaiting()
})


self.addEventListener('activate', () => {
  console.log('activating');
})
