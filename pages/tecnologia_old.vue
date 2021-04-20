<template>
  <div class="content">
    <MenuMobile />

    <div class="backgroundwhite"></div>

    <div class="grid3">
      <h1 class="servicos-title pressura60">
        Seu próximo escritório não é um escritório.<br />É um ponto de encontro.
      </h1>
      <h4 class="servicos-description graphik24 gray">
        Skedway trás uma nova abordagem na gestão de espaços corporativos e
        viabiliza um novo modelo de trabalho, que acelera sua transofrmação
        digital com sustentabilidade e inteligência.
      </h4>

      <img
        :data-srcset="require('~/assets/images/tecnologia/image181.jpg').srcSet"
        class="lazyload img-intro-tech"
      />
      <div class="linha-div" />
    </div>

    <div class="grid3">
      <h1 class="servicos-title pressura60">
        Chegou a hora de usar seus espaços corporativos de forma inteligente
      </h1>
      <h4 class="servicos-description-2 graphik24 gray">
        Com Skedway é possível organizar o agendamento de salas e posições de
        trabalho com regras e horários pré-definidos. Reduza investimentos em
        infra-estrutura e permita um perfeito equilíbrio entre Home Office e
        colaboração presencial
      </h4>

      <div class="espacos-item-1">
        <div class="pressura40 black espacos-item-title">
          Agendamento de salas de reunião
        </div>
        <div class="graphik16 gray">
          Agendamento inteligente, solicitações especiais, controle de ckeck-in,
          check-out e muito mais.
        </div>
      </div>

      <div class="espacos-item-2">
        <div class="pressura40 black espacos-item-title">
          Agendamento de posições
        </div>
        <div class="graphik16 gray espacos-item-description">
          Trabalhe nas metodologias “Hot Desk” e “Hoteling”, controlando o uso
          das posiçñoes através de Check-in e Check-out.
        </div>
      </div>

      <div class="linha-div" />
    </div>

    <div class="grid3">
      <h1 class="servicos-title pressura60">
        Como funciona?
      </h1>
      <h4 class="servicos-description graphik24 gray">
        A plataforma Skedway pode ser utilizada das mais variadas formas, seja
        através de PCs, smartphones, tablets e dispositivos do tipo “Room
        Display”. Além disso Skedway é totalmente compatível com seu Office 365
        ou G-Suite.
      </h4>

      <img
        :data-srcset="require('~/assets/images/tecnologia/image183.jpg').srcSet"
        class="lazyload img-intro-tech"
      />
      <div class="linha-div" />
    </div>

    <div class="grid3">
      <h1 class="servicos-title pressura60">
        Tenha controle absoluto de seus espaços
      </h1>
      <h4 class="servicos-description graphik24 gray">
        A plataforma Skedway permite que você configure as mais diversas
        políticas de uso, organizando a ocupação de salas e posições de trabalho
        como nenhum outro sistema permite.
      </h4>
    </div>
    <div class="grid4">
      <div class="controle-item">
        <div class="pressura40 black servicos-title">
          Nível de acesso
        </div>
        <div class="graphik16 gray">
          Com Skedway é possível definir diferentes permissões de acesso,
          restringindo o agendamento de alguns espaços para colaboradores
          específicos, conforme cargos e funções.
        </div>
      </div>

      <div class="controle-item">
        <div class="pressura40 black servicos-title">
          taxa mínima de ocupação
        </div>
        <div class="graphik16 gray">
          Evite o desperdicio de espaços. Permita que os agendamentos estejam de
          acordo com a capacidade das salas.
        </div>
      </div>

      <div class="controle-item">
        <div class="pressura40 black servicos-title">
          grupo de regras
        </div>
        <div class="graphik16 gray">
          Configure as pernissões do sistema criando grupos de regras
          específicas. Controle o que os usuários podem ver ou acessar. Mantenha
          as informações pessoais protegidas por funções.
        </div>
      </div>

      <div class="controle-item">
        <div class="pressura40 black servicos-title">
          centro de custo
        </div>
        <div class="graphik16 gray">
          Controle o uso de seus espaços utilizando Centros de Custos e evite
          agendamentos desnecessários. Seja mais eficiente e poupe
          investimentos.
        </div>
      </div>
    </div>

    <div class="grid3">
      <div class="linha-div" />
      <h1 class="servicos-title pressura60">
        produtos disponíveis
      </h1>
      <h4 class="servicos-description graphik24 gray">
        A tecnlogia Skedway está disponível nas linhas de estações de trabalho e
        reuniões da Escinter.
      </h4>
    </div>

    <CategoryItem
      title="Estações de trabalho"
      link="mobiliario_corporativo/estacoes_de_trabalho"
      imgproduct1="mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/hero_b.jpg"
      nameproduct1="Target"
      brandproduct1="Escinter"
      linkproduct1="mobiliario_corporativo/estacaodetrabalho/fixa"
      imgproduct2="mobiliariocorporativo/estacaodetrabalho/1_2_Regulaveis/1_2_1_Escinter_Alto/hero_b.jpg"
      nameproduct2="Alto"
      brandproduct2="Escinter"
      linkproduct2="mobiliario_corporativo/estacaodetrabalho/alto"
    />

    <CategoryItem
      title="Reuniões"
      link="mobiliario_corporativo/reunioes"
      imgproduct1="mobiliariocorporativo/reunioes/3_1_Escinter_Point/hero_b.jpg"
      nameproduct1="Point"
      brandproduct1="Escinter"
      linkproduct1="mobiliario_corporativo/reuniao/point"
      imgproduct2="mobiliariocorporativo/reunioes/3_2_Escinter_Componivel/hero_b.jpg"
      nameproduct2="Componivel"
      brandproduct2="Escinter"
      linkproduct2="mobiliario_corporativo/reuniao/componivel"
    />
  </div>
