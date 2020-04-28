<template>
  <div class="category-item grid3">
    <div class="linha-div"></div>

    <div class="titlebutton">
      <ul>
        <li class="pressura40 title">{{ title }}</li>
        <n-link :to="'/' + link"><li class="graphik18 gray">Ver todos</li></n-link>
      </ul>
    </div>

      <n-link class="product-item-1" :to="'/' + linkproduct1">
        <li><img :data-srcset="require('~/assets/images/' + imgproduct1).srcSet" class="lazyload" /></li>
        <li class="category-item-productname pressura19">{{ nameproduct1 }}</li>
        <li class="graphik16 gray">{{ brandproduct1 }}</li>
      </n-link>

      <n-link class="product-item-1" :to="'/' + linkproduct2">
        <li><img :data-srcset="require('~/assets/images/' + imgproduct2).srcSet" class="lazyload" /></li>
        <li class="category-item-productname pressura19">{{ nameproduct2 }}</li>
        <li class="graphik16 gray">{{ brandproduct2 }}</li>
      </n-link>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    imgproduct1: {
      type: String,
      required: true
    },
    nameproduct1: {
      type: String,
      required: true
    },
    brandproduct1: {
      type: String,
      required: true
    },
    linkproduct1: {
      type: String,
      required: true
    },
    imgproduct2: {
      type: String,
      required: true
    },
    nameproduct2: {
      type: String,
      required: true
    },
    brandproduct2: {
      type: String,
      required: true
    },
    linkproduct2: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .category-item {
    margin-bottom: 54px;
  }

  .linha-div {
    grid-column: 1/4;
    height: 1px;
    background-color: #DEDCDB;
    margin-bottom: 25px;
  }

  .title {
    margin-bottom: 5px;
  }

    .titlebutton {
    grid-column: 1/2;
  }

    a {
    color: #222;
  }

</style>