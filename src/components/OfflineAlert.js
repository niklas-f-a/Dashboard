import style from '../styles/OfflineAlert.module.scss'


export default function OfflineAlert(){
  return (
    <>
      <div className={style.offlineAlert}>
        <h3>Appen kommer ej att uppdateras under tiden som du är offline.</h3>
        <h3>Informationen du ser är troligtvis föråldrad.</h3>
      </div>
    </>
  )
}