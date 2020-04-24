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
      <img :srcset="require('~/assets/images/haus-florence.png').srcSet" />
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
        <ul>
          <li class="pressura40">Os designers mais marcantes</li>
          <li class="graphik18 pink">Conheça todos no site da Knoll</li>
        </ul>
      </div>

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
  }

  .linha-div {
    grid-column: 1/5;
    height: 1px;
    background-color: #DEDCDB;
  }

  .title-history {
    grid-column: 1/3;
  }
</style>

<script>


export default {
  components: {
    
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