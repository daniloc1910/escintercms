<template>
<div class="content">
  <MenuMobile />

  <!-- HERO -->
  <div class="product-highlight grid3">
    <div class="product-name">
      <ul class="product-info">
        <li class="graphik18 gray"><h2>Humanscale</h2></li>
        <li class="pressura56 black"><h1>CPU200</h1></li>
      </ul>
    </div>
    <img :data-srcset="require('~/assets/images/mobiliariocorporativo/acessorios/7_4_Diversos/7_4_6_Humanscale_CPU200/hero.jpg').srcSet" class="product-image lazyload" />
  </div>



  <!-- GALERIA DE IMAGENS -->
  <div class="galeria-imagens grid3">
    <img :data-srcset="require('~/assets/images/mobiliariocorporativo/acessorios/7_4_Diversos/7_4_6_Humanscale_CPU200/vertical.jpg').srcSet" class="lazyload" />
    <img :data-srcset="require('~/assets/images/mobiliariocorporativo/acessorios/7_4_Diversos/7_4_6_Humanscale_CPU200/horizontal.jpg').srcSet" class="lazyload coluna2-3" />
  </div>



  <!-- INFORMAÇÕES TECNICAS -->
  <div class="informacoes-tecnicas grid3">
    <div class="linha-div" />
    <h3 class="title-info-tecnica pressura40">Informações técnicas</h3>

    <img :data-srcset="require('~/assets/images/mobiliariocorporativo/acessorios/7_4_Diversos/7_4_6_Humanscale_CPU200/desenho.jpg').srcSet" class="lazyload desenho-tecnico coluna2" />
    <ul class="tabela coluna2">
      <li class="pressura15 gray">Cores disponíveis<span class="item-right black">2</span></li>
      <li class="download pressura15 pink"><a href="/pdf/acessorios/7_4_Diversos/7_4_6_Humanscale_CPU200/CPU-brochure-012720b.pdf" target="_blank">Download do catálogo<span class="item-right"><span class="arrow-btn">↓</span><span class="arrow-btn-hover">↓</span></span></a></li>
    </ul>
  </div>



  <!-- SERVIÇOS -->
    <Servicos />



  <!-- PRODUTOS RELACIONADOS -->
  
    <RelatedProduct
      imgproduct1="mobiliariocorporativo/acessorios/7_4_Diversos/7_4_7_Humanscale_CPU600/hero.jpg"
      nameproduct1="CPU600"
      brandproduct1="Humanscale"
      linkproduct1="mobiliario_corporativo/acessorio/cpu600"

      imgproduct2="mobiliariocorporativo/acessorios/7_4_Diversos/7_4_8_Humanscale_Techtray/hero.jpg"
      nameproduct2="Techtray"
      brandproduct2="Humanscale"
      linkproduct2="mobiliario_corporativo/acessorio/techtray"
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
      title: 'CPU200 — Humanscale'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>