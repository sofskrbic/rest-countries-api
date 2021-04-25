<template>
  <div>
    <SearchField
      :countries="countries" />
    <SelectFilter 
      :options="regions"
      :default="'Filter by Region'"
      class="select"
      @filterActive="filter = true"/>
    <LoadingSpinner :status="loading" />
    <CountryCard v-for="(country, index) in countries" 
      :key="index" 
      :country="country"
      />
  </div>
</template>

<script>
import SearchField from './SearchField'
import SelectFilter from './SelectFilter'
import LoadingSpinner from './LoadingSpinner'
import CountryCard from './CountryCard'

export default {
  name: 'HomePage',
  components: {
    SearchField,
    SelectFilter,
    CountryCard,
    LoadingSpinner
  },
  data() {
    return {
      filter: false
    }
  },
  computed: {
    countries() {
      if(this.filter) {
        return this.$store.getters.filterCountriesByRegion
      }
      return this.$store.getters.allCountries
    },
    regions() {
      return this.$store.getters.regions
    },
    loading() {
      return this.$store.getters.loadingStatus
    }
  },
  created() {
    this.$store.dispatch('getAllCountries')
  }
}
</script>

<style scoped>
  body {
    font-size: var(--fs-homepage);
  }
</style>