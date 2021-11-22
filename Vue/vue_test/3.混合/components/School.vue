<template>
    <div class="demo">
        <h2 @click="showname">学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>
<script>
import {hunhe} from "../mixin"
export default {
    name:'School',   //组件的名字
    data(){
        return {name:'南昌大学',address:'南昌'}
    },
    mixins:[hunhe]
}
</script>
<style >
    .demo{
        background-color: cornflowerblue;
    }
</style>