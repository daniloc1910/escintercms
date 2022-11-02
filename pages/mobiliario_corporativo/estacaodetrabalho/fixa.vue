<template>
  <div class="content">
    <MenuMobile />

    <nuxt-child />

    <!-- SERVIÇOS -->
    <Servicos />

    <!-- PRODUTOS RELACIONADOS -->

    <RelatedProduct
      imgproduct1="mobiliariocorporativo/estacaodetrabalho/1_Estacoes_Trabalho/1_1_Comma/1_1.jpg"
      nameproduct1="Comma"
      brandproduct1="Vitra"
      linkproduct1="mobiliario_corporativo/estacaodetrabalho/comma"
      imgproduct2="mobiliariocorporativo/estacaodetrabalho/1_2_Regulaveis/1_2_1_Escinter_Alto/hero.jpg"
      nameproduct2="Alto"
      brandproduct2="Escinter"
      linkproduct2="mobiliario_corporativo/estacaodetrabalho/alto"
    />
  </div>
</template>

<script>
export default {
  scrollToTop: true,
};
</script>

<style scoped>
.linha-div {
  grid-column: 1/4;
  height: 1px;
  background-color: #dedcdb;
  margin-bottom: 40px;
}

.page-enter-active,
.page-leave-active {
  transition-duration: 0.2s !important;
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
      title: "Target — Escinter",
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>
