<template>
<div>
  <h1>姓名：{{name}}</h1>   <!--这里不需要.value，vue会自动加-->
  <h1>年龄：{{age}}</h1>
  <button @click="changeInfo">修改个人信息</button>
  </div>
</template>

<script>
//引入ref，实现响应式数据
import {ref} from 'vue'
export default {
  name: 'App',
  setup(){
    let name = ref('张三')  //将数据都用ref包裹
    let age = ref(18)
    
    function changeInfo(){
      name.value='李四'    
      age.value=48      //用了ref后，数据会被封装成一个对象，所以要改变它的值，就得用.value
    }
    return {
      name,age,changeInfo
    }
  }
}
</script>
