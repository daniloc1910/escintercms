<template>
<div class="content">
    <div class="primary-menu grid4">
    <div></div>

    <ul class="graphik18">
      <nuxt-link to="/mobiliario_corporativo/estacoes_de_trabalho" exact-active-class="active-link"><li class="secondary-menu-item">Estações de trabalho</li></nuxt-link>
      <nuxt-link to="/mobiliario_corporativo/assentos" exact-active-class="active-link"><li class="secondary-menu-item">Assentos</li></nuxt-link>
      <nuxt-link to="/sollo" exact-active-class="active-link"><li class="secondary-menu-item">Reuniões</li></nuxt-link>
      <nuxt-link to="/contato" exact-active-class="active-link"><li class="secondary-menu-item">Armazenamento</li></nuxt-link>
      <nuxt-link to="/contato" exact-active-class="active-link"><li class="secondary-menu-item">Colaborativos</li></nuxt-link>
      <nuxt-link to="/contato" exact-active-class="active-link"><li class="secondary-menu-item">Acessórios</li></nuxt-link>
      <nuxt-link to="/contato" exact-active-class="active-link"><li class="secondary-menu-item">Divisórias</li></nuxt-link>
      <nuxt-link to="/contato" exact-active-class="active-link"><li class="secondary-menu-item">Carpetes</li></nuxt-link>
    </ul>
    </div>

  <div class="category-list grid3">
    <div class="category-name pressura60">Assentos</div>

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/assentos/2_1_Knoll_Generation/hero.png"
        nameproduct="Generation"
        brandproduct="Knoll"
      />   

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/assentos/2_2_Knoll_Regeneration/hero.png"
        nameproduct="Regeneration"
        brandproduct="Knoll"
      />   

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/assentos/2_3_Knoll_K_Task/hero.png"
        nameproduct="k. task"
        brandproduct="Knoll"
      />   

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/assentos/2_4_Knoll_Ollo/hero.png"
        nameproduct="Ollo"
        brandproduct="Knoll"
      />   

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/assentos/2_5_Knoll_Multigeneration/hero.png"
        nameproduct="Multigeneration"
        brandproduct="Knoll"
      />  

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/assentos/2_6_Knoll_Life/hero.png"
        nameproduct="Life"
        brandproduct="Knoll"
      />  

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/assentos/2_7_Knoll_Pollock/hero.png"
        nameproduct="Pollock"
        brandproduct="Knoll"
      />  

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/assentos/2_8_FWay_Parker/hero.png"
        nameproduct="Parker"
        brandproduct="F. WAY"
      />  

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/assentos/2_9_FWay_Nox/hero.png"
        nameproduct="Nox"
        brandproduct="F.WAY"
      /> 

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/assentos/2_10_FWay_Ayra/hero.png"
        nameproduct="Ayra"
        brandproduct="F.WAY"
      />   


      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/assentos/2_11_Frisokar_Agile/hero.png"
        nameproduct="Agile"
        brandproduct="Frisokar"
      />  

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/assentos/2_11_Frisokar_Joy_Addit/hero.png"
        nameproduct="Joy Addit"
        brandproduct="Frisokar"
      /> 

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/assentos/2_12_Frisokar_Simple/hero.png"
        nameproduct="Simple"
        brandproduct="Frisokar"
      />  

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/assentos/2_13_Frisokar_Sense/hero.png"
        nameproduct="Sense"
        brandproduct="Frisokar"
      />   

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/assentos/2_14_Frisokar_Plus/hero.png"
        nameproduct="Plus"
        brandproduct="Frisokar"
      />  

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/assentos/2_15_Humanscale_Freedom/hero.png"
        nameproduct="Freedom"
        brandproduct="Humanscale"
      />   

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/assentos/2_16_Humanscale_Different_World/hero.png"
        nameproduct="Different World"
        brandproduct="Humanscale"
      />   

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/assentos/2_17_Humanscale_Trea/hero.png"
        nameproduct="Trea"
        brandproduct="Humanscale"
      />   

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/assentos/2_18_Humanscale_Summa/hero.png"
        nameproduct="Summa"
        brandproduct="Humanscale"
      />   

      <ItemProduto
        linkproduct="#"
        imgproduct="mobiliariocorporativo/assentos/2_19_Humanscale_Cinto/hero.png"
        nameproduct="Cinto"
        brandproduct="Humanscale"
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

  .category-item-productname{
    margin-bottom: 2px;
  }

  .primary-menu {
    margin-bottom: 65px;
  }

  .primary-menu li {
    padding-bottom: 4px;
  }


  @media screen and (max-width: 1020px) {

    .category-name {
      grid-column: 1/3;
      margin-bottom: 19px;
    }

  }
</style>


<script>
import ItemProduto from '~/components/ItemProduto.vue'

export default {
  components: {
    ItemProduto
  },
  data() {
    return {
      title: 'Escinter — Assentos'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>