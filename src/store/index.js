import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    loadingStatus: false,
    countries: [],
    selectedCountry: Object(),
    selectedRegion: '',
    regions: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'],
    borders: []
  },
  mutations: {
    changeLoadingStatus(state, payload) {
      state.loadingStatus = payload.loading
    },
    setAllCountries(state, payload) {
      state.countries = payload.data
    },
    setSelectedCountry(state, payload) {
      state.selectedCountry = payload.country
    },
    makeRegionSelection(state, payload) {
      state.selectedRegion = payload.region
    },
    setListOfBorders(state, payload) {
      state.borders = payload.borders
    }
  },
  actions: {
    // Gets the list of all countries
    getAllCountries({ commit }) {
      commit('changeLoadingStatus', {loading:true})
      axios.get('https://restcountries.eu/rest/v2/all')
        .then(response => {
          commit('setAllCountries', {
            data: response.data
          })
          commit('changeLoadingStatus', {loading:false})
        })
    },
    // Select a country by its Alpha 3 Code
    selectCountry({ commit }, code) {
      axios.get('https://restcountries.eu/rest/v2/alpha/' + code)
        .then(response => {
          commit('setSelectedCountry', {
            country: response.data
          })
        })
    },
    // find borders
    findBorders({ commit }, code) {
      commit('changeLoadingStatus', {loading: true})
      axios.get('https://restcountries.eu/rest/v2/alpha/' + code + "?fields=borders")
        .then(response => {
          let query = response.data.borders
          query = query.join(';').split(',')
          axios.get('https://restcountries.eu/rest/v2/alpha?codes='+query)
          .then(res => commit('setListOfBorders', {borders: res.data}))
        })
        .catch(err => console.error(`An error occurred trying to complete the request: ${err.message}`))
        commit('changeLoadingStatus', {loading: false})
    },
  },
  getters: {
    filterCountriesByRegion: state => {
      return state.countries.filter(country => country.region === state.selectedRegion)
    },
    allCountries: state => {
      return state.countries  
    },
    regions: state => {
      return state.regions
    },
    loadingStatus: state => {
      return state.loadingStatus
    },
    singleCountry: state => {
      return state.selectedCountry
    },
    borders: state => {
      return state.borders
    }
  }
})

export default store