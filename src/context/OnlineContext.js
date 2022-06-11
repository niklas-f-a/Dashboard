import { createContext, useState } from 'react'


const OnlineContext = createContext()


function OnlineContextProvider({children}){

  const [online, setOnline] = useState(() => navigator.onLine ? true : false)

  return (
    <OnlineContext.Provider value={{online, setOnline}}>
      {children}
    </OnlineContext.Provider>
  )
}


export { OnlineContext, OnlineContextProvider }