<template>
<div class="content">
  <MenuMobile />

  <!-- HERO -->
  <div class="product-highlight grid3">
    <div class="product-name">
      <ul class="product-info">
        <li class="graphik18 gray"><h2>Humanscale</h2></li>
        <li class="pressura56 black"><h1>M 8.1</h1></li>
      </ul>
    </div>
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/acessorios/7_2_Suporte_Monitor/7_2_8_Humanscale_m81/hero.jpg').srcSet" class="product-image lazyload" />
  </div>



  <!-- GALERIA DE IMAGENS -->
  <div class="galeria-imagens grid3">
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/acessorios/7_2_Suporte_Monitor/7_2_8_Humanscale_m81/vertical.jpg').srcSet" class="lazyload" />
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/acessorios/7_2_Suporte_Monitor/7_2_8_Humanscale_m81/horizontal.jpg').srcSet" class="lazyload coluna2-3" />
  </div>



  <!-- SERVIÇOS -->
    <Servicos />



  <!-- PRODUTOS RELACIONADOS -->
  
    <RelatedProduct
      imgproduct1="mobiliariocorporativo/acessorios/7_2_Suporte_Monitor/7_2_7_Humanscale_m21/hero.jpg"
      nameproduct1="M 2.1"
      brandproduct1="Humanscale"
      linkproduct1="mobiliario_corporativo/acessorio/m21"

      imgproduct2="mobiliariocorporativo/acessorios/7_2_Suporte_Monitor/7_2_9_Humanscale_m10/hero.jpg"
      nameproduct2="M 10"
      brandproduct2="Humanscale"
      linkproduct2="mobiliario_corporativo/acessorio/m10"
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
      title: 'M 8.1 — Humanscale'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>