<template>
  <div>

    <!-- MENU -->

    <div class="navigation">

    <nuxt-link to="/">
    <lottie class="logo-escinter" :options="defaultOptions" :top="31" :height="74" :left="26" :width="45" v-on:animCreated="handleAnimation"/>
    </nuxt-link>

      <ul class="secondary-menu graphik16">
        <nuxt-link to="/servicos" exact-active-class="active-link"><li class="secondary-menu-item">Serviços</li></nuxt-link>
        <nuxt-link to="/sobre" exact-active-class="active-link"><li class="secondary-menu-item">Sobre</li></nuxt-link>
        <nuxt-link to="/contato" exact-active-class="active-link"><li class="secondary-menu-item">Contato</li></nuxt-link>
      </ul>
    </div>

    <div class="primary-menu grid4">
    <nuxt-link id="mobiliario-corporativo" class="menu-primario-hover graphik18" to="/mobiliario-corporativo" exact-active-class="active-link">Mobiliário Corporativo</nuxt-link>
    <nuxt-link class="menu-primario-hover graphik18" to="/knoll-design" exact-active-class="active-link">Knoll Design</nuxt-link>

    <div class="category-products category-products2">
    <ul class="graphik18">
      <nuxt-link to="/mobiliario_corporativo/estacoes_de_trabalho" exact-active-class="active-link"><li class="secondary-menu-item">Estações de trabalho</li></nuxt-link>
      <nuxt-link to="/mobiliario_corporativo/assentos" exact-active-class="active-link"><li class="secondary-menu-item">Assentos</li></nuxt-link>
      <nuxt-link to="/mobiliario_corporativo/reunioes" exact-active-class="active-link"><li class="secondary-menu-item">Reuniões</li></nuxt-link>
      <nuxt-link to="/mobiliario_corporativo/armazenamento" exact-active-class="active-link"><li class="secondary-menu-item">Armazenamento</li></nuxt-link>
      <nuxt-link to="/mobiliario_corporativo/colaborativos" exact-active-class="active-link"><li class="secondary-menu-item">Colaborativos</li></nuxt-link>
      <nuxt-link to="/mobiliario_corporativo/workbetter" exact-active-class="active-link"><li class="secondary-menu-item">Workbetter</li></nuxt-link>
      <nuxt-link to="/mobiliario_corporativo/acessorios" exact-active-class="active-link"><li class="secondary-menu-item">Acessórios</li></nuxt-link>
      <nuxt-link to="/mobiliario_corporativo/divisorias" exact-active-class="active-link"><li class="secondary-menu-item">Divisórias</li></nuxt-link>
      <nuxt-link to="/mobiliario_corporativo/carpetes" exact-active-class="active-link"><li class="secondary-menu-item">Carpetes</li></nuxt-link>
    </ul>
    </div>
    </div>

    <nuxt />


    <!-- FOOTER -->

    <footer class="grid3">
      <div class="linha-div" />

      <div class="item-footer">
        <ul>
          <nuxt-link to="/mobiliario-corporativo" exact-active-class="active-link"><li class="graphik16 footer-item-title black">Mobiliário corporativo</li></nuxt-link>
          <nuxt-link to="/mobiliario_corporativo/estacoes_de_trabalho" exact-active-class="active-link"><li class="graphik16 gray footer-item-list">Estações de trabalho</li></nuxt-link>
          <nuxt-link to="/mobiliario_corporativo/assentos" exact-active-class="active-link"><li class="graphik16 gray footer-item-list">Assentos</li></nuxt-link>
          <nuxt-link to="/mobiliario_corporativo/reunioes" exact-active-class="active-link"><li class="graphik16 gray footer-item-list">Reuniões</li></nuxt-link>
          <nuxt-link to="/mobiliario_corporativo/armazenamento" exact-active-class="active-link"><li class="graphik16 gray footer-item-list">Armazenamento</li></nuxt-link>
          <nuxt-link to="/mobiliario_corporativo/colaborativos" exact-active-class="active-link"><li class="graphik16 gray footer-item-list">Colaborativos</li></nuxt-link>
          <nuxt-link to="/mobiliario_corporativo/workbetter" exact-active-class="active-link"><li class="graphik16 gray footer-item-list">Workbetter</li></nuxt-link>
          <nuxt-link to="/mobiliario_corporativo/acessorios" exact-active-class="active-link"><li class="graphik16 gray footer-item-list">Acessórios</li></nuxt-link>
          <nuxt-link to="/mobiliario_corporativo/divisorias" exact-active-class="active-link"><li class="graphik16 gray footer-item-list">Divisórias</li></nuxt-link>
          <nuxt-link to="/mobiliario_corporativo/carpetes" exact-active-class="active-link"><li class="graphik16 gray footer-item-list">Carpetes</li></nuxt-link>
        </ul>
      </div> 

      <div class="item-footer">
        <ul>
          <nuxt-link to="/knoll-design" exact-active-class="active-link"><li class="graphik16 black footer-item-list">Knoll Design</li></nuxt-link>
          <nuxt-link to="/servicos" exact-active-class="active-link"><li class="graphik16 black footer-item-list">Serviços</li></nuxt-link>
          <nuxt-link to="/sobre" exact-active-class="active-link"><li class="graphik16 black footer-item-list">Sobre</li></nuxt-link>
          <nuxt-link to="/contato" exact-active-class="active-link"><li class="graphik16 black footer-item-list">Contato</li></nuxt-link>
        </ul>
      </div> 

      <div class="item-footer contact">
        <ul>
          <li class="graphik16 footer-item-title black">Showroom</li>
          <li class="graphik16 gray">Rua Aspicuelta, 248</li>
          <li class="graphik16 gray">Vila Madalena</li>
          <li class="graphik16 gray">São Paulo, SP</li>
          <li class="footer-item-title"><br></li>
          <li><br></li>
          <li class="graphik16 footer-item-title black">Contato</li>
          <li class="graphik16 gray">11 3062 5044</li>
          <li class="graphik16 gray"><a href="mailto:contato@escinter.com.br" target="_blank">contato@escinter.com.br</a></li>
        </ul>
      </div>  

      <div class="item-footer-end">
        <ul>
          <img style="width:150px;" src="~assets/logo-horizontal.svg" />
        </ul>
      </div>   

      <div class="item-footer-end" />   

      <div class="item-footer-end copyright">
        <ul>
          <li class="pressura15 gray">© escinter, todos os direitos reservados</li>
        </ul>
      </div>   
    </footer>
  </div>
