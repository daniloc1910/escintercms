<template>
<div class="content">

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
      <li class="pressura15 gray">Cores disponíveis<span class="item-right black">9 cores</span></li>
      <li class="pressura15 gray">Tamanho<span class="item-right black">9" X 36" | 22.86 cm x 91.44 cm</span></li>
      <li class="pressura15 pink"><a href="assets/images/mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_2_Muuto_Unfold/Unfold Pendant Lamp - US - PFS.pdf" target="_blank">Download catálogo<span class="item-right">↓</span></a></li>
    </ul>
  </div>



</div>
</template>


<style scoped>
  .linha-div {
    grid-column: 1/4;
    height: 1px;
    background-color: #DEDCDB;
    margin-bottom: 20px;
  }
</style>

<script>
export default {
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