<template>
  <v-app>
    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import listinhaC from "./assets/BibliotecaDosComponentes.js";

function importaTodosComponentes(){

    console.log('12039'+listinhaC[0])

}importaTodosComponentes()


export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => {
    return {
      filme: {
        titulo: 'teste2222',
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
};
</script>
