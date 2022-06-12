const axios = require('axios')

exports.handler = async (event) => {
  try{
    const SL_REAL_TIME_API_KEY = process.env.SL_REAL_TIME_API_KEY
    const SL_BASE_URL = process.env.SL_BASE_URL
    const SL_SITE_ID = process.env.SL_SITE_ID
    const SL_TIME_WINDOW = process.env.SL_TIME_WINDOW

    const response = await axios.get(`${SL_BASE_URL}?key=${SL_REAL_TIME_API_KEY}&siteid=${SL_SITE_ID}&timewindow=${SL_TIME_WINDOW}`)

    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    }
  }catch(error){
    return {
      statusCode: 500,
      body: JSON.stringify({error: 'Lägg ned'})
    }
  }
}