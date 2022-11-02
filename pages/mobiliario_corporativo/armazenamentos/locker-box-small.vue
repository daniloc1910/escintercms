<template>
  <div class="content">
    <MenuMobile />

    <!-- HERO -->
    <div class="product-highlight grid3">
      <div class="product-name">
        <ul class="product-info">
          <li class="graphik18 gray"><h2>Vitra</h2></li>
          <li class="pressura56 black"><h1>Locker Box Small</h1></li>
        </ul>
      </div>
      <img
        :src="require('~/assets/images/nuxt.jpg').placeholder"
        :data-srcset="
          require('~/assets/images/mobiliariocorporativo/armazenamento/4_Armazenamento/4_2_Locker_Box_Small/4_2.jpg')
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
          require('~/assets/images/mobiliariocorporativo/armazenamento/4_Armazenamento/4_2_Locker_Box_Small/4_2_Vertical.jpg')
            .srcSet
        "
        class="lazyload"
      />
      <img
        :src="require('~/assets/images/nuxt.jpg').placeholder"
        :data-srcset="
          require('~/assets/images/mobiliariocorporativo/armazenamento/4_Armazenamento/4_2_Locker_Box_Small/4_2_Horizontal.jpg')
            .srcSet
        "
        class="lazyload coluna2-3"
      />
    </div>

    <!-- SERVIÇOS -->
    <Servicos />

    <!-- PRODUTOS RELACIONADOS -->

    <RelatedProduct
      imgproduct1="mobiliariocorporativo/armazenamento/4_Armazenamento/4_1_Toolbox_RE/4_1.jpg"
      nameproduct1="Toolbox RE"
      brandproduct1="Vitra"
      linkproduct1="mobiliario_corporativo/armazenamentos/toolbox-re"
      imgproduct2="mobiliariocorporativo/armazenamento/4_Armazenamento/4_3_Locker_Box/4_3.jpg"
      nameproduct2="Locker Box"
      brandproduct2="Vitra"
      linkproduct2="mobiliario_corporativo/armazenamentos/locker-box"
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
      title: "Locker Box Small — Vitra",
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>
