<template>
  <div class="content">
    <MenuMobile />

    <div class="grid3">

      <!-- MARCAS -->

      <h2 class="nossas-marcas-title pressura60">
        Marcas que representamos
      </h2>

      <p class="nossas-marcas-description graphik24">
        A Escinter é um Dealer completo da Knoll no Brasil, capaz de fornecer todos os produtos e serviços relacionados a esta parceria. Escinter e Knoll já fizeram vários projetos juntos neste país, garantindo que Contas Globais da Knoll as mesmas soluções que têm nas outras regiões do globo.
      </p>

      <div></div>

      <ul class="marcas">
        <li class="marca-item-title pressura40"><h3>Knoll</h3></li>
        <li class="graphik18 gray"><p>Desde sua fundação, em 1938, a Knoll é reconhecida internacionalmente por criar móveis que inspiram, evoluem e perduram. Seu compromisso com a inovação e design moderno tem produzido um portfólio abrangente de sistemas, cadeiras, arquivos, mesas, armários e acessórios.</p></li>
      </ul>

      <ul class="marcas">
        <li class="marca-item-title pressura40"><h3>Kush+co</h3></li>
        <li class="graphik18 gray"><p>Com mais de 60 anos de história, a Kusch+Co representa a união entre tecnologia e qualidade na produção de móveis para ambientes internos. Suas peças são desenvolvidas de acordo com os padrões mais elevados do mercado internacional e preenchem de maneira singular as necessidades de seus clientes.</p></li>
      </ul>

      <ul class="marcas">
        <li class="marca-item-title pressura40"><h3>Humanscale</h3></li>
        <li class="graphik18 gray"><p>Humanscale é uma empresa focada em produtos ergonômicos que melhoram a saúde e conforto no trabalho. Inovações prestigiadas com mais de 200 prêmios e com destaque em diversos museus.</p></li>
      </ul>

      <ul class="marcas last">
        <li class="marca-item-title pressura40"><h3>Escinter</h3></li>
        <li class="graphik18 gray"><p>A Escinter é uma empresa familiar com 25 anos de atuação no mercado de interiores de espaços corporativos. Nós acreditamos que o investimento na adequação de areas de trabalho, promove o aumento na qualidade de vida dos funcionários, com melhoria em sua saúde, bem estar e produtividade.</p></li>
      </ul>


    </div>
  </div>
</template>

<style scoped>
.carousel-cell {
  width: calc( ( 100% - 0px ) / 3);
}

  .content {
    padding-top: 415px;
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
    margin-bottom: 80px;
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
    margin-bottom: 80px;
  }

  .carousel-pag {
    grid-column: 1/4;
  }
  
  .grid3-projetos {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 28px;
  }

  @media screen and (max-width: 1020px) {

.carousel-cell {
  width: calc(100vw - 40px);
  margin-right: 20px;
}


    .linha-div {
      grid-column: 1/3;
    }

    .sobre-description {
      grid-column: 1/3;
      margin: 38px 0 0px 0;
    }

    .showroom-adress {
        grid-column: 1/3;
        grid-row: 6;
    }

    .img-showroom {
    grid-column: 1/3;
    margin-top: 40px;
    margin-bottom: 16px;
    }

    .marcas {
      grid-column: 1/3;
      margin-bottom: 64px;
    }

    .cliente-grid {
      grid-column: 1/3; 
    }

    .nossas-marcas-description {
    margin-bottom: 64px;
  }

    .content {
      padding-top: 157px;
    }

  }
</style>

<script>
import MenuMobile from '~/components/MenuMobile.vue'
import ProjetoItem from '~/components/ProjetoItem.vue'

export default {
  components: {
    MenuMobile,
    ProjetoItem
  },
  data() {
    return {
      title: 'Sobre'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>