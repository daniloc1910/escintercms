<template>
<div class="content">
  <div class="product-highlight grid3">
    <div class="product-name">
      <ul class="product-info"> 
        <li class="graphik18 gray">{{blogPost.brand}}</li>
        <li class="pressura56 black">{{blogPost.product-title}}</li>
      </ul>
    </div>
    <img class="product-image" src="~assets/image-cadeira.jpg" />
  </div>

  <div class="product-description grid3">
    <img class="product-image-detail" src="~assets/image-product-detail.jpg" />
    <img class="product-image-scene" src="~assets/image-produtc-scene.png" />
  </div>
</div>
</template>

<style>
  .product-highlight {
    margin-bottom: 73px;
  }
  
  .product-image {
    grid-column: 2/4;
  }

  .product-name {
    grid-column: 1/2;
    position: relative;
  }

  .product-info {
    position: absolute;
    bottom: 0;
  }

  .product-image-detail{
    grid-column: 1/2;
  }

  .product-image-scene{
    grid-column: 2/4;
  }
</style>

<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { blogPost: payload };
    else
      return {
        blogPost: await require(`~/assets/content/blog/${params.blog}.json`),
      };
  },
};
</script>