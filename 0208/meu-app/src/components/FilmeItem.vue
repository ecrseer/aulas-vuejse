<template>
  <div class="col">
    <div class="card mb-4 rounded-3 shadow-sm">
      <div class="card-header py-3">
        <h4 class="my-0 fw-normal">{{ filme.titulo }}</h4>
      </div>
      <FilmeBody :filme="filme" v-on:click="selecionaFilme(filme)"></FilmeBody>
    </div>
  </div>
</template>

<script>
import FilmeBody from "./FilmeBody.vue";
export default {
  name: "FilmeItem",
  components: {FilmeBody},
  props:{
    filme: Object
  },
  methods:{
    selecionaFilme(filmeP){
      this.$emit('isFilmeSelecionado',filmeP)
    }
  }

}
</script>

<style scoped>

</style>