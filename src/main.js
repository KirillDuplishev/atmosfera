import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import fonts from './assets/fonts/fonts.scss'
import Carousel3d from 'vue-carousel-3d';

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'


Vue.use(Carousel3d);
Vue.use(VueRouter)
Vue.use(Vuetify)

const vuetify = new Vuetify({
  theme: {
    dark: true
  }
})

Vue.config.productionTip = false

new Vue({
  Vuetify,
  vuetify,
  router,
  fonts,
  render: h => h(App)
}).$mount('#app')
