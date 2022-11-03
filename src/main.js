import Vue from 'vue'
import App from './App.vue'


import vuetify from '@/configs/vuetify/index'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// -----fontawesome套用
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app')
