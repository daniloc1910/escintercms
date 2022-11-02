<template>
  <div class="content">
    <MenuMobile />

    <!-- HERO -->
    <div class="product-highlight grid3">
      <div class="product-name">
        <ul class="product-info">
          <li class="graphik18 gray"><h2>Vitra</h2></li>
          <li class="pressura56 black"><h1>Hall Tube</h1></li>
        </ul>
      </div>
      <img
        :src="require('~/assets/images/nuxt.jpg').placeholder"
        :data-srcset="
          require('~/assets/images/mobiliariocorporativo/colaborativos/3_Colaborativos/3_1_Hal_Chairs/3_1_9_Hall_Tube/3_1_9.jpg')
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
          require('~/assets/images/mobiliariocorporativo/colaborativos/3_Colaborativos/3_1_Hal_Chairs/3_1_9_Hall_Tube/3_1_9_Vertical.jpg')
            .srcSet
        "
        class="lazyload"
      />
      <img
        :src="require('~/assets/images/nuxt.jpg').placeholder"
        :data-srcset="
          require('~/assets/images/mobiliariocorporativo/colaborativos/3_Colaborativos/3_1_Hal_Chairs/3_1_9_Hall_Tube/3_1_9_Horizontal.jpg')
            .srcSet
        "
        class="lazyload coluna2-3"
      />
    </div>

    <!-- SERVIÇOS -->
    <Servicos />

    <!-- PRODUTOS RELACIONADOS -->

    <RelatedProduct
      imgproduct1="mobiliariocorporativo/colaborativos/3_Colaborativos/3_1_Hal_Chairs/3_1_5_Hall_Studio/3_1_5.jpg"
      nameproduct1="Hall Studio"
      brandproduct1="Vitra"
      linkproduct1="mobiliario_corporativo/colaborativo/hall-studio"
      imgproduct2="mobiliariocorporativo/colaborativos/3_Colaborativos/3_1_Hal_Chairs/3_1_8_Hall_Wood/3_1_8.jpg"
      nameproduct2="Hall Wood"
      brandproduct2="Vitra"
      linkproduct2="mobiliario_corporativo/colaborativo/hall-wood"
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
      title: "Hall Tube — Vitra",
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>
