<template>
<div class="content">

  <Menu />
  <MenuMobile />

 <div class="nav-tipos navbar" :class="{ 'hidden-navbar': !showNavbar }">
      <div class="nav-tipos-menu">
      <div class="nav-tipos-hover" />
      <div class="nav-tipos-toggle"><div class="nav-tipos-toggle-label graphik16">Tipos</div></div>
        <ul class="nav-tipos-items graphik16">
          <li><a href="#" v-scroll-to="'#luminarias'">Luminárias</a></li>
          <li><a href="#" v-scroll-to="'#suporte-monitor'">Suporte de monitor</a></li>
          <li><a href="#" v-scroll-to="'#quickstand'">Quickstand</a></li>
          <li><a href="#" v-scroll-to="'#diversos'">Diversos</a></li>
        </ul>
    </div>
  </div>

  <div class="category-list grid3">
    <h1 class="category-name pressura60">Acessórios</h1>

        <div class="menu-anchor graphik18 gray">
        <ul>
          <li class="black" style="margin-bottom: 8px;">Tipos</li>
          <li><a href="#" v-scroll-to="'#luminarias'">Luminárias</a></li>
          <li><a href="#" v-scroll-to="'#suporte-monitor'">Suporte de monitor</a></li>
          <li><a href="#" v-scroll-to="'#quickstand'">Quickstand</a></li>
          <li><a href="#" v-scroll-to="'#diversos'">Diversos</a></li>
        </ul>
      </div>

    <div class="linha-div"></div>

      
      <!-- LUMINÁRIAS -->
      
      <h2 id="luminarias" class="sub-category-name pressura40">Luminárias</h2>

      <ItemProduto
        linkproduct="mobiliario_corporativo/acessorio/sparrow"
        imgproduct="mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_1_Knoll_Sparrow/hero.jpg"
        nameproduct="Sparrow"
        brandproduct="Knoll"
      />  

      <ItemProduto
        linkproduct="mobiliario_corporativo/acessorio/unfold"
        imgproduct="mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_2_Muuto_Unfold/hero.jpg"
        nameproduct="Unfold"
        brandproduct="Muuto"
      />  

      <ItemProduto
        linkproduct="mobiliario_corporativo/acessorio/under-the-bell"
        imgproduct="mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_3_Muuto_Underthebell/hero.jpg"
        nameproduct="Under the Bell"
        brandproduct="Muuto"
      />  

      <ItemProduto
        linkproduct="mobiliario_corporativo/acessorio/cosy"
        imgproduct="mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_4_Muuto_Cosy/hero.jpg"
        nameproduct="Cosy"
        brandproduct="Muuto"
      />  

      <ItemProduto
        linkproduct="mobiliario_corporativo/acessorio/wood"
        imgproduct="mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_5_Muuto_Wood/hero.jpg"
        nameproduct="Wood"
        brandproduct="Muuto"
      />  

      <ItemProduto
        linkproduct="mobiliario_corporativo/acessorio/leaf"
        imgproduct="mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_6_Muuto_Leaf/hero.jpg"
        nameproduct="Leaf"
        brandproduct="Muuto"
      /> 

      <ItemProduto
        linkproduct="mobiliario_corporativo/acessorio/post-wall"
        imgproduct="mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_7_Muuto_Postwall/hero.jpg"
        nameproduct="Post Wall"
        brandproduct="Muuto"
      /> 

      <ItemProduto
        linkproduct="mobiliario_corporativo/acessorio/element-disc"
        imgproduct="mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_8_Humanscale_Element_Disc/hero.jpg"
        nameproduct="Element Disc"
        brandproduct="Humanscale"
      />  

      <ItemProduto
        linkproduct="mobiliario_corporativo/acessorio/element-vision"
        imgproduct="mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_9_Humanscale_Element_Vicion/hero.jpg"
        nameproduct="Element Vision"
        brandproduct="Humanscale"
      />  

      <ItemProduto
        linkproduct="mobiliario_corporativo/acessorio/horizon"
        imgproduct="mobiliariocorporativo/acessorios/7_1_Luminarias/7_1_10_Humanscale_Horizon/hero.jpg"
        nameproduct="Horizon"
        brandproduct="Humanscale"
      />   



      <!-- SUPORTE MONITOR -->

      <div class="linha-div space"></div>
      <h2 id="suporte-monitor" class="sub-category-name pressura40">Suporte de monitor</h2>

      <ItemProduto
        linkproduct="mobiliario_corporativo/acessorio/esc721"
        imgproduct="mobiliariocorporativo/acessorios/7_2_Suporte_Monitor/7_2_1_Escinter_Esc721/hero.jpg"
        nameproduct="ESC721"
        brandproduct="Escinter"
      />  

      <ItemProduto
        linkproduct="mobiliario_corporativo/acessorio/esc723"
        imgproduct="mobiliariocorporativo/acessorios/7_2_Suporte_Monitor/7_2_2_Escinter_Esc723/hero.jpg"
        nameproduct="ESC723"
        brandproduct="Escinter"
      />  

      <ItemProduto
        linkproduct="mobiliario_corporativo/acessorio/esc724"
        imgproduct="mobiliariocorporativo/acessorios/7_2_Suporte_Monitor/7_2_3_Escinter_Esc724/hero.jpg"
        nameproduct="ESC724"
        brandproduct="Escinter"
      /> 

      <ItemProduto
        linkproduct="mobiliario_corporativo/acessorio/sapper50"
        imgproduct="mobiliariocorporativo/acessorios/7_2_Suporte_Monitor/7_2_4_Knoll_Sapper50/hero.jpg"
        nameproduct="Sapper 50"
        brandproduct="Knoll"
      />  

      <ItemProduto
        linkproduct="mobiliario_corporativo/acessorio/sapperxyz"
        imgproduct="mobiliariocorporativo/acessorios/7_2_Suporte_Monitor/7_2_5_Knoll_Sapperxyz/hero.jpg"
        nameproduct="Sapper XYZ"
        brandproduct="Knoll"
      />  

      <ItemProduto
        linkproduct="mobiliario_corporativo/acessorio/sapper"
        imgproduct="mobiliariocorporativo/acessorios/7_2_Suporte_Monitor/7_2_6_Knoll_Sapper/hero.jpg"
        nameproduct="Sapper"
        brandproduct="Knoll"
      />  

      <ItemProduto
        linkproduct="mobiliario_corporativo/acessorio/"
        imgproduct="mobiliariocorporativo/acessorios/7_2_Suporte_Monitor/7_2_7_Humanscale_m21/hero.jpg"
        nameproduct="M2.1"
        brandproduct="Humanscale"
      />  

      <ItemProduto
        linkproduct="mobiliario_corporativo/acessorio/m81"
        imgproduct="mobiliariocorporativo/acessorios/7_2_Suporte_Monitor/7_2_8_Humanscale_m81/hero.jpg"
        nameproduct="M8.1"
        brandproduct="Humanscale"
      />  

      <ItemProduto
        linkproduct="mobiliario_corporativo/acessorio/m10"
        imgproduct="mobiliariocorporativo/acessorios/7_2_Suporte_Monitor/7_2_9_Humanscale_m10/hero.jpg"
        nameproduct="M10"
        brandproduct="Humanscale"
      />  

      <ItemProduto
        linkproduct="mobiliario_corporativo/acessorio/mflex"
        imgproduct="mobiliariocorporativo/acessorios/7_2_Suporte_Monitor/7_2_10_Humanscale_Mflex/hero.jpg"
        nameproduct="MFlex"
        brandproduct="Humanscale"
      />  



      <!-- QUICKSTAND -->

      <div class="linha-div space"></div>
      <h2 id="quickstand" class="sub-category-name pressura40">Quickstand</h2>

      <ItemProduto
        linkproduct="mobiliario_corporativo/acessorio/quickstand-eco"
        imgproduct="mobiliariocorporativo/acessorios/7_3_Quickstand/7_3_1_Humanscale_Quickstand_Eco/hero.jpg"
        nameproduct="Quickstand Eco"
        brandproduct="Humanscale"
      />  

      <ItemProduto
        linkproduct="mobiliario_corporativo/acessorio/quickstand"
        imgproduct="mobiliariocorporativo/acessorios/7_3_Quickstand/7_3_2_Humanscale_Quickstand/hero.jpg"
        nameproduct="Quickstand"
        brandproduct="Humanscale"
      />  

      <ItemProduto
        linkproduct="mobiliario_corporativo/acessorio/quickstand-lite"
        imgproduct="mobiliariocorporativo/acessorios/7_3_Quickstand/7_3_3_Humanscale_Quickstand_Lite/hero.jpg"
        nameproduct="Quickstand Lite"
        brandproduct="Humanscale"
      />  



      <!-- DIVERSOS -->

      <div class="linha-div space"></div>
      <h2 id="diversos" class="sub-category-name pressura40">Diversos</h2>

      <ItemProduto
        linkproduct="mobiliario_corporativo/acessorio/suporte-cpu"
        imgproduct="mobiliariocorporativo/acessorios/7_4_Diversos/7_4_1_Escinter_SuporteCPU/hero.jpg"
        nameproduct="Suporte CPU"
        brandproduct="Escinter"
      /> 

      <ItemProduto
        linkproduct="mobiliario_corporativo/acessorio/prateleira-cpu"
        imgproduct="mobiliariocorporativo/acessorios/7_4_Diversos/7_4_2_Escinter_PrateleiraCPU/hero.jpg"
        nameproduct="Prateleira CPU"
        brandproduct="Escinter"
      /> 

      <ItemProduto
        linkproduct="mobiliario_corporativo/acessorio/fm100"
        imgproduct="mobiliariocorporativo/acessorios/7_4_Diversos/7_4_3_Humanscale_Fr100/hero.jpg"
        nameproduct="FM100"
        brandproduct="Humanscale"
      />  

      <ItemProduto
        linkproduct="mobiliario_corporativo/acessorio/fm300"
        imgproduct="mobiliariocorporativo/acessorios/7_4_Diversos/7_4_4_Humanscale_Fr300/hero.jpg"
        nameproduct="FM300"
        brandproduct="Humanscale"
      />  

      <ItemProduto
        linkproduct="mobiliario_corporativo/acessorio/fm500"
        imgproduct="mobiliariocorporativo/acessorios/7_4_Diversos/7_4_5_Humanscale_Fr500/hero.jpg"
        nameproduct="FM500"
        brandproduct="Humanscale"
      />  

      <ItemProduto
        linkproduct="mobiliario_corporativo/acessorio/cpu200"
        imgproduct="mobiliariocorporativo/acessorios/7_4_Diversos/7_4_6_Humanscale_CPU200/hero.jpg"
        nameproduct="CPU200"
        brandproduct="Humanscale"
      />  

      <ItemProduto
        linkproduct="mobiliario_corporativo/acessorio/cpu600"
        imgproduct="mobiliariocorporativo/acessorios/7_4_Diversos/7_4_7_Humanscale_CPU600/hero.jpg"
        nameproduct="CPU600"
        brandproduct="Humanscale"
      />  

      <ItemProduto
        linkproduct="mobiliario_corporativo/acessorio/techtray"
        imgproduct="mobiliariocorporativo/acessorios/7_4_Diversos/7_4_8_Humanscale_Techtray/hero.jpg"
        nameproduct="Techtray"
        brandproduct="Humanscale"
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
        padding-top: 227px;
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
      title: 'Acessórios',
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