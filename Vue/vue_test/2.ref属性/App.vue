<template>
<div>
    <h1 ref="title">欢迎</h1>
    <button ref="but" @click="showDOM">点我输出上方的DOM</button>
    <School ref="sch"></School>
</div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'
export default {
    name:'App',
    components:{
        School,
        Student
    },
    methods:{
        showDOM(){
            console.log(this.$refs.title)  //获取真实DOM
            console.log(this.$refs.btn)  //获取真实DOM
            console.log(this.$refs.sch)  //School组件的实例对象，即vc
        }
    }
}
</script>

<style>

</style>