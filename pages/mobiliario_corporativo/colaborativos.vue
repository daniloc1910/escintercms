<template>
  <div class="content">
    <Menu />
    <MenuMobile />

    <div class="nav-tipos navbar" :class="{ 'hidden-navbar': !showNavbar }">
      <div class="nav-tipos-menu">
        <div class="nav-tipos-hover" />
        <div class="nav-tipos-toggle">
          <div class="nav-tipos-toggle-label graphik16">Tipos</div>
        </div>
        <ul class="nav-tipos-items graphik16">
          <li><a href="#" v-scroll-to="'#cadeiras'">Cadeiras</a></li>
          <li><a href="#" v-scroll-to="'#poltronas'">Poltronas</a></li>
          <li><a href="#" v-scroll-to="'#sofas'">Sofás</a></li>
          <li><a href="#" v-scroll-to="'#puffs'">Puffs</a></li>
          <li>
            <a href="#" v-scroll-to="'#bancadas-altas'">Bancadas altas</a>
          </li>
          <li><a href="#" v-scroll-to="'#mesas'">Mesas</a></li>
          <li><a href="#" v-scroll-to="'#mesas-cafe'">Mesas café</a></li>
          <li><a href="#" v-scroll-to="'#lap-table'">Lap table</a></li>
        </ul>
      </div>
    </div>

    <div class="category-list grid3">
      <h1 class="category-name pressura60">Colaborativos</h1>
      <div class="menu-anchor graphik18 gray">
        <ul>
          <li class="black" style="margin-bottom: 8px">Tipos</li>
          <li><a href="#" v-scroll-to="'#cadeiras'">Cadeiras</a></li>
          <li><a href="#" v-scroll-to="'#poltronas'">Poltronas</a></li>
          <li><a href="#" v-scroll-to="'#sofas'">Sofás</a></li>
          <li><a href="#" v-scroll-to="'#puffs'">Puffs</a></li>
          <li>
            <a href="#" v-scroll-to="'#bancadas-altas'">Bancadas altas</a>
          </li>
          <li><a href="#" v-scroll-to="'#mesas'">Mesas</a></li>
          <li><a href="#" v-scroll-to="'#mesas-cafe'">Mesas café</a></li>
          <li><a href="#" v-scroll-to="'#lap-table'">Lap table</a></li>
        </ul>
      </div>

      <div class="linha-div"></div>

      <!-- CADEIRAS -->

      <h2 id="cadeiras" class="sub-category-name pressura40">Cadeiras</h2>

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/trio"
        imgproduct="mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_1_Kusch_Trio/hero.jpg"
        nameproduct="Trio"
        brandproduct="Kusch"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/duo"
        imgproduct="mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_2_Kusch_Duo/hero.jpg"
        nameproduct="Duo"
        brandproduct="Kusch"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/universo"
        imgproduct="mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_3_Kusch_Universo/hero.jpg"
        nameproduct="Universo"
        brandproduct="Kusch"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/soley"
        imgproduct="mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_4_Kusch_Soley/hero.jpg"
        nameproduct="Soley"
        brandproduct="Kusch"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/scorpii"
        imgproduct="mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_5_Kusch_Scorpii/hero.jpg"
        nameproduct="Scorpii"
        brandproduct="Kusch"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/njord"
        imgproduct="mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_6_Kusch_Njord/hero.jpg"
        nameproduct="Njord"
        brandproduct="Kusch"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/arn"
        imgproduct="mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_7_Kusch_Arn/hero.jpg"
        nameproduct="Arn"
        brandproduct="Kusch"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/max"
        imgproduct="mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_8_Maxdesign_Max/hero.jpg"
        nameproduct="Max"
        brandproduct="Maxdesign"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/appia"
        imgproduct="mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_9_Maxdesign_Appia/hero.jpg"
        nameproduct="Appia"
        brandproduct="Maxdesign"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/strattos"
        imgproduct="mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_10_Maxdesign_Strattos/hero.jpg"
        nameproduct="Strattos"
        brandproduct="Maxdesign"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/leaf"
        imgproduct="mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_11_Frisokar_Leaf/hero.jpg"
        nameproduct="Leaf"
        brandproduct="Frisokar"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/connect"
        imgproduct="mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_12_Frisokar_Connect/hero.jpg"
        nameproduct="Connect"
        brandproduct="Frisokar"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/up"
        imgproduct="mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_13_Frisokar_Up/hero.jpg"
        nameproduct="Up"
        brandproduct="Frisokar"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/bit"
        imgproduct="mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_14_Frisokar_Bit/hero.jpg"
        nameproduct="Bit"
        brandproduct="Frisokar"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/vesper"
        imgproduct="mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_15_Fway_Vesper/hero.jpg"
        nameproduct="Vesper"
        brandproduct="F.WAY"
      />

      <!-- POLTRONAS -->

      <div class="linha-div space"></div>
      <h2 id="poltronas" class="sub-category-name pressura40">Poltronas</h2>

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/njord-poltrona"
        imgproduct="mobiliariocorporativo/colaborativos/5_2_Poltronas/5_2_1_Kusch_Njord/hero.jpg"
        nameproduct="Njord"
        brandproduct="Kusch"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/volpe"
        imgproduct="mobiliariocorporativo/colaborativos/5_2_Poltronas/5_2_2_Kusch_Volpe/hero.jpg"
        nameproduct="Volpe"
        brandproduct="Kusch"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/volpino"
        imgproduct="mobiliariocorporativo/colaborativos/5_2_Poltronas/5_2_3_Kusch_Volpino/hero.jpg"
        nameproduct="Volpino"
        brandproduct="Kusch"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/lupino"
        imgproduct="mobiliariocorporativo/colaborativos/5_2_Poltronas/5_2_4_Kusch_Lupino/hero.jpg"
        nameproduct="Lupino"
        brandproduct="Kusch"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/colani"
        imgproduct="mobiliariocorporativo/colaborativos/5_2_Poltronas/5_2_5_Kusch_Colani/hero.jpg"
        nameproduct="Colani"
        brandproduct="Kusch"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/stratos"
        imgproduct="mobiliariocorporativo/colaborativos/5_2_Poltronas/5_2_6_Maxdesign_Stratos/hero.jpg"
        nameproduct="Stratos"
        brandproduct="Maxdesign"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/betinha"
        imgproduct="mobiliariocorporativo/colaborativos/5_2_Poltronas/5_2_7_Maxdesign_Betinha/hero.jpg"
        nameproduct="Betinha"
        brandproduct="Maxdesign"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/betty"
        imgproduct="mobiliariocorporativo/colaborativos/5_2_Poltronas/5_2_8_Maxdesign_Betty/hero.jpg"
        nameproduct="Betty"
        brandproduct="Maxdesign"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/pix"
        imgproduct="mobiliariocorporativo/colaborativos/5_2_Poltronas/5_2_9_Frisokar_pix/hero.jpg"
        nameproduct="Pix"
        brandproduct="Frisokar"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/ayra"
        imgproduct="mobiliariocorporativo/colaborativos/5_2_Poltronas/5_2_10_Fway_Ayra/hero.jpg"
        nameproduct="Ayra"
        brandproduct="F.WAY"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/frog"
        imgproduct="mobiliariocorporativo/colaborativos/5_2_Poltronas/5_2_11_Fway_Frog/hero.jpg"
        nameproduct="Frog"
        brandproduct="F.WAY"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/quark"
        imgproduct="mobiliariocorporativo/colaborativos/5_2_Poltronas/5_2_12_Fway_Quark/hero.jpg"
        nameproduct="Quark"
        brandproduct="F.WAY"
      />

      <!-- SOFAS -->

      <div class="linha-div space"></div>
      <h2 id="sofas" class="sub-category-name pressura40">Sofás</h2>

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/pix-sofa"
        imgproduct="mobiliariocorporativo/colaborativos/5_3_Sofas/5_3_1_Frisokar_Pix/hero.jpg"
        nameproduct="Pix"
        brandproduct="Frisokar"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/jelly"
        imgproduct="mobiliariocorporativo/colaborativos/5_3_Sofas/5_3_2_Fway_Jelly/hero.jpg"
        nameproduct="Jelly"
        brandproduct="F.WAY"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/poe"
        imgproduct="mobiliariocorporativo/colaborativos/5_3_Sofas/5_3_3_Fway_Poe/hero.jpg"
        nameproduct="Poe"
        brandproduct="F.WAY"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/wave"
        imgproduct="mobiliariocorporativo/colaborativos/5_3_Sofas/5_3_4_Fway_Wave/hero.jpg"
        nameproduct="Wave"
        brandproduct="F.WAY"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/vip"
        imgproduct="mobiliariocorporativo/colaborativos/5_3_Sofas/5_3_5_Fway_Vip/hero.jpg"
        nameproduct="VIP"
        brandproduct="F.WAY"
      />

      <!-- PUFFS -->

      <div class="linha-div space"></div>
      <h2 id="puffs" class="sub-category-name pressura40">Puffs</h2>

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/ballo"
        imgproduct="mobiliariocorporativo/colaborativos/5_4_Puffs/5_4_1_Humanscale_Ballo/hero.jpg"
        nameproduct="Ballo"
        brandproduct="Humanscale"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/puff"
        imgproduct="mobiliariocorporativo/colaborativos/5_4_Puffs/5_4_2_Frisokar_Puff/hero.jpg"
        nameproduct="Puff"
        brandproduct="Frisokar"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/square"
        imgproduct="mobiliariocorporativo/colaborativos/5_4_Puffs/5_4_3_Fway_Square/hero.jpg"
        nameproduct="Square"
        brandproduct="F.WAY"
      />

      <!-- Bancadas Altas -->

      <div class="linha-div space"></div>
      <h2 id="bancadas-altas" class="sub-category-name pressura40">
        Bancadas Altas
      </h2>

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/point"
        imgproduct="mobiliariocorporativo/colaborativos/5_5_Bancada_Altas/5_5_1_Escinter_Point/hero.jpg"
        nameproduct="Point"
        brandproduct="Escinter"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/pix-bancada"
        imgproduct="mobiliariocorporativo/colaborativos/5_5_Bancada_Altas/5_5_3_Frisokar_Pix/hero.jpg"
        nameproduct="Pix"
        brandproduct="Frisokar"
      />

      <!-- Mesas -->

      <div class="linha-div space"></div>
      <h2 id="mesas" class="sub-category-name pressura40">Mesas</h2>

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/volpino-mesa"
        imgproduct="mobiliariocorporativo/colaborativos/5_6_Mesas/5_6_1_Kusch_Volpino/hero.jpg"
        nameproduct="Volpino"
        brandproduct="Kusch"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/volpe-mesa"
        imgproduct="mobiliariocorporativo/colaborativos/5_6_Mesas/5_6_2_Kusch_Volpe/hero.jpg"
        nameproduct="Volpe"
        brandproduct="Kusch"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/san-siro"
        imgproduct="mobiliariocorporativo/colaborativos/5_6_Mesas/5_6_3_Kusch_San_Siro/hero.jpg"
        nameproduct="San Siro"
        brandproduct="Kusch"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/njord-mesa"
        imgproduct="mobiliariocorporativo/colaborativos/5_6_Mesas/5_6_4_Kusch_Njord/hero.jpg"
        nameproduct="Njord"
        brandproduct="Kusch"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/baba"
        imgproduct="mobiliariocorporativo/colaborativos/5_6_Mesas/5_6_6_Maxdesign_Baba/hero.jpg"
        nameproduct="Baba"
        brandproduct="Maxdesign"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/pic"
        imgproduct="mobiliariocorporativo/colaborativos/5_6_Mesas/5_6_7_Maxdesign_Pic/hero.jpg"
        nameproduct="Pic"
        brandproduct="Maxdesign"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/pix-mesa"
        imgproduct="mobiliariocorporativo/colaborativos/5_6_Mesas/5_6_8_Frisokar_Pix/hero.jpg"
        nameproduct="Pix"
        brandproduct="Frisokar"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/jelly-mesa"
        imgproduct="mobiliariocorporativo/colaborativos/5_6_Mesas/5_6_9_Fway_Jelly/hero.jpg"
        nameproduct="Jelly"
        brandproduct="F.WAY"
      />

      <!-- Mesas café -->

      <div class="linha-div space"></div>
      <h2 id="mesas-cafe" class="sub-category-name pressura40">Mesas café</h2>

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/pileto"
        imgproduct="mobiliariocorporativo/colaborativos/5_7_Mesa_Cafe/5_7_2_Kusch_Plieto/hero.jpg"
        nameproduct="Pileto"
        brandproduct="Kusch"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/joy"
        imgproduct="mobiliariocorporativo/colaborativos/5_7_Mesa_Cafe/5_7_1_Escinter_Joy/hero.jpg"
        nameproduct="Joy"
        brandproduct="Escinter"
      />

      <!-- Lap table -->

      <div class="linha-div space"></div>
      <h2 id="lap-table" class="sub-category-name pressura40">Lap table</h2>

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/note"
        imgproduct="mobiliariocorporativo/colaborativos/5_8_Lap_Table/5_8_2_Frisokar_Note/hero.jpg"
        nameproduct="Note"
        brandproduct="Frisokar"
      />
    </div>
  </div>
