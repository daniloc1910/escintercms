<template>
<div class="content">
  <MenuMobile />

  <!-- HERO -->
  <div class="product-highlight grid3">
    <div class="product-name">
      <ul class="product-info">
        <li class="graphik18 gray"><h2>Knoll</h2></li>
        <li class="pressura56 black"><h1>Anchor</h1></li>
      </ul>
    </div>
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/armazenamento/4_5_Knoll_Anchor/hero.jpg').srcSet" class="product-image lazyload" />
  </div>



  <!-- GALERIA DE IMAGENS -->
  <div class="galeria-imagens grid3">
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/armazenamento/4_5_Knoll_Anchor/vertical.jpg').srcSet" class="lazyload" />
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/armazenamento/4_5_Knoll_Anchor/horizontal.jpg').srcSet" class="lazyload coluna2-3" />
  </div>




  <!-- SERVIÇOS -->
    <Servicos />



  <!-- PRODUTOS RELACIONADOS -->
  
    <RelatedProduct
      imgproduct1="mobiliariocorporativo/armazenamento/4_4_Knoll_Calibre/hero.jpg"
      nameproduct1="Calibre"
      brandproduct1="Knoll"
      linkproduct1="mobiliario_corporativo/armazenamentos/calibre"

      imgproduct2="mobiliariocorporativo/armazenamento/4_6_Fway_Jelly/hero.jpg"
      nameproduct2="Jelly"
      brandproduct2="F.WAY"
      linkproduct2="mobiliario_corporativo/armazenamentos/jelly"
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
      title: 'Anchor — Knoll'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>