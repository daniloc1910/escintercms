<template>
<div class="content">

  <MenuMobile />

  <div class="category-list grid3">
    <h1 class="category-name pressura60">Acústicas e Revestimentos</h1>
    <h4 class="category-description graphik24 gray">Unir técnica e estética é uma virtude dos nossos revestimentos e acústicos que deixam os ambientes mais confortáveis acusticamente ao mesmo tempo em que compõe com o projeto de decoração.</h4>


    <div class="linha-div"></div>

      
      <div class="menu-anchor sticky graphik18">
        <h3 class="ecoshapes-title pressura40">Ecoshapes</h3>
        <ul class="title-history-sticky gray">
          <li><a href="#" v-scroll-to="'#linhanext'">Linha Next</a></li>
          <li><a href="#" v-scroll-to="'#break'">Break</a></li>
          <li><a href="#" v-scroll-to="'#cockpit'">Cockpit</a></li>
          <li><a href="#" v-scroll-to="'#fence'">Fence</a></li>
          <li><a href="#" v-scroll-to="'#workstation'">Workstation</a></li>
          <li><a href="#" v-scroll-to="'#baffles'">Baffles</a></li>
          <li><a href="#" v-scroll-to="'#grid'">Grid</a></li>
          <li><a href="#" v-scroll-to="'#nuvens'">Nuvens</a></li>
          <li><a href="#" v-scroll-to="'#paineis'">Painéis</a></li>
          <li><a href="#" v-scroll-to="'#divisoresdeambientes'">Divisores de ambientes</a></li>
          <li><a href="#" v-scroll-to="'#ladrilhos'">Cabines</a></li>
          <li><a href="#" v-scroll-to="'#cabines'">Ladrilhos</a></li>
        </ul>
      </div>




  <!-- LINHA NEXT -->

  <div id="linhanext" class="ecoshape-item grid2">
    <img class="ecoshape-item-img lazyload" :data-srcset="require('~/assets/images/acusticas-revestimentos/linhanext.jpg').srcSet" />
    <h3 class="ecoshape-item-title pressura40"><span class="sticky">Linha Next</span></h3>
    <div class="ecoshape-item-container">

        <div class="knoll-brand-item-description graphik24">
          <ul>
            <li class="knoll-brand-item-description-text"><h4>Padrões assimétricos e desenhos desconstruídos. O Configure é uma nova forma de pensar, com cores fortes e forma modular.</h4></li>
            <li class="graphik18" style="margin-bottom:24px;"><a class="pink" href="/pdf/acusticas-revestimentos/CatalogoLinhaNext.pdf" target="_blank">Download do catálogo</a></li>
          </ul>
        </div>

      </div>

        <ul class="tabela tabela-ecoshapes">
          <li class="pressura15"><span class="gray">Variações disponíveis</span><span style="float:right">9</span></li>
          <li class="pressura15"><span class="gray">Cores disponíveis</span><span style="float:right">12</span></li>
        </ul>
  </div>



  <!-- BREAK -->

  <div id="break" class="ecoshape-item grid2">
    <div class="linha-div ecoshape-linha"></div>
    <img class="ecoshape-item-img lazyload" :data-srcset="require('~/assets/images/acusticas-revestimentos/break.jpg').srcSet" />
    <h3 class="ecoshape-item-title pressura40"><span class="sticky">Break</span></h3>
  </div>



  <!-- COCKPIT -->

  <div id="cockpit" class="ecoshape-item grid2">
    <div class="linha-div ecoshape-linha"></div>
    <img class="ecoshape-item-img lazyload" :data-srcset="require('~/assets/images/acusticas-revestimentos/cockpit.jpg').srcSet" />
    <h3 class="ecoshape-item-title pressura40"><span class="sticky">Cockipit</span></h3>
  </div>



  <!-- FENCE -->

  <div id="fence" class="ecoshape-item grid2">
    <div class="linha-div ecoshape-linha"></div>
    <img class="ecoshape-item-img lazyload" :data-srcset="require('~/assets/images/acusticas-revestimentos/fence.jpg').srcSet" />
    <h3 class="ecoshape-item-title pressura40"><span class="sticky">Fence</span></h3>
  </div>



  <!-- WORKSTATION -->

  <div id="workstation" class="ecoshape-item grid2">
    <div class="linha-div ecoshape-linha"></div>
    <img class="ecoshape-item-img lazyload" :data-srcset="require('~/assets/images/acusticas-revestimentos/workstation.jpg').srcSet" />
    <h3 class="ecoshape-item-title pressura40"><span class="sticky">Workstation</span></h3>
  </div>




  <!-- BAFFLES -->

  <div id="baffles" class="ecoshape-item grid2">
    <div class="linha-div ecoshape-linha"></div>
    <img class="space28 lazyload" :data-srcset="require('~/assets/images/acusticas-revestimentos/baffles1.jpg').srcSet" />
    <img class="space28 lazyload" :data-srcset="require('~/assets/images/acusticas-revestimentos/baffles2.jpg').srcSet" />
    <h3 class="ecoshape-item-title pressura40"><span class="sticky">Baffles</span></h3>
    <div class="ecoshape-item-container">

        <div class="knoll-brand-item-description graphik24">
          <ul>
            <li class="knoll-brand-item-description-text"><h4>Os Baffles ecoshapes, são sistemas composto por placas acústicas instaladas no forro, na posição vertical, que além de melhorar a performance acústica, dão um visual moderno ao ambiente.</h4></li>
            <li class="graphik18" style="margin-bottom:24px;"><a class="pink" href="/pdf/acusticas-revestimentos/CatalogoEcoshapesBaffles.pdf" target="_blank">Download do catálogo</a></li>
          </ul>
        </div>

      </div>

        <ul class="tabela tabela-ecoshapes">
          <li class="pressura15"><span class="gray">Acabamento</span><span style="float:right">Fosco / aveludado</span></li>
          <li class="pressura15"><span class="gray">Espessuras standard</span><span style="float:right">9 mm (+/- 1 mm)</span></li>
          <li class="pressura15"><span class="gray">Absorção acústica</span><span style="float:right">Média nrc 0.75</span></li>
        </ul>
  </div>




  <!-- GRID -->

  <div id="grid" class="ecoshape-item grid2">
    <div class="linha-div ecoshape-linha"></div>
    <img class="ecoshape-item-img lazyload" :data-srcset="require('~/assets/images/acusticas-revestimentos/grid.jpg').srcSet" />
    <h3 class="ecoshape-item-title pressura40"><span class="sticky">GRID</span></h3>
  </div>




  <!-- NUVENS -->

  <div id="nuvens" class="ecoshape-item grid2">
    <div class="linha-div ecoshape-linha"></div>
    <img class="ecoshape-item-img lazyload" :data-srcset="require('~/assets/images/acusticas-revestimentos/nuvens.jpg').srcSet" />
    <h3 class="ecoshape-item-title pressura40"><span class="sticky">Nuvens</span></h3>
    <div class="ecoshape-item-container">

        <div class="knoll-brand-item-description graphik24">
          <ul>
            <li class="knoll-brand-item-description-text"><h4>As Nuvens ecoshapes, são sistemas composto por placas acústicas instaladas no forro, na posição horizontal retas ou inclinadas, que tornam cada projeto único. Além da estética, a melhoria do conforto acústico é facilmente notada.</h4></li>
            <li class="graphik18" style="margin-bottom:24px;"><a class="pink" href="/pdf/acusticas-revestimentos/CatalogoEcoshapesNuvens.pdf" target="_blank">Download do catálogo</a></li>
          </ul>
        </div>

      </div>

        <ul class="tabela tabela-ecoshapes">
          <li class="pressura15"><span class="gray">Acabamento</span><span style="float:right">Fosco / aveludado</span></li>
          <li class="pressura15"><span class="gray">Espessuras standard</span><span style="float:right">9 mm (+/- 1 mm)</span></li>
          <li class="pressura15"><span class="gray">Absorção acústica</span><span style="float:right">Média nrc 0.75</span></li>
        </ul>
  </div>




  <!-- PAINEIS -->

  <div id="paineis" class="ecoshape-item grid2">
    <div class="linha-div ecoshape-linha"></div>
    <img class="space28 lazyload" :data-srcset="require('~/assets/images/acusticas-revestimentos/paineis1.jpg').srcSet" />
    <img class="space28 lazyload" :data-srcset="require('~/assets/images/acusticas-revestimentos/paineis2.jpg').srcSet" />
    <h3 class="ecoshape-item-title pressura40"><span class="sticky">Painéis</span></h3>
  </div>




  <!-- DIVISORES DE AMBIENTES -->

  <div id="divisoresdeambientes" class="ecoshape-item grid2">
    <div class="linha-div ecoshape-linha"></div>
    <img class="ecoshape-item-img lazyload" :data-srcset="require('~/assets/images/acusticas-revestimentos/divisoresdeambientes.jpg').srcSet" />
    <h3 class="ecoshape-item-title pressura40"><span class="sticky">Divisores de ambientes</span></h3>
  </div>




  <!-- CABINES -->

  <div id="ladrilhos" class="ecoshape-item grid2">
    <div class="linha-div ecoshape-linha"></div>
    <img class="ecoshape-item-img lazyload" :data-srcset="require('~/assets/images/acusticas-revestimentos/cabines.jpg').srcSet" />
    <h3 class="ecoshape-item-title pressura40"><span class="sticky">Cabines</span></h3>
  </div>




  <!-- LADRILHOS -->

  <div id="cabines" class="ecoshape-item grid2">
    <div class="linha-div ecoshape-linha"></div>
    <img class="ecoshape-item-img lazyload" :data-srcset="require('~/assets/images/acusticas-revestimentos/ladrilhos.jpg').srcSet" />
    <h3 class="ecoshape-item-title pressura40"><span class="sticky">Ladrilhos</span></h3>
    <div class="ecoshape-item-container">

        <div class="knoll-brand-item-description graphik24">
          <ul>
            <li class="knoll-brand-item-description-text"><h4>Ladrilhos são pequenas peças, em vários formatos, utilizados para construir um revestimento.</h4></li>
          </ul>
        </div>

      </div>

        <ul class="tabela tabela-ecoshapes">
          <li class="pressura15"><span class="gray">Composição</span><span style="float:right">100% poliéster feito de 70% de pet</span></li>
          <li class="pressura15"><span class="gray">Espessuras standard</span><span style="float:right">9 mm (+/- 1 mm)</span></li>
          <li class="pressura15"><span class="gray">Absorção acústica</span><span style="float:right">Média nrc 0.75</span></li>
        </ul>
  </div>

  </div>



