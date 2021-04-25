<template>
  <div class="container">
    <h2>Where in the world?</h2>
    <div class="split" @click="changeTheme">
      <fa-icon :icon="['far', 'moon']" class="icon"></fa-icon>
      <span>Dark Mode</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  methods: {
    changeTheme() {
      this.$store.commit('toggleDarkTheme')
      this.$emit('toggleTheme')
    }
  }
}
</script>

<style scoped>
  .container {
    background-color: var(--clr-elements);
    box-shadow: 0 1px 3px var(--clr-box-shadow);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 1rem;
  }

  h2, span {
    font-size: 0.875rem;
  }

  .split span {
    margin-left: .5rem;
    font-weight: var(--fw-semi-bold);
    cursor: pointer;
  }

  .span, .icon {
    cursor: pointer;
    color: var(--clr-text);
  }

  @media (min-width: 1440px) {
    .container {
      padding-inline: 4rem;
    }

    h2 {
      font-size: 1.1rem;
    }
  }
</style>
