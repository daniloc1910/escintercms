<template>
<div class="content">
  <MenuMobile />

  <!-- HERO -->
  <div class="product-highlight grid3">
    <div class="product-name">
      <ul class="product-info">
        <li class="graphik18 gray"><h2>F.WAY</h2></li>
        <li class="pressura56 black"><h1>Nox</h1></li>
      </ul>
    </div>
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/assentos/2_9_FWay_Nox/hero.jpg').srcSet" class="product-image lazyload" />
  </div>



  <!-- GALERIA DE IMAGENS -->
  <div class="galeria-imagens grid3">
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/assentos/2_9_FWay_Nox/vertical.jpg').srcSet" class="lazyload" />
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/assentos/2_9_FWay_Nox/horizontal.jpg').srcSet" class="lazyload coluna2-3" />
    <div class="gi-txt graphik24 gray">Com Design de Lucas Carareto, Nox traz como marca registrada um traço original que combina assento e encosto, identificando sua forte personalidade. Nox é a poltrona que se molda ao corpo: encosto ergonômico, assento slide e braços com regulagem de altura garantem conforto e bem-estar por longos períodos.</div>
  </div>



  <!-- VARIAÇÕES -->
  <div class="variacoes grid3">
    <div class="linha-div" />
    <h3 class="variacoes-title coluna1-3 pressura40">Variações</h3>

    <ProdutoVariacao
      imgproduct="mobiliariocorporativo/assentos/2_9_FWay_Nox/hero.jpg"
      nameproduct="Nox"
    /> 

    <ProdutoVariacao
      imgproduct="mobiliariocorporativo/assentos/2_9_FWay_Nox/noxweb.jpg"
      nameproduct="Nox Web"
    /> 

    <ProdutoVariacao
      imgproduct="mobiliariocorporativo/assentos/2_9_FWay_Nox/noxtapecada.jpg"
      nameproduct="Nox Tapeçada"
    /> 
  
  </div>



  <!-- SERVIÇOS -->
    <Servicos />



  <!-- PRODUTOS RELACIONADOS -->
  
    <RelatedProduct
      imgproduct1="mobiliariocorporativo/assentos/2_8_FWay_Parker/hero.jpg"
      nameproduct1="Parker"
      brandproduct1="F.WAY"
      linkproduct1="mobiliario_corporativo/assento/parker"

      imgproduct2="mobiliariocorporativo/assentos/2_10_FWay_Ayra/hero.jpg"
      nameproduct2="Ayra"
      brandproduct2="F.WAY"
      linkproduct2="mobiliario_corporativo/assento/ayra"
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
      title: 'Nox — F.WAY'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>