</template>

<style scoped>
.navbar.hidden-navbar {
  transform: translateY(0px);
  transition: 0.3s cubic-bezier(0.65, 0.05, 0.36, 1);
  pointer-events: all;
}

.content {
  padding-top: 31px;
}

.space {
  margin-top: 66px;
}

.category-name {
  grid-column: 1/3;
  margin-bottom: 37px;
}

.linha-div {
  grid-column: 1/4;
  height: 1px;
  background-color: #dedcdb;
  margin-bottom: 20px;
}

.sub-category-name {
  grid-column: 1/4;
  margin-bottom: 55px;
}

.category-item-productname {
  margin-bottom: 2px;
}

.menu-anchor {
  margin-bottom: 40px;
}

@media screen and (max-width: 1020px) {
  .category-name {
    grid-column: 1/3;
    margin-bottom: 19px;
  }

  .sub-category-name {
    grid-column: 1/3;
  }

  .linha-div {
    grid-column: 1/3;
  }

  .menu-anchor {
    grid-column: 1/3;
  }

  .content {
    padding-top: 157px;
  }
}
</style>

<script>
import ItemProduto from "~/components/ItemProduto.vue";
import Menu from "~/components/Menu.vue";
import MenuMobile from "~/components/MenuMobile.vue";

const OFFSET = 450;

export default {
  components: {
    ItemProduto,
    Menu,
    MenuMobile,
  },
  data() {
    return {
      title: "Colaborativos",
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0,
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
    const viewportMeta = document.createElement("meta");
    viewportMeta.name = "viewport";
    viewportMeta.content = "width=device-width, initial-scale=1";
    document.head.appendChild(viewportMeta);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim;
    },
    onScroll() {
      if (window.pageYOffset < 0) {
        return;
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return;
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    },
  },
};
</script>
