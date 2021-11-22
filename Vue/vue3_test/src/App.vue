<template>
  <div class="app">
    <h1>我是祖先组件</h1>
    <Son></Son>
  </div>
  
</template>

<script>
import Son from './components/Son.vue'
export default {
  name:"App",
  components:{
    Son
  }
}
</script>

<style>
.app{
  width:500px;
  height:300px;
  background-color: gray;
}
</style>