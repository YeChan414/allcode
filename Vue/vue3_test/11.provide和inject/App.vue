<!-- 本案例用于实现爷爷和孙子组件的通信 -->
<template>
  <div class="app">
    <h1>我是祖先组件,{{car.name}}--{{car.price}}</h1>
    <Son></Son>
  </div>
  
</template>

<script>
import {reactive,provide} from 'vue'
import Son from './components/Son.vue'
export default {
  name:"App",
  components:{
    Son
  },
  setup(){
    let car = reactive({
      name:'奔驰',
      price:'40W'
    })
    provide('car',car)  //给后代组件传递数据
    return {
      car
    }
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