<template>
<div class="content">
  <MenuMobile />

  <!-- HERO -->
  <div class="product-highlight grid3">
    <div class="product-name">
      <ul class="product-info">
        <li class="graphik18 gray"><h2>Humanscale</h2></li>
        <li class="pressura56 black"><h1>Quickstand Eco</h1></li>
      </ul>
    </div>
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/acessorios/7_3_Quickstand/7_3_1_Humanscale_Quickstand_Eco/hero.jpg').srcSet" class="product-image lazyload" />
  </div>



  <!-- GALERIA DE IMAGENS -->
  <div class="galeria-imagens grid3">
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/acessorios/7_3_Quickstand/7_3_1_Humanscale_Quickstand_Eco/vertical.jpg').srcSet" class="lazyload" />
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/acessorios/7_3_Quickstand/7_3_1_Humanscale_Quickstand_Eco/horizontal.jpg').srcSet" class="lazyload coluna2-3" />
  </div>



  <!-- INFORMAÇÕES TECNICAS -->
  <div class="informacoes-tecnicas grid3">
    <div class="linha-div" />
    <h3 class="title-info-tecnica pressura40">Informações técnicas</h3>

    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/acessorios/7_3_Quickstand/7_3_1_Humanscale_Quickstand_Eco/desenho.jpg').srcSet" class="lazyload desenho-tecnico coluna2" />
    <ul class="tabela coluna2">
      <li class="download pressura15 pink"><a href="/pdf/acessorios/7_3_Quickstand/7_3_1_Humanscale_Quickstand_Eco/hs_sit_stand_QuickStandEco_brochure_1019.pdf" target="_blank">Download do catálogo<span class="item-right"><span class="arrow-btn">↓</span><span class="arrow-btn-hover">↓</span></span></a></li>
    </ul>
  </div>



  <!-- SERVIÇOS -->
    <Servicos />



  <!-- PRODUTOS RELACIONADOS -->
  
    <RelatedProduct
      imgproduct1="mobiliariocorporativo/acessorios/7_3_Quickstand/7_3_2_Humanscale_Quickstand/hero.jpg"
      nameproduct1="Quickstand"
      brandproduct1="Humanscale"
      linkproduct1="mobiliario_corporativo/acessorio/quickstand"

      imgproduct2="mobiliariocorporativo/acessorios/7_3_Quickstand/7_3_3_Humanscale_Quickstand_Lite/hero.jpg"
      nameproduct2="Quickstand Lite"
      brandproduct2="Humanscale"
      linkproduct2="mobiliario_corporativo/acessorio/quickstand-lite"
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
      title: 'Quickstand Eco — Humanscale'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>