<template>
<div class="content">
  <MenuMobile />

  <!-- HERO -->
  <div class="product-highlight grid3">
    <div class="product-name">
      <ul class="product-info">
        <li class="graphik18 gray"><h2>Humanscale</h2></li>
        <li class="pressura56 black"><h1>Horizon</h1></li>
      </ul>
    </div>
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_10_Humanscale_Horizon/hero.jpg').srcSet" class="product-image lazyload" />
  </div>



  <!-- GALERIA DE IMAGENS -->
  <div class="galeria-imagens grid3">
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_10_Humanscale_Horizon/vertical.jpg').srcSet" class="lazyload" />
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_10_Humanscale_Horizon/horizontal.jpg').srcSet" class="lazyload coluna2-3" />
  </div>



  <!-- INFORMAÇÕES TECNICAS -->
  <div class="informacoes-tecnicas grid3">
    <div class="linha-div" />
    <h3 class="title-info-tecnica pressura40">Informações técnicas</h3>

    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_10_Humanscale_Horizon/desenho.jpg').srcSet" class="lazyload desenho-tecnico coluna2" />
    <ul class="tabela coluna2">
      <li class="download pressura15 pink"><a href="/pdf/acessorios/7_1_Luminarias/7_1_10_Humanscale_Horizon/horizon_brochure_101818.pdf" target="_blank">Download do catálogo<span class="item-right"><span class="arrow-btn">↓</span><span class="arrow-btn-hover">↓</span></span></a></li>
    </ul>
  </div>



  <!-- SERVIÇOS -->
    <Servicos />



  <!-- PRODUTOS RELACIONADOS -->
  
    <RelatedProduct
      imgproduct1="mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_8_Humanscale_Element_Disc/hero.jpg"
      nameproduct1="Element Disc"
      brandproduct1="Humanscale"
      linkproduct1="mobiliario_corporativo/acessorio/element-disc"

      imgproduct2="mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_9_Humanscale_Element_Vicion/hero.jpg"
      nameproduct2="Element Vision"
      brandproduct2="Humanscale"
      linkproduct2="mobiliario_corporativo/acessorio/element-vision"
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
      title: 'Horizon — Humanscale'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>