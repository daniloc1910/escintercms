<template>
  <div>
    <nuxt-link to="/"><img class="logo-escinter" src="~assets/logo.svg" /></nuxt-link>
    <ul class="secondary-menu graphik16">
      <nuxt-link to="/projetos" exact-active-class="active-link"><li class="secondary-menu-item">Projetos</li></nuxt-link>
      <nuxt-link to="/servicos" exact-active-class="active-link"><li class="secondary-menu-item">Serviços</li></nuxt-link>
      <nuxt-link to="/sobre" exact-active-class="active-link"><li class="secondary-menu-item">Sobre</li></nuxt-link>
      <nuxt-link to="/contato" exact-active-class="active-link"><li class="secondary-menu-item">Contato</li></nuxt-link>
    </ul>
    <div class="primary-menu grid3">
    <ul class="graphik18">
      <nuxt-link to="/product" exact-active-class="active-link"><li class="secondary-menu-item">Mobiliário Corporativo</li></nuxt-link>
      <nuxt-link to="/category" exact-active-class="active-link"><li class="secondary-menu-item">Knoll Design</li></nuxt-link>
      <nuxt-link to="/sollo" exact-active-class="active-link"><li class="secondary-menu-item">Sollo</li></nuxt-link>
      <nuxt-link to="/contato" exact-active-class="active-link"><li class="secondary-menu-item">Tecnologia</li></nuxt-link>
    </ul>
    </div>
    <nuxt />
  </div>
</template>

<style>
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
    z-index: 10001;
  }

  .primary-menu {
    margin-top: 30px;
    position: absolute;
    width: calc(100% - 172px);
    z-index: 10000;
  }

  .primary-menu li {
    padding-bottom: 4px;
  }

  .active-link {
    color: #222;
  }
</style>