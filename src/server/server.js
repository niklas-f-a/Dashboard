const { SL_REAL_TIME_API, SITE_ID, PORT } = require('./config')
const cors = require('cors')
const axios = require('axios')
const express = require('express')

const app = express()


app.use(cors())


app.get('/departures', (req, res) => {
  axios.get(`https://api.sl.se/api2/realtimedeparturesV4.json?key=${SL_REAL_TIME_API}&siteid=${SITE_ID}&timewindow=15`)
  .then(response => res.json(response.data.ResponseData))
})


const port = PORT || 5001
app.listen(port, console.log(`Running on ${port}`))