//routes
require('dotenv').config({
    path: __dirname + '/.env'
})
const userRoutes = require('./api/routes/user')
const config = require('./database.config.js')
// EXPRESS 
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const helmet = require('helmet')
const imports = require('../ms-backend/api/routes/arduino')

//------------------------------------------------------------- EXPRESS
app.use(helmet()) // HEAD CRIPTOGHELP
app.use(morgan('common')) // Concise output colored by response status for development use
app.use(bodyParser.urlencoded({
    extended: false
})) // parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse requests of content-type - application/json

//--------------------------------------------------------- GET ARDUINO STATUS 
const axios = require('axios')
const db = config.db
setTimeout(() => {
    axios.get(imports.arduinoID)
        .then(result => {
            console.log(result.data.data);
            db.collection('ArduinoLog').doc('log').set(result.data.data, { merge: true })
        })
        .catch(err => {
            console.log(err);
        })
}, 10000)
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
        error: {
            message: error.message
        }
    })
})

//------------------------------------------------------------- SERVER EXPRESS
const http = require('http')
const port = process.env.PORT || 3333
const server = http.createServer(app)

server.listen(port, () => {
    console.log("ms-backend port: ", port)
})