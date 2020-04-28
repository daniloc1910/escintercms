<template>
      <n-link class="product-item" :to="'/' + linkproduct">
        <li><img :src="require('~/assets/images/' + imgproduct)" /></li>
        <li class="category-item-productname pressura19">{{ nameproduct }}</li>
        <li class="graphik16 gray">{{ brandproduct }}</li>
      </n-link>
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
    },
    brandproduct: {
      type: String,
      required: true
    },
    linkproduct: {
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

  a {
    color:#222;
  }
</style>