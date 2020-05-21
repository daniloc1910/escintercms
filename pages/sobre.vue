<template>
  <div class="content">
    <MenuMobile />

    <div class="grid3">
      <h1 class="servicos-title pressura60">
        A Escinter é uma empresa familiar com 30 anos de atuação no mercado de interiores de espaços corporativos
      </h1>

      <div class="linha-div"></div>

      <p class="sobre-description graphik18">
      Nós acreditamos que o investimento na adequação de areas de trabalho, promove o aumento na qualidade de vida dos funcionários, com melhoria em sua saúde, bem estar e produtividade.<br><br>A corporação valoriza seus colaboradores tornando o ambiente inspirador, proporcionando melhor desempenho em cada atividade.
      </p>

      <p class="sobre-description graphik18">
      Nosso objetivo, é realizar esta melhoria para nossos clientes de forma que a experiência durante todo processo seja positiva e memorável.<br><br>A qualidade do espaço de trabalho interfere diretamente na vida das pessoas e nossa missão é garantir, que ao final de cada implantacao, a empresa e seus integrantes usufruam destas malhorias e tenham melhor qualidade de vida e desempenho.
      </p>

      <ul class="showroom-adress graphik16">
        <li>Nosso showroom em São Paulo</li>
        <li class="gray">Rua Aspicuelta, 248</li>
        <li class="gray">Vila Madalena</li>
      </ul>

      <img class="img-showroom lazyload" :data-srcset="require('~/assets/images/escinter-showroom.png').srcSet" />



      <!-- MARCAS -->

      <div class="linha-div"></div>

      <h2 class="nossas-marcas-title pressura60">
        Nossas marcas
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


      <!-- CLIENTES -->

      <div class="linha-div"></div>

      <h2 class="clientes-title pressura60">
        clientes com quem já trabalhamos, garantia e qualidade comprovada.
      </h2>

      <div class="cliente-grid">
        <div class="grid6">
          <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/logos-clientes/apple-logo.jpg').srcSet" class="lazyload" />
          <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/logos-clientes/apple-logo.jpg').srcSet" class="lazyload" />
          <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/logos-clientes/apple-logo.jpg').srcSet" class="lazyload" />                    
          <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/logos-clientes/apple-logo.jpg').srcSet" class="lazyload" />
          <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/logos-clientes/apple-logo.jpg').srcSet" class="lazyload" />
          <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/logos-clientes/apple-logo.jpg').srcSet" class="lazyload" />
          <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/logos-clientes/apple-logo.jpg').srcSet" class="lazyload" />                    
          <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/logos-clientes/apple-logo.jpg').srcSet" class="lazyload" />
          <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/logos-clientes/apple-logo.jpg').srcSet" class="lazyload" />
          <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/logos-clientes/apple-logo.jpg').srcSet" class="lazyload" />
          <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/logos-clientes/apple-logo.jpg').srcSet" class="lazyload" />                    
          <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/logos-clientes/apple-logo.jpg').srcSet" class="lazyload" />
        </div>
      </div>



      <!-- PROJETOS -->

      <div class="linha-div"></div>

      <h2 class="nossas-marcas-title pressura60">Projetos destacados</h2>

      <p class="nossas-marcas-description graphik24">
        Texto introdutorio da secao, falando sobre todos os anos de experiencia e trabalho com grandes corporacoes e obras de grande porte. Experiência comprovada.
      </p>



      <div class="carousel-pag ">      
      <Flickity :options="{wrapAround: true, groupCells: true}" class="carousel">
      
      <div class="carousel-cell">
        <ProjetoItem
          titleproject="JOHNSON & JOHNSON"
          areavalue="15.000"
          cityvalue="São Paulo"
          yearvalue="2015"
          description="Projeto executado em 2015 nas Torres JK. 5 andares totalizando 7200m², onde foram fornecidos Plataformas de Trabalho, mesas de reunião, Mesas com regulagem de altura, armários, call center, mesas de gerente."
        />
      </div>

      <div class="carousel-cell">
        <ProjetoItem
          titleproject="RECKITT BENCKISER"
          areavalue="3.600"
          cityvalue="São Paulo"
          yearvalue="2018"
          description="Projeto executado em 2018 nas torres São Paulo Corporate Towers. 2 andares totalizando 3600 m², onde foram fornecidos Plataformas de Trabalho, armários e mesas de reunião."
        />
      </div>

      <div class="carousel-cell">
        <ProjetoItem
          titleproject="Nestlé"
          areavalue="2.700"
          cityvalue="São Paulo"
          yearvalue="2019"
          description="Projeto executado em 2019 nas torres SIGMA. 15 andares totalizando 27000 m², onde foram fornecidos Plataformas de Trabalho, Mesas com regulagem de altura, Lockers, Mesas Dobráveis, armários e mesas de reunião."
        />
      </div>

      <div class="carousel-cell">
        <ProjetoItem
          titleproject="Accenture — New Content"
          areavalue="12.000"
          cityvalue="São Paulo"
          yearvalue="2019"
          description="Projeto executado em 2019 na sede Própria da Empresa. 3 andares totalizando 12000m², onde foram fornecidos Plataformas de Trabalho, mesas de reunião, Mesas componíveis e armários."
        />
      </div>

      <div class="carousel-cell">
        <ProjetoItem
          titleproject="Bank of America"
          areavalue="8.500"
          cityvalue="São Paulo"
          yearvalue="2017 a 2019"
          description="Projeto executado entre 2017 e 2019 nas torres Faria Lima Financial Center. 5 andares totalizando 8500m², onde foram fornecidos Plataformas de Trabalho, mesas Traders com regulagem de altura, suportes de monitor mesas de reunião, mesas diretores,  gerentes, armários."
        />
      </div>

      <div class="carousel-cell">
        <ProjetoItem
          titleproject="BNP Paribas"
          areavalue="5.400"
          cityvalue="São Paulo"
          yearvalue="2018"
          description="Projeto executado em 2018 nas torres São Paulo Corporate Towers. 3 andares totalizando 5.400 m², onde foram fornecidos estações de Traders, Plataformas de Trabalho, armários, lockers e mesas de reunião."
        />
      </div>

      </Flickity>
      </div>

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
      padding-top: 227px;
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