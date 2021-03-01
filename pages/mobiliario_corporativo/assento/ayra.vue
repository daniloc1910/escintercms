<template>
<div class="content">
  <MenuMobile />

  <!-- HERO -->
  <div class="product-highlight grid3">
    <div class="product-name">
      <ul class="product-info">
        <li class="graphik18 gray"><h2>F.WAY</h2></li>
        <li class="pressura56 black"><h1>Ayra</h1></li>
      </ul>
    </div>
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/assentos/2_10_FWay_Ayra/hero.jpg').srcSet" class="product-image lazyload" />
  </div>



  <!-- GALERIA DE IMAGENS -->
  <div class="galeria-imagens grid3">
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/assentos/2_10_FWay_Ayra/vertical.jpg').srcSet" class="lazyload" />
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/assentos/2_10_FWay_Ayra/horizontal.jpg').srcSet" class="lazyload coluna2-3" />
    <div class="gi-txt graphik24 gray">Com Design de Christoph Jenni, Ayra supera um desafio de design ao combinar o sintético ao orgânico. Em um objeto conciso, o minimalismo se encontra em perfeita consonância com texturas e formas extremamente humanas. Os elementos estruturais da Ayra são baseados na excelência da indústria. Eles exploram o metal, trabalhado em um de seus processos mais desafiadores, moldado em formas orgânicas, com junções fluidas e mecanismos perfeitos.</div>
  </div>



  <!-- VARIAÇÕES -->
  <div class="variacoes grid3">
    <div class="linha-div" />
    <h3 class="variacoes-title coluna1-3 pressura40">Variações</h3>

    <ProdutoVariacao
      imgproduct="mobiliariocorporativo/assentos/2_10_FWay_Ayra/ayrabracotapecado.jpg"
      nameproduct="Ayra alta com braços tapeçados"
    /> 

    <ProdutoVariacao
      imgproduct="mobiliariocorporativo/assentos/2_10_FWay_Ayra/ayratrespolobracotapecado.jpg"
      nameproduct="Ayra base trespolo com braços tapeçados"
    /> 

    <ProdutoVariacao
      imgproduct="mobiliariocorporativo/assentos/2_10_FWay_Ayra/hero.jpg"
      nameproduct="Ayra com encosto de cabeça"
    /> 

    <ProdutoVariacao
      imgproduct="mobiliariocorporativo/assentos/2_10_FWay_Ayra/ayraalta.jpg"
      nameproduct="Ayra alta"
    /> 

    <ProdutoVariacao
      imgproduct="mobiliariocorporativo/assentos/2_10_FWay_Ayra/ayrabaseterspolo.jpg"
      nameproduct="Ayra base trespolo"
    /> 
  
  </div>



  <!-- SERVIÇOS -->
    <Servicos />



  <!-- PRODUTOS RELACIONADOS -->
  
    <RelatedProduct
      imgproduct1="mobiliariocorporativo/assentos/2_9_FWay_Nox/hero.jpg"
      nameproduct1="Nox"
      brandproduct1="F.WAY"
      linkproduct1="mobiliario_corporativo/assento/nox"

      imgproduct2="mobiliariocorporativo/assentos/2_11_Frisokar_Agile/hero.jpg"
      nameproduct2="Agile"
      brandproduct2="F.WAY"
      linkproduct2="mobiliario_corporativo/assento/agile"
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
      title: 'Ayra — F.WAY'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>