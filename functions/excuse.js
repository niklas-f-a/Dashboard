const axios = require('axios')

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  try{
    const excuseUrl = process.env.EXCUSE_API_URL
    const response = await axios.get(excuseUrl)
    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    }
  }catch(error){
    return {
      statusCode: 500,
      body: JSON.stringify({error: 'Kalabalik'})
    }

  }
}

module.exports = { handler }