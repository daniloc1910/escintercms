<template>
<div class="content">
    <div class="primary-menu grid4">
    <div></div>

    <ul class="graphik18">
      <nuxt-link to="/trabalho" exact-active-class="active-link"><li class="secondary-menu-item">Estações de trabalho</li></nuxt-link>
      <nuxt-link to="/blog" exact-active-class="active-link"><li class="secondary-menu-item">Assentos</li></nuxt-link>
      <nuxt-link to="/sollo" exact-active-class="active-link"><li class="secondary-menu-item">Reuniões</li></nuxt-link>
      <nuxt-link to="/contato" exact-active-class="active-link"><li class="secondary-menu-item">Armazenamento</li></nuxt-link>
      <nuxt-link to="/contato" exact-active-class="active-link"><li class="secondary-menu-item">Colaborativos</li></nuxt-link>
      <nuxt-link to="/contato" exact-active-class="active-link"><li class="secondary-menu-item">Acessórios</li></nuxt-link>
      <nuxt-link to="/contato" exact-active-class="active-link"><li class="secondary-menu-item">Divisórias</li></nuxt-link>
      <nuxt-link to="/contato" exact-active-class="active-link"><li class="secondary-menu-item">Carpetes</li></nuxt-link>
    </ul>
    </div>

  <div class="category-list grid3">
    <div class="category-name pressura60">Assentos</div>

      <ul class="category-item" v-for="post in blogPosts">
        <n-link :to="post._path">
        <li><img :src="post.featuredimage" /></li>
        <li class="category-item-productname pressura19">{{post.producttitle}}</li>
        <li class="graphik16 gray">{{post.brand}}</li>
        </n-link>
      </ul>

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
  .content {
    padding-top: 31px;
  }

  .category-name {
    grid-column: 1/5;
    margin-bottom: 37px;
  }

  .category-item-productname{
    margin-bottom: 2px;
  }

  .primary-menu {
    margin-bottom: 65px;
  }

  .primary-menu li {
    padding-bottom: 4px;
  }
</style>