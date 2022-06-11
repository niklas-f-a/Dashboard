import { useState } from 'react'
import { useFetchWithInterval } from '../hooks/useFetchWithInterval'
import style from '../styles/traffic.module.scss'
import Sign from './Sign'
import { v4 as uuidv4 } from 'uuid'


const _1Minute = 60_000

export default function Traffic() {

  const [intervalTime] = useState(_1Minute)

  const { data, loading, error } = useFetchWithInterval('/departures', intervalTime)

  return (
    <section className={style.traffic}>
      <div className={style.left}>
        <article className={style.upperLeft}>
          <h2>Bussar</h2>
          {error && <p>{error.message}</p>}
          <div className={style.departures}>
            {loading && <p>Loading...</p>}
            {data?.Buses && !loading && !loading && data.Buses.splice(0, 3).map(bus => <Sign vehicle={bus} key={uuidv4()} />)}
          </div>
        </article>
        <article className={style.bottomLeft}>
          <h2>Tunnelbana</h2>
          {error && <h1>{error.message}</h1>}
          <div className={style.departures}>
            {loading && <p>Loading...</p>}
            {data?.Metros && !loading && data.Metros.splice(0, 3).map(metro => <Sign vehicle={metro} key={uuidv4()} />)}
          </div>
        </article>
      </div>
      <div className={style.right}>
        <h2>Tvärbana</h2>
        {error && <h1>{error.message}</h1>}
        <article>
          {loading && <p>Loading...</p>}
          {data?.Trams && !loading && data.Trams.splice(0, 2).map(tram => <Sign vehicle={tram} key={uuidv4()} />)}
        </article>
      </div>
    </section>
  )
}
