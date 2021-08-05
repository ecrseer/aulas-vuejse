<template>
  <div class="form my-3">

    <Campo nome="Titulo" v-model="formulario.titulo"></Campo>
    <Campo nome="Valor" v-model="formulario.valor"></Campo>
    <Campo nome="Descrição" v-model="formulario.descricao"></Campo>
    <button class="btn btn-success mt-3" @click="salvar">Salvar</button>
  </div>
</template>

<script>
import Campo from "./Campo.vue";
export default {
  name: "FilmeFormulario",
  components: {Campo}
}
</script>

<style scoped>

</style>