const mongoose = require("mongoose")

const arduinoID = process.env.ARDUINO_ENDPOINT
const ArduinoSchema = require("../models/arduino")
const ArduinoLog = mongoose.model('ArduinoLogs', ArduinoSchema)

const portaID = process.env.ARDUINO_ENDPOINT_R1
const PortaSchema = require("../models/arduino")
const PortaLog = mongoose.model('PortaLog', PortaSchema)

const ventiladorID = process.env.ARDUINO_ENDPOINT_R2
const VentiladoSchema = require("../models/arduino")
const VentiladorLog = mongoose.model('VentiladorLog', VentiladoSchema)

const lampadaID = process.env.ARDUINO_ENDPOINT_R3
const LampadaSchema = require("../models/arduino")
const LampadaLog = mongoose.model('LampadaLog', LampadaSchema)

const relay4ID = process.env.ARDUINO_ENDPOINT_R4
const RelaySchema = require("../models/arduino")
const RelayLog = mongoose.model('RelayLog', RelaySchema)

const photosensorID = process.env.ARDUINO_ENDPOINT_PS
const PhotosensorSchema = require("../models/arduino")
const PhotosensorLog = mongoose.model('PhotosensorLog', PhotosensorSchema)

const lm35ID = process.env.ARDUINO_ENDPOINT_LM
const LmSchema = require("../models/arduino")
const LmLog = mongoose.model('LmLog', LmSchema)

const bme280ID = process.env.ARDUINO_ENDPOINT_BM
const BmSchema = require("../models/arduino")
const BmLog = mongoose.model('BmLog', BmSchema)

const ledsID = process.env.ARDUINO_ENDPOINT_LD
const LedSchema = require("../models/arduino")
const LedLog = mongoose.model('LedLog', LedSchema)

const axios = require('axios')

//---------------------- ARDUINO BOARD
exports.statusBoard = (req, res, next) => {
    console.log(arduinoID)
    setTimeout(() => {
        axios.get(arduinoID)
            .then(result => {
                console.log(result.data)
                let log = new ArduinoLog({
                    _id: new mongoose.Types.ObjectId(),
                    message: result.data
                })
                console.log(log)
                log.save()
                    .then(resp => {
                        console.log(resp);
                        res.status(200).json({
                            data: result.data
                        })
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(500).json({
                            error: err
                        })
                    })
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                })
            })
    },2)
}

//---------------------- RELAY 1
exports.usarPorta = (req, res, next) => {
    setTimeout(() => {
        axios.get(portaID)
            .then(resp => {
                res.status(200).json({
                    data: resp.data
                })
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                })
            })
    },2)
}

//---------------------- RELAY 2
exports.usarVentilador = (req, res, next) => {
    setTimeout(() => {
        axios.get(ventiladorID)
            .then(resp => {
                res.status(200).json({
                    data: resp.data
                })
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                })
            })
    },2)
}

//---------------------- RELAY 3
exports.usarLampada = (req, res, next) => {
    setTimeout(() => {
        axios.get(lampadaID)
        .then(resp => {
            res.status(200).json({
                data: resp.data
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
    },2)
}

//---------------------- RELAY 4
exports.usarRelay = (req, res, next) => {
    setTimeout(() => {
        axios.get(relay4ID)
        .then(resp => {
            res.status(200).json({
                data: resp.data
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
    },2)
}

//---------------------- PHOTOSENSOR
exports.photosensorData = (req, res, next) => {
    setTimeout(() => {
        axios.get(photosensorID)
        .then(resp => {
            res.status(200).json({
                data: resp.data
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
    },2)
}

//---------------------- LM35
exports.lm35Data = (req, res, next) => {
    setTimeout(() => {
        axios.get(lm35ID)
        .then(resp => {
            res.status(200).json({
                data: resp.data
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
    },2)
}

//---------------------- BME280
exports.bme280Data = (req, res, next) => {
    setTimeout(() => {
        axios.get(bme280ID)
        .then(resp => {
            res.status(200).json({
                data: resp.data
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
    },2)
}

//---------------------- LEDS
exports.usarLeds = (req, res, next) => {
    setTimeout(() => {
        axios.get(ledsID)
        .then(resp => {
            res.status(200).json({
                data: resp.data
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
    },2)
}
