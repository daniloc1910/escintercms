<template>
    <div class="navigation-mobile">
      
      <input type="checkbox" id="burger">

      <div class="button-closed">
        <div class="graphik18 gray button-closed-label">Menu</div>
      </div>

      <div class="menu-open">
        <div class="scrollable">
        <ul class="menu-primario-mobile">
          <nuxt-link to="/mobiliario-corporativo" exact-active-class="active-link"><li class="graphik24 black">Mobiliário Corporativo</li></nuxt-link>
          <nuxt-link to="/mobiliario_corporativo/estacoes_de_trabalho" exact-active-class="active-link"><li class="graphik24 gray">Estações de trabalho</li></nuxt-link>
          <nuxt-link to="/mobiliario_corporativo/assentos" exact-active-class="active-link"><li class="graphik24 gray">Assentos</li></nuxt-link>
          <nuxt-link to="/mobiliario_corporativo/reunioes" exact-active-class="active-link"><li class="graphik24 gray">Reuniões</li></nuxt-link>
          <nuxt-link to="/mobiliario_corporativo/armazenamento" exact-active-class="active-link"><li class="graphik24 gray">Armazenamento</li></nuxt-link>
          <nuxt-link to="/mobiliario_corporativo/colaborativos" exact-active-class="active-link"><li class="graphik24 gray">Colaborativos</li></nuxt-link>
          <nuxt-link to="/mobiliario_corporativo/workbetter" exact-active-class="active-link"><li class="graphik24 gray">Workbetter</li></nuxt-link>
          <nuxt-link to="/mobiliario_corporativo/acessorios" exact-active-class="active-link"><li class="graphik24 gray">Acessórios</li></nuxt-link>
          <nuxt-link to="/mobiliario_corporativo/divisorias" exact-active-class="active-link"><li class="graphik24 gray">Divisórias</li></nuxt-link>
          <nuxt-link to="/mobiliario_corporativo/carpetes" exact-active-class="active-link"><li class="graphik24 gray">Carpetes</li></nuxt-link>
        </ul>

        <ul class="menu-primario-mobile-2">
          <nuxt-link to="/knoll-design" exact-active-class="active-link"><li class="graphik24 black">Knoll Design</li></nuxt-link>
        </ul>

        <ul class="menu-secundario-mobile graphik16">
          <nuxt-link to="/projetos" exact-active-class="active-link"><li class="black">Projetos</li></nuxt-link>
          <nuxt-link to="/servicos" exact-active-class="active-link"><li class="black">Serviços</li></nuxt-link>
          <nuxt-link to="/sobre" exact-active-class="active-link"><li class="black">Sobre</li></nuxt-link>
          <nuxt-link to="/contato" exact-active-class="active-link"><li class="black">Contato</li></nuxt-link>
        </ul>
        </div>
      </div>

    </div>
</template>

<style scoped>
  .navigation-mobile {
    display: none;
  }

  @media screen and (max-width: 1020px) {

    .navigation-mobile {
      display: block;
    }

    .black {
      color: white !important;
    }

    ul .gray {
      color: white !important;
      opacity: 0.6;
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
      transform: translateY(0vh);
      transition: 0.5s;
    }

    .menu-open {
      position: fixed;
      width: 100vw;
      min-height: 100vh;
      background-color: #EF4545;
      transform: translateY(100vh);
      top: 0;
      z-index: 10000;
      transition: 0.5s;
    }

    .scrollable {
      position: absolute;
      overflow-y: auto;
      height: 100%;
      width: 100%;
    }

    .menu-primario-mobile {
      position: relative;
      margin: 126px 8px 0 20px;
    }

    .menu-primario-mobile-2 {
      position: relative;
      margin: 20px 8px 0 20px;
    }

    .menu-secundario-mobile {
      position: relative;
      margin: 40px 8px 112px 20px;
    }

    .menu-primario-mobile li {
      padding-bottom: 12px;
    }

  }
</style>