<template>
  <div class="content">
    <MenuMobile />

    <div class="category-list grid3">
      <h1 class="category-name pressura60">Divisórias</h1>

      <!-- Inwall IW25 -->
      <div class="divisoria-item">
        <div class="grid3divisoria">
          <div class="linha-div"></div>
          <div class="sub-category-name">
            <h2 class="sticky pressura40">Inwall IW25</h2>
          </div>
          <img
            class="img-destaque lazyload"
            :data-srcset="
              require('~/assets/images/mobiliariocorporativo/divisorias/iw25/iw25.jpeg')
                .srcSet
            "
          />
          <h4 class="iw25-description graphik24">
            Divisórias em vidro único temperado ou laminado e lapidado de
            8mm,10mm ou 12mm de espessura, montados no sistema de junta seca com
            estruturas em alumínio extrudido anodizado ou pintado, tendo 25mm de
            espessura por 35mm de altura.
          </h4>
          <img
            class="iw25-detail lazyload"
            :data-srcset="
              require('~/assets/images/mobiliariocorporativo/divisorias/iw25/iw25detail.png')
                .srcSet
            "
          />
        </div>
      </div>

      <!-- Inwall IW70 -->
      <div class="divisoria-item">
        <div class="grid3divisoria">
          <div class="linha-div"></div>
          <div class="sub-category-name">
            <h2 class="sticky pressura40">Inwall IW70</h2>
          </div>
          <img
            class="img-destaque lazyload"
            :data-srcset="
              require('~/assets/images/mobiliariocorporativo/divisorias/iw70/iw70.jpeg')
                .srcSet
            "
          />
          <h4 class="iw25-description graphik24">
            Divisórias em vidro único temperado ou laminado e lapidados e com
            estruturas em alumínio extrudido, anodizado ou pintado, tendo 70mm
            de espessura por 35mm de altura.
          </h4>
          <p class="iw25-detail graphik16 gray">
            Junção entre vidros em perfil de policarbonato autoadesivo com
            tratamento UV ou fita dupla autoadesiva dupla face.
          </p>
        </div>
      </div>

      <!-- Inwall IW86 -->
      <div class="divisoria-item">
        <div class="grid3divisoria">
          <div class="linha-div"></div>
          <div class="sub-category-name">
            <h2 class="sticky pressura40">Inwall IW86</h2>
          </div>
          <img
            class="img-destaque lazyload"
            :data-srcset="
              require('~/assets/images/mobiliariocorporativo/divisorias/iw86/iw86.jpeg')
                .srcSet
            "
          />
          <h4 class="iw25-detail graphik24">
            A linha IW 86 é versátil com ampla gama de configurações e soluções
            que se adequam a cada projeto.
            <br /><br />
            Composta por uma guiaestrutural e quadros de vidro e/ou acabamentos
            em madeira liso ou madeirados além de laminada de madeira natural,
            além dos componentes para acabamento e vedação acústica.
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.divisoria-item {
  grid-column: 1/4;
}

.grid3divisoria {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 28px;
}

.content {
  padding-top: 415px;
}

.category-name {
  grid-column: 1/4;
  margin-bottom: 37px;
}

.category-description {
  grid-column: 1/3;
  margin-bottom: 80px;
}

.linha-div {
  grid-column: 1/4;
  height: 1px;
  background-color: #dedcdb;
  margin-bottom: 40px;
}

.sub-category-name {
  grid-column: 1/2;
  grid-row: 2/5;
  margin-bottom: 55px;
}

.img-destaque {
  grid-column: 2/4;
  margin: 8px 0 28px 0;
}

.iw25-description {
  grid-column: 2/3;
  margin-bottom: 94px;
}

.iw25-detail {
  grid-column: 3/4;
  margin-bottom: 94px;
}

.sticky {
  position: sticky;
  top: 28px;
}

@media screen and (max-width: 1020px) {
  .divisoria-item {
    grid-column: 1/3;
  }

  .category-name {
    grid-column: 1/3;
    margin-bottom: 19px;
  }

  .grid3divisoria {
    grid-template-columns: repeat(2, 1fr);
  }

  .sub-category-name {
    grid-column: 1/3;
    margin-bottom: 28px;
  }

  .linha-div {
    grid-column: 1/3;
    margin-bottom: 40px;
  }

  .img-destaque {
    grid-column: 1/3;
    margin: 8px 0 28px 0;
  }

  .iw25-description {
    grid-column: 1/3;
    margin-bottom: 28px;
  }

  .iw25-detail {
    grid-column: 1/3;
    margin-bottom: 64px;
  }

  .content {
    padding-top: 157px;
  }
}
</style>

<script>
import Menu from "~/components/Menu.vue";
import MenuMobile from "~/components/MenuMobile.vue";

export default {
  components: {
    Menu,
    MenuMobile,
  },
  data() {
    return {
      title: "Divisórias",
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>
