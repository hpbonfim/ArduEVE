const router = express.Router()
const express = require("express")
const checkAuth = require('../middleware/check-auth')
const UserController = require('../controllers/user')
const ArduinoController = require('../controllers/arduino')

router.post("/login", UserController.user_login)
router.post("/register", UserController.user_register)
//router.delete("/:userId", checkAuth, UserController.user_delete)
router.post("/usarPorta", ArduinoController.usarPorta)
router.post("/usarVentilador", ArduinoController.usarVentilador)
router.post("/usarLampada", ArduinoController.usarLampada)
router.post("/usarRelay", ArduinoController.usarRelay)
router.post("/photosensorData", ArduinoController.photosensorData)
router.post("/lm35Data", ArduinoController.lm35Data)
router.post("/bme280Data", ArduinoController.bme280Data)
router.post("/leds", ArduinoController.usarLeds)

module.exports = router