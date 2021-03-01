<template>
<div class="content">
  <MenuMobile />

  <!-- HERO -->
  <div class="product-highlight grid3">
    <div class="product-name">
      <ul class="product-info">
        <li class="graphik18 gray"><h2>Humanscale</h2></li>
        <li class="pressura56 black"><h1>Summa</h1></li>
      </ul>
    </div>
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/assentos/2_18_Humanscale_Summa/hero.jpg').srcSet" class="product-image lazyload" />
  </div>



  <!-- GALERIA DE IMAGENS -->
  <div class="galeria-imagens grid3">
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/assentos/2_18_Humanscale_Summa/vertical.jpg').srcSet" class="lazyload" />
    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/assentos/2_18_Humanscale_Summa/horizontal.jpg').srcSet" class="lazyload coluna2-3" />
    <div class="gi-txt graphik24 gray">Projetada para os líderes mais dinâmicos da atualidade, a Summa é uma versátil cadeira de conferência de couro adequada para o escritório da esquina, a sala de reuniões, bem como o home office. Sua forma envolvente e materiais esculpidos convergem para um design verdadeiramente harmonioso que exala luxo em cada detalhe. Completamente personalizável, a Summa possui uma paleta estética e sofisticada definida que eleva a presença de uma marca dentro de qualquer ambiente. Com uma parte de trás estofada em madeira artesanal ou trabalhada, a Summa é acompanhada pela coleção de couro sem cromo da Humanscale.</div>
  </div>



  <!-- INFORMAÇÕES TECNICAS -->
  <div class="informacoes-tecnicas grid3">
    <div class="linha-div" />
    <h3 class="title-info-tecnica pressura40">Informações técnicas</h3>

    <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/assentos/2_18_Humanscale_Summa/desenho.jpg').srcSet" class="lazyload desenho-tecnico coluna2" />
    <ul class="tabela coluna2">
      <li class="pressura15 gray">Cores disponíveis<span class="item-right black">7</span></li>
      <li class="pressura15 gray">Opções de base<span class="item-right black">2</span></li>
    </ul>

   <ul class="tabela coluna3">
      <li class="download pressura15 pink"><a href="/pdf/assentos/2_18_Humanscale_Summa/summa_brochure_0819_v23.pdf" target="_blank">Download do catálogo<span class="item-right"><span class="arrow-btn">↓</span><span class="arrow-btn-hover">↓</span></span></a></li>
    </ul>
  </div>



  <!-- SERVIÇOS -->
    <Servicos />



  <!-- PRODUTOS RELACIONADOS -->
  
    <RelatedProduct
      imgproduct1="mobiliariocorporativo/assentos/2_17_Humanscale_Trea/hero.jpg"
      nameproduct1="Trea"
      brandproduct1="Humanscale"
      linkproduct1="mobiliario_corporativo/assento/trea"

      imgproduct2="mobiliariocorporativo/assentos/2_19_Humanscale_Cinto/hero.jpg"
      nameproduct2="Cinto"
      brandproduct2="Humanscale"
      linkproduct2="mobiliario_corporativo/assento/cinto"
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
      title: 'Summa — Humanscale'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>