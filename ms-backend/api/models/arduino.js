const mongoose = require('mongoose')

//---------------------- ARDUINO BOARD
const arduinoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    data: { type: mongoose.Schema.Types.Mixed, require: true },
    updated: { type: Date, default: Date.now }
})
module.exports = arduinoSchema
//----------------------------------> 

//---------------------- RELAY 1
const portaSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    data: { type: mongoose.Schema.Types.Mixed, require: true },
    updated: { type: Date, default: Date.now }
})
module.exports = portaSchema
//---------------------------------->

//---------------------- RELAY 2
const ventiladorSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    data: { type: mongoose.Schema.Types.Mixed, require: true },
    updated: { type: Date, default: Date.now }
})
module.exports = ventiladorSchema
//---------------------------------->

//---------------------- RELAY 3
const lampadaSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    data: { type: mongoose.Schema.Types.Mixed, require: true },
    updated: { type: Date, default: Date.now }
})
module.exports =  lampadaSchema
//---------------------------------->

//---------------------- RELAY 4
const relaySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    data: { type: mongoose.Schema.Types.Mixed, require: true },
    updated: { type: Date, default: Date.now }
})
module.exports = relaySchema
//---------------------------------->

//---------------------- PHOTOSENSOR
const photosensorSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    data: { type: mongoose.Schema.Types.Mixed, require: true },
    updated: { type: Date, default: Date.now }
})
module.exports = photosensorSchema
//---------------------------------->

//---------------------- LM35
const lm35Schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    data: { type: mongoose.Schema.Types.Mixed, require: true },
    updated: { type: Date, default: Date.now }
})
module.exports = lm35Schema
//---------------------------------->

//---------------------- BME280
const bm280Schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    data: { type: mongoose.Schema.Types.Mixed, require: true },
    updated: { type: Date, default: Date.now }
})
module.exports = bm280Schema
//---------------------------------->

//---------------------- LEDS
const ledsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    data: { type: mongoose.Schema.Types.Mixed, require: true },
    updated: { type: Date, default: Date.now }
})
module.exports = ledsSchema
//---------------------------------->