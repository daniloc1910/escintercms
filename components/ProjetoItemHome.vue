<template>
    <div class="item-projeto">
        <h3 class="title-projeto pressura40">{{ titleproject }}</h3>
        <p class="description-projeto graphik18">{{ description }}</p>
        <ul class="tabela-projeto tabela">
            <li class="pressura15 gray">Área<span class="item-right black">{{ areavalue }}</span></li>
            <li class="pressura15 gray">Ano<span class="item-right black">{{ yearvalue }}</span></li>
            <li class="pressura15 gray">Cidade<span class="item-right black">{{ cityvalue }}</span></li>
            <li class="pressura15 gray">Torre<span class="item-right black">{{ torrevalue }}</span></li>
            <li class="pressura15 gray">Andares<span class="item-right black">{{ andaresvalue }}</span></li>
        </ul>
    </div>
</template>

<script>
export default {
  props: {
    titleproject: {
      type: String,
      required: true
    },
    areavalue: {
      type: String,
      required: true
    },
    cityvalue: {
      type: String,
      required: true
    },
    torrevalue: {
      type: String,
      required: true
    },
    andaresvalue: {
      type: String,
      required: true
    },
    yearvalue: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .title-projeto {
    margin-bottom: 24px;
    color: #222;
  }

  .item-projeto {
    margin-bottom: 120px;
    width: calc(100% - 28px);
    margin-top: 13px;
  }

  .description-projeto {
    height: 180px;
    color: #222;
  }

  @media screen and (max-width: 1020px) {

  .item-projeto {
    margin-bottom: 40px;
    width: 100%;
  }

  .description-projeto {
    height: auto;
    margin-bottom: 40px;
  }

  }
</style>