<template>
  <div class="container">
    <LoadingSpinner :status="loading"/>
    <div class="btn" @click="goBack">
      <fa-icon icon="arrow-left" class="icon"></fa-icon>
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

      <div class="border-countries" v-show="borders.length > 0">
        <h4>Border Countries:</h4>
        <div class="borders">
            <div class="btn" v-for="(border, index) in borders" 
              :key="index"
              @click="goToCountry(border)">
              {{border.name}}</div>
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
    },
    goToCountry(border){
      this.$store.dispatch('selectCountry', border.alpha3Code)
      this.$router.push({ path: `/country/${border.alpha3Code}`})
    },
    loadCountry(){
      this.$store.dispatch('selectCountry', this.$route.params.countryName)
      this.$store.dispatch('findBorders', this.$route.params.countryName)
    },
    resetBorders() {
      this.$store.commit('resetBorders')
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
      return this.country.population ? this.country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : ''
    },
    topLevelDomain() {
      return this.country.topLevelDomain ? this.country.topLevelDomain.join(', ') : ''
    },
    currencies() {
      let listOfCurrencies = []
      if (this.country.currencies) {
        this.country.currencies.forEach(currency => {
          listOfCurrencies.push(currency.name)
        })
        return listOfCurrencies.join(', ')
      }
      return ''
    },
    languages() {
      let listOfLanguages = []
      if(this.country.languages) {
        this.country.languages.forEach(language => {
          listOfLanguages.push(language.name)
        })
        return listOfLanguages.join(', ')
      }
      return ''
    },
    borders() {
      return this.$store.getters.borders
    }
  },
  created() {
    // this.$store.dispatch('selectCountry', this.$route.params.countryName)
    // this.$store.dispatch('findBorders', this.$route.params.countryName)
    this.resetBorders()
    this.loadCountry()
  },
  watch: {
    '$route.params.countryName': function() {
      this.resetBorders()
      this.loadCountry()
    }
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
    background-color: var(--clr-elements);
    color: var(--clr-text);
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-right: auto;
    padding: .3rem 1.5rem;
    margin-bottom: 4rem;
    box-shadow: 1px 1px 5px var(--clr-box-shadow);
  }

  .btn span {
    padding-left: .5rem;
  }

  .icon {
    color: var(--clr-text);
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