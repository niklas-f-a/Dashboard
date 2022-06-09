const {
  SL_REAL_TIME_API,
  SITE_ID,
  PORT,
  WEATHER_KEY,
  NEWS_API
} = require('./config')
const { LONG, LAT } = require('./constants')
const cors = require('cors')
const axios = require('axios')
const express = require('express')

const app = express()

app.use(cors())


app.get('/departures', (req, res) => {
  axios.get(`https://api.sl.se/api2/realtimedeparturesV4.json?key=${SL_REAL_TIME_API}&siteid=${SITE_ID}&timewindow=15`)
  .then(response => res.json(response.data.ResponseData))
})


app.get('/weather', (req, res) => {
  axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LONG}&units=metric&appid=${WEATHER_KEY}`)
  .then(response => res.json(response.data))
})

app.get('/news', (req, res) => {
  axios.get(`https://newsdata.io/api/1/news?apikey=${NEWS_API}&language=sv`)
  .then(response => res.json(response.data))
})


const port = PORT || 5001
app.listen(port, console.log(`Running on ${port}`))