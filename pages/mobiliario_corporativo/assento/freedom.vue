<template>
  <div class="content">
    <MenuMobile />

    <!-- HERO -->
    <div class="product-highlight grid3">
      <div class="product-name">
        <ul class="product-info">
          <li class="graphik18 gray"><h2>Humanscale</h2></li>
          <li class="pressura56 black"><h1>Freedom</h1></li>
        </ul>
      </div>
      <img
        :src="require('~/assets/images/nuxt.jpg').placeholder"
        :data-srcset="
          require('~/assets/images/mobiliariocorporativo/assentos/2_15_Humanscale_Freedom/hero.jpg')
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
          require('~/assets/images/mobiliariocorporativo/assentos/2_15_Humanscale_Freedom/vertical.jpg')
            .srcSet
        "
        class="lazyload"
      />
      <img
        :src="require('~/assets/images/nuxt.jpg').placeholder"
        :data-srcset="
          require('~/assets/images/mobiliariocorporativo/assentos/2_15_Humanscale_Freedom/horizontal.jpg')
            .srcSet
        "
        class="lazyload coluna2-3"
      />
      <div class="gi-txt graphik24 gray">
        Descrita pelo The New York Times como "o padrão-ouro nos assentos de
        escritório", a cadeira Freedom redefine o conceito de cadeiras de
        tarefas tradicionais. O designer Niels Diffrient teve como objetivo
        projetar uma cadeira de escritório que se adapte automaticamente ao
        usuário, permitindo que ele se mova livremente da postura para a
        postura. A abordagem única do Diffrient removeu complexidades
        encontradas em outras cadeiras, como alavancas reclináveis pesadas e
        mostradores de tensão traseira para uma cadeira de tarefa
        verdadeiramente ergonômica. Como resultado, ele desenvolveu um mecanismo
        reclinável que se ajusta perfeitamente ao usuário, reinventando
        definitivamente os assentos de tarefas modernos para serem
        verdadeiramente simples, funcionais e bonitos.
      </div>
    </div>

    <!-- INFORMAÇÕES TECNICAS -->
    <div class="informacoes-tecnicas grid3">
      <div class="linha-div" />
      <h3 class="title-info-tecnica pressura40">Informações técnicas</h3>

      <img
        :src="require('~/assets/images/nuxt.jpg').placeholder"
        :data-srcset="
          require('~/assets/images/mobiliariocorporativo/assentos/2_15_Humanscale_Freedom/desenho.jpg')
            .srcSet
        "
        class="lazyload desenho-tecnico coluna2"
      />
      <ul class="tabela coluna2">
        <li class="download pressura15 pink">
          <a
            href="/pdf/assentos/2_15_Humanscale_Freedom/hs_seating_freedom_brochure_1018.pdf"
            target="_blank"
            >Download do catálogo<span class="item-right"
              ><span class="arrow-btn">↓</span
              ><span class="arrow-btn-hover">↓</span></span
            ></a
          >
        </li>
      </ul>
    </div>

    <!-- SERVIÇOS -->
    <Servicos />

    <!-- PRODUTOS RELACIONADOS -->

    <RelatedProduct
      imgproduct1="mobiliariocorporativo/assentos/2_Assentos/2_6_Grand_Executive/2_6_4_Grand_Conference_Highback/2_6_4.jpg"
      nameproduct1="Grand Executive Conference Highback"
      brandproduct1="Vitra"
      linkproduct1="mobiliario_corporativo/assento/grand-executive-conference-highback"
      imgproduct2="mobiliariocorporativo/assentos/2_16_Humanscale_Different_World/hero.jpg"
      nameproduct2="Diffrient World"
      brandproduct2="Humanscale"
      linkproduct2="mobiliario_corporativo/assento/diffrient-world"
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
      title: "Freedom — Humanscale",
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>
