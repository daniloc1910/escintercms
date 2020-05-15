<template>
<div class="content">
  <MenuMobile />

  <!-- HERO -->
  <div class="product-highlight grid3">
    <div class="product-name">
      <ul class="product-info">
        <li class="graphik18 gray"><h2>Frisokar</h2></li>
        <li class="pressura56 black"><h1>Agile</h1></li>
      </ul>
    </div>
    <img :data-srcset="require('~/assets/images/mobiliariocorporativo/assentos/2_11_Frisokar_Agile/hero.jpg').srcSet" class="product-image lazyload" />
  </div>



  <!-- GALERIA DE IMAGENS -->
  <div class="galeria-imagens grid3">
    <img :data-srcset="require('~/assets/images/mobiliariocorporativo/assentos/2_11_Frisokar_Agile/vertical.jpg').srcSet" class="lazyload" />
    <img :data-srcset="require('~/assets/images/mobiliariocorporativo/assentos/2_11_Frisokar_Agile/horizontal.jpg').srcSet" class="lazyload coluna2-3" />
  </div>



  <!-- INFORMAÇÕES TECNICAS -->
  <div class="informacoes-tecnicas grid3">
    <div class="linha-div" />
    <h3 class="title-info-tecnica pressura40">Informações técnicas</h3>

    <img :data-srcset="require('~/assets/images/mobiliariocorporativo/assentos/2_11_Frisokar_Agile/desenho.jpg').srcSet" class="lazyload desenho-tecnico coluna2" />
    <ul class="tabela coluna2">
<li class="download pressura15 pink"><a href="/pdf/assentos/2_11_Frisokar_Agile/Agile.pdf" target="_blank">Download do catálogo<span class="item-right"><span class="arrow">↓</span><span class="arrow-hover">↓</span></span></a></li>
    </ul>
  </div>



  <!-- SERVIÇOS -->
    <Servicos />



  <!-- PRODUTOS RELACIONADOS -->
  
    <RelatedProduct
      imgproduct1="mobiliariocorporativo/assentos/2_10_FWay_Ayra/hero.jpg"
      nameproduct1="Ayra"
      brandproduct1="F.WAY"
      linkproduct1="mobiliario_corporativo/assento/ayra"

      imgproduct2="mobiliariocorporativo/assentos/2_11_Frisokar_Joy_Addit/hero.jpg"
      nameproduct2="Joy Addit"
      brandproduct2="Frisokar"
      linkproduct2="mobiliario_corporativo/assento/joy-addit"
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
      title: 'Agile — Frisokar'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>