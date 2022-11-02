<template>
  <div class="content">
    <MenuMobile />

    <!-- HERO -->
    <div class="product-highlight grid3">
      <div class="product-name">
        <ul class="product-info">
          <li class="graphik18 gray"><h2>Vitra</h2></li>
          <li class="pressura56 black"><h1>Hall Ply Wood</h1></li>
        </ul>
      </div>
      <img
        :src="require('~/assets/images/nuxt.jpg').placeholder"
        :data-srcset="
          require('~/assets/images/mobiliariocorporativo/colaborativos/3_Colaborativos/3_1_Hal_Chairs/3_1_19_Hall_Ply_Wood/3_1_19.jpg')
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
          require('~/assets/images/mobiliariocorporativo/colaborativos/3_Colaborativos/3_1_Hal_Chairs/3_1_19_Hall_Ply_Wood/3_1_19_Vertical.jpg')
            .srcSet
        "
        class="lazyload"
      />
      <img
        :src="require('~/assets/images/nuxt.jpg').placeholder"
        :data-srcset="
          require('~/assets/images/mobiliariocorporativo/colaborativos/3_Colaborativos/3_1_Hal_Chairs/3_1_19_Hall_Ply_Wood/3_1_19_Horizontal.jpg')
            .srcSet
        "
        class="lazyload coluna2-3"
      />
    </div>

    <!-- SERVIÇOS -->
    <Servicos />

    <!-- PRODUTOS RELACIONADOS -->

    <RelatedProduct
      imgproduct1="mobiliariocorporativo/colaborativos/3_Colaborativos/3_1_Hal_Chairs/3_1_16_Hall_Ply_Stool_High/3_1_16.jpg"
      nameproduct1="Hall Ply Stool High"
      brandproduct1="Vitra"
      linkproduct1="mobiliario_corporativo/colaborativo/hall-ply-stool-high"
      imgproduct2="mobiliariocorporativo/colaborativos/3_Colaborativos/3_1_Hal_Chairs/3_1_18_Hall_Ply_Stool_Medium/3_1_18.jpg"
      nameproduct2="Hall Ply Stool Medium"
      brandproduct2="Vitra"
      linkproduct2="mobiliario_corporativo/colaborativo/hall-ply-stool-medium"
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
      title: "Hall Ply Wood — Vitra",
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>
