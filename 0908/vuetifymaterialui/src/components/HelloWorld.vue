<template>
  <v-container>
    <v-row class="text-center">

        <FilmeFormulario :filme="filme" @salvou="cadastra">

        </FilmeFormulario>

        <FilmeLista titulo="filmes em destaque">
          <FilmeItem v-for="ff in filmes" :filme="ff" @editar="edicao">
          </FilmeItem>
        </FilmeLista>


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
      filmes: [
        { "titulo": "erigoso gato",
          "valor": "1232222",
          "descricao": "cuidado"
        }
      ],

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
