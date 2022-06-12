import { createContext, useState, useEffect } from 'react'


const OnlineContext = createContext()


function OnlineContextProvider({children}){

  const [online, setOnline] = useState(() => navigator.onLine ? true : false)
  const [offlineTime, setOfflineTime] = useState(null)

  useEffect(() => {

    const setOnlineTrue = () => {
      setOfflineTime(null)
      setOnline(true)
    }

    const setOnlineFalse = () => {
      setOfflineTime(new Date())
      setOnline(false)
    }

    window.addEventListener('online', setOnlineTrue)
    window.addEventListener('offline', setOnlineFalse)

    return () => {
      window.removeEventListener('offline', setOnlineFalse)
      window.removeEventListener('online', setOnlineTrue)
    }
    }, [])




  return (
    <OnlineContext.Provider value={{online, setOnline, offlineTime}}>
      {children}
    </OnlineContext.Provider>
  )
}


export { OnlineContext, OnlineContextProvider }