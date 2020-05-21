<template>
<div class="content">
  <MenuMobile />

  <!-- HERO -->
  <div class="product-highlight grid3">
    <div class="product-name">
      <ul class="product-info">
        <li class="graphik18 gray"><h2>F.WAY</h2></li>
        <li class="pressura56 black"><h1>Quark</h1></li>
      </ul>
    </div>
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/colaborativos/5_2_Poltronas/5_2_12_Fway_Quark/hero.jpg').srcSet" class="product-image lazyload" />
  </div>



  <!-- GALERIA DE IMAGENS -->
  <div class="galeria-imagens grid3">
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/colaborativos/5_2_Poltronas/5_2_12_Fway_Quark/vertical.jpg').srcSet" class="lazyload" />
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/colaborativos/5_2_Poltronas/5_2_12_Fway_Quark/horizontal.jpg').srcSet" class="lazyload coluna2-3" />
  </div>



  <!-- SERVIÇOS -->
    <Servicos />



  <!-- PRODUTOS RELACIONADOS -->
  
    <RelatedProduct
      imgproduct1="mobiliariocorporativo/colaborativos/5_2_Poltronas/5_2_10_Fway_Ayra/hero.jpg"
      nameproduct1="Ayra"
      brandproduct1="F.WAY"
      linkproduct1="mobiliario_corporativo/colaborativo/Ayra"

      imgproduct2="mobiliariocorporativo/colaborativos/5_2_Poltronas/5_2_11_Fway_Frog/hero.jpg"
      nameproduct2="Frog"
      brandproduct2="F.WAY"
      linkproduct2="mobiliario_corporativo/colaborativo/frog"
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
      title: 'Quark — F.WAY'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>