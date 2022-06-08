import Clock from '../components/Clock'
import Traffic from '../components/Traffic'
import Weather from '../components/Weather'
import CurrencyTracker from '../components/CurrencyTracker'
import NewsFeed from '../components/NewsFeed'

import '../styles/layout.scss'




export default function Layout(){
  return (
    <main>
      <Traffic />
      <Clock />
      <Weather />
      <NewsFeed />
      <CurrencyTracker />
    </main>
  )
}