<template>
  <div class="content">
    <MenuMobile />

    <div class="backgroundwhite"></div>

    <div class="grid3 knoll-history">
      <h1 class="servicos-title pressura60">
        Desde 2004, a Sollos investe em conceito, identidade e qualidade.
      </h1>
      <h4 class="servicos-description graphik24 gray">
        Nosso pensamento ganha forma a partir do desenho conciso, da execução
        precisa, dos acabamentos minuciosos e uso responsável dos materiais.
        Nossos métodos híbridos de produção vão do uso de máquinas à celebração
        das virtudes do feito a mão.
      </h4>

      <p class="knoll-history graphik18">
        Essa constituição é nitidamente compreendida em todos os produtos
        produzidos e comercializados pela SOLLOS, na última década, e que
        atualmente são substancialmente reconhecidos nacional e
        internacionalmente. O design elegante permite que as peças cumpram a
        função de maneira silenciosa e, por si só, estabeleçam conexões com as
        mais variadas culturas. A resposta positiva que está se redigindo à
        medida que expandimos, inclusive além das nossas fronteiras, legitima a
        nossa identidade e a atemporalidade da nossa assinatura.
      </p>

      <div>
        <img
          :data-srcset="
            require('~/assets/images/sollos/jaderalmeida.jpeg').srcSet
          "
          class="lazyload"
        />
        <ul style="margin-top:16px;">
          <li class="graphik16">Jader Almeida</li>
        </ul>
      </div>

      <div>
        <img
          :data-srcset="require('~/assets/images/sollos/alvarosiza.jpg').srcSet"
          class="lazyload"
        />
        <ul style="margin-top:16px;">
          <li class="graphik16">Alvaro Siza</li>
        </ul>
      </div>
    </div>

    <div class="grid3">
      <div class="linha-div"></div>

      <div class="menu-anchor graphik18 gray">
        <ul class="title-history-sticky">
          <li><a href="#" v-scroll-to="'#cadeiras'">Cadeiras</a></li>
          <li><a href="#" v-scroll-to="'#banquetas'">Banquetas e bancos</a></li>
          <li><a href="#" v-scroll-to="'#poltronas'">Poltronas</a></li>
          <li><a href="#" v-scroll-to="'#mesasapoio'">Mesas de apoio</a></li>
          <li><a href="#" v-scroll-to="'#mesascentro'">Mesas de centro</a></li>
          <li><a href="#" v-scroll-to="'#sofas'">Sofás</a></li>
          <li><a href="#" v-scroll-to="'#mesas'">Mesas</a></li>
          <li><a href="#" v-scroll-to="'#estantes'">Estantes</a></li>
          <li><a href="#" v-scroll-to="'#outdoor'">Outdoor</a></li>
        </ul>
      </div>

      <!-- CADEIRAS -->
      <div id="cadeiras" class="knoll-brand-item">
        <div class="grid2">
          <div class="knoll-brand-item-title">
            <h3 class="pressura40" style="margin-bottom: 16px;">Cadeiras</h3>
            <div class="graphik18" style="margin-bottom: 32px;">
              <a
                class="pink"
                href="https://www.sollos.ind.br/produtos/cadeiras"
                target="_blank"
                >Visite o site da SOLLOS <span class="pressura21">↗</span></a
              >
            </div>
          </div>

          <div />

          <Flickity
            :options="{ wrapAround: true, autoPlay: 6000, lazyLoad: true }"
            class="carousel"
          >
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/sollos/cadeiras/carousel1.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/sollos/cadeiras/carousel2.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/sollos/cadeiras/carousel3.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/sollos/cadeiras/carousel4.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/sollos/cadeiras/carousel5.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/sollos/cadeiras/carousel6.jpg').srcSet
                "
              />
            </div>
          </Flickity>

          <div class="knoll-brand-item-secondary-description graphik16 gray">
            A linha Ella deixa evidente o domínio da forma e da eximia e
            complexa execução, caracterizando um produto com incrível leveza
            visual.
          </div>

          <img
            class="knoll-brand-item-secondary-img"
            :srcset="require('~/assets/images/sollos/cadeiras/ella.jpg').srcSet"
          />
        </div>
      </div>

      <!-- BANCOS E BANQUETAS -->
      <div id="banquetas" class="knoll-brand-item">
        <div class="linha-div"></div>

        <div class="grid2">
          <div class="knoll-brand-item-title">
            <h3 class="pressura40" style="margin-bottom: 16px;">
              Bancos e banquetas
            </h3>
            <div class="graphik18" style="margin-bottom: 32px;">
              <a
                class="pink"
                href="https://www.sollos.ind.br/produtos/bancos-e-banquetas"
                target="_blank"
                >Visite o site da SOLLOS <span class="pressura21">↗</span></a
              >
            </div>
          </div>

          <div />

          <Flickity
            :options="{ wrapAround: true, autoPlay: 6000, lazyLoad: true }"
            class="carousel"
          >
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/sollos/bancosbanquetas/carousel1.jpg')
                    .srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/sollos/bancosbanquetas/carousel2.jpg')
                    .srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/sollos/bancosbanquetas/carousel3.jpg')
                    .srcSet
                "
              />
            </div>
          </Flickity>

          <div class="knoll-brand-item-secondary-img">
            <img
              :data-srcset="
                require('~/assets/images/sollos/bancosbanquetas/bb1.jpg').srcSet
              "
              class="lazyload"
            />
            <div class="img-description graphik16 gray">Banco Phillips</div>
          </div>

          <div class="knoll-brand-item-secondary-img">
            <img
              :data-srcset="
                require('~/assets/images/sollos/bancosbanquetas/bb2.jpg').srcSet
              "
              class="lazyload"
            />
            <div class="img-description graphik16 gray">Banqueta Bossa</div>
          </div>
        </div>
      </div>

      <!-- POLTRONAS -->
      <div id="poltronas" class="knoll-brand-item">
        <div class="linha-div"></div>

        <div class="grid2">
          <div class="knoll-brand-item-title">
            <h3 class="pressura40" style="margin-bottom: 16px;">Poltronas</h3>
            <div class="graphik18" style="margin-bottom: 32px;">
              <a
                class="pink"
                href="https://www.sollos.ind.br/produtos/poltronas-e-puffs"
                target="_blank"
                >Visite o site da SOLLOS <span class="pressura21">↗</span></a
              >
            </div>
          </div>

          <div />

          <Flickity
            :options="{ wrapAround: true, autoPlay: 6000, lazyLoad: true }"
            class="carousel"
          >
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/sollos/poltronas/carousel1.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/sollos/poltronas/carousel2.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/sollos/poltronas/carousel3.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/sollos/poltronas/carousel4.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/sollos/poltronas/carousel5.jpg').srcSet
                "
              />
            </div>
          </Flickity>
        </div>
      </div>

      <!-- MESAS DE APOIO -->
      <div id="mesasapoio" class="knoll-brand-item">
        <div class="linha-div"></div>

        <div class="grid2">
          <div class="knoll-brand-item-title">
            <h3 class="pressura40" style="margin-bottom: 16px;">
              Mesas de apoio
            </h3>
            <div class="graphik18" style="margin-bottom: 32px;">
              <a
                class="pink"
                href="https://www.sollos.ind.br/produtos/mesas-de-apoio"
                target="_blank"
                >Visite o site da SOLLOS <span class="pressura21">↗</span></a
              >
            </div>
          </div>

          <div />

          <div class="knoll-brand-item-secondary-img">
            <img
              :data-srcset="
                require('~/assets/images/sollos/mesasdeapoio/ma1.jpg').srcSet
              "
              class="lazyload"
            />
          </div>

          <div class="knoll-brand-item-secondary-img">
            <img
              :data-srcset="
                require('~/assets/images/sollos/mesasdeapoio/ma2.jpg').srcSet
              "
              class="lazyload"
            />
          </div>
        </div>
      </div>

      <!-- MESAS DE CENTRO -->
      <div id="mesascentro" class="knoll-brand-item">
        <div class="linha-div"></div>

        <div class="grid2">
          <div class="knoll-brand-item-title">
            <h3 class="pressura40" style="margin-bottom: 16px;">
              Mesas de centro
            </h3>
            <div class="graphik18" style="margin-bottom: 32px;">
              <a
                class="pink"
                href="https://www.sollos.ind.br/produtos/mesas-de-centro"
                target="_blank"
                >Visite o site da SOLLOS <span class="pressura21">↗</span></a
              >
            </div>
          </div>

          <div />

          <Flickity
            :options="{ wrapAround: true, autoPlay: 6000, lazyLoad: true }"
            class="carousel"
          >
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/sollos/mesascentro/carousel1.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/sollos/mesascentro/carousel2.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/sollos/mesascentro/carousel3.jpg').srcSet
                "
              />
            </div>
          </Flickity>

          <div class="knoll-brand-item-secondary-img">
            <img
              :srcset="
                require('~/assets/images/sollos/mesasdecentro/mc1.jpg').srcSet
              "
            />
          </div>

          <div class="knoll-brand-item-secondary-img">
            <img
              :data-srcset="
                require('~/assets/images/sollos/mesasdecentro/mc2.jpg').srcSet
              "
              class="lazyload"
            />
          </div>
        </div>
      </div>

      <!-- SOFÁS -->
      <div id="sofas" class="knoll-brand-item">
        <div class="linha-div"></div>

        <div class="grid2">
          <div class="knoll-brand-item-title">
            <h3 class="pressura40" style="margin-bottom: 16px;">
              Sofás
            </h3>
            <div class="graphik18" style="margin-bottom: 32px;">
              <a
                class="pink"
                href="https://www.sollos.ind.br/produtos/sofas"
                target="_blank"
                >Visite o site da SOLLOS <span class="pressura21">↗</span></a
              >
            </div>
          </div>

          <div />

          <Flickity
            :options="{ wrapAround: true, autoPlay: 6000, lazyLoad: true }"
            class="carousel"
          >
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/sollos/sofas/carousel1.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/sollos/sofas/carousel2.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/sollos/sofas/carousel3.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/sollos/sofas/carousel4.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/sollos/sofas/carousel5.jpg').srcSet
                "
              />
            </div>
          </Flickity>
        </div>
      </div>

      <!-- MESAS -->
      <div id="mesas" class="knoll-brand-item">
        <div class="linha-div"></div>

        <div class="grid2">
          <div class="knoll-brand-item-title">
            <h3 class="pressura40" style="margin-bottom: 16px;">
              Mesas
            </h3>
            <div class="graphik18" style="margin-bottom: 32px;">
              <a
                class="pink"
                href="https://www.sollos.ind.br/produtos/mesas-de-jantar"
                target="_blank"
                >Visite o site da SOLLOS <span class="pressura21">↗</span></a
              >
            </div>
          </div>

          <div />

          <Flickity
            :options="{ wrapAround: true, autoPlay: 6000, lazyLoad: true }"
            class="carousel"
          >
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/sollos/mesas/carousel1.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/sollos/mesas/carousel2.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/sollos/mesas/carousel3.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/sollos/mesas/carousel4.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/sollos/mesas/carousel5.jpg').srcSet
                "
              />
            </div>
          </Flickity>

          <div class="knoll-brand-item-secondary-img">
            <img
              :data-srcset="
                require('~/assets/images/sollos/mesas/m1.jpg').srcSet
              "
              class="lazyload"
            />
          </div>

          <div class="knoll-brand-item-secondary-img">
            <img
              :data-srcset="
                require('~/assets/images/sollos/mesas/m2.jpg').srcSet
              "
              class="lazyload"
            />
          </div>
        </div>
      </div>

      <!-- DATEWEISER -->
      <div id="estantes" class="knoll-brand-item">
        <div class="linha-div"></div>

        <div class="grid2">
          <div class="knoll-brand-item-title">
            <h3 class="pressura40" style="margin-bottom: 16px;">
              Estantes
            </h3>
            <div class="graphik18" style="margin-bottom: 32px;">
              <a
                class="pink"
                href="https://www.sollos.ind.br/produtos/estantes-e-sistemas"
                target="_blank"
                >Visite o site da SOLLOS <span class="pressura21">↗</span></a
              >
            </div>
          </div>

          <div />

          <Flickity
            :options="{ wrapAround: true, autoPlay: 6000, lazyLoad: true }"
            class="carousel"
          >
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/sollos/estantes/carousel1.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/sollos/estantes/carousel2.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/sollos/estantes/carousel3.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/sollos/estantes/carousel4.jpg').srcSet
                "
              />
            </div>
          </Flickity>
        </div>
      </div>

      <!-- OUTDOOR -->
      <div id="outdoor" class="knoll-brand-item">
        <div class="linha-div"></div>

        <div class="grid2">
          <div class="knoll-brand-item-title">
            <h3 class="pressura40" style="margin-bottom: 16px;">
              Outdoor
            </h3>
            <div class="graphik18" style="margin-bottom: 32px;">
              <a
                class="pink"
                href="https://www.sollos.ind.br/linhas/outdoor"
                target="_blank"
                >Visite o site da SOLLOS <span class="pressura21">↗</span></a
              >
            </div>
          </div>

          <div />

          <Flickity
            :options="{ wrapAround: true, autoPlay: 6000, lazyLoad: true }"
            class="carousel"
          >
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/sollos/outdoor/carousel1.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/sollos/outdoor/carousel2.jpg').srcSet
                "
              />
            </div>
          </Flickity>

          <div class="knoll-brand-item-secondary-img">
            <img
              :data-srcset="
                require('~/assets/images/sollos/outdoor/out1.jpg').srcSet
              "
              class="lazyload"
            />
          </div>

          <div class="knoll-brand-item-secondary-img">
            <img
              :data-srcset="
                require('~/assets/images/sollos/outdoor/out2.jpg').srcSet
              "
              class="lazyload"
            />
          </div>
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
    MenuMobile
  },
  data() {
    return {
      title: "SOLLOS"
    };
  },
  head() {
    return {
      title: this.title
    };
  }
};
</script>
