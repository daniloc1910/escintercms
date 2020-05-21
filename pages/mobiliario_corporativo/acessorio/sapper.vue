<template>
<div class="content">
  <MenuMobile />

  <!-- HERO -->
  <div class="product-highlight grid3">
    <div class="product-name">
      <ul class="product-info">
        <li class="graphik18 gray"><h2>Knoll</h2></li>
        <li class="pressura56 black"><h1>Sapper</h1></li>
      </ul>
    </div>
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/acessorios/7_2_Suporte_Monitor/7_2_6_Knoll_Sapper/hero.jpg').srcSet" class="product-image lazyload" />
  </div>



  <!-- GALERIA DE IMAGENS -->
  <div class="galeria-imagens grid3">
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/acessorios/7_2_Suporte_Monitor/7_2_6_Knoll_Sapper/vertical.jpg').srcSet" class="lazyload" />
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/acessorios/7_2_Suporte_Monitor/7_2_6_Knoll_Sapper/horizontal.jpg').srcSet" class="lazyload coluna2-3" />
  </div>



  <!-- INFORMAÇÕES TECNICAS -->
  <div class="informacoes-tecnicas grid3">
    <div class="linha-div" />
    <h3 class="title-info-tecnica pressura40">Informações técnicas</h3>

    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/acessorios/7_2_Suporte_Monitor/7_2_6_Knoll_Sapper/desenho.jpg').srcSet" class="lazyload desenho-tecnico coluna2" />
    <ul class="tabela coluna2">
      <li class="pressura15 gray">Cores disponíveis<span class="item-right black">4</span></li>
      <li class="download pressura15 pink"><a href="/pdf/acessorios/7_2_Suporte_Monitor/7_2_6_Knoll_Sapper/SapperArm_Brochure.pdf" target="_blank">Download do catálogo<span class="item-right"><span class="arrow-btn">↓</span><span class="arrow-btn-hover">↓</span></span></a></li>
    </ul>

    <div class="cores-disponiveis coluna3">
      <div class="cores-disponiveis-title pressura15 gray">Cores</div>
      <div class="cor-item" style="background-color: white;" />
      <div class="cor-item" style="background-color: silver;" />
      <div class="cor-item" style="background-color: grey;" />
      <div class="cor-item" style="background-color: black;" />
    </div>
  </div>



  <!-- SERVIÇOS -->
    <Servicos />



  <!-- PRODUTOS RELACIONADOS -->
  
    <RelatedProduct
      imgproduct1="mobiliariocorporativo/acessorios/7_2_Suporte_Monitor/7_2_5_Knoll_Sapperxyz/hero.jpg"
      nameproduct1="Sapper XYZ"
      brandproduct1="Knoll"
      linkproduct1="mobiliario_corporativo/acessorio/sapperxyz"

      imgproduct2="mobiliariocorporativo/acessorios/7_2_Suporte_Monitor/7_2_7_Humanscale_m21/hero.jpg"
      nameproduct2="M 2.1"
      brandproduct2="Humanscale"
      linkproduct2="mobiliario_corporativo/acessorio/m21"
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
      title: 'Sapper — Knoll'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>