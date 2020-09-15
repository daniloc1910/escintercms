<template>
<div class="content">
  <MenuMobile />

  <!-- HERO -->
  <div class="product-highlight grid3">
    <div class="product-name">
      <ul class="product-info">
        <li class="graphik18 gray"><h2>Escinter</h2></li>
        <li class="pressura56 black"><h1>Alto</h1></li>
      </ul>
    </div>
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_2_Regulaveis/1_2_1_Escinter_Alto/hero.jpg').srcSet" class="product-image lazyload" />
  </div>



  <!-- GALERIA DE IMAGENS -->
  <div class="galeria-imagens grid3">
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_2_Regulaveis/1_2_1_Escinter_Alto/vertical.jpg').srcSet" class="lazyload" />
    <Flickity :options="{wrapAround: true, autoPlay: 6000, lazyLoad: true, fade: true}" class="carousel coluna2-3">
      <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_2_Regulaveis/1_2_1_Escinter_Alto/horizontal.jpg').srcSet" /></div>
      <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_2_Regulaveis/1_2_1_Escinter_Alto/horizontal02.jpg').srcSet" /></div>
      <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_2_Regulaveis/1_2_1_Escinter_Alto/horizontal03.jpg').srcSet" /></div>
      <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_2_Regulaveis/1_2_1_Escinter_Alto/horizontal04.jpg').srcSet" /></div>
      <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_2_Regulaveis/1_2_1_Escinter_Alto/horizontal05.jpg').srcSet" /></div>
      <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_2_Regulaveis/1_2_1_Escinter_Alto/horizontal06.jpg').srcSet" /></div>
    </Flickity>
  </div>




  <!-- SERVIÇOS -->
    <Servicos />



  <!-- PRODUTOS RELACIONADOS -->
  
    <RelatedProduct
      imgproduct1="mobiliariocorporativo/estacaodetrabalho/1_2_Regulaveis/1_2_2_Knoll_Tone/hero.jpg"
      nameproduct1="Tone"
      brandproduct1="Knoll"
      linkproduct1="mobiliario_corporativo/estacaodetrabalho/tone"

      imgproduct2="mobiliariocorporativo/estacaodetrabalho/1_2_Regulaveis/1_2_3_Knoll_Kstand/hero.jpg"
      nameproduct2="k. stand"
      brandproduct2="Knoll"
      linkproduct2="mobiliario_corporativo/estacaodetrabalho/kstand"
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
      title: 'Alto — Escinter'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>