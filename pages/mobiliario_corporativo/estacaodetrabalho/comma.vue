<template>
  <div class="content">
    <MenuMobile />

    <!-- HERO -->
    <div class="product-highlight grid3">
      <div class="product-name">
        <ul class="product-info">
          <li class="graphik18 gray"><h2>Vitra</h2></li>
          <li class="pressura56 black"><h1>Comma</h1></li>
        </ul>
      </div>
      <img
        :src="require('~/assets/images/nuxt.jpg').placeholder"
        :data-srcset="
          require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_Estacoes_Trabalho/1_1_Comma/1_1.jpg')
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
          require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_Estacoes_Trabalho/1_1_Comma/1_1_vert.jpg')
            .srcSet
        "
        class="lazyload"
      />
      <img
        :src="require('~/assets/images/nuxt.jpg').placeholder"
        :data-srcset="
          require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_Estacoes_Trabalho/1_1_Comma/1_1_hor.jpg')
            .srcSet
        "
        class="lazyload coluna2-3"
      />
    </div>

    <!-- SERVIÇOS -->
    <Servicos />

    <!-- PRODUTOS RELACIONADOS -->

    <RelatedProduct
      imgproduct1="mobiliariocorporativo/estacaodetrabalho/1_3_Executivo/1_3_1_Escinter_Target/hero.jpg"
      nameproduct1="Target"
      brandproduct1="Escinter"
      linkproduct1="mobiliario_corporativo/estacaodetrabalho/executivo-target"
      imgproduct2="mobiliariocorporativo/estacaodetrabalho/1_Estacoes_Trabalho/1_2_Alcove_Plus/1_2.jpg"
      nameproduct2="Alcove Plus"
      brandproduct2="Vitra"
      linkproduct2="mobiliario_corporativo/estacaodetrabalho/alcove-plus"
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
      title: "Comma — Vitra",
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>
