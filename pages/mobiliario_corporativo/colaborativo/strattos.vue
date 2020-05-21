<template>
<div class="content">
  <MenuMobile />

  <!-- HERO -->
  <div class="product-highlight grid3">
    <div class="product-name">
      <ul class="product-info">
        <li class="graphik18 gray"><h2>Maxdesign</h2></li>
        <li class="pressura56 black"><h1>Strattos</h1></li>
      </ul>
    </div>
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_10_Maxdesign_Strattos/hero.jpg').srcSet" class="product-image lazyload" />
  </div>



  <!-- GALERIA DE IMAGENS -->
  <div class="galeria-imagens grid3">
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_10_Maxdesign_Strattos/vertical.jpg').srcSet" class="lazyload" />
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_10_Maxdesign_Strattos/horizontal.jpg').srcSet" class="lazyload coluna2-3" />
  </div>



  <!-- INFORMAÇÕES TECNICAS -->
  <div class="informacoes-tecnicas grid3">
    <div class="linha-div" />
    <h3 class="title-info-tecnica pressura40">Informações técnicas</h3>

    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_10_Maxdesign_Strattos/desenho.jpg').srcSet" class="lazyload desenho-tecnico coluna2" />
    <ul class="tabela coluna2">
      <li class="pressura15 gray">Cores disponíveis<span class="item-right black">12</span></li>
      <li class="pressura15 gray">Opções de estrutura<span class="item-right black">7</span></li>
      <li class="download pressura15 pink"><a href="/pdf/colaborativos/5_1_Cadeiras/5_1_10_Maxdesign_Strattos/Maxdesign-Stratos.pdf" target="_blank">Download do catálogo<span class="item-right"><span class="arrow-btn">↓</span><span class="arrow-btn-hover">↓</span></span></a></li>
    </ul>

    <div class="cores-disponiveis coluna3">
      <div class="cores-disponiveis-title pressura15 gray">Cores</div>
      <div class="cor-item" style="background-color: #fffdf1;" />
      <div class="cor-item" style="background-color: #000000;" />
      <div class="cor-item" style="background-color: #cbc2bc;" />
      <div class="cor-item" style="background-color: #c8cabb;" />
      <div class="cor-item" style="background-color: #c85445;" />
      <div class="cor-item" style="background-color: #c18238;" />
      <div class="cor-item" style="background-color: #97792c;" />
      <div class="cor-item" style="background-color: #656427;" />
      <div class="cor-item" style="background-color: #859799;" />
      <div class="cor-item" style="background-color: #5d747e;" />
      <div class="cor-item" style="background-color: #3a4b4e;" />
      <div class="cor-item" style="background-color: #c05433;" />
    </div>
  </div>



  <!-- SERVIÇOS -->
    <Servicos />



  <!-- PRODUTOS RELACIONADOS -->
  
    <RelatedProduct
      imgproduct1="mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_9_Maxdesign_Appia/hero.jpg"
      nameproduct1="Appia"
      brandproduct1="Maxdesign"
      linkproduct1="mobiliario_corporativo/colaborativo/appia"

      imgproduct2="mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_11_Frisokar_Leaf/hero.jpg"
      nameproduct2="Leaf"
      brandproduct2="Frisokar"
      linkproduct2="mobiliario_corporativo/colaborativo/leaf"
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
      title: 'Strattos — Maxdesign'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>