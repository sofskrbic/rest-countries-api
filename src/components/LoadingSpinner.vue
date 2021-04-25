<template>
  <div class="loader" v-show="status"></div>
</template>

<script>
export default {
  name: 'LoadingSpinner',
  props: {
    status: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
  .loader {
    margin: 8rem auto;
    z-index: 3;
    border: 16px solid #f3f3f3;
    border-top: 16px solid var(--clr-text);
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>