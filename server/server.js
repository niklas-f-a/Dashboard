const { PORT } = require('./config')
const router = require('./router')
const express = require('express')
const cors = require('cors')
const https = require('https')
const path = require('path')
const fs = require('fs')

const app = express()

app.use(cors())
app.use(express.static(path.join(__dirname, '..', '/build')))
app.use(router)



const keys = {
  key: fs.readFileSync(path.join(__dirname, 'cert', 'localhost+1-key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'cert', 'localhost+1.pem'))
}


const port = PORT || 5001
https.createServer(keys, app).listen(port, console.log(`Running on port ${port}`))