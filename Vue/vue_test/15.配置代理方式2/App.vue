<template>
<div>
    <button @click="getStudents">点ar击获取学生信息</button>
    <button @click="getCars">点击获取车辆信息</button>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name:'App',
    methods: {
        getStudents(){
            //写上前缀/chenyi，就会去找配置代理，而不会去找public里面的
            axios.get('http://localhost:8080/chenyi/students').then(
                response=>{
                    console.log('请求成功了',response.data)
                },
                error=>{
                    console.log('请求失败了',error.message)
                }
            )
        },
        getCars(){
            //写上前缀/chen，就会去找配置代理，而不会去找public里面的
            axios.get('http://localhost:8080/chen/cars').then(
                response=>{
                    console.log('请求成功了',response.data)
                },
                error=>{
                    console.log('请求失败了',error.message)
                }
            )
        }
    },
}
</script>

<style>

</style>