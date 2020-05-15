<template>
<div class="content">
  <MenuMobile />

  <!-- HERO -->
  <div class="product-highlight grid3">
    <div class="product-name">
      <ul class="product-info">
        <li class="graphik18 gray"><h2>Frisokar</h2></li>
        <li class="pressura56 black"><h1>Plus</h1></li>
      </ul>
    </div>
    <img :data-srcset="require('~/assets/images/mobiliariocorporativo/assentos/2_14_Frisokar_Plus/hero.jpg').srcSet" class="product-image lazyload" />
  </div>




  <!-- SERVIÇOS -->
    <Servicos />



  <!-- PRODUTOS RELACIONADOS -->
  
    <RelatedProduct
      imgproduct1="mobiliariocorporativo/assentos/2_13_Frisokar_Sense/hero.jpg"
      nameproduct1="Sense"
      brandproduct1="Frisokar"
      linkproduct1="mobiliario_corporativo/assento/sense"

      imgproduct2="mobiliariocorporativo/assentos/2_15_Humanscale_Freedom/hero.jpg"
      nameproduct2="Freedom"
      brandproduct2="Humanscale"
      linkproduct2="mobiliario_corporativo/assento/freedom"
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
      title: 'Plus — Frisokar'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>