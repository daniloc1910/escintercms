<template>
  <div class="content">
    <MenuMobile />

    <div class="grid3">
      <h1 class="servicos-title pressura60">
        A Escinter é uma empresa familiar fundada em 1991 com propósito de
        contribuir na construção de espaços corporativos de qualidade.
      </h1>
      <h2 class="servicos-title graphik24 gray">
        Nós acreditamos que o investimento na adequação destas áreas de
        trabalho, promove o aumento na qualidade de vida dos funcionários,
        melhorando sua saúde, bem estar e produtividade.
      </h2>

      <div class="linha-div"></div>

      <p class="sobre-description graphik18">
        Nosso objetivo, é realizar esta melhoria fornecendo produtos e serviços
        adequados para cada projeto, de forma que a experiência durante todo
        processo seja positiva e memorável.
        <br /><br />
        A qualidade do espaço de trabalho interfere diretamente na vida das
        pessoas e nossa missão é garantir que, ao final de cada implantação,
        todos os envolvidos neste processo sintam esta transformação.
      </p>

      <p class="sobre-description graphik18">
        Somos um time de pessoas que gostam do que fazem e de dedicação total a
        satisfação de nossos clientes. É sempre um prazer participar destes
        processos e ainda poder fazer amigos durante esta jornada.
      </p>

      <ul class="showroom-adress graphik16">
        <li>Nosso showroom em São Paulo</li>
        <li class="gray">Rua Wizard, 157</li>
        <li class="gray">Vila Madalena</li>
      </ul>

      <img
        class="img-showroom lazyload"
        :data-srcset="require('~/assets/images/escinter-showroom.png').srcSet"
      />
    </div>
  </div>
</template>

<style scoped>
.carousel-cell {
  width: calc((100% - 0px) / 3);
}

.content {
  padding-top: 415px;
  margin-bottom: 158px;
}

.servicos-title {
  grid-column: 1/3;
  margin-bottom: 32px;
}

.linha-div {
  grid-column: 1/4;
  height: 1px;
  background-color: #dedcdb;
}

.sobre-description {
  margin: 38px 0 34px 0;
}

.showroom-adress {
  grid-column: 1/2;
  align-self: end;
  padding-bottom: 40px;
}

.img-showroom {
  grid-column: 2/4;
  margin-bottom: 40px;
}

.nossas-marcas-title {
  grid-column: 1/3;
  margin: 31px 0 27px 0;
}

.nossas-marcas-description {
  grid-column: 1/3;
  margin-bottom: 123px;
}

.marcas {
  margin-bottom: 80px;
}

.last {
  margin-bottom: 80px;
}

.marca-item-title {
  margin-bottom: 20px;
}

.clientes-title {
  grid-column: 1/3;
  margin: 31px 0 81px 0;
}

.cliente-grid {
  grid-column: 1/4;
  margin-bottom: 80px;
}

.carousel-pag {
  grid-column: 1/4;
}

.grid3-projetos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 28px;
}

@media screen and (max-width: 1020px) {
  .carousel-cell {
    width: calc(100vw - 40px);
    margin-right: 20px;
  }

  .linha-div {
    grid-column: 1/3;
  }

  .sobre-description {
    grid-column: 1/3;
    margin: 38px 0 0px 0;
  }

  .showroom-adress {
    grid-column: 1/3;
    grid-row: 6;
  }

  .img-showroom {
    grid-column: 1/3;
    margin-top: 40px;
    margin-bottom: 16px;
  }

  .marcas {
    grid-column: 1/3;
    margin-bottom: 64px;
  }

  .cliente-grid {
    grid-column: 1/3;
  }

  .nossas-marcas-description {
    margin-bottom: 64px;
  }

  .content {
    padding-top: 157px;
  }
}
</style>

<script>
import MenuMobile from "~/components/MenuMobile.vue";
import ProjetoItem from "~/components/ProjetoItem.vue";

export default {
  components: {
    MenuMobile,
    ProjetoItem
  },
  data() {
    return {
      title: "Sobre"
    };
  },
  head() {
    return {
      title: this.title
    };
  }
};
</script>
