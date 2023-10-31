const { createApp } = Vue;

createApp({
  data() {
    return {
      list: [],
      newTask: "",
      message: "Inserisci un nuovo task che contenga almeno 5 caratteri",
      isError: false
    };
  },
  methods: {
    getTodoList() {
      console.log("lista");
      axios
        .get("server.php")
        .then((res) => {
          this.list = res.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    addTask() {
      console.log("task aggiunto");
      const data = new FormData();
      data.append("taskItem", this.newTask);

      if(this.newTask.length > 5) {
        this.isError;
        axios
        .post("server.php", data)
        .then((res) => {
          this.list = res.data;
          console.log(this.list);
          this.newTask = "";
        })
        .catch((e) => {
          console.log(e);
        });
      }else{
        this.isError = true;
      }
      
    },
    deleteTask(index) {
        console.log('task eliminato');
        const data = new FormData();
        data.append("deleteItem", index);
        axios
        .post("server.php", data)
        .then((res) => {
          this.list = res.data;
          console.log(this.list);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  },
  mounted() {
    console.log("prova");
    this.getTodoList();
  },
}).mount("#data");
