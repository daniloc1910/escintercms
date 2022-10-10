<template>
  <div class="content">
    <Menu />
    <MenuMobile />

    <div class="category-list grid3">
      <h1 class="category-name pressura60">Assentos</h1>
      <p class="sub-category-description graphik18 gray">
        A Escinter oferece uma extensa cartela de assentos nas mais variadas
        opções de orçamentos e mesmo funções dentro de um escritório, passando
        por clássicos do design e chegando à tecnologia de ponta.
      </p>

      <ItemProduto
        linkproduct="mobiliario_corporativo/assento/mont-blanc"
        imgproduct="mobiliariocorporativo/assentos/2_21_FWay_MontBlanc/hero.jpg"
        nameproduct="Mont Blanc"
        brandproduct="F. WAY"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/assento/parker"
        imgproduct="mobiliariocorporativo/assentos/2_8_FWay_Parker/hero.jpg"
        nameproduct="Parker"
        brandproduct="F. WAY"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/assento/nox"
        imgproduct="mobiliariocorporativo/assentos/2_9_FWay_Nox/hero.jpg"
        nameproduct="Nox"
        brandproduct="F.WAY"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/assento/ayra"
        imgproduct="mobiliariocorporativo/assentos/2_10_FWay_Ayra/hero.jpg"
        nameproduct="Ayra"
        brandproduct="F.WAY"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/assento/agile"
        imgproduct="mobiliariocorporativo/assentos/2_11_Frisokar_Agile/hero.jpg"
        nameproduct="Agile"
        brandproduct="Frisokar"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/assento/joy"
        imgproduct="mobiliariocorporativo/assentos/2_11_Frisokar_Joy_Addit/hero.jpg"
        nameproduct="Joy"
        brandproduct="Frisokar"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/assento/addit"
        imgproduct="mobiliariocorporativo/assentos/2_20_Frisokar_Addit/hero.jpg"
        nameproduct="Addit"
        brandproduct="Frisokar"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/assento/sense"
        imgproduct="mobiliariocorporativo/assentos/2_13_Frisokar_Sense/hero.jpg"
        nameproduct="Sense"
        brandproduct="Frisokar"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/assento/plus"
        imgproduct="mobiliariocorporativo/assentos/2_14_Frisokar_Plus/hero.jpg"
        nameproduct="Plus"
        brandproduct="Frisokar"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/assento/freedom"
        imgproduct="mobiliariocorporativo/assentos/2_15_Humanscale_Freedom/hero.jpg"
        nameproduct="Freedom"
        brandproduct="Humanscale"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/assento/diffrient-world"
        imgproduct="mobiliariocorporativo/assentos/2_16_Humanscale_Different_World/hero.jpg"
        nameproduct="Diffrient World"
        brandproduct="Humanscale"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/assento/trea"
        imgproduct="mobiliariocorporativo/assentos/2_17_Humanscale_Trea/hero.jpg"
        nameproduct="Trea"
        brandproduct="Humanscale"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/assento/summa"
        imgproduct="mobiliariocorporativo/assentos/2_18_Humanscale_Summa/hero.jpg"
        nameproduct="Summa"
        brandproduct="Humanscale"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/assento/cinto"
        imgproduct="mobiliariocorporativo/assentos/2_19_Humanscale_Cinto/hero.jpg"
        nameproduct="Cinto"
        brandproduct="Humanscale"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/assento/appia-work"
        imgproduct="mobiliariocorporativo/assentos/2_22_Maxdesign_AppiaWork/hero.jpg"
        nameproduct="Appia Work"
        brandproduct="Maxdesign"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/assento/stratos-m"
        imgproduct="mobiliariocorporativo/assentos/2_23_Maxdesign_M/hero.jpg"
        nameproduct="Stratos M"
        brandproduct="Maxdesign"
      />

      <ItemProduto
        linkproduct="mobiliario_corporativo/assento/stratos-mh"
        imgproduct="mobiliariocorporativo/assentos/2_24_Maxdesign_MH/hero.jpg"
        nameproduct="Stratos MH"
        brandproduct="Maxdesign"
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
      title: "Assentos",
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>
