import { useState, useEffect } from 'react'
import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL



export function useFetchWithInterval(url, intervalTime){

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [online, setOnline] = useState(true)


  useEffect(() => {
    if(!online) return

    const setOfflineFlag = () => {
      setOnline(false)
      clearInterval(fetchData)
    }
    window.addEventListener('offline', setOfflineFlag)

    const fetchData = () => {
      setLoading(true)
      axios.get(BASE_URL + url)
        .then(res => setData(res.data))
        .catch(error => setError({message: 'Something went wrong'}))
        .finally(() => setLoading(false))
    }

    fetchData()
    setInterval(fetchData, intervalTime);

    return () => {
      clearInterval(fetchData)
      window.removeEventListener('offline', setOfflineFlag)
    }

  }, [online])


  return { data, loading, error, online }

}