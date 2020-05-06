<template>
<div class="content">

  <Menu />
  <MenuMobile />

  <div class="category-list grid3">
    <h1 class="category-name pressura60">Divisórias</h1>
    <h4 class="category-description graphik24 gray">For nearly 80 years Knoll has remained true to the Bauhaus design philosophy that modern furniture should complement architectural space, not compete with it.</h4>

    <div class="linha-div"></div>

      
      <!-- Inwall IW25 -->
      
      <div class="sub-category-name"><h2 class="sticky pressura40">Inwall IW25</h2></div>
      <img class="img-destaque lazyload" :data-srcset="require('~/assets/images/mobiliariocorporativo/divisorias/iw25/iw25.jpeg').srcSet" />
      <h4 class="iw25-description graphik24">Divisórias em vidro único temperado ou laminado e lapidado de 8mm,10mm ou 12mm de espessura, montados no sistema de junta seca com estruturas em alumínio extrudido anodizado ou pintado, tendo 25mm de espessura por 35mm de altura.</h4>
      <img class="iw25-detail lazyload" :data-srcset="require('~/assets/images/mobiliariocorporativo/divisorias/iw25/iw25detail.png').srcSet" />



      <!-- Inwall IW70 -->
      
      <div class="linha-div"></div>
      <h2 class="sub-category-name pressura40">Inwall IW70</h2>
      <img class="img-destaque lazyload" :data-srcset="require('~/assets/images/mobiliariocorporativo/divisorias/iw70/iw70.jpeg').srcSet" />
      <h4 class="iw25-description graphik24">Divisórias em vidro único temperado ou laminado e lapidados e com estruturas em alumínio extrudido, anodizado ou pintado, tendo 70mm de espessura por 35mm de altura.</h4>
      <p class="iw25-detail graphik16 gray">Junção entre vidros em perfil de policarbonato autoadesivo com tratamento UV ou fita dupla autoadesiva dupla face.</p>




     <!-- Inwall IW86 -->
      
      <div class="linha-div"></div>
      <h2 class="sub-category-name pressura40">Inwall IW86</h2>
      <img class="img-destaque lazyload" :data-srcset="require('~/assets/images/mobiliariocorporativo/divisorias/iw86/iw86.jpeg').srcSet" />
      <h4 class="iw25-detail graphik24">
        A linha IW 86 é versátil com ampla gama de configurações e soluções que se adequam a cada projeto.
        <br><br>
        Composta por uma guiaestrutural e quadros de vidro e/ou acabamentos em madeira liso ou madeirados além de laminada de madeira natural, além dos componentes para acabamento e vedação acústica.
      </h4>

  </div>
</div>
</template>

<style scoped>
  .content {
    padding-top: 31px;
  }

  .category-name {
    grid-column: 1/4;
    margin-bottom: 37px;
  }

  .category-description {
    grid-column: 1/3;
    margin-bottom: 80px;
  }

  .linha-div {
    grid-column: 1/4;
    height: 1px;
    background-color: #DEDCDB;
    margin-bottom: 40px;
  }

  .sub-category-name {
    grid-column: 1/2;
    margin-bottom: 55px;
  }

  .img-destaque {
    grid-column: 2/4;
    margin: 8px 0 28px 0;
  }

  .iw25-description {
    grid-column: 2/3;
    margin-bottom: 94px;
  }
  
  .iw25-detail {
    grid-column: 3/4;
    margin-bottom: 94px;
  }


  @media screen and (max-width: 1020px) {

    .category-name {
      grid-column: 1/3;
      margin-bottom: 19px;
    }

  }
</style>


<script>
import Menu from '~/components/Menu.vue'
import MenuMobile from '~/components/MenuMobile.vue'

export default {
  components: {
    Menu,
    MenuMobile
  },
  data() {
    return {
      title: 'Escinter — Divisórias'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>