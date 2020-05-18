<template>
<div class="content">
  <MenuMobile />

  <!-- HERO -->
  <div class="product-highlight grid3">
    <div class="product-name">
      <ul class="product-info">
        <li class="graphik18 gray"><h2>Frisokar</h2></li>
        <li class="pressura56 black"><h1>Pix</h1></li>
      </ul>
    </div>
    <img :data-srcset="require('~/assets/images/mobiliariocorporativo/colaborativos/5_3_Sofas/5_3_1_Frisokar_Pix/hero.jpg').srcSet" class="product-image lazyload" />
  </div>



  <!-- GALERIA DE IMAGENS -->
  <div class="galeria-imagens grid3">
    <img :data-srcset="require('~/assets/images/mobiliariocorporativo/colaborativos/5_3_Sofas/5_3_1_Frisokar_Pix/vertical.jpg').srcSet" class="lazyload" />
    <img :data-srcset="require('~/assets/images/mobiliariocorporativo/colaborativos/5_3_Sofas/5_3_1_Frisokar_Pix/horizontal.jpg').srcSet" class="lazyload coluna2-3" />
  </div>



  <!-- SERVIÇOS -->
    <Servicos />



  <!-- PRODUTOS RELACIONADOS -->
  
    <RelatedProduct
      imgproduct1="mobiliariocorporativo/colaborativos/5_3_Sofas/5_3_2_Fway_Jelly/hero.jpg"
      nameproduct1="Jelly"
      brandproduct1="F.WAY"
      linkproduct1="mobiliario_corporativo/colaborativo/jelly"

      imgproduct2="mobiliariocorporativo/colaborativos/5_3_Sofas/5_3_3_Fway_Poe/hero.jpg"
      nameproduct2="Poe"
      brandproduct2="F.WAY"
      linkproduct2="mobiliario_corporativo/colaborativo/poe"
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
      title: 'Pix — Frisokar'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>