<template>
  <div>
      <p :class="{'isCompleted':todo.completed}" ><span>
          <input type="checkbox" :checked=todo.completed v-on:change="toggleComplete" ></span>
          {{todo.title}}
          <button @click="$emit('delTodo', todo.id)" class="delbtn">X</button>
      </p>
  </div>
</template>

<script>
export default {
    name:"TodoItem",
    props:["todo"],
    methods:{
        toggleComplete(){
            this.todo.completed = !this.todo.completed 
        }
    }
}
</script>

<style scoped>
    p{
        background-color: #7f8c8d;
        color: #f4f4f4;
        font-size: 1.25rem;
        padding: 10px;
    }
    .isCompleted{
        text-decoration: line-through;
    }
    .delbtn{
        background: rgba(255, 0, 0, 0.5);
        border: 0;
        color: #f4f4f4;
        padding: 5px 7px;
        border-radius: 100%;
        float:right;
        cursor: pointer;
    }
</style>