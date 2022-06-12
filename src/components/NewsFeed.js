import { useEffect, useState } from 'react'
import { useFetchWithInterval } from '../hooks/useFetchWithInterval'
import style from '../styles/news.module.scss'
import { v4 as uuidv4 } from 'uuid'
import NewsArticle from './NewsArticle'


const _1Hour = 3_600_000
const _1Minute = 60_000

const newsUrl = process.env.REACT_APP_NEWS_URL

export default function NewsFeed() {

  const { loading, error, data: news } = useFetchWithInterval(newsUrl, _1Hour)
  const [shuffledArticles, setShuffledArticles] = useState([])

  useEffect(() => {
    if(!news?.results) return

    const shuffleNews = () => {
      setShuffledArticles(news.results.sort(() => Math.random() - 0.5).slice(0, 2))
    }

    shuffleNews()
    setInterval(shuffleNews, _1Minute)

    return () => clearInterval(shuffleNews)

  }, [news])


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
