<template>
  <v-app id="app">
    <v-responsive>
      <v-layout row align-center>
        <v-content>
          <v-container fluid>
            <v-card>
              <br />
              <img class="image-robot" src="../assets/robotOK.gif" />
              <v-list two-line>
                <h1 class="center">ArduEVE</h1>
                <label class="center, label">
                  <b class="b">Ardu</b>íno <br />"
                  <b class="b">E</b>xtraterrestrial" <b class="b">V</b>egetation
                  <b class="b">E</b>valuator
                </label>
              </v-list>
              <v-list two-line>
                <v-divider></v-divider>
                <v-list-tile>
                  <v-list-tile-action v-on:click="atualizar">
                    <img
                      class="image-status"
                      src="../assets/heart-status.png"
                    />
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      Arduíno Health:
                      {{ statusArduino.statusValue }}
                    </v-list-tile-title>
                    <v-list-tile-sub-title>
                      Latest:
                      <i class="createdAt">{{ statusArduino.createdAt }}</i>
                    </v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-divider></v-divider>
                <h5>
                  crafted with
                  <span style="color: red;">❤</span>
                  ️ by
                  <a
                    href="https://www.linkedin.com/in/hpbonfim/"
                    target="_blank"
                    >Henrique</a
                  >
                  (Linkedin)
                </h5>
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
      statusArduino: []
    };
  },
  firestore() {
    return {
      statusArduino: db.collection("ArduinoLog").doc("log")
    };
  },
  methods: {
    getLeds() {
      this.axios
        .post("	http://172.12.0.50:3333/user/leds")
        .then(function(response) {})
        .catch(function(error) {
          console.log(error);
        });
    },
    atualizar: function() {
      this.getLeds();
      this.axios
        .post("	http://172.12.0.50:3333/user/statusBoard")
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
  padding-right: 20px;
  margin: auto;
  height: 40px;
}
.center {
  -webkit-font-smoothing: none;
  margin: auto;
}
.label {
  color: #003b77;
}
.b {
  color: black;
}
.createdAt {
  font-size: 13px;
}
</style>
