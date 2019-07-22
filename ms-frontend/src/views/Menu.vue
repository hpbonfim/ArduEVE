<template>
  <v-app id="app">
    <body>
      <Controle v-if="controle"></Controle>
      <Home v-if="home"></Home>
      <Sensores v-if="sensores"></Sensores>
    </body>
    <v-bottom-nav
      :active.sync="bottomNav"
      :color="color"
      :value="true"
      absolute
      dark
      shift
    >
      <v-btn dark v-model="controle">
        <span>Controle</span>
        <v-icon>settings_remote</v-icon>
      </v-btn>

      <v-btn dark v-model="home">
        <span>Home</span>
        <v-icon>ballot</v-icon>
      </v-btn>

      <v-btn dark v-model="sensores">
        <span>Sensores</span>
        <v-icon>settings_input_composite</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
import Controle from "../components/Controle";
import Home from "../components/Home";
import Sensores from "../components/Sensores";

export default {
  components: {
    Controle,
    Home,
    Sensores
  },
  data() {
    return {
      controle: false,
      home: false,
      sensores: false,
      bottomNav: 1
    };
  },

  computed: {
    color() {
      switch (this.bottomNav) {
        case 0:
          return "gray";
        case 1:
          return "blue";
        case 2:
          return "black";
      }
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
</style>
