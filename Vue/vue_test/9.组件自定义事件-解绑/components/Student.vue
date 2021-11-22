<template>
    <div>
        <h2>学生姓名：{{studentName}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <button @click="sendStudentName">点击获取学生姓名</button>
        <button @click="unbind">解绑事件</button>
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
            this.$emit('chenyi',this.name)  //触发Student组件里面的chenyi事件 
        },
        unbind(){
            this.$off('chenyi')  //解绑一个自定义事件
            this.$off(['chenyi','chen'])  //解绑多个自定义事件
            this.$off()  //解绑所有自定义事件
        }
    },
}
</script>

<style>
    
</style>