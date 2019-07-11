const photosensorID = process.env.ARDUINO_ENDPOINT_PS
const vetiladorID = process.env.ARDUINO_ENDPOINT_R2
const lampadaID = process.env.ARDUINO_ENDPOINT_R3
const relay4ID = process.env.ARDUINO_ENDPOINT_R4
const bme280ID = process.env.ARDUINO_ENDPOINT_BM
const portaID = process.env.ARDUINO_ENDPOINT_R1
const lm35ID = process.env.ARDUINO_ENDPOINT_LM
const ledsID = process.env.ARDUINO_ENDPOINT_LD
const axios = require('axios')

//---------------------- RELAY 1
exports.usarPorta = (req, res, next) => {
    console.log(portaID)
    setTimeout(() => {
        axios.get(portaID)
            .then(result => {
                console.log(result)
                res.status(200).json({
                    message: result.message
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
    console.log(vetiladorID)
    setTimeout(() => {
        axios.get(vetiladorID)
            .then(result => {
                res.status(200).json({
                    message: result.message
                })
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            })
    },2)
}

//---------------------- RELAY 3
exports.usarLampada = (req, res, next) => {
    console.log(lampadaID)
    setTimeout(() => {
        axios.get(lampadaID)
            .then(result => {
                res.status(200).json({
                    message: result.message
                })
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            })
    },2)
}

//---------------------- RELAY 4
exports.usarRelay = (req, res, next) => {
    console.log(relay4ID)
    setTimeout(() => {
        axios.get(arduino)
            .then(result => {
                res.status(200).json({
                    message: result.message
                })
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            })
    },2)
}

//---------------------- PHOTOSENSOR
exports.photosensorData = (req, res, next) => {
    console.log(photosensorID)
    setTimeout(() => {
        axios.get(photosensorID)
            .then(result => {
                console.log(result, "aberto em: ", new Date())
                res.status(200).json({
                    message: result.message
                })
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            })
    },2)
}

//---------------------- LM35
exports.lm35Data = (req, res, next) => {
    console.log(lm35ID)
    setTimeout(() => {
        axios.get(lm35ID)
            .then(result => {
                res.status(200).json({
                    message: result.message
                })
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            })
    },2)
}

//---------------------- BME280
exports.bme280Data = (req, res, next) => {
    console.log(bme280ID)
    setTimeout(() => {
        axios.get(bme280ID)
            .then(result => {
                res.status(200).json({
                    message: result.message
                })
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            })
    },2)
}

//---------------------- LEDS
exports.usarLeds = (req, res, next) => {
    console.log(ledsID)
    setTimeout(() => {
        axios.get(ledsID)
            .then(result => {
                res.status(200).json({
                    message: result.message
                })
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            })
    },2)
}


