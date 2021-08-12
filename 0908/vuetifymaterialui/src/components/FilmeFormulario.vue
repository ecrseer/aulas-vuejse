<template>
  <v-form class="form my-3">
    <Campo nome="Titulo" v-model="filme.titulo"></Campo>
    <Campo nome="Valor" v-model="filme.valor"></Campo>
    <Campo nome="Descrição" v-model="filme.descricao"></Campo>
    <button class="btn btn-success mt-3" @click="salvar">Salvar</button>
  </v-form>
</template>

<script>
import Campo from "@/components/Campo";

export default {
  name: 'FilmeFormulario',
  components:{Campo},
  props: {
    filme: Object
  },


  methods: {
    salvar(e) {
      e.preventDefault()
      this.$emit('salvou', this.filme)
    },

  }
}
</script>

<style scoped>

</style>
