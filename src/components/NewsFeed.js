import { useEffect, useState } from 'react'
import { useFetchWithInterval } from '../hooks/useFetchWithInterval'
import style from '../styles/news.module.scss'
import { v4 as uuidv4 } from 'uuid'
import NewsArticle from './NewsArticle'


const _1Hour = 3600000
const _1Minute = 60_000

export default function NewsFeed() {

  const { loading, error, data } = useFetchWithInterval('/news', _1Hour)
  const [shuffledArticles, setShuffledArticles] = useState([])

  useEffect(() => {
    if(!data?.results) return

    setShuffledArticles(data.results.sort(() => Math.random() - 0.5).slice(0, 2))

    const shuffleNews = () => {
      setShuffledArticles(data.results.sort(() => Math.random() - 0.5).slice(0, 2))

    }
    setInterval(shuffleNews, _1Minute)

    return () => clearInterval(shuffleNews)

  }, [data])


  return (
    <section className={style.newsFeed}>
      <h2>Nyheter</h2>
      {error && <p>{error.message}</p>}
      <div>
        {loading && <p>Loading...</p>}
        {shuffledArticles && shuffledArticles.map(news => <NewsArticle news={news} key={uuidv4()} />)}
      </div>
    </section>
  )
}
