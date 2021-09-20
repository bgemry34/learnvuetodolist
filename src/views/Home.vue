<template>
  <div id="app">
    <AddTodo v-on:addTodo="addTodo" />
    <Todos v-bind:todos="todos" v-on:delTodo="delTodo" />
  </div>
</template>

<script>
import Todos from './../components/Todos';
import AddTodo from './../components/AddTodo';
import {fetchTodos, CreateTodo, DeleteTodo} from './../api/Todos'

export default {
  name: 'Home',
  components:{
    Todos,
    AddTodo
  },
  data : () => {
    return {
       todos:[
        //  {
        //    id:1,
        //    title:"Todo One",
        //    completed: false
        //  },
        //  {
        //    id:2,
        //    title:"Todo Two",
        //    completed: false
        //  },
        //  {
        //    id:3,
        //    title:"Todo Three",
        //    completed: true
        //  }
       ]
    }
  },
  methods:{
    async delTodo(id){
      if (confirm('Are you sure you want to delete this?')) {
      // Delete
      const res = await DeleteTodo(id)
      if(res.status == 200)
      this.todos = this.todos.filter(todo=>todo.id!=id)
      console.log('Thing was saved to the database.');
    }
    },
    async addTodo(todo){
      console.log('added')
      const res = await CreateTodo(todo);
      const {data} = res;
      if(res.status == 201){
        this.todos = [...this.todos, data];
      }
    }
  },
  created(){
    const fetchApi = async ()=>{
      const todoData = await fetchTodos();
      this.todos = todoData;
    }
    fetchApi();
  }
}
</script>

<style>
*{
  margin:0;
  padding: 0;
  box-sizing: 0;
  font-family: Arial, Helvetica, sans-serif;
}
/* #app {

} */
</style>
