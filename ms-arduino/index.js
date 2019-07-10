const port = process.env.ARDUINO_PORT || 3001
const bodyParser = require('body-parser')
const five = require('johnny-five')
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const app = express()
const board = five.Board({repl: false, port: '/dev/rfcomm1'})

//---------------------------------------------//
module.exports = app => {
    app.use(helmet()) // Ajuda na criptografia de dados
    app.use(cors({
        origin: ["http://localhost:3001"],
        methods: ["GET"],
        allowedHeaders: ["Content-Type", "Authorization"]
        }))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))

board.on("error", function(err) {
  console.log("Erro: ", err)
  process.exit(15)
  /* continue as normal */
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
            pin: 7
        });
        relay1.off();

    //RELAY 2
        var relay2 = new five.Relay({
            type: "NC",
            pin: 8
        });
        relay2.off();
        
    //RELAY 3
        var relay3 = new five.Relay({
            type: "NC",
            pin: 12
        });
        relay3.off();
        
    //RELAY 4
        var relay4 = new five.Relay({
            type: "NC",
            pin: 13
        });
        relay4.off();

    // BME280 SENSOR TEMPERATURA
    var multi = new five.Multi({
        controller: "BME280",
            freq: 1000
    });

    // LM35 SENSOR TEMPERATURA
        var temperature = new five.Thermometer({
        controller: "LM35",
        pin: "A3",
        freq: 1000
    });
    
    // PHOTORESISTOR SENSOR TEMPERATURA
    var photoresistor = new five.Sensor({
        pin: "A2",
        freq: 250
    });

    var joystick = new five.Joystick({
    //   [ x, y ]
    pins: ["A0", "A1"]
    });

    joystick.on("change", function() {
    console.log("Joystick");
    console.log("  x : ", this.x);
    console.log("  y : ", this.y);
    console.log("--------------------------------------");
    });

    //---------------------- RELAY 1
        app.use('/r1', (req, res, next) => {
            console.log( new Date().toLocaleDateString(), " | ", new Date().toLocaleTimeString());
            relay1.on();
            setTimeout(() => {  
                res.sendStatus(200);
                next()
                relay1.off();
            }, 700)
        })

    //---------------------- RELAY 2
        app.use('/r2', (req, res, next) => {
            console.log( new Date().toLocaleDateString(), " | ", new Date().toLocaleTimeString());
            relay2.on();
            setTimeout(() => {  
                res.sendStatus(200);
                next()
                relay2.off();
            }, 700)
        })

    //---------------------- RELAY 3
        app.use('/r3', (req, res, next) => {
            console.log( new Date().toLocaleDateString(), " | ", new Date().toLocaleTimeString());
            relay3.on();
            setTimeout(() => {  
                res.sendStatus(200);
                next()
                relay3.off();
            }, 700)
        })

    //---------------------- RELAY 4
        app.use('/r4', (req, res, next) => {
            console.log( new Date().toLocaleDateString(), " | ", new Date().toLocaleTimeString());
            relay4.on();
            setTimeout(() => {  
                res.sendStatus(200);
                next()
                relay4.off();
            }, 700)
        })

    //---------------------- PHOTOSENSOR
        app.use('/photosensor', (req, res, next) => {
            photoresistor.on("data", function() {
                console.log("photosensor: ", new Date().toLocaleDateString(), " | ", new Date().toLocaleTimeString(), ">>>", this.value);
            });
            setTimeout(() => {  
                res.sendStatus(200);
                next()
            }, 700)
        })

    //---------------------- LM35
        app.use('/temp1', (req, res, next) => {
            temperature.on("change", function() {
                console.log( new Date().toLocaleDateString(), " | ", new Date().toLocaleTimeString(), ">>>", this.celsius + "°C", '\n');
            });
            setTimeout(() => {  
                res.sendStatus(200);
                next()
            }, 700)
        })

    //---------------------- BME280
        app.use('/temp0', (req, res, next) => {
            multi.on("data", function() {
                console.log("Thermometer");
                console.log("  celsius      : ", this.thermometer.celsius);
                console.log("  fahrenheit   : ", this.thermometer.fahrenheit);
                console.log("  kelvin       : ", this.thermometer.kelvin);
                console.log("--------------------------------------");
            
                console.log("Barometer");
                console.log("  pressure     : ", this.barometer.pressure);
                console.log("--------------------------------------");
            
                console.log("Hygrometer");
                console.log("  humidity     : ", this.hygrometer.relativeHumidity);
                console.log("--------------------------------------");
            
                console.log("Altimeter");
                console.log("  feet         : ", this.altimeter.feet);
                console.log("  meters       : ", this.altimeter.meters);
                console.log("--------------------------------------");
            });
            setTimeout(() => {  
                res.sendStatus(200);
                next()
            }, 700)
        })
    //---------------------- LEDS
        app.use('/abrir', (req, res, next) => {
            RED.on();
            this.wait(10000, function() {
                // stop() terminates the interval
                // off() shuts the led off
                RED.stop().off();
            });
            YELLOW.on();
            this.wait(10000, function() {
                // stop() terminates the interval
                // off() shuts the led off
                YELLOW.stop().off();
            });
            GREEN.on();
            this.wait(10000, function() {
                // stop() terminates the interval
                // off() shuts the led off
                GREEN.stop().off();
            });
            setTimeout(() => {  
                res.sendStatus(200);
                next()
            }, 700)
        })

        app.listen(port, function() {
            console.log("Arduino port: ",port)
        })
    })
}

//---------------------------------------------//