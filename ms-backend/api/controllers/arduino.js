const axios = require('axios')
const imports = require('../routes/arduino')
const db = require('../../database.config').db

//---------------------- ARDUINO BOARD
exports.statusBoard = (req, res, next) => {
    setTimeout(() => {
        axios.get(imports.arduinoID)
            .then(result => {
                console.log(result.data.data);
                db.collection('ArduinoLog').doc('log').set(result.data.data, { merge: true })
                    .then(resp => {
                        console.log(resp);
                        res.status(200).json({
                            data: result.data.data
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
    }, 2)
}

//---------------------- RELAY 1
exports.usarLampada = (req, res, next) => {
    setTimeout(() => {
        axios.get(imports.lampadaID)
            .then(result => {
                db.collection('LampadaLog').doc('log').set(result.data.data, { merge: true })
                    .then(resp => {
                        res.status(200).json({
                            data: result.data.data
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
    }, 2)
}

//---------------------- RELAY 2
exports.usarRelay = (req, res, next) => {
    setTimeout(() => {
        axios.get(imports.relayID)
            .then(result => {
                db.collection('RelayLog').doc('log').set(result.data.data, { merge: true })
                    .then(resp => {
                        res.status(200).json({
                            data: result.data.data
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
    }, 2)
}

//---------------------- RELAY 3
exports.usarLed = (req, res, next) => {
    setTimeout(() => {
        axios.get(imports.ledID)
            .then(result => {
                db.collection('LedLog').doc('log').set(result.data.data, { merge: true })
                    .then(resp => {
                        res.status(200).json({
                            data: result.data.data
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
    }, 2)
}
//---------------------- RELAY 4
exports.usarPorta = (req, res, next) => {
    setTimeout(() => {
        axios.get(imports.portaID)
            .then(result => {
                db.collection('PortaLog').doc('log').set(result.data.data, { merge: true })
                    .then(resp => {
                        res.status(200).json({
                            data: result.data.data
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
    }, 2)
}

//---------------------- PHOTOSENSOR
exports.photosensorData = (req, res, next) => {
    setTimeout(() => {
        axios.get(imports.photosensorID)
            .then(result => {
                db.collection('PhotosensorLog').doc('log').set(result.data.data, { merge: true })
                    .then(resp => {
                        res.status(200).json({
                            data: result.data.data
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
    }, 2)
}

//---------------------- LM35
exports.lm35Data = (req, res, next) => {
    setTimeout(() => {
        axios.get(imports.lm35ID)
            .then(result => {
                db.collection('LmLog').doc('log').set(result.data.data, { merge: true })
                    .then(resp => {
                        res.status(200).json({
                            data: result.data.data
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
    }, 2)
}

//---------------------- BME280
exports.bme280Data = (req, res, next) => {
    setTimeout(() => {
        axios.get(imports.bme280ID)
            .then(result => {
                db.collection('BMData').doc('log').set(result.data.data, { merge: true })
                    .then(resp => {
                        res.status(200).json({
                            data: result.data.data
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
    }, 2)
}

//---------------------- LEDS
exports.usarLeds = (req, res, next) => {
    setTimeout(() => {
        axios.get(imports.ledsID)
            .then(result => {
                db.collection('LedLog').doc('log').set(result.data.data, { merge: true })
                    .then(resp => {
                        res.status(200).json({
                            data: result.data.data
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
    }, 2)
}