<template>
<div class="content">
  <MenuMobile />

  <!-- HERO -->
  <div class="product-highlight grid3">
    <div class="product-name">
      <ul class="product-info">
        <li class="graphik18 gray"><h2>Knoll</h2></li>
        <li class="pressura56 black"><h1>Pollock</h1></li>
      </ul>
    </div>
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/assentos/2_7_Knoll_Pollock/hero.jpg').srcSet" class="product-image lazyload" />
  </div>



  <!-- GALERIA DE IMAGENS -->
  <div class="galeria-imagens grid3">
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/assentos/2_7_Knoll_Pollock/vertical.jpg').srcSet" class="lazyload" />
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/assentos/2_7_Knoll_Pollock/horizontal.jpg').srcSet" class="lazyload coluna2-3" />
    <div class="gi-txt graphik24 gray">Um clássico do design criada por Charles Pollock em 1963, a Cadeira Executiva Pollock apresenta o que o designer descreveu como "tecnologia de aro" - o uso de uma única faixa de alumínio ao redor do perímetro da cadeira para manter o design unido, estrutural e visualmente. Quase sessenta anos após sua introdução, a cadeira Pollock continua a exalar elegância atemporal em qualquer escritório doméstico.</div>
  </div>



  <!-- SERVIÇOS -->
    <Servicos />



  <!-- PRODUTOS RELACIONADOS -->
  
    <RelatedProduct
      imgproduct1="mobiliariocorporativo/assentos/2_6_Knoll_Life/hero.jpg"
      nameproduct1="Life"
      brandproduct1="Knoll"
      linkproduct1="mobiliario_corporativo/assento/life"

      imgproduct2="mobiliariocorporativo/assentos/2_8_FWay_Parker/hero.jpg"
      nameproduct2="Parker"
      brandproduct2="F.WAY"
      linkproduct2="mobiliario_corporativo/assento/parker"
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
      title: 'Pollock — Knoll'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>