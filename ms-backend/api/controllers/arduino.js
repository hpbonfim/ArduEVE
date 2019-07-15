const mongoose = require("mongoose")
const axios = require('axios')
const imports = require('../routes/arduino')
const db = require('../../database.config').db

//---------------------- ARDUINO BOARD
exports.statusBoard = (req, res, next) => {
    console.log(imports.arduinoID)
    setTimeout(() => {
        axios.get(imports.arduinoID)
            .then(result => {
                db.collection('ArduinoLog').add(result.data.data);
                new imports.ArduinoLog({
                    _id: new mongoose.Types.ObjectId(),
                    data: result.data.data
                }).save()
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
    },2)
}

//---------------------- RELAY 1
exports.usarPorta = (req, res, next) => {
    setTimeout(() => {
        axios.get(imports.portaID)
            .then(result => {
                db.collection('PortaLog').add(result.data.data);
                new imports.PortaLog({
                    _id: new mongoose.Types.ObjectId(),
                    data: result.data.data
                }).save()
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
    },2)
}

//---------------------- RELAY 2
exports.usarVentilador = (req, res, next) => {
    setTimeout(() => {
        axios.get(imports.ventiladorID)
            .then(result => {
                db.collection('VentiladorLog').add(result.data.data);
                new imports.VentiladorLog({
                    _id: new mongoose.Types.ObjectId(),
                    data: result.data.data
                }).save()
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
    },2)
}

//---------------------- RELAY 3
exports.usarLampada = (req, res, next) => {
    setTimeout(() => {
        axios.get(imports.lampadaID)
            .then(result => {
                db.collection('LampadaLog').add(result.data.data);
                new imports.LampadaLog({
                    _id: new mongoose.Types.ObjectId(),
                    data: result.data.data
                }).save()
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
    },2)
}

//---------------------- RELAY 4
exports.usarRelay = (req, res, next) => {
    setTimeout(() => {
        axios.get(imports.relay4ID)
            .then(result => {
                db.collection('RelayLog').add(result.data.data);
                new imports.RelayLog({
                    _id: new mongoose.Types.ObjectId(),
                    data: result.data.data
                }).save()
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
    },2)
}

//---------------------- PHOTOSENSOR
exports.photosensorData = (req, res, next) => {
    setTimeout(() => {
        axios.get(imports.photosensorID)
            .then(result => {
                db.collection('PhotosensorLog').add(result.data.data);
                new imports.PhotosensorLog({
                    _id: new mongoose.Types.ObjectId(),
                    data: result.data.data
                }).save()
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
    },2)
}

//---------------------- LM35
exports.lm35Data = (req, res, next) => {
    setTimeout(() => {
        axios.get(imports.lm35ID)
            .then(result => {
                db.collection('LmLog').add(result.data.data);
                new imports.LmLog({
                    _id: new mongoose.Types.ObjectId(),
                    data: result.data.data
                }).save()
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
    },2)
}

//---------------------- BME280
exports.bme280Data = (req, res, next) => {
    setTimeout(() => {
        axios.get(imports.bme280ID)
            .then(result => {
                db.collection('BMData').add(result.data.data);
                new imports.BmLog({
                    _id: new mongoose.Types.ObjectId(),
                    data: result.data.data
                }).save()
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
    },2)
}

//---------------------- LEDS
exports.usarLeds = (req, res, next) => {
    setTimeout(() => {
        axios.get(imports.ledsID)
            .then(result => {
                db.collection('LedLog').add(result.data.data);
                new imports.LedLog({
                    _id: new mongoose.Types.ObjectId(),
                    data: result.data.data
                }).save()
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
    },2)
}
