<template>
<div class="content">

  <Menu />

  <div class="category-list grid3">
    <div class="category-name pressura60">Colaborativos</div>
    <div class="linha-div"></div>

      
      <div class="sub-category-name pressura40">Cadeiras</div>

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_1_Kusch_Trio/hero.jpg"
        nameproduct="Trio"
        brandproduct="Kusch"
      />  

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_2_Kusch_Duo/hero.jpg"
        nameproduct="Duo"
        brandproduct="Kusch"
      />  

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_3_Kusch_Universo/hero.jpg"
        nameproduct="Universo"
        brandproduct="Kusch"
      />  

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_4_Kusch_Soley/hero.jpg"
        nameproduct="Soley"
        brandproduct="Kusch"
      />  

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_5_Kusch_Scorpii/hero.jpg"
        nameproduct="Scorpii"
        brandproduct="Kusch"
      />  

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_6_Kusch_Njord/hero.jpg"
        nameproduct="Njord"
        brandproduct="Kusch"
      />  

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_7_Kusch_Arn/hero.jpg"
        nameproduct="Arn"
        brandproduct="Kusch"
      />  

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_8_Maxdesign_Max/hero.jpg"
        nameproduct="Max"
        brandproduct="Maxdesign"
      /> 

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_9_Maxdesign_Appia/hero.jpg"
        nameproduct="Appia"
        brandproduct="Maxdesign"
      />  

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_10_Maxdesign_Strattos/hero.jpg"
        nameproduct="Strattos"
        brandproduct="Maxdesign"
      /> 

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_11_Frisokar_Leaf/hero.jpg"
        nameproduct="Leaf"
        brandproduct="Frisokar"
      /> 

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_12_Frisokar_Connect/hero.jpg"
        nameproduct="Connect"
        brandproduct="Frisokar"
      /> 

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_13_Frisokar_Up/hero.jpg"
        nameproduct="Up"
        brandproduct="Frisokar"
      /> 

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_14_Frisokar_Bit/hero.jpg"
        nameproduct="Bit"
        brandproduct="Frisokar"
      /> 

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_15_Fway_Vesper/hero.jpg"
        nameproduct="Vesper"
        brandproduct="Frisokar"
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

  .linha-div {
    grid-column: 1/4;
    height: 1px;
    background-color: #DEDCDB;
    margin-bottom: 20px;
  }

  .sub-category-name {
    grid-column: 1/4;
    margin-bottom: 55px;
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

export default {
  components: {
    ItemProduto,
    Menu
  },
  data() {
    return {
      title: 'Escinter — Colaborativos'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>