<template>
  <div class="content">
    <div class="grid3">
      <div class="servicos-title pressura60">
        A Escinter é uma empresa familiar com 30 anos de atuação no mercado de interiores de espaços corporativos
      </div>

      <div class="linha-div"></div>

      <div class="sobre-description graphik18">
      Nós acreditamos que o investimento na adequação de areas de trabalho, promove o aumento na qualidade de vida dos funcionários, com melhoria em sua saúde, bem estar e produtividade.<br><br>A corporação valoriza seus colaboradores tornando o ambiente inspirador, proporcionando melhor desempenho em cada atividade.
      </div>

      <div class="sobre-description graphik18">
      Nosso objetivo, é realizar esta melhoria para nossos clientes de forma que a experiência durante todo processo seja positiva e memorável.<br><br>A qualidade do espaço de trabalho interfere diretamente na vida das pessoas e nossa missão é garantir, que ao final de cada implantacao, a empresa e seus integrantes usufruam destas malhorias e tenham melhor qualidade de vida e desempenho.
      </div>

      <ul class="showroom-adress graphik16">
        <li>Nosso showroom em São Paulo</li>
        <li class="gray">Rua Aspicuelta, 248</li>
        <li class="gray">Vila Madalena</li>
      </ul>

      <img class="img-showroom lazyload" :data-srcset="require('~/assets/images/escinter-showroom.png').srcSet" />

      <div class="linha-div"></div>

      <div class="nossas-marcas-title pressura60">
        Nossas marcas
      </div>

      <div class="nossas-marcas-description graphik24">
        A Escinter é um Dealer completo da Knoll no Brasil, capaz de fornecer todos os produtos e serviços relacionados a esta parceria. Escinter e Knoll já fizeram vários projetos juntos neste país, garantindo que Contas Globais da Knoll as mesmas soluções que têm nas outras regiões do globo.
      </div>

      <div></div>

      <ul class="marcas">
        <li class="marca-item-title pressura40">Knoll</li>
        <li class="graphik16 gray">Desde sua fundação, em 1938, a Knoll é reconhecida internacionalmente por criar móveis que inspiram, evoluem e perduram. Seu compromisso com a inovação e design moderno tem produzido um portfólio abrangente de sistemas, cadeiras, arquivos, mesas, armários e acessórios.</li>
      </ul>

      <ul class="marcas">
        <li class="marca-item-title pressura40">Kush+co</li>
        <li class="graphik16 gray">Com mais de 60 anos de história, a Kusch+Co representa a união entre tecnologia e qualidade na produção de móveis para ambientes internos. Suas peças são desenvolvidas de acordo com os padrões mais elevados do mercado internacional e preenchem de maneira singular as necessidades de seus clientes.</li>
      </ul>

      <ul class="marcas">
        <li class="marca-item-title pressura40">Humanscale</li>
        <li class="graphik16 gray">Humanscale é uma empresa focada em produtos ergonômicos que melhoram a saúde e conforto no trabalho. Inovações prestigiadas com mais de 200 prêmios e com destaque em diversos museus.</li>
      </ul>

      <ul class="marcas last">
        <li class="marca-item-title pressura40">Escinter</li>
        <li class="graphik16 gray">A Escinter é uma empresa familiar com 25 anos de atuação no mercado de interiores de espaços corporativos. Nós acreditamos que o investimento na adequação de areas de trabalho, promove o aumento na qualidade de vida dos funcionários, com melhoria em sua saúde, bem estar e produtividade.</li>
      </ul>

      <div class="linha-div"></div>

      <div class="clientes-title pressura60">
        clientes com quem já trabalhamos, garantia e qualidade comprovada.
      </div>

      <div class="cliente-grid">
        <div class="grid6">
          <img :data-srcset="require('~/assets/images/logos-clientes/apple-logo.jpg').srcSet" class="lazyload" />
          <img :data-srcset="require('~/assets/images/logos-clientes/apple-logo.jpg').srcSet" class="lazyload" />
          <img :data-srcset="require('~/assets/images/logos-clientes/apple-logo.jpg').srcSet" class="lazyload" />                    
          <img :data-srcset="require('~/assets/images/logos-clientes/apple-logo.jpg').srcSet" class="lazyload" />
          <img :data-srcset="require('~/assets/images/logos-clientes/apple-logo.jpg').srcSet" class="lazyload" />
          <img :data-srcset="require('~/assets/images/logos-clientes/apple-logo.jpg').srcSet" class="lazyload" />
          <img :data-srcset="require('~/assets/images/logos-clientes/apple-logo.jpg').srcSet" class="lazyload" />                    
          <img :data-srcset="require('~/assets/images/logos-clientes/apple-logo.jpg').srcSet" class="lazyload" />
          <img :data-srcset="require('~/assets/images/logos-clientes/apple-logo.jpg').srcSet" class="lazyload" />
          <img :data-srcset="require('~/assets/images/logos-clientes/apple-logo.jpg').srcSet" class="lazyload" />
          <img :data-srcset="require('~/assets/images/logos-clientes/apple-logo.jpg').srcSet" class="lazyload" />                    
          <img :data-srcset="require('~/assets/images/logos-clientes/apple-logo.jpg').srcSet" class="lazyload" />
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
  .content {
    padding-top: 295px;
    margin-bottom: 158px;
  }

  .servicos-title {
    grid-column: 1/3;
    margin-bottom: 32px;
  }

  .linha-div {
    grid-column: 1/4;
    height: 1px;
    background-color: #DEDCDB;
  }

  .sobre-description {
    margin: 38px 0 34px 0;
  }

  .showroom-adress {
    grid-column: 1/2;
    align-self: end;
    padding-bottom: 40px;
  }

  .img-showroom {
    grid-column: 2/4;
    margin-bottom: 40px;
  }

  .nossas-marcas-title {
    grid-column: 1/3;
    margin: 31px 0 27px 0;
  }

  .nossas-marcas-description {
    grid-column: 1/3;
    margin-bottom: 123px;
  }

  .marcas {
    margin-bottom: 80px;
  }

  .last {
    margin-bottom: 42px;
  }

  .marca-item-title {
    margin-bottom: 20px;
  }

  .clientes-title {
    grid-column: 1/3;
    margin: 31px 0 81px 0;
  }

  .cliente-grid {
    grid-column: 1/4;
  }
</style>

<script>
export default {
    data() {
    return {
      title: 'Escinter — Sobre'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>