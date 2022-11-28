<template>
  <div class="content">
    <Menu />
    <MenuMobile />

    <div class="category-list grid3">
      <h1 class="category-name pressura60">Reuniões</h1>

      <ItemProduto
        linkproduct="mobiliario_corporativo/reuniao/point"
        imgproduct="mobiliariocorporativo/reunioes/3_1_Escinter_Point/hero.jpg"
        nameproduct="Point"
        brandproduct="Escinter"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/reuniao/componivel"
        imgproduct="mobiliariocorporativo/reunioes/3_2_Escinter_Componivel/hero.jpg"
        nameproduct="Componivel"
        brandproduct="Escinter"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/reuniao/profession"
        imgproduct="mobiliariocorporativo/reunioes/3_4_Kush_Profesion/hero.jpg"
        nameproduct="Profession"
        brandproduct="Kusch"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/reuniao/san-siro"
        imgproduct="mobiliariocorporativo/reunioes/3_5_Kush_Sansiro/hero.jpg"
        nameproduct="San Siro"
        brandproduct="Kusch"
      />
    </div>
  </div>
</template>

<style scoped>
.content {
  padding-top: 31px;
}

.category-name {
  grid-column: 1/4;
  margin-bottom: 37px;
}

.category-item-productname {
  margin-bottom: 2px;
}

@media screen and (max-width: 1020px) {
  .category-name {
    grid-column: 1/3;
    margin-bottom: 19px;
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

export default {
  components: {
    ItemProduto,
    Menu,
    MenuMobile,
  },
  data() {
    return {
      title: "Reuniões",
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>
