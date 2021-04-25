<template>
  <div>
    <div class="split">
      <SearchField
        :countries="countries" />
      <SelectFilter
        :options="regions"
        :default="'Filter by Region'"
        class="select"
        @filterActive="filter = true"/>
    </div>
    <LoadingSpinner :status="loading" />
    <div class="country-container">
      <CountryCard v-for="(country, index) in countries"
        :key="index"
        :country="country"
        />
    </div>
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

  .country-container {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 1440px) {
    .country-container {
      flex-direction: row;
      flex-wrap: wrap;
      padding-inline: 2rem;
    }

    .split {
      display: flex;
      margin-block: 1rem;
    }
  }
</style>