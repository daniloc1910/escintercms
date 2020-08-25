<template>
<div class="content">
  <MenuMobile />

  <!-- HERO -->
  <div class="product-highlight grid3">
    <div class="product-name">
      <ul class="product-info">
        <li class="graphik18 gray"><h2>Escinter</h2></li>
        <li class="pressura56 black"><h1>Bowl</h1></li>
      </ul>
    </div>
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_2_Escinter_Bowl/hero.jpg').srcSet" class="product-image lazyload" />
  </div>



  <!-- SERVIÇOS -->
    <Servicos />



  <!-- PRODUTOS RELACIONADOS -->
  
    <RelatedProduct
      imgproduct1="mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/hero.jpg"
      nameproduct1="Target"
      brandproduct1="Escinter"
      linkproduct1="mobiliario_corporativo/estacaodetrabalho/target"

      imgproduct2="mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_3_Escinter_Plate/hero.jpg"
      nameproduct2="Plate"
      brandproduct2="Escinter"
      linkproduct2="mobiliario_corporativo/estacaodetrabalho/plate"
    />



</div>
</template>


<style scoped>
  .linha-div {
    grid-column: 1/4;
    height: 1px;
    background-color: #DEDCDB;
    margin-bottom: 40px;
  }

@media screen and (max-width: 1020px) {
    .content {
      padding-top: 157px;
    }

  .linha-div {
    grid-column: 1/3;
    margin-bottom: 28px;
  }  
}
</style>

<script>
import RelatedProduct from '~/components/RelatedProduct.vue'
import MenuMobile from '~/components/MenuMobile.vue'
import ProdutoVariacao from '~/components/ProdutoVariacao.vue'
import Servicos from '~/components/Servicos.vue'

export default {
  components: {
    RelatedProduct,
    MenuMobile,
    ProdutoVariacao,
    Servicos
  },
  data() {
    return {
      title: 'Bowl — Escinter'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>