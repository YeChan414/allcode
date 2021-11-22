<template>
    <div class="demo">
        <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>
<script>
export default {
    name:'School',   //组件的名字
    data(){
        return {schoolName:'南昌大学',address:'南昌'}
    }        
}
</script>
<style >
    .demo{
        background-color: cornflowerblue;
    }
</style>