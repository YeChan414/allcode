<template>
<div>
  <h1>{{type}}</h1>
  <h1>{{salary}}</h1>
  <h1>c:{{c}}</h1>
  </div>
</template>

<script>
//引入reactive，实现响应式数据
//reactive用于处理对象和数组类型，而且是深层次处理
import {reactive, toRef} from 'vue'
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

    return {
      type:toRef(job,'type'),   //使用toRef，这样就不用在模板中写job.
      salary:toRef(job,'salary'),
      c:toRef(job.a.b,'c')
    }
  }
}
</script>
