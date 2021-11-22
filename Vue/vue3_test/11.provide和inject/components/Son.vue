<template>
  <div class="son">
      <h1>我是子组件</h1>
      <GrandSon></GrandSon>
      </div>
  
</template>

<script>
import GrandSon from './GrandSon.vue'
export default {
  name:"Son",
  components:{
      GrandSon
  }
}
</script>

<style>
.son{
  width:400px;
  height:200px;
  background-color:greenyellow
}
</style>