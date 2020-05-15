<template>
<div class="content">
  <MenuMobile />

  <!-- HERO -->
  <div class="product-highlight grid3">
    <div class="product-name">
      <ul class="product-info">
        <li class="graphik18 gray"><h2>F.WAY</h2></li>
        <li class="pressura56 black"><h1>Componivel</h1></li>
      </ul>
    </div>
    <img :data-srcset="require('~/assets/images/mobiliariocorporativo/reunioes/3_6_Fway_Componivel/hero.jpg').srcSet" class="product-image lazyload" />
  </div>



  <!-- GALERIA DE IMAGENS -->
  <div class="galeria-imagens grid3">
    <img :data-srcset="require('~/assets/images/mobiliariocorporativo/reunioes/3_6_Fway_Componivel/vertical.jpg').srcSet" class="lazyload" />
    <img :data-srcset="require('~/assets/images/mobiliariocorporativo/reunioes/3_6_Fway_Componivel/horizontal.jpg').srcSet" class="lazyload coluna2-3" />
  </div>




  <!-- SERVIÇOS -->
    <Servicos />



  <!-- PRODUTOS RELACIONADOS -->
  
    <RelatedProduct
      imgproduct1="mobiliariocorporativo/reunioes/3_5_Kush_Sansiro/hero.jpg"
      nameproduct1="San Siro"
      brandproduct1="Kusch"
      linkproduct1="mobiliario_corporativo/reuniao/san-siro"

      imgproduct2="mobiliariocorporativo/reunioes/3_7_Maxdesign_Offsettable/hero.jpg"
      nameproduct2="Offset Table"
      brandproduct2="Maxdesign"
      linkproduct2="mobiliario_corporativo/reuniao/offset-table"
    />



</div>
</template>


<style scoped>
  .linha-div {
    grid-column: 1/4;
    height: 1px;
    background-color: #DEDCDB;
    margin-bottom: 40px;
  }

@media screen and (max-width: 1020px) {
    .content {
      padding-top: 251px;
    }

  .linha-div {
    grid-column: 1/3;
    margin-bottom: 28px;
  }  
}
</style>

<script>
import RelatedProduct from '~/components/RelatedProduct.vue'
import MenuMobile from '~/components/MenuMobile.vue'
import ProdutoVariacao from '~/components/ProdutoVariacao.vue'
import Servicos from '~/components/Servicos.vue'

export default {
  components: {
    RelatedProduct,
    MenuMobile,
    ProdutoVariacao,
    Servicos
  },
  data() {
    return {
      title: 'Componivel — F.WAY'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>