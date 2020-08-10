<template>
<div class="content">
  <MenuMobile />

  <!-- HERO -->
  <div class="product-highlight grid3">
    <div class="product-name">
      <ul class="product-info">
        <li class="graphik18 gray"><h2>Frisokar</h2></li>
        <li class="pressura56 black"><h1>Up</h1></li>
      </ul>
    </div>
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_13_Frisokar_Up/hero.jpg').srcSet" class="product-image lazyload" />
  </div>



  <!-- GALERIA DE IMAGENS -->
  <div class="galeria-imagens grid3">
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_13_Frisokar_Up/vertical.jpg').srcSet" class="lazyload" />
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_13_Frisokar_Up/horizontal.jpg').srcSet" class="lazyload coluna2-3" />
  </div>



  <!-- SERVIÇOS -->
    <Servicos />



  <!-- PRODUTOS RELACIONADOS -->
  
    <RelatedProduct
      imgproduct1="mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_12_Frisokar_Connect/hero.jpg"
      nameproduct1="Connect"
      brandproduct1="Frisokar"
      linkproduct1="mobiliario_corporativo/colaborativo/connect"

      imgproduct2="mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_14_Frisokar_Bit/hero.jpg"
      nameproduct2="Bit"
      brandproduct2="Frisokar"
      linkproduct2="mobiliario_corporativo/colaborativo/bit"
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
      title: 'Up — Frisokar'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>