<div class="grid3">




      <!-- INOVAWALL -->
    
    <div class="linha-div"></div>
    <h3 class="knoll-brand-item-title pressura40"><span class="sticky">Inovwall</span></h3>
    <div class="knoll-brand-item">
      <div class="grid2">
        <img class="ecoshape-item-img lazyload" :data-srcset="require('~/assets/images/acusticas-revestimentos/inovwall1.jpg').srcSet" />
        <img class="space28 lazyload" :data-srcset="require('~/assets/images/acusticas-revestimentos/inovwall2.jpg').srcSet" />
        <img class="space28 lazyload" :data-srcset="require('~/assets/images/acusticas-revestimentos/inovwall3.jpg').srcSet" />

          <ul class="tabela">
          <li class="pressura15"><span class="gray">Resistencia térmica (R)</span><span style="float:right">0,79 m2 c/w</span></li>
          <li class="pressura15"><span class="gray">Composição</span><span style="float:right">Lã de vidro</span></li>
          </ul>

        <div class="knoll-brand-item-description graphik24">
          <ul>
            <li class="knoll-brand-item-description-text"><h4>Devido a alta absorção sonora, o Sistema Inovawall proporciona maior conforto acústico, produtividade e isolação térmica em diversos tipos de ambientes, podendo ser aplicado sobre qualquer superfície.</h4></li>
             <li class="graphik18" style="margin-bottom:24px;"><a class="pink" href="/pdf/acusticas-revestimentos/CatalogoInovawall.pdf" target="_blank">Download do catálogo</a></li>
          </ul>
        </div>
      </div>
    </div>




      <!-- MASCARAMENTO DE SOM -->
    
    <div class="linha-div"></div>
    <h3 class="knoll-brand-item-title pressura40"><span class="sticky">Mascaramento de som</span></h3>
    <div class="knoll-brand-item">
      <div class="grid2">
        <img class="space28 lazyload" :data-srcset="require('~/assets/images/acusticas-revestimentos/mascaramento1.jpg').srcSet" />
        <img class="space28 lazyload" :data-srcset="require('~/assets/images/acusticas-revestimentos/mascaramento2.jpg').srcSet" />

        <div class="knoll-brand-item-description graphik24">
          <ul>
            <li class="knoll-brand-item-description-text"><h4>O mascaramento de som é o procedimento de acrescentar um som ambiente de baixo nível e não invasivo que diminui a área na qual a fala humana é nítida e causa distração.</h4></li>
             <li class="graphik18" style="margin-bottom:24px;"><a class="pink" href="/pdf/acusticas-revestimentos/CatalogoMascaramentodeSom.pdf" target="_blank">Download do catálogo</a></li>
          </ul>
        </div>
      </div>
    </div>




      <!-- WALLCOVERING -->
    
    <div class="linha-div"></div>
    <h3 class="knoll-brand-item-title pressura40"><span class="sticky">Wallcovering</span></h3>
    <div class="knoll-brand-item">
      <div class="grid2">
        <img class="space28 lazyload" :data-srcset="require('~/assets/images/acusticas-revestimentos/wallcovering1.jpg').srcSet" />
        <img class="space28 lazyload" :data-srcset="require('~/assets/images/acusticas-revestimentos/wallcovering2.jpg').srcSet" />

        <div class="knoll-brand-item-description graphik24">
          <ul>
            <li class="knoll-brand-item-description-text"><h4>Os revestimentos vinílicos Wallcovering funcionam como papéis de parede que possuem acabamentos desenvolvidos para aumentar a durabilidade, pois ele não se desgasta e as cores não desbotam.</h4></li>
             <li class="graphik18" style="margin-bottom:24px;"><a class="pink" href="/pdf/acusticas-revestimentos/CatalogoWallcovering.pdf" target="_blank">Download do catálogo</a></li>
          </ul>
        </div>
          <ul class="tabela">
          <li class="pressura15"><span class="gray">Cores disponíveis</span><span style="float:right">45 cores</span></li>
          <li class="pressura15"><span class="gray">Tamanho</span><span style="float:right">134 cm x 137 cm</span></li>
          <li class="pressura15"><span class="gray">Peso total</span><span style="float:right">588 g/m e 392 g/m (15oz)</span></li>
          </ul>
      </div>
    </div>




      <!-- TECIDOS -->
    
    <div class="linha-div"></div>
    <h3 class="knoll-brand-item-title pressura40"><span class="sticky">Tecidos</span></h3>
    <div class="knoll-brand-item">
      <div class="grid2">
        <img class="ecoshape-item-img lazyload" :data-srcset="require('~/assets/images/acusticas-revestimentos/tecidos1.jpg').srcSet" />

        <div class="knoll-brand-item-description graphik24">
          <ul>
            <li class="knoll-brand-item-description-text"><h4>Tecidos produzidos com alta tecnologia e acabamentos especiais para que mantenha características físicas e visuais originais mesmo em locais de alto tráfego de pessoas.</h4></li>
          </ul>

          <ul class="tabela-slinha bottom">
            <li class="pressura15" style="margin-bottom: 20px;"><span class="gray">Download de catálogos</span></li>
            <li class="graphik18" style="margin-bottom:4px;"><a class="pink" href="/pdf/acusticas-revestimentos/CartelaLãs-Grandis-Havoc-Cirrus.pdf" target="_blank">Cartela Lã</a></li>
            <li class="graphik18" style="margin-bottom:4px;"><a class="pink" href="/pdf/acusticas-revestimentos/CartelaBasket.pdf" target="_blank">Cartela Basket</a></li>
            <li class="graphik18"><a class="pink" href="/pdf/acusticas-revestimentos/CartelaCreative.pdf" target="_blank">Cartela Creative</a></li>
          </ul>
        </div>
          
        <img class="knoll-brand-item-secondary-img" :srcset="require('~/assets/images/acusticas-revestimentos/tecidos2.jpg').srcSet" />

      </div>
    </div>


