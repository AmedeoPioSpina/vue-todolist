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
        toDoList: toDoListObj,
        inputValue: ""
      }
    },
    methods: {
        removeElementFunc(event){
            const textToDoListReference = this.toDoList.map(item => item.text)
            const liTarget = event.target.closest(".to-do-element");
            const pTarget = liTarget.querySelector("p");
            const indexToRemove = textToDoListReference.indexOf(pTarget.textContent);
            this.toDoList.splice(indexToRemove, 1);
        },
        addElementFunc(){
            this.toDoList.push({
                text: this.inputValue,
                done: false
            })
        }
    }
  }).mount('#app')