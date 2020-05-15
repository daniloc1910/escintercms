<template>
<div class="content">
  <MenuMobile />

  <!-- HERO -->
  <div class="product-highlight grid3">
    <div class="product-name">
      <ul class="product-info">
        <li class="graphik18 gray"><h2>Kusch</h2></li>
        <li class="pressura56 black"><h1>Scorpii</h1></li>
      </ul>
    </div>
    <img :data-srcset="require('~/assets/images/mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_5_Kusch_Scorpii/hero.jpg').srcSet" class="product-image lazyload" />
  </div>



  <!-- GALERIA DE IMAGENS -->
  <div class="galeria-imagens grid3">
    <img :data-srcset="require('~/assets/images/mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_5_Kusch_Scorpii/vertical.jpg').srcSet" class="lazyload" />
    <img :data-srcset="require('~/assets/images/mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_5_Kusch_Scorpii/horizontal.jpg').srcSet" class="lazyload coluna2-3" />
  </div>



  <!-- SERVIÇOS -->
    <Servicos />



  <!-- PRODUTOS RELACIONADOS -->
  
    <RelatedProduct
      imgproduct1="mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_4_Kusch_Soley/hero.jpg"
      nameproduct1="Soley"
      brandproduct1="Kusch"
      linkproduct1="mobiliario_corporativo/colaborativo/soley"

      imgproduct2="mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_6_Kusch_Njord/hero.jpg"
      nameproduct2="Njord"
      brandproduct2="Kusch"
      linkproduct2="mobiliario_corporativo/colaborativo/njord"
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
      title: 'Scorpii — Kusch'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>