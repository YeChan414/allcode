<template>
    <div class="todo-footer">
        <label>
          <input type="checkbox"/>
        </label>
        <span>
          <span>已完成{{downTotal}}</span> / 全部{{todos.length}}
        </span>
        <button class="btn btn-danger">清除已完成任务</button>
      </div>
</template>

<script>
export default {
    name:'MyFooter',
    props:['todos'],
    computed:{
      downTotal(){
        /*
        let i = 0
        this.todos.forEach((todo) => {
          if(todo.done) i++
        });*/  //可以实现
        return this.todos.reduce((pre,todo)=>{
          return pre+(todo.done ? 1:0)  //第一次调用pre是0，返回值是1，下一次的pre是1，返回值是2，最后一次调用函数的返回值就是reduce的返回值
        },0)  //第一个参数是函数，第二个参数是统计的初始值，length有多长就调用多少次
      }
    }
}
</script>

<style>

</style>