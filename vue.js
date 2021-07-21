

const app = new Vue({
    el:'#app',
    data:{
        tarefas:[
            'limpar a casa'
        ],
        campoTexto:''
    },
    methods:{
        adicionar(){
            this.tarefas.push(this.campoTexto)
        }
    }

})