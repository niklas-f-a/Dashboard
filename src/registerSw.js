


export default function registerSW() {
  if('serviceWorker' in navigator && process.env.NODE_ENV === 'production'){
    navigator.serviceWorker.register('/service-worker.js')
    .then(() => console.log('service-worker registered'))
    .catch(err => console.log('service-worker not registered'))
  }
}
