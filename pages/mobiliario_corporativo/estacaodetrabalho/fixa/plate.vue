<template>
    <div class="container">
        <!-- HERO -->
        <div class="product-highlight grid3">
            <div class="product-name target-name">
            <ul class="product-info">
                <li class="graphik18 gray"><h2>Escinter</h2></li>
                <li class="pressura56 black"><h1>Plate</h1></li>
            </ul>
            </div>
            <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/hero-carrossel/plate.jpg').srcSet" class="product-image lazyload" />

            <ul class="carousel-variacoes">
            <li class="carousel-variacoes-item"><n-link to="/mobiliario_corporativo/estacaodetrabalho/fixa" exact-active-class="cv-active"><img :src="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/hero-carrossel/pe-fit.jpg')"></n-link></li>
            <li class="carousel-variacoes-item"><n-link to="/mobiliario_corporativo/estacaodetrabalho/fixa/mix" exact-active-class="cv-active"><img :src="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/hero-carrossel/pe-mix.jpg')"></n-link></li>
            <li class="carousel-variacoes-item"><n-link to="/mobiliario_corporativo/estacaodetrabalho/fixa/block" exact-active-class="cv-active"><img :src="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/hero-carrossel/pe-block.jpg')"></n-link></li>
            <li class="carousel-variacoes-item"><n-link to="/mobiliario_corporativo/estacaodetrabalho/fixa/loop" exact-active-class="cv-active"><img :src="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/hero-carrossel/pe-loop.jpg')"></n-link></li>
            <li class="carousel-variacoes-item"><n-link to="/mobiliario_corporativo/estacaodetrabalho/fixa/cross" exact-active-class="cv-active"><img :src="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/hero-carrossel/pe-cross.jpg')"></n-link></li>
            <li class="carousel-variacoes-item"><n-link to="/mobiliario_corporativo/estacaodetrabalho/fixa/bowl" exact-active-class="cv-active"><img :src="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/hero-carrossel/pe-bowl.jpg')"></n-link></li>
            <li class="carousel-variacoes-item"><n-link to="/mobiliario_corporativo/estacaodetrabalho/fixa/target" exact-active-class="cv-active"><img :src="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/hero-carrossel/pe-target.jpg')"></n-link></li>
            <li class="carousel-variacoes-item"><n-link to="/mobiliario_corporativo/estacaodetrabalho/fixa/plate" exact-active-class="cv-active"><img :src="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/hero-carrossel/pe-plate.jpg')"></n-link></li>
            </ul>

        </div>



        <!-- GALERIA DE IMAGENS -->
        <div class="galeria-imagens grid3">
            <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/vertical.jpg').srcSet" class="lazyload" />
            <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/horizontal/plate.jpg').srcSet" class="lazyload coluna2-3" />
            <div class="gi-txt graphik24 gray">Após 30 anos representando algumas das principais marcas internacionais, a Escinter passou a oferecer soluções criadas aqui de olho nas características de customização mais adequadas aos nossos ambientes de trabalho. Target se destaca pela ergonomia e pela possibilidade de customização de diversos itens.</div>
        </div>
    </div>
</template>

<style scoped>
@media screen and (max-width: 1020px) {
.product-name {
    grid-row: 3 !important;
}
}
</style>