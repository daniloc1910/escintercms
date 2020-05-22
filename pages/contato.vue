<template>
  <div class="content">

    <MenuMobile />
    
    <div class="grid3">
      <h1 class="title pressura60">Contato</h1>

      <div class="address">
      <div class="linha-div" />

      <ul class="table">
        <li class="graphik16">Endereço</li>
        <li><br></li>
        <li class="graphik16 gray">Rua Aspicuelta, 248</li>
        <li class="graphik16 gray">Vila Madalena</li>
        <li class="graphik16 gray">CEP 05433-010</li>
      </ul>

      <ul class="table">
        <li class="graphik16">Contato</li>
        <li><br></li>
        <li class="graphik16 gray">11 3062 5044</li>
        <li class="graphik16 gray"><a href="mailto:contato@escinter.com.br" target="_blank">contato@escinter.com.br</a></li>
      </ul>
      </div>

    <iframe class="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.3229653984818!2d-46.691081513197275!3d-23.55684141431077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57978ff5be99%3A0x1d107ad1c27722bb!2sEscinter!5e0!3m2!1spt-BR!2ses!4v1589999181172!5m2!1spt-BR!2ses" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

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
        padding-top: 227px;
      }

      .address {
        grid-column: 1/3;
      }

      .mapa {
        grid-column: 1/3;
        padding-bottom: 100%;
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