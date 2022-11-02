<template>
  <div class="content">
    <MenuMobile />

    <!-- HERO -->
    <div class="product-highlight grid3">
      <div class="product-name">
        <ul class="product-info">
          <li class="graphik18 gray"><h2>Vitra</h2></li>
          <li class="pressura56 black"><h1>ID Mesh</h1></li>
        </ul>
      </div>
      <img
        :src="require('~/assets/images/nuxt.jpg').placeholder"
        :data-srcset="
          require('~/assets/images/mobiliariocorporativo/assentos/2_Assentos/2_2_ID_Chairs/2_2_6_ID_Mesh/2_2_6.jpg')
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
          require('~/assets/images/mobiliariocorporativo/assentos/2_Assentos/2_2_ID_Chairs/2_2_6_ID_Mesh/2_2_6_Vertical.jpg')
            .srcSet
        "
        class="lazyload"
      />
      <img
        :src="require('~/assets/images/nuxt.jpg').placeholder"
        :data-srcset="
          require('~/assets/images/mobiliariocorporativo/assentos/2_Assentos/2_2_ID_Chairs/2_2_6_ID_Mesh/2_2_6_Horizontal.jpg')
            .srcSet
        "
        class="lazyload coluna2-3"
      />
    </div>

    <!-- SERVIÇOS -->
    <Servicos />

    <!-- PRODUTOS RELACIONADOS -->

    <RelatedProduct
      imgproduct1="mobiliariocorporativo/assentos/2_Assentos/2_2_ID_Chairs/2_2_5_ID_Trim_L/2_2_5.jpg"
      nameproduct1="ID Trim L"
      brandproduct1="Vitra"
      linkproduct1="mobiliario_corporativo/assento/id-trim-l"
      imgproduct2="mobiliariocorporativo/assentos/2_Assentos/2_2_ID_Chairs/2_2_7_ID_Visitor_Trim/2_2_7.jpg"
      nameproduct2="ID Visitor Trim"
      brandproduct2="Vitra"
      linkproduct2="mobiliario_corporativo/assento/id-visitor-trim"
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
      title: "ID Mesh — Vitra",
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>
