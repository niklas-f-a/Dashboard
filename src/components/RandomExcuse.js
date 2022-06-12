import style from '../styles/RandomExcuse.module.scss'
import { useFetchWithInterval } from '../hooks/useFetchWithInterval'


const _30s = 30_000

const excuseURL = process.env.REACT_APP_EXCUSE_URL

export default function RandomExcuse() {

  const { loading, error, data: excuse } = useFetchWithInterval(excuseURL, _30s)


  return (
    <div className={style.excuse}>
      <h2>En ursäkt</h2>
      <article>
        {error && error.message}
        {loading && !excuse && <p>Loading...</p>}
        {excuse && <p>{excuse[0].excuse}</p>}
      </article>
    </div>
  )
}
