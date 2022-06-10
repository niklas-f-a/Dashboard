


export default function registerSw() {
  if('serviceWorker' in navigator && process.env.NODE_ENV === 'production'){
    navigator.serviceWorker.register('/service-worker.js')
    .then(() => console.log('service-worker registered'))
    .catch(err => console.log('service-woker not registered'))
  }
}