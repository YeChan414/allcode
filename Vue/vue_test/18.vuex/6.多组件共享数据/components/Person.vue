<template>
  <div>
      <h1>人员列表</h1>
      <input type="text" v-model="name">
      <button @click="add">添加</button>
      <ul>
          <li v-for="p in personList" :key="p.id">{{p.name}}</li>
      </ul>
      <h4 style="color:red">上方组件的求和是：{{sum}}</h4>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name:'Person',
    data(){
        return {
            name:''
        }
    },
    computed:{
        personList(){
            return this.$store.state.personList
        },
        sum(){
            return this.$store.state.sum
        }
    },
    methods: {
        add(){
            const personObj = {id:nanoid(),name:this.name} 
            this.$store.commit('Add_Person',personObj)
            this.name=''  //清空输入框
        }
    },
}
</script>

<style>

</style>