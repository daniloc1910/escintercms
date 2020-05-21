<template>
  <div class="content">
    
    <div class="grid3">
      <h1 class="title pressura60">Contato</h1>

      <div class="linha-div" />

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

  .linha-div {
    grid-column: 1/2;
    height: 1px;
    background-color: #DEDCDB;
  }
</style>

<script>
export default {
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