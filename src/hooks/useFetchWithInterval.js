import { useState, useEffect } from 'react'
import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL_API



export function useFetchWithInterval(url, intervalTime){

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const fetchData = () => {
    setLoading(true)
    axios.get(BASE_URL+url)
      .then(res => setData(res.data))
      .catch(error => setError({message: 'Something went wrong'}))
      .finally(() => setLoading(false))
  }

  useEffect(() => {

    fetchData()
    setInterval(fetchData, intervalTime);

    return () => clearInterval(fetchData)

  }, [url])


  return { data, loading, error }

}