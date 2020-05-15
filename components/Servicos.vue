<template>
    <div class="servicos grid3">
        <div class="linha-div" />

        <h2 class="servicos-title pressura60 coluna1-2">Serviços prestados aos nossos clientes, desde o primeiro contato comercial até a pós-ocupação</h2>

        <ul class="servicos-list graphik18 coluna1">
            <li>Layout</li>
            <li>Assistência Técnica</li>
            <li>Inventário</li>
        </ul>

        <ul class="servicos-list graphik18 coluna2">
            <li>Instalação</li>
            <li>Armazenamento</li>
            <li>Higienização</li>
        </ul>
  </div>
</template>

<style scoped>
  .linha-div {
    grid-column: 1/4;
    height: 1px;
    background-color: #DEDCDB;
    margin-bottom: 40px;
  }

@media screen and (max-width: 1020px) {
  .linha-div {
    grid-column: 1/3;
    margin-bottom: 28px;
  }  
}
</style>