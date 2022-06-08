import axios from 'axios'
import { useEffect } from 'react'




export default function Traffic() {


  useEffect(() => {

    axios.get('http://localhost:5001/departures')
    .then(res => console.log(res))

  }, [])



  return (
    <div className="traffic">Traffic</div>
  )
}
