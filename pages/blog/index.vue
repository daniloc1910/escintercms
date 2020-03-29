<template>
<div class="content">
  <div class="category-list grid4">
    <div class="category-name pressura60">Assentos</div>
    <p class="post-link" v-for="post in blogPosts"><n-link :to="post._path">{{post.title}}</n-link></p>
  </div>
</div>
</template>

<script>
export default {
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts;
    },
  },
    head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
};
</script>

<style scoped>

  .category-list {
    padding-top: 263px;
  }

  .category-name {
    grid-column: 1/5;
  }
</style>