<template>
    <div>
        <h2>学生姓名：{{studentName}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <button @click="sendStudentName">将学生姓名发送给学校</button>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'Student',
    data(){
        return {
            studentName:'YeChan',
            age:20
        }
    },
    methods: {
        sendStudentName(){
            //消息的发布
            pubsub.publish('hello',666)  //消息名和数据
        }
    },
}
</script>

<style>
    
</style>