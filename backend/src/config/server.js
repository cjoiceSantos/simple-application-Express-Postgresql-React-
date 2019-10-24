const port = 3003
const bodyParser = require('body-parser')
const router = require('../config/routes')
const express = require('express')
const cors = require('cors')
const server = express()

server.use(bodyParser.urlencoded({ extended: true}))
server.use(bodyParser.json())
server.use(cors())
server.use(router)

server.listen(port, function(){
    console.log(`Backend is running on port ${port}.`)
})