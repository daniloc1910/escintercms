<template>
<div class="content">
  <MenuMobile />

  <!-- HERO -->
  <div class="product-highlight grid3">
    <div class="product-name">
      <ul class="product-info">
        <li class="graphik18 gray"><h2>Frisokar</h2></li>
        <li class="pressura56 black"><h1>Simple</h1></li>
      </ul>
    </div>
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/assentos/2_12_Frisokar_Simple/hero.jpg').srcSet" class="product-image lazyload" />
  </div>



  <!-- GALERIA DE IMAGENS -->
  <div class="galeria-imagens grid3">
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/assentos/2_12_Frisokar_Simple/vertical.jpg').srcSet" class="lazyload" />
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/assentos/2_12_Frisokar_Simple/horizontal.jpg').srcSet" class="lazyload coluna2-3" />
    <div class="gi-txt graphik24 gray">Simple é, em apenas um produto, design, elegância e sofisticação. A altura do encosto da cadeira de escritório é ajustável e juntamente com a inclinação proporcionam perfeita ergonomia e conforto, tornando Simple essencial para ambientes corporativos. </div>
  </div>



  <!-- INFORMAÇÕES TECNICAS -->
  <div class="informacoes-tecnicas grid3">
    <div class="linha-div" />
    <h3 class="title-info-tecnica pressura40">Informações técnicas</h3>

    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/assentos/2_12_Frisokar_Simple/desenho.jpg').srcSet" class="lazyload desenho-tecnico coluna2" />
    <ul class="tabela coluna2">
<li class="download pressura15 pink"><a href="/pdf/assentos/2_12_Frisokar_Simple/Simple.pdf" target="_blank">Download do catálogo<span class="item-right"><span class="arrow-btn">↓</span><span class="arrow-btn-hover">↓</span></span></a></li>
    </ul>
  </div>



  <!-- SERVIÇOS -->
    <Servicos />



  <!-- PRODUTOS RELACIONADOS -->
  
    <RelatedProduct
      imgproduct1="mobiliariocorporativo/assentos/2_11_Frisokar_Joy_Addit/hero.jpg"
      nameproduct1="Joy Addit"
      brandproduct1="Frisokar"
      linkproduct1="mobiliario_corporativo/assento/joy-addit"

      imgproduct2="mobiliariocorporativo/assentos/2_13_Frisokar_Sense/hero.jpg"
      nameproduct2="Sense"
      brandproduct2="Frisokar"
      linkproduct2="mobiliario_corporativo/assento/sense"
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
      title: 'Simple — Frisokar'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>