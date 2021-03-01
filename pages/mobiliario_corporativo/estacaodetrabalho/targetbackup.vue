<template>
<div class="content">
  <MenuMobile />

  <!-- HERO -->
  <div class="product-highlight grid3">
    <div class="product-name target-name">
      <ul class="product-info">
        <li class="graphik18 gray"><h2>Escinter</h2></li>
        <li class="pressura56 black"><h1>Target</h1></li>
      </ul>
    </div>
    <!--<img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/hero.jpg').srcSet" class="product-image lazyload" />
    <Flickity :options="{lazyLoad: 2, fade: true, sync: '.carousel-variacoes', pageDots: false}" class="carousel carousel-variacoes-main product-image">
      <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/hero-carrossel/mesa05.jpg').srcSet" /></div>
      <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/hero-carrossel/mesa01.jpg').srcSet" /></div>
      <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/hero-carrossel/mesa02.jpg').srcSet" /></div>
      <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/hero-carrossel/mesa03.jpg').srcSet" /></div>
      <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/hero-carrossel/mesa04.jpg').srcSet" /></div>
      <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/hero-carrossel/mesa06.jpg').srcSet" /></div>
      <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/hero-carrossel/mesa07.jpg').srcSet" /></div>
      <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/hero-carrossel/mesa08.jpg').srcSet" /></div>
    </Flickity>

    <Flickity :options="{lazyLoad: 4, groupCells: true, pageDots: false, asNavFor: '.carousel-variacoes-main',}" class="carousel carousel-variacoes">
      <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/hero-carrossel/pes05.jpg').srcSet" /></div> 
      <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/hero-carrossel/pes03.jpg').srcSet" /></div>
      <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/hero-carrossel/pes08.jpg').srcSet" /></div> 
      <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/hero-carrossel/pes04.jpg').srcSet" /></div>
      <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/hero-carrossel/pes06.jpg').srcSet" /></div>
      <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/hero-carrossel/pes07.jpg').srcSet" /></div>
      <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/hero-carrossel/pes01.jpg').srcSet" /></div>
      <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/hero-carrossel/pes02.jpg').srcSet" /></div>
    </Flickity>    -->
  </div>



  <!-- GALERIA DE IMAGENS -->
  <div class="galeria-imagens grid3">
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/vertical.jpg').srcSet" class="lazyload" />
    <Flickity :options="{wrapAround: true, autoPlay: 6000, lazyLoad: true, fade: true}" class="carousel coluna2-3">
      
      <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/horizontal/01.jpg').srcSet" /></div>
      <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/horizontal/02.jpg').srcSet" /></div>
      <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/horizontal/03.jpg').srcSet" /></div>
      <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/horizontal/04.jpg').srcSet" /></div>
      <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/horizontal/06.jpg').srcSet" /></div>
      <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/horizontal/07.jpg').srcSet" /></div>
      <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/horizontal/08.jpg').srcSet" /></div>
      <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/horizontal/09.jpg').srcSet" /></div>
    </Flickity>
    <div class="gi-txt graphik24 gray">Após 30 anos representando algumas das principais marcas internacionais, a Escinter passou a oferecer soluções criadas aqui de olho nas características de customização mais adequadas aos nossos ambientes de trabalho. Target se destaca pela ergonomia e pela possibilidade de customização de diversos itens.</div>
  </div>




  <!-- SERVIÇOS -->
    <Servicos />



  <!-- PRODUTOS RELACIONADOS -->
  
    <RelatedProduct
      imgproduct1="mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_10_Knoll_Antenna/hero.jpg"
      nameproduct1="Antenna"
      brandproduct1="Knoll"
      linkproduct1="mobiliario_corporativo/estacaodetrabalho/antenna"

      imgproduct2="mobiliariocorporativo/estacaodetrabalho/1_2_Regulaveis/1_2_1_Escinter_Alto/hero.jpg"
      nameproduct2="Alto"
      brandproduct2="Escinter"
      linkproduct2="mobiliario_corporativo/estacaodetrabalho/alto"
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
      title: 'Target — Escinter'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>