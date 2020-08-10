<template>
<div class="content">
    
      <Menu />
      <MenuMobile />

      <CategoryItem
        title="Estações de trabalho"
        link="blog"

        imgproduct1="image-cadeira.png"
        nameproduct1="Generation"
        brandproduct1="Knoll"
        linkproduct1="blog/2020-03-29-re-generation"

        imgproduct2="image-cadeira.png"
        nameproduct2="Generation"
        brandproduct2="Knoll"
        linkproduct2="blog/2020-03-29-re-generation"
      />

      <CategoryItem
        title="Assentos"
        link="mobiliario_corporativo/assentos"

        imgproduct1="mobiliariocorporativo/assentos/2_1_Knoll_Generation/hero.jpg"
        nameproduct1="Generation"
        brandproduct1="Knoll"
        linkproduct1="blog/2020-03-29-re-generation"

        imgproduct2="mobiliariocorporativo/assentos/2_2_Knoll_Regeneration/hero.jpg"
        nameproduct2="Regeneration"
        brandproduct2="Knoll"
        linkproduct2="blog/2020-03-29-re-generation"
      />

      <CategoryItem
        title="Reuniões"
        link="mobiliario_corporativo/reunioes"

        imgproduct1="mobiliariocorporativo/reunioes/3_1_Escinter_Point/hero.jpg"
        nameproduct1="Point"
        brandproduct1="Escinter"
        linkproduct1="blog/2020-03-29-re-generation"

        imgproduct2="mobiliariocorporativo/reunioes/3_2_Escinter_Componivel/hero.jpg"
        nameproduct2="Componivel"
        brandproduct2="Escinter"
        linkproduct2="blog/2020-03-29-re-generation"
      />

      <CategoryItem
        title="Armazenamento"
        link="mobiliario_corporativo/armazenamento"

        imgproduct1="mobiliariocorporativo/armazenamento/4_1_Escinter_Case_Armarios/hero.jpg"
        nameproduct1="Case Armários"
        brandproduct1="Escinter"
        linkproduct1="blog/2020-03-29-re-generation"

        imgproduct2="mobiliariocorporativo/armazenamento/4_2_Escinter_Case_Gaveteiros/hero.jpg"
        nameproduct2="Case Gaveteiros"
        brandproduct2="Escinter"
        linkproduct2="blog/2020-03-29-re-generation"
      />

      <CategoryItem
        title="Colaborativos"
        link="mobiliario_corporativo/colaborativos"

        imgproduct1="mobiliariocorporativo/colaborativos/5_1_Cadeiras/5_1_1_Kusch_Trio/hero.jpg"
        nameproduct1="Trio"
        brandproduct1="Kusch"
        linkproduct1="blog/2020-03-29-re-generation"

        imgproduct2="mobiliariocorporativo/colaborativos/5_2_Poltronas/5_2_1_Kusch_Njord/hero.jpg"
        nameproduct2="Njord"
        brandproduct2="Kusch"
        linkproduct2="blog/2020-03-29-re-generation"
      />

      <CategoryItem
        title="Workbetter"
        link="mobiliario_corporativo/workbetter"

        imgproduct1="mobiliariocorporativo/workbetter/6_1_Escinter_Duvo/hero.jpg"
        nameproduct1="Duvo"
        brandproduct1="Escinter"
        linkproduct1="blog/2020-03-29-re-generation"

        imgproduct2="mobiliariocorporativo/workbetter/6_2_Escinter_Shelter/hero.jpg"
        nameproduct2="Shelter"
        brandproduct2="Escinter"
        linkproduct2="blog/2020-03-29-re-generation"
      />

      <CategoryItem
        title="Acessórios"
        link="mobiliario_corporativo/acessorios"

        imgproduct1="mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_2_Muuto_Unfold/hero.jpg"
        nameproduct1="Unfold"
        brandproduct1="Muuto"
        linkproduct1="blog/2020-03-29-re-generation"

        imgproduct2="mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_7_Muuto_Postwall/hero.jpg"
        nameproduct2="Postwall"
        brandproduct2="Muuto"
        linkproduct2="blog/2020-03-29-re-generation"
      />

      <CategoryItem
        title="Divisórias"
        link="mobiliario_corporativo/divisorias"

        imgproduct1="mobiliariocorporativo/divisorias/iw25/iw25.jpeg"
        nameproduct1="Inwall IW25"
        brandproduct1="Escinter"
        linkproduct1="blog/2020-03-29-re-generation"

        imgproduct2="mobiliariocorporativo/divisorias/iw70/iw70.jpeg"
        nameproduct2="Inwall IW70"
        brandproduct2="Escinter"
        linkproduct2="blog/2020-03-29-re-generation"
      />

      <CategoryItem
        title="Carpetes"
        link="mobiliario_corporativo/carpetes"

        imgproduct1="mobiliariocorporativo/carpetes/creating-space/hero.jpg"
        nameproduct1="Creating Space"
        brandproduct1="Shaw Contract"
        linkproduct1="blog/2020-03-29-re-generation"

        imgproduct2="mobiliariocorporativo/carpetes/rapid-select/hero.jpg"
        nameproduct2="Rapid Select"
        brandproduct2="Shaw Contract"
        linkproduct2="blog/2020-03-29-re-generation"
      />
</div>
</template>

<style scoped>
  .content {
    padding-top: 31px;
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
import CategoryItem from '~/components/CategoryItem.vue'
import Menu from '~/components/Menu.vue'
import MenuMobile from '~/components/MenuMobile.vue'

export default {
  components: {
    CategoryItem,
    Menu,
    MenuMobile
  },
  data() {
    return {
      title: 'Mobiliário Corporativo'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>