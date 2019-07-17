//routes
require('dotenv').config({path: __dirname + '/.env'})
const userRoutes = require('./api/routes/user')
const config = require('./database.config.js')
// EXPRESS 
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const helmet = require('helmet')

//------------------------------------------------------------- EXPRESS
app.use(helmet()) // HEAD CRIPTOGHELP
app.use(morgan('common')) // Concise output colored by response status for development use
app.use(bodyParser.urlencoded({ extended: false }) ) // parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse requests of content-type - application/json

//--------------------------------------------------------- GET ARDUINO STATUS 
const axios = require('axios')
const db = config.db

function sayHiToArduino() {
    axios.get(process.env.ARDUINO_ENDPOINT)
    .then(result => {
        db.collection('ArduinoLog').add(result.data.data)
        // db.collection('ArduinoLog').doc(String(year)).set(result.data.data)
        })
        .catch(err => {
            console.log(err)
            process.exit()
        })
}
setTimeout(sayHiToArduino, 5000)

//------------------------------------------------------------- MONGOOSE => MONGO
const mongoose = require('mongoose')
const link = config.url

mongoose.Promise = global.Promise

mongoose.connect(link, { useMongoClient: true })
    .then(() => {
        console.log('conectado com sucesso!')
    })
  .catch(err => {
      console.log('Erro?', err)
      process.exit()
    })

//------------------------------------------------------------- CORS API
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      )
      if (req.method === "OPTIONS") {
          res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET")
          return res.status(200).json({})
        }
        next()
    })
//------------------------------------------------------------- TRUE ROUTES
app.use("/user", userRoutes)

//------------------------------------------------------------- 404 ERROR
app.use((req, res, next) => {
    const error = new Error("Não encontrado")
    error.status = 404
    console.log(error)
    next(error)
})

//------------------------------------------------------------- 500 BAD
app.use((error, req, res, next) => {
    res.status(error.status || 500)
        console.log(error)
    res.json({
        error: { message: error.message }
    })
})

//------------------------------------------------------------- SERVER EXPRESS
const http = require('http')
const port = process.env.PORT || 3333
const server = http.createServer(app)

server.listen(port, () => {
    console.log("ms-backend port: ", port)
})