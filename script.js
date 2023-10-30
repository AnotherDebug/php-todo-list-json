const { createApp } = Vue;

createApp({
    data() {
        return {
            prova:'ciao',
        }
    },
    methods:{
        getTodoList() {
            console.log('lista');
            axios.get('server.php')
            .then(res => {
                console.log(res.data);
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