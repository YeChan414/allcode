<template>
<div>
    <li>
          <label>
            <input type="checkbox" :checked="todoObj.done" @change="handleCheck(todoObj.id)"/>
            <span>{{todoObj.title}}</span>
          </label>
          <button class="btn btn-danger" @click="handleDelete(todoObj.id)">删除</button>
        </li>
        </div>
</template>

<script>
export default {
    name:'MyItem',
    props:['todoObj','checkTodo','deleteTodo'],
    methods: {
      //勾选或取消勾选
      handleCheck(id){
        //通过App组件将对应的todoObj的done取反
        this.checkTodo(id)
      },
      //删除
      handleDelete(id){
        if (confirm("确定删除吗?")){
          this.deleteTodo(id)
        }
      }
    },
}
</script>

<style>
    li:hover{
      background-color: #ddd;
    }
    li:hover button{
      display: block;
    }
</style>