<template>
<div class="content">

  <Menu />
  <MenuMobile />

  <div class="category-list grid3">
    <h1 class="category-name pressura60">Workbetter</h1>
    <p class="sub-category-description graphik18 gray">O modo de pensar e distribuir a equipe de trabalho mudou nos últimos anos. Nós entendemos, e oferecemos soluções contemporâneas que favorecem o ambiente colaborativo nas organizações.</p>

      <ItemProduto
        linkproduct="mobiliario_corporativo/workbetter/duvo"
        imgproduct="mobiliariocorporativo/workbetter/6_1_Escinter_Duvo/hero.jpg"
        nameproduct="Duvo"
        brandproduct="Escinter"
      /> 

      <ItemProduto
        linkproduct="mobiliario_corporativo/workbetter/inter"
        imgproduct="mobiliariocorporativo/workbetter/6_4_Escinter_Inter/hero.jpg"
        nameproduct="Inter"
        brandproduct="Escinter"
      /> 

      <ItemProduto
        linkproduct="mobiliario_corporativo/workbetter/bale"
        imgproduct="mobiliariocorporativo/workbetter/6_3_Escinter_Bale/hero.jpg"
        nameproduct="Bale"
        brandproduct="Escinter"
      /> 

      <ItemProduto
        linkproduct="mobiliario_corporativo/workbetter/shelter"
        imgproduct="mobiliariocorporativo/workbetter/6_2_Escinter_Shelter/hero.jpg"
        nameproduct="Shelter"
        brandproduct="Escinter"
      /> 

      <ItemProduto
        linkproduct="mobiliario_corporativo/workbetter/shelter_leitura"
        imgproduct="mobiliariocorporativo/workbetter/6_9_Escinter_Shelter_Leitura/hero.jpg"
        nameproduct="Shelter Leitura"
        brandproduct="Escinter"
      /> 

      <ItemProduto
        linkproduct="mobiliario_corporativo/workbetter/comp"
        imgproduct="mobiliariocorporativo/workbetter/6_5_Escinter_Comp/hero.jpg"
        nameproduct="Comp"
        brandproduct="Escinter"
      /> 

      <ItemProduto
        linkproduct="mobiliario_corporativo/workbetter/dot"
        imgproduct="mobiliariocorporativo/workbetter/6_6_Escinter_Dot/hero.jpg"
        nameproduct="Dot"
        brandproduct="Escinter"
      /> 

      <ItemProduto
        linkproduct="mobiliario_corporativo/workbetter/blink"
        imgproduct="mobiliariocorporativo/workbetter/6_7_Escinter_Blinck/hero.jpg"
        nameproduct="Blink"
        brandproduct="Escinter"
      /> 

      <ItemProduto
        linkproduct="mobiliario_corporativo/workbetter/intercomp"
        imgproduct="mobiliariocorporativo/workbetter/6_8_Escinter_Intercomp/hero.jpg"
        nameproduct="Intercomp"
        brandproduct="Escinter"
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
    padding-top: 157px;
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
      title: 'Workbetter'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>