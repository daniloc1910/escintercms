<template>
<div class="content">
  <MenuMobile />

  <!-- HERO -->
  <div class="product-highlight grid3">
    <div class="product-name">
      <ul class="product-info">
        <li class="graphik18 gray"><h2>Escinter</h2></li>
        <li class="pressura56 black"><h1>Prateleira CPU</h1></li>
      </ul>
    </div>
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/acessorios/7_4_Diversos/7_4_2_Escinter_PrateleiraCPU/hero.jpg').srcSet" class="product-image lazyload" />
  </div>


  <!-- SERVIÇOS -->
    <Servicos />



  <!-- PRODUTOS RELACIONADOS -->
  
    <RelatedProduct
      imgproduct1="mobiliariocorporativo/acessorios/7_4_Diversos/7_4_1_Escinter_SuporteCPU/hero.jpg"
      nameproduct1="Suporte CPU"
      brandproduct1="Escinter"
      linkproduct1="mobiliario_corporativo/acessorio/suporte-cpu"

      imgproduct2="mobiliariocorporativo/acessorios/7_4_Diversos/7_4_3_Humanscale_Fr100/hero.jpg"
      nameproduct2="FM100"
      brandproduct2="Humanscale"
      linkproduct2="mobiliario_corporativo/acessorio/fm100"
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
      title: 'Prateleira CPU — Escinter'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>