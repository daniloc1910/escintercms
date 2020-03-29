<template>
<div class="content">
  <div class="category-list grid4">
    <div class="category-name pressura60">Assentos</div>
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
};
</script>

<style scoped>

  .category-list {
    padding-top: 263px;
  }

  .category-mame {
    grid-column: 1/5;
  }
</style>