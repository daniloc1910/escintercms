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
    <img class="product-image-detail" :src="blogPost.imagedetail" />
    <img class="product-image-scene" :src="blogPost.imageplacement" />
    <div class="product-description-title graphik24">{{blogPost.productdescriptiontitle}}</div>
    <div class="product-description-items-left graphik16 gray">
      <ul>
        <li>{{blogPost.item2}}</li>
      </ul>
    </div>
    <div class="product-description-items-right graphik16 gray">
      <ul>
        <li>{{blogPost.productdescriptionlist}}</li>
      </ul>
    </div>
  </div>

  <div class="product-technical-informantion grid3">
    <div class="div-line"></div>
    <div class="product-technical-informantion-title pressura40">Informações técnicas</div>
    <div class="product-technical-informantion-specs-img"><img :src="blogPost.technicalillustaration" /></div>
    <div class="product-technical-informantion-specs">
      <ul>
        <li class="product-technical-informantion-specs-list-items"><span class="pressura15 gray">Dimensões</span> <span class="pressura15" style="float:right;">h 720 x b 620 x d 530 mm</span></li>
        <li class="product-technical-informantion-specs-list-items"><span class="pressura15 gray">Acabamento</span> <span class="pressura15" style="float:right;">Madeira e aço</span></li>
      </ul>
    </div>
    <div class="product-technical-informantion-specs-downloads">
      <ul>
        <li class="product-technical-informantion-specs-list-items"><span class="pressura15 pink">Download de catálogo</span> <span class="pressura15 pink" style="float:right;">↓</span></li>
        <li class="product-technical-informantion-specs-list-items"><span class="pressura15 pink">Download de informações básicas</span> <span class="pressura15 pink" style="float:right;">↓</span></li>
      </ul>
    </div>
  </div>

  <div class="product-module-services grid3">
    <div class="div-line"></div>
    <div class="product-module-services-title pressura60">serviços prestados aos nossos clientes, desde o primeiro contato comercial até a pós-ocupação</div>
    <ul class="product-module-services-list-left graphik18">
      <li>Design & Specification</li>
      <li>Design & Specification</li>
      <li>Design & Specification</li>
    </ul>
    <ul class="product-module-services-list-right graphik18">
      <li>Installation</li>
      <li>Design & Specification</li>
      <li>Design & Specification</li>
    </ul>
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

  .product-technical-informantion {
    margin-bottom: 81px;
  }

  .div-line {
    grid-column: 1/4;
    grid-row: 1;
    height: 1px;
    background-color: #DEDCDB;
    margin-bottom: 21px;
  }

  .product-technical-informantion-title {
    grid-column: 1/2;
    grid-row: 2;
  }

  .product-technical-informantion-specs {
    grid-column: 2/3;
    grid-row: 3;
  }

  .product-technical-informantion-specs-img {
    grid-column: 2/3;
    grid-row: 2;
    margin: 25px 0 27px 0;
  }

  .product-technical-informantion-specs-list-items {
    padding: 14px 0 17px 0;
    border-top: solid 1px #DEDCDB;
  }

  .product-technical-informantion-specs-downloads {
    grid-column: 3/4;
    grid-row: 3;
  }

  .product-module-services {
    margin-bottom: 81px;
  }

  .product-module-services-title {
    grid-column: 1/3;
    margin-bottom: 59px;
  }

  .product-module-services-list-left {
    grid-column: 1/2;
  }

  .product-module-services-list-left li {
    padding-bottom: 4px;
  }

  .product-module-services-list-right {
    grid-column: 2/3;
  }

  .product-module-services-list-right li {
    padding-bottom: 4px;
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