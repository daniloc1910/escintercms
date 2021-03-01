<template>
    <div class="container">
        <!-- HERO -->
        <div class="product-highlight grid3">
            <div class="product-name target-name">
            <ul class="product-info">
                <li class="graphik18 gray"><h2>Escinter</h2></li>
                <li class="pressura56 black"><h1>Fit</h1></li>
            </ul>
            </div>
            <img :src="require('~/assets/images/nuxt.jpg').placeholder" :data-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/hero-carrossel/fit.jpg').srcSet" class="product-image ratio lazyload" />

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
            <Flickity :options="{wrapAround: true, autoPlay: 6000, lazyLoad: true, fade: true}" class="carousel coluna2-3">
            
            <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/horizontal/01.jpg').srcSet" /></div>
            <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/horizontal/02.jpg').srcSet" /></div>
            <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/horizontal/03.jpg').srcSet" /></div>
            <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/horizontal/04.jpg').srcSet" /></div>
            <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/horizontal/06.jpg').srcSet" /></div>
            <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/horizontal/07.jpg').srcSet" /></div>
            <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/horizontal/08.jpg').srcSet" /></div>
            <div class="carousel-cell"><img :data-flickity-lazyload-srcset="require('~/assets/images/mobiliariocorporativo/estacaodetrabalho/1_1_Fixas/1_1_1_Escinter_Target/horizontal/09.jpg').srcSet" /></div>
            </Flickity>
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