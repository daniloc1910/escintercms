<template>
<div class="content">

  <Menu />
  <MenuMobile />

  <div class="category-list grid3">
    <h1 class="category-name pressura60">Armazenamento</h1>

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/armazenamento/4_1_Escinter_Case_Armarios/hero.jpg"
        nameproduct="Case Armários"
        brandproduct="Escinter"
      /> 

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/armazenamento/4_2_Escinter_Case_Gaveteiros/hero.jpg"
        nameproduct="Case Gaveteiros"
        brandproduct="Escinter"
      />  

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/armazenamento/4_3_Escinter_Case_Lockers/hero.jpg"
        nameproduct="Case Lockers"
        brandproduct="Escinter"
      /> 

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/armazenamento/4_4_Knoll_Calibre/hero.jpg"
        nameproduct="Calibre"
        brandproduct="Knoll"
      /> 

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/armazenamento/4_5_Knoll_Anchor/hero.jpg"
        nameproduct="Anchor"
        brandproduct="Knoll"
      /> 

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/armazenamento/4_6_Fway_Jelly/hero.jpg"
        nameproduct="Jelly"
        brandproduct="F.Way"
      />   

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/armazenamento/4_7_Maxdesign_Offsetshelf/hero.jpg"
        nameproduct="Offset Shelf"
        brandproduct="Maxdesign"
      />   

 

  </div>
</div>
</template>

<style scoped>
  .content {
    padding-top: 31px;
  }

  .category-name {
    grid-column: 1/4;
    margin-bottom: 37px;
  }

  .category-item-productname{
    margin-bottom: 2px;
  }


  @media screen and (max-width: 1020px) {

    .category-name {
      grid-column: 1/3;
      margin-bottom: 19px;
    }

    .content {
      padding-top: 227px;
    }

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
      title: 'Escinter — Armazenamento'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>