</div>

</div>
</template>

<style scoped>
  .divisoria-item {
    grid-column: 1/4;
  }

  .grid3divisoria {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 28px;
}

  .content {
    padding-top: 415px;
  }

  .category-name {
    grid-column: 1/4;
    margin-bottom: 37px;
  }

  .category-description {
    grid-column: 1/3;
    margin-bottom: 80px;
  }

  .linha-div {
    grid-column: 1/4;
    height: 1px;
    background-color: #DEDCDB;
    margin-bottom: 40px;
  }

  .sub-category-name {
    grid-column: 1/2;
    grid-row: 2/5 ;
    margin-bottom: 55px;
  }

  .img-destaque {
    grid-column: 2/4;
    margin: 8px 0 28px 0;
  }

  .iw25-description {
    grid-column: 2/3;
    margin-bottom: 94px;
  }
  
  .iw25-detail {
    grid-column: 3/4;
    margin-bottom: 94px;
  }

  .menu-anchor {
    margin-bottom: 64px;
  }

  .sticky {
    position: sticky;
    top: 28px;
    display: inline-table;
  }

  .ecoshape-item {
    grid-column: 2/4;
    margin-bottom: 64px;
  }

  .ecoshapes-title {
    margin-bottom: 32px;
  }

  .ecoshape-item-img {
    grid-column: 1/3;
    margin-bottom: 32px;
  }

  .ecoshape-item-title {
    grid-column: 1/3;
    margin-bottom: 32px;
  }

  .tabela-ecoshapes {
    grid-column: 2/3;
  }

  .knoll-brand-item-description-text {
    margin-bottom: 32px;
  }

  .ecoshape-linha {
    grid-column: 1/3;
  }

  .space28 {
    margin-bottom: 32px;
  }

  .knoll-brand-item {
    grid-column: 2/4;
    margin-bottom: 64px;
  }
  
  .knoll-brand-item-description {
    display: grid;
  }

  .bottom {
    align-self: end;
  }


  @media screen and (max-width: 1020px) {

  .divisoria-item {
    grid-column: 1/3;
  }

    .category-name {
      grid-column: 1/3;
      margin-bottom: 19px;
    }

  .grid3divisoria {
    grid-template-columns: repeat(2, 1fr);
}

  .sub-category-name {
    grid-column: 1/3;
    margin-bottom: 28px;
  }

  .linha-div {
    grid-column: 1/3;
    margin-bottom: 40px;
  }

  .img-destaque {
    grid-column: 1/3;
    margin: 8px 0 28px 0;
  }

  .iw25-description {
    grid-column: 1/3;
    margin-bottom: 28px;
  }
  
  .iw25-detail {
    grid-column: 1/3;
    margin-bottom: 64px;
  }

    .content {
     padding-top: 157px;
    }

  .menu-anchor {
    grid-column: 1/3;
  }

  .sticky {
    position: relative;
    top: 0;
  }

  .ecoshape-item {
    grid-column: 1/3;
  }

  .tabela-ecoshapes {
    grid-column: 1/3;
  }

 .ecoshape-item-container {
   grid-column: 1/3;
 }

 .ecoshape-item-img {
   margin-bottom: 20px;
 }

 .ecoshape-item-title {
   margin-bottom: 20px;
 }

 .knoll-brand-item-title {
   grid-column: 1/3;
   margin-bottom: 20px;
 }

 .knoll-brand-item {
   grid-column: 1/3;
 }

 .knoll-brand-item-description {
   grid-column: 1/3;
   margin-bottom: 20px;
 }

 .knoll-brand-item-secondary-img {
   grid-column: 1/3;
 }

 .tabela {
   grid-column: 1/3;
    margin-bottom: 20px;
 }

  }
</style>


<script>
import Menu from '~/components/Menu.vue'
import MenuMobile from '~/components/MenuMobile.vue'

export default {
  components: {
    Menu,
    MenuMobile
  },
  data() {
    return {
      title: 'Acústicas e Revestimentos'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>