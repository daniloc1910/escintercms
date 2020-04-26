<template>
  <div class="content">

    <div class="backgroundwhite"></div>

    <div class="grid3 knoll-history">
      <div class="servicos-title pressura60">
        conheça mais sobre a marca que tem compromisso com a inovação e o design moderno.
      </div>
      <div class="servicos-description graphik24 gray">
        For nearly 80 years Knoll has remained true to the Bauhaus design philosophy that modern furniture should complement architectural space, not compete with it. At Knoll, modern design has been our guiding principle, and our passion has been shared by customers and design professionals worldwide.
      </div>

      <div class="knoll-history graphik18">
        Our founders, Hans and Florence Knoll, embraced the creative genius at the Bauhaus School and the Cranbrook Academy of Art to create new types of furniture and environments for the workplace. Their approach, where craftsmanship joined with technology through the use of design, anchors our perspective and shapes the values we endeavor to live by today.
        <br><br>
        A long history of collaborations, with pioneering modernists to bold contemporary designers, define not only the past but the future of Knoll through active, recent, and future partnerships with David Rockwell, Antenna Design, Barber Osgerby, Formway Design, Don Chadwick, David Adjaye, and Rem Koolhaas.
      </div>

      <div class="profile-history">
      <img :srcset="require('~/assets/images/knoll-design/haus-florence.png').srcSet" />
      <ul style="margin-top:16px;">
        <li class="graphik16">Hans and Florence Knoll</li>
        <li class="graphik16 gray">Fundadores da Knoll</li>
      </ul>
      </div>
    </div>

    <div class="grid3">  
    <div class="designers-grid">
      <div class="linha-div"></div>
      <div class="grid6">

      <div class="title-history">
        <ul class="title-history-sticky">
          <li class="pressura40 title-history-title">Os designers mais marcantes</li>
          <li class="graphik18"><a class="pink" href="https://www.knoll.com/discover-knoll/designers" target="_blank">Conheça todos no site da Knoll ↗</a></li>
        </ul>
      </div>

      <DesignerItem
        desginerprofile="2x4.jpg"
        designername="2x4"
      />

      <DesignerItem
        desginerprofile="antenna-design.jpg"
        designername="Antenna Design"
      />

      <DesignerItem
        desginerprofile="leila-massimo-vignelli.jpg"
        designername="Leila e Massimo Vignelli"
      />

      <DesignerItem
        desginerprofile="george-nakashima.jpg"
        designername="George Nakashima"
      />

      <DesignerItem
        desginerprofile="lucia-mercer.jpg"
        designername="Lucia Mercer"
      />

      <DesignerItem
        desginerprofile="ludwig-miesrvanrder-rohe.jpg"
        designername="Ludwig Mies van der Rohe"
      />

      <DesignerItem
        desginerprofile="ltl.jpg"
        designername="LTL"
      />

      <DesignerItem
        desginerprofile="maya-lin.jpg"
        designername="Maya Lin"
      />

      <DesignerItem
        desginerprofile="hans-knoll.jpg"
        designername="Hans Knoll"
      />

      <DesignerItem
        desginerprofile="jehs-laub.jpg"
        designername="Jehs + Laub"
      />

      <DesignerItem
        desginerprofile="paul-haigh.jpg"
        designername="Paul Haigh"
      />

      <DesignerItem
        desginerprofile="cini-boeri.jpg"
        designername="Cini Boeri"
      />

      </div>
    </div>
    </div>

    <div class="grid3"> 
      <div class="linha-div"></div>

      <div class="menu-anchor graphik18 gray">
        <ul class="title-history-sticky">
          <li><a href="#" v-scroll-to="'#knollstudio'">KnollStudio</a></li>
          <li><a href="#" v-scroll-to="'#knollextra'">Knoll Extra</a></li>
          <li>Knoll Textiles</li>
          <li>Muuto</li>
          <li>Spinneyback</li>
          <li>Filzfelt</li>
          <li>Dateweiser</li>
        </ul>
      </div>

      <div id="knollstudio" class="knoll-brand-item">
        <div class="grid2">
          <div class="knoll-brand-item-title pressura40">KnollStudio</div>
          <div class="knoll-brand-item-description graphik24">
            <ul>
              <li class="knoll-brand-item-description-text">KnollStudio is a definitive resource for modern furniture. The collection includes iconic pieces from the great modernists and exciting new products from today’s best designers. Life changes, but quality endures.</li>
              <li class="graphik18"><a class="pink" href="https://www.knoll.com/discover-knoll/designers" target="_blank">Visite o site da KnollStudio ↗</a></li>
            </ul>
              </div>
          
          <Flickity :options="{wrapAround: true, autoPlay: true, lazyLoad: true}" class="carousel">
            <div class="carousel-cell"><img :data-flickity-lazyload="require('~/assets/images/knollstudio/carousel.jpg').srcSet" /></div>
            <div class="carousel-cell"><img :data-flickity-lazyload="require('~/assets/images/knollstudio/carousel.jpg').srcSet" /></div>
            <div class="carousel-cell"><img :data-flickity-lazyload="require('~/assets/images/knollstudio/carousel.jpg').srcSet" /></div>
            <div class="carousel-cell"><img :data-flickity-lazyload="require('~/assets/images/knollstudio/carousel.jpg').srcSet" /></div>
          </Flickity>

          <div class="knoll-brand-item-secondary-description graphik16 gray">
          The KnollStudio table collection includes iconic dining tables, performance training tables, elegant conference tables and everything in between.
          </div>

          <img class="knoll-brand-item-secondary-img" :srcset="require('~/assets/images/knollstudio/Rectangle78.jpg').srcSet" />

        </div>
      </div>


      <div id="knollextra" class="knoll-brand-item">
        <div class="linha-div"></div>
        
        <div class="grid2">
          <div class="knoll-brand-item-title pressura40">Knoll Extra</div>
          <div class="knoll-brand-item-description graphik24">
            <ul>
              <li class="knoll-brand-item-description-text">KnollExtra makes your work life easier with office accessories to illuminate your space, manage your technology and ensure your well-being.</li>
              <li class="graphik18"><a class="pink" href="https://www.knoll.com/discover-knoll/designers" target="_blank">Visite o site da Knoll Extra ↗</a></li>
            </ul>
              </div>
          
          <Flickity :options="{wrapAround: true, autoPlay: true, lazyLoad: true}" class="carousel">
            <div class="carousel-cell"><img :data-flickity-lazyload="require('~/assets/images/knollstudio/carousel.jpg').srcSet" /></div>
            <div class="carousel-cell"><img :data-flickity-lazyload="require('~/assets/images/knollstudio/carousel.jpg').srcSet" /></div>
            <div class="carousel-cell"><img :data-flickity-lazyload="require('~/assets/images/knollstudio/carousel.jpg').srcSet" /></div>
            <div class="carousel-cell"><img :data-flickity-lazyload="require('~/assets/images/knollstudio/carousel.jpg').srcSet" /></div>
          </Flickity>

          <div class="knoll-brand-item-secondary-description graphik16 gray">
          The KnollStudio table collection includes iconic dining tables, performance training tables, elegant conference tables and everything in between.
          </div>

          <img class="knoll-brand-item-secondary-img" :srcset="require('~/assets/images/knollstudio/Rectangle78.jpg').srcSet" />

        </div>
      </div>
    
    </div>

  </div>
