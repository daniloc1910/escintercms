<template>
<div class="content">
  <MenuMobile />

  <!-- HERO -->
  <div class="product-highlight grid3">
    <div class="product-name">
      <ul class="product-info">
        <li class="graphik18 gray"><h2>Frisokar</h2></li>
        <li class="pressura56 black"><h1>Connect</h1></li>
      </ul>
    </div>
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_12_Frisokar_Connect/hero.jpg').srcSet" class="product-image lazyload" />
  </div>



  <!-- GALERIA DE IMAGENS -->
  <div class="galeria-imagens grid3">
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_12_Frisokar_Connect/vertical.jpg').srcSet" class="lazyload" />
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_12_Frisokar_Connect/horizontal.jpg').srcSet" class="lazyload coluna2-3" />
  </div>



  <!-- INFORMAÇÕES TECNICAS -->
  <div class="informacoes-tecnicas grid3">
    <div class="linha-div" />
    <h3 class="title-info-tecnica pressura40">Informações técnicas</h3>

    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_12_Frisokar_Connect/desenho.jpg').srcSet" class="lazyload desenho-tecnico coluna2" />
    <ul class="tabela coluna2">
      <li class="pressura15 gray">Cores disponíveis<span class="item-right black">8</span></li>
      <li class="download pressura15 pink"><a href="/pdf/colaborativos/5_1_Cadeiras/5_1_12_Frisokar_Connect/Connect-1.pdf" target="_blank">Download do catálogo<span class="item-right"><span class="arrow-btn">↓</span><span class="arrow-btn-hover">↓</span></span></a></li>
    </ul>

    <div class="cores-disponiveis coluna3">
      <div class="cores-disponiveis-title pressura15 gray">Cores</div>
      <div class="cor-item" style="background-color: #000;" />
      <div class="cor-item" style="background-color: #272f47;" />
      <div class="cor-item" style="background-color: #293449;" />
      <div class="cor-item" style="background-color: #861e22;" />
      <div class="cor-item" style="background-color: #937d6c;" />
      <div class="cor-item" style="background-color: #fff;" />
      <div class="cor-item" style="background-color: #757678;" />
      <div class="cor-item" style="background: linear-gradient(40deg, rgba(157,158,159,1) 0%, rgba(255,255,255,1) 100%);" />
    </div>
  </div>



  <!-- SERVIÇOS -->
    <Servicos />



  <!-- PRODUTOS RELACIONADOS -->
  
    <RelatedProduct
      imgproduct1="mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_11_Frisokar_Leaf/hero.jpg"
      nameproduct1="Leaf"
      brandproduct1="Frisokar"
      linkproduct1="mobiliario_corporativo/colaborativo/leaf"

      imgproduct2="mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_13_Frisokar_Up/hero.jpg"
      nameproduct2="Up"
      brandproduct2="Frisokar"
      linkproduct2="mobiliario_corporativo/colaborativo/up"
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
      title: 'Connect — Frisokar'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>