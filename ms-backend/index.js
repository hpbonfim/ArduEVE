//---------------------------------------------//  "MATERIAIS NECESSÁRIOS PARA CRIAR UMA MUSICA E FICAR FAMOSO NO YOUTUBE"
require('dotenv').config({ path: __dirname + '/.env' })
const userRoutes = require('./api/routes/user')
const config = require('./database.config.js')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const helmet = require('helmet')

//---------------------------------------------//  "TIPO DO PAPEL" E "CABEÇARIO DA REDAÇÃO"
app.use(helmet()) // HEAD CRIPTOHELP
app.use(morgan('common')) // Concise output colored by response status for development use
app.use(bodyParser.urlencoded({ extended: false })) // content-type - application/x-www-form-urlencoded
app.use(bodyParser.json()) // content-type - application/json

//---------------------------------------------// "FRASE 1" INICIO
//----------------------- GET ARDUINO STATUS 
const imports = require('../ms-backend/api/routes/arduino')
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

//---------------------------------------------// "FRASE 2" REFRÃO
//------------------------------------- CORS API
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

//---------------------------------------------// "FRASE 3" MELHOR PARTE DA MÚSICA
//---------------------------------- TRUE ROUTES
app.use("/user", userRoutes)

//---------------------------------------------// "FRASE 4" CANTANDO MÚSICA Q Ñ EXISTE
//------------------------------------ 404 ERROR
app.use((req, res, next) => {
    const error = new Error("Não encontrado")
    error.status = 404
    console.log(error)
    next(error)
})

//---------------------------------------------// "FRASE 5" PIOR PARTE DA MÚSICA
//------------------------------------ 500 BAD
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    console.log(error)
    res.json({
        error: {
            message: error.message
        }
    })
})

//---------------------------------------------// GRAVAÇÃO DA MÚSICA E POSTAGEM NO YOUTUBE
//------------------------------------- SERVER
const http = require('http')
const port = process.env.PORT || 3333
const server = http.createServer(app)

server.listen(port, () => {
    console.log("ms-backend port: ", port)
})
//---------------------------------------------// FICAR FAMOSO() = FAMA ? TRUE:FALSE