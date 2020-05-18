<template>
<div class="content">
  <MenuMobile />

  <!-- HERO -->
  <div class="product-highlight grid3">
    <div class="product-name">
      <ul class="product-info">
        <li class="graphik18 gray"><h2>Kusch</h2></li>
        <li class="pressura56 black"><h1>Njord</h1></li>
      </ul>
    </div>
    <img :data-srcset="require('~/assets/images/mobiliariocorporativo/colaborativos/5_6_Mesas/5_6_4_Kusch_Njord/hero.jpg').srcSet" class="product-image lazyload" />
  </div>



  <!-- GALERIA DE IMAGENS -->
  <div class="galeria-imagens grid3">
    <img :data-srcset="require('~/assets/images/mobiliariocorporativo/colaborativos/5_6_Mesas/5_6_4_Kusch_Njord/vertical.jpg').srcSet" class="lazyload" />
    <img :data-srcset="require('~/assets/images/mobiliariocorporativo/colaborativos/5_6_Mesas/5_6_4_Kusch_Njord/horizontal.jpg').srcSet" class="lazyload coluna2-3" />
  </div>



  <!-- SERVIÇOS -->
    <Servicos />



  <!-- PRODUTOS RELACIONADOS -->
  
    <RelatedProduct
      imgproduct1="mobiliariocorporativo/colaborativos/5_6_Mesas/5_6_3_Kusch_San_Siro/hero.jpg"
      nameproduct1="San Siro"
      brandproduct1="Kusch"
      linkproduct1="mobiliario_corporativo/colaborativo/san-siro"

      imgproduct2="mobiliariocorporativo/colaborativos/5_6_Mesas/5_6_5_Kusch_Joy/hero.jpg"
      nameproduct2="Joy"
      brandproduct2="Kusch"
      linkproduct2="mobiliario_corporativo/colaborativo/joy"
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
      title: 'Njord — Kusch'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>