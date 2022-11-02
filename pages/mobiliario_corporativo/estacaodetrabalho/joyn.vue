<template>
  <div class="content">
    <MenuMobile />

    <!-- HERO -->
    <div class="product-highlight grid3">
      <div class="product-name">
        <ul class="product-info">
          <li class="graphik18 gray"><h2>Vitra</h2></li>
          <li class="pressura56 black"><h1>Joyn</h1></li>
        </ul>
      </div>
      <img
        :src="require('~/assets/images/nuxt.jpg').placeholder"
        :data-srcset="
          require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_Estacoes_Trabalho/1_4_Joyn/1_4.jpg')
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
          require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_Estacoes_Trabalho/1_4_Joyn/1_4_Vertical.jpg')
            .srcSet
        "
        class="lazyload"
      />
      <img
        :src="require('~/assets/images/nuxt.jpg').placeholder"
        :data-srcset="
          require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_Estacoes_Trabalho/1_4_Joyn/1_4_Horizontal.jpg')
            .srcSet
        "
        class="lazyload coluna2-3"
      />
    </div>

    <!-- SERVIÇOS -->
    <Servicos />

    <!-- PRODUTOS RELACIONADOS -->

    <RelatedProduct
      imgproduct1="mobiliariocorporativo/estacaodetrabalho/1_Estacoes_Trabalho/1_3_Workbays/1_3.jpg"
      nameproduct1="Workbays"
      brandproduct1="Vitra"
      linkproduct1="mobiliario_corporativo/estacaodetrabalho/workbays"
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
      title: "Joyn — Vitra",
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>
