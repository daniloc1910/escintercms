<template>
<div class="content">
  <MenuMobile />

  <!-- HERO -->
  <div class="product-highlight grid3">
    <div class="product-name">
      <ul class="product-info">
        <li class="graphik18 gray"><h2>Knoll</h2></li>
        <li class="pressura56 black"><h1>Life</h1></li>
      </ul>
    </div>
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/assentos/2_6_Knoll_Life/hero.jpg').srcSet" class="product-image lazyload" />
  </div>



  <!-- GALERIA DE IMAGENS -->
  <div class="galeria-imagens grid3">
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/assentos/2_6_Knoll_Life/vertical.jpg').srcSet" class="lazyload" />
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/assentos/2_6_Knoll_Life/horizontal.jpg').srcSet" class="lazyload coluna2-3" />
    <div class="gi-txt graphik24 gray">Criada pelo Formway Design em 2002, Life define o padrão de design sofisticado e conforto sem esforço. O controle avançado responde automaticamente às mudanças no peso corporal, fornecendo suporte ergonômico personalizado.</div>
  </div>



  <!-- INFORMAÇÕES TECNICAS -->
  <div class="informacoes-tecnicas grid3">
    <div class="linha-div" />
    <h3 class="title-info-tecnica pressura40">Informações técnicas</h3>

    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/assentos/2_6_Knoll_Life/desenho.jpg').srcSet" class="lazyload desenho-tecnico coluna2" />
    <ul class="tabela coluna2">
      <li class="pressura15 gray">Cores de encosto disponíveis<span class="item-right black">14</span></li>
      <li class="pressura15 gray">Cores de assento disponíveis<span class="item-right black">9</span></li>
    </ul>

    <ul class="tabela coluna3">
      <li class="download pressura15 pink"><a href="/pdf/assentos/2_6_Knoll_Life/life_brochure.pdf" target="_blank">Download do catálogo<span class="item-right"><span class="arrow-btn">↓</span><span class="arrow-btn-hover">↓</span></span></a></li>
      <li class="download pressura15 pink"><a href="/pdf/assentos/2_6_Knoll_Life/Life_Dimensions.pdf" target="_blank">Download das especificações técnicas<span class="item-right"><span class="arrow-btn">↓</span><span class="arrow-btn-hover">↓</span></span></a></li>
    </ul>
  </div>



  <!-- SERVIÇOS -->
    <Servicos />



  <!-- PRODUTOS RELACIONADOS -->
  
    <RelatedProduct
      imgproduct1="mobiliariocorporativo/assentos/2_5_Knoll_Multigeneration/hero.jpg"
      nameproduct1="Multigeneration"
      brandproduct1="Knoll"
      linkproduct1="mobiliario_corporativo/assento/multigeneration"

      imgproduct2="mobiliariocorporativo/assentos/2_7_Knoll_Pollock/hero.jpg"
      nameproduct2="Pollock"
      brandproduct2="Knoll"
      linkproduct2="mobiliario_corporativo/assento/pollock"
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
      title: 'Life — Knoll'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>