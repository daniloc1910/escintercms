<template>
<div class="content">
  <MenuMobile />

  <!-- HERO -->
  <div class="product-highlight grid3">
    <div class="product-name">
      <ul class="product-info">
        <li class="graphik18 gray"><h2>Escinter</h2></li>
        <li class="pressura56 black"><h1>Point</h1></li>
      </ul>
    </div>
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/reunioes/3_1_Escinter_Point/hero.jpg').srcSet" class="product-image lazyload" />
  </div>



  <!-- GALERIA DE IMAGENS -->
  <div class="galeria-imagens grid3">
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/reunioes/3_1_Escinter_Point/vertical.jpg').srcSet" class="lazyload" />
    <Flickity :options="{wrapAround: true, autoPlay: 6000, lazyLoad: true, fade: true}" class="carousel coluna2-3">
      <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/assets/images/mobiliariocorporativo/reunioes/3_1_Escinter_Point/horizontal.jpg').srcSet" /></div>
      <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/assets/images/mobiliariocorporativo/reunioes/3_1_Escinter_Point/horizontal02.jpg').srcSet" /></div>
      <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/assets/images/mobiliariocorporativo/reunioes/3_1_Escinter_Point/horizontal03.jpg').srcSet" /></div>
      <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/assets/images/mobiliariocorporativo/reunioes/3_1_Escinter_Point/horizontal04.jpg').srcSet" /></div>
    </Flickity>
  </div>




  <!-- SERVIÇOS -->
    <Servicos />



  <!-- PRODUTOS RELACIONADOS -->
  
    <RelatedProduct
      imgproduct1="mobiliariocorporativo/reunioes/3_2_Escinter_Componivel/hero.jpg"
      nameproduct1="Componivel"
      brandproduct1="Escinter"
      linkproduct1="mobiliario_corporativo/reuniao/componivel"

      imgproduct2="mobiliariocorporativo/reunioes/3_3_Knoll_Antenna/hero.jpg"
      nameproduct2="Antenna"
      brandproduct2="Knoll"
      linkproduct2="mobiliario_corporativo/reuniao/antenna"
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
      title: 'Point — Escinter'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>