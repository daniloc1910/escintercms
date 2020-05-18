<template>
<div class="content">
  <MenuMobile />

  <!-- HERO -->
  <div class="product-highlight grid3">
    <div class="product-name">
      <ul class="product-info">
        <li class="graphik18 gray"><h2>Maxdesign</h2></li>
        <li class="pressura56 black"><h1>Pic</h1></li>
      </ul>
    </div>
    <img :data-srcset="require('~/assets/images/mobiliariocorporativo/colaborativos/5_6_Mesas/5_6_7_Maxdesign_Pic/hero.jpg').srcSet" class="product-image lazyload" />
  </div>



  <!-- GALERIA DE IMAGENS -->
  <div class="galeria-imagens grid3">
    <img :data-srcset="require('~/assets/images/mobiliariocorporativo/colaborativos/5_6_Mesas/5_6_7_Maxdesign_Pic/vertical.jpg').srcSet" class="lazyload" />
    <img :data-srcset="require('~/assets/images/mobiliariocorporativo/colaborativos/5_6_Mesas/5_6_7_Maxdesign_Pic/horizontal.jpg').srcSet" class="lazyload coluna2-3" />
  </div>


  <!-- INFORMAÇÕES TECNICAS -->
  <div class="informacoes-tecnicas grid3">
    <div class="linha-div" />
    <h3 class="title-info-tecnica pressura40">Informações técnicas</h3>

    <img :data-srcset="require('~/assets/images/mobiliariocorporativo/colaborativos/5_6_Mesas/5_6_7_Maxdesign_Pic/desenho.jpg').srcSet" class="lazyload desenho-tecnico coluna2" />
    <ul class="tabela coluna2">
      <li class="pressura15 gray">Cores disponíveis<span class="item-right black">5</span></li>
      <li class="download pressura15 pink"><a href="/pdf/colaborativos/5_6_Mesas/5_6_7_Maxdesign_Pic/Maxdesign-Pic.pdf" target="_blank">Download do catálogo<span class="item-right"><span class="arrow-btn">↓</span><span class="arrow-btn-hover">↓</span></span></a></li>
    </ul>

    <div class="cores-disponiveis coluna3">
      <div class="cores-disponiveis-title pressura15 gray">Cores</div>
      <div class="cor-item" style="background-color: #fff;" />
      <div class="cor-item" style="background-color: #000;" />
      <div class="cor-item" style="background-color: #76251d;" />
      <div class="cor-item" style="background-color: #f2bb41;" />
      <div class="cor-item" style="background-color: #608eb1;" />
    </div>
  </div>



  <!-- SERVIÇOS -->
    <Servicos />



  <!-- PRODUTOS RELACIONADOS -->
  
    <RelatedProduct
      imgproduct1="mobiliariocorporativo/colaborativos/5_6_Mesas/5_6_6_Maxdesign_Baba/hero.jpg"
      nameproduct1="Baba"
      brandproduct1="Maxdesign"
      linkproduct1="mobiliario_corporativo/colaborativo/baba"

      imgproduct2="mobiliariocorporativo/colaborativos/5_6_Mesas/5_6_8_Frisokar_Pix/hero.jpg"
      nameproduct2="Pix"
      brandproduct2="Frisokar"
      linkproduct2="mobiliario_corporativo/colaborativo/pix-mesa"
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
      title: 'Pic — Maxdesign'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>