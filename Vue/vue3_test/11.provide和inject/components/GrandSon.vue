<template>
  <div class="grandson">
    <h1>我是孙组件,{{car.name}}--{{car.price}}</h1>
    </div>
</template>

<script>
import {inject} from 'vue'
export default {
  name:"GrandSon",
  setup(){
    let car = inject('car')
    return {car}
  }
}
</script>

<style>
.grandson{
  width:300px;
  height:100px;
  background-color:brown
}
</style>