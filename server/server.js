const {
  SL_REAL_TIME_API_KEY,
  SL_SITE_ID,
  PORT,
  WEATHER_KEY,
  NEWS_API,
  SL_BASE_URL,
  SL_TIME_WINDOW,
  WEATHER_BASE_URL,
  NEWS_API_BASE_URL,
  NEWS_API_LANG,
  WEATHER_UNITS
} = require('./config')
const { LONG, LAT } = require('./constants')
const cors = require('cors')
const axios = require('axios')
const express = require('express')

const app = express()

app.use(cors())



app.get('/departures', (req, res) => {

  axios.get(`${SL_BASE_URL}?key=${SL_REAL_TIME_API_KEY}&siteid=${SL_SITE_ID}&timewindow=${SL_TIME_WINDOW}`)
  .then(response => res.json(response.data.ResponseData))
})
//Probably change to something more fun
app.get('/excuse', (req, res) => {
  axios.get('https://excuser.herokuapp.com/v1/excuse')
  .then(response => {
    res.json(response.data)})
})

app.get('/weather', (req, res) => {
  axios.get(`${WEATHER_BASE_URL}?lat=${LAT}&lon=${LONG}&units=${WEATHER_UNITS}&appid=${WEATHER_KEY}`)
  .then(response => res.json(response.data))
})

app.get('/news', (req, res) => {
  axios.get(`${NEWS_API_BASE_URL}?apikey=${NEWS_API}&language=${NEWS_API_LANG}`)
  .then(response => res.json(response.data))
})


const port = PORT || 5001
app.listen(port, console.log(`Running on ${port}`))