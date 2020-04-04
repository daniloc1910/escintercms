<template>
<div class="content">
    <div class="primary-menu grid4">
    <div></div>

    <ul class="graphik18">
      <nuxt-link to="/blog" exact-active-class="active-link"><li class="secondary-menu-item">Estações de trabalho</li></nuxt-link>
      <nuxt-link to="/blog" exact-active-class="active-link"><li class="secondary-menu-item">Assentos</li></nuxt-link>
      <nuxt-link to="/sollo" exact-active-class="active-link"><li class="secondary-menu-item">Reuniões</li></nuxt-link>
      <nuxt-link to="/contato" exact-active-class="active-link"><li class="secondary-menu-item">Armazenamento</li></nuxt-link>
      <nuxt-link to="/contato" exact-active-class="active-link"><li class="secondary-menu-item">Colaborativos</li></nuxt-link>
      <nuxt-link to="/contato" exact-active-class="active-link"><li class="secondary-menu-item">Acessórios</li></nuxt-link>
      <nuxt-link to="/contato" exact-active-class="active-link"><li class="secondary-menu-item">Divisórias</li></nuxt-link>
      <nuxt-link to="/contato" exact-active-class="active-link"><li class="secondary-menu-item">Carpetes</li></nuxt-link>
    </ul>
    </div>

      <CategoryItem
        title="Estações de trabalho"
        link="blog"

        imgproduct1="image-cadeira.jpg"
        nameproduct1="Generation"
        brandproduct1="Knoll"
        linkproduct1="blog/2020-03-29-re-generation"

        imgproduct2="image-cadeira.jpg"
        nameproduct2="Generation"
        brandproduct2="Knoll"
        linkproduct2="blog/2020-03-29-re-generation"
      />

      <CategoryItem
        title="Assentos"
        link="blog"

        imgproduct1="image-cadeira.jpg"
        nameproduct1="Generation"
        brandproduct1="Knoll"
        linkproduct1="blog/2020-03-29-re-generation"

        imgproduct2="image-cadeira.jpg"
        nameproduct2="Generation"
        brandproduct2="Knoll"
        linkproduct2="blog/2020-03-29-re-generation"
      />
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

  .category-list {
    padding-top: 263px;
  }

  .category-mame {
    grid-column: 1/5;
  }

  .primary-menu {
    margin-bottom: 65px;
  }

  .primary-menu li {
    padding-bottom: 4px;
  }
</style>

<script>
import CategoryItem from '~/components/CategoryItem.vue'

export default {
  components: {
    CategoryItem
  }
}
</script>