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
    <img :data-srcset="require('~/assets/images/mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_2_Muuto_Unfold/hero.jpg').srcSet" class="product-image lazyload" />
  </div>



  <!-- GALERIA DE IMAGENS -->
  <div class="galeria-imagens grid3">
    <img :data-srcset="require('~/assets/images/mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_2_Muuto_Unfold/gallery1.jpg').srcSet" class="lazyload" />
    <img :data-srcset="require('~/assets/images/mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_2_Muuto_Unfold/gallery2.jpg').srcSet" class="lazyload" />
    <img :data-srcset="require('~/assets/images/mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_2_Muuto_Unfold/gallery3.jpg').srcSet" class="lazyload" />
  </div>



  <!-- INFORMAÇÕES TECNICAS -->
  <div class="informacoes-tecnicas grid3">
    <div class="linha-div" />
    <h3 class="title-info-tecnica pressura40">Informações técnicas</h3>

    <img :data-srcset="require('~/assets/images/mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_2_Muuto_Unfold/desenhotecnico.jpg').srcSet" class="lazyload desenho-tecnico coluna2" />
    <ul class="tabela coluna2">
      <li class="pressura15 gray">Cores disponíveis<span class="item-right black">15 cores</span></li>
      <li class="pressura15 gray">Tamanho<span class="item-right black">9" X 36" | 22.86 cm x 91.44 cm</span></li>
      <li class="download pressura15 pink"><a href="pdf/acessorios/7_1_Luminarias/7_1_2_Muuto_Unfold/Unfold Pendant Lamp - US - PFS.pdf" target="_blank">Download catálogo<span class="item-right"><span class="arrow">↓</span><span class="arrow-hover">↓</span></span></a></li>
    </ul>

    <div class="cores-disponiveis coluna3">
      <div class="cores-disponiveis-title pressura15 gray">Cores disponíveis</div>
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



  <!-- VARIAÇÕES -->
  <div class="variacoes grid3">
    <div class="linha-div" />
    <h3 class="variacoes-title coluna1-3 pressura40">Variações</h3>

    <ProdutoVariacao
      imgproduct="mobiliariocorporativo/workbetter/6_1_Escinter_Duvo/hero.jpg"
      nameproduct="Duvo"
    /> 

    <ProdutoVariacao
      imgproduct="mobiliariocorporativo/workbetter/6_1_Escinter_Duvo/hero.jpg"
      nameproduct="Duvo"
    /> 

    <ProdutoVariacao
      imgproduct="mobiliariocorporativo/workbetter/6_1_Escinter_Duvo/hero.jpg"
      nameproduct="Duvo"
    /> 

    <ProdutoVariacao
      imgproduct="mobiliariocorporativo/workbetter/6_1_Escinter_Duvo/hero.jpg"
      nameproduct="Duvo"
    /> 

    <ProdutoVariacao
      imgproduct="mobiliariocorporativo/workbetter/6_1_Escinter_Duvo/hero.jpg"
      nameproduct="Duvo"
    /> 
  
  </div>



  <!-- SERVIÇOS -->
    <Servicos />



  <!-- PRODUTOS RELACIONADOS -->
  
    <RelatedProduct
      imgproduct1="mobiliariocorporativo/workbetter/6_1_Escinter_Duvo/hero.jpg"
      nameproduct1="Duvo"
      brandproduct1="Escinter"
      linkproduct1="blog/2020-03-29-re-generation"

      imgproduct2="mobiliariocorporativo/workbetter/6_1_Escinter_Duvo/hero.jpg"
      nameproduct2="Duvo"
      brandproduct2="Escinter"
      linkproduct2="blog/2020-03-29-re-generation"
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
      title: 'Escinter — Unfold, Muuto'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>