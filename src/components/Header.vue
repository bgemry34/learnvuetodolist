<template>
  <header>
      <h1 class="title" >Todos</h1>
      <div id="nav">
      <router-link class="link" to="/">Home</router-link> |
      <router-link class="link" to="/about">About</router-link>
      </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
 .title, #nav{
     text-align: center;
     background: #2c3e50;
     color:#f4f4f4;
     padding: 10px;
 }
 .link{
   text-decoration: none;
   color: #f4f4f4;
 }
</style>