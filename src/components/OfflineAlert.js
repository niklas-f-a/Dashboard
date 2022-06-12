
import style from '../styles/OfflineAlert.module.scss'
import { useContext } from 'react'
import { OnlineContext } from '../context/OnlineContext'

export default function OfflineAlert(){

  const { offlineTime } = useContext(OnlineContext)


  const formatTime = () => {
    const month = String(offlineTime.getMonth() + 1).padStart(2, '0')
    const day = String(offlineTime.getDate()).padStart(2, '0')
    const hours = offlineTime.getHours()
    const minutes = offlineTime.getMinutes()
    return `${month}/${day} kl.${hours}:${minutes}`
  }

  return (
    <>
      <div className={style.offlineAlert}>
        <h3>Offline sedan: {formatTime()}</h3>
        <h3>Appen kommer ej att uppdateras under tiden som du är offline.</h3>
        <h3>Informationen du ser är troligtvis föråldrad.</h3>
      </div>
    </>
  )
}