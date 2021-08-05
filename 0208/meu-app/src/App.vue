<template>
  <div class="container py-3">
    <FilmeFormulario :filmes="filmes"></FilmeFormulario>

    <FilmeLista titulo="filmes em destaque">
      <FilmeItem v-for="ff in filmes" :filme="ff">
      </FilmeItem>
    </FilmeLista>
  </div>
</template>

<script>
import FilmeFormulario from "./components/FilmeFormulario.vue";
import FilmeLista from "./components/FilmeLista.vue";
import FilmeItem from "./components/FilmeItem.vue";
export default {

  components: {FilmeItem, FilmeLista, FilmeFormulario},
    data:()=>{
      return{
        filme:{}
      }

        },
  methods:{
    carregar(){

    }
  },
  mounted(){

  }


}
</script>

<style>

</style>