</template>

<style scoped>
.backgroundwhite {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: white;
  z-index: -1;
  margin-top: -415px;
}

.content {
  padding-top: 415px;
}

.servicos-title {
  grid-column: 1/3;
  margin-bottom: 39px;
}

.servicos-description {
  grid-column: 1/3;
  margin-bottom: 64px;
}

.img-intro-tech {
  grid-column: 1/4;
  margin-bottom: 64px;
}

.linha-div {
  grid-column: 1/4;
  height: 1px;
  background-color: #dedcdb;
  margin-bottom: 40px;
}

.servicos-description-2 {
  grid-column: 1/3;
  margin-bottom: 120px;
}

.espacos-item-1 {
  grid-column: 1/2;
  margin-bottom: 84px;
  display: grid;
}

.espacos-item-2 {
  grid-column: 2/3;
  margin-bottom: 84px;
  display: grid;
}

.espacos-item-title {
  margin-bottom: 20px;
}

.espacos-item-description {
  align-self: end;
}

.controle-item {
  margin-bottom: 84px;
}

@media screen and (max-width: 1020px) {
  .backgroundwhite {
    margin-top: -157px;
  }

  .content {
    padding-top: 157px;
  }

  .img-intro-tech {
    grid-column: 1/3;
    margin-bottom: 64px;
  }

  .linha-div {
    grid-column: 1/3;
    margin-bottom: 40px;
  }

  .espacos-item-1 {
    grid-column: 1/3;
    margin-bottom: 40px;
  }

  .espacos-item-2 {
    grid-column: 1/3;
    margin-bottom: 40px;
  }

  .controle-item {
    margin-bottom: 40px;
  }

  .servicos-title {
    margin-bottom: 20px;
  }
}
</style>

<script>
import CategoryItem from "~/components/CategoryItem.vue";
import DesignerItem from "~/components/DesignerItem.vue";
import MenuMobile from "~/components/MenuMobile.vue";

export default {
  components: {
    CategoryItem,
    DesignerItem,
    MenuMobile
  },
  data() {
    return {
      title: "Tecnologia"
    };
  },
  head() {
    return {
      title: this.title
    };
  }
};
</script>
