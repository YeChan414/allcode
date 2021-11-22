<template>
<div>
  <h1>{{job.type}}</h1>
  <h1>{{job.salary}}</h1>
  <h1>c:{{job.a.b.c}}</h1>
  <h1>{{hobby}}</h1>
  <button @click="change">修改工作信息</button>
  </div>
</template>

<script>
//引入reactive，实现响应式数据
//reactive用于处理对象和数组类型，而且是深层次处理
import {reactive} from 'vue'
export default {
  name: 'App',
  setup(){
    let job = reactive({   //用reactive包裹对象
      type:'前端工程师',
      salary:"30k",
      a:{
        b:{
          c:999
        }
      }
    })
    let hobby = reactive(['抽烟','喝酒','烫头'])
    
    function change(){ 
      job.type="后端工程师"   //用reactive后，不需要写.value
      job.salary="50k"
      job.a.b.c=111
      hobby[0]='学习'
    }
    return {
      job,hobby,change
    }
  }
}
</script>
