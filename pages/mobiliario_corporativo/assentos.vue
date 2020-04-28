<template>
<div class="content">

  <Menu />

  <div class="category-list grid3">
    <div class="category-name pressura60">Assentos</div>

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/assentos/2_1_Knoll_Generation/hero.jpg"
        nameproduct="Generation"
        brandproduct="Knoll"
      />   

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/assentos/2_2_Knoll_Regeneration/hero.jpg"
        nameproduct="Regeneration"
        brandproduct="Knoll"
      />   

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/assentos/2_3_Knoll_K_Task/hero.jpg"
        nameproduct="k. task"
        brandproduct="Knoll"
      />   

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/assentos/2_4_Knoll_Ollo/hero.jpg"
        nameproduct="Ollo"
        brandproduct="Knoll"
      />   

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/assentos/2_5_Knoll_Multigeneration/hero.jpg"
        nameproduct="Multigeneration"
        brandproduct="Knoll"
      />  

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/assentos/2_6_Knoll_Life/hero.jpg"
        nameproduct="Life"
        brandproduct="Knoll"
      />  

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/assentos/2_7_Knoll_Pollock/hero.jpg"
        nameproduct="Pollock"
        brandproduct="Knoll"
      />  

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/assentos/2_8_FWay_Parker/hero.jpg"
        nameproduct="Parker"
        brandproduct="F. WAY"
      />  

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/assentos/2_9_FWay_Nox/hero.jpg"
        nameproduct="Nox"
        brandproduct="F.WAY"
      /> 

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/assentos/2_10_FWay_Ayra/hero.jpg"
        nameproduct="Ayra"
        brandproduct="F.WAY"
      />   


      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/assentos/2_11_Frisokar_Agile/hero.jpg"
        nameproduct="Agile"
        brandproduct="Frisokar"
      />  

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/assentos/2_11_Frisokar_Joy_Addit/hero.jpg"
        nameproduct="Joy Addit"
        brandproduct="Frisokar"
      /> 

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/assentos/2_12_Frisokar_Simple/hero.jpg"
        nameproduct="Simple"
        brandproduct="Frisokar"
      />  

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/assentos/2_13_Frisokar_Sense/hero.jpg"
        nameproduct="Sense"
        brandproduct="Frisokar"
      />   

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/assentos/2_14_Frisokar_Plus/hero.jpg"
        nameproduct="Plus"
        brandproduct="Frisokar"
      />  

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/assentos/2_15_Humanscale_Freedom/hero.jpg"
        nameproduct="Freedom"
        brandproduct="Humanscale"
      />   

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/assentos/2_16_Humanscale_Different_World/hero.jpg"
        nameproduct="Different World"
        brandproduct="Humanscale"
      />   

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/assentos/2_17_Humanscale_Trea/hero.jpg"
        nameproduct="Trea"
        brandproduct="Humanscale"
      />   

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/assentos/2_18_Humanscale_Summa/hero.jpg"
        nameproduct="Summa"
        brandproduct="Humanscale"
      />   

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/assentos/2_19_Humanscale_Cinto/hero.jpg"
        nameproduct="Cinto"
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