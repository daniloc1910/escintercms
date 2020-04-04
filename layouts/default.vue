<template>
  <div>
    <nuxt-link to="/"><img class="logo-escinter" src="~assets/logo.svg" /></nuxt-link>
    <ul class="secondary-menu graphik16">
      <nuxt-link to="/projetos" exact-active-class="active-link"><li class="secondary-menu-item">Projetos</li></nuxt-link>
      <nuxt-link to="/servicos" exact-active-class="active-link"><li class="secondary-menu-item">Serviços</li></nuxt-link>
      <nuxt-link to="/sobre" exact-active-class="active-link"><li class="secondary-menu-item">Sobre</li></nuxt-link>
      <nuxt-link to="/contato" exact-active-class="active-link"><li class="secondary-menu-item">Contato</li></nuxt-link>
    </ul>

    <div class="primary-menu grid4">
    <nuxt-link id="mobiliario-corporativo" class="menu-primario-hover graphik18" to="/category" exact-active-class="active-link">Mobiliário Corporativo</nuxt-link>
    <nuxt-link class="menu-primario-hover graphik18" to="/knolldesign" exact-active-class="active-link">Knoll Design</nuxt-link>
    <nuxt-link class="menu-primario-hover graphik18" to="/sollo" exact-active-class="active-link">Sollo</nuxt-link>
    <nuxt-link class="menu-primario-hover graphik18" to="/tecnologia" exact-active-class="active-link">Tecnologia</nuxt-link>

    <div class="category-products category-products2">
    <ul class="graphik18">
      <nuxt-link to="/blog" exact-active-class="active-link"><li class="secondary-menu-item">Estações de trabalho</li></nuxt-link>
      <nuxt-link to="/blog" exact-active-class="active-link"><li class="secondary-menu-item">Assentos</li></nuxt-link>
      <nuxt-link to="/sollo" exact-active-class="active-link"><li class="secondary-menu-item">Reuniões</li></nuxt-link>
      <nuxt-link to="/contato" exact-active-class="active-link"><li class="secondary-menu-item">Armazenamento</li></nuxt-link>
      <nuxt-link to="/contato" exact-active-class="active-link"><li class="secondary-menu-item">Colaborativos</li></nuxt-link>
      <nuxt-link to="/contato" exact-active-class="active-link"><li class="secondary-menu-item">Acessórios</li></nuxt-link>
      <nuxt-link to="/contato" exact-active-class="active-link"><li class="secondary-menu-item">Divisórias</li></nuxt-link>
      <nuxt-link to="/contato" exact-active-class="active-link"><li class="secondary-menu-item">Carpetes</li></nuxt-link>
    </ul>
    </div>
    </div>
    <nuxt />
  </div>
</template>

<style scoped>
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

  .menu-primario-hover {
    grid-column: 1;
    margin-bottom: 4px;
  }

  .category-products {
    opacity: 0;
    transition: 0.3s;
    margin-top: -83px;
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
</style>