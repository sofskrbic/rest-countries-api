import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMoon, faSearch, faArrowLeft, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import {faMoon as regularMoon} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import store from './store'
import router from './router'

library.add(faMoon, faSearch, faArrowLeft, faChevronDown, regularMoon)

Vue.component('fa-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
