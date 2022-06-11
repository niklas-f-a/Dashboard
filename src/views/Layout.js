import Clock from '../components/Clock'
import Traffic from '../components/Traffic'
import Weather from '../components/Weather'
import RandomExcuse from '../components/RandomExcuse'
import NewsFeed from '../components/NewsFeed'

import '../styles/layout.scss'




export default function Layout(){
  return (
    <main>
      <Traffic />
      <Clock />
      <Weather />
      {/* <NewsFeed /> */}
      <RandomExcuse />
    </main>
  )
}