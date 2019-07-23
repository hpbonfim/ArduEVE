//---------------------------------------------//  "MATERIAIS NECESSÁRIOS DE UM ENTREGADOR DE CARTAS"
const bodyParser = require("body-parser")
const express = require("express")
const router = express.Router()
const cors = require("cors")
const app = express()
const helmet = require("helmet")
const cookieParser = require("cookie-parser")
const http = require("http")
const PORT = process.env.PORT

//---------------------------------------------//  "TIPO DE PACOTE ACEITO OU PARA SER ENTREGUE"
app.use(cors()) // CORS (Cross-origin resource sharing)  allowing all cross-origin requests
app.use(helmet())
app.use(cookieParser())
app.use(bodyParser.json()) // parse requests of content-type - application/json
app.use(bodyParser.urlencoded({ extended: false })) // content-type - application/x-www-form-urlencoded

//---------------------------------------------//  "DIREÇÃO DA RUA, SINALIZAÇÃO DE TRANSITO, TROCAR CARROS", ETC...
app.use("/", express.static(`${__dirname}/dist`)) // set the static files location for the static html
app.use("/", router) // run all config and express on "/"

//---------------------------------------------//  "GUIAR O CARRO
//------------------------------------- SERVER
const server = http.createServer(app)
server.listen(PORT)
console.log(`ms-frontend port:${PORT}`)
