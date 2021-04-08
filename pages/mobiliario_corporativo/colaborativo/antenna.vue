<template>
  <div class="content">
    <MenuMobile />

    <!-- HERO -->
    <div class="product-highlight grid3">
      <div class="product-name">
        <ul class="product-info">
          <li class="graphik18 gray"><h2>Knoll</h2></li>
          <li class="pressura56 black"><h1>Antenna</h1></li>
        </ul>
      </div>
      <img
        :src="require('~/assets/images/nuxt.jpg').placeholder"
        :data-srcset="
          require('~/assets/images/mobiliariocorporativo/colaborativos/5_5_Bancada_Altas/5_5_2_Knoll_Antenna/hero.jpg')
            .srcSet
        "
        class="product-image lazyload"
      />
    </div>

    <!-- SERVIÇOS -->
    <Servicos />

    <!-- PRODUTOS RELACIONADOS -->

    <RelatedProduct
      imgproduct1="mobiliariocorporativo/colaborativos/5_5_Bancada_Altas/5_5_3_Frisokar_Pix/hero.jpg"
      nameproduct1="Pix"
      brandproduct1="Frisokar"
      linkproduct1="mobiliario_corporativo/colaborativo/point"
      imgproduct2="mobiliariocorporativo/colaborativos/5_5_Bancada_Altas/5_5_1_Escinter_Point/hero.jpg"
      nameproduct2="Point"
      brandproduct2="Escinter"
      linkproduct2="mobiliario_corporativo/colaborativo/point"
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
    Servicos
  },
  data() {
    return {
      title: "Point — Escinter"
    };
  },
  head() {
    return {
      title: this.title
    };
  }
};
</script>
