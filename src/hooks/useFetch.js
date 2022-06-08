import { useState, useEffect } from 'react'
import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL



export function useFetch(url){
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)


  useEffect(() => {

    axios.get(BASE_URL + url)
    .then(res => setData(res.data))
    .catch(error => setError({message: 'Something went wrong'}))
    .finally(() => setLoading(false))

  }, [url])


  return { data, loading, error }

}