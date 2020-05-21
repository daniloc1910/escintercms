<template>
<div class="content">
  <MenuMobile />

  <!-- HERO -->
  <div class="product-highlight grid3">
    <div class="product-name">
      <ul class="product-info">
        <li class="graphik18 gray"><h2>Kusch</h2></li>
        <li class="pressura56 black"><h1>Pileto</h1></li>
      </ul>
    </div>
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/colaborativos/5_7_Mesa_Cafe/5_7_2_Kusch_Plieto/hero.jpg').srcSet" class="product-image lazyload" />
  </div>



  <!-- GALERIA DE IMAGENS -->
  <div class="galeria-imagens grid3">
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/colaborativos/5_7_Mesa_Cafe/5_7_2_Kusch_Plieto/vertical.jpg').srcSet" class="lazyload" />
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/colaborativos/5_7_Mesa_Cafe/5_7_2_Kusch_Plieto/horizontal.jpg').srcSet" class="lazyload coluna2-3" />
  </div>



  <!-- SERVIÇOS -->
    <Servicos />



  <!-- PRODUTOS RELACIONADOS -->
  
    <RelatedProduct
      imgproduct1="mobiliariocorporativo/colaborativos/5_7_Mesa_Cafe/5_7_1_Escinter_Joy/hero.jpg"
      nameproduct1="Joy"
      brandproduct1="Escinter"
      linkproduct1="mobiliario_corporativo/colaborativo/joy-cafe"

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
      title: 'Pileto — Kusch'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>