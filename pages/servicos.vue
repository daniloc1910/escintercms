<template>
  <div class="content">

    <MenuMobile />

    <div class="grid3">
      <h1 class="servicos-title pressura60">
        Serviços que ajudam nossos clientes, desde o primeiro contato comercial até a pós-ocupação.
      </h1>
    </div>
    <ServicosItem
        numero="1"
        title="Layout"
        description="A Escinter é um Dealer completo da Knoll no Brasil, capaz de fornecer todos os produtos e serviços relacionados a esta parceria. Escinter e Knoll já fizeram vários projetos juntos neste país, garantindo que Contas Globais da Knoll as mesmas soluções que têm nas outras regiões do globo."
        itemlist1="• Levantamento de layout existente"
        itemlist2="• Alteração de layout"
        itemlist3="• Execução de distribuição de postos de trabalho"
        itemlist4="• Paginação de carpetes em placas"
        itemlist5="• Layout de divisórias piso-teto"
        itemlist6="• Digitalização de plantas"
    />

    <ServicosItem
        numero="2"
        title="Assistência técnica"
        description="Também temos um portfólio completo de produtos locais que nos permitem obter uma melhor resposta em custo e prazo de entrega para esse mercado."
        itemlist1="• Cobertura de garantia sem custos para o cliente"
        itemlist2="• Cotação para manutenção de peças fora da garantia"
    />

    <ServicosItem
        numero="3"
        title="Inventário"
        description="Também temos um portfólio completo de produtos locais que nos permitem obter uma melhor resposta em custo e prazo de entrega para esse mercado."
        itemlist1="• Elaboração de inventário de instalações existentes"
        itemlist2="• Elaboração de inventário de produtos armazenados"
        itemlist3="• Controle de fluxo de peças e partes"
    />

    <ServicosItem
        numero="4"
        title="Instalação"
        description="A Escinter é um Dealer completo da Knoll no Brasil, capaz de fornecer todos os produtos e serviços relacionados a esta parceria. Escinter e Knoll já fizeram vários projetos juntos neste país, garantindo que Contas Globais da Knoll as mesmas soluções que têm nas outras regiões do globo."
        itemlist1="• Instalação e remoção de carpetes em placas e rolo"
        itemlist2="• Troca de carpetes em geral"
        itemlist3="• Regularização de piso com massa PVA"
    />

    <ServicosItem
        numero="5"
        title="Armazenamento"
        description="Também temos um portfólio completo de produtos locais que nos permitem obter uma melhor resposta em custo e prazo de entrega para esse mercado."
        itemlist1="• Armazenagem de mobiliário, divisórias e outros"
        itemlist2="• Controle do estoque"
        itemlist3="• Manutenção e limpeza dos materiais armazenados"
    />

    <ServicosItem
        numero="6"
        title="Higienização"
        description="Também temos um portfólio completo de produtos locais que nos permitem obter uma melhor resposta em custo e prazo de entrega para esse mercado."
        itemlist1="• Contrato de manutenção e higienização de carpetes"
        itemlist2="• Higienização de painéis e assentos em tecido"
    />
  </div>
</template>

<style scoped>
  .content {
    padding-top: 415px;
  }

  .servicos-title {
    grid-column: 1/3;
    margin-bottom: 32px;
  }

  .servicos-description {
    grid-column: 1/4;
  }


  @media screen and (max-width: 1020px) {

    .servicos-description {
      grid-column: 1/3;
    }

    .content {
      padding-top: 157px;
    }

  }
</style>

<script>
import ServicosItem from '~/components/ServicosItem.vue'
import MenuMobile from '~/components/MenuMobile.vue'

export default {
  components: {
    ServicosItem,
    MenuMobile
  },
  data() {
    return {
      title: 'Serviços'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>