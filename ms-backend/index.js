require('dotenv').config({path: __dirname + '/.env'});
const userRoutes = require('./api/routes/user')
const config = require('./database.config.js')

//routes
const helmet = require('helmet')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
//http calls

//-------------------------------------------------------------
app.use(helmet())
app.use(morgan('common')) // Concise output colored by response status for development use
app.use(bodyParser.urlencoded({ extended: false }) )// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse requests of content-type - application/json

//---------------------------------------------------------
const axios = require('axios')
const db = config.db

function sayHiToArduino() {
    axios.get(process.env.ARDUINO_ENDPOINT)
        .then(result => {
            db.collection('ArduinoLog').add(result.data);
        })
        .catch(err => {
            console.log(err);
        })
}
setTimeout(sayHiToArduino, 5000)

//-------------------------------------------------------------
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

//-------------------------------------------------------------
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

app.use("/user", userRoutes)

app.use((req, res, next) => {
    const error = new Error("Não encontrado")
    error.status = 404
    console.log(error)
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
        console.log(error)
    res.json({
        error: { message: error.message }
    })
})

//-------------------------------------------------------------
const http = require('http')
const port = process.env.PORT || 3333
const server = http.createServer(app)

server.listen(port, () => {
    console.log("ms-backend port: ", port)
})

//-------------------------------------------------------------