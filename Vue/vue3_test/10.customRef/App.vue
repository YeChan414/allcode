<template>
<div>
  <input type="text" v-model="keyWord">
  <h1>{{keyWord}}</h1>
  </div>
</template>

<script>

import {customRef} from 'vue'
export default {
  name: 'App',
  setup(){
    function myRef(value){
      return customRef((track,trigger)=>{
        return {
          get(){
            track()  //通知vue追踪value的变化
            return value
          },
          set(newValue){
            value = newValue
            trigger()  //通知vue重新解析模板
          }
        }
      })
    }

    let keyWord = myRef('hello')
    
    return {
      keyWord
    }
  }
}
</script>

