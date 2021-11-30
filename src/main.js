import Vue from 'vue'
import App from './App.vue'
import './assets/styles/index.css'
import VueMq from 'vue-mq'
import Lottie from 'lottie-web'
import { ObserveVisibility } from 'vue-observe-visibility'
import Vuelidate from 'vuelidate'
import PortalVue from 'portal-vue'
Vue.use(PortalVue)
Vue.use(Vuelidate)
Vue.directive('observe-visibility', ObserveVisibility)
Vue.use(VueMq, {
  breakpoints: { // matches default tailwind breakpoints
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280
  },
  defaultBreakpoint: 'sm' // customize this for SSR
})

Object.defineProperty(Vue.prototype, '$lottie', { value: Lottie })

Vue.config.productionTip = false

new Vue({
  // router,
  // store,
  render: h => h(App)
}).$mount('#app')
