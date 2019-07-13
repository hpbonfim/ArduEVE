const mongoose = require('mongoose')

//---------------------- ARDUINO BOARD
const arduinoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    message:  {type: String, require: true },
    updated: { type: Date, default: Date.now }
})
module.exports = arduinoSchema
//----------------------------------> 

//---------------------- RELAY 1
const portaSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    usarPorta: {type: String, require: true },
    updated: { type: Date, default: Date.now }
})
module.exports = portaSchema
//---------------------------------->

//---------------------- RELAY 2
const ventiladorSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    usarVentilador: {type: String, require: true },
    updated: { type: Date, default: Date.now }
})
module.exports = ventiladorSchema
//---------------------------------->

//---------------------- RELAY 3
const lampadaSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    usarLampada: {type: String, require: true },
    updated: { type: Date, default: Date.now }
})
module.exports =  lampadaSchema
//---------------------------------->

//---------------------- RELAY 4
const relaySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    usarRelay: {type: String, require: true },
    updated: { type: Date, default: Date.now }
})
module.exports = relaySchema
//---------------------------------->

//---------------------- PHOTOSENSOR
const photosensorSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    photosensorData:  {type: String, require: true },
    updated: { type: Date, default: Date.now }
})
module.exports = photosensorSchema
//---------------------------------->

//---------------------- LM35
const lm35Schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    lm35Data:  {type: String, require: true },
    updated: { type: Date, default: Date.now }
})
module.exports = lm35Schema
//---------------------------------->

//---------------------- BME280
const bm280Schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    bme280Data:  {type: String, require: true },
    updated: { type: Date, default: Date.now }
})
module.exports = bm280Schema
//---------------------------------->

//---------------------- LEDS
const ledsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    usarLeds:  {type: String, require: true },
    updated: { type: Date, default: Date.now }
})
module.exports = ledsSchema
//---------------------------------->