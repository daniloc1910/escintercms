<template>
  <div class="content">
    <MenuMobile />

    <!-- HERO -->
    <div class="product-highlight grid3">
      <div class="product-name">
        <ul class="product-info">
          <li class="graphik18 gray"><h2>Vitra</h2></li>
          <li class="pressura56 black"><h1>Grand Executive Highback</h1></li>
        </ul>
      </div>
      <img
        :src="require('~/assets/images/nuxt.jpg').placeholder"
        :data-srcset="
          require('~/assets/images/mobiliariocorporativo/assentos/2_Assentos/2_6_Grand_Executive/2_6_1_Grand_Executive_Higback/2_6_1.jpg')
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
          require('~/assets/images/mobiliariocorporativo/assentos/2_Assentos/2_6_Grand_Executive/2_6_1_Grand_Executive_Higback/2_6_1_Vertical.jpg')
            .srcSet
        "
        class="lazyload"
      />
      <img
        :src="require('~/assets/images/nuxt.jpg').placeholder"
        :data-srcset="
          require('~/assets/images/mobiliariocorporativo/assentos/2_Assentos/2_6_Grand_Executive/2_6_1_Grand_Executive_Higback/2_6_1_Horizontal.jpg')
            .srcSet
        "
        class="lazyload coluna2-3"
      />
    </div>

    <!-- SERVIÇOS -->
    <Servicos />

    <!-- PRODUTOS RELACIONADOS -->

    <RelatedProduct
      imgproduct1="mobiliariocorporativo/assentos/2_Assentos/2_4_Fauteuil_Direction/2_4.jpg"
      nameproduct1="Fauteuil Direction"
      brandproduct1="Vitra"
      linkproduct1="mobiliario_corporativo/assento/fauteuil-direction"
      imgproduct2="mobiliariocorporativo/assentos/2_Assentos/2_6_Grand_Executive/2_6_2_Grand_Executive_Lowback/2_6_2.jpg"
      nameproduct2="Grand Executive Lowback"
      brandproduct2="Vitra"
      linkproduct2="mobiliario_corporativo/assento/grand-executive-lowback"
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
      title: "Grand Executive Highback — Vitra",
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>
