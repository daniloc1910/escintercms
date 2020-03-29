<template>
  <div class="home-test"></div>
</template>

<style>
  .home-test {
    width: 400px;
    height: 800px;
    background-color: white;
  }
</style>

<script>
export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
};
</script>