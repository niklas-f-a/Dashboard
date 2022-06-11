import { useFetchWithInterval } from "../hooks/useFetchWithInterval"
import { useState } from 'react'
import style from '../styles/weather.module.scss'

const _3Hours = 10_800_000

export default function Weather() {

  const [intervalTime] = useState(_3Hours)
  const { error, loading, data: weather } = useFetchWithInterval('/weather', intervalTime)


  const formatDate = date => new Date(date * 1000).toLocaleString("sv-SV").split(" ")[1]

//https ? image hide URL?
  return (
    <section className={style.weather}>
      <h2>Väder för {weather?.name}</h2>
      {error && <p>Error hallå</p>}
      {loading && <p>Loading...</p>}
      {weather && <article>
        <figure>
          <img src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}.png`} alt={weather?.weather[0].description} />
        </figure>
        <div className={style.weatherInfo}>
          <p>{weather?.weather[0]?.description}</p>
          <span>
            <p>Temp: {Math.round(weather?.main?.temp)}&#186;C</p>
            <p>Känns som: {Math.round(weather?.main?.feels_like)}&deg;C</p>
          </span>
          <span>
            <p>Lägsta temp: {Math.round(weather?.main?.temp_min)}&deg;C</p>
            <p>Högsta temp: {Math.round(weather?.main?.temp_max)}&deg;C</p>
          </span>
          <span>
            <p>Soluppgång: {formatDate(weather?.sys?.sunrise)}</p>
            <p>Solnedgång: {formatDate(weather?.sys?.sunset)}</p>
          </span>
        </div>
      </article>}
    </section>
  )
}
