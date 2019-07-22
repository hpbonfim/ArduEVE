<template>
  <v-app id="app">
    <v-responsive>
      <v-layout row align-center>
        <v-content>
          <v-container fluid>
            <v-card>
              <!-- SENSOR DE TEMPERATURA -->
              <v-list two-line>
                <v-list-tile>
                  <v-list-tile-action>
                    <img class="image-status" src="../assets/temperature.png" />
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      Temperatura:
                      {{ statusTemperatura.celsius }}
                    </v-list-tile-title>
                    <v-list-tile-sub-title>
                      Última Atualização:
                      <div class="a">{{ statusTemperatura.createdAt }}</div>
                    </v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
            <br />
            <v-divider></v-divider>
            <v-card>
              <!-- SENSOR DE PRESSAO -->
              <v-list two-line>
                <v-list-tile>
                  <v-list-tile-action>
                    <img class="image-status" src="../assets/pressure.png" />
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      Pressão Atmosférica:
                      {{ statusHumidadePressao.pressure }}
                    </v-list-tile-title>
                    <v-list-tile-sub-title>
                      Última Atualização:
                      <div class="a">{{ statusHumidadePressao.createdAt }}</div>
                    </v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
            <br />
            <v-divider></v-divider>
            <v-card>
              <!-- SENSOR DE HUMIDADE -->
              <v-divider></v-divider>
              <v-list two-line>
                <v-list-tile>
                  <v-list-tile-action>
                    <img class="image-status" src="../assets/humidity.png" />
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      Nível de Humidade:
                      {{ statusHumidadePressao.relativeHumidity }}
                    </v-list-tile-title>
                    <v-list-tile-sub-title>
                      Última Atualização:
                      <div class="a">{{ statusHumidadePressao.createdAt  }}</div>
                    </v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
            <br />
            <v-divider></v-divider>
            <v-card>
              <!-- SENSOR DE LUZ -->
              <v-divider></v-divider>
              <v-list two-line>
                <v-list-tile>
                  <v-list-tile-action>
                    <img class="image-status" src="../assets/farola.png" />
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      Sensor de Luz:
                      {{ statusSensorLuz.value }}
                    </v-list-tile-title>
                    <v-list-tile-sub-title>
                      Última Atualização:
                      <div class="a">{{ statusSensorLuz.createdAt }}</div>
                    </v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-container>
              <v-btn
                color="blue"
                dark
                center
                fab @click="getTodosUpdates"
              >
                <v-icon>refresh</v-icon>
              </v-btn>
        </v-content>
      </v-layout>
    </v-responsive>
  </v-app>
</template>

<script>
import { db } from "../../db";

export default {
  data() {
    return {
      statusTemperatura: [],
      statusHumidadePressao: [],
      statusSensorLuz: []
    };
  },
  
  firestore() {
    return {
      statusTemperatura: db.collection("LmLog").doc("log"), 
      statusHumidadePressao: db.collection("BMData").doc("log"), 
      statusSensorLuz: db.collection("PhotosensorLog").doc("log")
    };
  }, 
  methods: {
    getTodosUpdates() {
      this.getUpdateTemperatura(),
      this.getUpdateHumidade(),
      this.getUpdateSensorLuz()
    },
    getUpdateTemperatura () {
      this.axios
        .post("http://172.12.0.50:3333/user/lm35Data")
        .then(function(response) {
           
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getUpdateHumidade () {
      this.axios
        .post("http://172.12.0.50:3333/user/bme280Data")
        .then(function(response) {})
        .catch(function(error) {
          console.log(error);
        });
    },
    getUpdateSensorLuz () {
      this.axios
        .post("http://172.12.0.50:3333/user/photosensorData")
        .then(function(response) {
          alert("Todos Atualizados até: " + response.data.data.createdAt + "!");
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.image-status {
  margin: auto;
  height: 40px;
}
div.a {
  font-size: 13px;
}
</style>
