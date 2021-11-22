<template>
<div>
  姓: <input type="text" v-model="person.firstName">
  <br>
  名：<input type="text" v-model="person.lastName">
  <br>
  全名：{{person.fullName}}<br>
  全名：<input type="text" v-model="person.fullName">
  </div>
</template>

<script>
//computed变成一个组合
import {reactive,computed} from 'vue'
export default {
  name: 'Demo',
  setup(){
    let person = reactive({
      firstName:'张',
      lastName:'三'
    })
    //简写，没有考虑到计算属性修改的情况
/*    person.fullName = computed(()=>{
        return person.firstName + '-' + person.lastName
    })*/
    //完整写法
    person.fullName = computed({
        get(){
            return person.firstName + '-' + person.lastName
        },
        set(value){
            const nameArr = value.split('-')
            person.firstName=nameArr[0]
            person.lastName=nameArr[1]
        }
    })
       
    return {
      person
    }
  }
}
</script>
