<template>
  <div class="content">
    <MenuMobile />

    <!-- HERO -->
    <div class="product-highlight grid3">
      <div class="product-name">
        <ul class="product-info">
          <li class="graphik18 gray"><h2>F.WAY</h2></li>
          <li class="pressura56 black"><h1>Parker</h1></li>
        </ul>
      </div>
      <img
        :src="require('~/assets/images/nuxt.jpg').placeholder"
        :data-srcset="
          require('~/assets/images/mobiliariocorporativo/assentos/2_8_FWay_Parker/hero.jpg')
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
          require('~/assets/images/mobiliariocorporativo/assentos/2_8_FWay_Parker/vertical.jpg')
            .srcSet
        "
        class="lazyload"
      />
      <img
        :src="require('~/assets/images/nuxt.jpg').placeholder"
        :data-srcset="
          require('~/assets/images/mobiliariocorporativo/assentos/2_8_FWay_Parker/horizontal.jpg')
            .srcSet
        "
        class="lazyload coluna2-3"
      />
      <div class="gi-txt graphik24 gray">
        Com design de Christoph Jenni, Parker esbanja funcionalidade e
        minimalismo. Todos os ajustes ergonômicos da cadeira estão sutilmente
        organizados em um desenho limpo e intuitivo. Além de valorizar a
        combinação de materiais e texturas, a união entre o encosto e o assento
        ajuda a manter a sensação de organização e unidade no ambiente.
      </div>
    </div>

    <!-- SERVIÇOS -->
    <Servicos />

    <!-- PRODUTOS RELACIONADOS -->

    <RelatedProduct
      imgproduct1="mobiliariocorporativo/assentos/2_8_FWay_Parker/hero.jpg"
      nameproduct1="Parker"
      brandproduct1="F.WAY"
      linkproduct1="mobiliario_corporativo/assento/parker"
      imgproduct2="mobiliariocorporativo/assentos/2_9_FWay_Nox/hero.jpg"
      nameproduct2="Nox"
      brandproduct2="F.WAY"
      linkproduct2="mobiliario_corporativo/assento/nox"
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
      title: "Parker — F.WAY",
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>
