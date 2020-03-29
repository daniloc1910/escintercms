<template>
<div class="content">
  <div class="category-list grid4">
    <div class="category-name pressura60">Assentos</div>

      <ul class="category-item" v-for="post in blogPosts">
        <n-link :to="post._path">
        <li><img :src="post.featuredimage" /></li>
        <li class="category-item-productname pressura19">{{post.producttitle}}</li>
        <li class="graphik16 gray">{{post.brand}}</li>
        </n-link>
      </ul>

    <!--<p class="post-link" v-for="post in blogPosts"><n-link :to="post._path">{{post.producttitle}}</n-link></p>-->
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

  .category-name {
    grid-column: 1/5;
  }

  .category-item-productname{
    margin-bottom: 2px;
  }
</style>