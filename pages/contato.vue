<template>
  <div class="content">

    <MenuMobile />
    
    <div class="grid3">
      <h1 class="title pressura60">Contato</h1>

      <div class="address">
      <div class="linha-div" />

      <ul class="table">
        <li class="graphik16">Showroom</li>
        <li><br></li>
        <li class="graphik16 gray">Rua Wizard, 157</li>
        <li class="graphik16 gray">Vila Madalena</li>
        <li class="graphik16 gray">CEP 05434-080</li>
        <li class="graphik16 gray">São Paulo - SP</li>
      </ul>

      <ul class="table">
        <li class="graphik16">Centro de distribuição</li>
        <li><br></li>
        <li class="graphik16 gray">Rua Jorge Nunes Kehdi, 182</li>
        <li class="graphik16 gray">Vila Anastácio</li>
        <li class="graphik16 gray">CEP 05092-050</li>
        <li class="graphik16 gray">São Paulo - SP</li>
      </ul>

      <ul class="table">
        <li class="graphik16">Contato</li>
        <li><br></li>
        <li class="graphik16 gray">11 3062 5044</li>
        <li class="graphik16 gray">11 3055 3737</li>
        <li class="graphik16 gray"><a href="mailto:comercial@escinter.com.br" target="_blank">comercial@escinter.com.br</a></li>
      </ul>
      </div>

    <iframe class="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.377870684658!2d-46.690856884601104!3d-23.554868484686054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57963590d823%3A0x17f6ff3d68d5c659!2sR.%20Wisard%2C%20157%20-%20Vila%20Madalena%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005434-080%2C%20Brasil!5e0!3m2!1ses!2ses!4v1612454185420!5m2!1ses!2ses" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

    </div>

  </div>
</template>

<style scoped>
  .content {
    padding-top: 415px;
    margin-bottom: 158px;
  }

  .title {
    grid-column: 1/4;
    margin-bottom: 33px;
  }

  .mapa {
    grid-column: 2/4;
    padding-bottom: 66%;
  }

  .address {
        grid-column: 1/2;
  }

  .linha-div {
    height: 1px;
    background-color: #DEDCDB;
  }

  .table {
    margin-top: 32px;
  }

    @media screen and (max-width: 1020px) {

      .title {
        grid-column: 1/3;
      }

      .content {
        padding-top: 157px;
      }

      .address {
        grid-column: 1/3;
      }

      .mapa {
        grid-column: 1/3;
      }

      .table {
        margin-bottom: 32px;
      }
    
    }
</style>

<script>
import MenuMobile from '~/components/MenuMobile.vue'

export default {
  components: {
    MenuMobile
  },
    data() {
    return {
      title: 'Contato'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>