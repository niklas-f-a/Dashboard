import { useState, useEffect } from 'react'
import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL



export function useFetchWithInterval(url, intervalTime){

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)


  useEffect(() => {

    const initialFetch = () => {
      axios.get(BASE_URL + url)
      .then(res => {
        console.log(res);
        setData(res.data)

      })
      .catch(error => {
        setError({message: 'Something went wrong'})
        console.log(error);
      })
      .finally(() => setLoading(false))

    }

      const genericInterval = () => {
        setLoading(true)
        axios.get(BASE_URL + url)
        .then(res => setData(res.data))
        .catch(error => setError({message: 'Something went wrong'}))
        .finally(() => setLoading(false))
    }

    initialFetch()
    setInterval(genericInterval, intervalTime);

    return () => clearInterval(genericInterval)

  }, [])


  return { data, loading, error }

}