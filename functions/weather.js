const axios = require('axios')


exports.handler = async (event) => {
  try{
    const WEATHER_BASE_URL = process.env.WEATHER_BASE_URL
    const WEATHER_UNITS = process.env.WEATHER_UNITS
    const WEATHER_KEY = process.env.WEATHER_KEY
    const LAT = 59.3251172
    const LONG = 18.0710935

    const response = await axios.get(`${WEATHER_BASE_URL}?lat=${LAT}&lon=${LONG}&units=${WEATHER_UNITS}&appid=${WEATHER_KEY}`)

    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    }
  }catch(error){
    return {
      statusCode: 500,
      body: JSON.stringify({error: 'NU ÄR DET KÖRT'})
    }
  }
}