<template>
  <div class="content">
    <Menu />
    <MenuMobile />

    <div class="category-list grid3">
      <h1 class="category-name pressura60">Armazenamento</h1>

      <ItemProduto
        linkproduct="mobiliario_corporativo/armazenamentos/case-armarios"
        imgproduct="mobiliariocorporativo/armazenamento/4_1_Escinter_Case_Armarios/hero.jpg"
        nameproduct="Case Armários"
        brandproduct="Escinter"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/armazenamentos/case-gaveteiros"
        imgproduct="mobiliariocorporativo/armazenamento/4_2_Escinter_Case_Gaveteiros/hero.jpg"
        nameproduct="Case Gaveteiros"
        brandproduct="Escinter"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/armazenamentos/case-lockers"
        imgproduct="mobiliariocorporativo/armazenamento/4_3_Escinter_Case_Lockers/hero.jpg"
        nameproduct="Case Lockers"
        brandproduct="Escinter"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/armazenamentos/toolbox-re"
        imgproduct="mobiliariocorporativo/armazenamento/4_Armazenamento/4_1_Toolbox_RE/4_1.jpg"
        nameproduct="Toolbox RE"
        brandproduct="Vitra"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/armazenamentos/locker-box-small"
        imgproduct="mobiliariocorporativo/armazenamento/4_Armazenamento/4_2_Locker_Box_Small/4_2.jpg"
        nameproduct="Locker Box Small"
        brandproduct="Vitra"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/armazenamentos/locker-box"
        imgproduct="mobiliariocorporativo/armazenamento/4_Armazenamento/4_3_Locker_Box/4_3.jpg"
        nameproduct="Locker Box"
        brandproduct="Vitra"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/armazenamentos/drop-box"
        imgproduct="mobiliariocorporativo/armazenamento/4_Armazenamento/4_4_Drop_Box/4_4.jpg"
        nameproduct="Drop Box"
        brandproduct="Vitra"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/armazenamentos/charp"
        imgproduct="mobiliariocorporativo/armazenamento/4_Armazenamento/4_5_Chap/4_5.jpg"
        nameproduct="Charp"
        brandproduct="Vitra"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/armazenamentos/toolbox"
        imgproduct="mobiliariocorporativo/armazenamento/4_Armazenamento/4_6_Toolbox/4_6.jpg"
        nameproduct="Toolbox"
        brandproduct="Vitra"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/armazenamentos/utensilo-i"
        imgproduct="mobiliariocorporativo/armazenamento/4_Armazenamento/4_7_Utensilo_I/4_7.jpg"
        nameproduct="Uten.silo I"
        brandproduct="Vitra"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/armazenamentos/utensilo-ii"
        imgproduct="mobiliariocorporativo/armazenamento/4_Armazenamento/4_8_Utensilo_II/4_8.jpg"
        nameproduct="Uten.silo II"
        brandproduct="Vitra"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/armazenamentos/caddy"
        imgproduct="mobiliariocorporativo/armazenamento/4_Armazenamento/4_9_Caddy/4_9.jpg"
        nameproduct="Caddy"
        brandproduct="Vitra"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/armazenamentos/mbe-mobile-pedestal"
        imgproduct="mobiliariocorporativo/armazenamento/4_Armazenamento/4_10_MBE_Mobile_Pedestal/4_10.jpg"
        nameproduct="MBE Mobile Pedestal"
        brandproduct="Vitra"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/armazenamentos/follow-me-1"
        imgproduct="mobiliariocorporativo/armazenamento/4_Armazenamento/4_11_Follow_Me_1/4_11.jpg"
        nameproduct="Follow Me 1"
        brandproduct="Vitra"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/armazenamentos/follow-me-2"
        imgproduct="mobiliariocorporativo/armazenamento/4_Armazenamento/4_12_Follow_Me_2/4_12.jpg"
        nameproduct="Follow Me 2"
        brandproduct="Vitra"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/armazenamentos/storage-cabinets"
        imgproduct="mobiliariocorporativo/armazenamento/4_Armazenamento/4_13_Storage_Cabinets/4_13.jpg"
        nameproduct="Storage Cabinets"
        brandproduct="Vitra"
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
      title: "Armazenamento",
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>
