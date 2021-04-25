<template>
  <div class="container">
    <LoadingSpinner :status="loading"/>
    <div class="btn" @click="goBack">
      <fa-icon icon="arrow-left"></fa-icon>
      <span>Back</span>
    </div>
    <div class="country-details">
      <img class="flag" :src="country.flag" alt="">
      <h3>{{country.name}}</h3>
      <p><span>Native Name:</span> {{country.nativeName}}</p>
      <p><span>Population:</span> {{population}}</p>
      <p><span>Region:</span> {{country.region}}</p>
      <p><span>Sub Region:</span> {{country.subregion}}</p>
      <p><span>Capital:</span> {{country.capital}}</p>

      <div class="official-details">
        <p><span>Top Level Domain:</span> {{topLevelDomain}}</p>
        <p><span>Currencies:</span> {{currencies}}</p>
        <p><span>Languages:</span> {{languages}}</p>
      </div>

      <div class="border-countries">
        <h4>Border Countries:</h4>
        <div class="borders">
            <div class="btn" v-for="(border, index) in borders" :key="index">{{border.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingSpinner from './LoadingSpinner'

export default {
  name: 'CountryDetails',
  components: {
    LoadingSpinner
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  },
  computed: {
    loading() {
      return this.$store.getters.loadingStatus
    },
    country() {
      return this.$store.getters.singleCountry
    },
    population() {
      return this.country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },
    topLevelDomain() {
      return this.country.topLevelDomain.join(', ')
    },
    currencies() {
      let listOfCurrencies = []
      this.country.currencies.forEach(currency => {
        listOfCurrencies.push(currency.name)
      })
      return listOfCurrencies.join(', ')
    },
    languages() {
      let listOfLanguages = []
      this.country.languages.forEach(language => {
        listOfLanguages.push(language.name)
      })
      return listOfLanguages.join(', ')
    },
    borders() {
      return this.$store.getters.borders
    }
  },
  created() {
    this.$store.dispatch('selectCountry', this.$route.params.countryName)
    this.$store.dispatch('findBorders', this.$route.params.countryName)
  }
}
</script>

<style scoped>

  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    padding: 1.5rem 2rem;
  }

  .btn {
    background-color: var(--clr-lm-elements);
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-right: auto;
    padding: .3rem 1.5rem;
    margin-bottom: 4rem;
    box-shadow: 1px 1px 5px #c7c7c7;
  }

  .btn span {
    padding-left: .5rem;
  }

  img {
    width: 100%;
    margin-bottom: 2rem;
  }

  h3, p {
    line-height: 2.5rem;
  }

  h3 {
    font-size: 1.4rem;
    font-weight: var(--fw-bold);
    margin-bottom: .5rem;
  }
  
  p {
    font-size: var(--fs-details);
    font-weight: var(--fw-regular);
  }
  span {
    font-weight: var(--fw-semi-bold);
  }

  .official-details, .border-countries {
    margin-top: 2rem;
  }

  .border-countries h4 {
    font-size: 1.1rem;
    font-weight: var(--fw-semi-bold);
  }

  .borders {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: .5rem;
    align-items: flex-start;
  }

  .borders > .btn {
    margin-bottom: .5rem;
    margin-right: .5rem;
  }
</style>