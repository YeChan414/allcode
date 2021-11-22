<template>
<div>
  <h1>{{job.type}}</h1>
  <h1>{{job.salary}}</h1>
  <button @click="changeJob">修改工作信息</button>
  </div>
</template>

<script>
//引入ref，实现响应式数据
import {ref} from 'vue'
export default {
  name: 'App',
  setup(){
    let job = ref({   //用ref包裹对象
      type:'前端工程师',
      salary:"30k"
    })
    
    function changeJob(){ 
      job.value.type="后端工程师"   //处理对象类型时，首先要.value，即一上来就要.value
      job.value.salary="50k"
    }
    return {
      job,changeJob
    }
  }
}
</script>
