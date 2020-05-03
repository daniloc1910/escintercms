<template>
  <div class="content">
  <MenuMobile />
  <div class="home-test" />
  </div>
</template>

<style>
  .home-test {
    width: 200px;
    height: 800px;
    background-color: white;
  }
</style>

<script>
import MenuMobile from '~/components/MenuMobile.vue'

export default {
  components: {
    MenuMobile
  },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
};
</script>