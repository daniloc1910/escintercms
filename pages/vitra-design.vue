<template>
  <div class="content">
    <MenuMobile />

    <div class="backgroundwhite"></div>

    <div class="grid3 knoll-history">
      <h1 class="servicos-title pressura60">
        Conheça mais sobre a marca que tem compromisso com a inovação e o design
        moderno.
      </h1>
      <h4 class="servicos-description graphik24 gray">
        Por quase 80 anos, Knoll permaneceu fiel à filosofia de design da
        Bauhaus de que os móveis modernos devem complementar o espaço
        arquitetônico, não competir com ele. Na Knoll, o design moderno tem sido
        nosso princípio orientador e nossa paixão foi compartilhada por clientes
        e profissionais de design em todo o mundo.
      </h4>

      <p class="knoll-history graphik18">
        Os fundadores, Hans e Florence Knoll, abraçaram o espírito criativo da
        Bauhaus School e da Cranbrook Academy of Art para criar novos tipos de
        móveis e ambientes para o local de trabalho. Sua abordagem, em que o
        artesanato se junta à tecnologia por meio do uso do design, ancora nossa
        perspectiva e molda os valores que buscamos viver hoje.
        <br /><br />
        Uma longa história de colaborações, de modernistas pioneiros a designers
        contemporâneos ousados, define não apenas o passado, mas o futuro da
        Knoll por meio de parcerias ativas, recentes e futuras com David
        Rockwell, Antenna Design, Barber Osgerby, Formway Design, Don Chadwick,
        David Adjaye e Rem Koolhaas.
      </p>

      <!--      <div class="profile-history">
        <img
          :data-srcset="
            require('~/assets/images/knoll-design/haus-florence.png').srcSet
          "
          class="lazyload"
        />
        <ul style="margin-top: 16px">
          <li class="graphik16">Hans and Florence Knoll</li>
          <li class="graphik16 gray">Fundadores da Knoll</li>
        </ul>
      </div>-->
    </div>

    <div class="grid3">
      <div class="designers-grid">
        <div class="linha-div"></div>
        <div class="grid6">
          <div class="title-history">
            <ul class="title-history-sticky">
              <h3 class="pressura40 title-history-title">
                Os designers mais marcantes
              </h3>
              <li class="graphik18">
                <a
                  class="pink"
                  href="https://www.vitra.com/en-br/about-vitra/designer"
                  target="_blank"
                  >Conheça todos no site da Vitra
                  <span class="pressura21">↗</span></a
                >
              </li>
            </ul>
          </div>

          <DesignerItem
            desginerprofile="vitra/hans-coray.jpg"
            designername="Hans Coray"
          />

          <DesignerItem
            desginerprofile="vitra/hella-jongerius.jpg"
            designername="Hella Jongerius"
          />

          <DesignerItem
            desginerprofile="vitra/herzog-de-meuron.jpg"
            designername="Herzog & de Meuron"
          />

          <DesignerItem
            desginerprofile="vitra/isamu-noguchi.jpg"
            designername="Isamu Noguchi"
          />

          <DesignerItem
            desginerprofile="vitra/ronan-erwan-bouroullec.jpg"
            designername="Ronan & Erwan Bouroullec"
          />

          <DesignerItem
            desginerprofile="vitra/sanaa.jpg"
            designername="SANAA"
          />

          <DesignerItem
            desginerprofile="vitra/sevil-peach.jpg"
            designername="Sevil Peach"
          />

          <DesignerItem
            desginerprofile="vitra/sori-yanagi.jpg"
            designername="Sori Yanagi"
          />

          <DesignerItem
            desginerprofile="vitra/thomas-schutte.jpg"
            designername="Thomas Schütte"
          />

          <DesignerItem
            desginerprofile="vitra/zaha-hadid.jpg"
            designername="Zaha Hadid"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.backgroundwhite {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: white;
  z-index: -1;
  margin-top: -415px;
}

.content {
  padding-top: 415px;
}

.servicos-title {
  grid-column: 1/3;
  margin-bottom: 39px;
}

.servicos-description {
  grid-column: 1/3;
  margin-bottom: 64px;
}

.knoll-history {
  grid-column: 1/2;
}

.profile-history {
  grid-column: 3/4;
}

.knoll-history {
  margin-bottom: 94px;
}

.designers-grid {
  grid-column: 1/4;
  margin-bottom: 73px;
}

.linha-div {
  grid-column: 1/4;
  height: 1px;
  background-color: #dedcdb;
  margin-bottom: 40px;
}

.title-history {
  grid-column: 1/3;
  grid-row: 1/4;
  margin-top: -7px;
  position: relative;
}

.title-history-title {
  margin-bottom: 20px;
}

.title-history-sticky {
  position: sticky;
  top: 28px;
}

.menu-anchor {
  grid-column: 1/2;
  grid-row: 2/99;
}

.knoll-brand-item {
  grid-column: 2/4;
  margin-bottom: 94px;
}

.knoll-brand-item-title {
  margin-top: -7px;
}

.menu-anchor li {
  margin-bottom: 4px;
}

.knoll-brand-item-description {
  margin: -7px 0 50px 0;
}

.knoll-brand-item-description-text {
  margin-bottom: 24px;
}

.carousel {
  grid-column: 1/3;
  margin-bottom: 36px;
}

.knoll-brand-item-secondary-description {
  align-self: end;
}

.img-description {
  margin-top: 17px;
}

@media screen and (max-width: 1020px) {
  .knoll-history {
    grid-column: 1/3;
    margin-bottom: 31px;
  }

  .profile-history {
    grid-column: 1/3;
  }

  .designers-grid {
    grid-column: 1/3;
    margin-bottom: 64px;
  }

  .title-history {
    grid-column: 1/3;
    grid-row: 1;
    margin-bottom: 32px;
  }

  .designer-item {
    margin-bottom: 0px;
  }

  .linha-div {
    grid-column: 1/3;
  }

  .menu-anchor {
    grid-column: 1/3;
    margin-bottom: 64px;
  }

  .knoll-brand-item {
    grid-column: 1/3;
    margin-bottom: 64px;
  }

  .knoll-brand-item-title {
    grid-column: 1/3;
    margin: 0 0 32px 0;
  }

  .knoll-brand-item-description {
    grid-column: 1/3;
    margin: -7px 0 50px 0;
  }

  .backgroundwhite {
    margin-top: -156px;
  }

  .content {
    padding-top: 157px;
  }
}
</style>

<script>
import DesignerItem from "~/components/DesignerItem.vue";
import MenuMobile from "~/components/MenuMobile.vue";

export default {
  components: {
    DesignerItem,
    MenuMobile,
  },
  data() {
    return {
      title: "Vitra design",
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>
