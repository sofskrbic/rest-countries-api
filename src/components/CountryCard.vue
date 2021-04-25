<template>
  <div class="container" @click="selectThisCountry">
    <div class="flag">
      <img :src="country.flag" alt="Flag">
    </div>
    <div class="details">
      <h3>{{country.name}}</h3>
      <p><span>Population:</span> {{populationFormat}}</p>
      <p><span>Region:</span> {{country.region}}</p>
      <p><span>Capital:</span> {{country.capital}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountryCard',
  props: {
    country: Object
  },
  computed: {
    populationFormat() {
      return this.country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
  },
  methods: {
    selectThisCountry() {
      this.$store.dispatch('selectCountry', this.country.alpha3Code)
      this.$router.push({ path: `/country/${this.country.alpha3Code}`})
    }
  }
}
</script>

<style scoped>
  .container {
    cursor: pointer;
    width: 80%;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: var(--clr-elements);
    margin-inline: auto;
    margin-block: 2.5rem;
    box-shadow: 0 1px 3px var(--clr-box-shadow);
  }

  .flag img {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }

  .details {
    padding: 1.5rem 2rem;
  }

  .details h3 {
    margin-bottom: 1rem;
    font-weight: var(--fw-bold);
  }

  .details span {
    font-weight: var(--fw-semi-bold);
  }

  .details p {
    padding-block: .2rem;
  }

  p:last-child {
    padding-bottom: 1rem;
  }
</style>