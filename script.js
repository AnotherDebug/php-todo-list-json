const { createApp } = Vue;

createApp({
    data() {
        return {
            prova:'ciao',
            list: []
        }
    },
    methods:{
        getTodoList() {
            console.log('lista');
            axios.get('server.php')
            .then(res => {
                this.list = res.data 
                console.log(this.list);
            })
            .catch(e => {
                console.log(e);
            })
        }
    },
    mounted() {
        console.log('prova');
        this.getTodoList();
    }
}).mount('#data');