require('dotenv').config()

const LONG = 18.0710935
const LAT = 59.3251172

module.exports = {
  SL_REAL_TIME_API: process.env.SL_REAL_TIME_API,
  SITE_ID: process.env.SITE_ID,
  PORT: process.env.PORT,
  WEATHER_KEY: process.env.WEATHER_KEY,
  LONG,
  LAT
}