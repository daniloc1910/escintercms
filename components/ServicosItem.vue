<template>
  <div class="servicos-item grid3">
    <div class="linha-div"></div>

    <div class="servicos-numero">{{ numero }}</div>
    <div class="servicos-title pressura40">{{ title }}</div>
    <div class="servicos-description graphik24">{{ description }}</div>
    <ul id="servicos-list">
      <li class="graphik16 gray">{{ itemlist1 }}</li>
      <li class="graphik16 gray">{{ itemlist2 }}</li>
      <li class="graphik16 gray">{{ itemlist3 }}</li>
      <li class="graphik16 gray">{{ itemlist4 }}</li>
      <li class="graphik16 gray">{{ itemlist5 }}</li>
      <li class="graphik16 gray">{{ itemlist6 }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    numero: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    itemlist1: {
      type: String,
      required: true
    },
    itemlist2: {
      type: String,
      required: true
    },
    itemlist3: {
      type: String,
      required: true
    },
    itemlist4: {
      type: String,
      required: true
    },
    itemlist5: {
      type: String,
      required: true
    },
    itemlist6: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .servicos-item {
    margin-bottom: 94px;
  }

  .linha-div {
    grid-column: 1/4;
    height: 1px;
    background-color: #DEDCDB;
  }

  .servicos-numero {
    grid-column: 1/2;
    margin-top: 22px;
    font-family: 'Pressura-Bold', Arial, sans-serif;
    color: #EF4545;
    font-size: 96px;
    line-height: 96px;
    text-transform: uppercase;
  }

  .servicos-title {
    grid-column: 2/4;
    margin: 33px 0 125px 0;
  }

  .servicos-description {
    grid-column: 2/4;
    margin-bottom: 23px;
  }

  #servicos-list {
    grid-column: 2/4;
  }

  #servicos-list li {
    padding-bottom: 4px;
  }



  @media screen and (max-width: 1020px) {

    .servicos-item {
      margin-bottom: 38px;
    }

    .linha-div {
      grid-column: 1/3;
    }

    .servicos-numero {
      grid-column: 1/3;
      margin-top: 6px;
      font-size: 80px;
      line-height: 80px;
      text-transform: uppercase;
    }
    
    .servicos-title {
      grid-column: 1/3;
      margin: 82px 0 26px 0;
    }

    .servicos-description {
      grid-column: 1/3;
    }

    #servicos-list {
      grid-column: 1/3;
    }

  }
</style>