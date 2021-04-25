import VueRouter from 'vue-router'
import Vue from 'vue'
import CountryDetails from './components/CountryDetails.vue'
import HomePage from './components/HomePage.vue'
// import store from './store/index'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/country/:countryName',
      name: 'Country Details',
      component: CountryDetails
    }
  ]
})

export default router