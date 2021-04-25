<template>
  <div id="app">
    <AppHeader />
    <router-view/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'

export default {
  name: 'App',
  components: {
    AppHeader
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
  background-color: var(--clr-lm-bg);
}

:root {
  /* COLORS */
  /* Light mode */
  --clr-lm-text: hsl(200, 15%, 8%);
  --clr-lm-input: hsl(0, 0%, 52%);
  --clr-lm-input-hover: hsla(0, 0%, 52%, 0.2);
  --clr-lm-bg: hsl(0, 0%, 98%);
  --clr-lm-elements: hsl(0, 0%, 100%);
  /* Dark mode */
  --clr-dm-elements: hsl(209, 23%, 22%);
  --clr-dm-bg: hsl(207, 26%, 17%);
  --clr-dm-text: hsl(0, 0%, 100%);

  /* TYPOGRAPHY */
  --fs-homepage: 14px;
  --fs-details: 16px;
  --ff-default: 'Nunito Sans', sans-serif;
  --fw-regular: 300;
  --fw-semi-bold: 600;
  --fw-bold: 800;
}

h1, h2, h3, h4 {
  color: var(--clr-lm-text);
}
</style>
