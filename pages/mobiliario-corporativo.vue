<template>
<div class="content">
    
      <Menu />

      <CategoryItem
        title="Estações de trabalho"
        link="blog"

        imgproduct1="image-cadeira.png"
        nameproduct1="Generation"
        brandproduct1="Knoll"
        linkproduct1="blog/2020-03-29-re-generation"

        imgproduct2="image-cadeira.png"
        nameproduct2="Generation"
        brandproduct2="Knoll"
        linkproduct2="blog/2020-03-29-re-generation"
      />

      <CategoryItem
        title="Assentos"
        link="blog"

        imgproduct1="image-cadeira.png"
        nameproduct1="Generation"
        brandproduct1="Knoll"
        linkproduct1="blog/2020-03-29-re-generation"

        imgproduct2="image-cadeira.png"
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
import Menu from '~/components/Menu.vue'

export default {
  components: {
    CategoryItem,
    Menu
  },
  data() {
    return {
      title: 'Escinter — Mobiliário Corporativo'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>