<template>
<div class="content">
  <MenuMobile />

  <!-- HERO -->
  <div class="product-highlight grid3">
    <div class="product-name">
      <ul class="product-info">
        <li class="graphik18 gray"><h2>Escinter</h2></li>
        <li class="pressura56 black"><h1>Painel</h1></li>
      </ul>
    </div>
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_6_Escinter_Painel/hero.jpg').srcSet" class="product-image lazyload" />
  </div>



  <!-- SERVIÇOS -->
    <Servicos />



  <!-- PRODUTOS RELACIONADOS -->
  
    <RelatedProduct
      imgproduct1="mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_5_Escinter_Block/hero.jpg"
      nameproduct1="Block"
      brandproduct1="Escinter"
      linkproduct1="mobiliario_corporativo/estacaodetrabalho/block"

      imgproduct2="mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_7_Escinter_Mix/hero.jpg"
      nameproduct2="Mix"
      brandproduct2="Escinter"
      linkproduct2="mobiliario_corporativo/estacaodetrabalho/mix"
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
      title: 'Painel — Escinter'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>