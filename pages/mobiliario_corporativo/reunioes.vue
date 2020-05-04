<template>
<div class="content">

  <Menu />
  <MenuMobile />

  <div class="category-list grid3">
    <h1 class="category-name pressura60">Reuniões</h1>

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/reunioes/3_1_Escinter_Point/hero.jpg"
        nameproduct="Point"
        brandproduct="Escinter"
      /> 

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/reunioes/3_2_Escinter_Componivel/hero.jpg"
        nameproduct="Componivel"
        brandproduct="Escinter"
      /> 

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/reunioes/3_3_Knoll_Antenna/hero.jpg"
        nameproduct="Antenna"
        brandproduct="Knoll"
      /> 

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/reunioes/3_4_Kush_Profesion/hero.jpg"
        nameproduct="Profesion"
        brandproduct="Knoll"
      /> 

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/reunioes/3_5_Kush_Sansiro/hero.jpg"
        nameproduct="San Siro"
        brandproduct="Knoll"
      /> 

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/reunioes/3_6_Fway_Componivel/hero.jpg"
        nameproduct="Componivel"
        brandproduct="F.Way"
      /> 

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/reunioes/3_7_Maxdesign_Offsettable/hero.jpg"
        nameproduct="Offset table"
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
      title: 'Escinter — Reuniões'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>