<template>
<div class="content">

  <Menu />
  <MenuMobile />

  <div class="category-list grid3">
    <div class="category-name pressura60">Estações de trabalho</div>

      

  </div>
</div>
</template>

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
</style>

<script>
import ItemProduto from '~/components/ItemProduto.vue'
import Menu from '~/components/Menu.vue'
import MenuMobile from '~/components/MenuMobile.vue'

export default {
  components: {
    ItemProduto,
    Menu,
    MenuMobile
  },
  data() {
    return {
      title: 'Escinter — Assentos'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>