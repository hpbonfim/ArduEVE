<template>
  <v-app>
    <v-responsive>
      <v-layout row align-center>
        <v-content>
          <v-container fluid>
            <v-card>
              <!-- RELAY 1 -->
              <h5>Clique no ícone para controlar o item desejado</h5>
            </v-card>
            <v-divider></v-divider>
            <v-card>
              <v-list two-line>
                <v-list-tile>
                  <v-list-tile-action @click="getUpdateLampada">
                    <img class="image-status" src="../assets/lampada.png" />
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      Status da Lâmpada:
                      {{ statusLampada.statusValue }}
                    </v-list-tile-title>
                    <v-list-tile-sub-title>
                      Última Atualização:
                     <div class="a">{{ statusLampada.createdAt }}</div>
                    </v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
            <br />
            <v-divider></v-divider>
            <v-card>
              <!-- RELAY 2 -->
              <v-list two-line>
                <v-list-tile>
                  <v-list-tile-action @click="getUpdateRelay">
                    <img class="image-status" src="../assets/relay.png" />
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      Status do Relay:
                      {{ statusRelay.statusValue }}
                    </v-list-tile-title>
                    <v-list-tile-sub-title>
                      Última Atualização:
                      <div class="a">{{ statusRelay.createdAt }}</div>
                    </v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
              <v-divider></v-divider>
            </v-card>
            <br />
            <v-divider></v-divider>
            <v-card>
              <!-- RELAY 3 -->
              <v-list two-line>
                <v-list-tile>
                  <v-list-tile-action @click="getUpdateLed">
                    <img class="image-status" src="../assets/led.png" />
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      Status da Led:
                      {{ statusLed.statusValue }}
                    </v-list-tile-title>
                    <v-list-tile-sub-title>
                      Última Atualização:
                     <div class="a">{{ statusLed.createdAt }}</div>
                    </v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
              <!-- RELAY 4 -->
            </v-card>
            <br />
            <v-divider></v-divider>
            <v-card>
              <v-list two-line>
                <v-list-tile>
                  <v-list-tile-action @click="getUpdatePorta">
                    <img class="image-status" src="../assets/porta.png" />
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      Status do Porta:
                      {{ statusPorta.statusValue }}
                    </v-list-tile-title>
                    <v-list-tile-sub-title>
                      Última Atualização:
                      <div class="a">{{ statusPorta.createdAt }}</div>
                    </v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-container>
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
      statusLampada: [],
      statusRelay: [],
      statusLed: [],
      statusPorta: []
    };
  },

  firestore() {
    return {
      statusLampada: db.collection("LampadaLog").doc("log"),
      statusRelay: db.collection("RelayLog").doc("log"),
      statusLed: db.collection("LedLog").doc("log"),
      statusPorta: db.collection("PortaLog").doc("log")
    };
  }, 
  methods: {
    getUpdateLampada () {
      this.axios
        .post("http://172.12.0.50:3333/user/usarLampada")
        .then(function(response) { 
            alert("Atualizado: " + response.data.data.createdAt + "!");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getUpdateRelay () {
      this.axios
        .post("http://172.12.0.50:3333/user/usarRelay")
        .then(function(response) { 
            alert("Atualizado: " + response.data.data.createdAt + "!");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getUpdateLed () {
      this.axios
        .post("http://172.12.0.50:3333/user/usarLed")
        .then(function(response) {
            alert("Atualizado: " + response.data.data.createdAt + "!");
         })
        .catch(function(error) {
          console.log(error);
        });
    },
    getUpdatePorta () {
      this.axios
        .post("http://172.12.0.50:3333/user/usarPorta")
        .then(function(response) {
            alert("Atualizado: " + response.data.data.createdAt + "!");
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
.image-robot {
  margin: auto;
  height: 200px;
}
.image-status {
  margin: auto;
  height: 40px;
}
.center {
  -webkit-font-smoothing: none;
  margin: auto;
}
div.a {
  font-size: 13px;
}
</style>
