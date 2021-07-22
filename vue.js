

const app = new Vue({
    el:'#app',
    data:{
        tarefas:[
            'limpar a casa',
            'lavar a louca'
        ],
        campoTexto:''
    },
    methods:{
        adicionar(){
            this.tarefas.push(this.campoTexto)
        },
        remover(indice){
            this.tarefas.splice(indice,1)
        },
        editar(indice){
            this.tarefas[indice] = this.campoTexto
        }

    }

})