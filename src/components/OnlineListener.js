import { useContext, useEffect } from "react"
import { OnlineContext } from "../context/OnlineContext"


export default function OnlineListener({children}){

  const { setOnline } = useContext(OnlineContext)

  useEffect(() => {

    const setOnlineTrue = () => {
      setOnline(true)
    }

    const setOnlineFalse = () => {
      setOnline(false)
    }

    window.addEventListener('online', setOnlineTrue)
    window.addEventListener('offline', setOnlineFalse)

    return () => {
      window.removeEventListener('offline', setOnlineFalse)
      window.removeEventListener('online', setOnlineTrue)
    }
    }, [])
}