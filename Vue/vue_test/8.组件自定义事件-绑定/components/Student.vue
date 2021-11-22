<template>
    <div>
        <h2>学生姓名：{{studentName}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <button @click="sendStudentName">点击获取学生姓名</button>
    </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return {
            studentName:'YeChan',
            age:20
        }
    },
    //自定义事件不需要写props
    methods: {
        sendStudentName(){
            this.$emit('chenyi',this.studentName)  //触发Student组件里面的chenyi事件 
        }
    },
}
</script>

<style>
    
</style>