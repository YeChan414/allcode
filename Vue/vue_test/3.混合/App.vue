<template>
<div>
    <h1 ref="title">欢迎</h1>
    <button ref="but" @click="showDOM">点我输出上方的DOM</button>
    <student ref="sch" name="李四" :age="18"></student>  <!-- 这里可以设置props里面属性的值 -->
</div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'
export default {
    name:'App',
    components:{
        School,
        Student
    }
}
</script>

<style>

</style>