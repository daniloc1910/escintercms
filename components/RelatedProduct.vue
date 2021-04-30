<template>
  <div class="category-item grid3">
    <div class="linha-div"></div>

    <div class="titlebutton">
      <ul>
        <h3 class="pressura40 title">Produtos relacionados</h3>
      </ul>
    </div>

    <n-link class="product-item-1" :to="'/' + linkproduct1">
      <ul class="product-item-container">
        <li>
          <img
            :src="require('~/assets/images/nuxt.jpg').placeholder"
            :data-srcset="require('~/assets/images/' + imgproduct1).srcSet"
            class="lazyload"
          />
        </li>
        <li class="category-item-productname pressura19">{{ nameproduct1 }}</li>
        <li class="brand-product graphik16 gray">{{ brandproduct1 }}</li>
        <li class="link-label graphik16 pink">Ver detalhes</li>
      </ul>
    </n-link>

    <span v-if="linkproduct2">
      <n-link class="product-item-1" :to="'/' + linkproduct2">
        <ul class="product-item-container">
          <li>
            <img
              :src="require('~/assets/images/nuxt.jpg').placeholder"
              :data-srcset="require('~/assets/images/' + imgproduct2).srcSet"
              class="lazyload"
            />
          </li>
          <li class="category-item-productname pressura19">
            {{ nameproduct2 }}
          </li>
          <li class="brand-product graphik16 gray">{{ brandproduct2 }}</li>
          <li class="link-label graphik16 pink">Ver detalhes</li>
        </ul>
      </n-link>
    </span>
  </div>
</template>

<script>
export default {
  props: {
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
};
</script>

<style scoped>
.category-item {
  margin-bottom: 54px;
}

.linha-div {
  grid-column: 1/4;
  height: 1px;
  background-color: #dedcdb;
  margin-bottom: 40px;
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

.link-label {
  opacity: 0;
  transform: translateY(-18px);
  transition: 0.15s cubic-bezier(0.65, 0.05, 0.36, 1);
}

.brand-product {
  transition: 0.15s cubic-bezier(0.65, 0.05, 0.36, 1);
}

.category-item-productname {
  transition: 0.15s cubic-bezier(0.65, 0.05, 0.36, 1);
}

.product-item-1:hover img {
  opacity: 1;
  transition: 0.4s cubic-bezier(0.65, 0.05, 0.36, 1);
}

.product-item-1:hover .link-label {
  opacity: 1;
  transition: 0.15s cubic-bezier(0.65, 0.05, 0.36, 1);
}

.product-item-1:hover .brand-product {
  transform: translateY(-18px);
  transition: 0.15s cubic-bezier(0.65, 0.05, 0.36, 1);
}

.product-item-1:hover .category-item-productname {
  transform: translateY(-18px);
  transition: 0.15s cubic-bezier(0.65, 0.05, 0.36, 1);
}

@media screen and (max-width: 1020px) {
  .linha-div {
    grid-column: 1/3;
    margin-bottom: 28px;
  }

  .category-item {
    margin-bottom: 38px;
  }

  .titlebutton {
    grid-column: 1/3;
    margin-bottom: 23px;
  }
}
</style>
