<template>
<div class="content">
  <div class="product-highlight grid3">
    <div class="product-name">
      <ul class="product-info"> 
        <li class="graphik18 gray">{{blogPost.brand}}</li>
        <li class="pressura56 black">{{blogPost.producttitle}}</li>
      </ul>
    </div>
    <img class="product-image" :src="blogPost.featuredimage" />
  </div>

  <div class="product-description grid3">
    <img class="product-image-detail" src="~assets/image-product-detail.jpg" />
    <img class="product-image-scene" src="~assets/image-produtc-scene.png" />
    <div class="product-description-title graphik24">Inovadora em sua simplicidade, ReGeneration é minimalista no uso de componentes. O projeto utiliza materiais flexíveis, duráveis e sustentáveis com a melhor resposta aos movimentos do usuário, proporcionando conforto e suporte ao longo do dia.</div>
    <div class="product-description-items-left graphik16 gray">
      <ul>
        <li>Frameless Flex Back fuses two elements: high performance elastomeric</li>
        <li>Frameless Flex Back fuses two elements: high performance elastomeric</li>
        <li>Frameless Flex Back fuses two elements: high performance elastomeric</li>
        <li>Frameless Flex Back fuses two elements: high performance elastomeric</li>
      </ul>
    </div>
    <div class="product-description-items-right graphik16 gray">
      <ul>
        <li>Frameless Flex Back fuses two elements: high performance elastomeric</li>
        <li>Frameless Flex Back fuses two elements: high performance elastomeric</li>
        <li>Frameless Flex Back fuses two elements: high performance elastomeric</li>
        <li>Frameless Flex Back fuses two elements: high performance elastomeric</li>
      </ul>
    </div>
  </div>

  <div class="product-technical-informantion grid3">
    <div class="div-line"></div>
    <div class="product-technical-informantion-title pressura40">Informações técnicas</div>
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
    margin-bottom: 22px;
  }

  .product-image-scene{
    grid-column: 2/4;
  }

  .product-description {
    margin-bottom: 82px;
  }

  .product-description-title {
    grid-column: 1/2;
  }

  .product-description-items-left {
    grid-column: 2/3;
    padding-top: 7px;
  }

  .product-description-items-left li {
    margin-bottom: 16px;
  }

  .product-description-items-right {
    grid-column: 3/4;
    padding-top: 7px;
  }

  .product-description-items-right li {
    margin-bottom: 16px;
  }

  .div-line {
    grid-column: 1/4;
    height: 1px;
    background-color: #DEDCDB;
    margin-bottom: 21px;
  }

  .product-technical-informantion-title{
    grid-column: 1/2;
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