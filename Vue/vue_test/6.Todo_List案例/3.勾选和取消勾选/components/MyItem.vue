<template>
<div>
    <li>
          <label>
            <input type="checkbox" :checked="todoObj.done" @change="handleCheck(todo.id)"/>
            <span>{{todoObj.title}}</span>
          </label>
          <button class="btn btn-danger">删除</button>
        </li>
        </div>
</template>

<script>
export default {
    name:'MyItem',
    props:['todoObj','checkTodo'],
    methods: {
      handleCheck(id){
        //通过App组件将对应的todoObj的done取反
        this.checkTodo(id)
      }
    },
}
</script>

<style>
    
</style>