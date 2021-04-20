<template>
  <div class="content">
    <MenuMobile />

    <div class="backgroundwhite"></div>

    <div class="grid3">
      <h1 class="servicos-title pressura60">
        Chegou a hora de usar seus espaços corporativos de foma inteligente
      </h1>
      <h4 class="servicos-description graphik24 gray">
        Com Skedway você é possível organizar o agendamento de salas e posições
        de trabalho com regras e horários pré-definidos. Reduza investimentos em
        infra-estrutura e permita um perfeito equílibrio entre Home Office e
        colaboração presencial, aumentando assim a qualidade de vida de seus
        colaboradores. Reduza o impacto ambienta com deslocamentos
        desnecessários. Mais produtividade, menos custos, mais segurança em
        tempos de pandemia. É hora de fazer a diferença!
      </h4>
    </div>

    <!--agendamento-->
    <div class="grid4">
      <div class="card-agendamento">
        <img
          :data-srcset="require('~/assets/images/tecnologia/iso1.jpg').srcSet"
          class="lazyload card-agendamento-img"
        />
        <div class="pressura28 card-agendamento-title">
          agendamento de salas de reunião
        </div>
        <div class="graphik16 gray">
          Agendamento inteligente, Solicitações especiais, controle de check-in,
          Checkout e muitos mais.
        </div>
      </div>

      <div class="card-agendamento">
        <img
          :data-srcset="require('~/assets/images/tecnologia/iso2.jpg').srcSet"
          class="lazyload card-agendamento-img"
        />
        <div class="pressura28 card-agendamento-title">
          agendamento de salas de reunião
        </div>
        <div class="graphik16 gray">
          Agendamento inteligente, Solicitações especiais, controle de check-in,
          Checkout e muitos mais.
        </div>
      </div>
    </div>

    <div class="grid3">
      <div class="linha-div" />
    </div>

    <!--como funciona-->
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

    <!--controle-->
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
        <img
          :src="require('~/assets/images/tecnologia/1.svg')"
          class="lazyload icon-controle"
        />
        <div class="pressura28 black controle-item-title">
          Nível<br />de acesso
        </div>
        <div class="graphik16 gray">
          Com Skedway é possível definir diferentes permissões de acesso,
          restringindo o agendamento de alguns espaços para colaboradores
          específicos, conforme cargos e funções.
        </div>
      </div>

      <div class="controle-item">
        <img
          :src="require('~/assets/images/tecnologia/2.svg')"
          class="lazyload icon-controle"
        />
        <div class="pressura28 black controle-item-title">
          taxa mínima<br />de ocupação
        </div>
        <div class="graphik16 gray">
          Evite o desperdicio de espaços. Permita que os agendamentos estejam de
          acordo com a capacidade das salas.
        </div>
      </div>

      <div class="controle-item">
        <img
          :src="require('~/assets/images/tecnologia/3.svg')"
          class="lazyload icon-controle"
        />
        <div class="pressura28 black controle-item-title">
          grupo<br />de regras
        </div>
        <div class="graphik16 gray">
          Configure as pernissões do sistema criando grupos de regras
          específicas. Controle o que os usuários podem ver ou acessar. Mantenha
          as informações pessoais protegidas por funções.
        </div>
      </div>

      <div class="controle-item">
        <img
          :src="require('~/assets/images/tecnologia/4.svg')"
          class="lazyload icon-controle"
        />
        <div class="pressura28 black controle-item-title">
          centro<br />de custo
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
    </div>

    <!--skedway web-->
    <div class="grid3">
      <h1 class="servicos-title pressura60">
        skedway web, disponível no navegador mais próximo de você
      </h1>
      <h4 class="servicos-description graphik24 gray">
        Tenha, em um só lugar, acesso rápido aos mais avançados recursos de
        agendamento e configuração da plataforma Skedway. Com filtros especiais
        e uma exclusiva interface para a visualização dos espaços disponíveis,
        você poderá reservar suas salas e posições de trabalho em segundos.
      </h4>

      <img
        :data-srcset="
          require('~/assets/images/tecnologia/skedwayweb.jpg').srcSet
        "
        class="lazyload img-intro-tech"
      />
    </div>

    <!--skedway analytics-->
    <div class="grid3">
      <h1 class="servicos-title pressura60">
        skedway analytics. informação vital em tempo real
      </h1>
      <h4 class="servicos-description graphik24 gray">
        Com Skedway você tem visibilidade total de seus espaços corporativos.
        Entenda melhor a dinâmica de sagendamentos e otimize seus investimentos
        em “Real Estate”. Pare de disperdiçar recursos importantes por falta de
        informação. Skedway é um divisor de águas.
      </h4>

      <img
        :data-srcset="
          require('~/assets/images/tecnologia/skedwayanalytics.jpg').srcSet
        "
        class="lazyload img-intro-tech"
      />

      <div class="linha-div" />
    </div>

    <!--outlook-->
    <div class="grid3">
      <h1 class="servicos-title pressura60">
        skedwayadd-in. seu outlook com super poderes
      </h1>
      <h4 class="servicos-description graphik24 gray">
        Se você já usa o Microsoft Outlook para agendamentos, com Skedway Add-in
        você terá recursos poderosos para acelerar sua pesquisa e reserva de
        espaços. Tudo sem mudar seu jeito de trabalhar.
      </h4>

      <img
        :data-srcset="require('~/assets/images/tecnologia/image181.jpg').srcSet"
        class="lazyload img-intro-tech"
      />

      <div class="linha-div" />
    </div>

    <!--room display-->
    <div class="grid3">
      <h1 class="servicos-title pressura60">
        skedway room display app. várias opções de check-in. muito além do
        básico.
      </h1>
      <img
        :data-srcset="
          require('~/assets/images/tecnologia/displayapp.jpg').srcSet
        "
        class="lazyload img-intro-tech"
      />

      <div class="controle-item">
        <div class="pressura28 black controle-item-title">
          slide easy timeline. a agenda do espaço como deve ser.
        </div>
        <div class="graphik16 gray">
          Visualize a agenda de seu espaço da forma mais simples possível.
          Através de uma lista de eventos sequencial é possível entender quais
          as principais reuniões e qual a duração média de cada uma.
        </div>
      </div>

      <div class="controle-item">
        <div class="pressura28 black controle-item-title">
          chart calendar. cores e gráficos que ajudam a encontrar o melhor dia
          para a reunião.
        </div>
        <div class="graphik16 gray">
          Com o recurso Chart Calendar é possível visualizar o nível de
          utilização do espaço em cada dia do mês, através de cores e gráficos.
          Tudo simples e óbvio.
        </div>
      </div>

      <div class="controle-item">
        <div class="pressura28 black controle-item-title">
          space quick look. tudo o que você precisa saber em apenas uma tela.
        </div>
        <div class="graphik16 gray">
          Com Skedway você consegue saber tudo sobre um espaço sem ao menos
          entrar nele. Descubra qual a sua capacidade e quais os principais
          recursos disponíveis com apenas um toque.
        </div>
      </div>

      <div class="linha-div" />
    </div>

    <!--skedway mobile-->
    <div class="grid3">
      <h1 class="servicos-title pressura60">
        skedway mobile android e ios apps. o poder do skedway na palma de suas
        mãos
      </h1>
      <img
        :data-srcset="
          require('~/assets/images/tecnologia/skedwaymobile.jpg').srcSet
        "
        class="lazyload img-intro-tech"
      />

      <div class="controle-item">
        <div class="pressura28 black controle-item-title">
          scheck-in via qr code. seu celular é sua chave.
        </div>
        <div class="graphik16 gray">
          Especialmente desenvolvido para posições de trabalho ou pequenas
          salas, a função de Check-in por QRCode não demanda a utilização de
          dispositivos externos. Basta apontar seu Smartphone e fazer a leitura
          do código.
        </div>
      </div>

      <div class="controle-item">
        <div class="pressura28 black controle-item-title">
          todas suas agendas em tempo real.
        </div>
        <div class="graphik16 gray">
          Confira todas as suas agendas (pessoais ou profissionais) no mesmo
          lugar. O novo App Skedway Mobile oferece integração com suas agendas
          locais, permitindo que todos os compromissos sejam visualizados
          simultaneamente.
        </div>
      </div>

      <div class="controle-item">
        <div class="pressura28 black controle-item-title">
          encontre sua sala favorita em um piscar de olhos.
        </div>
        <div class="graphik16 gray">
          Utilize filtros e outros recursos para achar os espaço que você
          precisa, na hora certa. Marque os espaços que você mais gosta como
          Favortios e aumente ainda mais sua produtividade.
        </div>
      </div>

      <div class="linha-div" />
    </div>

    <!--checkin beacon-->
    <div class="grid3">
      <h1 class="servicos-title pressura60">
        check-in via beacon
      </h1>
      <h4 class="servicos-description graphik24 gray">
        Com Sekdway seu Check-in também pode ocorrer de forma automática, por
        bluetooth, caso as salas ou posições de trabalho tenham beacons ou
        nossos Room Displays compatíveis.
      </h4>

      <img
        :data-srcset="require('~/assets/images/tecnologia/beacon.jpg').srcSet"
        class="lazyload img-intro-tech"
      />

      <div class="linha-div" />
    </div>

    <!--maxboard-->
    <div class="grid3">
      <h1 class="servicos-title pressura60">
        maxboard
      </h1>
      <h4 class="servicos-description graphik24 gray">
        O primeiro mural interativo com mapeamento 3D e status de utilização do
        espaço em tempo real.
      </h4>

      <img
        :data-srcset="require('~/assets/images/tecnologia/maxboard.jpg').srcSet"
        class="lazyload img-intro-tech"
      />
    </div>

    <!-- produtos disponiveis -->
    <div class="grid3">
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

.controle-item-title {
  margin-bottom: 20px;
}

.icon-controle {
  margin-bottom: 24px;
  width: 40px;
}

.card-agendamento {
  margin-bottom: 64px;
}

.card-agendamento-img {
  margin-bottom: 32px;
}

.card-agendamento-title {
  margin-bottom: 20px;
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
    grid-column: 1/3;
  }

  .servicos-title {
    margin-bottom: 20px;
  }

  .card-agendamento {
    grid-column: 1/3;
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
