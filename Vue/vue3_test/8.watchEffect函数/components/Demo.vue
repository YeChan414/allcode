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
import {reactive,watchEffect} from 'vue'
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

    watchEffect(()=>{
        //想监视谁就把谁放在里面
        const x1 = person.age
        const x2 = person.job.salary
        console.log('watchEffect所指定的函数回调执行了',x1,x2)
    })
    return {
      person
    }
  }
}
</script>
