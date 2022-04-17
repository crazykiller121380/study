import Vue from 'vue'
import App from './App.vue'
import { hunru } from './mixin'

Vue.config.productionTip = false
Vue.mixin(hunru)

new Vue({
  el: '#app',
  render: h => h(App)
})