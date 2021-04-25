<template>
  <div class="container">
    <h2>Where in the world?</h2>
    <div class="split">
      <fa-icon :icon="['far', 'moon']"></fa-icon>
      <span>Dark Mode</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>

<style scoped>
  .container {
    background-color: var(--clr-lm-elements);
    box-shadow: 0 1px 3px #e0e0e0;
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
  }
</style>
