const ArduinoController = require('../controllers/arduino')
const express = require("express")
const router = express.Router()

router.post("/statusBoard", ArduinoController.statusBoard)
router.post("/usarLampada", ArduinoController.usarLampada)
router.post("/usarRelay", ArduinoController.usarRelay)
router.post("/usarLed", ArduinoController.usarLed)
router.post("/usarPorta", ArduinoController.usarPorta)
router.post("/photosensorData", ArduinoController.photosensorData)
router.post("/lm35Data", ArduinoController.lm35Data)
router.post("/bme280Data", ArduinoController.bme280Data)
router.post("/leds", ArduinoController.usarLeds)

module.exports = router