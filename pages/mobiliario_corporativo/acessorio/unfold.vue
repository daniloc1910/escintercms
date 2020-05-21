<template>
<div class="content">
  <MenuMobile />

  <!-- HERO -->
  <div class="product-highlight grid3">
    <div class="product-name">
      <ul class="product-info">
        <li class="graphik18 gray"><h2>Muuto</h2></li>
        <li class="pressura56 black"><h1>Unfold</h1></li>
      </ul>
    </div>
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_2_Muuto_Unfold/hero.jpg').srcSet" class="product-image lazyload" />
  </div>



  <!-- GALERIA DE IMAGENS -->
  <div class="galeria-imagens grid3">
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_2_Muuto_Unfold/vertical1.jpg').srcSet" class="lazyload" />
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_2_Muuto_Unfold/vertical2.jpg').srcSet" class="lazyload" />
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_2_Muuto_Unfold/vertical3.jpg').srcSet" class="lazyload" />
  </div>



  <!-- INFORMAÇÕES TECNICAS -->
  <div class="informacoes-tecnicas grid3">
    <div class="linha-div" />
    <h3 class="title-info-tecnica pressura40">Informações técnicas</h3>

    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_2_Muuto_Unfold/desenho.jpg').srcSet" class="lazyload desenho-tecnico coluna2" />
    <ul class="tabela coluna2">
      <li class="pressura15 gray">Cores disponíveis<span class="item-right black">15</span></li>
      <li class="pressura15 gray">Tamanho<span class="item-right black">32,5 cm x 29,5 cm</span></li>
      <li class="download pressura15 pink"><a href="/pdf/acessorios/7_1_Luminarias/7_1_2_Muuto_Unfold/UnfoldPendantLamp-US-PFS.pdf" target="_blank">Download do catálogo<span class="item-right"><span class="arrow-btn">↓</span><span class="arrow-btn-hover">↓</span></span></a></li>
    </ul>

    <div class="cores-disponiveis coluna3">
      <div class="cores-disponiveis-title pressura15 gray">Cores</div>
      <div class="cor-item" style="background-color: #AFB0AC;" />
      <div class="cor-item" style="background-color: #EEEEEA;" />
      <div class="cor-item" style="background-color: #0A0A09;" />
      <div class="cor-item" style="background-color: #FFFFFE;" />
      <div class="cor-item" style="background-color: #FBED54;" />
      <div class="cor-item" style="background-color: #44272C;" />
      <div class="cor-item" style="background-color: #345F44;" />
      <div class="cor-item" style="background-color: #E5C770;" />
      <div class="cor-item" style="background-color: #D0623D;" />
      <div class="cor-item" style="background-color: #B73B37;" />
      <div class="cor-item" style="background-color: #C58973;" />
      <div class="cor-item" style="background-color: #756F54;" />
      <div class="cor-item" style="background-color: #EAD2BC;" />
      <div class="cor-item" style="background-color: #815730;" />
      <div class="cor-item" style="background-color: #BAB081;" />
    </div>
  </div>



  <!-- SERVIÇOS -->
    <Servicos />



  <!-- PRODUTOS RELACIONADOS -->
  
    <RelatedProduct
      imgproduct1="mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_1_Knoll_Sparrow/hero.jpg"
      nameproduct1="Sparrow"
      brandproduct1="Knoll"
      linkproduct1="mobiliario_corporativo/acessorio/sparrow"

      imgproduct2="mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_3_Muuto_Underthebell/hero.jpg"
      nameproduct2="Under the Bell"
      brandproduct2="Muuto"
      linkproduct2="mobiliario_corporativo/acessorio/under-the-bell"
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
      title: 'Unfold — Muuto'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>