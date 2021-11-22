<template>
    <div>
        <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>
<script>
import pubsub from 'pubsub-js'
export default {
    name:'School',   //组件的名字
    data(){
        return {schoolName:'南昌大学',address:'南昌'}
    },
    mounted(){
        //消息的订阅
        this.pId = pubsub.subscribe('hello',function(msgName,data){
            console.log('有人发布了hello消息，hello消息的回调执行了',msgName,data);
        })
    },
    beforeDestroy() {
        //取消订阅
        pubsub.unsubscribe(this.pId)  //通过id取消    
    },
}
</script>
<style>
    
</style>