<template>
  <div class="container-input">
    <fa-icon icon="search" class="icon"></fa-icon>
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
    background: var(--clr-elements);
    border-radius: 10px;
    padding: 1rem 2rem;
    width: 90%;
    box-shadow: 0 1px 3px var(--clr-box-shadow);
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
    background: transparent;
    color: var(--clr-text);
  }

  input:focus {
    border-bottom: 1px solid var(--clr-input);
    outline: none;
  }

  .icon {
    color: var(--clr-input);
  }

  .autocomplete-results {
    width: 100%;
    position: absolute;
    color: var(--clr-text);
    background-color: var(--clr-elements);
    box-shadow: 0px -1px 3px var(--clr-box-shadow);
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
    color: var(--clr-text);
  }

  .autocomplete-result img {
    width: 10%;
    margin-right: .5rem;
    border-radius: 2px;
  }

  a, a:visited {
    text-decoration: none;
    color: var(--clr-text);
  }

  @media (min-width: 1440px) {
    .container-input {
      width: 40%;
      margin-inline: unset;
      margin-left: 4.5rem;
    }

    .autocomplete-result img {
      width: 8%;
      margin-right: 1rem;
    }

    .autocomplete-result a {
      display: flex;
      align-items: center;
    }
  }
</style>