<template>
  <div class="container-input">
    <fa-icon icon="search"></fa-icon>
    <input type="text" 
      name="country-name" 
      id="country-name" 
      placeholder="Search for a country..." 
      v-model.trim="searchValue"
      >
      <ul class="autocomplete-results" v-show="searchValue">
        <li class="autocomplete-result"
          v-for="(result, index) in filterResults"
          :key="index"
          @click="setResult(result)"
          >
          <router-link :to="path" @click="setResult(result)">
            <img :src="result.flag" alt="Flag">
            {{ result.name }}
          </router-link>
        </li>
      </ul>
  </div>
</template>

<script>

export default {
  name: 'SearchField',
  props: {
    countries: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      searchValue: '',
      results: [],
      isOpen: false,
      path: ''
    }
  },
  computed: {
    filterResults() {
        return this.countries.filter(country => country.name.toLowerCase().indexOf(this.searchValue.toLowerCase()) > -1)
    },
  },
  methods: {
    setResult(result) {
      this.searchValue = result.name
      this.$store.dispatch('selectCountry', result.alpha3Code)
      this.isOpen = false
      this.$router.push({ path: `/country/${result.alpha3Code}`})
    },
    handleClickOutside(event) {
      if(!this.$el.contains(event.target)) {
        this.isOpen = false
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside)
  },
  destroyed() {
    document.removeEventListener('click', this.handleClickOutside)
  },
  watch: {
    searchValue() {
      this.results = this.countries.filter(country => country.name.toLowerCase().indexOf(this.searchValue.toLowerCase()) > -1)
    }
  }
}
</script>

<style scoped>
  .container-input {
    background: var(--clr-lm-elements);
    border-radius: 10px;
    padding: 1rem 2rem;
    width: 90%;
    box-shadow: 0 1px 3px #e0e0e0;
    margin-top: 2rem;
    margin-inline: auto;
    position: relative;
  }
  svg {
    color: var(--clr-lm-input);
    margin-right: .5rem;
  }

  input {
    border: none;
    width: 91%;
    padding: .2rem 1rem;
    font-family: var(--ff-default);
    font-size: var(--fs-homepage);
  }

  input:focus {
    border-bottom: 1px solid var(--clr-lm-input);
    outline: none;
  }

  .autocomplete-results {
    width: 100%;
    position: absolute;
    background-color: var(--clr-lm-elements);
    box-shadow: 0px -1px 3px #e0e0e0;
    list-style: none;
    left: 50%;
    transform: translateX(-50%);
    top: 3rem;
    margin-inline: auto;
    border-radius: 0 0 6px 6px;
    z-index: 4;
  }

  .autocomplete-result {
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    font-family: var(--ff-default);
  }

  .autocomplete-result img {
    width: 10%;
    margin-right: .5rem;
    border-radius: 2px;
  }

  a, a:visited {
    text-decoration: none;
    color: var(--clr-lm-text);
  }
</style>