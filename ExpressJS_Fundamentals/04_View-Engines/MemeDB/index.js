const port = 3000
const express = require('express')
const config = require('./config/config')
const database = require('./config/database.config')

let app = express()
let enviroment = process.env.NODE_ENV || 'development'

database(config[enviroment])
require('./config/express')(app, config[enviroment])
require('./config/routes')(app)

app.listen(port)

console.log(`Server is listening to port ${port}`)