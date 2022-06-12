import { useState, useContext } from 'react'
import { useFetchWithInterval } from '../hooks/useFetchWithInterval'
import style from '../styles/traffic.module.scss'
import Sign from './Sign'
import { v4 as uuidv4 } from 'uuid'
import { OnlineContext } from '../context/OnlineContext'
import OfflineAlert from './OfflineAlert'


const _1Minute = 60_000

const departuresUrl = process.env.REACT_APP_DEPARTURES_URL

export default function Traffic() {

  const [intervalTime] = useState(_1Minute)

  const { online } = useContext(OnlineContext)
  const { data: traffic, loading, error } = useFetchWithInterval(departuresUrl, intervalTime)

  return (
    <>
      {!online
        ? <OfflineAlert />
        : <section className={style.traffic}>
        <div className={style.left}>
          <article className={style.upperLeft}>
            <h2>Bussar</h2>
            {error && <p>{error.message}</p>}
            <div className={style.departures}>
              {loading && <p>Loading...</p>}
              {traffic?.Buses && !loading && !loading && traffic.Buses.splice(0, 3).map(bus => <Sign vehicle={bus} key={uuidv4()} />)}
            </div>
          </article>
          <article className={style.bottomLeft}>
            <h2>Tunnelbana</h2>
            {error && <h1>{error.message}</h1>}
            <div className={style.departures}>
              {loading && <p>Loading...</p>}
              {traffic?.Metros && !loading && traffic.Metros.splice(0, 3).map(metro => <Sign vehicle={metro} key={uuidv4()} />)}
            </div>
          </article>
        </div>
        <div className={style.right}>
          <h2>Tvärbana</h2>
          {error && <h1>{error.message}</h1>}
          <article>
            {loading && <p>Loading...</p>}
            {traffic?.Trams && !loading && traffic.Trams.splice(0, 2).map(tram => <Sign vehicle={tram} key={uuidv4()} />)}
          </article>
        </div>
      </section>
      }
    </>
  )
}
