<template>
  <v-container>
    <v-row class="text-center">

      <v-form>
        <v-input>
          <v-text-field
              v-model="teste"
              :counter="20"
              label="Exemplo2"
              required
          ></v-text-field>
        </v-input>

          <v-text-field
              v-model="teste"
              :counter="20"
              label="Exemplo"
              required
          ></v-text-field>bon


      </v-form>
<!--
      //exemplo gride filmes lista
      <v-col
          v-for="n in 24"
          :key="n"
          cols="4"
      >
        <v-card
            class="pa-2"
            outlined
            tile
        >
          filme
        </v-card>
      </v-col>
-->

      <div class="container py-3">
        <FilmeFormulario :filme="filme" @salvou="cadastra">

        </FilmeFormulario>

        <FilmeLista titulo="filmes em destaque">
          <FilmeItem v-for="ff in filmes" :filme="ff" @editar="edicao">
          </FilmeItem>
        </FilmeLista>



      </div>

    </v-row>
  </v-container>
</template>

<script>
import FilmeFormulario from "@/components/FilmeFormulario";
import FilmeLista from "@/components/FilmeLista";
import FilmeItem from "@/components/FilmeItem";
export default {
  name: 'HelloWorld',
  components:{FilmeFormulario,FilmeLista,FilmeItem},

  data: () => {
    return {
      teste: '',
      filme: {
        titulo: '234',
        valor: '1232222',
        descricao: 'ttt2222',
      },
      filmes: [],

    }
  },
  methods: {
    carregar() {
      // fetch('filmes.json').then(r => r.json()).then((dados) => {
      //   this.filmes = dados
      // })

      this.filmes = []

    },
    cadastra() {
      this.filmes.push(this.filme)
      this.filme = {}
    },
    edicao(filme) {
      this.filme = filme
    }
  },
  mounted() {
    this.carregar()
  },
}
</script>
