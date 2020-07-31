<template>
    <div class="primary-menu grid4">
    <div></div>

    <ul class="graphik18">
      <nuxt-link to="/mobiliario_corporativo/estacoes_de_trabalho" exact-active-class="active-link"><li class="secondary-menu-item">Estações de trabalho</li></nuxt-link>
      <nuxt-link to="/mobiliario_corporativo/assentos" exact-active-class="active-link"><li class="secondary-menu-item">Assentos</li></nuxt-link>
      <nuxt-link to="/mobiliario_corporativo/reunioes" exact-active-class="active-link"><li class="secondary-menu-item">Reuniões</li></nuxt-link>
      <nuxt-link to="/mobiliario_corporativo/armazenamento" exact-active-class="active-link"><li class="secondary-menu-item">Armazenamento</li></nuxt-link>
      <nuxt-link to="/mobiliario_corporativo/colaborativos" exact-active-class="active-link"><li class="secondary-menu-item">Colaborativos</li></nuxt-link>
      <nuxt-link to="/mobiliario_corporativo/workbetter" exact-active-class="active-link"><li class="secondary-menu-item">Workbetter</li></nuxt-link>
      <nuxt-link to="/mobiliario_corporativo/acessorios" exact-active-class="active-link"><li class="secondary-menu-item">Acessórios</li></nuxt-link>
    </ul>
    </div>
</template>

<style scoped>
  .primary-menu {
    margin-bottom: 160px;
  }

  .primary-menu li {
    padding-bottom: 4px;
  }

    @media screen and (max-width: 1020px) {
      .primary-menu {
        display: none;
      }
    }
</style>