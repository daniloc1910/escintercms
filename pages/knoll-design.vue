<template>
  <div class="content">
    <MenuMobile />

    <div class="backgroundwhite"></div>

    <div class="grid3 knoll-history">
      <h1 class="servicos-title pressura60">
        Conheça mais sobre a marca que tem compromisso com a inovação e o design
        moderno.
      </h1>
      <h4 class="servicos-description graphik24 gray">
        Por quase 80 anos, Knoll permaneceu fiel à filosofia de design da
        Bauhaus de que os móveis modernos devem complementar o espaço
        arquitetônico, não competir com ele. Na Knoll, o design moderno tem sido
        nosso princípio orientador e nossa paixão foi compartilhada por clientes
        e profissionais de design em todo o mundo.
      </h4>

      <p class="knoll-history graphik18">
        Os fundadores, Hans e Florence Knoll, abraçaram o espírito criativo da
        Bauhaus School e da Cranbrook Academy of Art para criar novos tipos de
        móveis e ambientes para o local de trabalho. Sua abordagem, em que o
        artesanato se junta à tecnologia por meio do uso do design, ancora nossa
        perspectiva e molda os valores que buscamos viver hoje.
        <br /><br />
        Uma longa história de colaborações, de modernistas pioneiros a designers
        contemporâneos ousados, define não apenas o passado, mas o futuro da
        Knoll por meio de parcerias ativas, recentes e futuras com David
        Rockwell, Antenna Design, Barber Osgerby, Formway Design, Don Chadwick,
        David Adjaye e Rem Koolhaas.
      </p>

      <div class="profile-history">
        <img
          :data-srcset="
            require('~/assets/images/knoll-design/haus-florence.png').srcSet
          "
          class="lazyload"
        />
        <ul style="margin-top:16px;">
          <li class="graphik16">Hans and Florence Knoll</li>
          <li class="graphik16 gray">Fundadores da Knoll</li>
        </ul>
      </div>
    </div>

    <div class="grid3">
      <div class="designers-grid">
        <div class="linha-div"></div>
        <div class="grid6">
          <div class="title-history">
            <ul class="title-history-sticky">
              <h3 class="pressura40 title-history-title">
                Os designers mais marcantes
              </h3>
              <li class="graphik18">
                <a
                  class="pink"
                  href="https://www.knoll.com/discover-knoll/designers"
                  target="_blank"
                  >Conheça todos no site da Knoll
                  <span class="pressura21">↗</span></a
                >
              </li>
            </ul>
          </div>

          <DesignerItem
            desginerprofile="charles-pollock.jpg"
            designername="Charles Pollock"
          />

          <DesignerItem
            desginerprofile="cini-boeri.jpg"
            designername="Cini Boeri"
          />

          <DesignerItem
            desginerprofile="david-adjaye.jpg"
            designername="David Adjaye"
          />

          <DesignerItem
            desginerprofile="florence-knoll.jpg"
            designername="Florence Knoll"
          />

          <DesignerItem
            desginerprofile="formway-design.jpg"
            designername="Formway Design"
          />

          <DesignerItem
            desginerprofile="frank-gehry.jpg"
            designername="Frank Gehry"
          />

          <DesignerItem
            desginerprofile="harry-bertoia.jpg"
            designername="Harry Bertoia"
          />

          <DesignerItem
            desginerprofile="jehs-laub.jpg"
            designername="Jehs + Laub"
          />

          <DesignerItem
            desginerprofile="ludwig-miesrvanrder-rohe.jpg"
            designername="Ludwig Mies van der Rohe"
          />

          <DesignerItem
            desginerprofile="marc-krusin.jpg"
            designername="Marc Krusin"
          />

          <DesignerItem
            desginerprofile="marcel-breuer.jpg"
            designername="Marcel Breuer"
          />

          <DesignerItem
            desginerprofile="richard-schultz.jpg"
            designername="Richard Schultz"
          />
        </div>
      </div>
    </div>

    <div class="grid3">
      <div class="linha-div"></div>

      <div class="menu-anchor graphik18 gray">
        <ul class="title-history-sticky">
          <li><a href="#" v-scroll-to="'#knollstudio'">KnollStudio</a></li>
          <li><a href="#" v-scroll-to="'#knollextra'">Knoll Extra</a></li>
          <li><a href="#" v-scroll-to="'#knolltextiles'">Knoll Textiles</a></li>
          <li><a href="#" v-scroll-to="'#muuto'">Muuto</a></li>
          <li><a href="#" v-scroll-to="'#spinneyback'">Spinneyback</a></li>
          <li><a href="#" v-scroll-to="'#rockwell'">Rockwell Unscripted</a></li>
          <li><a href="#" v-scroll-to="'#filzfelt'">FilzFelt</a></li>
          <li><a href="#" v-scroll-to="'#dateweiser'">Dateweiser</a></li>
        </ul>
      </div>

      <!-- KNOLLSTUDIO -->
      <div id="knollstudio" class="knoll-brand-item">
        <div class="grid2">
          <h3 class="knoll-brand-item-title pressura40">KnollStudio</h3>
          <div class="knoll-brand-item-description graphik24">
            <ul>
              <li class="knoll-brand-item-description-text">
                <h4>
                  KnollStudio é uma fonte definitiva para quem busca por móveis
                  modernos. A coleção inclui peças icônicas dos grandes
                  modernistas e novos produtos empolgantes dos melhores
                  designers de hoje. A vida muda, mas a qualidade permanece. A
                  coleção de mesas KnollStudio inclui mesas de jantar icônicas,
                  mesas de trabalho, mesas de reunião elegantes e tudo o mais.
                </h4>
              </li>
              <li class="graphik18">
                <a
                  class="pink"
                  href="https://www.knoll.com/knollstudio"
                  target="_blank"
                  >Visite o site da KnollStudio
                  <span class="pressura21">↗</span></a
                >
              </li>
            </ul>
          </div>

          <Flickity
            :options="{ wrapAround: true, autoPlay: 6000, lazyLoad: true }"
            class="carousel"
          >
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/knollstudio/carousel1.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/knollstudio/carousel2.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/knollstudio/carousel3.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/knollstudio/carousel4.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/knollstudio/carousel5.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/knollstudio/carousel6.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/knollstudio/carousel7.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/knollstudio/carousel8.jpg').srcSet
                "
              />
            </div>
          </Flickity>

          <div class="knoll-brand-item-secondary-description graphik16 gray" />

          <img
            class="knoll-brand-item-secondary-img"
            :srcset="
              require('~/assets/images/knollstudio/Rectangle78.jpg').srcSet
            "
          />
        </div>
      </div>

      <!-- KNOLL EXTRA -->
      <div id="knollextra" class="knoll-brand-item">
        <div class="linha-div"></div>

        <div class="grid2">
          <h3 class="knoll-brand-item-title pressura40">Knoll Extra</h3>
          <div class="knoll-brand-item-description graphik24">
            <ul>
              <li class="knoll-brand-item-description-text">
                <h4>
                  KnollExtra torna sua vida profissional mais fácil com
                  acessórios de escritório para iluminar seu espaço, gerenciar
                  sua tecnologia e garantir seu bem-estar.
                </h4>
              </li>
              <li class="graphik18">
                <a
                  class="pink"
                  href="https://www.knoll.com/design-plan/products/by-brand/knollextra"
                  target="_blank"
                  >Visite o site da Knoll Extra
                  <span class="pressura21">↗</span></a
                >
              </li>
            </ul>
          </div>

          <Flickity
            :options="{ wrapAround: true, autoPlay: 6000, lazyLoad: true }"
            class="carousel"
          >
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/knollextra/carousel1.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/knollextra/carousel2.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/knollextra/carousel3.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/knollextra/carousel4.jpg').srcSet
                "
              />
            </div>
          </Flickity>

          <div class="knoll-brand-item-secondary-img">
            <img
              :data-srcset="
                require('~/assets/images/knollextra/desktop-management.jpg')
                  .srcSet
              "
              class="lazyload"
            />
          </div>

          <div class="knoll-brand-item-secondary-img">
            <img
              :data-srcset="
                require('~/assets/images/knollextra/lighting.jpg').srcSet
              "
              class="lazyload"
            />
          </div>
        </div>
      </div>

      <!-- KNOLL TEXTILES -->
      <div id="knolltextiles" class="knoll-brand-item">
        <div class="linha-div"></div>

        <div class="grid2">
          <h3 class="knoll-brand-item-title pressura40">Knoll Textiles</h3>
          <div class="knoll-brand-item-description graphik24">
            <ul>
              <li class="knoll-brand-item-description-text">
                <h4>
                  A KnollTextiles, fundada em 1947 por Florence Knoll, foi a
                  primeira empresa a pensar em tecidos para os interiores
                  comerciais. Hoje, a KnollTextiles é uma das maiores
                  fornecedoras têxteis da América do Norte, com produtos
                  desenvolvidos para saúde, hotelaria, bares e restaurantes,
                  educação, corporativo e interiores residenciais.
                </h4>
              </li>
              <li class="graphik18">
                <a
                  class="pink"
                  href="https://www.knoll.com/shop/knolltextiles"
                  target="_blank"
                  >Visite o site da Knoll Textiles
                  <span class="pressura21">↗</span></a
                >
              </li>
            </ul>
          </div>

          <Flickity
            :options="{ wrapAround: true, autoPlay: 6000, lazyLoad: true }"
            class="carousel"
          >
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/textiles/carousel1.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/textiles/carousel2.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/textiles/carousel3.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/textiles/carousel4.jpg').srcSet
                "
              />
            </div>
          </Flickity>
        </div>
      </div>

      <!-- MUUTO -->
      <div id="muuto" class="knoll-brand-item">
        <div class="linha-div"></div>

        <div class="grid2">
          <h3 class="knoll-brand-item-title pressura40">Muuto</h3>
          <div class="knoll-brand-item-description graphik24">
            <ul>
              <li class="knoll-brand-item-description-text">
                A Muuto está enraizada na tradição de design escandinavo
                caracterizada por uma estética duradoura, funcionalidade,
                habilidade artesanal e uma expressão honesta. Expandindo esta
                herança com materiais, técnicas e pensamento criativo
                inovadores, nossa ambição é oferecer novas perspectivas sobre o
                design escandinavo. Na verdade, nosso nome, Muuto, vem de
                muutos, que significa nova perspectiva em finlandês.
                Selecionamos os principais designers contemporâneos que são
                fortes intérpretes de nossa filosofia e combinamos seus talentos
                com a apaixonada equipe criativa da Muuto. Você conhecerá nosso
                design porque ele tem muutos: objetos tornados sublimes por meio
                de novas perspectivas, apreciados em todo o mundo, representando
                o melhor do design escandinavo hoje.
              </li>
              <li class="graphik18">
                <a class="pink" href="https://muuto.com" target="_blank"
                  >Visite o site da Muuto
                  <span class="pressura21"
                    ><span class="pressura21">↗</span></span
                  ></a
                >
              </li>
            </ul>
          </div>

          <Flickity
            :options="{ wrapAround: true, autoPlay: 6000, lazyLoad: true }"
            class="carousel"
          >
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/muuto/carousel1.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/muuto/carousel2.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/muuto/carousel3.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/muuto/carousel4.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/muuto/carousel5.jpg').srcSet
                "
              />
            </div>
          </Flickity>

          <div class="knoll-brand-item-secondary-img">
            <img
              :data-srcset="require('~/assets/images/muuto/muuto1.jpg').srcSet"
              class="lazyload"
            />
          </div>

          <div class="knoll-brand-item-secondary-img">
            <img
              :data-srcset="require('~/assets/images/muuto/muuto2.jpg').srcSet"
              class="lazyload"
            />
          </div>
        </div>
      </div>

      <!-- SPINNEYBACK -->
      <div id="spinneyback" class="knoll-brand-item">
        <div class="linha-div"></div>

        <div class="grid2">
          <h3 class="knoll-brand-item-title pressura40">Spinneyback</h3>
          <div class="knoll-brand-item-description graphik24">
            <ul>
              <li class="knoll-brand-item-description-text">
                <h4>
                  Spinneybeck é reconhecida como a principal fornecedora de
                  couro de alta qualidade para arquitetos e designers de
                  interiores. Ao longo das décadas, a empresa evoluiu de um
                  fornecedor de couro italiano tingido com anilina integral para
                  estofados e interiores de aeronaves a um fabricante pioneiro
                  de produtos arquitetônicos em couro e muito mais.
                </h4>
              </li>
              <li class="graphik18">
                <a
                  class="pink"
                  href="https://www.knoll.com/design-plan/products/by-brand/spinneybeck-design"
                  target="_blank"
                  >Visite o site da Spinneyback
                  <span class="pressura21">↗</span></a
                >
              </li>
            </ul>
          </div>

          <Flickity
            :options="{ wrapAround: true, autoPlay: 6000, lazyLoad: true }"
            class="carousel"
          >
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/spinneyback/carousel1.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/spinneyback/carousel2.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/spinneyback/carousel4.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/spinneyback/carousel5.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/spinneyback/carousel6.jpg').srcSet
                "
              />
            </div>
          </Flickity>

          <div class="knoll-brand-item-secondary-img">
            <img
              :srcset="
                require('~/assets/images/spinneyback/spinneyback2.jpg').srcSet
              "
            />
          </div>

          <div class="knoll-brand-item-secondary-img">
            <img
              :data-srcset="
                require('~/assets/images/spinneyback/spinneyback1.jpg').srcSet
              "
              class="lazyload"
            />
          </div>
        </div>
      </div>

      <!-- ROCKWELL UNSCRIPTED -->
      <div id="rockwell" class="knoll-brand-item">
        <div class="linha-div"></div>

        <div class="grid2">
          <h3 class="knoll-brand-item-title pressura40">Rockwell Unscripted</h3>
          <div class="knoll-brand-item-description graphik24">
            <ul>
              <li class="knoll-brand-item-description-text">
                <h4>
                  Da parceria entre Knoll e David Rockwell, renomados por criar
                  lugares onde as pessoas desejam estar, surge uma experiência
                  de trabalho incomparável, projetada para permitir que a
                  espontaneidade se desenvolva e as pessoas completem a
                  história.
                </h4>
              </li>
              <li class="graphik18">
                <a
                  class="pink"
                  href="https://www.knoll.com/story/design-plan/rockwell-unscripted"
                  target="_blank"
                  >Visite o site da Rockwell Unscripted
                  <span class="pressura21">↗</span></a
                >
              </li>
            </ul>
          </div>

          <Flickity
            :options="{ wrapAround: true, autoPlay: 6000, lazyLoad: true }"
            class="carousel"
          >
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/rockwellunscripted/carousel1.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/rockwellunscripted/carousel2.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/rockwellunscripted/carousel3.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/rockwellunscripted/carousel4.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/rockwellunscripted/carousel5.jpg').srcSet
                "
              />
            </div>
          </Flickity>
        </div>
      </div>

      <!-- FILZFELT -->
      <div id="filzfelt" class="knoll-brand-item">
        <div class="linha-div"></div>

        <div class="grid2">
          <h3 class="knoll-brand-item-title pressura40">Filzfelt</h3>
          <div class="knoll-brand-item-description graphik24">
            <ul>
              <li class="knoll-brand-item-description-text">
                <h4>
                  Os produtos FilzFelt, incluindo soluções acústicas,
                  revestimentos de piso, painéis suspensos, painéis de parede e
                  feltro para jardim, são uma ótima maneira de introduzir cor,
                  textura e padrão em qualquer espaço, residencial ou
                  contratado. Além do amplo escopo de ofertas padrão, FilzFelt
                  está pronto para ajudar a criar soluções personalizadas para
                  qualquer projeto.
                </h4>
              </li>
              <li class="graphik18">
                <a
                  class="pink"
                  href="https://www.knoll.com/design-plan/products/by-brand/filzfelt-design"
                  target="_blank"
                  >Visite o site da Filzfelt
                  <span class="pressura21">↗</span></a
                >
              </li>
            </ul>
          </div>

          <Flickity
            :options="{ wrapAround: true, autoPlay: 6000, lazyLoad: true }"
            class="carousel"
          >
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/filzfelt/carousel1.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/filzfelt/carousel2.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/filzfelt/carousel3.jpg').srcSet
                "
              />
            </div>
          </Flickity>

          <div class="knoll-brand-item-secondary-img">
            <img
              :data-srcset="
                require('~/assets/images/filzfelt/filzfelt1.jpg').srcSet
              "
              class="lazyload"
            />
          </div>

          <div class="knoll-brand-item-secondary-img">
            <img
              :data-srcset="
                require('~/assets/images/filzfelt/filzfelt2.jpg').srcSet
              "
              class="lazyload"
            />
          </div>
        </div>
      </div>

      <!-- DATEWEISER -->
      <div id="dateweiser" class="knoll-brand-item">
        <div class="linha-div"></div>

        <div class="grid2">
          <h3 class="knoll-brand-item-title pressura40">Dateweiser</h3>
          <div class="knoll-brand-item-description graphik24">
            <ul>
              <li class="knoll-brand-item-description-text">
                <h4>
                  Para espaços de reuniões refinados e flexíveis que apresentam
                  uma ampla gama de acabamentos em madeira, metal, vidro e
                  pedra, DatesWeiser cria ambientes personalizados voltados para
                  o cliente com as proporções perfeitas e os melhores trabalhos
                  em equipe. De salas de conferências e reuniões a salas de
                  jantar, espaços colaborativos e suítes executivas, a abordagem
                  do DatesWeiser distingue a aparência de espaços construídos
                  para durar.
                </h4>
              </li>
              <li class="graphik18">
                <a
                  class="pink"
                  href="https://www.knoll.com/design-plan/products/by-brand/datesweiser"
                  target="_blank"
                  >Visite o site da Dateweiser
                  <span class="pressura21">↗</span></a
                >
              </li>
            </ul>
          </div>

          <Flickity
            :options="{ wrapAround: true, autoPlay: 6000, lazyLoad: true }"
            class="carousel"
          >
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/dateweiser/carousel1.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/dateweiser/carousel2.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/dateweiser/carousel3.jpg').srcSet
                "
              />
            </div>
            <div class="carousel-cell">
              <img
                :data-flickity-lazyload-srcset="
                  require('~/images/dateweiser/carousel4.jpg').srcSet
                "
              />
            </div>
          </Flickity>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.backgroundwhite {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: white;
  z-index: -1;
  margin-top: -415px;
}

