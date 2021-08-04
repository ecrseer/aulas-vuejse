<template>
  <FilmeFormulario :filmes="filmes"></FilmeFormulario>

    <FilmeLista titulo="filmes em destaque">
      <FilmeItem v-for="ff in filmes" :filme="ff">
      </FilmeItem>
    </FilmeLista>
</template>

<script>
import FilmeFormulario from "./components/FilmeFormulario";
import FilmeLista from "./components/FilmeLista";
import FilmeItem from "./components/FilmeItem";
export default {
  components: {FilmeItem, FilmeLista, FilmeFormulario}
}
</script>

<style>

</style>
