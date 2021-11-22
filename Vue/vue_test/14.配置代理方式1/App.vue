<template>
<div>
    <button @click="getStudents">点击获取学生信息</button>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name:'App',
    methods: {
        getStudents(){
            //本来是找5000要students，但是开启了代理服务器，代理服务器跟浏览器一样是8080，所以写8080
            axios.get('http://localhost:8080/students').then(
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