<template>
  <div class="content">
    <MenuMobile />

    <div class="grid3">
      <!-- MARCAS -->

      <h1 class="nossas-marcas-title pressura60">Marcas que representamos</h1>

      <h2 class="nossas-marcas-description graphik24">
        Além de uma extensa linha própria de serviços e produtos, a Escinter é
        Dealer de algumas das principais marcas internacionais de design no
        Brasil. Por isso somos capazes de fornecer todos os produtos e serviços
        relacionados a estas parcerias. Dentre estas grandes marcas está a
        Knoll, e juntos desenvolvemos vários projetos para o Brasil, garantindo
        para o nosso país as mesmas soluções das outras regiões do globo.
      </h2>

      <div></div>

      <ul class="marcas">
        <li class="marca-item-title pressura40"><h3>Vitra</h3></li>
        <li class="graphik18 gray">
          <p>
            Vitra é uma empresa familiar, fundada em 1953 pelo casal Willi e
            Erika Fehlbaum e há meio século considerada referência em mobiliário
            para escritório, casas e espaços públicos.
          </p>
        </li>
      </ul>

      <ul class="marcas">
        <li class="marca-item-title pressura40"><h3>Kusch+co</h3></li>
        <li class="graphik18 gray">
          <p>
            Com mais de 60 anos de história, a Kusch+Co representa a união entre
            tecnologia e qualidade na produção de móveis para ambientes
            internos. Suas peças são desenvolvidas de acordo com os padrões mais
            elevados do mercado internacional e preenchem de maneira singular as
            necessidades de seus clientes.
          </p>
        </li>
      </ul>

      <ul class="marcas">
        <li class="marca-item-title pressura40"><h3>Humanscale</h3></li>
        <li class="graphik18 gray">
          <p>
            Humanscale é uma empresa focada em produtos ergonômicos que melhoram
            a saúde e conforto no trabalho. Inovações prestigiadas com mais de
            200 prêmios e com destaque em diversos museus.
          </p>
        </li>
      </ul>

      <ul class="marcas">
        <li class="marca-item-title pressura40"><h3>Escinter</h3></li>
        <li class="graphik18 gray">
          <p>
            A nossa linha própria de produtos. A Escinter é uma empresa familiar
            com 30 anos de atuação no mercado de interiores de espaços
            corporativos. Nós acreditamos que o investimento na adequação de
            áreas de trabalho, promove o aumento na qualidade de vida dos
            funcionários, com melhoria em sua saúde, bem estar e produtividade.
          </p>
        </li>
      </ul>

      <ul class="marcas">
        <li class="marca-item-title pressura40"><h3>Lady</h3></li>
        <li class="graphik18 gray">
          <p>
            Fundada em 1940 por um casal de austríacos que prezavam pela
            evolução constante e pela inovação, a Tecelagem Lady mantém esses
            valores vivos na companhia até hoje. A empresa com sede em São Paulo
            está no mercado de revestimentos como uma grande fornecedora de
            soluções para diversos ambientes – comerciais, corporativos,
            hoteleiros e residenciais, recentemente se notabilizando também
            pelos materiais acústicos para ambientes corporativos
          </p>
        </li>
      </ul>

      <ul class="marcas">
        <li class="marca-item-title pressura40"><h3>Inwall</h3></li>
        <li class="graphik18 gray">
          <p>
            A InWall é uma empresa nacional especializada na fabricação, projeto
            e execução de divisórias acústicas piso teto. Incluir inWall no seu
            projeto é a garantia de qualidade superior, excelente acabamento,
            múltiplas possibilidades de personalização e pontualidade nos prazos
            de entrega.
          </p>
        </li>
      </ul>

      <ul class="marcas last">
        <li class="marca-item-title pressura40"><h3>Beltech</h3></li>
        <li class="graphik18 gray">
          <p>
            A Beltech, desde 1993, fornece carpetes e pisos vinílicos para os
            segmentos corporativo e hoteleiro. Hoje, são importações de mais de
            7 países e 3 continentes, com o que há de melhor em marcas, design,
            qualidade, tecnologia, sustentabilidade e preço. No portfólio da
            Beltech estão marcas reconhecidas mundialmente: Mohawk Group,
            Durkan, Shaw Contract, Shaw Hospitality, Crossley, Patcraft e J&J
            Flooring.
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.carousel-cell {
  width: calc((100% - 0px) / 3);
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
  background-color: #dedcdb;
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
import MenuMobile from "~/components/MenuMobile.vue";
import ProjetoItem from "~/components/ProjetoItem.vue";

export default {
  components: {
    MenuMobile,
    ProjetoItem,
  },
  data() {
    return {
      title: "Sobre",
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>
