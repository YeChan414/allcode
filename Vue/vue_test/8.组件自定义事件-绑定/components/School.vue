<template>
    <div>
        <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="sendSchoolName">点击获取学校名称</button>
    </div>
</template>
<script>
export default {
    name:'School',   //组件的名字
    data(){
        return {schoolName:'南昌大学',address:'南昌'}
    },
    props:['getSchoolName'],
    methods: {
        sendSchoolName(){
            this.getSchoolName(this.schoolName)
        }
    }, 
}
</script>
<style>
    
</style>