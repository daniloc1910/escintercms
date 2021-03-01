<template>
<div class="content">

  <Menu />
  <MenuMobile />

 <div class="nav-tipos navbar" :class="{ 'hidden-navbar': !showNavbar }">
      <div class="nav-tipos-menu">
      <div class="nav-tipos-hover" />
      <div class="nav-tipos-toggle"><div class="nav-tipos-toggle-label graphik16">Tipos</div></div>
        <ul class="nav-tipos-items graphik16">
          <li><a href="#" v-scroll-to="'#fixas'">Fixas</a></li>
          <li><a href="#" v-scroll-to="'#regulaveis'">Reguláveis</a></li>
          <li><a href="#" v-scroll-to="'#executivo'">Executivo</a></li>
        </ul>
    </div>
  </div>

  <div class="category-list grid3">
    <h1 class="category-name pressura60">Estações de Trabalho</h1>

        <div class="menu-anchor graphik18 gray">
        <ul>
          <li class="black" style="margin-bottom: 8px;">Tipos</li>
          <li><a href="#" v-scroll-to="'#fixas'">Fixas</a></li>
          <li><a href="#" v-scroll-to="'#regulaveis'">Reguláveis</a></li>
          <li><a href="#" v-scroll-to="'#executivo'">Executivo</a></li>
        </ul>
      </div>

    <div class="linha-div"></div>

      
      <!-- FIXAS -->
      
      <h2 id="fixas" class="sub-category-name pressura40">Fixas</h2>
      <p class="sub-category-description graphik18 gray">Quando temos controle sobre os layouts dos espaços de trabalho, podemos ocupá-los com as estações de trabalho mais completas.</p>

      <ItemProduto
        linkproduct="mobiliario_corporativo/estacaodetrabalho/fixa"
        imgproduct="mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/hero.jpg"
        nameproduct="Target"
        brandproduct="Escinter"
      />  

      <ItemProduto
        linkproduct="mobiliario_corporativo/estacaodetrabalho/antenna"
        imgproduct="mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_10_Knoll_Antenna/hero.jpg"
        nameproduct="Antenna"
        brandproduct="Knoll"
      />  





      <!-- REGULAVEIS -->

      <div class="linha-div space"></div>
      <h2 id="regulaveis" class="sub-category-name pressura40">Reguláveis</h2>
      <p class="sub-category-description graphik18 gray">A saúde e a ergonomia são cada vez mais pontos decisórios para um bom rendimento, e as nossas opções oferecem grade qualidade em desenho para atendê-lo.</p>

      <ItemProduto
        linkproduct="mobiliario_corporativo/estacaodetrabalho/alto"
        imgproduct="mobiliariocorporativo/estacaodetrabalho/1_2_Regulaveis/1_2_1_Escinter_Alto/hero.jpg"
        nameproduct="Alto"
        brandproduct="Escinter"
      />  

      <ItemProduto
        linkproduct="mobiliario_corporativo/estacaodetrabalho/tone"
        imgproduct="mobiliariocorporativo/estacaodetrabalho/1_2_Regulaveis/1_2_2_Knoll_Tone/hero.jpg"
        nameproduct="Tone"
        brandproduct="Knoll"
      />  

      <ItemProduto
        linkproduct="mobiliario_corporativo/estacaodetrabalho/kstand"
        imgproduct="mobiliariocorporativo/estacaodetrabalho/1_2_Regulaveis/1_2_3_Knoll_Kstand/hero.jpg"
        nameproduct="k. stand"
        brandproduct="Knoll"
      />  

      <ItemProduto
        linkproduct="mobiliario_corporativo/estacaodetrabalho/float"
        imgproduct="mobiliariocorporativo/estacaodetrabalho/1_2_Regulaveis/1_2_4_Humanscale_Float/hero.jpg"
        nameproduct="Float"
        brandproduct="Humanscale"
      />  




      <!-- EXECUTIVO -->

      <div class="linha-div space"></div>
      <h2 id="executivo" class="sub-category-name pressura40">Executivo</h2>

      <ItemProduto
        linkproduct="mobiliario_corporativo/estacaodetrabalho/executivo-target"
        imgproduct="mobiliariocorporativo/estacaodetrabalho/1_3_Executivo/1_3_1_Escinter_Target/hero.jpg"
        nameproduct="Target"
        brandproduct="Escinter"
      />  

      <ItemProduto
        linkproduct="mobiliario_corporativo/estacaodetrabalho/executivo-antenna"
        imgproduct="mobiliariocorporativo/estacaodetrabalho/1_3_Executivo/1_3_2_Knoll_Antenna/hero.jpg"
        nameproduct="Antenna"
        brandproduct="Knoll"
      />  


  

  </div>
</div>
</template>

<style scoped>
  .navbar.hidden-navbar {
    transform: translateY(0px);
    transition: 0.3s cubic-bezier(0.65,0.05,0.36,1); 
    pointer-events: all;
  }

  .content {
    padding-top: 31px;
  }

  .category-name {
    grid-column: 1/3;
    margin-bottom: 37px;
  }

  .linha-div {
    grid-column: 1/4;
    height: 1px;
    background-color: #DEDCDB;
    margin-bottom: 20px;
  }

  .sub-category-name {
    grid-column: 1/4;
    margin-bottom: 55px;
  }

  .category-item-productname{
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

    .linha-div {
      grid-column: 1/3;
    }

  .sub-category-name {
    grid-column: 1/3;
  }

      .content {
      padding-top: 157px;
    }

  }
</style>


<script>
import ItemProduto from '~/components/ItemProduto.vue'
import Menu from '~/components/Menu.vue'
import MenuMobile from '~/components/MenuMobile.vue'

const OFFSET = 450

export default {
  components: {
    ItemProduto,
    Menu,
    MenuMobile
  },
  data() {
    return {
      title: 'Estações de Trabalho',
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0
    }
  },
  head() {
    return {
      title: this.title
    }
  },
  mounted () {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
    const viewportMeta = document.createElement('meta')
    viewportMeta.name = 'viewport'
    viewportMeta.content = 'width=device-width, initial-scale=1'
    document.head.appendChild(viewportMeta)
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    },
        onScroll () {
      if (window.pageYOffset < 0) {
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    }
  }
}
</script>