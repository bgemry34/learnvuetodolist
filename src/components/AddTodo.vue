<template>
  <div>
      <form v-on:submit="SubmitTodo">
      <div class="col-2">
        <button class="btn-add">Add</button>
        <input v-model="title" type="text" placeholder="Enter Title...."/>
      </div>
      </form>
  </div>
</template>

<script>
export default {
    data(){
        return{
            title:''
        }
    },
    methods:{
        SubmitTodo(e){
            e.preventDefault();
            if(this.title == '')
            {
                alert('Title is require');
                return;
            }
            console.log('submited')
            const newTodo ={
                id:Math.floor((Math.random() * 9999999) + 4),
                title:this.title,
                completed:false
            }
            this.title = ''
            this.$emit('addTodo', newTodo);
        }
    }
}
</script>

<style scoped>
    .col-2{
        display:grid;
        grid-template-columns: 10% 90%;
    }
    .btn-add{
        color:#f4f4f4;
        border:0;
        background: #27ae60;
        padding: 10px;
    }
</style>