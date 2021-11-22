<template>
    <div>
        <h2 @click="showname">学生姓名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
    </div>
</template>

<script>
import {hunhe} from "../mixin"
export default {
    name:'Student',
    data(){
        return {
        }
    },
    mixins:[hunhe],
    props:['name','age']
}
</script>

<style>

</style>