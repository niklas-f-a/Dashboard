const axios = require('axios')


exports.handler = async (event) => {
  try{
    const NEWS_API_BASE_URL = process.env.NEWS_API_BASE_URL
    const NEWS_API = process.env.NEWS_API
    const NEWS_API_LANG = process.env.NEWS_API_LANG

    const response = await axios.get(`${NEWS_API_BASE_URL}?apikey=${NEWS_API}&language=${NEWS_API_LANG}`)

    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    }
  }catch(error){
    return {
      statusCode: 500,
      body: JSON.stringify({error: 'INTE BRA'})
    }
  }
}