.content {
  padding-top: 415px;
}

.servicos-title {
  grid-column: 1/3;
  margin-bottom: 39px;
}

.servicos-description {
  grid-column: 1/3;
  margin-bottom: 64px;
}

.knoll-history {
  grid-column: 1/2;
}

.profile-history {
  grid-column: 3/4;
}

.knoll-history {
  margin-bottom: 94px;
}

.designers-grid {
  grid-column: 1/4;
  margin-bottom: 73px;
}

.linha-div {
  grid-column: 1/4;
  height: 1px;
  background-color: #dedcdb;
  margin-bottom: 40px;
}

.title-history {
  grid-column: 1/3;
  grid-row: 1/4;
  margin-top: -7px;
  position: relative;
}

.title-history-title {
  margin-bottom: 20px;
}

.title-history-sticky {
  position: sticky;
  top: 28px;
}

.menu-anchor {
  grid-column: 1/2;
  grid-row: 2/99;
}

.knoll-brand-item {
  grid-column: 2/4;
  margin-bottom: 94px;
}

.knoll-brand-item-title {
  margin-top: -7px;
}

.menu-anchor li {
  margin-bottom: 4px;
}

.knoll-brand-item-description {
  margin: -7px 0 50px 0;
}

.knoll-brand-item-description-text {
  margin-bottom: 24px;
}

