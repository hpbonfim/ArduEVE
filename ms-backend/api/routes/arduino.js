const mongoose = require("mongoose")

module.exports.arduinoID = process.env.ARDUINO_ENDPOINT
const ArduinoSchema = require("../models/arduino")
module.exports.ArduinoLog = mongoose.model('ArduinoLogs', ArduinoSchema)

module.exports.portaID = process.env.ARDUINO_ENDPOINT_R1
const PortaSchema = require("../models/arduino")
module.exports.PortaLog = mongoose.model('PortaLog', PortaSchema)

module.exports.ventiladorID = process.env.ARDUINO_ENDPOINT_R2
const VentiladoSchema = require("../models/arduino")
module.exports.VentiladorLog = mongoose.model('VentiladorLog', VentiladoSchema)

module.exports.lampadaID = process.env.ARDUINO_ENDPOINT_R3
const LampadaSchema = require("../models/arduino")
module.exports.LampadaLog = mongoose.model('LampadaLog', LampadaSchema)

module.exports.relay4ID = process.env.ARDUINO_ENDPOINT_R4
const RelaySchema = require("../models/arduino")
module.exports.RelayLog = mongoose.model('RelayLog', RelaySchema)

module.exports.photosensorID = process.env.ARDUINO_ENDPOINT_PS
const PhotosensorSchema = require("../models/arduino")
module.exports.PhotosensorLog = mongoose.model('PhotosensorLog', PhotosensorSchema)

module.exports.lm35ID = process.env.ARDUINO_ENDPOINT_LM
const LmSchema = require("../models/arduino")
module.exports.LmLog = mongoose.model('LmLog', LmSchema)

module.exports.bme280ID = process.env.ARDUINO_ENDPOINT_BM
const BmSchema = require("../models/arduino")
module.exports.BmLog = mongoose.model('BmLog', BmSchema)

module.exports.ledsID = process.env.ARDUINO_ENDPOINT_LD
const LedSchema = require("../models/arduino")
module.exports.LedLog = mongoose.model('LedLog', LedSchema)