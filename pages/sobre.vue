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
          titleproject="AMAZON"
          areavalue="5479,00m²"
          yearvalue="2018, 2019, 2020"
          cityvalue="São Paulo"
          torrevalue="JK"
          andaresvalue="8º, 9º, 10º, 12º, 13º, 14º, 15º, 23º"
          description="Mesas com regulagem de altura, plataformas,  mesas de gerentes, mesas de reunião, gaveteiros, armários, lockers, decorativos e colaborativos."
        />
      </div>

      <div class="carousel-cell">
        <ProjetoItem
          titleproject="MILLIKEN"
          areavalue="283,50m²"
          yearvalue="2020"
          cityvalue="São Paulo"
          torrevalue="WTC"
          andaresvalue="1"
          description="Mesas com regulame de altura, mesas de gerentes, mesas de reunião, armários, gaveteiros e colaborativos."
        />
      </div>

      <div class="carousel-cell">
        <ProjetoItem
          titleproject="ZWIFT"
          areavalue="568,60m²"
          yearvalue="2020"
          cityvalue="Rio de Janeiro"
          torrevalue="Corporate Ipanema"
          andaresvalue="6"
          description="Mesas com ajuste de altura, armários, gaveteiros, mesas de reunião, mesas rebatíveis, cadeiras de reunião."
        />
      </div>

      <div class="carousel-cell">
        <ProjetoItem
          titleproject="PINHEIRO NETO"
          areavalue="SP - 1.548m²  /  RJ - 608,00m²"
          yearvalue="2020, 2019"
          cityvalue="São Paulo e Rio de Janeiro"
          torrevalue="Ed J.M Pinheiro Neto SP"
          andaresvalue="SP - 1º, 2º, 3º, 4º, 5º, 6º / RJ - 14º, 15º"
          description="Plataformas de trabalho, gaveteiros, gerencia e diretoria."
        />
      </div>

      <div class="carousel-cell">
        <ProjetoItem
          titleproject="STANDARD CHARTERED BANK"
          areavalue="305,00 m²"
          yearvalue="2020"
          cityvalue="São Paulo"
          torrevalue="Pátio Malzoni"
          andaresvalue="1"
          description="Mesas com ajuste de altura, diretoria, gerência, reuniões, mesas rebatíveis e suportes de monitor."
        />
      </div>

      <div class="carousel-cell">
        <ProjetoItem
          titleproject="PROCTER & GAMBLE"
          areavalue="1.785,00 m²"
          yearvalue="2019"
          cityvalue="Louveira - SP"
          torrevalue="Rua Francisco P. Dutra, 2405 GLB "
          andaresvalue="3"
          description="Plataformas, mesas com ajuste de altura, mesas de reunião, mesas rebatíveis, armários, gaveteiros, lockets, decorativos para área interna e externa  e colaborativos."
        />
      </div>

      <div class="carousel-cell">
        <ProjetoItem
          titleproject="NETFLIX"
          areavalue="3.900,64 m²"
          yearvalue="2017, 2019"
          cityvalue="Alphavile - SP (Barueri)"
          torrevalue="I Tower Alphaville"
          andaresvalue="3"
          description="Mesas com ajuste de altura, mesas de reunião e decorativos."
        />
      </div>

      <div class="carousel-cell">
        <ProjetoItem
          titleproject="UBER"
          areavalue="1750 m²"
          yearvalue="2019"
          cityvalue="São Paulo"
          torrevalue="São Paulo Corporate Tower - Torre Sul"
          andaresvalue="1"
          description="Plataformas de trabalho, mesas  e reuniões."
        />
      </div>

      <div class="carousel-cell">
        <ProjetoItem
          titleproject="OHB"
          areavalue="510,40 m²"
          yearvalue="2019"
          cityvalue="Jundiaí - SP"
          torrevalue="Multivias"
          andaresvalue="4"
          description="Cadeiras, lockers e decorativos."
        />
      </div>

      <div class="carousel-cell">
        <ProjetoItem
          titleproject="ATHENA"
          areavalue="1.538,00m²"
          yearvalue="2019"
          cityvalue="São Paulo"
          torrevalue="Casa Olímpia Business"
          andaresvalue="Mez, 1º, 2º, 3º, 4º, 5º, 6º"
          description="Plataformas de trabalho, diretoria, gerência, mesas de reunião, gaveteiros, armários, cadeiras e decorativos"
        />
      </div>

      <div class="carousel-cell">
        <ProjetoItem
          titleproject="MULTIPLAN"
          areavalue="777,0m²"
          yearvalue="2019"
          cityvalue="São Paulo"
          torrevalue="Morumbi Corporate"
          andaresvalue="1"
          description="Plataformas de trabalho, diretoria, reuniões, armários e gaveteiros."
        />
      </div>

      <div class="carousel-cell">
        <ProjetoItem
          titleproject="HDI"
          areavalue="3.200,00m²"
          yearvalue="2017"
          cityvalue="São Paulo"
          torrevalue="W Torre Morumbi"
          andaresvalue="21º, 22º, 23º"
          description="Cadeiras e suportes de moitor"
        />
      </div>

      <div class="carousel-cell">
        <ProjetoItem
          titleproject="PROLOGIS"
          areavalue="316,00m²"
          yearvalue="2018"
          cityvalue="São Paulo"
          torrevalue="Vera Cruz II"
          andaresvalue="1"
          description="Mesas com ajuste de altura, gerência, diretoria, mesas de reunião, armários, suportes de monitor e colaborativos"
        />
      </div>

      <div class="carousel-cell">
        <ProjetoItem
          titleproject="GEOKLOCK"
          areavalue="1.141,66 m²"
          yearvalue="2018"
          cityvalue="São Paulo"
          torrevalue="W Torres Morumbi"
          andaresvalue="1"
          description="Plataformas de trabalho, gerência, mesas de reunião, gaveteiros, armários, suportes de monitor e colaborativos"
        />
      </div>


      <div class="carousel-cell">
        <ProjetoItem
          titleproject="GENERAL ATLANTIC"
          areavalue="532 m²"
          yearvalue="2018"
          cityvalue="São Paulo"
          torrevalue="Pateo Malzoni"
          andaresvalue="1"
          description="Mesas com ajuste de altura, plataformas de trabalho, gaveteiros, armários "
        />
      </div>

      <div class="carousel-cell">
        <ProjetoItem
          titleproject="GENERAL ATLANTIC"
          areavalue="532 m²"
          yearvalue="2018"
          cityvalue="São Paulo"
          torrevalue="Pateo Malzoni"
          andaresvalue="1"
          description="Mesas com ajuste de altura, plataformas de trabalho, gaveteiros, armários "
        />
      </div>

      <div class="carousel-cell">
        <ProjetoItem
          titleproject="CELGENE"
          areavalue="822,00 m²"
          yearvalue="2018"
          cityvalue="São Paulo"
          torrevalue="Rochaverá"
          andaresvalue="1"
          description="Mesas com ajuste de altura, gerência, diretoria, presidência, mesas rebatíveis e colaborativos"
        />
      </div>

      <div class="carousel-cell">
        <ProjetoItem
          titleproject="ECOM"
          areavalue="1211 m²"
          yearvalue="2018"
          cityvalue="São Paulo"
          torrevalue="Vera Cruz "
          andaresvalue="1"
          description="Plataformas de trabalho, gerência, diretoria, reuniões, gaveteiros,armários e colaborativos"
        />
      </div>

      <div class="carousel-cell">
        <ProjetoItem
          titleproject="FACEBOOK"
          areavalue="3.727,30 m²"
          yearvalue="2018, 2017"
          cityvalue="São Paulo"
          torrevalue="Infinity Tower"
          andaresvalue="3"
          description="Mesas com ajuste de altura, reuniões, armários, gaveteiros, decorativos e colaborativos."
        />
      </div>

      <div class="carousel-cell">
        <ProjetoItem
          titleproject="ORTHO CLINICAL"
          areavalue="638,00 m²"
          yearvalue="2017"
          cityvalue="São Paulo"
          torrevalue="Market Place Towe"
          andaresvalue="1"
          description="Plataformas de trabalho, gereência, diretoria, reuniões, armários e gaveteiros."
        />
      </div>

      <div class="carousel-cell">
        <ProjetoItem
          titleproject="LONE STAR"
          areavalue="850,65 m²"
          yearvalue="2017"
          cityvalue="São Paulo"
          torrevalue="São Paulo Corporate Tower"
          andaresvalue="1"
          description="Plataformas de trabalho, diretoria, gerência e suportes de monitor."
        />
      </div>


      <div class="carousel-cell">
        <ProjetoItem
          titleproject="ALLERGAN"
          areavalue="1662,30 m²"
          yearvalue="2017"
          cityvalue="São Paulo"
          torrevalue="Thera Office"
          andaresvalue="1"
          description="Plataformas de trabalho, gerência, diretoria, reuniões, armários, gavteiros e colaborativos."
        />
      </div>


      <div class="carousel-cell">
        <ProjetoItem
          titleproject="CYRELA"
          areavalue="1780 m²"
          yearvalue="2017"
          cityvalue="São Paulo"
          torrevalue="Pinus Plaza"
          andaresvalue="7 andares"
          description="Piso Vinílico"
        />
      </div>

      <div class="carousel-cell">
        <ProjetoItem
          titleproject="AMPFY"
          areavalue="622 m²"
          yearvalue="2016"
          cityvalue="São Paulo"
          torrevalue="Rua Girassol, 953"
          andaresvalue="2"
          description="Plataformas de trabalho e mesas de reunião."
        />
      </div>

      <div class="carousel-cell">
        <ProjetoItem
          titleproject="PAUL HASTINGS"
          areavalue="210,00 m²"
          yearvalue="2016"
          cityvalue="São Paulo"
          torrevalue="JK"
          andaresvalue="1"
          description="Mesas de trabalho, gerência, diretoria, gaveteiros, armários, suportes de monitor, carpete e divisórias."
        />
      </div>

      <div class="carousel-cell">
        <ProjetoItem
          titleproject="MAC GRAW HILL - STANDARD & POORS"
          areavalue="961,00 m²"
          yearvalue="2014"
          cityvalue="São Paulo"
          torrevalue="Torre Faria Lima"
          andaresvalue="18, 21º, 24º"
          description="Plataformas de trabalho, diretoria, gerência, reuniões, mesas rebatíveis, gaveteiros, armários, decorativos, colaborativos e carpete."
        />
      </div>

      <div class="carousel-cell">
        <ProjetoItem
          titleproject="GOOGLE CAMPUS"
          areavalue="700,00 m²"
          yearvalue="2015"
          cityvalue="São Paulo"
          torrevalue="Campus SP"
          andaresvalue="1º, 2º, 3º, 4º"
          description="Plataformas de trabalho, mesas de reunião, mesas rebatíveis e gaveteiros"
        />
      </div>

      <div class="carousel-cell">
        <ProjetoItem
          titleproject="ROCHA E BARCELLOS ADV"
          areavalue="470,00 m²"
          yearvalue="2014"
          cityvalue="Alphavile - SP"
          torrevalue=""
          andaresvalue="1"
          description="Plataformas de trabalho, mesas de reunião, gaveteiros e armários."
        />
      </div>

      <div class="carousel-cell">
        <ProjetoItem
          titleproject="APPLE"
          areavalue="2.484,866 m²"
          yearvalue="2013"
          cityvalue="São Paulo"
          torrevalue="Infinity"
          andaresvalue="2"
          description="Plataformas de trabalho, gerência, diretoria, gaveteiros, armários, decorativos e colaborativos"
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