import style from '../styles/RandomExcuse.module.scss'
import { useFetchWithInterval } from '../hooks/useFetchWithInterval'
import { useEffect } from 'react'

const _30s = 30_000

export default function RandomExcuse() {

  const { loading, error, data } = useFetchWithInterval('/excuse', _30s)

  useEffect(() => {

    const checkIt = () => {
      console.log(data, 'hej');
    }
    window.addEventListener('offline', checkIt)
    return () => window.removeEventListener('offline', checkIt)

  }, [])



  return (
    <div className={style.excuse}>
      <h2>En ursäkt</h2>
      <article>
        {error && error.message}
        {loading && !data && <p>Loading...</p>}
        {data && <p>{data[0].excuse}</p>}
      </article>
    </div>
  )
}
