<template>
<div class="content">

  <Menu />

  <div class="category-list grid3">
    <div class="category-name pressura60">Acessórios</div>
    <div class="linha-div"></div>

      
      <div class="sub-category-name pressura40">Luminárias</div>

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_1_Knoll_Sparrow/hero.jpg"
        nameproduct="Sparrow"
        brandproduct="Knoll"
      />  

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_2_Muuto_Unfold/hero.jpg"
        nameproduct="Unfold"
        brandproduct="Muuto"
      />  

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_3_Muuto_Underthebell/hero.jpg"
        nameproduct="Under the Bell"
        brandproduct="Muuto"
      />  

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_4_Muuto_Cosy/hero.jpg"
        nameproduct="Cosy"
        brandproduct="Muuto"
      />  

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_5_Muuto_Wood/hero.jpg"
        nameproduct="Wood"
        brandproduct="Muuto"
      />  

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_6_Muuto_Leaf/hero.jpg"
        nameproduct="Leaf"
        brandproduct="Muuto"
      /> 

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_7_Muuto_Postwall/hero.jpg"
        nameproduct="Post Wall"
        brandproduct="Muuto"
      /> 

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_8_Humanscale_Element_Disc/hero.jpg"
        nameproduct="Element Disc"
        brandproduct="Humanscale"
      />  

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_9_Humanscale_Element_Vicion/hero.jpg"
        nameproduct="Element Vision"
        brandproduct="Humanscale"
      />  

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_10_Humanscale_Horizon/hero.jpg"
        nameproduct="Horizon"
        brandproduct="Humanscale"
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
      title: 'Escinter — Acessórios'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>