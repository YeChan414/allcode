<template>
<div>
    <ul class="todo-main">
        <my-item 
            v-for="todoObj in todos" 
            :key='todoObj.id' 
            :todoObj="todoObj" 
            :checkTodo="checkTodo"
            :deleteTodo="deleteTodo"></my-item>
        <!-- 这句话是先从todos中遍历出todoObj，然后将todoObj传给:todoObj，最后通过MyItem中的props来获取 -->
      </ul>
</div>
</template>

<script>
import MyItem from './MyItem.vue'
export default {
    name:'MyList',
    components:{
        MyItem
    },
    props:['todos','checkTodo','deleteTodo']
}
</script>

<style>

</style>