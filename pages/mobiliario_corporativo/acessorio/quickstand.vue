<template>
<div class="content">
  <MenuMobile />

  <!-- HERO -->
  <div class="product-highlight grid3">
    <div class="product-name">
      <ul class="product-info">
        <li class="graphik18 gray"><h2>Humanscale</h2></li>
        <li class="pressura56 black"><h1>Quickstand</h1></li>
      </ul>
    </div>
    <img :data-srcset="require('~/assets/images/mobiliariocorporativo/acessorios/7_3_Quickstand/7_3_2_Humanscale_Quickstand/hero.jpg').srcSet" class="product-image lazyload" />
  </div>



  <!-- GALERIA DE IMAGENS -->
  <div class="galeria-imagens grid3">
    <img :data-srcset="require('~/assets/images/mobiliariocorporativo/acessorios/7_3_Quickstand/7_3_2_Humanscale_Quickstand/vertical.jpg').srcSet" class="lazyload" />
    <img :data-srcset="require('~/assets/images/mobiliariocorporativo/acessorios/7_3_Quickstand/7_3_2_Humanscale_Quickstand/horizontal.jpg').srcSet" class="lazyload coluna2-3" />
  </div>



  <!-- INFORMAÇÕES TECNICAS -->
  <div class="informacoes-tecnicas grid3">
    <div class="linha-div" />
    <h3 class="title-info-tecnica pressura40">Informações técnicas</h3>

    <img :data-srcset="require('~/assets/images/mobiliariocorporativo/acessorios/7_3_Quickstand/7_3_2_Humanscale_Quickstand/desenho.jpg').srcSet" class="lazyload desenho-tecnico coluna2" />
    <ul class="tabela coluna2">
      <li class="pressura15 gray">Cores disponíveis<span class="item-right black">2</span></li>
      <li class="download pressura15 pink"><a href="/pdf/acessorios/7_3_Quickstand/7_3_2_Humanscale_Quickstand/hs_sit_stand_QS_brochure_1218.pdf" target="_blank">Download do catálogo<span class="item-right"><span class="arrow-btn">↓</span><span class="arrow-btn-hover">↓</span></span></a></li>
    </ul>

    <div class="cores-disponiveis coluna3">
      <div class="cores-disponiveis-title pressura15 gray">Cores</div>
      <div class="cor-item" style="background-color: white;" />
      <div class="cor-item" style="background-color: black;" />
    </div>
  </div>



  <!-- SERVIÇOS -->
    <Servicos />



  <!-- PRODUTOS RELACIONADOS -->
  
    <RelatedProduct
      imgproduct1="mobiliariocorporativo/acessorios/7_3_Quickstand/7_3_1_Humanscale_Quickstand_Eco/hero.jpg"
      nameproduct1="Quickstand Eco"
      brandproduct1="Humanscale"
      linkproduct1="mobiliario_corporativo/acessorio/quickstand-eco"

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
      title: 'Quickstand — Humanscale'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>