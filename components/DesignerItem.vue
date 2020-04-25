<template>
  <div class="designer-item">
    <img style="margin-bottom:13px;" :srcset="require('~/assets/images/knoll-design/' + desginerprofile).srcSet" />
    <li class="graphik16">{{ designername }}</li>
  </div>
</template>

<script>
export default {
  props: {
    desginerprofile: {
      type: String,
      required: true
    },
    designername: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .designer-item {
    margin-bottom: 23px;
  }
</style>