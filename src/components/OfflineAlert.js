
import style from '../styles/OfflineAlert.module.scss'


export default function OfflineAlert(){

  return (
    <>
      <div className={style.offlineAlert}>
        <h1>Appen kommer ej att uppdateras under tiden som du är offline.</h1>
        <h1>Informationen du ser är troligtvis föråldrad.</h1>
      </div>
    </>
  )
}