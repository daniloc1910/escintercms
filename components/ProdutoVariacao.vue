<template>
        <ul class="product-item">
        <li><img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/' + imgproduct).srcSet" class="lazyload" /></li>
        <li class="category-item-productname graphik18 gray">{{ nameproduct }}</li>
        </ul>
</template>

<script>
export default {
  props: {
    imgproduct: {
      type: String,
      required: true
    },
    nameproduct: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .product-item {
    margin-bottom: 55px;
  }


  @media screen and (max-width: 1020px) {

    .product-item {
      margin-bottom: 23px;
    }

  }
</style>