</template>

<style scoped>
  footer {
    overflow-x: hidden;
  }

  .navigation-mobile {
    display: none;
  }

  .navigation {
    position: relative;
    width: 144px;
    height: 100%;
  }

  .logo-escinter {
    position: fixed;
    left: 28px;
    top: 32px;
    width: 40px;
    z-index: 10001;
  }

  .secondary-menu {
    position: fixed;
    left: 28px;
    bottom: 24px;
    z-index: 9999;
  }

  .primary-menu {
    margin-top: 30px;
    position: absolute;
    width: calc(100% - 172px);
    z-index: 9999;
  }

  .primary-menu li {
    padding-bottom: 4px;
  }

  .menu-primario-hover {
    grid-column: 1;
    margin-bottom: 4px;
  }

  .category-products {
    opacity: 0;
    transition: 0.3s;
    margin-top: -27px;
  }

  #mobiliario-corporativo:hover ~ .category-products {
    opacity: 1;
    transition: 0.3s;
  }

  .category-products:hover {
    opacity: 1;
    transition: 0.3s;
  }

  .category-products:hover ~ #mobiliario-corporativo a {
    color: #222!important;
  }

  .linha-div {
    grid-column: 1/4;
    height: 1px;
    background-color: #DEDCDB;
    margin-bottom: 40px;
  }

  .item-footer {
    margin-bottom: 104px;
  }
  
  .item-footer-end {
    margin-bottom: 40px;
  }

  .footer-item-title {
    margin-bottom: 12px;
  }

  .footer-item-list {
    padding-bottom: 4px;
  }

    .footer-item-list:hover {
    color: #222222;
  }

  .copyright {
    margin-top: 15px;
  }




  @media screen and (max-width: 1020px) {

    .navigation-mobile {
      display: block;
    }

    .button-closed {
      position: fixed;
      width: 100vw;
      height: 56px;
      border-top: solid 1px #c4c4c4;
      background-color: #F8F5F2;
      bottom: 0;
      z-index: 10001;
    }

    .button-closed-label {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
    }

    #burger {
      position: fixed;
      width: 100%;
      height: 56px;
      bottom: 0;
      z-index: 10002;
      padding: 0;
      margin: 0;
      opacity: 0;
    }

    #burger:checked ~ .menu-open {
      background-color: white;
      transform: translateY(0vh);
      transition: 0.5s;
    }

    .menu-open {
      position: fixed;
      width: 100vw;
      height: 100vh;
      background-color: white;
      transform: translateY(100vh);
      top: 0;
      z-index: 10000;
    }

    .menu-primario-mobile {
      position: relative;
      margin: 126px 8px 0 20px;
    }

    .menu-primario-mobile li {
      padding-bottom: 12px;
    }

    .logo-escinter {
      left: 20px;
      top: 20px;
      width: 40px;
    }

    .primary-menu {
      margin-top: 108px;
      width: calc(100% - 40px);
    }

    .menu-primario-hover {
      grid-column: 1/3;
    }

    .secondary-menu {
      display: none;
    }

    .category-products {
      display: none;
    }

  .linha-div {
    grid-column: 1/3;
        margin-bottom: 28px;

  }

  .item-footer {
    margin-bottom: 40px;
  }

  .contact {
    grid-column: 1/3;
  }


  .copyright {
    grid-column: 1/3;
    margin-bottom: 80px;
    margin-right: -40px;
  }

  }
</style>

<script>
import Lottie from "~/components/lottie.vue";

import * as animationData from "~/assets/logo/logo.json";

export default {
  components: {
    Lottie
  },
  data() {
    return {
      defaultOptions: { animationData: animationData },
      animationSpeed: 1
    };
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    },
  }
};
</script>