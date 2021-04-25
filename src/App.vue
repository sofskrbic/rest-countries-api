<template>
  <div id="app">
    <AppHeader @toggleTheme="toggleTheme"/>
    <router-view/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'

export default {
  name: 'App',
  components: {
    AppHeader
  },
  computed: {
    darkMode() {
      return this.$store.getters.darkTheme
    }
  },
  methods: {
    toggleTheme() {
      if(this.darkMode){
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('theme', 'light')
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');

*, html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--ff-default);
}

body {
  width: 100%;
  height: 100vh;
  background-color: var(--clr-bg);
}

:root {
  /* COLORS */
  /* Light mode */
  --clr-text: hsl(200, 15%, 8%);
  --clr-input: hsl(0, 0%, 52%);
  --clr-input-hover: hsla(0, 0%, 52%, 0.2);
  --clr-bg: hsl(0, 0%, 98%);
  --clr-elements: hsl(0, 0%, 100%);
  --clr-box-shadow: hsl(0, 0%, 88%);

  /* TYPOGRAPHY */
  --fs-homepage: 14px;
  --fs-details: 16px;
  --ff-default: 'Nunito Sans', sans-serif;
  --fw-regular: 300;
  --fw-semi-bold: 600;
  --fw-bold: 800;
}

h1, h2, h3, h4, span, p {
  color: var(--clr-text);
}

[data-theme="dark"] {
  --clr-elements: hsl(209, 23%, 22%);
  --clr-bg: hsl(207, 26%, 17%);
  --clr-text: hsl(0, 0%, 100%);
  --clr-input: hsl(0, 0%, 52%);
  --clr-input-hover: hsla(0, 0%, 52%, 0.2);
  --clr-box-shadow: hsl(0, 0%, 15%);
}
</style>