.carousel {
  grid-column: 1/3;
  margin-bottom: 36px;
}

.knoll-brand-item-secondary-description {
  align-self: end;
}

.img-description {
  margin-top: 17px;
}

@media screen and (max-width: 1020px) {
  .knoll-history {
    grid-column: 1/3;
    margin-bottom: 31px;
  }

  .profile-history {
    grid-column: 1/3;
  }

  .designers-grid {
    grid-column: 1/3;
    margin-bottom: 64px;
  }

  .title-history {
    grid-column: 1/3;
    grid-row: 1;
    margin-bottom: 32px;
  }

  .designer-item {
    margin-bottom: 0px;
  }

  .linha-div {
    grid-column: 1/3;
  }

  .menu-anchor {
    grid-column: 1/3;
    margin-bottom: 64px;
  }

  .knoll-brand-item {
    grid-column: 1/3;
    margin-bottom: 64px;
  }

  .knoll-brand-item-title {
    grid-column: 1/3;
    margin: 0 0 32px 0;
  }

  .knoll-brand-item-description {
    grid-column: 1/3;
    margin: -7px 0 50px 0;
  }

  .backgroundwhite {
    margin-top: -227px;
  }

  .content {
    padding-top: 157px;
  }
}
</style>

<script>
import DesignerItem from "~/components/DesignerItem.vue";
import MenuMobile from "~/components/MenuMobile.vue";

export default {
  components: {
    DesignerItem,
    MenuMobile
  },
  data() {
    return {
      title: "Knoll design"
    };
  },
  head() {
    return {
      title: this.title
    };
  }
};
</script>
