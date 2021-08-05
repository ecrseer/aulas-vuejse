<template>
  <div class="container py-3">
    <FilmeFormulario :filme="filme" @salvou="cadastrar"></FilmeFormulario>

    <FilmeLista titulo="filmes em destaque">
      <FilmeItem v-for="ff in filmes" :filme="ff" @editar="editarFilme">
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

        filme:{
          titulo: '',
          valor: '',
          descricao:''
        },
        filmes:[]
      }

        },
  methods:{
    carregar(){
      this.filmes=[]

    },
    editarFilme(filmeP){
      this.filme = filmeP
    },
    cadastrar(){
      this.filmes.push(this.filme)

      this.filme = {}
    }
  },
  mounted(){

  }


}
</script>

<style>

</style>
