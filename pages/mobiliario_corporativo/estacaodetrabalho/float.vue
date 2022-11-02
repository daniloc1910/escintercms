<template>
  <div class="content">
    <MenuMobile />

    <!-- HERO -->
    <div class="product-highlight grid3">
      <div class="product-name">
        <ul class="product-info">
          <li class="graphik18 gray"><h2>Humanscale</h2></li>
          <li class="pressura56 black"><h1>Float</h1></li>
        </ul>
      </div>
      <img
        :src="require('~/assets/images/nuxt.jpg').placeholder"
        :data-srcset="
          require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_2_Regulaveis/1_2_4_Humanscale_Float/hero.jpg')
            .srcSet
        "
        class="product-image lazyload"
      />
    </div>

    <!-- GALERIA DE IMAGENS -->
    <div class="galeria-imagens grid3">
      <img
        :src="require('~/assets/images/nuxt.jpg').placeholder"
        :data-srcset="
          require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_2_Regulaveis/1_2_4_Humanscale_Float/vertical.jpg')
            .srcSet
        "
        class="lazyload"
      />
      <img
        :src="require('~/assets/images/nuxt.jpg').placeholder"
        :data-srcset="
          require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_2_Regulaveis/1_2_4_Humanscale_Float/horizontal.jpg')
            .srcSet
        "
        class="lazyload coluna2-3"
      />
      <div class="gi-txt graphik24 gray">
        Float é uma mesa de escritório vertical revolucionária que traz uma
        operação sem esforço para produtos tradicionais de mesa. A facilidade de
        uso está no coração do Float, pois se ajusta perfeitamente entre as
        posturas sentada e em pé sem interromper o fluxo de trabalho. Com uma
        estética mínima, Float complementa os escritórios tradicionais e os
        espaços de trabalho domésticos. Usando um mecanismo de contrapeso
        patenteado que substitui a tecnologia mais antiga, Float incentiva um
        espaço de trabalho ativo, permitindo que o usuário se mova sem esforço
        das posições sentado para de pé. Float também está disponível em uma
        opção elétrica.
      </div>
    </div>

    <!-- INFORMAÇÕES TECNICAS -->
    <div class="informacoes-tecnicas grid3">
      <div class="linha-div" />
      <h3 class="title-info-tecnica pressura40">Informações técnicas</h3>

      <img
        :src="require('~/assets/images/nuxt.jpg').placeholder"
        :data-srcset="
          require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_2_Regulaveis/1_2_4_Humanscale_Float/desenho.jpg')
            .srcSet
        "
        class="lazyload desenho-tecnico coluna2"
      />
      <ul class="tabela coluna2">
        <li class="pressura15 gray">
          Bases disponíveis<span class="item-right black">3</span>
        </li>
        <li class="pressura15 gray">
          Tampos disponíveis<span class="item-right black">5</span>
        </li>
      </ul>

      <ul class="tabela coluna3">
        <li class="download pressura15 pink">
          <a
            href="/pdf/estacaodetrabalho/1_2_Regulaveis/1_2_4_Humanscale_Float/Float_Brochure.pdf"
            target="_blank"
            >Download do catálogo<span class="item-right"
              ><span class="arrow-btn">↓</span
              ><span class="arrow-btn-hover">↓</span></span
            ></a
          >
        </li>
      </ul>
    </div>

    <!-- SERVIÇOS -->
    <Servicos />

    <!-- PRODUTOS RELACIONADOS -->

    <RelatedProduct
      imgproduct1="mobiliariocorporativo/estacaodetrabalho/1_2_Regulaveis/1_2_1_Escinter_Alto/hero.jpg"
      nameproduct1="Alto"
      brandproduct1="Escinter"
      linkproduct1="mobiliario_corporativo/estacaodetrabalho/alto"
      imgproduct2="mobiliariocorporativo/estacaodetrabalho/1_Estacoes_Trabalho/1_5_Dancing_Walls/1_5.jpg"
      nameproduct2="Dancing Walls"
      brandproduct2="Vitra"
      linkproduct2="mobiliario_corporativo/estacaodetrabalho/dancing-walls"
    />
  </div>
</template>

<style scoped>
.linha-div {
  grid-column: 1/4;
  height: 1px;
  background-color: #dedcdb;
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
import RelatedProduct from "~/components/RelatedProduct.vue";
import MenuMobile from "~/components/MenuMobile.vue";
import ProdutoVariacao from "~/components/ProdutoVariacao.vue";
import Servicos from "~/components/Servicos.vue";

export default {
  components: {
    RelatedProduct,
    MenuMobile,
    ProdutoVariacao,
    Servicos,
  },
  data() {
    return {
      title: "Float — Humanscale",
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>
