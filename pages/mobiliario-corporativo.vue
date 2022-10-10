<template>
  <div class="content">
    <Menu />
    <MenuMobile />

    <div class="grid3">
      <h1 class="padding servicos-title pressura60">Mobiliário corporativo</h1>
      <h2 class="servicos-title graphik24 gray">
        Um bom ambiente de trabalho depende de um bom projeto, mas também de
        bons mobiliários que possam preenchê-lo de acordo com os princípios dos
        novos modos de trabalho e organização das corporações. Nós oferecemos
        uma completa linha de Estações de Trabalho, Assentos, Reuniões,
        Armazenamento e mobiliário para Espaços Colaborativos.
      </h2>
    </div>

    <CategoryItem
      title="Estações de trabalho"
      link="mobiliario_corporativo/estacoes_de_trabalho"
      imgproduct1="mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/hero.jpg"
      nameproduct1="Target"
      brandproduct1="Escinter"
      linkproduct1="mobiliario_corporativo/estacaodetrabalho/fixa"
      imgproduct2="mobiliariocorporativo/estacaodetrabalho/1_2_Regulaveis/1_2_1_Escinter_Alto/hero.jpg"
      nameproduct2="Alto"
      brandproduct2="Escinter"
      linkproduct2="mobiliario_corporativo/estacaodetrabalho/alto"
    />

    <CategoryItem
      title="Assentos"
      link="mobiliario_corporativo/assentos"
      imgproduct1="mobiliariocorporativo/assentos/2_21_FWay_MontBlanc/hero.jpg"
      nameproduct1="Mont Blanc"
      brandproduct1="F.WAY"
      linkproduct1="mobiliario_corporativo/assento/mont-blanc"
      imgproduct2="mobiliariocorporativo/assentos/2_8_FWay_Parker/hero.jpg"
      nameproduct2="Parker"
      brandproduct2="F.WAY"
      linkproduct2="mobiliario_corporativo/assento/parker"
    />

    <CategoryItem
      title="Reuniões"
      link="mobiliario_corporativo/reunioes"
      imgproduct1="mobiliariocorporativo/reunioes/3_1_Escinter_Point/hero.jpg"
      nameproduct1="Point"
      brandproduct1="Escinter"
      linkproduct1="mobiliario_corporativo/reuniao/point"
      imgproduct2="mobiliariocorporativo/reunioes/3_2_Escinter_Componivel/hero.jpg"
      nameproduct2="Componivel"
      brandproduct2="Escinter"
      linkproduct2="mobiliario_corporativo/reuniao/componivel"
    />

    <CategoryItem
      title="Armazenamento"
      link="mobiliario_corporativo/armazenamento"
      imgproduct1="mobiliariocorporativo/armazenamento/4_1_Escinter_Case_Armarios/hero.jpg"
      nameproduct1="Case Armários"
      brandproduct1="Escinter"
      linkproduct1="mobiliario_corporativo/armazenamentos/case-armarios"
      imgproduct2="mobiliariocorporativo/armazenamento/4_2_Escinter_Case_Gaveteiros/hero.jpg"
      nameproduct2="Case Gaveteiros"
      brandproduct2="Escinter"
      linkproduct2="mobiliario_corporativo/armazenamentos/case-gaveteiros"
    />

    <CategoryItem
      title="Colaborativos"
      link="mobiliario_corporativo/colaborativos"
      imgproduct1="mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_1_Kusch_Trio/hero.jpg"
      nameproduct1="Trio"
      brandproduct1="Kusch"
      linkproduct1="mobiliario_corporativo/colaborativo/trio"
      imgproduct2="mobiliariocorporativo/colaborativos/5_2_Poltronas/5_2_1_Kusch_Njord/hero.jpg"
      nameproduct2="Njord"
      brandproduct2="Kusch"
      linkproduct2="mobiliario_corporativo/colaborativo/njord-poltrona"
    />

    <CategoryItem
      title="Workbetter"
      link="mobiliario_corporativo/workbetter"
      imgproduct1="mobiliariocorporativo/workbetter/6_1_Escinter_Duvo/hero.jpg"
      nameproduct1="Duvo"
      brandproduct1="Escinter"
      linkproduct1="mobiliario_corporativo/workbetter"
      imgproduct2="mobiliariocorporativo/workbetter/6_2_Escinter_Shelter/hero.jpg"
      nameproduct2="Shelter"
      brandproduct2="Escinter"
      linkproduct2="mobiliario_corporativo/workbetter"
    />

    <CategoryItem
      title="Acessórios"
      link="mobiliario_corporativo/acessorios"
      imgproduct1="mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_8_Humanscale_Element_Disc/hero.jpg"
      nameproduct1="Element Disc"
      brandproduct1="Humanscale"
      linkproduct1="mobiliario_corporativo/acessorio/element-disc"
      imgproduct2="mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_9_Humanscale_Element_Vicion/hero.jpg"
      nameproduct2="Element Vision"
      brandproduct2="Humanscale"
      linkproduct2="mobiliario_corporativo/acessorio/element-vision"
    />
  </div>
</template>

<style scoped>
.content {
  padding-top: 31px;
}

.servicos-title {
  grid-column: 1/3;
  margin-bottom: 32px;
}

.padding {
  padding-top: 122px;
}

.category-list {
  padding-top: 263px;
}

.category-mame {
  grid-column: 1/5;
}

.primary-menu {
  margin-bottom: 65px;
}

.primary-menu li {
  padding-bottom: 4px;
}

@media screen and (max-width: 1020px) {
  .category-mame {
    grid-column: 1/3;
  }

  .content {
    padding-top: 157px;
  }
}
</style>

<script>
import CategoryItem from "~/components/CategoryItem.vue";
import Menu from "~/components/Menu.vue";
import MenuMobile from "~/components/MenuMobile.vue";

export default {
  components: {
    CategoryItem,
    Menu,
    MenuMobile,
  },
  data() {
    return {
      title: "Mobiliário Corporativo",
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>
