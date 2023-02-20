import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import fonts from './assets/fonts/fonts.scss'

import Vuetify from 'vuetify'

Vue.use(VueRouter)
Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  Vuetify,
  router,
  fonts,
  render: h => h(App)
}).$mount('#app')
