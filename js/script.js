const toDoListObj = [
    {
        text: "Devo fare questo",
        done: false
    },
    {
        text: "Devo andare lì",
        done: true
    },
    {
        text: "Devo comprare qualcosa",
        done: false
    },
]


const {createApp} = Vue;

createApp({
    data() {
      return {
        toDoList: toDoListObj
      }
    },
    methods: {
        removeElementFunc(event){
            
        }
    }
  }).mount('#app')