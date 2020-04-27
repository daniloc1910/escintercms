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
          <li><a href="#" v-scroll-to="'#knolltextiles'">Knoll Textiles</a></li>
          <li><a href="#" v-scroll-to="'#muuto'">Muuto</a></li>
          <li><a href="#" v-scroll-to="'#spinneyback'">Spinneyback</a></li>
          <li><a href="#" v-scroll-to="'#filzfelt'">FilzFelt</a></li>
          <li><a href="#" v-scroll-to="'#dateweiser'">Dateweiser</a></li>
        </ul>
      </div>

      
      <!-- KNOLLSTUDIO -->
      <div id="knollstudio" class="knoll-brand-item">
        <div class="grid2">
          <div class="knoll-brand-item-title pressura40">KnollStudio</div>
          <div class="knoll-brand-item-description graphik24">
            <ul>
              <li class="knoll-brand-item-description-text">KnollStudio is a definitive resource for modern furniture. The collection includes iconic pieces from the great modernists and exciting new products from today’s best designers. Life changes, but quality endures.</li>
              <li class="graphik18"><a class="pink" href="https://www.knoll.com/knollstudio" target="_blank">Visite o site da KnollStudio ↗</a></li>
            </ul>
              </div>
          
          <Flickity :options="{wrapAround: true, autoPlay: 6000, lazyLoad: true}" class="carousel">
            <div class="carousel-cell"><img :data-flickity-lazyload="require('~/content/images/knollstudio/carousel1.jpg')" /></div>
            <div class="carousel-cell"><img :data-flickity-lazyload="require('~/content/images/knollstudio/carousel2.jpg')" /></div>
            <div class="carousel-cell"><img :data-flickity-lazyload="require('~/content/images/knollstudio/carousel3.jpg')" /></div>
            <div class="carousel-cell"><img :data-flickity-lazyload="require('~/content/images/knollstudio/carousel4.jpg')" /></div>
          </Flickity>

          <div class="knoll-brand-item-secondary-description graphik16 gray">
          The KnollStudio table collection includes iconic dining tables, performance training tables, elegant conference tables and everything in between.
          </div>

          <img class="knoll-brand-item-secondary-img" :srcset="require('~/assets/images/knollstudio/Rectangle78.jpg').srcSet" />

        </div>
      </div>

      
      <!-- KNOLL EXTRA -->
      <div id="knollextra" class="knoll-brand-item">
        <div class="linha-div"></div>
        
        <div class="grid2">
          <div class="knoll-brand-item-title pressura40">Knoll Extra</div>
          <div class="knoll-brand-item-description graphik24">
            <ul>
              <li class="knoll-brand-item-description-text">KnollExtra makes your work life easier with office accessories to illuminate your space, manage your technology and ensure your well-being.</li>
              <li class="graphik18"><a class="pink" href="https://www.knoll.com/design-plan/products/by-brand/knollextra" target="_blank">Visite o site da Knoll Extra ↗</a></li>
            </ul>
              </div>
          
          <Flickity :options="{wrapAround: true, autoPlay: 6000, lazyLoad: true}" class="carousel">
            <div class="carousel-cell"><img :data-flickity-lazyload="'images/knollextra/carousel1.jpg'" /></div>
            <div class="carousel-cell"><img :data-flickity-lazyload="'images/knollextra/carousel2.jpg'" /></div>
            <div class="carousel-cell"><img :data-flickity-lazyload="'images/knollextra/carousel3.jpg'" /></div>
            <div class="carousel-cell"><img :data-flickity-lazyload="'images/knollextra/carousel4.jpg'" /></div>
          </Flickity>

          <div class="knoll-brand-item-secondary-img">
          <img :srcset="require('~/assets/images/knollextra/desktop-management.jpg').srcSet" />
          <div class="img-description graphik16 gray">Desktop Management</div>
          </div>
          
          <div class="knoll-brand-item-secondary-img">
          <img :srcset="require('~/assets/images/knollextra/lighting.jpg').srcSet" />
          <div class="img-description graphik16 gray">Lighting</div>
          </div>

        </div>
      </div>


      <!-- KNOLL TEXTILES -->
      <div id="knolltextiles" class="knoll-brand-item">
        <div class="linha-div"></div>
        
        <div class="grid2">
          <div class="knoll-brand-item-title pressura40">Knoll Textiles</div>
          <div class="knoll-brand-item-description graphik24">
            <ul>
              <li class="knoll-brand-item-description-text">KnollTextiles, founded in 1947 by Florence Knoll, was the first company to address the fabric needs of the commercial interior. Today, KnollTextiles is one of the largest textile suppliers in North America, with products developed for healthcare, hospitality, educational, corporate, and residential interiors.</li>
              <li class="graphik18"><a class="pink" href="https://www.knoll.com/shop/knolltextiles" target="_blank">Visite o site da Knoll Textiles ↗</a></li>
            </ul>
              </div>
          
          <Flickity :options="{wrapAround: true, autoPlay: 6000, lazyLoad: true}" class="carousel">
            <div class="carousel-cell"><img :data-flickity-lazyload="'images/textiles/carousel1.jpg'" /></div>
            <div class="carousel-cell"><img :data-flickity-lazyload="'images/textiles/carousel2.jpg'" /></div>
            <div class="carousel-cell"><img :data-flickity-lazyload="'images/textiles/carousel3.jpg'" /></div>
            <div class="carousel-cell"><img :data-flickity-lazyload="'images/textiles/carousel4.jpg'" /></div>
          </Flickity>

        </div>
      </div>


      <!-- MUUTO -->
      <div id="muuto" class="knoll-brand-item">
        <div class="linha-div"></div>
        
        <div class="grid2">
          <div class="knoll-brand-item-title pressura40">Muuto</div>
          <div class="knoll-brand-item-description graphik24">
            <ul>
              <li class="knoll-brand-item-description-text">Muuto is rooted in the Scandinavian design tradition characterized by enduring aesthetics, functionality, craftsmanship and an honest expression. By expanding this heritage with forward-looking materials, techniques and bold creative thinking, our ambition is to deliver new perspectives on Scandinavian design.</li>
              <li class="graphik18"><a class="pink" href="https://muuto.com" target="_blank">Visite o site da Muuto ↗</a></li>
            </ul>
              </div>
          
          <Flickity :options="{wrapAround: true, autoPlay: 6000, lazyLoad: true}" class="carousel">
            <div class="carousel-cell"><img :data-flickity-lazyload="'images/muuto/carousel1.jpg'" /></div>
            <div class="carousel-cell"><img :data-flickity-lazyload="'images/muuto/carousel2.jpg'" /></div>
            <div class="carousel-cell"><img :data-flickity-lazyload="'images/muuto/carousel3.jpg'" /></div>
            <div class="carousel-cell"><img :data-flickity-lazyload="'images/muuto/carousel4.jpg'" /></div>
          </Flickity>
          
          <div class="knoll-brand-item-secondary-img">
          <img :srcset="require('~/assets/images/muuto/muuto1.jpg').srcSet" />
          </div>

          <div class="knoll-brand-item-secondary-img">
          <img :srcset="require('~/assets/images/muuto/muuto2.jpg').srcSet" />
          </div>

        </div>
      </div>


      <!-- SPINNEYBACK -->
      <div id="spinneyback" class="knoll-brand-item">
        <div class="linha-div"></div>
        
        <div class="grid2">
          <div class="knoll-brand-item-title pressura40">Spinneyback</div>
          <div class="knoll-brand-item-description graphik24">
            <ul>
              <li class="knoll-brand-item-description-text">Spinneybeck is recognized as a leading provider of high-quality leather to architects and interior designers. Over the decades, the company has evolved from a supplier of full grain, aniline dyed Italian leather for upholstery and aircraft interiors to a manufacturer of pioneering architectural products in leather and beyond.</li>
              <li class="graphik18"><a class="pink" href="https://www.knoll.com/design-plan/products/by-brand/spinneybeck-design" target="_blank">Visite o site da Spinneyback ↗</a></li>
            </ul>
              </div>
          
          <Flickity :options="{wrapAround: true, autoPlay: 6000, lazyLoad: true}" class="carousel">
            <div class="carousel-cell"><img :data-flickity-lazyload="'images/spinneyback/carousel1.jpg'" /></div>
            <div class="carousel-cell"><img :data-flickity-lazyload="'images/spinneyback/carousel2.jpg'" /></div>
            <div class="carousel-cell"><img :data-flickity-lazyload="'images/spinneyback/carousel3.jpg'" /></div>
            <div class="carousel-cell"><img :data-flickity-lazyload="'images/spinneyback/carousel4.jpg'" /></div>
          </Flickity>
          
          <div class="knoll-brand-item-secondary-img">
          <img :srcset="require('~/assets/images/spinneyback/spinneyback2.jpg').srcSet" />
          </div>

          <div class="knoll-brand-item-secondary-img">
          <img :srcset="require('~/assets/images/spinneyback/spinneyback1.jpg').srcSet" />
          </div>

        </div>
      </div>


      <!-- FILZFELT -->
      <div id="filzfelt" class="knoll-brand-item">
        <div class="linha-div"></div>
        
        <div class="grid2">
          <div class="knoll-brand-item-title pressura40">Filzfelt</div>
          <div class="knoll-brand-item-description graphik24">
            <ul>
              <li class="knoll-brand-item-description-text">FilzFelt products, including acoustic solutions, floor coverings, hanging panels, wall panels and felt by the yard, are a great way to introduce color, texture and pattern into any space, residential or contract. Beyond the extensive scope of standard offerings, FilzFelt is ready to help create custom solutions for any project.</li>
              <li class="graphik18"><a class="pink" href="https://www.knoll.com/design-plan/products/by-brand/filzfelt-design" target="_blank">Visite o site da Filzfelt ↗</a></li>
            </ul>
              </div>
          
          <Flickity :options="{wrapAround: true, autoPlay: 6000, lazyLoad: true}" class="carousel">
            <div class="carousel-cell"><img :data-flickity-lazyload="'images/filzfelt/carousel1.jpg'" /></div>
            <div class="carousel-cell"><img :data-flickity-lazyload="'images/filzfelt/carousel2.jpg'" /></div>
            <div class="carousel-cell"><img :data-flickity-lazyload="'images/filzfelt/carousel3.jpg'" /></div>
            <div class="carousel-cell"><img :data-flickity-lazyload="'images/filzfelt/carousel4.jpg'" /></div>
          </Flickity>
          
          <div class="knoll-brand-item-secondary-img">
          <img :srcset="require('~/assets/images/filzfelt/filzfelt1.jpg').srcSet" />
          </div>

          <div class="knoll-brand-item-secondary-img">
          <img :srcset="require('~/assets/images/filzfelt/filzfelt2.jpg').srcSet" />
          </div>

        </div>
      </div>


      <!-- DATEWEISER -->
      <div id="dateweiser" class="knoll-brand-item">
        <div class="linha-div"></div>
        
        <div class="grid2">
          <div class="knoll-brand-item-title pressura40">Dateweiser</div>
          <div class="knoll-brand-item-description graphik24">
            <ul>
              <li class="knoll-brand-item-description-text">For signature spaces with refined and flexible conference furniture product platforms that feature a broad range of finishes across wood, metal, glass and stone, DatesWeiser creates custom client-facing environments with the perfect proportions and best-in-class workmanship. From conference and meeting rooms to dining areas, collaborative spaces and executive C-suites, DatesWeiser’s approach distinguishes the look of spaces built to last.</li>
              <li class="graphik18"><a class="pink" href="https://www.knoll.com/design-plan/products/by-brand/datesweiser" target="_blank">Visite o site da Dateweiser ↗</a></li>
            </ul>
              </div>
          
          <Flickity :options="{wrapAround: true, autoPlay: 6000, lazyLoad: true}" class="carousel">
            <div class="carousel-cell"><img :data-flickity-lazyload="'images/dateweiser/carousel1.jpg'" /></div>
            <div class="carousel-cell"><img :data-flickity-lazyload="'images/dateweiser/carousel2.jpg'" /></div>
            <div class="carousel-cell"><img :data-flickity-lazyload="'images/dateweiser/carousel3.jpg'" /></div>
            <div class="carousel-cell"><img :data-flickity-lazyload="'images/dateweiser/carousel4.jpg'" /></div>
          </Flickity>

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
    grid-row: 2/9;
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
    margin: -7px 0 50px 0;
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

  .img-description {
    margin-top: 17px;
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