<template>
      <n-link class="product-item" :to="'/' + linkproduct">
        <ul class="product-item-container">
        <li><img :data-srcset="require('~/assets/images/' + imgproduct).srcSet" class="lazyload" /></li>
        <li class="category-item-productname pressura19">{{ nameproduct }}</li>
        <li class="brand-product graphik16 gray">{{ brandproduct }}</li>
        <li class="link-label graphik16 pink"> Ver mais</li>
        </ul>
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

  .product-item-container {
    position: relative;
  }

  img {
    transition: 0.4s;
  }

  .link-label {
    opacity: 0;
    transform: translateY(-18px);
    transition: 0.15s;
    transition-timing-function: ease-in-out;
  }

  .brand-product {
    transition: 0.15s;
    transition-timing-function: ease-in-out;
  }

  .category-item-productname {
    transition: 0.15s;
    transition-timing-function: ease-in-out;
  }

  .product-item:hover  img {
    opacity: 1;
    transition: 0.4s;
    transition-timing-function: ease-in-out;
  }

  .product-item:hover  .link-label {
    opacity: 1;
    transition: 0.15s;
    transition-timing-function: ease-in-out;
  }

  .product-item:hover  .brand-product {
    transform: translateY(-18px);
    transition: 0.15s;
    transition-timing-function: ease-in-out;
  }

  .product-item:hover  .category-item-productname {
    transform: translateY(-18px);
    transition: 0.15s;
    transition-timing-function: ease-in-out;
  }

  a {
    color:#222;
  }


  @media screen and (max-width: 1020px) {

    .product-item {
      margin-bottom: 23px;
    }

  }
</style>