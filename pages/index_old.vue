<template>
  <div class="content">



  <div class="intro-capa">
    <div class="logo-container">
      <img class="intro-capa-logo" :src="require('~/assets/logo.svg')" />
      <img class="intro-capa-logo-escrito" :src="require('~/assets/escinter.svg')" />
    </div>
  </div>



  <MenuMobile />
  


  <!-- PRIMEIRO BLOCO -->

  <div class="intro grid3">
    <h1 class="pressura60 intro-title">Soluções integradas para ambientes corporativos</h1>

    <Flickity :options="{wrapAround: true, autoPlay: 6000, lazyLoad: true}" class="carousel">
      <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/images/rockwellunscripted/carousel1.jpg').srcSet" /></div>
      <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/images/rockwellunscripted/carousel2.jpg').srcSet" /></div>
      <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/images/rockwellunscripted/carousel3.jpg').srcSet" /></div>
      <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/images/rockwellunscripted/carousel4.jpg').srcSet" /></div>
      <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/images/rockwellunscripted/carousel5.jpg').srcSet" /></div>
    </Flickity>
  </div>


  


  </div>
</template>

<style scoped>

  @keyframes logo-slideup {
    0% {}
    100% {
      transform: translateY(0);
      margin-top: 34px;
    }
  }

    @keyframes intro-opacity {
    0% {}
    100% {
      opacity: 0;
    }
  }

  .intro-capa {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: #F8F5F2;
    z-index: 99999;
    animation: intro-opacity 0.6s cubic-bezier(0.645, 0.045, 0.355, 1.000) 2.6s forwards;
    pointer-events: none;
  }

  .intro-capa-logo {
    position: absolute;
    left: 30px;
    height: 67px;
    width: 41px;
  } 

  .intro-capa-logo-escrito {
    width: 165px;
    height: 26px;
    left: 93px;
    top: 17px;
    position: absolute;
    animation: intro-opacity 0.6s cubic-bezier(0.645, 0.045, 0.355, 1.000) 2s forwards;
  }

  .logo-container {
    position: relative;
    width: 258px;
    height: 67px;
    transform: translateY(50vh);
    margin-top: -33px;
    animation: logo-slideup 0.6s cubic-bezier(0.645, 0.045, 0.355, 1.000) 2s forwards;
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
</style>

<script>
import MenuMobile from '~/components/MenuMobile.vue'

export default {
  layout: 'home',
  components: {
    MenuMobile 
  }
};
</script>