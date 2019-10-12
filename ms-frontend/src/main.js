import Vue from "vue";
import axios from "axios";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import VueAxios from "vue-axios";
import "./registerServiceWorker";
import { firestorePlugin } from "vuefire";

Vue.use(VueAxios, axios);
Vue.use(firestorePlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
