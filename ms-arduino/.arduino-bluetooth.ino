// Jonnhy-Five Bluetooth Connection
// https://www.olimex.com/Products/Components/RF/BLUETOOTH-SERIAL-HC-06/resources/hc06.pdf
// If you haven't configured your device before use this
//#define BLUETOOTH_SPEED 38400 //This is the default baudrate that HC-05 uses
// If you are modifying your existing configuration, use this:
/ #define BLUETOOTH_SPEED 57600

#include <SoftwareSerial.h>

// Swap RX/TX connections on bluetooth chip
//   Pin 5 --> Bluetooth TX
//   Pin 6 --> Bluetooth RX
SoftwareSerial mySerial(5, 6);

void setup() {
  Serial.begin(9600);
  while (!Serial) { // wait for serial port to connect. Needed for Leonardo only }
  
  Serial.println("Configurando Bluetooth...");
  mySerial.begin(BLUETOOTH_SPEED);
  delay(1000);

  // Should respond with OK
  mySerial.print("AT");
  waitForResponse();

  // Should respond with its version
  mySerial.print("AT+VERSION");
  waitForResponse();

  // Set pin to 0000
  mySerial.print("AT+PIN0000");
  waitForResponse();

  // Set the name to ROBOT_NAME
 mySerial.print("AT+NAMEArduEVE");
  waitForResponse();

  // Set baudrate to 57600
  mySerial.print("AT+BAUD7");
  waitForResponse();

  Serial.println("Prontin!");
}

void waitForResponse() {
    delay(1000);
    while (mySerial.available()) {
      Serial.write(mySerial.read());
    }
    Serial.write("\n");
}

void loop() {}