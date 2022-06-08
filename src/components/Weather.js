import { useFetchWithInterval } from "../hooks/useFetchWithInterval"
import { useEffect, useState } from 'react'

export default function Weather() {

  const [intervalTime] = useState(86_400_000)
  const { error, loading, data } = useFetchWithInterval('/weather', intervalTime)

  useEffect(() => {
    console.log(data);
  }, [data, loading])

  return (
    <div className="weather">Weather</div>
  )
}
