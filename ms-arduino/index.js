const port = process.env.PORT || 3332
const bodyParser = require('body-parser')
const five = require('johnny-five')
const helmet = require('helmet')
const cors = require('cors')
const board = five.Board({repl: false, port: '/dev/rfcomm0'})
const express = require('express')
const app = express()

//---------------------------------------------//
//module.exports = app => {
    app.use(helmet()) // Ajuda na criptografia de dados
    app.use(cors(
        { origin: ["http://localhost:3333"],
        methods: ["GET"],
        allowedHeaders: ["Content-Type", "Authorization"] }
        ))
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    app.use('/', express.static(`${__dirname}/`)) // set the static files location for the static html

board.on("error", function(err) {
  console.log("Erro: ", err)
  process.exit(15)
})
console.log("Esperando o Arduino ligar...")
board.on("ready", function() {
    console.log('Arduino OK - datalog:',  new Date().toLocaleDateString(), " | ", new Date().toLocaleTimeString());
    //LED VERMELHO,
        var RED = new five.Led(9);
    //LED AMARELO
        var YELLOW = new five.Led(10);
    //LED VERDE
        var GREEN = new five.Led(11);

    //RELAY 1
        var relay1 = new five.Relay({
            type: "NC",
            pin: 13
        });
        relay1.off();

    //RELAY 2
        var relay2 = new five.Relay({
            type: "NC",
            pin: 12
        });
        relay2.off();
        
    //RELAY 3
        var relay3 = new five.Relay({
            type: "NC",
            pin: 7
        });
        relay3.off();
        
    //RELAY 4
        var relay4 = new five.Relay({
            type: "NC",
            pin: 6
        });
        relay4.off();

    // BME280 SENSOR TEMPERATURA
    var multi = new five.Multi({
        controller: "BME280",
            freq: 1000
    });

    // PHOTORESISTOR SENSOR TEMPERATURA
    var photoresistor = new five.Sensor({
        pin: "A1",
        freq: 1000
    });

    // LM35 SENSOR TEMPERATURA
    var temperature = new five.Thermometer({
        controller: "LM35",
        pin: "A0",
        freq: 1000
    });
//---------------------- RELAY 1
    app.use('/r1', (req, res, next) => {
        relay1.on();
        setTimeout(() => {  
            relay1.off();
        }, 700)
        res.status(200).json({
            message: new Date().toLocaleDateString() + " | " + new Date().toLocaleTimeString()
        })
    })

//---------------------- RELAY 2
    app.use('/r2', (req, res, next) => {
        if(!relay2.isOn){
            relay2.on();
            res.status(200).json({
                message: "ligado:" + new Date().toLocaleDateString() + " | " + new Date().toLocaleTimeString()
            })
        }
        else{
            relay2.off();
            res.status(200).json({
                message: "desligado:" + new Date().toLocaleDateString() + " | " + new Date().toLocaleTimeString()
            })
        }
    })

//---------------------- RELAY 3
    app.use('/r3', (req, res, next) => {
        if(!relay3.isOn){
            relay3.on();
            res.status(200).json({
                message: "ligado:" + new Date().toLocaleDateString() + " | " + new Date().toLocaleTimeString()
            })
        }
        else{
            relay3.off();
            res.status(200).json({
                message: "desligado:" + new Date().toLocaleDateString() + " | " + new Date().toLocaleTimeString()
            })
        }
    })

//---------------------- RELAY 4
    app.use('/r4', (req, res, next) => {
        if(!relay4.isOn){
            relay4.on();
            res.status(200).json({
                message: "ligado:" + new Date().toLocaleDateString() + " | " + new Date().toLocaleTimeString()
            })
        }
        else{
            relay4.off();
            res.status(200).json({
                message: "desligado:" + new Date().toLocaleDateString() + " | " + new Date().toLocaleTimeString()
            })
        }
    })

//---------------------- PHOTOSENSOR
app.use('/photosensor', (req, res) => {
    setTimeout(() => {  
        var snap = photoresistor.on("data", function() {
            // console.log("photosensor: ", new Date().toLocaleDateString(), " | ", new Date().toLocaleTimeString(), ">>>", this.value);
        })
        res.status(200).json({
            message: snap.value
        })
    }, 1)
})

//---------------------- LM35
    app.use('/temp1', (req, res, next) => {
        setTimeout(() => {  
            var snap = temperature.on("change", function() {
                // console.log( new Date().toLocaleDateString(), " | ", new Date().toLocaleTimeString(), ">>>", this.celsius + "°C", '\n');
            });
            res.status(200).json({
                message: snap.celsius
            })
        }, 1)
    })

//---------------------- BME280
    app.use('/temp0', (req, res, next) => {
        setTimeout(() => {  
            var snap = multi.on("data", function() {
                // console.log("Thermometer");
                // console.log("  celsius      : ", this.thermometer.celsius);
                // console.log("  fahrenheit   : ", this.thermometer.fahrenheit);
                // console.log("  kelvin       : ", this.thermometer.kelvin);
                // console.log("--------------------------------------");
            
                // console.log("Barometer");
                // console.log("  pressure     : ", this.barometer.pressure);
                // console.log("--------------------------------------");
            
                // console.log("Hygrometer");
                // console.log("  humidity     : ", this.hygrometer.relativeHumidity);
                // console.log("--------------------------------------");
            
                // console.log("Altimeter");
                // console.log("  feet         : ", this.altimeter.feet);
                // console.log("  meters       : ", this.altimeter.meters);
                // console.log("--------------------------------------");
            });
            res.status(200).json({
                message: { celsius:snap.thermometer.celsius, barometer: snap.barometer.pressure, humidity: snap.barometer.relativeHumidity, altimeter: snap.altimeter.meters }
            })
        }, 1)
    })
//---------------------- LEDS
    app.use('/leds', (req, res, next) => {
        setTimeout(() => {  
            RED.on();
            YELLOW.on();
            GREEN.on();
            this.wait(10000, function() {
                // stop() terminates the interval
                // off() shuts the led off
                RED.stop().off();
                YELLOW.stop().off();
                GREEN.stop().off();
            });
        }, 700)
        res.status(200).json({ message: new Date().toLocaleDateString() + " | " + new Date().toLocaleTimeString() })
    })

//---------------------- STATUS BOARD
    app.use('/statusBoard', (req, res, next) => {
        setTimeout(() => {  
            res.status(200).json({
                message: 'Arduino OK:' + new Date().toLocaleDateString() + " | " + new Date().toLocaleTimeString()
            })
        }, 1)
    })

    app.listen(port, function() {
        console.log("ms-arduino port: ",port)
    })
})
//}

//---------------------------------------------//