<template>
<div class="content">
  <MenuMobile />

  <!-- HERO -->
  <div class="product-highlight grid3">
    <div class="product-name">
      <ul class="product-info">
        <li class="graphik18 gray"><h2>Knoll</h2></li>
        <li class="pressura56 black"><h1>k. stand</h1></li>
      </ul>
    </div>
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_2_Regulaveis/1_2_3_Knoll_Kstand/hero.jpg').srcSet" class="product-image lazyload" />
  </div>



  <!-- GALERIA DE IMAGENS -->
  <div class="galeria-imagens grid3">
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_2_Regulaveis/1_2_3_Knoll_Kstand/vertical.jpg').srcSet" class="lazyload" />
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_2_Regulaveis/1_2_3_Knoll_Kstand/horizontal.jpg').srcSet" class="lazyload coluna2-3" />
    <div class="gi-txt graphik24 gray">k. Stand é uma coleção de bases ajustáveis ​​em altura, superfícies de trabalho e acessórios fáceis de especificar e usar. k. stand responde às necessidades do escritório de hoje, dimensionando para criar espaços adaptáveis ​​que suportam muitos modos de trabalho entre diversos grupos de trabalho e em todas as áreas do local de trabalho. Móveis que oferecem opções e flexibilidade aos usuários contribuem para o bem-estar individual, o envolvimento e a produtividade. As mesas ajustáveis ​​em altura permitem que os usuários personalizem sua experiência de trabalho, adaptando o espaço de trabalho para atender às suas necessidades - e não o contrário.</div>
  </div>



  <!-- INFORMAÇÕES TECNICAS -->
  <div class="informacoes-tecnicas grid3">
    <div class="linha-div" />
    <h3 class="title-info-tecnica pressura40">Informações técnicas</h3>

    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_2_Regulaveis/1_2_3_Knoll_Kstand/desenho.jpg').srcSet" class="lazyload desenho-tecnico coluna2" />
    <ul class="tabela coluna2">
      <li class="pressura15 gray">Cores disponíveis<span class="item-right black">3</span></li>
    </ul>

    <ul class="tabela coluna3">
      <li class="download pressura15 pink"><a href="/pdf/estacaodetrabalho/1_2_Regulaveis/1_2_3_Knoll_Kstand/KNL18-Cutsheet-kstand-final.pdf" target="_blank">Download do catálogo<span class="item-right"><span class="arrow-btn">↓</span><span class="arrow-btn-hover">↓</span></span></a></li>
    </ul>
  </div>



  <!-- SERVIÇOS -->
    <Servicos />



  <!-- PRODUTOS RELACIONADOS -->
  
    <RelatedProduct
      imgproduct1="mobiliariocorporativo/estacaodetrabalho/1_2_Regulaveis/1_2_2_Knoll_Tone/hero.jpg"
      nameproduct1="Tone"
      brandproduct1="Knoll"
      linkproduct1="mobiliario_corporativo/estacaodetrabalho/tone"

      imgproduct2="mobiliariocorporativo/estacaodetrabalho/1_2_Regulaveis/1_2_4_Humanscale_Float/hero.jpg"
      nameproduct2="Float"
      brandproduct2="Humanscale"
      linkproduct2="mobiliario_corporativo/estacaodetrabalho/float"
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
      title: 'k. stand — Knoll'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>