<template>
  <div class="content">
    <MenuMobile />

    <!-- HERO -->
    <div class="product-highlight grid3">
      <div class="product-name">
        <ul class="product-info">
          <li class="graphik18 gray"><h2>Vitra</h2></li>
          <li class="pressura56 black"><h1>ID Visitor Soft</h1></li>
        </ul>
      </div>
      <img
        :src="require('~/assets/images/nuxt.jpg').placeholder"
        :data-srcset="
          require('~/assets/images/mobiliariocorporativo/assentos/2_Assentos/2_2_ID_Chairs/2_2_8_ID_Visitor_Soft/2_2_8.jpg')
            .srcSet
        "
        class="product-image lazyload"
      />
    </div>

    <!-- SERVIÇOS -->
    <Servicos />

    <!-- PRODUTOS RELACIONADOS -->

    <RelatedProduct
      imgproduct1="mobiliariocorporativo/assentos/2_Assentos/2_2_ID_Chairs/2_2_7_ID_Visitor_Trim/2_2_7.jpg"
      nameproduct1="ID Visitor Trim"
      brandproduct1="Vitra"
      linkproduct1="mobiliario_corporativo/assento/id-visitor-trim"
      imgproduct2="mobiliariocorporativo/assentos/2_Assentos/2_2_ID_Chairs/2_2_9_ID_Visitor_Air/2_2_9.jpg"
      nameproduct2="ID Visitor Air"
      brandproduct2="Vitra"
      linkproduct2="mobiliario_corporativo/assento/id-visitor-air"
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
      title: "ID Visitor Soft — Vitra",
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>
