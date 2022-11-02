<template>
  <div class="content">
    <MenuMobile />

    <!-- HERO -->
    <div class="product-highlight grid3">
      <div class="product-name">
        <ul class="product-info">
          <li class="graphik18 gray"><h2>Vitra</h2></li>
          <li class="pressura56 black"><h1>AC 5 Work</h1></li>
        </ul>
      </div>
      <img
        :src="require('~/assets/images/nuxt.jpg').placeholder"
        :data-srcset="
          require('~/assets/images/mobiliariocorporativo/assentos/2_Assentos/2_3_AC_5_Chairs/2_3_3_AC_5_Work/2_3_3.jpg')
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
          require('~/assets/images/mobiliariocorporativo/assentos/2_Assentos/2_3_AC_5_Chairs/2_3_3_AC_5_Work/2_3_3_Vertical.jpg')
            .srcSet
        "
        class="lazyload"
      />
      <img
        :src="require('~/assets/images/nuxt.jpg').placeholder"
        :data-srcset="
          require('~/assets/images/mobiliariocorporativo/assentos/2_Assentos/2_3_AC_5_Chairs/2_3_3_AC_5_Work/2_3_3_Horizontal.jpg')
            .srcSet
        "
        class="lazyload coluna2-3"
      />
    </div>

    <!-- SERVIÇOS -->
    <Servicos />

    <!-- PRODUTOS RELACIONADOS -->

    <RelatedProduct
      imgproduct1="mobiliariocorporativo/assentos/2_Assentos/2_3_AC_5_Chairs/2_3_1_AC_5_Meet/2_3_1.jpg"
      nameproduct1="AC 5 Meet"
      brandproduct1="Vitra"
      linkproduct1="mobiliario_corporativo/assento/ac-5-meet"
      imgproduct2="mobiliariocorporativo/assentos/2_Assentos/2_3_AC_5_Chairs/2_3_2_AC_5_Studio/2_3_2.jpg"
      nameproduct2="AC 5 Studio"
      brandproduct2="Vitra"
      linkproduct2="mobiliario_corporativo/assento/ac-5-studio"
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
      title: "AC 5 Work — Vitra",
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>
