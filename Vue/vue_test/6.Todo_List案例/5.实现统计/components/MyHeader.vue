<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add"/>
    </div>
</template>

<script>
import {nanoid} from 'nanoid'  //用于生成唯一的id
export default {
    name:'MyHeader',
    methods: {
        add(e){
            /* 将用户的输入封装成一个对象 */
            const todoObj = {id:nanoid(),title:e.target.value,done:false}
            this.addTodo(todoObj)
        }
    },
    props:['addTodo']
}
</script>

<style>

</style>