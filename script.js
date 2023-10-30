const { createApp } = Vue;

createApp({
    data() {
        return {
            prova:'ciao',
        }
    },
    mounted() {
        console.log('prova');
    }
}).mount('#data');