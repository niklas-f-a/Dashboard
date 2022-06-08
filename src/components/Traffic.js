import { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import style from '../styles/traffic.module.scss'

const busses = [
  {
    Destination: "Hökmossen",
    Deviations: null,
    DisplayTime: "Nu",
    ExpectedDateTime: "2022-06-08T12:30:00",
    GroupOfLine: null,
    JourneyDirection: 2,
    JourneyNumber: 50350,
    LineNumber: "147",
    StopAreaName: "Liljeholmen",
    StopAreaNumber: 14131,
    StopPointDesignation: "B",
    StopPointNumber: 14132,
    TimeTabledDateTime: "2022-06-08T12:30:00",
    TransportMode: "BUS"
  },
  {
    Destination: "Hökmossen",
    Deviations: null,
    DisplayTime: "Nu",
    ExpectedDateTime: "2022-06-08T12:30:00",
    GroupOfLine: null,
    JourneyDirection: 2,
    JourneyNumber: 50350,
    LineNumber: "147",
    StopAreaName: "Liljeholmen",
    StopAreaNumber: 14131,
    StopPointDesignation: "B",
    StopPointNumber: 14132,
    TimeTabledDateTime: "2022-06-08T12:30:00",
    TransportMode: "BUS"
  },
  {
    Destination: "Årstaberg",
    Deviations: null,
    DisplayTime: "12:38",
    ExpectedDateTime: "2022-06-08T12:38:00",
    GroupOfLine: null,
    JourneyDirection: 1,
    JourneyNumber: 49733,
    LineNumber: "145",
    StopAreaName: "Liljeholmen",
    StopAreaNumber: 14131,
    StopPointDesignation: "H",
    StopPointNumber: 14142,
    TimeTabledDateTime: "2022-06-08T12:38:00",
    TransportMode: "BUS"
  },
  {
    Destination: "Liljeholmen",
    Deviations: null,
    DisplayTime: "8 min",
    ExpectedDateTime: "2022-06-08T12:38:56",
    GroupOfLine: null,
    JourneyDirection: 1,
    JourneyNumber: 44936,
    LineNumber: "77",
    StopAreaName: "Marievik",
    StopAreaNumber: 13879,
    StopPointDesignation: null,
    StopPointNumber: 13879,
    TimeTabledDateTime: "2022-06-08T12:36:53",
    TransportMode: "BUS",
  }
]

const metros = [
  {
    Destination: "Fruängen",
    Deviations: null,
    DisplayTime: "Nu",
    ExpectedDateTime: "2022-06-08T12:31:05",
    GroupOfLine: "tunnelbanans röda linje",
    JourneyDirection: 2,
    JourneyNumber: 20458,
    LineNumber: "14",
    StopAreaName: "Liljeholmen",
    StopAreaNumber: 2601,
    StopPointDesignation: "5",
    StopPointNumber: 2604,
    TimeTabledDateTime: "2022-06-08T12:30:15",
    TransportMode: "METRO"
  },
  {
    Destination: "Fruängen",
    Deviations: null,
    DisplayTime: "Nu",
    ExpectedDateTime: "2022-06-08T12:31:05",
    GroupOfLine: "tunnelbanans röda linje",
    JourneyDirection: 2,
    JourneyNumber: 20458,
    LineNumber: "14",
    StopAreaName: "Liljeholmen",
    StopAreaNumber: 2601,
    StopPointDesignation: "5",
    StopPointNumber: 2604,
    TimeTabledDateTime: "2022-06-08T12:30:15",
    TransportMode: "METRO"
  },
  {
    Destination: "Mörby centrum",
    Deviations: null,
    DisplayTime: "12:32",
    ExpectedDateTime: "2022-06-08T12:32:15",
    GroupOfLine: "tunnelbanans röda linje",
    JourneyDirection: 1,
    JourneyNumber: 20248,
    LineNumber: "14",
    StopAreaName: "Liljeholmen",
    StopAreaNumber: 2601,
    StopPointDesignation: "2",
    StopPointNumber: 2603,
    TimeTabledDateTime: "2022-06-08T12:32:15",
    TransportMode: "METRO"
  },
  {
    Destination: "Norsborg",
    Deviations: null,
    DisplayTime: "3 min",
    ExpectedDateTime: "2022-06-08T12:33:54",
    GroupOfLine: "tunnelbanans röda linje",
    JourneyDirection: 2,
    JourneyNumber: 20830,
    LineNumber: "13",
    StopAreaName: "Liljeholmen",
    StopAreaNumber: 2601,
    StopPointDesignation: "5",
    StopPointNumber: 2604,
    TimeTabledDateTime: "2022-06-08T12:33:15",
    TransportMode: "METRO"
  }
]

const trams = [
  {
    Destination: "Sickla",
    Deviations: null,
    DisplayTime: "3 min",
    ExpectedDateTime: "2022-06-08T12:33:21",
    GroupOfLine: "Tvärbanan",
    JourneyDirection: 2,
    JourneyNumber: 21203,
    LineNumber: "30",
    StopAreaName: "Liljeholmen",
    StopAreaNumber: 4515,
    StopPointDesignation: "6",
    StopPointNumber: 4516,
    TimeTabledDateTime: "2022-06-08T12:33:30",
    TransportMode: "TRAM"
  },
  {
    Destination: "Solna station",
    Deviations: null,
    DisplayTime: "4 min",
    ExpectedDateTime: "2022-06-08T12:34:20",
    GroupOfLine: "Tvärbanan",
    JourneyDirection: 1,
    JourneyNumber: 11210,
    LineNumber: "30",
    StopAreaName: "Liljeholmen",
    StopAreaNumber: 4515,
    StopPointDesignation: "5",
    StopPointNumber: 4515,
    TimeTabledDateTime: "2022-06-08T12:34:00",
    TransportMode: "TRAM"
  },
  {
    Destination: "Sickla",
    Deviations: null,
    DisplayTime: "10 min",
    ExpectedDateTime: "2022-06-08T12:40:56",
    GroupOfLine: "Tvärbanan",
    JourneyDirection: 2,
    JourneyNumber: 21211,
    LineNumber: "30",
    StopAreaName: "Liljeholmen",
    StopAreaNumber: 4515,
    StopPointDesignation: "6",
    StopPointNumber: 4516,
    TimeTabledDateTime: "2022-06-08T12:41:00",
    TransportMode: "TRAM"
  }
]

export default function Traffic() {

  const { data, loading, error } = useFetch('/departures')
  const [busses, setBusses] = useState([])
  const [metros, setMetros] = useState([])
  const [trams, setTrams] = useState([])

  useEffect(() => {

    // axios.get('http://localhost:5001/departures')
    // .then(res => console.log(res))

  }, [])


  return (
    <section className={style.traffic}>
      <div className={style.left}>
        <article className={style.upperLeft}>
          <h2>Bussar</h2>
          <div className={style.departures}>
            {busses.map((bus, index) => {
              return <div className={style.sign} key={bus.ExpectedDateTime + index}>
                <span className={style.topSign}>
                  <h4>{bus.LineNumber}</h4>
                  <h4>{bus.Destination}</h4>
                </span>
                <p>Avgår: {bus.DisplayTime}</p>
                </div>
            })}
          </div>
        </article>
        <article className={style.bottomLeft}>
          <h2>Tunnelbana</h2>
          <div className={style.departures}>
          {metros.map((bus, index) => {
              return <div className={style.sign} key={bus.ExpectedDateTime + index}>
                <span className={style.topSign}>
                  <h4>{bus.LineNumber}</h4>
                  <h4>{bus.Destination}</h4>
                </span>
                <p>Avgår: {bus.DisplayTime}</p>
                </div>
            })}
          </div>
        </article>
      </div>
      <div className={style.right}>
        <h2>Tvärbana</h2>
        <article>
          {trams.map((tram, index) => {
            return <div className={style.sign} key={tram.ExpectedDateTime + index}>
              <span className={style.topSign}>
                <h4>{tram.LineNumber}</h4>
                <h4>{tram.Destination}</h4>
              </span>
              <p>Avgår: {tram.DisplayTime}</p>
            </div>
          })}
        </article>
      </div>
    </section>
  )
}
