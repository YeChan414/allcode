<template>
<div>
  <h2>当前的值为：{{sum}}</h2><br>
  <button @click="sum++">点我让值加一</button><br>
  <h2>当前的信息为：{{msg}}</h2><br>
  <button @click="msg +='!'">点我让信息更改</button><br>
  </div>
</template>

<script>
import {ref,watch} from 'vue'
export default {
  name: 'Demo',
  setup(){
    let sum = ref(0)
    let msg = ref("你好啊")

/*   //监视ref所定义的一个响应式数据
    watch(sum,(newValue,oldValue)=>{
        console.log("sum变了",newValue,oldValue)
    })
*/

    //监视ref所定义的多个响应式数据
    watch([sum,msg],(newValue,oldValue)=>{
        console.log("sum或msg变了",newValue,oldValue)
    },{deep:true},{immediate:true})
    return {
      sum,msg
    }
  }
}
</script>
