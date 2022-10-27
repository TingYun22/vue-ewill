import Vue from 'vue'
import App from './App.vue'
import { router } from './configs'

import vuetify from '@/configs/vuetify/index'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
// -----fontawesome套用
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

let services = require.context('@/modules/', true, /^.*\/service\/index\.js$/)

services.keys().forEach(function (service) {
  services(service).default
})

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
