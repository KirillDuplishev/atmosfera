import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import fonts from './assets/fonts/fonts.scss'
import Carousel3d from 'vue-carousel-3d';

import Vuetify from 'vuetify'

Vue.use(Carousel3d);
Vue.use(VueRouter)
Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  Vuetify,
  router,
  fonts,
  render: h => h(App)
}).$mount('#app')