</template>

<style scoped>
  .backgroundwhite {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: white;
    z-index: -1;
    margin-top: -295px;
  }

  .content {
    padding-top: 295px;
  }

  .servicos-title {
    grid-column: 1/3;
    margin-bottom: 39px;
  }

  .servicos-description {
    grid-column: 1/3;
    margin-bottom: 64px;
  }

  .knoll-history{
    grid-column: 1/2;
  }

  .profile-history{
    grid-column: 3/4;
  }

  .knoll-history{
    margin-bottom: 94px;
  }

  .designers-grid {
    grid-column: 1/4;
    margin-bottom: 73px;
  }

  .linha-div {
    grid-column: 1/4;
    height: 1px;
    background-color: #DEDCDB;
    margin-bottom: 40px;
  }

  .title-history {
    grid-column: 1/3;
    grid-row: 1/4;
    margin-top: -7px;
    position: relative;
  }

  .title-history-title{
    margin-bottom: 20px;
  }

  .title-history-sticky {
    position: sticky;
    top: 28px;
  }

  .menu-anchor {
    grid-column: 1/2;
    grid-row: 2/4;
  }

  .knoll-brand-item{
    grid-column: 2/4;
    margin-bottom: 94px;
  }

  .knoll-brand-item-title {
    margin-top: -7px;
  }

  .menu-anchor li {
    margin-bottom: 4px;
  }

  .knoll-brand-item-description {
    margin: -7px 0 34px 0;
  }

  .knoll-brand-item-description-text {
    margin-bottom: 24px;
  }

  .carousel {
    grid-column: 1/3;
    margin-bottom: 36px;
  }

  .knoll-brand-item-secondary-description {
    align-self: end;
  }

</style>

<script>


import DesignerItem from '~/components/DesignerItem.vue'

export default {
  components: {
    DesignerItem
  },
  data() {
    return {
      title: 'Escinter — Knoll design'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>