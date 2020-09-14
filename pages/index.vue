<template>
  <div class="content">


  <!-- PRIMEIRO BLOCO -->

  <div class="intro grid3">
    <h1 class="pressura60 intro-title">Soluções integradas para ambientes corporativos</h1>

    <Flickity :options="{wrapAround: true, autoPlay: 6000, lazyLoad: true}" class="carousel">
            <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/images/knollextra/carousel1.jpg').srcSet" /></div>
            <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/images/knollextra/carousel2.jpg').srcSet" /></div>
            <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/images/knollextra/carousel3.jpg').srcSet" /></div>
            <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/images/knollextra/carousel4.jpg').srcSet" /></div>
    </Flickity>
  </div>




  <!-- WORKBETTER -->

  <nuxt-link to="/mobiliario_corporativo/workbetter" class="workbetter-container grid3">
    <div class="workbetter-block-txt">
      <h2 class="workbetter-block-txt-title pressura56">Linha<br>Workbetter</h2>
      <p class="workbetter-block-txt-description graphik18 gray">A linha corporativa da Escinter totalmente facbricada no Brasil, que vai ficar perfeita no seu escritório</p>
      <p class="pressura15 pink">Conhecer a linha completa</p>
    </div>

    <img :data-srcset="require('~/assets/workbetter-destaque.jpg').srcSet" class="wb-destaque lazyload" />
  </nuxt-link>




  <!-- PRODUTOS DESTACADOS -->

  <div class="produtos-destacados grid3">
    <div class="linha-div" />
    <h2 class="pressura40 produtos-destacados-title">Produtos Destacados</h2>

      <ItemProduto
        linkproduct="mobiliario_corporativo/acessorio/sparrow"
        imgproduct="mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_1_Knoll_Sparrow/hero.jpg"
        nameproduct="Sparrow"
        brandproduct="Knoll"
      />  

      <ItemProduto
        linkproduct="mobiliario_corporativo/acessorio/unfold"
        imgproduct="mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_2_Muuto_Unfold/hero.jpg"
        nameproduct="Unfold"
        brandproduct="Muuto"
      />  

      <ItemProduto
        linkproduct="mobiliario_corporativo/acessorio/under-the-bell"
        imgproduct="mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_3_Muuto_Underthebell/hero.jpg"
        nameproduct="Under the Bell"
        brandproduct="Muuto"
      />  

      <ItemProduto
        linkproduct="mobiliario_corporativo/acessorio/cosy"
        imgproduct="mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_4_Muuto_Cosy/hero.jpg"
        nameproduct="Cosy"
        brandproduct="Muuto"
      />  

      <ItemProduto
        linkproduct="mobiliario_corporativo/acessorio/wood"
        imgproduct="mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_5_Muuto_Wood/hero.jpg"
        nameproduct="Wood"
        brandproduct="Muuto"
      />  

      <ItemProduto
        linkproduct="mobiliario_corporativo/acessorio/leaf"
        imgproduct="mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_6_Muuto_Leaf/hero.jpg"
        nameproduct="Leaf"
        brandproduct="Muuto"
      /> 
  </div>


  


  <!-- KNOLL DESIGN -->

  <nuxt-link to="/knoll-design" class="knoll-design-container">

    <div class="knoll-design-container-grid grid3">
      <div class="block-txt-knoll">
        <h2 class="block-txt-knoll-title pressura56 off-white">Knoll<br>design</h2>
        <p class="block-txt-knoll-description graphik18 off-white">Conheça mais sobre a marca que tem compromisso com a inovacção e o design moderno.</p>
        <p class="pressura15 off-white">Ver mais</p>
      </div>
    </div>

    <video class="video-knoll" loop preload playsinline autoplay muted>
        <source :src="require('~/assets/knoll_bg.mp4')">
    </video>

  </nuxt-link>





  <!-- SERVIÇOS -->
  <Servicos />

  


  </div>
</template>

<style scoped>
  .intro {
    margin-bottom: 185px;
  }

  .knoll-design-container {
    position: relative;
    width: 100%;
    height: 100vh;
    display: block;
    margin-bottom: 80px;
  }

  .video-knoll {
    position: absolute;
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .content {
    padding-top: 415px;
  }

  .intro-title {
    grid-column: 1/3;
    margin-bottom: 56px;
  }

  .carousel {
    grid-column: 1/4;
  }

  .knoll-design-container-grid {
    height: 100%;
  }

  .block-txt-knoll {
    grid-column: 1/2;
    align-self: end;
    z-index: 1;
    margin-bottom: 56px;
  }

  .block-txt-knoll-title {
    margin-bottom: 16px;
  }

  .block-txt-knoll-description {
    margin-bottom: 32px;
  }

  .workbetter-container {
    margin-bottom: 80px;
  }

  .workbetter-block-txt {
    grid-column: 1/2;
    align-self: end;
  }

  .workbetter-block-txt-title {
    margin-bottom: 16px;
    color: #222;
  }

  .workbetter-block-txt-description {
    margin-bottom: 32px;
  }

  .wb-destaque {
    grid-column: 2/4;
    align-self: end;
    transform: translateX(28px);
  }

  .linha-div {
    grid-column: 1/4;
    height: 1px;
    background-color: #DEDCDB;
    margin-bottom: 40px;
  }

  .produtos-destacados {
    margin-bottom: 80px;
  }

  .produtos-destacados-title {
    grid-column: 1/4;
    margin-bottom: 32px;
  }


  @media screen and (max-width: 1020px) {

  .intro {
    margin-bottom: 80px;
  }

  .content {
    padding-top: 157px;
  }

  .intro-title {
    margin-bottom: 40px;
  }

  .linha-div {
    grid-column: 1/3;
    margin-bottom: 40px;
  }

  .produtos-destacados-title {
    grid-column: 1/3;
    margin-bottom: 32px;
  }

  .wb-destaque {
    grid-column: 1/3;
    transform: translateX(20px);
    margin-top: 40px;
  }

  .block-txt-knoll {
    grid-column: 1/3;
    margin-bottom: 56px;
  }

}
</style>

<script>
import ItemProduto from '~/components/ItemProduto.vue'
import Servicos from '~/components/Servicos.vue'

export default {
  layout: 'home',
  components: {
    ItemProduto,
    Servicos
  },
  data() {
    return {
      title: 'Escinter'
    }
  },
    head() {
    return {
      title: this.title
    }
  }
};
</script>