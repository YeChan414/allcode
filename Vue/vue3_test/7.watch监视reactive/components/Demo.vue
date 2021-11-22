<template>
<div>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2>薪水：{{person.job.salary}}k</h2><br>
  <button @click="person.age++">点我让年龄加一</button><br><br>
  <button @click="person.job.salary++">点我让薪水增加</button><br>
  </div>
</template>

<script>
import {reactive,watch} from 'vue'
export default {
  name: 'Demo',
  setup(){
    let person = reactive({
        name:'张三',
        age:18,
        job:{
            salary:18
        }
    })

    /*
    监视reactive定义的数据：
        1.无法获取到oldValue
        2.默认开启深度监视
    */

    //监视reactive所定义的一个响应式数据的全部属性
    watch(person,(newValue)=>{
        console.log("person变了",newValue)
    },{deep:false})//此处deep:false无效

    //监视reactive所定义的一个响应式数据的一个属性
    watch(()=>person.job.salary,(newValue)=>{
        console.log("person的job的salary变了",newValue)
    })

    //监视reactive所定义的一个响应式数据的某些属性
    watch([()=>person.job.salary,()=>person.age],(newValue)=>{
        console.log("person的某些属性变了",newValue)
    })
    return {
      person
    }
  }
}
</script>
