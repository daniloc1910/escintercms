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
        linkproduct="mobiliario_corporativo/colaborativo/hall-beam-seating"
        imgproduct="mobiliariocorporativo/colaborativos/3_Colaborativos/3_1_Hal_Chairs/3_1_1_Hall_Beam_Seating/3_1_1.jpg"
        nameproduct="Hall Beam Seating"
        brandproduct="Vitra"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/hall-soft-tube"
        imgproduct="mobiliariocorporativo/colaborativos/3_Colaborativos/3_1_Hal_Chairs/3_1_2_Hall_Soft_Tube/3_1_2.jpg"
        nameproduct="Hall Soft Tube"
        brandproduct="Vitra"
      />
      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/hall-armchair-studio"
        imgproduct="mobiliariocorporativo/colaborativos/3_Colaborativos/3_1_Hal_Chairs/3_1_3_Hall_Armchair_Studio/3_1_3.jpg"
        nameproduct="Hall Armchair Studio"
        brandproduct="Vitra"
      />
      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/hall-armchair-wood"
        imgproduct="mobiliariocorporativo/colaborativos/3_Colaborativos/3_1_Hal_Chairs/3_1_4_Hall_Armchair_Wood/3_1_4.jpg"
        nameproduct="Hall Armchair Wood"
        brandproduct="Vitra"
      />
      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/hall-studio"
        imgproduct="mobiliariocorporativo/colaborativos/3_Colaborativos/3_1_Hal_Chairs/3_1_5_Hall_Studio/3_1_5.jpg"
        nameproduct="Hall Studio"
        brandproduct="Vitra"
      />
      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/hall-soft-wood"
        imgproduct="mobiliariocorporativo/colaborativos/3_Colaborativos/3_1_Hal_Chairs/3_1_6_Hall_Soft_Wood/3_1_6.jpg"
        nameproduct="Hall Soft Wood"
        brandproduct="Vitra"
      />
      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/hall-soft-tube-stackable"
        imgproduct="mobiliariocorporativo/colaborativos/3_Colaborativos/3_1_Hal_Chairs/3_1_7_Hall_Soft_Tube_Stackable/3_1_7.jpg"
        nameproduct="Hall Soft Tube Stackable"
        brandproduct="Vitra"
      />
      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/hall-wood"
        imgproduct="mobiliariocorporativo/colaborativos/3_Colaborativos/3_1_Hal_Chairs/3_1_8_Hall_Wood/3_1_8.jpg"
        nameproduct="Hall Wood"
        brandproduct="Vitra"
      />
      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/hall-tube"
        imgproduct="mobiliariocorporativo/colaborativos/3_Colaborativos/3_1_Hal_Chairs/3_1_9_Hall_Tube/3_1_9.jpg"
        nameproduct="Hall Tube"
        brandproduct="Vitra"
      />
      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/hall-cantilever"
        imgproduct="mobiliariocorporativo/colaborativos/3_Colaborativos/3_1_Hal_Chairs/3_1_10_Hall_Cantilever/3_1_10.jpg"
        nameproduct="Hall Cantilever"
        brandproduct="Vitra"
      />
      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/hall-barstool"
        imgproduct="mobiliariocorporativo/colaborativos/3_Colaborativos/3_1_Hal_Chairs/3_1_11_Hall_Barstool/3_1_11.jpg"
        nameproduct="Hall Barstool"
        brandproduct="Vitra"
      />
      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/hall-ply-studio"
        imgproduct="mobiliariocorporativo/colaborativos/3_Colaborativos/3_1_Hal_Chairs/3_1_12_Hall_Ply_Studio/3_1_12.jpg"
        nameproduct="Hall Ply Studio"
        brandproduct="Vitra"
      />
      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/hall-ply-barstool"
        imgproduct="mobiliariocorporativo/colaborativos/3_Colaborativos/3_1_Hal_Chairs/3_1_13_Hall_Ply_Barstool/3_1_13.jpg"
        nameproduct="Hall Ply Barstool"
        brandproduct="Vitra"
      />
      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/hall-armchair-tube-stackable"
        imgproduct="mobiliariocorporativo/colaborativos/3_Colaborativos/3_1_Hal_Chairs/3_1_14_Hall_Armchair_Tube_Stackable/3_1_14.jpg"
        nameproduct="Hall Armchair Tube Stackable"
        brandproduct="Vitra"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/hall-ply-tube"
        imgproduct="mobiliariocorporativo/colaborativos/3_Colaborativos/3_1_Hal_Chairs/3_1_15_Hall_Ply_Tube/3_1_15.jpg"
        nameproduct="Hall Ply Tube"
        brandproduct="Vitra"
      />
      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/hall-ply-stool-high"
        imgproduct="mobiliariocorporativo/colaborativos/3_Colaborativos/3_1_Hal_Chairs/3_1_16_Hall_Ply_Stool_High/3_1_16.jpg"
        nameproduct="Hall Ply Stool High"
        brandproduct="Vitra"
      />
      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/hall-ply-tube-stackable"
        imgproduct="mobiliariocorporativo/colaborativos/3_Colaborativos/3_1_Hal_Chairs/3_1_17_Hall_Ply_Tube_Stackable/3_1_17.jpg"
        nameproduct="Hall Ply Tube Stackable"
        brandproduct="Vitra"
      />
      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/hall-ply-stool-medium"
        imgproduct="mobiliariocorporativo/colaborativos/3_Colaborativos/3_1_Hal_Chairs/3_1_18_Hall_Ply_Stool_Medium/3_1_18.jpg"
        nameproduct="Hall Ply Stool Medium"
        brandproduct="Vitra"
      />
      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/hall-ply-wood"
        imgproduct="mobiliariocorporativo/colaborativos/3_Colaborativos/3_1_Hal_Chairs/3_1_19_Hall_Ply_Wood/3_1_19.jpg"
        nameproduct="Hall Ply Wood"
        brandproduct="Vitra"
      />
      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/hall-sledge"
        imgproduct="mobiliariocorporativo/colaborativos/3_Colaborativos/3_1_Hal_Chairs/3_1_20_Hall_Sledge/3_1_20.jpg"
        nameproduct="Hall Sledge"
        brandproduct="Vitra"
      />
      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/hall-tube-stackable"
        imgproduct="mobiliariocorporativo/colaborativos/3_Colaborativos/3_1_Hal_Chairs/3_1_21_Hall_Tube_Stackable/3_1_21.jpg"
        nameproduct="Hall Tube Stackable"
        brandproduct="Vitra"
      />
      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/hall-stool-high"
        imgproduct="mobiliariocorporativo/colaborativos/3_Colaborativos/3_1_Hal_Chairs/3_1_22_Hall_Stool_High/3_1_22.jpg"
        nameproduct="Hall Stool High"
        brandproduct="Vitra"
      />
      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/hall-stool-medium"
        imgproduct="mobiliariocorporativo/colaborativos/3_Colaborativos/3_1_Hal_Chairs/3_1_23_Hall_Stool_Medium/3_1_23.jpg"
        nameproduct="Hall Stool Medium"
        brandproduct="Vitra"
      />
      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/hall-tube-armrest"
        imgproduct="mobiliariocorporativo/colaborativos/3_Colaborativos/3_1_Hal_Chairs/3_1_24_Hall_Tube_Armrest/3_1_24.jpg"
        nameproduct="Hall Tube Armrest"
        brandproduct="Vitra"
      />
      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/hall-lounge-chair"
        imgproduct="mobiliariocorporativo/colaborativos/3_Colaborativos/3_1_Hal_Chairs/3_1_25_Hall_Lounge_Chair/3_1_25.jpg"
        nameproduct="Hall Lounge Chair"
        brandproduct="Vitra"
      />
      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/hall-lounge-chair-ottoman"
        imgproduct="mobiliariocorporativo/colaborativos/3_Colaborativos/3_1_Hal_Chairs/3_1_26_Hall_Lounge_Chair_Ottoman/3_1_26.jpg"
        nameproduct="Hall Lounge Chair Ottoman"
        brandproduct="Vitra"
      />
      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/hall-lounge-ottoman"
        imgproduct="mobiliariocorporativo/colaborativos/3_Colaborativos/3_1_Hal_Chairs/3_1_27_Hall_Lounge_Ottoman/3_1_27.jpg"
        nameproduct="Hall Lounge Ottoman"
        brandproduct="Vitra"
      />

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
        linkproduct="mobiliario_corporativo/colaborativo/grand-repos"
        imgproduct="mobiliariocorporativo/colaborativos/3_Colaborativos/3_4_Grand_Repos/3_4_1_Grand_Repos/3_4_1.jpg"
        nameproduct="Grand Repos"
        brandproduct="Vitra"
      />
      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/grand-repos-panchina"
        imgproduct="mobiliariocorporativo/colaborativos/3_Colaborativos/3_4_Grand_Repos/3_4_2_Grand_Repos_Panchina/3_4_2.jpg"
        nameproduct="Grand Repos Panchina"
        brandproduct="Vitra"
      />
      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/grand-repos-ottoman"
        imgproduct="mobiliariocorporativo/colaborativos/3_Colaborativos/3_4_Grand_Repos/3_4_3_Grand_Repos_Ottoman/3_4_3.jpg"
        nameproduct="Grand Repos Ottoman"
        brandproduct="Vitra"
      />
      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/repos-panchina"
        imgproduct="mobiliariocorporativo/colaborativos/3_Colaborativos/3_4_Grand_Repos/3_4_4_Repos_Panchina/3_4_4.jpg"
        nameproduct="Repos Panchina"
        brandproduct="Vitra"
      />
      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/slow-chair"
        imgproduct="mobiliariocorporativo/colaborativos/3_Colaborativos/3_5_Slow/3_5_1_Slow_Chair/3_5_1.jpg"
        nameproduct="Slow Chair"
        brandproduct="Vitra"
      />
      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/slow-chair-ottoman"
        imgproduct="mobiliariocorporativo/colaborativos/3_Colaborativos/3_5_Slow/3_5_2_Slow_Chair_Ottoman/3_5_2.jpg"
        nameproduct="Slow Chair Ottoman"
        brandproduct="Vitra"
      />
      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/fauteil"
        imgproduct="mobiliariocorporativo/colaborativos/3_Colaborativos/3_6_Fauteuil/3_6.jpg"
        nameproduct="Fauteil"
        brandproduct="Vitra"
      />

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
        linkproduct="mobiliario_corporativo/colaborativo/softwork"
        imgproduct="mobiliariocorporativo/colaborativos/3_Colaborativos/3_2_Softwork/imagem.jpg"
        nameproduct="Softwork"
        brandproduct="Vitra"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/alcove-cabin"
        imgproduct="mobiliariocorporativo/colaborativos/3_Colaborativos/3_3_Alcove/3_3_1_Alcove_Cabin/3_3_1.jpg"
        nameproduct="Alcove"
        brandproduct="Vitra"
      />
      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/alcove-sofa"
        imgproduct="mobiliariocorporativo/colaborativos/3_Colaborativos/3_3_Alcove/3_3_2_Alcove_Sofa/3_3_2.jpg"
        nameproduct="Alcove Sofa"
        brandproduct="Vitra"
      />
      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/alcove-work"
        imgproduct="mobiliariocorporativo/colaborativos/3_Colaborativos/3_3_Alcove/3_3_3_Alcove_Work/3_3_3.jpg"
        nameproduct="Alcove Work"
        brandproduct="Vitra"
      />
      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/alcove-plus-sofa"
        imgproduct="mobiliariocorporativo/colaborativos/3_Colaborativos/3_3_Alcove/3_3_4_Alcove_Plus_Sofa/3_3_4.jpg"
        nameproduct="Alcove Plus Sofa"
        brandproduct="Vitra"
      />
      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/alcove-plus-work"
        imgproduct="mobiliariocorporativo/colaborativos/3_Colaborativos/3_3_Alcove/3_3_5_Alcove_Plus_Work/3_3_5.jpg"
        nameproduct="Alcove Plues Work"
        brandproduct="Vitra"
      />
      <ItemProduto
        linkproduct="mobiliario_corporativo/colaborativo/alcove-plus-paravent"
        imgproduct="mobiliariocorporativo/colaborativos/3_Colaborativos/3_3_Alcove/3_3_6_Alcove_Plus_Paravent/3_3_6.jpg"
        nameproduct="Alcove Plus Paravent"
        brandproduct="Vitra"
      />

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
