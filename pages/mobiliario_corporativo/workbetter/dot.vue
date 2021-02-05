<template>
<div class="content">
  <MenuMobile />

  <!-- HERO -->
  <div class="product-highlight grid3">
    <div class="product-name">
      <ul class="product-info">
        <li class="graphik18 gray"><h2>Escinter</h2></li>
        <li class="pressura56 black"><h1>Dot</h1></li>
      </ul>
    </div>
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/workbetter/6_6_Escinter_Dot/hero.jpg').srcSet" class="product-image lazyload" />
  </div>



  <!-- SERVIÇOS -->
    <Servicos />



  <!-- PRODUTOS RELACIONADOS -->
  
    <RelatedProduct
      imgproduct1="mobiliariocorporativo/workbetter/6_5_Escinter_Comp/hero.jpg"
      nameproduct1="Comp"
      brandproduct1="Escinter"
      linkproduct1="mobiliario_corporativo/workbetter/comp"

      imgproduct2="mobiliariocorporativo/workbetter/6_7_Escinter_Blinck/hero.jpg"
      nameproduct2="Blink"
      brandproduct2="Escinter"
      linkproduct2="mobiliario_corporativo/workbetter/blinck"
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
      padding-top: 251px;
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
      title: 'Dot — Escinter'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>