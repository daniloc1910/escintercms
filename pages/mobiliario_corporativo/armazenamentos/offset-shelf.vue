<template>
<div class="content">
  <MenuMobile />

  <!-- HERO -->
  <div class="product-highlight grid3">
    <div class="product-name">
      <ul class="product-info">
        <li class="graphik18 gray"><h2>Maxdesign</h2></li>
        <li class="pressura56 black"><h1>Offset Shelf</h1></li>
      </ul>
    </div>
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/armazenamento/4_7_Maxdesign_Offsetshelf/hero.jpg').srcSet" class="product-image lazyload" />
  </div>



  <!-- GALERIA DE IMAGENS -->
  <div class="galeria-imagens grid3">
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/armazenamento/4_7_Maxdesign_Offsetshelf/vertical.jpg').srcSet" class="lazyload" />
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/armazenamento/4_7_Maxdesign_Offsetshelf/horizontal.jpg').srcSet" class="lazyload coluna2-3" />
  </div>




  <!-- SERVIÇOS -->
    <Servicos />



  <!-- PRODUTOS RELACIONADOS -->
  
    <RelatedProduct
      imgproduct1="mobiliariocorporativo/armazenamento/4_5_Knoll_Anchor/hero.jpg"
      nameproduct1="Anchor"
      brandproduct1="Knoll"
      linkproduct1="mobiliario_corporativo/armazenamentos/anchor"

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
      title: 'Offset Shelf — Maxdesign'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>