<template>
<div class="content">
  <MenuMobile />

  <!-- HERO -->
  <div class="product-highlight grid3">
    <div class="product-name">
      <ul class="product-info">
        <li class="graphik18 gray"><h2>Knoll</h2></li>
        <li class="pressura56 black"><h1>Tone</h1></li>
      </ul>
    </div>
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_2_Regulaveis/1_2_2_Knoll_Tone/hero.jpg').srcSet" class="product-image lazyload" />
  </div>



  <!-- GALERIA DE IMAGENS -->
  <div class="galeria-imagens grid3">
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_2_Regulaveis/1_2_2_Knoll_Tone/vertical.jpg').srcSet" class="lazyload" />
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_2_Regulaveis/1_2_2_Knoll_Tone/horizontal.jpg').srcSet" class="lazyload coluna2-3" />
    <div class="gi-txt graphik24 gray">Tone é uma linha completa de mesas elegantes com ajuste de altura que respondem à maneira como trabalhamos hoje, oferecendo ajuste e ergonomia ao usuário. Projetado pela Antenna Design, o Tone está disponível em uma gama completa de acabamentos de pintura Knoll, laminados e folheados com as opções de ajuste elétrico, manivela, fixo, pin-set 90˚ e 120˚ e opções de planejamento. Alcance um equilíbrio entre o trabalho colaborativo e compartilhado e o trabalho concentrado usando o Tone em qualquer espaço - de estações de trabalho primárias e escritórios privados a Espaços de atividades.</div>
  </div>



  <!-- INFORMAÇÕES TECNICAS -->
  <div class="informacoes-tecnicas grid3">
    <div class="linha-div" />
    <h3 class="title-info-tecnica pressura40">Informações técnicas</h3>

    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_2_Regulaveis/1_2_2_Knoll_Tone/desenho.jpg').srcSet" class="lazyload desenho-tecnico coluna2" />
    <ul class="tabela coluna2">
      <li class="pressura15 gray">Acabamentos disponíveis<span class="item-right black">11</span></li>
    </ul>

    <ul class="tabela coluna3">
      <li class="download pressura15 pink"><a href="/pdf/estacaodetrabalho/1_2_Regulaveis/1_2_2_Knoll_Tone/Overview_Tone.pdf" target="_blank">Download do catálogo<span class="item-right"><span class="arrow-btn">↓</span><span class="arrow-btn-hover">↓</span></span></a></li>
    </ul>
  </div>



  <!-- SERVIÇOS -->
    <Servicos />



  <!-- PRODUTOS RELACIONADOS -->
  
    <RelatedProduct
      imgproduct1="mobiliariocorporativo/estacaodetrabalho/1_2_Regulaveis/1_2_1_Escinter_Alto/hero.jpg"
      nameproduct1="Alto"
      brandproduct1="Escinter"
      linkproduct1="mobiliario_corporativo/estacaodetrabalho/alto"

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
      title: 'Tone — Knoll'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>