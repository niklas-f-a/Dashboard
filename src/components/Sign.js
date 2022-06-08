import style from '../styles/traffic.module.scss'




export default function Sign({vehicle}){
  return (
    <div className={style.sign}>
      <span className={style.topSign}>
        <h4>{vehicle.LineNumber}</h4>
        <h4>{vehicle.Destination}</h4>
      </span>
      <p>Avgår: {vehicle.DisplayTime}</p>
    </div>
    )
}